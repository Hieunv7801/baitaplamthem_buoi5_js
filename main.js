/**
 * Mô hình 3 khối
 * Nhập vào:
 *  + Họ và tên
 *  + Tổng thu nhập năm
 *  + Người phụ thuộc
 * Xử lí
 *  + tổng thu nhập = 60 triệu => 0.05%
 *  + tổng thu nhập trên 60 đến 120 triệu => 0.1%
 *  + tổng thu nhập Trên 120 đến 210 => 0.15%
    + tổng thu nhập Trên 210 đến 384 => 0.20 %
    + tổng thu nhập Trên 384 đến 624 => 0.25%
    + tổng thu nhập Trên 624 đến 960 => 0.30%
    + tổng thu nhập Trên 960 => 0.35%
 Đầu ra:
    +  xuất thuế thu nhập cá nhân phải trả theo quy định
 */
var currentFormat = new Intl.NumberFormat("vn-VN");
function getMyEle(ele) {
    return document.getElementById(ele);
}
function tinhThue() {
    var thuNhap = getMyEle("money").value * 1;
    var soNguoiPhuThuoc = getMyEle("number").value * 1;
    var thueXuat = 0;
    var tongThu = thuNhap - 4000000 - soNguoiPhuThuoc * 1600000;
    if (tongThu <= 60000000) {
        thueXuat = tongThu * 0.05;
    } else if (60000000 < tongThu <= 120000000) {
        thueXuat = tongThu * 0.1;
    } else if (120000000 < tongThu <= 210000000) {
        thueXuat = tongThu * 0.15;
    } else if (210000000 < tongThu <= 384000000) {
        thueXuat = tongThu * 0.20;
    } else if (384000000 < tongThu <= 624000000) {
        thueXuat = tongThu * 0.25;
    } else if (624000000 < tongThu <= 960000000) {
        thueXuat = tongThu * 0.30;
    } else {
        thueXuat = tongThu * 0.35;
    }
    return thueXuat;
}
function tinh() {
    var thue = tinhThue();
    var name = getMyEle("name").value;
    getMyEle("thue").innerHTML = "Họ và tên: " + name + " <br> Số thuế phải đóng là: " + currentFormat.format(thue);
    getMyEle("thue").style.color = 'yellow';
}
/**
 * Đầu vào:
 *  + Mã khách hàng
 *  + Loại khách hàng
 *  + Số kết nối
 *  + Số kênh cao cấp
 * Xử lí: 
 *  + phi = phí xử lí + phí dịch vụ + kênh (nếu có)
 * Đầu ra:
 *  + phí
 *  + mã khách hàng
 */
 getMyEle("soKN").disabled = true;
function tinhPhi() {
    var loai = getMyEle("loai").value;
    var kenh = getMyEle("kenh").value*1;
    var phi = 0;
    switch (loai) {
        case "dan":
            phi = 4.5 + 20.5 + (7.5 * kenh);
            break;
        case "doanhnghiep":
            var KN = getMyEle("soKN").value*1;
            if(KN <= 10){
                phi = 15 + 75 + (50 * kenh);
            }else{
                phi = 15 + 75 + (50 * kenh) + (80 * KN);
            }
            break;
        default:
            break;
    }
    return phi;
}
function tinhTien(){
    var phi_cap = tinhPhi();
    getMyEle("tienCap").innerHTML = phi_cap+" $";
}
