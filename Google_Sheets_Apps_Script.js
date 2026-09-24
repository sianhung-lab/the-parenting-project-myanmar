/**
 * =====================================================================
 * THE PARENTING PROJECT MYANMAR — GOOGLE SHEETS LIVE DATA RECEIVER
 * An initiative of CBN Asia · Family Discipleship Ministry
 * =====================================================================
 * 
 * HOW TO SET THIS UP (Takes 1 minute):
 * 1. Open Google Sheets (https://sheets.new)
 * 2. Rename the Sheet to "The Parenting Project Myanmar Registrations"
 * 3. Go to "Extensions" > "Apps Script"
 * 4. Delete any code inside Code.gs, paste THIS entire file, and click "Save" (💾 icon)
 * 5. Click the blue "Deploy" button (top right) > "New deployment"
 * 6. Select type: "Web app"
 * 7. Set:
 *    - Description: "TPP Myanmar Form Webhook"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone" (Required so your website form can submit data)
 * 8. Click "Deploy" > "Authorize Access" (choose your Google account > Advanced > Go to Untitled project)
 * 9. Copy the "Web app URL" (looks like https://script.google.com/macros/s/.../exec)
 * 10. Paste this URL into your website's GOOGLE_SHEETS_WEBHOOK_URL setting!
 */

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "online",
    message: "The Parenting Project Myanmar Data Webhook is active and listening."
  })).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000); // Prevent concurrent write collisions

  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
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

    // Parse incoming data from website form
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
    var rowCount = sheet.getLastRow();
    var regId = "TPP-MM-" + Utilities.formatString("%04d", rowCount);

    var newRow = [
      regId,
      timestamp,
      data.churchName || "",
      data.region || "",
      data.city || "",
      data.denom || "Independent / Non-denominational",
      data.coordName || "",
      data.email || "",
      data.phone || "",
      data.fam || "10–25 Families",
      "New Registration"
    ];

    sheet.appendRow(newRow);

    // Apply clean styling to the newly appended row
    var lastRowIdx = sheet.getLastRow();
    var rowRange = sheet.getRange(lastRowIdx, 1, 1, newRow.length);
    rowRange.setFontFamily("Plus Jakarta Sans");
    rowRange.setVerticalAlignment("middle");
    
    // Light gray alternating row background
    if (lastRowIdx % 2 === 0) {
      rowRange.setBackground("#F8FAFC");
    }

    return ContentService.createTextOutput(JSON.stringify({
      result: "success",
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
