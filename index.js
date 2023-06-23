var arrNhanVien = [];
var arrInput = [
  "txtTaiKhoan",
  "txtHoTen",
  "txtEmail",
  "txtPassword",
  "txtNgayVoLam",
  "txtLuongCoBan",
  "txtChucVu",
  "txtGioLam",
];
var arrThongBao = [
  "tbTKNV",
  "tbTen",
  "tbEmail",
  "tbMatKhau",
  "tbNgay",
  "tbLuongCB",
  "tbChucVu",
  "tbGiolam",
];
//---Thêm nhân viên---//
function themNhanVien() {
  event.preventDefault;
  var nhanVien = new NhanVien();
  var valid = true;
  for (var i = 0; i < arrInput.length; i++) {
    valid &= checkInputRong(arrInput[i], arrThongBao[i]);
    var giaTri = document.getElementById(arrInput[i]).value;
    nhanVien[arrInput[i]] = giaTri;
  }
  valid &=
    checkTenNhanVien("txtHoTen", "tbTen") &
    checkTaiKhoan("txtTaiKhoan", "tbTKNV") &
    checkEmail("txtEmail", "tbEmail") &
    checkPassword("txtPassword", "tbMatKhau") &
    checkNgayThang("txtNgayVoLam", "tbNgay") &
    checkGioLam("txtGioLam", "tbGiolam") &
    checkMoney("txtLuongCoBan", "tbLuongCB");
  if (valid) {
    arrNhanVien.push(nhanVien);
    //render ra giao diện khi thêm nhân viên
    renderNhanVien();
    document.getElementById("formControl").reset();
    //lưu localStorage khi thêm nhân viên
    luuLocal();
  }
}
document.getElementById("btnThemNV").onclick = themNhanVien;

//---render nhân viên ---//
function renderNhanVien() {
  var content = "";
  for (var i = 0; i < arrNhanVien.length; i++) {
    var nhanVien = arrNhanVien[i];
    var newNhanVien = new NhanVien();
    Object.assign(newNhanVien, nhanVien);
    console.log(newNhanVien);
    console.log(nhanVien);
    content += `
    <tr>
		<td>${newNhanVien.txtTaiKhoan}</td>
		<td>${newNhanVien.txtHoTen}</td>
		<td>${newNhanVien.txtEmail}</td>
		<td>${newNhanVien.txtNgayVoLam}</td>
		<td>${newNhanVien.txtChucVu}</td>
		<td>${newNhanVien.tongTienLuong()}</td>
		<td>${newNhanVien.xepLoai()}</td>
        <td>
        <button onclick ="xoaNhanVien(${
          newNhanVien.txtTaiKhoan
        })" class="btn btn-danger">Xoá</button>
        <button id="btnSua" onclick="layThongTinNhanVien(${
          newNhanVien.txtTaiKhoan
        })" class="btn btn-warning">Chỉnh sửa</button>
	    </tr> `;
  }
  document.getElementById("tableDanhSach").innerHTML = content;
}

//--Xoá nhân viên----//
function xoaNhanVien(taiKhoan) {
  var index = -1;
  for (var i = 0; i < arrNhanVien.length; i++) {
    var nhanVien = arrNhanVien[i];
    if (nhanVien.txtTaiKhoan == taiKhoan) {
      index = i;
    }
  }
  arrNhanVien.splice(index, 1);
  //render lại ra giao diện sau khi xoá
  renderNhanVien();
  // lưu dữ liệu vô lại localStorage
  luuLocal();
}

//---Lưu localStorege----//
function luuLocal() {
  localStorage.setItem("arrNhanVien", JSON.stringify(arrNhanVien));
}

//lấy local
function layLocal() {
  var data = localStorage.getItem("arrNhanVien");
  if (data) {
    arrNhanVien = JSON.parse(data);
    renderNhanVien();
  }
}
//hàm lấy local chạy
layLocal();

//Sửa nhân viên
function layThongTinNhanVien(taiKhoan) {
  var nhanVien;
  for (var i = 0; i < arrNhanVien.length; i++) {
    if (arrNhanVien[i].txtTaiKhoan == taiKhoan) {
      nhanVien = arrNhanVien[i];
    }
  }
  for (var z = 0; z < arrInput.length; z++) {
    document.getElementById(arrInput[z]).value = nhanVien[arrInput[z]];
  }
  document.getElementById("btnThem").style.display = "inline-block";
  document.getElementById("myModal").classList.add("show");
  document.getElementById("myModal").style.display = "inline-block";
  document.getElementById("txtTaiKhoan").readOnly = true;
  var btnDong = document.getElementById("btnDong");
  btnDong.addEventListener("click", function () {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  });
}
//cập nhật thông tin nhan viên
function capNhatThongTinNhanVien() {
  var nhanVien = new NhanVien();
  console.log(nhanVien);
  var valid = true;
  for (var i = 0; i < arrInput.length; i++) {
    valid &= checkInputRong(arrInput[i], arrThongBao[i]);
    var valueInput = document.getElementById(arrInput[i]).value;
    nhanVien[arrInput[i]] = valueInput;
  }
  valid &=
    checkTenNhanVien("txtHoTen", "tbTen") &
    checkTaiKhoan("txtTaiKhoan", "tbTKNV") &
    checkEmail("txtEmail", "tbEmail") &
    checkPassword("txtPassword", "tbMatKhau") &
    checkNgayThang("txtNgayVoLam", "tbNgay") &
    checkGioLam("txtGioLam", "tbGiolam") &
    checkMoney("txtLuongCoBan", "tbLuongCB");
  // console.log(valueInput);
  var index = -1;
  for (var z = 0; z < arrNhanVien.length; z++) {
    if (arrNhanVien[z].txtTaiKhoan == nhanVien.txtTaiKhoan) {
      index = z;
    }
  }
  if(valid) {
    arrNhanVien[index] = nhanVien;
    console.log(arrNhanVien[index])
    document.getElementById("formControl").reset();
    document.getElementById("txtTaiKhoan").readOnly = false;
    renderNhanVien();
    luuLocal();
  }
}
document.getElementById("btnCapNhat").onclick = capNhatThongTinNhanVien;



