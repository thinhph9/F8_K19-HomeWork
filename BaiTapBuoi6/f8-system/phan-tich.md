
Câu 1: Selector nào có độ ưu tiên cao nhất trong CSS?
Trả lời: Selector có độ ưu tiên cao nhất là Inline style.


Câu 2: Nếu một phần tử HTML có cả h1, .title, và #main cùng set color — selector nào thắng? Tại sao?
Trả lời: #main sẽ thắng. Vì độ ưu tiên của #main lớn hơn h1, .title


Câu 3: Nếu bạn thêm style="color: pink" trực tiếp vào phần tử ở Câu 2, kết quả thay đổi như thế nào?
Trả lời: Thì color sẽ là pink, vì sử dụng inline style nên được ưu tiên cao nhất


Câu 4: Tại sao theme.css có thể override style từ base.css? Điều kiện để override thành công là gì?
Trả lời: Điều kiện để override thành công là vị trí đặt link, ở đây bắt buộc theme.css phải đặt sau base.css


Câu 5: Trong project của bạn, có hai phần tử đều dùng class .title nhưng hiển thị màu khác nhau. Giải thích tại sao.
Trả lời: Tại vì tuy là hai class cùng là title nhưng mỗi phần tử đều có những thêm bớt thuộc tính khác nhau. 
Ví dụ: 
<h2 class="title" id="main">Tong quan</h2>
<h2 class="title">Gioi Thieu</h2>


Câu 6: Phần tử nào trong project của bạn có CSS phức tạp nhất? Liệt kê các selector tác động lên nó và giải thích selector nào thắng cuối cùng. 
Trả lời:
Ví dụ: phần tử này có nhiều selector tác động lên nó. 
    <h1 class="title" id="special" style="color: lawngreen;">DASHBOARD</h1>
    Phần tử này có: tag(h1) + class(.title) + id(#special) + inline style 
    Selector thắng: inline style
    Vì độ ưu tiên của inline style cao hơn h1, .title, #special 
    Màu hiển thị: lawngreen

