//1. CHỨC NĂNG BẢO MẬT
let loginAttempts = 0;
let isAuthenticated = false;

while (loginAttempts < 3) {
  let username = prompt("Mời bạn nhập tài khoản:");
  let password = prompt("Mời bạn nhập mật khẩu:");

  if (username === "admin" && password === "12345") {
    alert("Đăng nhập thành công!");
    isAuthenticated = true;
    break;
  } else {
    loginAttempts++;
    let remaining = 3 - loginAttempts;

    if (username !== "admin" && password !== "12345") {
      alert(`Sai cả tài khoản và mật khẩu! Bạn còn ${remaining} lần thử.`);
    } else if (username !== "admin") {
      alert(`Sai tài khoản! Bạn còn ${remaining} lần thử.`);
    } else {
      alert(`Sai mật khẩu! Bạn còn ${remaining} lần thử.`);
    }
  }
}

if (!isAuthenticated) {
  alert("Tài khoản đã bị khóa do nhập sai quá 3 lần!");
} else {

//2. MENU CHỨC NĂNG
  let choice;

  do {
    let menu = "--- HỆ THỐNG QUẢN TRỊ THƯ VIỆN ---\n";
    menu += "1. Phân loại mã số sách (Chẵn/Lẻ)\n";
    menu += "2. Thiết kế sơ đồ kho sách (Dạng lưới)\n";
    menu += "3. Dự toán phí bảo trì sách theo năm\n";
    menu += "4. Tìm mã số sách may mắn\n";
    menu += "5. Thoát\n";
    menu += "Vui lòng nhập lựa chọn của bạn (1-5):";

    choice = Number(prompt(menu));


    //CHỨC NĂNG 1
    if (choice === 1) {
      let totalBooks = 0;
      let evenBooks = 0;
      let oddBooks = 0;

      alert("Nhập các mã số sách (Nhập 0 để dừng):");

      while (true) {
        let bookId = Number(prompt("Nhập mã số sách:"));

        if (isNaN(bookId)) {
          alert("Vui lòng nhập số nguyên hợp lệ!");
          continue;
        }
        if (bookId === 0) break;

        totalBooks++;
        if (bookId % 2 === 0) evenBooks++;
        else oddBooks++;
      }

      console.log("--- Kết quả phân loại mã sách ---");
      console.log("Tổng số mã:", totalBooks);
      console.log("Số chẵn (Khoa học):", evenBooks);
      console.log("Số lẻ (Nghệ thuật):", oddBooks);
      alert("Đã phân loại xong! Xem Console (F12).");
    }


    //CHỨC NĂNG 2
    else if (choice === 2) {
      let rows = Number(prompt("Nhập số hàng của kho:"));
      let cols = Number(prompt("Nhập số cột của kho:"));

      if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
        alert("Số hàng và cột phải là số dương!");
      } else {
        console.log(`--- Sơ đồ kho ${rows} x ${cols} ---`);
        for (let i = 1; i <= rows; i++) {
          let rowLayout = "";
          for (let j = 1; j <= cols; j++) {
            let pos = `[${i}-${j}]`;
            if (i === j) pos += "(Kệ ưu tiên)";
            rowLayout += pos + "  ";
          }
          console.log(rowLayout);
        }
        alert("Đã in sơ đồ kho ra Console.");
      }
    }


    //CHỨC NĂNG 3
    else if (choice === 3) {
      let quantity = Number(prompt("Nhập số lượng sách:"));
      let costPerBook = Number(prompt("Nhập phí bảo trì / cuốn:"));
      let years = Number(prompt("Nhập số năm dự toán:"));

      if (isNaN(quantity) || isNaN(costPerBook) || isNaN(years)) {
        alert("Dữ liệu nhập phải là số!");
      } else {
        console.log("--- Dự toán phí bảo trì ---");
        for (let year = 1; year <= years; year++) {
          let totalCost = quantity * costPerBook;
          console.log(
            `Năm ${year}: ${totalCost.toLocaleString()} VNĐ (Đơn giá: ${costPerBook.toFixed(0)})`,
          );
          costPerBook *= 1.1;
        }
        alert("Đã hoàn thành dự toán (xem Console).");
      }
    }

    //CHỨC NĂNG 4
    else if (choice === 4) {
      let n = Number(prompt("Nhập N (từ 1 đến N):"));

      if (isNaN(n) || n <= 0) {
        alert("Vui lòng nhập số N dương!");
      } else {
        let count = 0;
        let list = "";

        console.log("--- Mã sách may mắn ---");
        for (let i = 1; i <= n; i++) {
          if (i % 3 === 0 && i % 5 !== 0) {
            list += i + " ";
            count++;
          }
        }

        console.log(list || "Không có mã phù hợp");
        console.log("Tổng số mã may mắn:", count);
        alert(`Tìm thấy ${count} mã may mắn (xem Console).`);
      }
    }

    //THOÁT
    else if (choice === 5) {
      alert("Hệ thống đang đăng xuất... Hẹn gặp lại!");
    } else {
      alert("Lựa chọn không hợp lệ!");
    }

  } while (choice !== 5);
}
