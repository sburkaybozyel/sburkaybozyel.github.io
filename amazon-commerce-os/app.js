const pages=[...document.querySelectorAll(".page")];
const navItems=[...document.querySelectorAll(".nav-item")];
const pageTitle=document.getElementById("pageTitle");
const pageEyebrow=document.getElementById("pageEyebrow");
const sidebar=document.getElementById("sidebar");
const toast=document.getElementById("toast");
const toastText=document.getElementById("toastText");
const modalBackdrop=document.getElementById("modalBackdrop");
const routeMeta={overview:["Yönetim Kokpiti","İŞLETME KONTROL MERKEZİ"],orders:["Sipariş & Müşteri","CRM & SATIŞ"],production:["Üretim Planlama","MRP & ÜRETİM"],procurement:["Satın Alma","TEDARİK & MRP"],warehouse:["Depo & Lojistik","STOK & SEVKİYAT"],quality:["Kalite Yönetimi","KALİTE & İZLENEBİLİRLİK"],research:["Pazar Araştırması","AMAZON · TALEP & RAKİP"],products:["Ürün Merkezi","AMAZON · PIM & LİSTELEME"],account:["Hesap & Belgeler","AMAZON · HAZIRLIK & ONAY"],inventory:["FBA & Stok","AMAZON · ENVANTER"],marketing:["Marketing","AMAZON · REKLAM & BÜYÜME"],finance:["Finans & Matematik","ŞİRKET & KANAL KÂRLILIĞI"],tasks:["Görevler","İŞ AKIŞI & ONAY"],reports:["Raporlar","ŞEFFAF YÖNETİM"]};

function setRoute(route){
  const safeRoute=routeMeta[route]?route:"overview";
  pages.forEach(page=>page.classList.toggle("active",page.dataset.page===safeRoute));
  navItems.forEach(item=>item.classList.toggle("active",item.dataset.route===safeRoute));
  pageTitle.textContent=routeMeta[safeRoute][0];
  pageEyebrow.textContent=routeMeta[safeRoute][1];
  history.replaceState(null,"",`#${safeRoute}`);
  sidebar.classList.remove("open");
  window.scrollTo({top:0,behavior:"smooth"});
}

navItems.forEach(item=>item.addEventListener("click",()=>setRoute(item.dataset.route)));
document.querySelectorAll("[data-jump]").forEach(item=>item.addEventListener("click",()=>setRoute(item.dataset.jump)));
document.querySelectorAll("[data-route]").forEach(item=>{if(!item.classList.contains("nav-item"))item.addEventListener("click",event=>{event.preventDefault();setRoute(item.dataset.route)})});
document.getElementById("menuToggle").addEventListener("click",()=>sidebar.classList.toggle("open"));

function showToast(message,title="İşlem tamamlandı"){
  toast.querySelector("b").textContent=title;
  toastText.textContent=message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer=window.setTimeout(()=>toast.classList.remove("show"),3200);
}

const actionMessages={
  "new-order":"Yeni sipariş taslağı açıldı; kapasite ve marj kontrolü başlatıldı.",
  "new-work-order":"Yeni iş emri taslağı üretim planına eklendi.",
  "optimize-plan":"Kapasite aşımı için alternatif üretim planı oluşturuldu.",
  "new-purchase":"Satın alma talebi onay akışına gönderildi.",
  "approve-purchase":"1.800 kg iplik talebi tedarik onayına gönderildi.",
  "new-transfer":"Depolar arası transfer taslağı oluşturuldu.",
  "new-quality":"Yeni kalite kontrol kaydı lot numarasıyla açıldı.",
  "new-research":"Yeni araştırma dosyası taslak olarak açıldı.",
  "refresh-competitors":"24 rakip ASIN için fiyat yenileme kuyruğa alındı.",
  "add-product":"Yeni ürün kaydı taslak olarak oluşturuldu.",
  "upload-document":"Belge yükleme alanı açıldı; demo modunda kayıt yapılmadı.",
  "create-shipment":"FBA sevkiyat taslağı FBA-EU-2408-03 olarak oluşturuldu.",
  "approve-production":"240 adet üretim önerisi onay akışına gönderildi.",
  "new-campaign":"Yeni Sponsorlu Ürün kampanyası taslağı oluşturuldu.",
  "increase-bid":"Teklif artışı taslaklandı ve aktivite kaydına eklendi.",
  "move-exact":"Arama terimi Exact kampanyasına taşındı.",
  "negative-keyword":"Arama terimi negatiflendi; tahmini aylık €184 boşa harcama engellendi.",
  "save-scenario":"Birim ekonomi senaryosu kaydedildi.",
  "add-task":"Yeni görev taslağı oluşturuldu.",
  "open-report":"Rapor önizlemesi açıldı."
};

