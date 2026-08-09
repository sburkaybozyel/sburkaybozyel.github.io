const pages=[...document.querySelectorAll(".page")];
const navItems=[...document.querySelectorAll(".nav-item")];
const pageTitle=document.getElementById("pageTitle");
const pageEyebrow=document.getElementById("pageEyebrow");
const sidebar=document.getElementById("sidebar");
const toast=document.getElementById("toast");
const toastText=document.getElementById("toastText");
const modalBackdrop=document.getElementById("modalBackdrop");
const routeMeta={overview:["Yönetim Kokpiti","İŞLETME KONTROL MERKEZİ"],orders:["Sipariş & Müşteri","CRM & SATIŞ"],production:["Üretim Planlama","MRP & ÜRETİM"],procurement:["Satın Alma","TEDARİK & MRP"],warehouse:["Depo & Lojistik","STOK & SEVKİYAT"],quality:["Kalite Yönetimi","KALİTE & İZLENEBİLİRLİK"],research:["Pazar Araştırması","AMAZON · TALEP & RAKİP"],products:["Ürün Merkezi","AMAZON · PIM & LİSTELEME"],account:["Hesap & Belgeler","AMAZON · HAZIRLIK & ONAY"],inventory:["FBA & Stok","AMAZON · ENVANTER"],marketing:["Marketing","AMAZON · REKLAM & BÜYÜME"],intelligence:["Algoritmalar & API","VERİ & KARAR MOTORU"],finance:["Finans & Matematik","ŞİRKET & KANAL KÂRLILIĞI"],tasks:["Görevler","İŞ AKIŞI & ONAY"],reports:["Raporlar","ŞEFFAF YÖNETİM"]};

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
  "approve-all-decisions":"%90 üzeri güven skoruna sahip 3 karar onay akışına gönderildi.",
  "detail-approve":"Öneri onaylandı ve şeffaf işlem kaydına eklendi.",
  "detail-task":"Kayıt sorumlu ve termin seçimi için görev taslağına dönüştürüldü.",
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

const detailDrawer=document.getElementById("detailDrawer");
const detailBackdrop=document.getElementById("detailBackdrop");
let detailRecords={};

function closeDetail(){detailDrawer.classList.remove("open");detailBackdrop.classList.remove("open");detailDrawer.setAttribute("aria-hidden","true");detailBackdrop.setAttribute("aria-hidden","true")}
function openDetail(record){
  document.getElementById("detailType").textContent=record.type||"OPERASYON KAYDI";
  document.getElementById("detailTitle").textContent=record.title||"Kayıt detayı";
  document.getElementById("detailStatus").textContent=record.status||"Aktif";
  document.getElementById("detailSummary").textContent=record.summary||"Bu kayıt merkezi veri havuzundan getirilmiştir.";
  document.getElementById("detailMetrics").innerHTML=(record.metrics||[]).map(metric=>`<article><small>${metric[0]}</small><b>${metric[1]}</b></article>`).join("");
  document.getElementById("detailTimeline").innerHTML=(record.timeline||[]).map((item,index)=>`<article><i>${index+1}</i><span>${item}</span></article>`).join("");
  document.getElementById("detailInsight").textContent=record.insight||"Kayıt için yeterli veri toplandığında algoritma önerisi burada gösterilir.";
  const confidence=record.confidence||78;
  document.getElementById("detailConfidenceBar").style.width=`${confidence}%`;
  document.getElementById("detailConfidence").textContent=`%${confidence} model güven skoru`;
  detailDrawer.classList.add("open");detailBackdrop.classList.add("open");detailDrawer.setAttribute("aria-hidden","false");detailBackdrop.setAttribute("aria-hidden","false");
}

