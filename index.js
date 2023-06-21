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
//---Thêm nhân viên---//
function themNhanVien() {
  var nhanVien = new NhanVien();
  for (var i = 0; i < arrInput.length; i++) {
    var giaTri = document.getElementById(arrInput[i]).value;
    nhanVien[arrInput[i]] = giaTri;
  }
  arrNhanVien.push(nhanVien);

  //render ra giao diện khi thêm nhân viên
  renderNhanVien();
  document.getElementById("formControl").reset();
  //lưu localStorage khi thêm nhân viên
  luuLocal();
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
        <button onclick="layThongTinNhanVien(${
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
  var nhanVien = new NhanVien() ;
  console.log(nhanVien);
  for(var i = 0; i < arrInput.length; i++) {
    var valueInput = document.getElementById(arrInput[i]).value ;
    nhanVien[arrInput[i]] = valueInput
  }
  console.log(valueInput)
  var index = -1 ;
  for(var z = 0; z < arrNhanVien.length; z++) {
    if(arrNhanVien[z].txtTaiKhoan == nhanVien.txtTaiKhoan) {
      index = z ;
    }
  }
  arrNhanVien[index] = nhanVien;
  document.getElementById("formControl").reset();
  document.getElementById("txtTaiKhoan").readOnly = false ;
  renderNhanVien();
  luuLocal();
}
document.getElementById("btnCapNhat").onclick = capNhatThongTinNhanVien;