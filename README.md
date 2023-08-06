
BE
1. Nhập data vào mongoDB. (1 Point)
<!-- 
1.Chuẩn hóa các file json trước khi nhập vào db
2.Nhập lệnh tương ứng với từng file json:
mongoimport --db <db name> --collection <collection name> --file <file name>.json
-->

2. Viết api endpoint để lấy tất cả sản phẩm trong kho. (3 Points)
<!--routes/inventories.js
Inventories.find(null)
-->

3. Viết api để truy vấn chỉ nhận các sản phẩm có số lượng dưới 100. (2 Points)
<!--routes/inventories.js
Inventories.find({instock: {$lt: 100}})
-->

<!--
4. Tạo login api, sinh ra token khi user login. (2 Points)
 routes/login.js 
 
5. Bảo mật, chỉ user đã login mới xem được. (1 Points)

6. Tạo api nhận đơn hàng, có mô tả của từng sản phẩm (1 Points)
-->