#!/usr/bin/env python3
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

wb = openpyxl.Workbook()

# ==========================================
# SHEET 1: Church Registrations
# ==========================================
ws1 = wb.active
ws1.title = "Church Registrations"
ws1.views.sheetView[0].showGridLines = True

# Colors (Brand Navy & Gold)
NAVY_FILL = PatternFill(start_color="0A2540", end_color="0A2540", fill_type="solid")
GOLD_FILL = PatternFill(start_color="F5A800", end_color="F5A800", fill_type="solid")
LIGHT_NAVY = PatternFill(start_color="F0F4F9", end_color="F0F4F9", fill_type="solid")
ACCENT_GREEN = PatternFill(start_color="E8F8EE", end_color="E8F8EE", fill_type="solid")

HEADER_FONT = Font(name="Segoe UI", size=11, bold=True, color="FFFFFF")
TITLE_FONT = Font(name="Segoe UI", size=15, bold=True, color="0A2540")
SUB_FONT = Font(name="Segoe UI", size=10, italic=True, color="555555")
BOLD_FONT = Font(name="Segoe UI", size=10, bold=True)
REG_FONT = Font(name="Segoe UI", size=10)

THIN_BORDER = Border(
    left=Side(style='thin', color='DDDDDD'),
    right=Side(style='thin', color='DDDDDD'),
    top=Side(style='thin', color='DDDDDD'),
    bottom=Side(style='thin', color='DDDDDD')
)

# Title Block
ws1.merge_cells("A1:K1")
ws1["A1"] = "The Parenting Project Myanmar — Partner Church Registration Database"
ws1["A1"].font = TITLE_FONT
ws1["A1"].alignment = Alignment(vertical="center")

ws1.merge_cells("A2:K2")
ws1["A2"] = "Official CBN Asia Family Discipleship Initiative · Data Collection & Tracking Portal"
ws1["A2"].font = SUB_FONT
ws1["A2"].alignment = Alignment(vertical="center")

ws1.row_dimensions[1].height = 28
ws1.row_dimensions[2].height = 18
ws1.row_dimensions[4].height = 26

# Headers
headers = [
    "Reg ID",
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
]

for col_idx, header in enumerate(headers, 1):
    cell = ws1.cell(row=4, column=col_idx, value=header)
    cell.font = HEADER_FONT
    cell.fill = NAVY_FILL
    cell.alignment = Alignment(horizontal="center" if col_idx in [1, 2, 4, 10, 11] else "left", vertical="center")

# Sample Realistic Data for Myanmar Churches
sample_rows = [
    ["TPP-MM-001", "2026-09-20 14:32", "Yangon Grace Baptist Church", "Yangon", "Insein", "Myanmar Baptist Convention (MBC)", "Rev. Dr. Khin Maung", "khinmaung@gracechurch.org", "+95 9 4210 12345", "26–50", "Verified"],
    ["TPP-MM-002", "2026-09-20 16:15", "Mandalay Emmanuel Christian Church", "Mandalay", "Chanayethazan", "Assemblies of God (AG)", "Pastor Aung San", "aungsan@emmanuelmdy.com", "+95 9 7985 67890", "51–100", "Contacted via Viber"],
    ["TPP-MM-003", "2026-09-21 09:20", "Taunggyi Living Word Fellowship", "Shan", "Taunggyi", "Independent Fellowship", "Pastor Sai Lone", "sai.lone@livingword.org", "+95 9 2501 23456", "10–25", "Training Scheduled"],
    ["TPP-MM-004", "2026-09-21 11:45", "Hakha Faith Baptist Church", "Chin", "Hakha", "Chin Baptist Convention (CBC)", "Pastor Thang Lian", "thang.lian@hakhachurch.org", "+95 9 7800 98765", "51–100", "Verified"],
    ["TPP-MM-005", "2026-09-21 15:10", "Myitkyina Hope Center Church", "Kachin", "Myitkyina", "Kachin Baptist Convention (KBC)", "Rev. Maran Seng", "maran.seng@hopecenter.org", "+95 9 4001 54321", "26–50", "New Registration"],
    ["TPP-MM-006", "2026-09-22 08:30", "Pathein Trinity Methodist Church", "Ayeyarwady", "Pathein", "Methodist Church of Myanmar", "Pastor Tin Hlaing", "tinhlaing@trinitypathein.org", "+95 9 9700 11223", "10–25", "Contacted via Viber"],
    ["TPP-MM-007", "2026-09-22 13:05", "Hpa-an Grace Community Church", "Kayin", "Hpa-an", "Kayin Baptist Convention", "Pastor Saw Eh Kaw", "sawehkaw@hpaanchurch.org", "+95 9 7990 33445", "100+", "Training Scheduled"],
    ["TPP-MM-008", "2026-09-22 17:40", "Mawlamyine Harvest Assembly", "Mon", "Mawlamyine", "Full Gospel Church", "Pastor Win Naing", "win.naing@harvestassembly.org", "+95 9 4280 99887", "26–50", "Verified"],
    ["TPP-MM-009", "2026-09-23 09:12", "Kalay Central Baptist Church", "Sagaing", "Kalaymyo", "Kalay Baptist Association", "Rev. Kap No", "kapno@kalaychurch.org", "+95 9 6900 55667", "51–100", "New Registration"],
    ["TPP-MM-010", "2026-09-23 10:05", "Bago City Light Church", "Bago", "Bago", "Presbyterian Church of Myanmar", "Pastor Myo Myint", "myomyint@bagochurch.org", "+95 9 7788 12345", "10–25", "New Registration"]
]

