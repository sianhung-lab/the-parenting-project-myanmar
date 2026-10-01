/**
 * =====================================================================
 * THE PARENTING PROJECT MYANMAR — GOOGLE SHEETS LIVE DATA RECEIVER
 * An initiative of CBN Asia · Family Discipleship Ministry
 * (With Built-In Intelligent Deduplication Guard)
 * =====================================================================
 * 
 * HOW TO UPDATE YOUR SCRIPT IN GOOGLE SHEETS (Takes 30 seconds):
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1Sb8zKzZPEtm0a8mQdo2JpUd4G7_zpF1dBTtwC5S45KU/edit
 * 2. In the top menu, go to "Extensions" > "Apps Script"
 * 3. Select all code in the editor, delete it, and PASTE THIS ENTIRE FILE.
 * 4. Click the "Save" (💾 icon) at the top.
 * 5. Click the blue "Deploy" button (top right) > "Manage deployments".
 * 6. Click the pencil icon (Edit) on the active deployment, set Version to "New version", and click "Deploy".
 * That's it! Duplicate rows will be automatically blocked permanently!
 */

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "online",
    message: "The Parenting Project Myanmar Data Webhook is active and listening with Deduplication Guard."
  })).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  // Wait up to 10 seconds for lock to prevent simultaneous write race conditions
  lock.tryLock(10000);

  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    // Parse incoming data from website or phone app form
    var data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        data = e.parameter;
      }
    } else {
      data = e.parameter;
    }

    var now = new Date();
    var timestamp = Utilities.formatDate(now, "Asia/Yangon", "yyyy-MM-dd HH:mm:ss");
    var type = (data.type || "registration").toLowerCase();

    // ==========================================
    // 1. USER LOGIN & ACTIVITY TAB
    // ==========================================
    if (type === "login") {
      var loginSheet = ss.getSheetByName("User Logins & Activity");
      if (!loginSheet) {
        loginSheet = ss.insertSheet("User Logins & Activity");
        var logHeaders = ["Timestamp", "Display Name", "Email / Account", "Church / School", "Role", "Platform"];
        loginSheet.appendRow(logHeaders);
        var hRange = loginSheet.getRange(1, 1, 1, logHeaders.length);
        hRange.setBackground("#003087");
        hRange.setFontColor("#FFFFFF");
        hRange.setFontWeight("bold");
        hRange.setFontFamily("Plus Jakarta Sans");
        loginSheet.setFrozenRows(1);
      }

      var loginEmail = (data.email || "").toString().trim().toLowerCase();
      var loginName = (data.displayName || data.coordName || "Facilitator").toString().trim();

      // Deduplication Guard for Logins: Check last 15 rows for same user in last 60 seconds
      var loginLastRow = loginSheet.getLastRow();
      if (loginLastRow > 1) {
        var lCheckCount = Math.min(loginLastRow - 1, 15);
        var lStartRow = loginLastRow - lCheckCount + 1;
        var recentLogins = loginSheet.getRange(lStartRow, 1, lCheckCount, loginSheet.getLastColumn()).getValues();

        for (var li = recentLogins.length - 1; li >= 0; li--) {
          var lRow = recentLogins[li];
          var exTime = new Date(lRow[0]);
          var exName = (lRow[1] || "").toString().trim();
          var exEmail = (lRow[2] || "").toString().trim().toLowerCase();

          var timeDiff = Math.abs(now.getTime() - exTime.getTime());
          var sameUser = (loginEmail && loginEmail === exEmail) || (loginName && loginName === exName);

          if (!isNaN(timeDiff) && timeDiff < 60000 && sameUser) {
            return ContentService.createTextOutput(JSON.stringify({
              result: "duplicate_skipped",
              type: "login",
              message: "Duplicate login skipped (already recorded within 60s)."
            })).setMimeType(ContentService.MimeType.JSON);
          }
        }
      }

      var loginRow = [
        timestamp,
        loginName,
        data.email || "",
        data.churchName || "Partner Church",
        data.role || "facilitator",
        data.platform || "Mobile App / Web"
      ];
      loginSheet.appendRow(loginRow);

      return ContentService.createTextOutput(JSON.stringify({
        result: "success",
        type: "login",
        timestamp: timestamp
      })).setMimeType(ContentService.MimeType.JSON);
    }

    // ==========================================
    // 2. PRAYER REQUESTS TAB
    // ==========================================
    if (type === "prayer") {
      var prayerSheet = ss.getSheetByName("Prayer Requests");
      if (!prayerSheet) {
        prayerSheet = ss.insertSheet("Prayer Requests");
        var prayHeaders = ["Timestamp", "Author", "City / Region", "Category", "Prayer Content"];
        prayerSheet.appendRow(prayHeaders);
        var pRange = prayerSheet.getRange(1, 1, 1, prayHeaders.length);
        pRange.setBackground("#0F2A4A");
        pRange.setFontColor("#FFFFFF");
        pRange.setFontWeight("bold");
        pRange.setFontFamily("Plus Jakarta Sans");
        prayerSheet.setFrozenRows(1);
      }

      var prayerAuthor = (data.author || "Anonymous Parent").toString().trim();
      var prayerText = (data.text || data.prayer || "").toString().trim();

      // Deduplication Guard for Prayers: Check last 15 rows for same content in last 60 seconds
      var prayLastRow = prayerSheet.getLastRow();
      if (prayLastRow > 1) {
        var pCheckCount = Math.min(prayLastRow - 1, 15);
        var pStartRow = prayLastRow - pCheckCount + 1;
        var recentPrayers = prayerSheet.getRange(pStartRow, 1, pCheckCount, prayerSheet.getLastColumn()).getValues();

        for (var pi = recentPrayers.length - 1; pi >= 0; pi--) {
          var pRow = recentPrayers[pi];
          var epTime = new Date(pRow[0]);
          var epAuthor = (pRow[1] || "").toString().trim();
          var epText = (pRow[4] || "").toString().trim();

          var pTimeDiff = Math.abs(now.getTime() - epTime.getTime());
          if (!isNaN(pTimeDiff) && pTimeDiff < 60000 && epAuthor === prayerAuthor && epText === prayerText) {
            return ContentService.createTextOutput(JSON.stringify({
              result: "duplicate_skipped",
              type: "prayer",
              message: "Duplicate prayer request skipped."
            })).setMimeType(ContentService.MimeType.JSON);
          }
        }
      }

      var prayerRow = [
        timestamp,
        prayerAuthor,
        data.city || "Myanmar",
        data.category || "General",
        prayerText
      ];
      prayerSheet.appendRow(prayerRow);

      return ContentService.createTextOutput(JSON.stringify({
        result: "success",
        type: "prayer",
        timestamp: timestamp
      })).setMimeType(ContentService.MimeType.JSON);
    }

    // ==========================================
    // 3. CHURCH & PARENT REGISTRATIONS TAB (Default)
    // ==========================================
    var sheet = ss.getSheetByName("Church Registrations");
    
    // Auto-create Sheet and Headers if sheet doesn't exist yet
    if (!sheet) {
      sheet = ss.insertSheet("Church Registrations");
      var headers = [
        "Registration ID",
        "Timestamp",
        "Church / School Name",
        "State / Region",
        "City / Township",
        "Denomination / Network",
        "Lead Pastor / Coordinator",
        "Official Email",
        "Phone / Viber Number",
        "Estimated Families",
        "Status"
      ];
      sheet.appendRow(headers);
      
      // Format Header Row (Navy Blue & Bold White)
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground("#0A2540");
      headerRange.setFontColor("#FFFFFF");
      headerRange.setFontWeight("bold");
      headerRange.setFontFamily("Plus Jakarta Sans");
      headerRange.setHorizontalAlignment("center");
      sheet.setFrozenRows(1);
    }

    var rowCount = sheet.getLastRow();

    // ==========================================
    // INTELLIGENT DEDUPLICATION GUARD FOR REGISTRATION
    // Check recent entries to block double-dispatches or multiple webhooks
    // ==========================================
    var incomingEmail = (data.email || "").toString().trim().toLowerCase();
    var incomingPhone = (data.phone || "").toString().replace(/[^0-9]/g, "");
    var incomingChurch = (data.churchName || "").toString().trim().toLowerCase();
    var incomingCoord = (data.coordName || data.coordinator || "").toString().trim().toLowerCase();

    if (rowCount > 1) {
      var checkRows = Math.min(rowCount - 1, 30); // Inspect the last 30 rows
      var startRowIdx = rowCount - checkRows + 1;
      var lastCol = Math.max(sheet.getLastColumn(), 11);
      var recentRows = sheet.getRange(startRowIdx, 1, checkRows, lastCol).getValues();

      for (var r = recentRows.length - 1; r >= 0; r--) {
        var row = recentRows[r];
        // Columns: 0: regId, 1: timestamp, 2: church, 3: region, 4: city, 5: denom, 6: coord, 7: email, 8: phone, 9: fam, 10: status
        var existingRegId = row[0];
        var existingTime = new Date(row[1]);
        var existingChurch = (row[2] || "").toString().trim().toLowerCase();
        var existingCoord = (row[6] || "").toString().trim().toLowerCase();
        var existingEmail = (row[7] || "").toString().trim().toLowerCase();
        var existingPhone = (row[8] || "").toString().replace(/[^0-9]/g, "");

        var diffMs = Math.abs(now.getTime() - existingTime.getTime());
        // Within 5 minutes (300,000 ms) window for identical submissions
        var isRecent = !isNaN(diffMs) && diffMs < 300000;

        var emailMatch = incomingEmail && (incomingEmail === existingEmail);
        var phoneMatch = incomingPhone && incomingPhone.length >= 6 && (incomingPhone === existingPhone);
        var churchCoordMatch = incomingChurch && incomingCoord && (incomingChurch === existingChurch) && (incomingCoord === existingCoord);

        if (isRecent && (emailMatch || phoneMatch || churchCoordMatch)) {
          return ContentService.createTextOutput(JSON.stringify({
            result: "duplicate_skipped",
            type: "registration",
            regId: existingRegId,
            message: "Duplicate registration ignored safely (already recorded as " + existingRegId + ")."
          })).setMimeType(ContentService.MimeType.JSON);
        }
      }
    }

    var regId = "TPP-MM-" + Utilities.formatString("%04d", rowCount);

    var newRow = [
      regId,
      timestamp,
      data.churchName || "",
      data.region || "",
      data.city || "",
      data.denom || "Independent / Non-denominational",
      data.coordName || data.coordinator || "",
      data.email || "",
      data.phone || "",
      data.fam || "10–25 Families",
      "New Registration ✅"
    ];

    sheet.appendRow(newRow);

    // Apply clean styling to the newly appended row
    var lastRowIdx = sheet.getLastRow();
    var rowRange = sheet.getRange(lastRowIdx, 1, 1, newRow.length);
    rowRange.setFontFamily("Plus Jakarta Sans");
    rowRange.setVerticalAlignment("middle");
    
    if (lastRowIdx % 2 === 0) {
      rowRange.setBackground("#F8FAFC");
    }

    return ContentService.createTextOutput(JSON.stringify({
      result: "success",
      type: "registration",
      regId: regId,
      timestamp: timestamp,
      message: "Registration successfully recorded into Google Sheet!"
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      result: "error",
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}
