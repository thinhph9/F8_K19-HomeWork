# Bài Tập Buổi 18

## Bài 1:

1. student.name không bị thay đổi

2. student.parent.name bị thay đổi

3. Giải thích.

- student.name không bị đổi vì biến mentor được gán với object student bằng toán tử {...student} -> shallow copy -> tham chiếu đến địa chỉ ô nhớ khác ->
  nên khi object mentor thay đổi giá trị của thuộc tính (mentor.name = "bang") -> thì các thuộc tính của object student (student.name) không bị thay đổi.

- student.parent.name bị thay đổi vì object mentor được thực hiện shallow copy từ object student.
  Bên trong student có một object parent -> nên khi thực hiện shallow copy -> object parent vẫn tham chiếu đến cùng một địa chỉ ô nhớ -> cho nên khi thay đổi mentor.parent.name -> student.parent.name bị thay đổi theo.

## Bài 2:

1. student.parent.name không bị ảnh hưởng
2. cách này khác spread (const mentor = { ...student })
   Biến mentor được gán từ JSON.parse(JSON.stringify(student)) -> deep copy -> nên là copy toàn bộ object student, kể cả những object có trong student -> tạo ra một địa chỉ ô nhớ mới cho object mentor -> nên khi thay đổi (mentor.parent.name = "bo bang") -> thì student.parent.name không bị ảnh hưởng.

## Bài 3:

1. Mảng không bị thay đổi vì khi thực hiện const newStudents = [...students] -> newStudents là một mảng mới, được lưu ở địa chỉ ô nhớ mới.
2. Phần tử bên trong bị thay đổi vì newStudents cũng thực hiện shallow copy từ students -> object bên trong mảng vẫn tham chiếu đến cùng địa chỉ ô nhớ -> khi thay đổi newStudents thì students thay đổi theo.

## Bài 4:

- Kết quả là 999
- Vì newUser được thực hiện shallow copy từ user (const newUser = { ...user }) -> các object bên trong newUser vẫn tham chiếu đến cùng địa chỉ ô nhớ với object user -> thay đổi newUser thì user thay đổi theo.
