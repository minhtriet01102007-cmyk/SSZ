/* Logic tìm kiếm, lọc nhóm và hiển thị. Cần nạp data/qa.js trước. */
var cat=0,box=document.getElementById("q"),list=document.getElementById("list"),chips=document.getElementById("chips");
function norm(s){return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d")}
function drawChips(){chips.innerHTML="";CATS.forEach(function(n,i){var b=document.createElement("button");b.className="chip"+(i===cat?" on":"");b.textContent=n;b.onclick=function(){cat=i;drawChips();render()};chips.appendChild(b)})}
function render(){var t=norm(box.value.trim()),h="",n=0;
QA.forEach(function(x){if(cat&&x.c!==cat)return;if(t&&norm(x.q+" "+x.a.replace(/<[^>]+>/g," ")).indexOf(t)<0)return;n++;
h+="<details><summary>"+x.q+"<span class='tag'>"+CATS[x.c]+"</span></summary><div class='ans'>"+x.a+(x.r?"<div class='ref'>Căn cứ: "+x.r+"</div>":"")+"</div></details>"});
list.innerHTML=n?h:"<div class='empty'>Không tìm thấy câu hỏi phù hợp. Hãy thử từ khóa khác.</div>"}
box.addEventListener("input",render);drawChips();render();