function inferDetail(element){
  const key=Object.keys(detailRecords).find(item=>element.textContent.includes(item));
  if(key)return detailRecords[key];
  const title=element.querySelector("b,h3,strong")?.textContent?.trim()||"Operasyon kaydı";
  const values=[...element.querySelectorAll("span,small,strong")].map(item=>item.textContent.trim()).filter(Boolean).slice(0,4);
  return {type:"CANLI KAYIT",title,status:"İnceleniyor",summary:`${title} kaydının şirket veri havuzundaki birleşik görünümü.`,metrics:values.map((value,index)=>[`Veri ${index+1}`,value]),timeline:["Kayıt API üzerinden alındı","İlgili modüllerle eşleştirildi","Son değişiklik işlem geçmişine yazıldı"],insight:"Benzer kayıtlar ve güncel operasyon yükü birlikte değerlendirildi. Detaylı model sonucu için yeterli veri mevcut.",confidence:84};
}

function bindDetailTargets(){
  document.querySelectorAll(".table-row:not(.table-head),.product-card,.warehouse-map article,.capacity-board article,.research-summary article,.inventory-kpis article,.marketing-kpis article").forEach(element=>{
    if(element.dataset.detailBound)return;
    element.dataset.detailBound="true";
    element.classList.add("detail-target");
    element.setAttribute("tabindex","0");
    element.setAttribute("role","button");
    element.addEventListener("click",event=>{if(!event.target.closest("button"))openDetail(inferDetail(element))});
    element.addEventListener("keydown",event=>{if(event.key==="Enter")openDetail(inferDetail(element))});
  });
}

function serviceStatusLabel(status){return status==="healthy"?"Bağlı":status==="simulated"?"Demo API":"Kontrol"}
function runDecisionEngines(data){
  const demandHistory=[82,84,88,95,101,108,116];
  const weights=[1,2,3,4,5,6,7];
  const weightedDemand=demandHistory.reduce((total,value,index)=>total+value*weights[index],0)/weights.reduce((total,value)=>total+value,0);
  const baseline=demandHistory.slice(0,3).reduce((total,value)=>total+value,0)/3;
  const demandGrowth=Math.round((weightedDemand/baseline-1)*100);
  const cuttingLoad=5420;
  const cuttingCapacity=5000;
  const capacityOverflow=cuttingLoad-cuttingCapacity;
  const dailyYarnUse=210;
  const supplierLeadDays=8;
  const safetyStock=860;
  const currentYarn=740;
  const reorderQuantity=Math.max(0,dailyYarnUse*supplierLeadDays+safetyStock-currentYarn);
  const priceIncrease=8;
  const monthlyUnits=220;
  const retainedMargin=.875;
  const marginImpact=Math.round(priceIncrease*monthlyUnits*retainedMargin);
  const wastedSearchSpend=[184,68,34].reduce((total,value)=>total+value,0);
  data.algorithms[0].result=`White Sateen için 21 günde +%${demandGrowth} talep`;
  data.algorithms[1].result=`Kesim hattında ${capacityOverflow} adet kapasite aşımı`;
  data.algorithms[2].result=`60/1 iplik için ${reorderQuantity.toLocaleString("tr-TR")} kg satın alma`;
  data.algorithms[3].result=`Stone Stripe fiyatında €${priceIncrease} artış, +€${marginImpact.toLocaleString("tr-TR")} katkı`;
  data.algorithms[4].result=`3 negatif kelime, tahmini €${wastedSearchSpend} tasarruf`;
  return data;
}
function renderSystem(data){
  data=runDecisionEngines(data);
  const average=Math.round(data.services.reduce((total,service)=>total+service.latency,0)/data.services.length);
  document.getElementById("apiLatency").textContent=`${average} ms`;
  document.getElementById("apiGeneratedAt").textContent=`Son senkronizasyon ${new Date(data.generatedAt).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"})} · ${data.services.length} servis`;
  document.getElementById("serviceGrid").innerHTML=data.services.map(service=>`<article><span class="service-icon">↯</span><div><b>${service.name}</b><small>${service.records.toLocaleString("tr-TR")} kayıt · ${service.latency} ms</small></div><i class="service-state ${service.status}">${serviceStatusLabel(service.status)}</i></article>`).join("");
  document.getElementById("algorithmRunTime").textContent=`${data.algorithms.length} model çalıştı`;
  document.getElementById("algorithmList").innerHTML=data.algorithms.map(algorithm=>`<button type="button" data-algorithm="${algorithm.id}"><span>✦</span><div><b>${algorithm.name}</b><small>${algorithm.version} · Son çalışma ${algorithm.lastRun}</small><p>${algorithm.result}</p></div><strong>%${algorithm.accuracy.toFixed(1)}</strong></button>`).join("");
  document.getElementById("decisionTable").innerHTML=`<div class="decision-row decision-head"><span>Öncelik</span><span>Öneri</span><span>Beklenen etki</span><span>Güven</span><span>Sorumlu</span><span></span></div>${data.decisions.map((decision,index)=>`<div class="decision-row"><span><i class="decision-priority ${decision.priority}">${decision.priority==="critical"?"Kritik":decision.priority==="high"?"Yüksek":"Orta"}</i></span><span><b>${decision.title}</b></span><span>${decision.impact}</span><span><strong>%${decision.confidence}</strong></span><span>${decision.owner}</span><span><button type="button" data-decision="${index}">İncele →</button></span></div>`).join("")}`;
  document.querySelectorAll("[data-algorithm]").forEach(button=>button.addEventListener("click",()=>openDetail({type:"ALGORİTMA ÇALIŞMASI",title:button.querySelector("b").textContent,status:"Model aktif",summary:button.querySelector("p").textContent,metrics:[["Güven",button.querySelector("strong").textContent],["Sürüm",button.querySelector("small").textContent.split(" · ")[0]],["Veri kaynağı","Merkezi veri havuzu"],["Çalışma","Otomatik"]],timeline:["Yeni veriler alındı","Özellikler hesaplandı","Model çalıştırıldı","Karar kuyruğu güncellendi"],insight:button.querySelector("p").textContent,confidence:Number(button.querySelector("strong").textContent.replace(/[^0-9.]/g,""))})));
  document.querySelectorAll("[data-decision]").forEach(button=>button.addEventListener("click",()=>{const decision=data.decisions[Number(button.dataset.decision)];openDetail({type:"ALGORİTMA ÖNERİSİ",title:decision.title,status:"Onay bekliyor",summary:decision.impact,metrics:[["Model güveni",`%${decision.confidence}`],["Sorumlu",decision.owner],["Öncelik",decision.priority],["Kayıt zamanı","11:18"]],timeline:["Kaynak veriler birleştirildi","Risk ve etki hesaplandı","Öneri karar kuyruğuna eklendi"],insight:`${decision.impact}. Sistem önerisi yönetici onayı olmadan işleme alınmaz.`,confidence:decision.confidence})}));
}

