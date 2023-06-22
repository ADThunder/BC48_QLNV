//check input rỗng
function checkInputRong(idInput,idThongBao) {
    var valueInput = document.getElementById(idInput).value;
    if(valueInput == "") {
        document.getElementById(idThongBao).innerHTML = "Vui lòng không bỏ trống" ;
        return false;
    } else {
        document.getElementById(idThongBao).innerHTML = "" ;
        return true;
    }
}

//check tài khoản từ 4 đến 6 kí số 
function checkTaiKhoan(idInput, idThongBao) {
    var regrexTaiKhoan = /^[0-9]{4,6}$/ ;
    var valueInput = document.getElementById(idInput,idThongBao).value;
    if(!valueInput.match(regrexTaiKhoan) && valueInput !== "") {
        document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đúng tài khoản có 4 đến 6 kí tự là số";
        return false
    } else if(valueInput.match(regrexTaiKhoan) && valueInput !== "") {
        document.getElementById(idThongBao).innerHTML = "" ;
        return true;
    }
}

//check tên nhân viên
function checkTenNhanVien(idInput,idThongBao) {
    var regrexTen = /^[a-zA-Z'-'\sáàảãạăâắằấầặẵẫậéèẻ ẽẹếềểễệóòỏõọôốồổỗộ ơớờởỡợíìỉĩịđùúủũụưứ� �ửữựÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠ ƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼ� ��ỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞ ỠỢỤỨỪỬỮỰỲỴÝỶỸửữựỵ ỷỹ]*$/ ;
    var valueInput = document.getElementById(idInput).value;
    if(!regrexTen.test(valueInput) && valueInput !== "") {
        document.getElementById(idThongBao).innerHTML = "Tên nhập vô không đúng định dạng" ;
        return false
    } else if (regrexTen.test(valueInput) && valueInput !== "") {
        document.getElementById(idThongBao).innerHTML = "" ;
        return true
    }
}

//check định dạng email
function checkEmail(idInput,idThongBao) {
    var regrexEmail = /^[a-zA-Z0-9._%+-]{1,18}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,18}$/;
    var valueInput = document.getElementById(idInput).value;
    if(!regrexEmail.test(valueInput) && valueInput !== "") {
        document.getElementById(idThongBao).innerHTML = "vui lòng nhập đúng Email";
        return false;
    } else if(regrexEmail.test(valueInput) && valueInput !== "") {
        document.getElementById(idThongBao).innerHTML = "" ;
        return true
    }
}
//check định dạng mật khâu
function checkPassword(idInput, idThongBao) {
    var regrexPass = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,10}$/ ;
    var valueInput = document.getElementById(idInput,idThongBao).value;
    if(!valueInput.match(regrexPass) && valueInput !== "" ) {
        document.getElementById(idThongBao).innerHTML = "Nhập mật khẩu có độ dài từ 6 đến 10 kí tự và có chứa 1 kí tự số, 1 kí tự in hoa và 1 kí tự đặc biệt"
        return false;
    } else if (valueInput.match(regrexPass) && valueInput !== "") {
        document.getElementById(idThongBao).innerHTML = "" ;
        return true
    }
}
//check định dạng ngày tháng
function checkNgayThang(idInput, idThongBao) {
    var regrexNgayThang = /^\d{2}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/ ;
    var valueInput = document.getElementById(idInput).value ;
    if(!regrexNgayThang.test(valueInput) && valueInput !== "") {
        document.getElementById(idThongBao).innerHTML = "Nhập đúng định dạng yy/mm/dd" ;
        return false ;
    } else if (regrexNgayThang.test(valueInput) && valueInput !== "") {
        document.getElementById(idThongBao).innerHTML = "" ;
        return true
    }
}
// check định dạng giờ làm
function checkGioLam(idInput, idThongBao) {
    var regrexGioLam = /^(8[0-9]|9[0-9]|1[0-9]{2}|200)$/;
    var valueInput = document.getElementById(idInput).value ;
    if(!regrexGioLam.test(valueInput) && valueInput !== "") {
        document.getElementById(idThongBao).innerHTML = "Nhập đúng số giờ làm từ 80 đến 200 giờ" ;
        return false
    } else if(regrexGioLam.test(valueInput) && valueInput !== "") {
        document.getElementById(idThongBao).innerHTML = "" ;
        return true
    }
}
