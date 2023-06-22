function NhanVien() {
  this.txtTaiKhoan = "";
  this.txtHoTen = "";
  this.txtEmail = "";
  this.txtPassword = "";
  this.txtNgayVoLam = "";
  this.txtLuongCoBan = "";
  this.txtChucVu = "";
  this.txtGioLam = "";
  this.tongTienLuong = function () {
    var tongTienLuong = 0 ;
    if (this.txtChucVu == "Sếp") {
        tongTienLuong = Number(this.txtLuongCoBan) * 3 ;
    } else if (this.txtChucVu == "Trưởng phòng") {
        tongTienLuong = Number(this.txtLuongCoBan) * 2 ;
    } else if (this.txtChucVu == "Nhân viên") {
        tongTienLuong = Number(this.txtLuongCoBan) * 1 ;
    }
    return tongTienLuong
  }
  this.xepLoai = function () {
    if(this.txtGioLam >= 192 ) {
        return "Xuất sắc"
    } else if (this.txtGioLam >= 176) {
        return "Giỏi"
    } else if (this.txtGioLam >= 160) {
        return "Khá "
    } else if (this.txtGioLam < 160) {
        return "Trung bình"
    }
  }
}