for r_idx, row in enumerate(sample_rows, 5):
    ws1.row_dimensions[r_idx].height = 20
    is_even = (r_idx % 2 == 0)
    for c_idx, val in enumerate(row, 1):
        cell = ws1.cell(row=r_idx, column=c_idx, value=val)
        cell.font = REG_FONT
        cell.border = THIN_BORDER
        cell.alignment = Alignment(vertical="center", horizontal="center" if c_idx in [1, 2, 4, 10, 11] else "left")
        if is_even:
            cell.fill = LIGHT_NAVY
        # Status column coloring
        if c_idx == 11:
            if val == "Verified":
                cell.fill = PatternFill(start_color="D4EDDA", fill_type="solid")
                cell.font = Font(name="Segoe UI", size=10, bold=True, color="155724")
            elif val == "Training Scheduled":
                cell.fill = PatternFill(start_color="CCE5FF", fill_type="solid")
                cell.font = Font(name="Segoe UI", size=10, bold=True, color="004085")
            elif val == "Contacted via Viber":
                cell.fill = PatternFill(start_color="FFF3CD", fill_type="solid")
                cell.font = Font(name="Segoe UI", size=10, bold=True, color="856404")
            elif val == "New Registration":
                cell.fill = PatternFill(start_color="F8D7DA", fill_type="solid")
                cell.font = Font(name="Segoe UI", size=10, bold=True, color="721C24")

# Auto-fit column widths
col_widths = {1: 14, 2: 18, 3: 35, 4: 16, 5: 18, 6: 32, 7: 26, 8: 30, 9: 20, 10: 18, 11: 22}
for c_idx, w in col_widths.items():
    ws1.column_dimensions[get_column_letter(c_idx)].width = w

# ==========================================
# SHEET 2: Data Analysis & Metrics Dashboard
# ==========================================
ws2 = wb.create_sheet(title="Analytics Dashboard")
ws2.views.sheetView[0].showGridLines = True

ws2.merge_cells("A1:G1")
ws2["A1"] = "The Parenting Project Myanmar — Executive Analytics & Regional Breakdown"
ws2["A1"].font = TITLE_FONT
ws2["A1"].alignment = Alignment(vertical="center")

ws2.row_dimensions[1].height = 28
ws2.row_dimensions[3].height = 24

# KPI Summary Cards
kpis = [
    ("Total Partner Churches", '=COUNTA(\'Church Registrations\'!C5:C100)', "A3:B3", "A4:B4"),
    ("Churches Verified", '=COUNTIF(\'Church Registrations\'!K5:K100, "Verified")', "C3:D3", "C4:D4"),
    ("Contacted via Viber", '=COUNTIF(\'Church Registrations\'!K5:K100, "Contacted via Viber")', "E3:F3", "E4:F4"),
]

for label, formula, merge_head, merge_val in kpis:
    ws2.merge_cells(merge_head)
    top_c = ws2[merge_head.split(':')[0]]
    top_c.value = label
    top_c.font = Font(name="Segoe UI", size=10, bold=True, color="FFFFFF")
    top_c.fill = NAVY_FILL
    top_c.alignment = Alignment(horizontal="center", vertical="center")
    
    ws2.merge_cells(merge_val)
    val_c = ws2[merge_val.split(':')[0]]
    val_c.value = formula
    val_c.font = Font(name="Segoe UI", size=16, bold=True, color="0A2540")
    val_c.fill = LIGHT_NAVY
    val_c.alignment = Alignment(horizontal="center", vertical="center")

ws2.row_dimensions[4].height = 36

# Regional Breakdown Table
ws2.cell(row=7, column=1, value="Region / State").font = HEADER_FONT
ws2.cell(row=7, column=1).fill = NAVY_FILL
ws2.cell(row=7, column=2, value="Partner Churches").font = HEADER_FONT
ws2.cell(row=7, column=2).fill = NAVY_FILL
ws2.cell(row=7, column=3, value="% of Total").font = HEADER_FONT
ws2.cell(row=7, column=3).fill = NAVY_FILL

regions = ["Yangon", "Mandalay", "Shan", "Chin", "Kachin", "Ayeyarwady", "Kayin", "Mon", "Sagaing", "Bago"]
for idx, r in enumerate(regions, 8):
    ws2.cell(row=idx, column=1, value=r).font = BOLD_FONT
    ws2.cell(row=idx, column=1).border = THIN_BORDER
    
    c_formula = ws2.cell(row=idx, column=2, value=f'=COUNTIF(\'Church Registrations\'!D5:D100, "{r}")')
    c_formula.font = REG_FONT
    c_formula.alignment = Alignment(horizontal="center")
    c_formula.border = THIN_BORDER
    
    pct_c = ws2.cell(row=idx, column=3, value=f'=B{idx}/$A$4')
    pct_c.number_format = '0.0%'
    pct_c.font = REG_FONT
    pct_c.alignment = Alignment(horizontal="center")
    pct_c.border = THIN_BORDER

# Column widths for Sheet 2
ws2.column_dimensions["A"].width = 24
ws2.column_dimensions["B"].width = 20
ws2.column_dimensions["C"].width = 18
ws2.column_dimensions["D"].width = 18
ws2.column_dimensions["E"].width = 22
ws2.column_dimensions["F"].width = 20

# Save Workbook
out_path = "The_Parenting_Project_Myanmar_Database.xlsx"
wb.save(out_path)
print(f"✅ Excel Database successfully created: {out_path}")