document.querySelectorAll("[data-action]").forEach(button=>button.addEventListener("click",()=>{
  const action=button.dataset.action;
  if(action==="weekly-report"||action==="open-report"){openModal();return}
  if(action==="print-report"){window.print();return}
  showToast(actionMessages[action]||"Değişiklik aktivite kaydına eklendi.");
}));

function openModal(){modalBackdrop.classList.add("open");modalBackdrop.setAttribute("aria-hidden","false")}
function closeModal(){modalBackdrop.classList.remove("open");modalBackdrop.setAttribute("aria-hidden","true")}
document.getElementById("modalClose").addEventListener("click",closeModal);
modalBackdrop.addEventListener("click",event=>{if(event.target===modalBackdrop)closeModal()});
document.addEventListener("keydown",event=>{if(event.key==="Escape"){closeModal();sidebar.classList.remove("open")}});

const salesValues=[42,48,39,63,58,72,69,81,77,92,84,105,98,116];
const profitValues=[14,16,12,21,18,24,22,27,25,31,27,35,32,39];
const salesChart=document.getElementById("salesChart");
salesValues.forEach((value,index)=>{
  const group=document.createElement("div");
  group.className="chart-group";
  group.innerHTML=`<i class="chart-bar sales" style="height:${value/1.2}%"></i><i class="chart-bar profit" style="height:${profitValues[index]*1.7}%"></i>`;
  salesChart.appendChild(group);
});

const productData=[
  {name:"White Sateen",sku:"DT-SATEEN-K-WHT",status:"Yayında",price:"€129",conversion:"%14,8",margin:"%20,0",stock:"16 gün",className:"growing"},
  {name:"Sand Percale",sku:"DT-PERCALE-Q-SND",status:"Yayında",price:"€119",conversion:"%11,2",margin:"%19,6",stock:"42 gün",className:"stable"},
  {name:"Stone Stripe",sku:"DT-STRIPE-K-STN",status:"Fiyat testi",price:"€124",conversion:"%9,4",margin:"%14,6",stock:"51 gün",className:"test"},
  {name:"Ivory Jacquard",sku:"DT-JACQ-Q-IVR",status:"Lansman",price:"€149",conversion:"—",margin:"%23,1",stock:"27 gün",className:"test"}
];
const productCards=document.getElementById("productCards");
productData.forEach(product=>{
  const card=document.createElement("article");
  card.className="product-card";
  card.innerHTML=`<div class="product-visual"><span>${product.status}</span></div><div class="product-info"><h3>${product.name}</h3><small>${product.sku}</small><div class="product-stats"><span><small>Fiyat</small><b>${product.price}</b></span><span><small>Dönüşüm</small><b>${product.conversion}</b></span><span><small>Katkı</small><b>${product.margin}</b></span></div><div class="product-footer"><i class="status-pill ${product.className}">${product.stock}</i><button type="button">Ürünü aç →</button></div></div>`;
  card.querySelector("button").addEventListener("click",()=>showToast(`${product.name} ürün kaydı açıldı.`,"Ürün merkezi"));
  productCards.appendChild(card);
});

const calculatorIds=["salePrice","referralFee","fbaFee","adCost","returnReserve","landedCost"];
const calculatorInputs=calculatorIds.map(id=>document.getElementById(id));
const euro=value=>new Intl.NumberFormat("tr-TR",{style:"currency",currency:"EUR",minimumFractionDigits:2,maximumFractionDigits:2}).format(value);
function updateCalculator(){
  const [sale,referral,fba,ads,returns,landed]=calculatorInputs.map(input=>Number(input.value)||0);
  const contribution=sale-referral-fba-ads-returns-landed;
  const margin=sale>0?contribution/sale*100:0;
  const breakEvenAd=Math.max(0,sale-referral-fba-returns-landed);
  const breakEvenPrice=referral+fba+ads+returns+landed;
  document.getElementById("contributionValue").textContent=euro(contribution);
  document.getElementById("marginValue").textContent=`%${margin.toFixed(1).replace(".",",")} katkı oranı`;
  document.getElementById("breakEvenAd").textContent=euro(breakEvenAd);
  document.getElementById("breakEvenPrice").textContent=euro(breakEvenPrice);
  document.getElementById("thousandContribution").textContent=euro(contribution*1000).replace(",00","");
}
calculatorInputs.forEach(input=>input.addEventListener("input",updateCalculator));
updateCalculator();

document.querySelectorAll(".segmented button").forEach(button=>button.addEventListener("click",()=>{
  button.parentElement.querySelectorAll("button").forEach(item=>item.classList.remove("active"));
  button.classList.add("active");
  showToast(`${button.textContent} kampanyalar gösteriliyor.`,"Filtre güncellendi");
}));

document.getElementById("notificationButton").addEventListener("click",()=>showToast("3 karar bekliyor: stok, marka belgesi ve fiyat testi.","Bildirim merkezi"));
setRoute(location.hash.replace("#","")||"overview");
