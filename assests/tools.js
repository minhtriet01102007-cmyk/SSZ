/* Công cụ: tính tuổi nghĩa vụ, tính BMI, gắn liên kết liên hệ. */
(function(){
var $=function(i){return document.getElementById(i)};
$("askLink").href=SITE.askUrl;
$("mailLink").href="mailto:"+SITE.email;
$("ageBtn").onclick=function(){
  var y=parseInt($("by").value,10),now=new Date().getFullYear(),o=$("ageOut");
  if(!y||y<1990||y>now){o.textContent="Vui lòng nhập năm sinh hợp lệ.";return}
  var end=y+($("stu").checked?27:25),start=y+18,age=now-y,s;
  if(now<start)s="Chưa đến tuổi gọi nhập ngũ. Bắt đầu thuộc diện từ năm "+start+".";
  else if(now<=end)s="Đang trong độ tuổi gọi nhập ngũ (năm "+start+" đến năm "+end+").";
  else s="Đã quá độ tuổi gọi nhập ngũ (kết thúc năm "+end+").";
  o.innerHTML="<b>Tuổi năm "+now+": "+age+"</b><br>"+s+"<br><span class='ref'>Tính theo năm sinh, chỉ để ước lượng. Hãy xác nhận với Ban chỉ huy quân sự cấp xã.</span>"};
$("bmiBtn").onclick=function(){
  var h=parseFloat($("ht").value),w=parseFloat($("wt").value),o=$("bmiOut");
  if(!h||!w||h<100||h>230||w<30||w>200){o.textContent="Vui lòng nhập chiều cao và cân nặng hợp lệ.";return}
  var b=w/Math.pow(h/100,2),s;
  if(b<18)s="Thấp hơn ngưỡng 18, có thể không đạt tiêu chuẩn tuyển chọn.";
  else if(b>29.9)s="Cao hơn ngưỡng 29,9, có thể không đạt tiêu chuẩn tuyển chọn.";
  else s="Nằm trong khoảng 18 đến 29,9.";
  o.innerHTML="<b>BMI: "+b.toFixed(1)+"</b><br>"+s+"<br><span class='ref'>BMI chỉ là một chỉ tiêu. Kết luận thuộc Hội đồng khám sức khỏe theo Thông tư 105/2023/TT-BQP (sửa đổi bởi 106/2025/TT-BQP).</span>"};
})();
