# Hỏi đáp nghĩa vụ quân sự Việt Nam

Website tổng hợp hỏi đáp về nghĩa vụ quân sự theo quy định mới nhất, cập nhật ngày 30/10/2026.

## Tính năng
- Trang nhiều mục: Trang chủ, Hỏi đáp, Công cụ, So sánh, Văn bản, Liên hệ
- Hỏi đáp có tìm kiếm không phân biệt dấu và lọc theo 6 nhóm chủ đề
- Công cụ tính tuổi nghĩa vụ và tính BMI
- Bảng so sánh nghĩa vụ quân sự, Công an, Dân quân tự vệ
- Giao diện sáng/tối tự động, dùng tốt trên điện thoại

## Cấu trúc thư mục
```
hoidap-nvqs/
├── index.html           # Trang chính
├── assets/
│   ├── style.css        # Giao diện
│   └──├── app.js        # Tìm kiếm, lọc, hiển thị hỏi đáp
│      └── tools.js      # Công cụ tính tuổi, BMI
├── data/
│   ├── qa.js             # Dữ liệu câu hỏi đáp
│   └── site.js           # Email, liên kết biểu mẫu đặt câu hỏi
├── .nojekyll             # Cho GitHub Pages
├── .gitignore
└── README.md
```

## Chạy thử
Mở `index.html` bằng trình duyệt, hoặc chạy server cục bộ:
```bash
python -m http.server 8000
```
Rồi truy cập http://localhost:8000

## Cấu hình liên hệ
Sửa `askUrl` (ví dụ liên kết Google Form) và `email` trong `data/site.js`.

## Thêm hoặc sửa câu hỏi
Mở `data/qa.js`, thêm một đối tượng vào mảng `QA`:
```js
{c:4, q:"Câu hỏi?", a:"<p>Câu trả lời (HTML).</p>", r:"Điều ... Luật ..."}
```
`c` là chỉ số nhóm trong mảng `CATS`.

## Triển khai lên GitHub Pages
1. Push toàn bộ thư mục lên nhánh `main`.
2. Settings > Pages > Deploy from a branch > `main` > `/ (root)`.
3. Trang chạy tại `https://<tên-người-dùng>.github.io/<tên-repo>/`.

## Căn cứ pháp lý
- Luật Nghĩa vụ quân sự 2015 (78/2015/QH13)
- Luật 98/2025/QH15 và Luật 14/2026/QH16 (hiệu lực 01/9/2026)
- Văn bản hợp nhất 133/2026/VBHN-LQ-VPQH
- Thông tư 148/2018/TT-BQP (sửa đổi bởi 68/2025/TT-BQP); Nghị định 218/2025/NĐ-CP

## Lưu ý
Nội dung chỉ mang tính tham khảo, không thay thế tư vấn pháp lý. Cần đối chiếu văn bản gốc khi áp dụng cho trường hợp cụ thể.
