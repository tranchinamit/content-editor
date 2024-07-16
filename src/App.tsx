import { useState } from "react";
import "./App.css";
import ContentEditor from "./components/ContentEditor";

function App() {
  const [count, setCount] = useState(0);
//     return (<>
//     <div dangerouslySetInnerHTML={{__html:`<h2 id="ftoc-heading-2-2" class="ftwp-heading ftwp-heading _mPS2id-t ftwp-heading mPS2id-target mPS2id-target-first" style="box-sizing: border-box; margin-top: 0px; margin-bottom: 0.5rem; line-height: 1.3; font-size: 1.2em; color: #212529; font-family: Tahoma, Arial, Helvetica, sans-serif; text-align: left;"><span style="box-sizing: border-box; font-weight: bolder; margin-bottom: 0px;">Thủ tục đặt cọc xe VinFast VF 9 thế nào ?</span></h2>
// <p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 1rem; font-size: 16px; font-weight: 400;"><span style="box-sizing: border-box; margin-bottom: 0px; color: #0000ff;"><span style="box-sizing: border-box; font-weight: bolder; margin-bottom: 0px;">Hướng dẫn đặt cọc xe VinFast VF 3 – Khách hàng chuẩn bị thông tin dưới đây:</span></span></p>
// <ul style="box-sizing: border-box; margin-top: 0px; margin-bottom: 1rem; list-style-position: inside; padding: 0px; font-size: 16px; font-weight: 400;">
// <li style="box-sizing: border-box; position: relative; list-style: none; vertical-align: middle; padding-left: 16px; margin-left: 16px; margin-bottom: 16px;"><span style="box-sizing: border-box; margin-bottom: 0px; color: #0000ff;">Loại xe: VF 3 Thuê pin hay Mua pin.</span></li>
// <li style="box-sizing: border-box; position: relative; list-style: none; vertical-align: middle; padding-left: 16px; margin-left: 16px; margin-bottom: 16px;"><span style="box-sizing: border-box; margin-bottom: 0px; color: #0000ff;">Màu xe: …</span></li>
// <li style="box-sizing: border-box; position: relative; list-style: none; vertical-align: middle; padding-left: 16px; margin-left: 16px; margin-bottom: 16px;"><span style="box-sizing: border-box; margin-bottom: 0px; color: #0000ff;">SĐT: …</span></li>
// <li style="box-sizing: border-box; position: relative; list-style: none; vertical-align: middle; padding-left: 16px; margin-left: 16px; margin-bottom: 16px;"><span style="box-sizing: border-box; margin-bottom: 0px; color: #0000ff;">Đứng tên cá nhân (ảnh CCCD 2 mặt), đứng tên Công ty (ảnh Giấy ĐKKD): …</span></li>
// <li style="box-sizing: border-box; position: relative; list-style: none; vertical-align: middle; padding-left: 16px; margin-left: 16px; margin-bottom: 16px;"><span style="box-sizing: border-box; margin-bottom: 0px; color: #0000ff;">Email: …</span></li>
// <li style="box-sizing: border-box; position: relative; list-style: none; vertical-align: middle; padding-left: 16px; margin-left: 16px; margin-bottom: 0px;"><span style="box-sizing: border-box; margin-bottom: 0px; color: #0000ff;">Số tiền đặt cọc là: 15.000.000đ</span></li>
// </ul>
// <p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 1rem; font-size: 16px; font-weight: 400;"><span style="box-sizing: border-box; margin-bottom: 0px; color: #ff0000;">Khách hàng bấm <span style="box-sizing: border-box; color: #1baae3;"><span style="box-sizing: border-box; font-weight: bolder; margin-bottom: 0px;">CHÁT</span> </span><span style="box-sizing: border-box; font-weight: bolder;"><span style="box-sizing: border-box; margin-bottom: 0px; color: #1baae3;">ZALO</span> 👇 </span>hoặc bấm<span style="box-sizing: border-box; font-weight: bolder;"> <span style="box-sizing: border-box; margin-bottom: 0px; color: #008000;"><a style="box-sizing: border-box; color: #008000; text-decoration: none; background-color: transparent; transition: all 0.3s ease 0s; font-weight: 600; margin-bottom: 0px;" href="http://tel%200985770333">Gọi Ngay 0985.770.333</a></span></span> – <span style="box-sizing: border-box; font-weight: bolder; margin-bottom: 0px;">Mr. Trần Toản (TP kinh doanh)</span> để được tư vấn và nhận ưu đãi tốt nhất. Xin cảm ơn.</span></p>
// <p><span style="box-sizing: border-box; margin-bottom: 0px; color: #ff0000;"> </span></p>
// <h2 id="ftoc-heading-8" class="ftwp-heading _mPS2id-t" style="box-sizing: border-box; margin-top: 0px; margin-bottom: 0.5rem; line-height: 1.3; font-size: 1.2em; color: #212529; font-family: Tahoma, Arial, Helvetica, sans-serif; text-align: left;"></h2>`}}/>
// </>);
//   return (<>
// <div dangerouslySetInnerHTML={{__html:`<h2 id="ftoc-heading-1" class="ftwp-heading ftwp-heading _mPS2id-t ftwp-heading" style="box-sizing: border-box; margin-top: 0px; margin-bottom: 0.5rem; line-height: 1.3; font-size: 1.2em; color: #212529; font-family: Tahoma, Arial, Helvetica, sans-serif; text-align: left;"><span style="box-sizing: border-box; font-weight: bolder; margin-bottom: 0px;">Bảng giá, Ưu đãi VinFast VF 9 mới nhất tháng 6/2024</span></h2>
// <p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 1rem; font-size: 16px; color: #212529; font-family: Tahoma, Arial, Helvetica, sans-serif; text-align: left;"><span style="box-sizing: border-box; font-weight: bolder;">&gt;&gt; Ưu đãi khi đặt cọc ngay hôm nay</span>: <span style="box-sizing: border-box; font-weight: bolder;">Giảm ngay 4%</span> giá trị xe khi mua xe trả thẳng. Trả góp ưu đãi <span style="box-sizing: border-box; font-weight: bolder; margin-bottom: 0px;">lãi suất 5%/năm</span> (2 năm đầu), 8% các năm tiếp theo.</p>
// <p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 1rem; font-size: 16px; color: #212529; font-family: Tahoma, Arial, Helvetica, sans-serif; text-align: left;"><em style="box-sizing: border-box; margin-bottom: 0px;">(Đơn vị tính: Triệu đồng – Giá xe đã bao gồm VAT)</em></p>
// <table style="border-collapse: collapse; width: 825px; overflow: auto; border: 1px solid #dee2e6; margin-bottom: 15px; font-family: Tahoma, Arial, Helvetica, sans-serif;">
// <tbody style="box-sizing: border-box; margin-bottom: 0px;">
// <tr style="box-sizing: border-box;">
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top; width: 279.32px;" width="279"><span style="box-sizing: border-box; font-weight: bolder; margin-bottom: 0px;">PHIÊN BẢN</span></td>
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top; width: 184.094px;" width="182"><span style="box-sizing: border-box; font-weight: bolder; margin-bottom: 0px;">VF 9 Eco</span></td>
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top; width: 187.906px;" width="182"><span style="box-sizing: border-box; font-weight: bolder; margin-bottom: 0px;">VF 9 PLUS</span></td>
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top; margin-bottom: 0px; width: 172.68px;"><span style="box-sizing: border-box; font-weight: bolder; margin-bottom: 0px;">VF 9 PLUS 6 CHỖ</span></td>
// </tr>
// <tr style="box-sizing: border-box;">
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top; margin-bottom: 0px; width: 824px;" colspan="4"><span style="box-sizing: border-box; font-weight: bolder; margin-bottom: 0px;">PIN SDI</span></td>
// </tr>
// <tr style="box-sizing: border-box;">
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top; width: 279.32px;" width="279">Giá xe thuê Pin</td>
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top; width: 184.094px;" width="182">1 tỷ 513 triệu</td>
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top; width: 187.906px;" width="182">1 tỷ 701 triệu</td>
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top; margin-bottom: 0px; width: 172.68px;">1 tỷ 733 triệu</td>
// </tr>
// <tr style="box-sizing: border-box;">
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top; width: 279.32px;" width="279">Giá xe kèm Pin</td>
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top; width: 184.094px;" width="182">2 tỷ 013 triệu</td>
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top; width: 187.906px;" width="182">2 tỷ 201 triệu</td>
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top; margin-bottom: 0px; width: 172.68px;">2 tỷ 233</td>
// </tr>
// <tr style="box-sizing: border-box;">
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top; margin-bottom: 0px; width: 824px;" colspan="4"><span style="box-sizing: border-box; font-weight: bolder; margin-bottom: 0px;">PIN CATL</span></td>
// </tr>
// <tr style="box-sizing: border-box;">
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top; width: 279.32px;" width="279">Giá xe thuê Pin</td>
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top; width: 184.094px;" width="182">1 tỷ 589 triệu</td>
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top; width: 187.906px;" width="182">1 tỷ 789 triệu</td>
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top; margin-bottom: 0px; width: 172.68px;">1 tỷ 818</td>
// </tr>
// <tr style="box-sizing: border-box; margin-bottom: 0px;">
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top; width: 279.32px;" width="279">Giá xe kèm Pin</td>
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top; width: 184.094px;" width="182">2 tỷ 114 triệu</td>
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top; width: 187.906px;" width="182">2 tỷ 314 triệu</td>
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top; margin-bottom: 0px; width: 172.68px;"> 2 tỷ 346</td>
// </tr>
// </tbody>
// </table>
// <h3 id="ftoc-heading-2" class="ftwp-heading _mPS2id-t ftwp-heading-target" style="box-sizing: border-box; margin-top: 0px; margin-bottom: 0.5rem; line-height: 1.3; font-size: 1.1em; position: relative; outline: 0px; color: #212529; font-family: Tahoma, Arial, Helvetica, sans-serif; text-align: left;">Dịch vụ hậu mãi: bảo hành, bảo dưỡng, cứu hộ</h3>
// <ul style="box-sizing: border-box; margin-top: 0px; margin-bottom: 1rem; list-style-position: inside; padding: 0px; color: #212529; font-family: Tahoma, Arial, Helvetica, sans-serif; font-size: 16px; text-align: left;">
// <li style="box-sizing: border-box; position: relative; list-style: none; vertical-align: middle; padding-left: 16px; margin-left: 16px; margin-bottom: 16px;">Bảo hành xe: 10 năm/200.000km, Pin bảo hành: 10 năm (không giới hạn km).</li>
// <li style="box-sizing: border-box; position: relative; list-style: none; vertical-align: middle; padding-left: 16px; margin-left: 16px; margin-bottom: 16px;">Dịch vụ sửa chữa lưu động 24/7 giúp khách hàng yên tâm trên mọi cung đường.</li>
// <li style="box-sizing: border-box; position: relative; list-style: none; vertical-align: middle; padding-left: 16px; margin-left: 16px; margin-bottom: 16px;">Xưởng dịch vụ không ngày nghỉ: làm việc từ 8h đến 21h tất cả các ngày trong tuần.</li>
// <li style="box-sizing: border-box; position: relative; list-style: none; vertical-align: middle; padding-left: 16px; margin-left: 16px; margin-bottom: 0px;">Tổng đài hỗ trợ và cứu hộ miễn phí 24/7 (<a style="box-sizing: border-box; color: #007bff; text-decoration: none; background-color: transparent; transition: all 0.3s ease 0s; font-weight: 600; margin-bottom: 0px;" href="tel: 0985770333">1900 232389</a>): sẵn sàng hỗ trợ 24/7 bất kể nơi đâu ngay sau khi nhận được cuộc gọi của khách hàng.</li>
// </ul>
// <h3 id="ftoc-heading-3" class="ftwp-heading _mPS2id-t" style="box-sizing: border-box; margin-top: 0px; margin-bottom: 0.5rem; line-height: 1.3; font-size: 1.1em; color: #212529; font-family: Tahoma, Arial, Helvetica, sans-serif; text-align: left;"><span style="box-sizing: border-box; font-weight: bolder; margin-bottom: 0px;">Thời gian sạc Pin, hệ thống trạm sạc ?</span></h3>
// <ul style="box-sizing: border-box; margin-top: 0px; margin-bottom: 1rem; list-style-position: inside; padding: 0px; color: #212529; font-family: Tahoma, Arial, Helvetica, sans-serif; font-size: 16px; text-align: left;">
// <li style="box-sizing: border-box; position: relative; list-style: none; vertical-align: middle; padding-left: 16px; margin-left: 16px; margin-bottom: 16px;">Thời gian sạc pin nhanh nhất (từ 10% đến 70%): 26 phút (Pin SDI), 35 phút (CATL).</li>
// <li style="box-sizing: border-box; position: relative; list-style: none; vertical-align: middle; padding-left: 16px; margin-left: 16px; margin-bottom: 0px;">Hệ thống trạm sạc với hơn 150.000 cổng sạc cho xe máy điện và ô tô điện, trải dài rộng khắp 63 tỉnh thành tại Việt Nam.</li>
// </ul>
// <h3 id="ftoc-heading-4" class="ftwp-heading _mPS2id-t ftwp-heading" style="box-sizing: border-box; margin-top: 0px; margin-bottom: 0.5rem; line-height: 1.3; font-size: 1.1em; color: #212529; font-family: Tahoma, Arial, Helvetica, sans-serif; text-align: left;"><span style="box-sizing: border-box; font-weight: bolder; margin-bottom: 0px;">Giá lăn bánh xe VinFast VF 9 Eco thuê pin (dòng pin SDI)</span></h3>
// <table class="tblnormal tblnormalcalc-Sedan-4" style="border-collapse: collapse; width: 825px; overflow: auto; border: 1px solid #dee2e6; margin-bottom: 15px; font-family: Tahoma, Arial, Helvetica, sans-serif;" border="0" cellspacing="0" cellpadding="0" align="center" data-classificationname="Sedan" data-fueltype="Dien" data-numberofseat="4" data-xuatxu="Nhapkhau">
// <tbody style="box-sizing: border-box; margin-bottom: 0px;">
// <tr style="box-sizing: border-box;">
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top;"><span style="box-sizing: border-box; font-weight: bolder; margin-bottom: 0px;">Các khoản phí</span></td>
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top;"><span style="box-sizing: border-box; font-weight: bolder; margin-bottom: 0px;">Lăn bánh Hà Nội/TP HCM</span></td>
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top; margin-bottom: 0px;"><span style="box-sizing: border-box; font-weight: bolder; margin-bottom: 0px;">Lăn bánh Tỉnh</span></td>
// </tr>
// <tr style="box-sizing: border-box;">
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top;">Giá niêm yết</td>
// <td class="priceName1" style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top;">1.513.000.000</td>
// <td class="priceName2" style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top; margin-bottom: 0px;">1.513.000.000</td>
// </tr>
// <tr style="box-sizing: border-box;">
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top;">Phí biển sổ</td>
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top;">20.000.000</td>
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top; margin-bottom: 0px;">1.000.000</td>
// </tr>
// <tr style="box-sizing: border-box;">
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top;">Phí trước bạ</td>
// <td class="phiTruocBa1" style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top;"><label class="phitruocba phitruocbaHN" style="box-sizing: border-box; display: inline-block; margin-bottom: 0px;">0</label></td>
// <td class="phiTruocBa2" style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top; margin-bottom: 0px;"><label class="phitruocba phitruocbaTPHCM" style="box-sizing: border-box; display: inline-block; margin-bottom: 0px;">0</label></td>
// </tr>
// <tr style="box-sizing: border-box;">
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top;">Phí đăng kiểm</td>
// <td class="phiDangKiemLuuHanh1" style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top;">340.000</td>
// <td class="phiDangKiemLuuHanh2" style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top; margin-bottom: 0px;">340.000</td>
// </tr>
// <tr style="box-sizing: border-box;">
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top;">Phí bảo trì đường bộ</td>
// <td class="phiBaoTriDuongBo1" style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top;">1.560.000</td>
// <td class="phiBaoTriDuongBo2" style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top; margin-bottom: 0px;">1.560.000</td>
// </tr>
// <tr style="box-sizing: border-box;">
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top;">Bảo hiểm trách nhiệm dân sự</td>
// <td class="baoHiemTrachNhiemDanSu1" style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top;">480.000</td>
// <td class="baoHiemTrachNhiemDanSu2" style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top; margin-bottom: 0px;">480.000</td>
// </tr>
// <tr style="box-sizing: border-box; margin-bottom: 0px;">
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top;"><span style="box-sizing: border-box; font-weight: bolder; margin-bottom: 0px;"><label style="box-sizing: border-box; display: inline-block; margin-bottom: 0px;">Tổng</label></span></td>
// <td class="tong1" style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top;"><span style="box-sizing: border-box; font-weight: bolder; margin-bottom: 0px;"><label class="tongcar tongcartongHN" style="box-sizing: border-box; display: inline-block; margin-bottom: 0px;">1.535.380.000</label></span></td>
// <td class="tong2" style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top; margin-bottom: 0px;"><span style="box-sizing: border-box; font-weight: bolder; margin-bottom: 0px;"><label class="tongcar tongcartongOther" style="box-sizing: border-box; display: inline-block; margin-bottom: 0px;">1.516.380.000</label></span></td>
// </tr>
// </tbody>
// </table>
// <h3 id="ftoc-heading-3-2" class="ftwp-heading _mPS2id-t ftwp-heading mPS2id-target mPS2id-target-first" style="box-sizing: border-box; margin-top: 0px; margin-bottom: 0.5rem; line-height: 1.3; font-size: 1.1em; color: #212529; font-family: Tahoma, Arial, Helvetica, sans-serif; text-align: left;"><span style="box-sizing: border-box; font-weight: bolder; margin-bottom: 0px;">Giá lăn bánh xe VinFast VF 9 Eco mua pin (dòng pin SDI)</span></h3>
// <table class="tblnormal tblnormalcalc-Sedan-4" style="border-collapse: collapse; width: 825px; overflow: auto; border: 1px solid #dee2e6; margin-bottom: 15px; font-family: Tahoma, Arial, Helvetica, sans-serif;" border="0" cellspacing="0" cellpadding="0" align="center" data-classificationname="Sedan" data-fueltype="Dien" data-numberofseat="4" data-xuatxu="Nhapkhau">
// <tbody style="box-sizing: border-box; margin-bottom: 0px;">
// <tr style="box-sizing: border-box;">
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top;"><span style="box-sizing: border-box; font-weight: bolder; margin-bottom: 0px;">Các khoản phí</span></td>
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top;"><span style="box-sizing: border-box; font-weight: bolder; margin-bottom: 0px;">Lăn bánh Hà Nội/TP HCM</span></td>
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top; margin-bottom: 0px;"><span style="box-sizing: border-box; font-weight: bolder; margin-bottom: 0px;">Lăn bánh Tỉnh</span></td>
// </tr>
// <tr style="box-sizing: border-box;">
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top;">Giá niêm yết</td>
// <td class="priceName1" style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top;">2.013.000.000</td>
// <td class="priceName2" style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top; margin-bottom: 0px;">2.013.000.000</td>
// </tr>
// <tr style="box-sizing: border-box;">
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top;">Phí biển sổ</td>
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top;">20.000.000</td>
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top; margin-bottom: 0px;">1.000.000</td>
// </tr>
// <tr style="box-sizing: border-box;">
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top;">Phí trước bạ</td>
// <td class="phiTruocBa1" style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top;"><label class="phitruocba phitruocbaHN" style="box-sizing: border-box; display: inline-block; margin-bottom: 0px;">0</label></td>
// <td class="phiTruocBa2" style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top; margin-bottom: 0px;"><label class="phitruocba phitruocbaTPHCM" style="box-sizing: border-box; display: inline-block; margin-bottom: 0px;">0</label></td>
// </tr>
// <tr style="box-sizing: border-box;">
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top;">Phí đăng kiểm</td>
// <td class="phiDangKiemLuuHanh1" style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top;">340.000</td>
// <td class="phiDangKiemLuuHanh2" style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top; margin-bottom: 0px;">340.000</td>
// </tr>
// <tr style="box-sizing: border-box;">
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top;">Phí bảo trì đường bộ</td>
// <td class="phiBaoTriDuongBo1" style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top;">1.560.000</td>
// <td class="phiBaoTriDuongBo2" style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top; margin-bottom: 0px;">1.560.000</td>
// </tr>
// <tr style="box-sizing: border-box;">
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top;">Bảo hiểm trách nhiệm dân sự</td>
// <td class="baoHiemTrachNhiemDanSu1" style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top;">480.000</td>
// <td class="baoHiemTrachNhiemDanSu2" style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top; margin-bottom: 0px;">480.000</td>
// </tr>
// <tr style="box-sizing: border-box; margin-bottom: 0px;">
// <td style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top;"><span style="box-sizing: border-box; font-weight: bolder; margin-bottom: 0px;"><label style="box-sizing: border-box; display: inline-block; margin-bottom: 0px;">Tổng</label></span></td>
// <td class="tong1" style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top;"><span style="box-sizing: border-box; font-weight: bolder; margin-bottom: 0px;"><label class="tongcar tongcartongHN" style="box-sizing: border-box; display: inline-block; margin-bottom: 0px;">2.035.380.000</label></span></td>
// <td class="tong2" style="box-sizing: border-box; padding: 0.75rem; border: 1px solid #dee2e6; vertical-align: top; margin-bottom: 0px;"><span style="box-sizing: border-box; font-weight: bolder; margin-bottom: 0px;"><label class="tongcar tongcartongOther" style="box-sizing: border-box; display: inline-block; margin-bottom: 0px;">2.016.380.000</label></span></td>
// </tr>
// </tbody>
// </table>
// <p style="box-sizing: border-box; margin-top: 0px; margin-bottom: 1rem; font-size: 16px; color: #212529; font-family: Tahoma, Arial, Helvetica, sans-serif; text-align: left;">*Lưu ý: Giá lăn bánh tạm tính chưa bao gồm giảm trừ ưu đãi khi đặt cọc xe, để nhận báo giá lăn bánh chi tiết từng thời điểm vui lòng liên hệ Hotline: <span style="box-sizing: border-box; font-weight: bolder;"><a style="box-sizing: border-box; color: #007bff; text-decoration: none; background-color: transparent; transition: all 0.3s ease 0s; font-weight: 600; margin-bottom: 0px;" href="tel: 0985770333">0985.770.333</a></span> hoặc để lại “<span style="box-sizing: border-box; font-weight: bolder; margin-bottom: 0px;">YÊU CẦU TƯ VẤN – BÁO GIÁ”</span> để được hỗ trợ nhanh nhất. Xin cảm ơn Quý khách!</p>`}}/>  
//   </>)

  return (
    <div className="wrap-editor">
      <ContentEditor />
    </div>
  );
}

export default App;