async function loadDemoApi(){
  try{
    const [systemResponse,detailsResponse]=await Promise.all([fetch("api/system.json",{cache:"no-store"}),fetch("api/details.json",{cache:"no-store"})]);
    if(!systemResponse.ok||!detailsResponse.ok)throw new Error("API response error");
    const [systemData,detailsData]=await Promise.all([systemResponse.json(),detailsResponse.json()]);
    detailRecords=detailsData;
    renderSystem(systemData);
    bindDetailTargets();
  }catch(error){
    document.getElementById("apiGeneratedAt").textContent="Demo API bağlantısı yeniden deneniyor";
    document.getElementById("serviceGrid").innerHTML="<p class=\"api-error\">Veri katmanı şu anda yanıt vermiyor.</p>";
  }
}

document.getElementById("detailClose").addEventListener("click",closeDetail);
detailBackdrop.addEventListener("click",closeDetail);
document.getElementById("runAlgorithms").addEventListener("click",async event=>{const button=event.currentTarget;button.disabled=true;button.textContent="Hesaplanıyor…";document.getElementById("algorithmList").classList.add("calculating");await new Promise(resolve=>setTimeout(resolve,900));await loadDemoApi();document.getElementById("algorithmList").classList.remove("calculating");button.disabled=false;button.textContent="Algoritmaları çalıştır";showToast("5 model yeniden çalıştı, 4 aksiyon karar kuyruğuna yazıldı.","Hesaplama tamamlandı")});
document.addEventListener("keydown",event=>{if(event.key==="Escape")closeDetail()});
setRoute(location.hash.replace("#","")||"overview");
loadDemoApi();
