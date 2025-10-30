# Ứng Dụng Cơ Thể Con Người

Ứng dụng web tương tác giúp người dùng tìm hiểu về các bệnh và vị trí ảnh hưởng trên cơ thể con người.

## Tính năng

### 🔍 Tìm kiếm bệnh
- Nhập tên bệnh để xem vị trí đau/ảnh hưởng trên cơ thể
- Các vùng bị ảnh hưởng sẽ được đánh dấu màu đỏ với hiệu ứng nhấp nháy
- Hiển thị thông tin chi tiết về bệnh

### 👁️ Chế độ xem đa dạng
Người dùng có thể chuyển đổi giữa 5 chế độ xem khác nhau:

1. **Bình thường** - Hiển thị cơ thể người bình thường với các bộ phận và nội tạng
2. **Xương** - Hiển thị hệ thống xương (bộ xương)
3. **Cơ bắp** - Hiển thị hệ thống cơ bắp
4. **Mạch máu** - Hiển thị hệ thống tuần hoàn (tim và mạch máu)
5. **Trong suốt** - Hiển thị dạng trong suốt với các cơ quan nội tạng nổi bật

### 📚 Cơ sở dữ liệu bệnh
Ứng dụng bao gồm thông tin về nhiều bệnh phổ biến:
- Đau đầu, đau nửa đầu (migraine)
- Đau tim, đau ngực
- Viêm phổi, hen suyễn
- Đau dạ dày, viêm dạ dày
- Đau gan, viêm gan
- Đau thận, sỏi thận
- Đau bụng, viêm ruột thừa
- Đau vai, đau tay, đau chân
- Đau lưng, thoát vị đĩa đệm
- Cảm cúm
- Và nhiều bệnh khác...

## Cách sử dụng

1. **Mở file `index.html`** trong trình duyệt web

2. **Tìm kiếm bệnh:**
   - Nhập tên bệnh vào ô tìm kiếm (ví dụ: "đau đầu", "đau tim", "viêm phổi")
   - Nhấn nút "Tìm kiếm" hoặc phím Enter
   - Các vùng bị ảnh hưởng sẽ được đánh dấu màu đỏ trên cơ thể

3. **Chuyển đổi chế độ xem:**
   - Nhấn vào các nút: Bình thường, Xương, Cơ bắp, Mạch máu, hoặc Trong suốt
   - Các vùng được đánh dấu sẽ được duy trì khi chuyển đổi chế độ xem

4. **Xóa kết quả:**
   - Nhấn nút "Xóa" để xóa tất cả các đánh dấu và bắt đầu tìm kiếm mới

## Cấu trúc dự án

```
.
├── index.html      # Giao diện chính của ứng dụng
├── styles.css      # CSS styling và animations
├── app.js          # JavaScript logic và database bệnh
└── README.md       # Tài liệu này
```

## Công nghệ sử dụng

- **HTML5** - Cấu trúc trang web
- **CSS3** - Styling, animations, và responsive design
- **JavaScript** - Logic ứng dụng và tương tác
- **SVG** - Đồ họa vector cho mô hình cơ thể người

## Tính năng nổi bật

### 🎨 Giao diện đẹp mắt
- Thiết kế hiện đại với gradient background
- Hiệu ứng hover và transitions mượt mà
- Animations cho các vùng được đánh dấu (pulse effect)
- Responsive design - hoạt động tốt trên mobile và desktop

### 🧠 Tìm kiếm thông minh
- Hỗ trợ nhiều từ khóa cho mỗi bệnh
- Tìm kiếm linh hoạt (không cần gõ đúng 100%)
- Gợi ý các bệnh phổ biến khi không tìm thấy

### 💡 Trải nghiệm người dùng
- Hiển thị thông tin chi tiết về từng bệnh
- Chuyển đổi mượt mà giữa các chế độ xem
- Duy trì đánh dấu khi chuyển đổi chế độ
- Giao diện trực quan, dễ sử dụng

## Mở rộng

Để thêm bệnh mới vào cơ sở dữ liệu, chỉnh sửa file `app.js`:

```javascript
diseaseDatabase = {
    'tên bệnh': {
        parts: ['phần_cơ_thể_1', 'phần_cơ_thể_2'],
        info: 'Thông tin về bệnh...',
        keywords: ['từ_khóa_1', 'từ_khóa_2']
    }
}
```

## Lưu ý

- Ứng dụng này chỉ mang tính chất tham khảo và giáo dục
- Không thay thế cho chẩn đoán y khoa chuyên nghiệp
- Khi có triệu chứng nghiêm trọng, hãy đến gặp bác sĩ ngay lập tức

## License

MIT License - Xem file LICENSE để biết thêm chi tiết.

---

**Phát triển bởi:** Claude Code
**Phiên bản:** 1.0.0
