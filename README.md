# Đập Chuột – Tiếng Trung Trí Tâm

Game đập chuột luyện từ vựng tiếng Trung (Giáo trình HSK và Giáo trình CĐ).
Toàn bộ game nằm trong một file `index.html`; từ vựng lấy từ Google Sheets.

## 1. Đưa game lên GitHub Pages

1. Đăng nhập GitHub → bấm **New repository**.
   - Repository name: ví dụ `dap-chuot`
   - Chọn **Public** → **Create repository**.
2. Trong repository mới, bấm **uploading an existing file** (hoặc **Add file → Upload files**).
   Kéo thả 3 file: `index.html`, `README.md`, `.nojekyll` → **Commit changes**.
   (Nếu máy ẩn file `.nojekyll` thì bỏ qua, game vẫn chạy.)
3. Vào **Settings → Pages**:
   - Source: **Deploy from a branch**
   - Branch: **main**, thư mục **/ (root)** → **Save**.
4. Đợi 1–2 phút, tải lại trang Settings → Pages để thấy địa chỉ game, dạng:
   `https://<tên-tài-khoản>.github.io/dap-chuot/`

## 2. Gắn sẵn link từ vựng cho mọi máy (nên làm)

Để học viên mở game là có từ vựng ngay, không cần cài đặt:

1. Trong Google Sheets: **Tệp → Chia sẻ → Phát hành lên web** → chọn đúng tab
   (`TuVung_HSK` hoặc `TuVung_CD`) → định dạng **CSV** → **Phát hành** → sao chép link.
2. Trên GitHub, mở `index.html` → bấm biểu tượng bút chì (**Edit**).
3. Nhấn Ctrl+F tìm `SHEET_LINKS`, sửa dòng:
   ```js
   const SHEET_LINKS = {hsk:'', cd:''};
   ```
   thành (dán link giữa hai dấu nháy đơn):
   ```js
   const SHEET_LINKS = {hsk:'https://docs.google.com/spreadsheets/d/e/.../pub?gid=...&single=true&output=csv', cd:'https://docs.google.com/spreadsheets/d/e/.../pub?gid=...&single=true&output=csv'};
   ```
4. Bấm **Commit changes**. Sau 1–2 phút game cập nhật.

Cách khác (không sửa code): mở game → bánh răng → Nguồn dữ liệu → dán link → Lưu →
**Sao chép địa chỉ chia sẻ cho học viên**, rồi gửi địa chỉ đó cho học viên.
Link dán trong Cài đặt chỉ lưu trên máy đang dùng.

## 3. Cập nhật

- **Thêm/sửa từ vựng:** sửa trực tiếp trong Google Sheets, không cần đụng tới GitHub.
  Game lấy bản mới mỗi lần mở (hoặc bấm "Tải lại cả hai" trong Cài đặt).
- **Cập nhật game:** tải `index.html` mới lên đè file cũ (**Add file → Upload files**).
  Nhớ dán lại link vào `SHEET_LINKS` nếu file mới chưa có.

## Ghi chú

- Phần Cài đặt cần mật khẩu giáo viên (giữ nguyên như bản đang dùng).
- Bảng xếp hạng chỉ lưu trong lần mở game trên máy đó (đóng thẻ là mất).
- Giọng đọc lấy từ trình duyệt; giọng tốt nhất trên Microsoft Edge hoặc Chrome.
