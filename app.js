// Salih Burkay Bozyel — Executive Portfolio & CV Application Script

const i18n = {
  tr: {
    "navIntro": "Tanıtım",
    "navExp": "Geçmiş",
    "navSkills": "Yetkinlikler",
    "navErpWeb": "ERP & Web",
    "navEdgeAi": "Edge AI & Görü",
    "navMobile": "Mobil",
    "navExtras": "Ekstralar",
    "navOfferings": "İş Modelleri",
    "btnPrintCv": "CV Yazdır",
    "navContact": "İletişim",
    "introBadge": "ESOGÜ Endüstri Mühendisliği · AEON LLC · Yazılım Geliştirici & Kurucu",
    "introBio": "ESOGÜ Endüstri Mühendisliği öğrencisi ve AEON LLC kurucusu. Lüks butik oteller için uçtan uca ERP ve kanal entegrasyonları, perakende ve sanayi için Nvidia Jetson tabanlı uçta çalışan (on-prem) bilgisayarlı görü sistemleri ve küresel uygulama mağazalarında canlı mobil ürünler geliştiriyorum.",
    "btnExplore": "Biyografi & Geçmişi İncele",
    "btnViewCv": "Özgeçmiş & Kariyer",
    "btnPdfCv": "PDF Olarak Kaydet",
    "contactRoleLbl": "Rol & Konum:",
    "pPrinciple1": "<strong>Uçtan Uca Mimari:</strong> Mobil uygulama (Flutter), dağıtık veritabanları ve API tasarımı.",
    "pPrinciple2": "<strong>Edge AI & Görü:</strong> Nvidia Jetson üzerinde %100 yerel, sıfır bulut bağımlılıklı görüntü işleme.",
    "pPrinciple3": "<strong>Süreç Optimizasyonu:</strong> ESOGÜ Endüstri Mühendisliği temelleriyle operasyonel verimlilik.",
    "expEyebrow": "Kişisel Yolculuk & Profesyonel Kronoloji",
    "expTitle": "Biyografi, Yaşam Kültürü & <span>Geçmiş</span>",
    "expSubtitle": "Merak ve hiper-odakla beslenen kişisel vizyon, çok kültürlü yaşam deneyimi ve kronolojik mühendislik sorumlulukları.",
    "expAeonDesc": "Butik otel ve restoranlar için modüler AEON Hospitality ERP'sinin mimarisini sıfırdan kurdu. Perakende ve sanayi sahaları için Nvidia Jetson tabanlı RetailPulse AI / SanayiPulse bilgisayarlı görü motorunu geliştirdi. Global mobil ekosistemde Vent (v3.0.5/3.0.6) ve Forge ürünlerinin teknik omurgasını yönetti.",
    "expAeonBullet1": "Node.js 20, Express, AlaSQL/SQLite ve Cloudflare D1 üzerinde çok kiracılı (multi-tenant) veri izolasyonu mimarisi kuruldu.",
    "expAeonBullet2": "HotelRunner API ile Booking.com ve Airbnb için çift yönlü gerçek zamanlı kanal senkronizasyonu entegre edildi.",
    "expAeonBullet3": "YOLOv8 + ByteTrack ile %100 yerel (on-prem) kamera analitiği ve 1.5m temas süresi korelasyon pipeline'ı kodlandı.",
    "expIndieDesc": "Çapraz platform mobil uygulamalar (Flutter), dağıtık veri tabanları ve gerçek zamanlı sistemler üzerine yoğunlaştı. Vent uygulamasının çekirdek mimarisini, çok dilli yerelleştirme sistemini ve konu odaklı eşleşme protokolünü sıfırdan tasarlayıp App Store ve Google Play üzerinde yayınladı.",
    "expIndieBullet1": "Flutter ve Firebase Firestore ile sıfır kesintiyle çalışan küresel eşleşme ve sohbet motoru geliştirildi.",
    "expIndieBullet2": "Uygulama içi satın alma (IAP) ve abonelik akışları RevenueCat ve mağaza köprüleriyle canlıya alındı.",
    "expEduDesc": "2017 yılı Mustafa Kaynak Anadolu Lisesi mezuniyeti sonrası; bilgisayarlı görü (Computer Vision), dağıtık sistem mimarileri, çapraz platform mobil yazılım ve modern yapay zekâ orkestrasyonu alanlarında yoğun uygulamalı Ar-Ge ve bağımsız ürün geliştirme çalışmaları yürütmüştür.",
    "skillsEyebrow": "Teknik Matris",
    "skillsTitle": "Bilgi & <span>Yeterlilikler</span>",
    "skillsSubtitle": "Üretim kalitesinde kullanılan modern diller, framework'ler, mimari desenler ve altyapı yetkinlikleri.",
    "erpEyebrow": "Operasyon & B2B SaaS",
    "erpTitle": "ERP, CRM & <span>Web Sistemleri</span>",
    "erpSubtitle": "Butik oteller, restoranlar ve marinalar için geliştirilen uçtan uca dijital omurga ve lüks web vitrinleri.",
    "aeonCoreSummary": "Otel ve restoranlarda rezervasyondan mutfağa tüm akışı birbirine bağlayan modüler işletim sistemi. Resepsiyon, oda folyoları, plaj/şezlong QR siparişi, mutfak ekranı (KDS) ve kat hizmetlerini tek merkezde toplar.",
    "hrSummary": "Booking.com, Airbnb ve global acentelerden gelen rezervasyonları otomatik olarak işletme ERP'sine işleyen, oda doluluk ve fiyat güncellemelerini anında kanallara yansıtan sunucu taraflı entegrasyon motoru.",
    "crmSummary": "Butik konaklama tesisleri ve gurme restoranlar için misafirin ilk temasından konaklama sonrasına kadar tüm yaşam döngüsünü, özel teklifleri ve masa/oda rezervasyon geçmişini yöneten müşteri ilişkileri platformu.",
    "hotelWebSummary": "Kıyı şeridindeki seçkin butik oteller, marinalar ve gurme restoranlar için tasarlanan V1 (Kıyı Dergisi) ve V2 (Koyu Editoryal) lüks web vitrinleri ve doğrudan komisyonsuz rezervasyon motoru.",
    "aiEyebrow": "Bilgisayarlı Görü & Edge Donanım",
    "aiTitle": "Edge AI & <span>Kamera Analitiği</span>",
    "aiSubtitle": "Mevcut güvenlik kameralarını buluta bağımlı kalmadan; perakende dönüşüm, fabrika lojistiği ve eğlence parkı analitik merkezine dönüştüren yapay zekâ hattı.",
    "retailAiSummary": "Tavan IP ve balıkgözü kameralardan kuşbakışı kişi tespiti, 2D zemin homografi projeksiyonu, reyon bekleme süresi (dwell-time) ve mağaza içi yoğunluk haritaları çıkaran yerel analiz motoru.",
    "sanayiPulseSummary": "Endüstriyel tesis ve fabrikaların yükleme rampalarında TIR varış-çıkış takibi, rampa bekleme sürelerinin ölçülmesi ve lojistikte demurrage (gecikme) cezalarını önleyen görsel analitik denetimi.",
    "funnivariumSummary": "Eğlence ve ulaşım tesisleri için bilet satışları ile fiziksel biniş sayılarını mikrosaniye hassasiyetinde karşılaştıran, turnike kaçak geçişlerini ve kuyruk bekleme sürelerini anlık raporlayan denetim paneli.",
    "edgeHwSummary": "Video akışları internete veya üçüncü taraf bulut sağlayıcılarına asla iletilmez. Tüm tespitler yerel Nvidia Jetson Orin veya endüstriyel Mini PC ünitelerinde RAM üzerinde işlenir ve ham kareler analiz bittiği milisaniyede silinir. Merkeze yalnızca anonim JSON telemetri verisi akar.",
    "mobileEyebrow": "Mobil Ekosistem",
    "mobileTitle": "Mobil Uygulamalar <span>(Canlı & Geliştirilenler)</span>",
    "mobileSubtitle": "App Store ve Google Play'de küresel kullanıcıya ulaşan canlı ürünler ve yayına hazırlanan mobil topluluklar.",
    "ventSummary": "İnsanları profil fotoğraflarına göre değil; konuşmak istedikleri duyguya ve konuya göre bir araya getiren sosyal mobil uygulama. Kullanıcı önce konu ve niyetini seçer; karşılıklı kabul sonrasında güvenli sohbet başlar.",
    "forgeSummary": "Sosyal akışı gerçek hayattaki fiziksel harekete bağlayan hibrit spor ağı. Harita üzerinden spor kulüplerini keşfetme, topluluk etkinliklerine katılma, sporcu profili rozetleri ve antrenör pazar yeri mekanikleri.",
    "bobSummary": "Kullanıcıyı erteleme (snooze) alışkanlığından kurtarmak için standart melodiler yerine alaycı ve acımasız yapay zekâ uyarıları kullanan karakter tabanlı uyanma uygulaması. Gemini AI ve Edge-TTS nöral ses motoru ile dinamik sabah roast'ları.",
    "undrgrndSummary": "Bağımsız hip-hop sanatçıları, graffiti yazarları ve sokak kültürü takipçilerini bir araya getiren niş topluluk platformu. Yeraltı etkinlik haritası, cypher alanları ve sanatçı keşif ağı.",
    "extrasEyebrow": "Araştırma, Medya & İleri Teknoloji",
    "extrasTitle": "Ekstralar: <span>Makaleler, Yazılar & Ar-Ge</span>",
    "extrasSubtitle": "Mimari araştırma notları ve kod tabanlı video otomasyonu.",
    "articlesHeader": "Bilimsel Makaleler & Akademik Araştırmalar",
    "articlesSubheader": "Bağımsız araştırmalar, bilimsel yayınlar ve teknik tez çalışmaları.",
    "paper1Category": "KUANTUM KURAMI · SPEKÜLATİF HİPOTEZ",
    "paper1Title": "Korelasyon Etiketli Dolaşıklık İletişimi (CTEC)",
    "paper1Excerpt": "Paylaşılan dolaşık ölçüm olaylarının seçici işaretlenmesiyle klasik kanal olmadan mesaj kurmayı deneyen spekülatif bir kuantum-ötesi iletişim hipotezi.",
    "paper2Category": "KOZMOLOJİ · YORUM DENEMESİ",
    "paper2Title": "Döngü Hiçbir Zaman Seçenek Değildi",
    "paper2Excerpt": "Yıldızlardan evren ölçeğine uzanan döngü örüntüsünün fiziğin süsü değil yapısı olabileceğini savunan yorum denemesi.",
    "studioSummary": "Ajans prodüksiyon maliyetlerini sıfırlayan, saniyeler içinde kod tabanlı Instagram story ve kampanya videosu render eden Python + Remotion motoru. Whisper AI ile milisaniyelik senkronize altyazı ve Edge-TTS ile yapay zekâ seslendirmesi.",
    "abyssalSummary": "Yetişkinlere yönelik (24+), her biri 8 bölümden oluşan 5 sezon (toplam 40 bölüm) olarak tasarlanan animasyon dizisi evreni. Varoluşsal kriz, tanrı-yaratıcı çatışması ve çoklu evren yıkım fiziği üzerine ayrıntılı dramatürjik yol haritası.",
    "mcpSummary": "Claude ve DeepSeek büyük dil modellerini güvenli yerel köprülerle şirket içi veritabanlarına bağlayan Model Context Protocol (MCP) sunucuları. Ajanların kod tabanlarını bağımsız denetlemesini ve iş akışlarını yürütmesini sağlayan protokol mimarisi.",
    "offersEyebrow": "İş Birlikleri & Teklifler",
    "offersTitle": "Birlikte Nasıl <span>Değer Yaratabiliriz?</span>",
    "offersSubtitle": "Masaya yalnızca kod yazan bir yazılımcı olarak değil; sermayeyi yüksek kaldıraçla çarpan teknik kurucu ortak olarak oturuyorum.",
    "offer1Title": "Venture Studio & Yeni Girişim Ortaklığı",
    "offer1Lead": "Hızlı MVP ve Pazar Validasyonu",
    "offer1Desc": "Sermayeniz ve sektör tecrübenizle benim yüksek hızlı yazılım geliştirme yetkinliğimi birleştirelim. Kârlı bir sektör problemini 2-4 hafta içinde çalışan, test edilmiş bir ürüne çevirip pazara sürelim.",
    "offer1F1": "Aylık yüksek ajans yakım maliyetleri olmadan doğrudan teknik ortaklık.",
    "offer1F2": "Tasarım, backend, mobil ve bulut altyapısının tek elden sıfır gecikmeyle teslimi.",
    "offer1F3": "Gelir üreten ve nakit akışına odaklanan iş modeli mimarisi.",
    "offer2Title": "Kurumsal Modernizasyon & Entegrasyon",
    "offer2Lead": "Mevcut Şirketleriniz İçin ERP ve AI Zekâsı",
    "offer2Desc": "Portföyünüzdeki otel, restoran, perakende mağaza zinciri veya sanayi şirketlerine Aeon ERP ve RetailPulse AI sistemlerimi entegre edelim. Operasyonel kaçakları durdurup iş gücü verimini maksimize edelim.",
    "offer2F1": "Otel ve restoranlarda siparişten mutfağa ve kanal senkronizasyonuna tam dijitalleşme.",
    "offer2F2": "Mağaza ve fabrikalarda mevcut kameralardan yerel, KVKK uyumlu yapay zekâ analitiği.",
    "offer2F3": "Ağır lisans bedelleri yerine işletmeye özel, hafif ve kalıcı mimari.",
    "offer3Title": "Stratejik Hisse & Ürün Yatırımı",
    "offer3Lead": "Vent & Forge Büyüme Ortaklığı",
    "offer3Desc": "Halihazırda mağazalarda olan (Vent App - 37 dil, küresel pazar) ve lansman hazırlığındaki mobil ürünlerimin (Forge) küresel büyümesine, pazarlamasına ve kullanıcı kazanımına stratejik hisse ortağı olun.",
    "offer3F1": "Doğrulanmış ve yayında olan ürün mimarisi üzerinden sıfır teknik geliştirme riski.",
    "offer3F2": "Yüksek büyüme potansiyeline sahip B2C abonelik ve topluluk gelir modelleri.",
    "offer3F3": "Şeffaf metrikler, net yol haritası ve küresel ölçeklenme potansiyeli.",
    "contactCardTitle": "İletişim & Proje Görüşmesi",
    "contactCardDesc": "Geliştirdiğim yazılım mimarileri, sistemler veya doğrudan iletişim için e-posta ve telefon üzerinden ulaşabilirsiniz.",
    "btnDirectEmail": "E-posta Gönder",
    "btnPrintCvBottom": "CV Olarak Yazdır / PDF İndir",
    "profileRole": "ESOGÜ Endüstri Müh. · Founder, AEON LLC",
    "chipInd": "Endüstri Mühendisliği",
    "chipProc": "Süreç Optimizasyonu",
    "phoneLbl": "Telefon:",
    "btnCall": "+90 542 275 53 83",
    "footPhone": "Telefon",
    "mailLbl": "E-posta:",
    "contactRole": "Endüstri Mühendisliği & Yazılım · Eskişehir",
    "cvTimeNow": "2026 — Günümüz",
    "cvLocAeon": "Delaware, ABD & Türkiye",
    "cvRoleAeon": "Kurucu & Yazılım Geliştirici",
    "cvLocRemote": "Türkiye / Uzaktan",
    "cvRoleIndie": "Bağımsız Yazılım Geliştirici & Mobil Sistem Geliştiricisi",
    "cvCompIndie": "Bağımsız Ar-Ge & Ürün Geliştirme",
    "cvTimeEdu": "2018 — Günümüz (Aktif)",
    "cvRoleEsogu": "Eskişehir Osmangazi Üniversitesi (ESOGÜ)",
    "cvCompEsogu": "Endüstri Mühendisliği Bölümü (Lisans Öğrencisi)",
    "cvEsoguB1": "Sistem analizi ve süreç iyileştirme prensiplerinin dijital ERP/SaaS platformlarına uyarlanması.",
    "cvEsoguB2": "Saha bilgisayarlı görü ve veri akışlarında operasyonel verimlilik ve kayıp/kaçak önleme modellemeleri.",
    "cvTimeHs": "2013 — 2017",
    "cvCompHs": "Sayısal Bölüm Mezuniyeti (2017)",
    "skLoc": "Yerelleştirme (37 Dil)",
    "skStore": "App Store / Play Store Dağıtım",
    "skMob": "Mobil Uygulama",
    "skMobDesc": "Flutter ile cross-platform uygulama mimarisi; App Store ve Google Play'de canlı ürünler.",
    "skBe": "Sunucu & Veri Tabanı",
    "skBeDesc": "Multi-tenant servis mimarisi; gerçek zamanlı veri akışı ve bulut-kenar (edge) dağıtımı.",
    "skAi": "Yapay Görü & Edge AI",
    "skAiDesc": "Nvidia Jetson üzerinde tamamen yerel çalışan bilgisayarlı görü pipeline'ları ve ses sentezi.",
    "skRtsp": "RTSP Akış İşleme",
    "skWhisper": "Whisper AI Altyazı",
    "skDb": "Veri & Güvenlik",
    "skDbDesc": "KVKK/GDPR uyumlu, sıfır bulut bağımlılıklı veri işleme ve erişim kontrolü.",
    "skMtls": "mTLS Güvenli İletişim",
    "skOnprem": "%100 Yerel Veri İşleme",
    "skKvkkMin": "KVKK / GDPR Veri Minimizasyonu",
    "skRbac": "Rol Tabanlı Erişim (RBAC)",
    "skFe": "Web & Medya",
    "skFeDesc": "Modern frontend mimarisi; tasarım sistemleri ve programatik video üretimi.",
    "skSem": "Semantik Web Standartları",
    "skInteg": "Entegrasyonlar & Yapay Zekâ",
    "skIntegDesc": "Harici servis entegrasyonları, LLM orkestrasyonu ve DevOps altyapısı.",
    "skDeep": "DeepSeek & Claude Entegrasyonları",
    "skDocker": "Docker & Edge Dağıtımı",
    "skLoc": "Yerelleştirme (37 Dil)",
    "skStore": "App Store / Play Store Dağıtım",
    "aeonCat": "Aeon Core Platform · CANLI MİMARİ",
    "aeonSum": "Lüks butik oteller ve restoranlar için rezervasyon, oda folyoları, plaj/şezlong QR menü siparişleri ve mutfak şef ekranını (KDS) tek merkezde birleştiren işletim sistemi. Departmanlar arası koordinasyon kopukluğunu bitirir; masadan verilen siparişlerin kaybolmasını ve tahsil edilmeyen servis kaçaklarını sıfırlar.",
    "mIsoDb": "İzole Veritabanı",
    "mEdgeResp": "Edge Yanıt Hızı",
    "mLeakLog": "Kaçak Önleme Logu",
    "hrHead": "HotelRunner Çift Yönlü Kanal Entegrasyonu",
    "hrSum": "Otelin yerel oda yönetim sistemi ile Booking.com, Airbnb ve Expedia arasında anlık çift yönlü veri köprüsü kurar. Misafiri kapıda bırakan çifte rezervasyon (overbooking) riskini, acente ceza puanlarını ve personelin saatler süren manuel veri giriş yükünü ortadan kaldırır.",
    "mTwoWay": "2-Yönlü",
    "mNoManual": "Manuel Veri Girişi",
    "mLive": "Anlık",
    "mLoyalty": "Misafir Sadakat Kaydı",
    "crmCat": "Misafir & Satış Yönetimi · CRM & PIPELINE",
    "crmHead": "Butik İşletme CRM & Satış Paneli",
    "crmSum": "WhatsApp, telefon ve DM üzerinden gelen tüm konaklama ve özel etkinlik taleplerini aşamalı bir satış hunisinde (pipeline) toplayan müşteri ilişkileri platformu. Personelin yoğunlukta unuttuğu yüksek değerli misafir taleplerini ve fiyat tutarsızlıklarını önleyerek doğrudan satış kapanış oranını artırır.",
    "mGuestView": "Misafir Görünümü",
    "mQuote": "Özel Teklif",
    "mPdf": "Tek Tıkla PDF Üretimi",
    "webCat": "Lüks Web & Doğrudan Satış · PRESTİJ VİTRİNİ",
    "webHead": "Lüks Butik Otel & Marina Web Portalları",
    "webSum": "Seçkin kıyı otelleri ve marinalar için tasarlanan yüksek hızlı editoryal vitrin ve doğrudan rezervasyon motoru. Acentelere ödenen %15-%25 komisyon kesintilerini ortadan kaldırır ve üst segment misafire hitap eden prestijli marka kimliğini tesis eder.",
    "mEditTpl": "Editoryal Şablon Mimarisi",
    "mDirect": "Doğrudan Rezervasyon",
    "retCat": "Mağaza İçi Müşteri Zekâsı · BİLGİSAYARLI GÖRÜ",
    "retHead": "RetailPulse AI: Perakende Davranış Analitiği",
    "retSum": "Mağazadaki mevcut tavan kameralarından müşteri trafiğini ve reyon önü bekleme sürelerini ölçen, POS kasa fişleriyle eşleştirerek gerçek satışa dönüşüm oranını (% Conversion) hesaplayan yerel bilgisayarlı görü motoru. Görüntüleri buluta aktarmadan RAM üzerinde işleyip silerek %100 KVKK güvencesi sağlar.",
    "mContact": "Personel Temas Kuralı",
    "mPos": "POS Eşleşmesi",
    "mConv": "Kasa Satışa Dönüşüm",
    "mRam": "RAM'de İşleme & Silme",
    "sanCat": "Fabrika & Depo Rampa Zekâsı · ENDÜSTRİYEL LOJİSTİK",
    "sanHead": "SanayiPulse: Fabrika & Rampa Lojistiği",
    "sanSum": "Ağır sanayi tesisleri ve yükleme rampalarında TIR giriş-çıkış sürelerini, rampa doluluklarını ve İSG güvenlik koridorlarını 7/24 izleyen endüstriyel görü sistemi. TIR bekleme sürelerinden doğan lojistik gecikme (demurrage) cezalarını ve fabrika içi forklift kazalarını önler.",
    "mRamp": "Rampa Süresi",
    "mNeck": "Darboğaz Tespiti",
    "mDemur": "Ceza Risk Azaltımı",
    "funCat": "Kaçak Biniş & Kuyruk Zekâsı · EĞLENCE & ULAŞIM",
    "funHead": "PassAudit OS: Turnike & Kaçak Biniş Denetimi",
    "funSum": "Eğlence ve ulaşım tesislerinde turnikeden okutulan bilet sayısı ile kameranın tespit ettiği gerçek biniş sayısını anlık olarak karşılaştıran denetim paneli. Bilet basmadan turnikeden atlayan veya usulsüz geçen binişleri anında yakalayarak her gün uğranılan ciddi bilet geliri sızıntısını durdurur.",
    "mLeak": "+82 Kaçak",
    "mBoard": "Canlı Biniş Tespiti",
    "mQueue": "Kuyruk Yoğunluğu",
    "edgeCat": "KVKK / GDPR Mimari Uyum · DONANIM & GÜVENLİK",
    "edgeHead": "Uçta Donanım Mimarisi & %100 KVKK Güvencesi",
    "ventCat": "Flutter & Firebase · MAĞAZADA CANLI (v3.0.6)",
    "ventHead": "Vent: Duygusal Destek & Anonim İletişim Ağı",
    "ventSum": "İnsanları profil fotoğrafları veya takipçi sayıları yerine konuşmak istedikleri spesifik duygu ve 222 konu başlığı üzerinden 1-e-1 anonim dertleşme odalarında buluşturan mobil uygulama. Sosyal medyanın dayattığı dış görünüş ve beğeni baskısını kaldırır; çift taraflı rıza ve otomatik sızıntı filtresiyle güvenli iletişim sağlar.",
    "mAutoTr": "Otomatik Çeviri & Eşleşme",
    "mTopics": "Duygu & Yaşam Başlığı",
    "mConsent": "Rızalı Sohbet",
    "mSafe": "Konu Onaylı Güvenlik",
    "forgeCat": "Flutter + Supabase + Next.js · GELİŞTİRİLME AŞAMASINDA",
    "forgeHead": "Forge: Sporcu Topluluğu & Antrenman Ağı",
    "forgeSum": "Sporcuların antrenman rekorlarını (PR), programlarını ve videolarını paylaştığı; harita üzerinden yakınındaki spor salonlarını ve seviyesine uygun antrenman partnerlerini bulduğu dikey sosyal ağ. Yalnız antrenman yapmaktan kaynaklanan motivasyon kaybını ve salonda partner bulma zorluğunu çözer.",
    "mDiscover": "Yer & Grup Keşfi",
    "bobCat": "Edge-TTS & Gemini AI · GELİŞTİRİLME AŞAMASINDA",
    "bobHead": "BOB: Erteleme Karşıtı Alaycı Akıllı Alarm",
    "bobSum": "Sabah alarmını sürekli erteleyen kullanıcıları standart melodiler yerine yapay zekâ destekli alaycı, sarkastik ve acımasız sesli uyarılarla (roast) yataktan kaldıran karakter tabanlı akıllı alarm. Gemini AI destekli dinamik mizah motoru ve Edge-TTS nöral ses senteziyle her sabah uykuyu psikolojik olarak böler ve erteleme refleksini kırar.",
    "mWake": "Sarkastik Sabah Roasting'i",
    "mNeural": "Nöral Ses",
    "mVoice": "Dinamik AI Seslendirme",
    "undCat": "Kültür & Müzik Topluluğu · GELİŞTİRİLME AŞAMASINDA",
    "undHead": "UNDRGRND: Bağımsız Hip-Hop & Cypher Odaları",
    "undSum": "Beatmaker'lar ile rap sanatçılarının canlı beat odalarında sırayla ses kaydedip parçalar ürettiği dijital sokak müzik platformu. Bağımsız müzisyenlerin stüdyo kiralama masrafı olmadan cep telefonu üzerinden serbest stil ve verse kaydetmesini sağlar.",
    "mCypher": "Canlı Cypher",
    "mVerse": "Sıralı Verse Kaydı",
    "mPocket": "Cep Stüdyosu",
    "artDate": "TR + EN Tam Metin",
    "stuHead": "Kod Tabanlı Otomatik Video & Reklam Stüdyosu",
    "stuSum": "Video kurgu programı açmadan React bileşenleri ve Python betikleriyle dinamik fiyatlı kampanya videolarını ve hikayeleri saniyeler içinde render eden otomasyon motoru. Tasarımcılara ödenen yüksek ajans maliyetlerini ve saatler süren manuel montaj yükünü sıfırlar.",
    "abyCat": "40 Bölümlük Dizi Evreni · IP & SENARYO MİMARİSİ",
    "abyHead": "Abyssal Breach: Yetişkin Bilimkurgu Evreni",
    "abyBtn": "Tüm Teknik Detayları & Mimariyi İncele",
    "mcpCat": "Anthropic Model Context Protocol · İLERİ PROTOKOL",
    "mcpHead": "Özel MCP Sunucuları & Otonom Ajan Hattı",
    "footLoc": "Eskişehir · Delaware",
    "footTop": "Yukarı Dön ↑",
    "mDefCat": "SİSTEM MİMARİSİ",
    "mDefTitle": "Proje Detayları",
    "mDefSub": "Sistem Mimarisi, Operasyonel Değer & Saha Çıkarımları",
    "tabOverview": "Genel Bakış",
    "tabProblems": "Çözülen Problemler",
    "tabTechnical": "Teknik Bilgiler",
    "tabVisual": "Saha & Ekran Analizi",
    "zoomInspect": "Görseli İncele",
    "deepDive": "Teknik İnceleme & Detaylar",
    "storeApple": "App Store'da Canlı",
    "storeGoogle": "Google Play'de Canlı",
    "pdfBtn": "Makaleyi İncele (PDF)",
    "footMail": "E-posta",
    "afZero": "<strong>Sıfır Bulut Bant Genişliği:</strong> Gbps'lik video yayını yerine bayt düzeyinde mTLS telemetri.",
    "afKvkk": "<strong>KVKK & GDPR Uyumu:</strong> Kişisel yüz veya biyometrik veri saklanmaz; sadece anonim koordinat takibi yapılır.",
    "afFran": "<strong>Franchise Tak-Çalıştır:</strong> Mevcut ONVIF/RTSP kameralarla modüler donanım entegrasyonu.",
    "expEsoguDesc": "Üretim ve hizmet süreçlerinin optimizasyonu, yöneylem araştırması, darboğaz analizi, istatistiksel kalite kontrol ve sistem dinamiği temellerini; dağıtık yazılım mimarisi, yapay zekâ destekli otomasyon ve mobil ürün tasarımıyla birleştiren mühendislik yaklaşımı.",
    "paper3Category": "KUANTUM FELSEFESİ · YORUM DENEMESİ",
    "paper3Title": "100 Yıllık Sapma: Kopenhag Yorumu Kuantum Fiziğini Nasıl Durdurdu",
    "paper3Excerpt": "Kopenhag yorumunun kozmolojik ölçüm sorununu ve gözlemcisiz bir kuantum evren anlatısının imkânını tartışan yorum denemesi.",
    "paper4Category": "MATEMATİK FELSEFESİ · YORUM DENEMESİ",
    "paper4Title": "Matematiğin Sessiz Krizi",
    "paper4Excerpt": "Gödel'den kuantum fotosenteze: çalışan ama gerçekliği eksik sayan matematik dilinin sınırlarını ve frekans-temelli bir genişleme önerisini tartışan deneme.",
    "readBtn": "Makaleyi Oku",
    "brandRole": "Yazılım & Endüstri Müh.",
    "artHubCat": "Yayımlanan Felsefi & Bilimsel İncelemeler · TEORİK AR-GE",
    "artHubHead": "Bilimsel Makaleler & Felsefi İncelemeler",
    "artHubDesc": "Matematik felsefesi, kuantum ölçüm problemi, görelilik ve zamanın döngüselliği üzerine kaleme alınmış kapsamlı araştırma metinleri.",
    "artBtnMath": "Matematik Felsefesi & Kriz",
    "artBtnCopen": "Kopenhag & Kuantum",
    "artBtnLoop": "Döngüsel Evren & Zaman",
    "artBtnCtec": "CTEC & Görelilik",
    "artModalCat": "BİLİMSEL YAYIN & MAKALE",
    "abySum": "+24 yetişkin psikolojik bilimkurgu ve distopya evreninde geçen, 5 sezon ve 40 bölümden oluşan kapsamlı senaryo mimarisi ve prodüksiyon üretim incilidir (Series Bible). Kurgusal dünya kuralları, karakter ilişkileri ve dramatik çatışma matrislerini eksiksiz belgeler.",
    "rayCat": "React Remotion + Python · MEDYA OTOMASYONU",
    "rayHead": "CreativePulse: React Tabanlı Otomatize Video Motoru",
    "raySum": "Video kurgu programı açmadan React bileşenleri ve Python betikleriyle dinamik fiyatlı kampanya videolarını ve hikayeleri saniyeler içinde render eden otomasyon motoru. Tasarımcılara ödenen yüksek ajans maliyetlerini ve saatler süren manuel montaj yükünü sıfırlar.",
    "zoomBadge": "Görseli İncele",
    "ventMonetization": "Vent Plus premium abonelik (öncelikli eşleşme & derin filtreler), dinleyici jeton (IAP token) mikro-ödemeleri ve şirketler için B2B kurumsal esenlik (wellness) paketleri.",
    "forgeMonetization": "Forge Pro aboneliği (ayrıntılı PR analizleri & video form denetimi), spor salonu/PT partner pazar yeri komisyonları (%15) ve sporcu markaları için sponsorlu meydan okumalar.",
    "bobMonetization": "BOB Savage aboneliği (sınırsız alaycı yapay zekâ ses üretimi & yeni roast motorları), özel persona ses paketleri (alaycı oda arkadaşı, acımasız antrenör vb. IAP) ve premium alarm temaları.",
    "undrgrndMonetization": "Beatmaker pazar yeri satış/kiralama komisyonu (%15-20), canlı cypher stüdyo kayıt token'ları ve sanatçı profil/parça öne çıkarma vitrin modelleri.",
    "bioTag": "Kişisel Arka Plan & Yaşam Felsefesi",
    "bioMeta": "28 Nisan 1999, Mersin · Eskişehir",
    "bioPara1": "Çocukluk yıllarımda konulan DEHB (ADHD) tanısını bir kısıt değil; zihinsel bir hiper-odaklanma gücü, tükenmeyen öğrenme açlığı ve araştırma motoru olarak benimsedim. Turistik bölgelerde büyümenin kazandırdığı doğal çift dillilik ve ileri seviye İngilizce altyapısıyla; dünya gündemini, modern yapay zekâyı, kuantum mekaniğini ve yeni nesil motor/tahrik teknolojilerini her gün bir önceki günden daha ileri taşımak üzere takip ediyorum.",
    "bioPara2": "Dünyayı, insan doğasını ve toplumları derinlemesine anlayabilmek adına 2 yılımı Güneydoğu Asya'da geçirdim. Lise yıllarımda dönemin önde gelen isimleriyle 8 büyük hip-hop konseri organize etmenin getirdiği operasyonel refleks, 3 yıllık lisanslı amatör basketbol disiplini, dünya mutfaklarına duyduğum gastronomi tutkusu, Anadolu rock ve elektronik müziğe olan hayranlığım kendime has çok katmanlı bir üretim kültürü oluşturdu. Hayatın getirdiği dönemsel engeller sebebiyle bir süre ara verdiğim ESOGÜ Endüstri Mühendisliği eğitimimde edindiğim süreç optimizasyonu ve yöneylem disiplinini geliştirdiğim tüm canlı yazılımlara aktararak aktif eğitim hayatıma geri döndüm.",
    "traitT1": "Hiper-Odak & Merak (ADHD)",
    "traitD1": "Rutin yerine derin merak; dünyayı, teknolojiyi ve bilimi durmaksızın tarayarak her gün kendini aşma içgüdüsü.",
    "traitT2": "Güneydoğu Asya & Çift Dillilik",
    "traitD2": "Turistik bölgelerde büyüyerek edinilen ileri İngilizce ve ufkunu genişletmek için Güneydoğu Asya'da geçirilen 2 bağımsız yıl.",
    "traitT3": "Müzik & 8 Konser Prodüksiyonu",
    "traitD3": "Lisede dönemin tanınmış isimleriyle 8 büyük hip-hop konseri organizasyonu; Anadolu rock ve elektronik müzik vizyonu.",
    "traitT4": "Spor Disiplini & Gastronomi",
    "traitD4": "3 yıl lisanslı amatör basketbol geçmişi ve farklı kültürlerin yemeklerini keşfetmeye odaklı gastronomi tutkusu.",
    "traitT5": "Kuantum & Yeni Nesil Motorlar",
    "traitD5": "Kuantum kuramı, yapay zekâ orkestrasyonu ve yeni nesil elektrikli/tahrik motor teknolojileri üzerine sürekli Ar-Ge.",
    "traitT6": "ESOGÜ Endüstri Müh. (Aktif)",
    "traitD6": "Öğrendiği yöneylem ve süreç optimizasyonu prensiplerini bizzat canlı sistemlere aktararak devam eden lisans eğitimi.",
    "cvTimeIndie": "2022 — 2024",
    "cvTimeSea": "2020 — 2022",
    "cvLocSea": "Güneydoğu Asya",
    "cvRoleSea": "Kültürel Keşif & Küresel Saha Gözlemi (2 Yıl)",
    "cvCompSea": "Bağımsız Yaşam & Vizyon Geliştirme",
    "cvDescSea": "Dünyayı, farklı kültürleri ve insan doğasını yakından tanıyıp vizyonunu genişletmek amacıyla Güneydoğu Asya'da 2 yıl bağımsız yaşam ve saha araştırması yürüttü. Çok kültürlü problem çözme yeteneğini ve küresel insan perspektifini pekiştirdi.",
    "cvSeaB1": "Farklı kültürler ve uluslararası topluluklar arasında doğrudan adaptasyon ve kriz çözme becerisi.",
    "cvSeaB2": "Kendi yaşam ve çalışma kültürünü küresel dinamikler ve yerel gözlemlerle zenginleştirme.",
    "cvLocEsogu": "Eskişehir",
    "cvLocHs": "Denizli",
    "cvRoleHs": "Mustafa Kaynak Anadolu Lisesi & Hip-Hop Organizasyonları",
    "cvCompHs": "Sayısal Bölüm Mezuniyeti & 8 Konser Direktörlüğü",
    "pageTitle": "Salih Burkay Bozyel | ESOGÜ Endüstri Mühendisliği & Yazılım",
},
  en: {
    "navIntro": "About",
    "navExp": "Experience",
    "navSkills": "Skills",
    "navErpWeb": "ERP & Web",
    "navEdgeAi": "Edge AI & Vision",
    "navMobile": "Mobile",
    "navExtras": "Extras",
    "navOfferings": "Business Models",
    "btnPrintCv": "Print CV",
    "navContact": "Contact",
    "introBadge": "ESOGU Industrial Engineering · AEON LLC · Software Developer & Founder",
    "introBio": "Industrial Engineering student at ESOGU and founder of AEON LLC. Developing full-cycle architectures from boutique hospitality ERPs and on-prem computer vision pipelines to live consumer mobile apps.",
    "btnExplore": "Explore Biography & Timeline",
    "btnViewCv": "CV & Career History",
    "btnPdfCv": "Save as PDF",
    "contactRoleLbl": "Role & Location:",
    "pPrinciple1": "<strong>End-to-End Architecture:</strong> Mobile apps (Flutter), distributed databases and API engineering.",
    "pPrinciple2": "<strong>Edge AI & Vision:</strong> 100% on-prem, zero-cloud computer vision pipelines on Nvidia Jetson.",
    "pPrinciple3": "<strong>Process Optimization:</strong> High-efficiency operational software grounded in ESOGU Industrial Engineering.",
    "expEyebrow": "Personal Journey & Chronology",
    "expTitle": "Biography, Personal Culture & <span>Timeline</span>",
    "expSubtitle": "Curiosity and hyper-focus-driven personal vision, cross-cultural exploration, and chronological deliverables.",
    "expAeonDesc": "Architected the modular AEON Hospitality ERP from scratch for boutique hotels and restaurants. Developed the on-prem RetailPulse AI and SanayiPulse computer vision engines on Nvidia Jetson hardware. Spearheaded technical development for consumer mobile products Vent (v3.0.5/3.0.6) and Forge.",
    "expAeonBullet1": "Engineered multi-tenant database isolation across Node.js 20, Express, AlaSQL/SQLite, and Cloudflare D1.",
    "expAeonBullet2": "Integrated bidirectional real-time channel synchronization with HotelRunner API for Booking.com and Airbnb.",
    "expAeonBullet3": "Developed an on-premise YOLOv8 + ByteTrack pipeline with 1.5m interaction rule correlation.",
    "expIndieDesc": "Focused on cross-platform mobile apps (Flutter), distributed databases, and real-time messaging systems. Architected the core engine, 37-language localization pipeline, and topic-first matching protocol of Vent, deploying to App Store and Google Play.",
    "expIndieBullet1": "Engineered zero-downtime global matching and real-time chat with Flutter and Firebase Firestore.",
    "expIndieBullet2": "Implemented in-app purchases and subscriptions with RevenueCat and native store bridges.",
    "expEduDesc": "Graduated from Mustafa Kaynak Anatolian High School in 2017; followed by rigorous applied R&D and independent engineering specializing in Computer Vision, distributed systems, cross-platform mobile engineering, and AI orchestration.",
    "skillsEyebrow": "Technical Matrix",
    "skillsTitle": "Skills & <span>Expertise</span>",
    "skillsSubtitle": "Production-grade languages, modern frameworks, architectural patterns, and infrastructure capabilities.",
    "erpEyebrow": "Operations & B2B SaaS",
    "erpTitle": "ERP, CRM & <span>Web Systems</span>",
    "erpSubtitle": "End-to-end digital operations backbone and luxury showcases for boutique hotels, restaurants, and marinas.",
    "aeonCoreSummary": "Modular hospitality operating system linking reservations to the kitchen. Unifies reception, guest folios, beach/sunbed QR ordering, kitchen display systems (KDS), and housekeeping in one hub.",
    "hrSummary": "Bi-directional channel synchronization engine automatically ingesting Booking.com and Airbnb reservations into the hotel ERP with instant room inventory and rate matching.",
    "crmSummary": "Customer relationship platform managing the complete guest lifecycle, bespoke proposals, and dining/stay reservation histories for boutique hotels and gourmet restaurants.",
    "hotelWebSummary": "V1 (Coastal Magazine) and V2 (Dark Editorial) luxury showcase websites and direct commission-free booking engines designed for premier coastal boutique hotels and marinas.",
    "aiEyebrow": "Computer Vision & Edge Hardware",
    "aiTitle": "Edge AI & <span>Camera Analytics</span>",
    "aiSubtitle": "Transforming existing security cameras into retail conversion and factory logistics analytics centers without cloud dependencies.",
    "retailAiSummary": "On-premise vision engine calculating top-down person tracking, 2D floor homography projection, aisle dwell times, and store heatmaps from ceiling IP cameras using YOLOv8s and ByteTrack.",
    "sanayiPulseSummary": "Industrial visual monitoring tracking truck arrivals, loading dock occupancy, and dwell times to eliminate demurrage bottlenecks in manufacturing and warehouse facilities.",
    "funnivariumSummary": "Transit and entertainment facility analytics cross-checking ticketing numbers against physical ridership, identifying turnstile fraud, and generating real-time capacity and safety alerts.",
    "edgeHwSummary": "Video streams never leave the facility. All inference runs entirely in RAM on local Nvidia Jetson Orin or industrial Mini PCs and raw frames are destroyed instantly. Only anonymous JSON telemetry is transmitted.",
    "mobileEyebrow": "Mobile Ecosystem",
    "mobileTitle": "Mobile Apps <span>(Live & In Development)</span>",
    "mobileSubtitle": "Live consumer products reaching global users on App Store and Google Play, alongside upcoming communities.",
    "ventSummary": "Social mobile app connecting people based on topics and emotional context rather than profiles. Users select emotional topics and intentions; conversations unlock upon mutual consent.",
    "forgeSummary": "Hybrid fitness social network linking digital feeds to real-world movement. Features gym exploration, community events, athlete badges, and coach marketplace mechanics.",
    "bobSummary": "Character-driven AI alarm clock replacing standard ringtones with savage morning roasts. Uses Gemini AI humor modeling and Edge-TTS neural speech to wake users up through psychological disruption.",
    "undrgrndSummary": "Niche culture platform uniting underground hip-hop artists, graffiti writers, and street culture fans with an underground event map and artist discovery engine.",
    "extrasEyebrow": "Research, Media & Advanced Tech",
    "extrasTitle": "Extras: <span>Articles, Research & R&D</span>",
    "extrasSubtitle": "Architecture research notes and code-based video automation.",
    "articlesHeader": "Scientific Papers & Academic Research",
    "articlesSubheader": "Independent research, peer publications, and technical thesis papers.",
    "paper1Category": "QUANTUM THEORY · SPECULATIVE HYPOTHESIS",
    "paper1Title": "Correlation-Tagged Entanglement Communication (CTEC)",
    "paper1Excerpt": "A speculative post-quantum communication hypothesis attempting message recovery from selectively tagged shared entanglement events — without a classical channel.",
    "paper2Category": "COSMOLOGY · INTERPRETIVE ESSAY",
    "paper2Title": "The Loop Was Never Optional",
    "paper2Excerpt": "An interpretive essay arguing the loop pattern — from stars to cosmic scale — may be physics itself, not its decoration.",
    "studioSummary": "Python + Remotion programmatic video engine rendering branded campaign videos and stories in seconds with millisecond-synced Whisper AI subtitles and Edge-TTS neural voiceovers.",
    "abyssalSummary": "Mature sci-fi animated series universe designed across 5 seasons (40 episodes total). Complete world canon, philosophical conflict matrix, and episodic dramaturgy roadmap.",
    "mcpSummary": "Model Context Protocol (MCP) server implementations connecting Claude and DeepSeek to internal company databases for autonomous agent workflows and codebase audits.",
    "offersEyebrow": "Partnership & Offerings",
    "offersTitle": "How We Can <span>Create Value Together</span>",
    "offersSubtitle": "Sitting at the table not merely as a programmer, but as a high-leverage technical co-founder compounding capital.",
    "offer1Title": "Venture Studio & Co-Founder Partnership",
    "offer1Lead": "Rapid MVP & Market Validation",
    "offer1Desc": "Combining your capital and industry expertise with my rapid software & product development. Turning a profitable problem into a field-tested product within 2-4 weeks.",
    "offer1F1": "Direct technical co-founding without high monthly agency burn rates.",
    "offer1F2": "Single-handed delivery of UI design, backend, mobile app, and cloud infrastructure.",
    "offer1F3": "Business model architecture focused directly on cash flow and revenue generation.",
    "offer2Title": "Enterprise Modernization & Integration",
    "offer2Lead": "ERP and AI Systems for Existing Businesses",
    "offer2Desc": "Deploying Aeon ERP and RetailPulse AI across your portfolio hotels, retail chains, or industrial plants to eliminate operational leakage and maximize labor efficiency.",
    "offer2F1": "Full digitization from guest ordering to kitchen and OTA channel synchronization.",
    "offer2F2": "On-premise, privacy-compliant computer vision analytics on existing camera infrastructure.",
    "offer2F3": "Lightweight, permanent architecture custom-fitted to your operations instead of costly licensing.",
    "offer3Title": "Strategic Equity & Product Investment",
    "offer3Lead": "Vent & Forge Growth Partnership",
    "offer3Desc": "Strategic equity partnership for global marketing, scaling, and user acquisition across live mobile products (Vent App - 37 languages, global stores) and upcoming launches (Forge).",
    "offer3F1": "Zero technical execution risk on proven, live production codebases.",
    "offer3F2": "High-growth B2C subscription and community monetization models.",
    "offer3F3": "Transparent metrics, verified architectural roadmaps, and global scalability.",
    "contactCardTitle": "Get in Touch for Live Demos & Partnership",
    "contactCardDesc": "Ready to demonstrate live production architectures and systems (Vent App, AEON ERP, RetailPulse AI) directly during our meeting.",
    "btnDirectEmail": "Send Email",
    "btnPrintCvBottom": "Print CV / Download PDF",
    "profileRole": "ESOGU Industrial Eng. · Founder, AEON LLC",
    "chipInd": "Industrial Engineering",
    "chipProc": "Process Optimization",
    "phoneLbl": "Phone:",
    "btnCall": "+90 542 275 53 83",
    "footPhone": "Phone",
    "mailLbl": "E-mail:",
    "contactRole": "Industrial Engineering & Software · Eskisehir, TR",
    "cvTimeNow": "2026 — Present",
    "cvLocAeon": "Delaware, USA & Türkiye",
    "cvRoleAeon": "Founder & Software Developer",
    "cvLocRemote": "Türkiye / Remote",
    "cvRoleIndie": "Independent Software Developer & Mobile Systems Builder",
    "cvCompIndie": "Independent R&D & Product Development",
    "cvTimeEdu": "2018 — Present (Active)",
    "cvRoleEsogu": "Eskişehir Osmangazi University (ESOGU)",
    "cvCompEsogu": "Department of Industrial Engineering (Undergraduate Student)",
    "cvEsoguB1": "Applying systems analysis and process-improvement principles to digital ERP/SaaS platforms.",
    "cvEsoguB2": "Operational-efficiency and loss-prevention modeling across field computer vision and data flows.",
    "cvTimeHs": "2013 — 2017",
    "cvCompHs": "Science Track Graduate (2017)",
    "skLoc": "Localization (37 Languages)",
    "skStore": "App Store / Play Store Deployment",
    "skMob": "Mobile Apps",
    "skMobDesc": "Cross-platform app architecture with Flutter; live products on App Store and Google Play.",
    "skBe": "Servers & Databases",
    "skBeDesc": "Multi-tenant service architecture; real-time data streams and cloud-edge deployment.",
    "skAi": "Vision AI & Edge",
    "skAiDesc": "Fully local computer vision pipelines and speech synthesis running on Nvidia Jetson hardware.",
    "skRtsp": "RTSP Stream Processing",
    "skWhisper": "Whisper AI Subtitles",
    "skDb": "Data & Security",
    "skDbDesc": "KVKK/GDPR-compliant, zero-cloud-dependency data processing and access control.",
    "skMtls": "mTLS Secure Communication",
    "skOnprem": "100% On-Prem Data Processing",
    "skKvkkMin": "KVKK / GDPR Data Minimization",
    "skRbac": "Role-Based Access (RBAC)",
    "skFe": "Web & Media",
    "skFeDesc": "Modern frontend architecture; design systems and programmatic video generation.",
    "skSem": "Semantic Web Standards",
    "skInteg": "Integrations & AI",
    "skIntegDesc": "Third-party service integrations, LLM orchestration and DevOps infrastructure.",
    "skDeep": "DeepSeek & Claude Integrations",
    "skDocker": "Docker & Edge Deployment",
    "aeonCat": "Aeon Core Platform · LIVE ARCHITECTURE",
    "aeonSum": "The operating system unifying reservations, room folios, beach/sunbed QR menu orders and the kitchen display (KDS) for luxury boutique hotels and restaurants. It ends inter-department coordination gaps, lost table orders and uncollected service leakage.",
    "mIsoDb": "Isolated Database",
    "mEdgeResp": "Edge Response",
    "mLeakLog": "Leakage-Prevention Log",
    "hrHead": "HotelRunner Two-Way Channel Integration",
    "hrSum": "A live two-way data bridge between the hotel's local room management and Booking.com, Airbnb and Expedia. It removes walk-in-jeopardizing double bookings (overbooking), agency penalty points and hours of manual staff data entry.",
    "mTwoWay": "2-Way",
    "mNoManual": "Manual Data Entry",
    "mLive": "Live",
    "mLoyalty": "Guest Loyalty Record",
    "crmCat": "Guest & Sales Management · CRM & PIPELINE",
    "crmHead": "Boutique Property CRM & Sales Panel",
    "crmSum": "A customer-relationship platform collecting every accommodation and private-event request from WhatsApp, phone and DM in a staged sales pipeline. It prevents high-value guest requests forgotten in busy hours and price inconsistencies, lifting direct-sales close rates.",
    "mGuestView": "Guest View",
    "mQuote": "Custom Quotes",
    "mPdf": "1-Click PDF Quotes",
    "webCat": "Luxury Web & Direct Sales · PRESTIGE SHOWCASE",
    "webHead": "Luxury Boutique Hotel & Marina Web Portals",
    "webSum": "High-speed editorial showcases and direct booking engines designed for select coastal hotels and marinas. They remove the 15–25% commission cuts paid to agencies and establish a prestigious brand identity for the upper-segment guest.",
    "mEditTpl": "Editorial Template System",
    "mDirect": "Direct Booking",
    "retCat": "In-Store Customer Intelligence · COMPUTER VISION",
    "retHead": "RetailPulse AI: Retail Behavior Analytics",
    "retSum": "A local computer-vision engine measuring customer traffic and aisle dwell times from existing ceiling cameras, matched against POS receipts to compute true sales conversion. Frames are processed in RAM without cloud upload and then deleted, for full KVKK assurance.",
    "mContact": "Staff Contact Rule",
    "mPos": "POS Matching",
    "mConv": "Checkout Conversion",
    "mRam": "In-RAM Processing",
    "sanCat": "Factory & Depot Ramp Intelligence · INDUSTRIAL LOGISTICS",
    "sanHead": "SanayiPulse: Factory & Ramp Logistics",
    "sanSum": "An industrial vision system monitoring truck gate times, ramp occupancy and HSE safety corridors 24/7 across heavy-industry sites and loading ramps. It prevents demurrage penalties from truck waiting times and in-plant forklift accidents.",
    "mRamp": "Ramp Dwell",
    "mNeck": "Bottleneck Alerts",
    "mDemur": "Penalty-Risk Reduction",
    "funCat": "Fare Evasion & Queue Intelligence · LEISURE & TRANSPORT",
    "funHead": "PassAudit OS: Turnstile & Ticket Fraud Audit",
    "funSum": "An audit panel instantly comparing turnstile ticket scans against camera-detected real boardings at leisure and transport facilities. It catches jump-overs and irregular boardings on the spot, stopping serious daily ticket-revenue leakage.",
    "mLeak": "+82 Detected",
    "mBoard": "Live Boarding Detection",
    "mQueue": "Queue Density",
    "edgeCat": "KVKK / GDPR Architecture Alignment · HARDWARE & SECURITY",
    "edgeHead": "Edge Hardware Architecture & 100% KVKK Assurance",
    "ventCat": "Flutter & Firebase · LIVE ON STORES (v3.0.6)",
    "ventHead": "Vent: Emotional Support & Anonymous Communication Network",
    "ventSum": "A mobile app bringing people together in 1-on-1 anonymous conversation rooms around 222 specific emotion and life topics instead of profile photos or follower counts. It removes appearance and like pressure, with mutual consent and automatic leak filters for safe communication.",
    "mAutoTr": "Auto-Translate & Matching",
    "mTopics": "Emotion & Life Topics",
    "mConsent": "Consensual Chat",
    "mSafe": "Topic-Gated Safety",
    "forgeCat": "Flutter + Supabase + Next.js · IN DEVELOPMENT",
    "forgeHead": "Forge: Athlete Community & Training Network",
    "forgeSum": "A vertical social network where athletes share training records (PRs), programs and videos, and find nearby gyms and level-matched training partners on the map. It solves motivation loss from training alone and the struggle of finding gym partners.",
    "mDiscover": "Place & Group Discovery",
    "bobCat": "Edge-TTS & Gemini AI · IN DEVELOPMENT",
    "bobHead": "BOB: Anti-Snooze Sarcastic Smart Alarm",
    "bobSum": "A character-driven AI alarm clock that gets chronic snoozers out of bed not with pleasant chimes, but with savage, sarcastic, and context-aware morning roasts. Powered by Gemini AI for dynamic humor generation and Edge-TTS neural speech to wake users up through witty psychological disruption.",
    "mWake": "Sarcastic Morning Roasting",
    "mNeural": "Neural Voice",
    "mVoice": "Dynamic AI Voiceover",
    "undCat": "Culture & Music Community · IN DEVELOPMENT",
    "undHead": "UNDRGRND: Independent Hip-Hop & Cypher Rooms",
    "undSum": "A digital street-music platform where beatmakers and rappers take turns recording vocals in live beat rooms. Independent musicians record freestyles and verses from their phones with zero studio rental cost.",
    "mCypher": "Live Cypher",
    "mVerse": "Sequential Verse Takes",
    "mPocket": "Pocket Studio",
    "artDate": "TR + EN Full Text",
    "stuHead": "Code-Based Automated Video & Ad Studio",
    "stuSum": "An automation engine rendering dynamically-priced campaign videos and stories in seconds from React components and Python scripts — no editing suite needed. It zeroes out agency costs and hours of manual montage work.",
    "abyCat": "40-Episode Series Universe · IP & SCREENWRITING",
    "abyHead": "Abyssal Breach: Adult Sci-Fi Universe",
    "abyBtn": "Full Technical Details & Architecture",
    "mcpCat": "Anthropic Model Context Protocol · ADVANCED PROTOCOL",
    "mcpHead": "Custom MCP Servers & Autonomous Agent Pipeline",
    "footLoc": "Eskişehir · Delaware",
    "footTop": "Back to Top ↑",
    "mDefCat": "SYSTEM ARCHITECTURE",
    "mDefTitle": "Project Details",
    "mDefSub": "System Architecture, Operational Value & Field Findings",
    "tabOverview": "Overview",
    "tabProblems": "Problems Solved",
    "tabTechnical": "Technical Details",
    "tabVisual": "Field & Screen Analysis",
    "zoomInspect": "Inspect Image",
    "deepDive": "Technical Deep-Dive & Details",
    "storeApple": "Live on the App Store",
    "storeGoogle": "Live on Google Play",
    "pdfBtn": "View Paper (PDF)",
    "footMail": "E-mail",
    "afZero": "<strong>Zero Cloud Bandwidth:</strong> Byte-level mTLS telemetry instead of Gbps video streams.",
    "afKvkk": "<strong>KVKK & GDPR Alignment:</strong> No facial or biometric data stored; anonymous coordinate tracking only.",
    "afFran": "<strong>Franchise Plug-and-Play:</strong> Modular hardware integration with existing ONVIF/RTSP cameras.",
    "expEsoguDesc": "An engineering approach combining production and service process optimization, operations research, bottleneck analysis, statistical quality control and system dynamics with distributed software architecture, AI-assisted automation and mobile product design.",
    "paper3Category": "QUANTUM PHILOSOPHY · INTERPRETIVE ESSAY",
    "paper3Title": "A 100-Year Detour: How the Copenhagen Interpretation Stalled Quantum Physics",
    "paper3Excerpt": "An interpretive essay on the Copenhagen interpretation's cosmological measurement problem and the case for an observer-free quantum universe.",
    "paper4Category": "PHILOSOPHY OF MATHEMATICS · INTERPRETIVE ESSAY",
    "paper4Title": "The Silent Crisis of Mathematics",
    "paper4Excerpt": "From Gödel to quantum photosynthesis: an essay on the limits of a mathematics that works but undercounts reality — and a frequency-based extension proposal.",
    "readBtn": "Read Paper",
    "brandRole": "Software & Industrial Eng.",
    "artHubCat": "Published Philosophical & Scientific Papers · THEORETICAL R&D",
    "artHubHead": "Scientific Papers & Philosophical Essays",
    "artHubDesc": "In-depth research papers examining the philosophy of mathematics, quantum measurement problem, relativity, and the cyclical nature of time.",
    "artBtnMath": "Philosophy of Math & Crisis",
    "artBtnCopen": "Copenhagen & Quantum",
    "artBtnLoop": "Loop Universe & Time",
    "artBtnCtec": "CTEC & Relativity",
    "artModalCat": "SCIENTIFIC PUBLICATION & RESEARCH",
    "abySum": "Mature (+24) psychological sci-fi & dystopian universe designed across 5 seasons and 40 episodes (Series Bible). Documents complete world canon, character arcs, and dramatic conflict matrices.",
    "rayCat": "React Remotion + Python · MEDIA AUTOMATION",
    "rayHead": "CreativePulse: React-Based Programmatic Video Engine",
    "raySum": "Programmatic video engine rendering dynamic campaign videos and social stories in seconds via React components and Python scripts, eliminating high agency costs and manual video editing.",
    "zoomBadge": "Inspect Image",
    "ventMonetization": "Vent Plus premium subscriptions (priority matching & deeper filters), listener token micropayments (IAP), and B2B corporate wellness tiers.",
    "forgeMonetization": "Forge Pro subscription (detailed PR analytics & video form audits), gym/trainer marketplace commissions (15%), and brand-sponsored challenges.",
    "bobMonetization": "BOB Savage subscription (unlimited AI roast generation & new roasting models), premium cynical persona/voice packs (cynical roommate, ruthless coach IAP), and custom alarm themes.",
    "undrgrndMonetization": "Beatmaker marketplace sales/licensing commissions (15-20%), live cypher studio tokens, and featured artist spotlight tiers.",
    "bioTag": "Personal Background & Philosophy",
    "bioMeta": "April 28, 1999 · Mersin / Eskisehir, TR",
    "bioPara1": "I embraced a childhood ADHD diagnosis not as an obstacle, but as hyper-focused cognitive drive, an insatiable curiosity, and an engine for rapid learning. Raised across international coastal regions, I developed natural bilingual fluency in English, constantly tracking global tech, modern AI systems, quantum theory, and next-generation propulsion and motor technologies.",
    "bioPara2": "To deeply understand diverse cultures, human psychology, and global dynamics, I spent 2 years living independently across Southeast Asia. Combined with directing 8 headlining hip-hop concerts in high school, 3 years of competitive amateur basketball, culinary passion across world cuisines, and appreciation for Anatolian rock and electronic soundscapes, I've forged a distinct personal culture. After an interruption due to life hurdles, I translated operations research and process optimization straight into production software and actively resumed my Industrial Engineering degree at ESOGU.",
    "traitT1": "Hyper-Focus & Rapid Learning (ADHD)",
    "traitD1": "Driven by deep curiosity; continuously parsing global science and tech to solve complex challenges.",
    "traitT2": "Southeast Asia & Bilingualism",
    "traitD2": "Native-level English from coastal hubs combined with 2 years of independent exploration across Southeast Asia.",
    "traitT3": "Music & 8 Concert Productions",
    "traitD3": "Organized 8 major hip-hop concerts in high school; enduring passion for Anatolian rock and electronica.",
    "traitT4": "Athletics & Culinary Arts",
    "traitD4": "3 years of licensed amateur basketball discipline paired with culinary experimentation across world cuisines.",
    "traitT5": "Quantum & Propulsion Systems",
    "traitD5": "Continuous applied research into quantum mechanics, LLM agents, and next-gen electric/propulsion tech.",
    "traitT6": "ESOGU Industrial Eng. (Active)",
    "traitD6": "Undergraduate degree actively ongoing, applying process optimization directly into living software products.",
    "cvTimeIndie": "2022 — 2024",
    "cvTimeSea": "2020 — 2022",
    "cvLocSea": "Southeast Asia",
    "cvRoleSea": "Cultural Immersion & Global Field Exploration (2 Years)",
    "cvCompSea": "Independent Exploration & Perspective",
    "cvDescSea": "Spent 2 years living independently across Southeast Asia to explore global cultural dynamics, human psychology, and diverse ways of life — broadening worldview and multicultural problem-solving instincts.",
    "cvSeaB1": "Direct adaptability, cross-cultural communication, and crisis-resolution across diverse communities.",
    "cvSeaB2": "Compounding a personal culture informed by global perspectives and ground-level observation.",
    "cvLocEsogu": "Eskisehir, TR",
    "cvLocHs": "Denizli, TR",
    "cvRoleHs": "Mustafa Kaynak Anatolian High School & Event Production",
    "cvCompHs": "Science Track Graduate & 8 Concert Productions",
    "pageTitle": "Salih Burkay Bozyel | Industrial Engineering & Software Developer",
}
};
let currentLang = 'tr';

function setLanguage(lang) {
  if (!i18n[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;
  if (i18n[lang].pageTitle) document.title = i18n[lang].pageTitle;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key]) {
      el.innerHTML = i18n[lang][key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  try {
    localStorage.setItem('preferredLang', lang);
  } catch (e) {}

  if (currentTechKey) {
    fillTechHeader();
    renderTechTab();
  }
}

function openLightbox(src, caption) {
  const backdrop = document.getElementById('lightboxBackdrop');
  const img = document.getElementById('lightboxImg');
  const cap = document.getElementById('lightboxCaption');
  if (!backdrop || !img) return;

  img.src = src;
  const lb = (typeof lbCaptions !== 'undefined' && lbCaptions[src]) || null;
  const text = (lb && (lb[currentLang] || lb.tr)) || caption || '';
  img.alt = text;
  if (cap) cap.textContent = text;
  backdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(event) {
  const backdrop = document.getElementById('lightboxBackdrop');
  if (!backdrop) return;
  backdrop.classList.remove('active');
  document.body.style.overflow = '';
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
    closeTechModal();
  }
});

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section.section-block[id]');
  const navLinks = document.querySelectorAll('nav.main-nav a[href^="#"]');
  let currentId = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentId = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    if (link.getAttribute('href') === '#' + currentId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}, { passive: true });

window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const langParam = params.get('lang');
  let savedLang = null;
  try {
    savedLang = localStorage.getItem('preferredLang');
  } catch (e) {}

  const initialLang = langParam || savedLang || 'tr';
  if (initialLang === 'en') {
    setLanguage('en');
  } else {
    setLanguage('tr');
  }
});

// ==========================================================================

// ==========================================================================
// Executive Project Dossier & Deep Technical Architecture Engine
// Clean, authoritative, zero-slop engineering documentation
// ==========================================================================

const techData = {
  aeonCore: {
    category: "Butik Otel & Restoran İşletim Sistemi · Canlı Mimari",
    title: "AEON Hospitality Core ERP & POS",
    subtitle: "Lüks Butik Oteller, Gurme Restoranlar ve Marinalar İçin Entegre İşletim Sistemi",
    overview: `
<div class="deep-section-block">
  <h3 class="deep-h3">Genel Bakış & Çalışma Prensibi</h3>
  <p class="deep-lead">AEON Core ERP; resepsiyon oda rezervasyonlarından plaj ve şezlong QR siparişlerine, mutfak şef ekranından (KDS) kat hizmetlerine kadar butik bir konaklama tesisinin tüm gelir ve operasyonel akışını tek bir yerel veritabanında birleştirir.</p>

  <div class="spec-grid">
    <div class="spec-card">
      <h4>Tek Folyoda Gelir Konsolidasyonu</h4>
      <p>Misafirin plajda, restoranda veya marinada yaptığı tüm harcamalar tek tıkla oda folyosuna kaydedilir. Check-out anında tüm departman harcamaları eksiksiz dökülür.</p>
    </div>
    <div class="spec-card">
      <h4>Mutfak KDS (Kitchen Display System)</h4>
      <p>Masadan veya şezlongdan verilen siparişler saniyeler içinde mutfak şef ekranına düşer. Hazırlanma ve servis süreleri renk kodlarıyla anlık takip edilir.</p>
    </div>
    <div class="spec-card">
      <h4>PIN Tabanlı Hızlı Terminal</h4>
      <p>Garson, resepsiyon ve şefler uzun oturum açma süreçleri yerine 4 haneli PIN ile yetkileri dahilinde saniyeler içinde işlem yapar.</p>
    </div>
    <div class="spec-card">
      <h4>Kesintisiz Yerel & Uç Mimari</h4>
      <p>Kıyı şeridinde sık yaşanan internet kopmalarında yerel SQLite motoruyla işlem yürütülür; bağlantı sağlandığında Cloudflare D1 ile asenkron çift yönlü eşitlenir.</p>
    </div>
  </div>

  <h3 class="deep-h3" style="margin-top: 24px;">Operasyonel Kullanım Senaryosu</h3>
  <p>Misafir plaj şezlongundaki QR kodu okutarak kokteyl siparişi verir. Garson el terminalinden siparişi onaylar; mutfaktaki ekranda hazırlık süreci başlar ve harcama misafirin oda folyosuna otomatik eklenir. Misafir otelden ayrılırken resepsiyonist oda numarasını tuşlar; plaj, bar ve konaklama tutarları tek hesap dökümünde tahsil edilir.</p>
</div>
`,
    problems: `
<div class="deep-section-block">
  <h3 class="deep-h3">Sektörel Problemler & Çözümler</h3>

  <div class="deep-card-grid">
    <div class="deep-card">
      <h4>Adisyon Kayıpları ve Tahsil Edilmeyen Servis Kaçakları</h4>
      <p>Kıyı ve plaj tesislerinde kâğıt adisyonlar rüzgarda kaybolur veya personelin yoğunluğunda kasaya iletilmez. AEON ERP'de her sipariş dijital olarak mutfağa ve oda folyosuna aynı anda işlendiği için tahsil edilmeyen servis zararları tamamen sıfırlanır.</p>
    </div>

    <div class="deep-card">
      <h4>Eski Nesil ERP'lerin Ağır Lisans ve Donanım Yükü</h4>
      <p>Geleneksel otel ERP'leri butik tesisler için fahiş lisans ücretleri, özel sunucu donanımı ve haftalarca eğitim gerektirir. AEON hafif web arayüzüyle 10 dakikada personele öğretilir ve sıfır ek donanım masrafıyla devreye girer.</p>
    </div>

    <div class="deep-card">
      <h4>Departmanlar Arası İletişim Kopukluğu</h4>
      <p>Garsonun kâğıt fişle mutfağa koşması servis süresini uzatır ve sipariş karmaşasına yol açar. Mutfak KDS ekranı gelen siparişleri geliş sırasına göre renklendirerek hazırlar ve garsona hazır bildirimi iletir.</p>
    </div>
  </div>
</div>
`,
    technical: `
<div class="deep-section-block">
  <h3 class="deep-h3">Teknoloji Yığını & Altyapı Bileşenleri</h3>
  <p class="deep-lead">Ağır sunucu yatırımı gerektirmeyen, internet kesintilerine dayanıklı hibrit yerel-uç (local-first edge) mimarisi.</p>

  <div class="tech-stack-table-wrap">
    <table class="inventory-table">
      <thead>
        <tr>
          <th>Katman</th>
          <th>Teknoloji & Kütüphane</th>
          <th>Mimari Görev & Rol</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Runtime & Gateway</strong></td>
          <td><code>Node.js 20 LTS</code></td>
          <td>Asenkron I/O olay döngüsü, SSE yayıncısı ve POS terminal API servisi</td>
        </tr>
        <tr>
          <td><strong>Yerel Veritabanı</strong></td>
          <td><code>SQLite / AlaSQL</code></td>
          <td>Tesis içi sunucuda sıfır gecikmeli ACID transaction ve offline veri saklama</td>
        </tr>
        <tr>
          <td><strong>Uç Bulut Eşitleme</strong></td>
          <td><code>Cloudflare D1 (Serverless SQL)</code></td>
          <td>Yönetim konsolu ve uzaktan raporlama için küresel dağıtık veri replikasyonu</td>
        </tr>
        <tr>
          <td><strong>Gerçek Zamanlı İletişim</strong></td>
          <td><code>Server-Sent Events (SSE)</code></td>
          <td>Mutfak KDS ve servis ekranlarına tek yönlü, hafif canlı sipariş akışı</td>
        </tr>
        <tr>
          <td><strong>Bildirim Motoru</strong></td>
          <td><code>WebPush API & Service Worker</code></td>
          <td>Garson el terminallerine anlık sesli ve titreşimli sipariş hazır uyarıları</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 class="deep-h3" style="margin-top: 28px;">Sistem Mimarisi & Veri Akış Şeması</h3>
  <div class="diagram-box">
[Misafir QR / Garson Terminali]
             │
             ▼ (HTTP POST / Authenticated Session)
   [Node.js 20 Yerel Gateway]
             │
   ┌─────────┴─────────────────────────────┐
   ▼                                       ▼
[Yerel SQLite Motoru]            [SSE Olay Yayıncısı]
(Atomik Folyo Güncellemesi)      (&lt;30ms Gecikmeli KDS Bildirimi)
   │                                       │
   ▼ (Async Background Sync)               ▼
[Cloudflare D1 Global Edge]      [Mutfak Şef Ekranı (KDS)]
  </div>

  <div class="spec-grid">
    <div class="spec-card">
      <h4>Offline-First Veri Güvencesi</h4>
      <p>Kıyı şeridinde fiber veya 4G koptuğunda yerel sunucu sipariş almaya ve adisyon kesmeye kesintisiz devam eder. Bağlantı geldiğinde çatışmasız çift yönlü senkronizasyon tamamlanır.</p>
    </div>
    <div class="spec-card">
      <h4>Milisaniyelik Yanıt & Hafif Protokol</h4>
      <p>WebSocket el sıkışma ek yükü yerine SSE kullanılarak düşük işlemci gücüne sahip tablet ve el terminallerinde bile pil dostu ve 50ms altı yanıt süreleri korunur.</p>
    </div>
    <div class="spec-card">
      <h4>4 Haneli PIN & HTTP-Only Güvenlik</h4>
      <p>Personel oturumları şifreli HTTP-only çerezlerde saklanır. 4 haneli PIN ile terminal başında beklemeler elenirken, yetki dışı indirim veya iptaller engellenir.</p>
    </div>
    <div class="spec-card">
      <h4>Atomik Adisyon Bütünlüğü</h4>
      <p>Tüm sipariş kalemleri misafirin oda folyosu ile atomik transaction seviyesinde kilitlenir. Yarım kalan veya veritabanına yazılmayan fiş riski ortadan kaldırılır.</p>
    </div>
  </div>
</div>
`,
    visual: `
<div class="deep-section-block">
  <h3 class="deep-h3">Yönetim Konsolu & Saha Ekran Analizi</h3>
  <p class="deep-lead">Tesis genel müdürü ve resepsiyon amirinin gün içi operasyonel nabzı tek ekranda izlediği ana konsol arayüzü.</p>

  <div class="visual-deduction-box">
    <div class="visual-deduction-media">
      <img src="assets/erp-aeon/Ekran Resmi 2026-07-12 16.30.03.png" alt="Aeon Core ERP Yönetim Konsolu">
    </div>
    <div class="visual-deduction-body">
      <h4>Ekran Çıkarımı: Anlık Ciro, Folyo ve Departman Analitiği</h4>
      <p>Bu ekran görüntüsü butik bir tesisin günlük canlı operasyonunu belgeler. Ekranın sol sütununda 12 odanın doluluk ve temizlik durumu renk kodlarıyla izlenir. Sağ panelde ise restoran, plaj barı ve oda servisinden gelen anlık adisyon dökümleri yer alır. Sistem, işletme sahibine günün herhangi bir anında tahsil edilen nakit, POS çekimleri ve açık folyoları kuruşu kuruşuna konsolide sunar.</p>
    </div>
  </div>
</div>
`
  },
  hotelRunner: {
    category: "Kanal Yöneticisi Entegrasyonu · Çift Yönlü API",
    title: "HotelRunner Çift Yönlü Kanal Entegrasyonu",
    subtitle: "Booking.com, Airbnb, Expedia ve Yerel ERP Arasında Sıfır Gecikmeli Envanter Köprüsü",
    overview: `
<div class="deep-section-block">
  <h3 class="deep-h3">Genel Bakış & Çalışma Prensibi</h3>
  <p class="deep-lead">Otelin yerel oda yönetim sistemi ile HotelRunner üzerinden Booking.com, Airbnb ve Expedia arasında anlık çift yönlü veri köprüsü kurar. Misafiri kapıda bırakan çifte rezervasyon (overbooking) riskini ve acente ceza puanlarını ortadan kaldırır.</p>

  <div class="spec-grid">
    <div class="spec-card">
      <h4>Çift Yönlü Envanter Senkronizasyonu</h4>
      <p>Resepsiyondan doğrudan satılan bir oda 1.2 saniye içinde Booking.com ve Airbnb'de satışa kapatılır.</p>
    </div>
    <div class="spec-card">
      <h4>Otomatik Rezervasyon & Folyo Açılışı</h4>
      <p>Dış kanaldan düşen rezervasyon anında yerel sisteme işlenir; misafir kartı ve oda folyosu otomatik açılır.</p>
    </div>
    <div class="spec-card">
      <h4>Dinamik Fiyat & MinLOS Senkronizasyonu</h4>
      <p>Hafta sonu fiyat artışları ve minimum konaklama kuralı (MinLOS) tek merkezden tüm kanallara aynı anda iletilir.</p>
    </div>
    <div class="spec-card">
      <h4>Manuel Giriş Hatalarına Son</h4>
      <p>Personelin OTA panellerinde saatlerce fiyat ve oda güncelleme yapma zorunluluğu ve unutma riski tamamen biter.</p>
    </div>
  </div>

  <h3 class="deep-h3" style="margin-top: 24px;">Operasyonel Kullanım Senaryosu</h3>
  <p>Misafir gece saat 02:00'de Airbnb üzerinden lüks taş villa için 3 gecelik rezervasyon yapar. Webhook sinyali yerel sisteme ulaşır; resepsiyon ekranında bildirim belirir, oda takvimi kapanır ve misafirin giriş kartı hazırlanır. Ertesi gün resepsiyonistin dış portalları tek tek kontrol etmesine gerek kalmaz.</p>
</div>
`,
    problems: `
<div class="deep-section-block">
  <h3 class="deep-h3">Sektörel Problemler & Çözümler</h3>

  <div class="deep-card-grid">
    <div class="deep-card">
      <h4>Overbooking (Çifte Rezervasyon) Felaketleri</h4>
      <p>Aynı odanın hem kapıdan hem Booking.com'dan aynı anda satılması butik otellerin en büyük krizidir. Çift yönlü köprü odayı 1.2 saniyede küresel satıştan çekerek overbooking riskini sıfırlar.</p>
    </div>

    <div class="deep-card">
      <h4>Acenteler Arası Fiyat Tutarsızlığı</h4>
      <p>Farklı portallarda farklı fiyat kalması hem marka prestijini zedeler hem acente sözleşme cezalarına yol açar. Tek merkezli fiyat matrisi pariteyi kusursuz korur.</p>
    </div>

    <div class="deep-card">
      <h4>Saatler Süren Manuel Envanter Güncellemesi</h4>
      <p>Sezon ortasında her gün 4 farklı portalda takvim güncellemek personelin asıl işi olan misafir ağırlamadan kopmasına yol açar. Otomasyon bu iş yükünü ortadan kaldırır.</p>
    </div>
  </div>
</div>
`,
    technical: `
<div class="deep-section-block">
  <h3 class="deep-h3">Teknoloji Yığını & Entegrasyon Protokolleri</h3>
  <p class="deep-lead">HotelRunner REST API v2 ve güvenli imza doğrulamalı webhook altyapısı.</p>

  <div class="tech-stack-table-wrap">
    <table class="inventory-table">
      <thead>
        <tr>
          <th>Katman</th>
          <th>Teknoloji & Kütüphane</th>
          <th>Mimari Görev & Rol</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Protokol & API</strong></td>
          <td><code>HotelRunner REST API v2</code></td>
          <td>Envanter müsaitlik, fiyat matrisi ve rezervasyon alım/aktarım uç noktaları</td>
        </tr>
        <tr>
          <td><strong>Güvenlik Doğrulaması</strong></td>
          <td><code>HMAC-SHA256 İmzalama</code></td>
          <td>Dış kanallardan gelen webhook yüklerinin sahteciliğe karşı doğrulanması</td>
        </tr>
        <tr>
          <td><strong>İşlem Kuyruğu</strong></td>
          <td><code>Idempotent Event Queue</code></td>
          <td>Aynı rezervasyon bildiriminin mükerrer işlenmesini önleyen benzersiz hash mekanizması</td>
        </tr>
        <tr>
          <td><strong>Hata Yönetimi</strong></td>
          <td><code>Exponential Backoff & Retry</code></td>
          <td>Ağ kesintilerinde başarısız API çağrılarının kademeli olarak yeniden denenmesi</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 class="deep-h3" style="margin-top: 28px;">Çift Yönlü Olay Akış Şeması</h3>
  <div class="diagram-box">
[Aeon ERP Resepsiyon Satışı] ──> [HMAC Signed Webhook] ──> [HotelRunner API Gateway]
                                                                  │
              ┌───────────────────────────────────────────────────┼────────────────────────┐
              ▼                                                   ▼                        ▼
      [Booking.com API]                                    [Airbnb OTA Sync]        [Expedia Partner]
    (&lt;1.2s Envanter Kapatma)                              (Takvim Güncelleme)      (Fiyat Paritesi)
  </div>

  <div class="spec-grid">
    <div class="spec-card">
      <h4>Idempotent Webhook Mimarisi</h4>
      <p>Acentelerden gelen her rezervasyon yükü benzersiz transaction UUID ile kontrol edilir. Çift gelen istekler filtrelenerek mükerrer folyo açılması önlenir.</p>
    </div>
    <div class="spec-card">
      <h4>Rate-Limit & Kota Koruması</h4>
      <p>Dış portalların API hız sınırlarına takılmamak için anlık istek kuyruğu token-bucket algoritmasıyla regüle edilir.</p>
    </div>
  </div>
</div>
`,
    visual: `
<div class="deep-section-block">
  <h3 class="deep-h3">Dolphin PMS · HotelRunner Kanal Yönetimi Ekranı</h3>
  <p class="deep-lead">Rezervasyon alımı, müsaitlik aktarımı, fiyat eşitleme ve tam mutabakat süreçlerinin yönetildiği operasyonel kanal paneli.</p>

  <div class="visual-deduction-box">
    <div class="visual-deduction-media">
      <img src="assets/erp-aeon/hotelrunner-channel.png" alt="Dolphin PMS HotelRunner Kanal Yönetimi Paneli">
    </div>
    <div class="visual-deduction-body">
      <h4>Ekran Çıkarımı: Canlı OTA Senkronizasyon & Durum İzleme Merkezi</h4>
      <p>Görselde Dolphin PMS bünyesindeki HotelRunner Kanal Yönetim Paneli görülmektedir. Rezervasyonları Al, Müsaitliği Gönder, Fiyatları Eşitle ve Tam Mutabakat modülleri üzerinden aktif OTA kanalları, işlem bekleyen rezervasyonlar, oda/fiyat eşleştirmeleri ve bağlantı sağlığı anlık olarak denetlenmektedir.</p>
    </div>
  </div>
</div>
`
  },

  crm: {
    category: "Müşteri İlişkileri & Satış Hunisi · B2B Pipeline",
    title: "Satış Hunisi & Müşteri CRM",
    subtitle: "WhatsApp, Telefon ve Web Taleplerini Aşamalı Gelir Hunisinde Yöneten Satış Platformu",
    overview: `
<div class="deep-section-block">
  <h3 class="deep-h3">Genel Bakış & Çalışma Prensibi</h3>
  <p class="deep-lead">WhatsApp, telefon ve web formlarından gelen tüm konaklama, düğün ve özel etkinlik taleplerini aşamalı bir satış hunisinde (pipeline) toplayan müşteri ilişkileri yönetim sistemidir.</p>

  <div class="spec-grid">
    <div class="spec-card">
      <h4>Aşamalı Satış Hunisi (Pipeline)</h4>
      <p>Yeni Talep -> Ön Teklif İletildi -> Fiyat Onaylandı -> Depozito Alındı -> Kesin Rezervasyon aşamalarıyla tam takip.</p>
    </div>
    <div class="spec-card">
      <h4>Unutulan Talepleri Sıfırlama</h4>
      <p>Personelin yoğunlukta unuttuğu yüksek değerli misafir talepleri için zaman aşımı uyarıları üretir.</p>
    </div>
    <div class="spec-card">
      <h4>Misafir Profil Hafızası</h4>
      <p>Misafirin geçmiş konaklamaları, özel diyet tercihleri ve harcama alışkanlıkları sonraki rezervasyonlarda anında ekrana gelir.</p>
    </div>
    <div class="spec-card">
      <h4>Dinamik Teklif Mektubu Üretimi</h4>
      <p>Grup ve kurumsal etkinlikler için fiyat, oda dağılımı ve şartları içeren resmi PDF teklif linki saniyeler içinde oluşturulur.</p>
    </div>
  </div>
</div>
`,
    problems: `
<div class="deep-section-block">
  <h3 class="deep-h3">Sektörel Problemler & Çözümler</h3>

  <div class="deep-card-grid">
    <div class="deep-card">
      <h4>WhatsApp'ta Kaybolan Yüksek Değerli Talepler</h4>
      <p>Farklı personelin şahsi telefonlarına gelen konaklama talepleri takip edilemez ve potansiyel misafirler yanıtsız kalarak rakip tesislere kaçar. CRM tüm kanalları tek havuzda birleştirir.</p>
    </div>

    <div class="deep-card">
      <h4>Fiyat Tutarsızlığı ve Personel İnisiyatifi</h4>
      <p>Farklı personelin aynı döneme farklı fiyat teklifi vermesi misafir nezdinde güven kaybı yaratır. Sistem onaylı fiyat matrisi üzerinden standart teklifler sunar.</p>
    </div>
  </div>
</div>
`,
    technical: `
<div class="deep-section-block">
  <h3 class="deep-h3">Teknoloji Yığını & Mimari</h3>
  <p class="deep-lead">Modern ilişkisel veri modeli ve çoklu kanal bildirim köprüsü.</p>

  <div class="tech-stack-table-wrap">
    <table class="inventory-table">
      <thead>
        <tr>
          <th>Katman</th>
          <th>Teknoloji & Kütüphane</th>
          <th>Mimari Görev & Rol</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Veritabanı</strong></td>
          <td><code>PostgreSQL / Supabase</code></td>
          <td>İlişkisel misafir profili, harcama geçmişi ve aşamalı pipeline tablosu</td>
        </tr>
        <tr>
          <td><strong>İletişim Köprüsü</strong></td>
          <td><code>WhatsApp Business API Webhook</code></td>
          <td>Mesajların otomatik müşteri kartına işlenmesi ve şablon yanıt iletimi</td>
        </tr>
        <tr>
          <td><strong>Belge Motoru</strong></td>
          <td><code>PDFKit / Headless Renderer</code></td>
          <td>Dinamik kurumsal teklif ve sözleşme dokümanlarının üretimi</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
    visual: `
<div class="deep-section-block">
  <h3 class="deep-h3">Satış Hunisi & Misafir Kartı İncelemesi</h3>
  <p class="deep-lead">Satış ekibinin tekliften kapora tahsilatına kadar süreci yönettiği Kanban arayüzü.</p>

  <div class="visual-deduction-box">
    <div class="visual-deduction-media">
      <img src="assets/crm/luce-dashboard.png" alt="CRM Satış Hunisi ve Talep Yönetimi">
    </div>
    <div class="visual-deduction-body">
      <h4>Ekran Çıkarımı: Aşamalı Satış Pipeline ve Dönüşüm Oranları</h4>
      <p>Bu ekran, tesisin aylık satış performansını gösterir. Her kart bir potansiyel misafiri ve talep tutarını simgeler. Sürükle-bırak mekaniğiyle aşama değiştiren taleplerde dönüşüm oranları (% Win Rate) otomatik hesaplanır.</p>
    </div>
  </div>
</div>
`
  },

  hotelWeb: {
    category: "Prestij Web Mimarisi · Doğrudan Rezervasyon",
    title: "Lüks Butik Otel Web Vitrini",
    subtitle: "Acente Komisyonlarını Sıfırlayan Yüksek Hızlı Editoryal Vitrin ve Doğrudan Satış Motoru",
    overview: `
<div class="deep-section-block">
  <h3 class="deep-h3">Genel Bakış & Çalışma Prensibi</h3>
  <p class="deep-lead">Seçkin kıyı otelleri ve marinalar için tasarlanan yüksek hızlı editoryal vitrin ve doğrudan rezervasyon motorudur. Acentelere ödenen %15-%25 komisyon kesintilerini ortadan kaldırır.</p>

  <div class="spec-grid">
    <div class="spec-card">
      <h4>%0 Acente Komisyonu</h4>
      <p>Misafir doğrudan otelin kendi web sitesinden rezervasyon yapar; komisyon aracı kurumlarda kalmaz.</p>
    </div>
    <div class="spec-card">
      <h4>98+ Core Web Vitals Skoru</h4>
      <p>Cloudflare global CDN uçlarında &lt;40ms yüklenme hızıyla misafiri bekletmeden içeriği sunar.</p>
    </div>
    <div class="spec-card">
      <h4>Lüks Editoryal Tipografi</h4>
      <p>Üst gelir grubu misafire hitap eden seçkin görsel dil ve yüksek çözünürlüklü oda turları.</p>
    </div>
  </div>
</div>
`,
    problems: `
<div class="deep-section-block">
  <h3 class="deep-h3">Sektörel Problemler & Çözümler</h3>

  <div class="deep-card-grid">
    <div class="deep-card">
      <h4>Acentelere Kaptırılan Yüksek Kâr Marjları</h4>
      <p>Butik oteller cirolarının dörtte birini Booking ve acentelere komisyon olarak bırakır. Doğrudan rezervasyon motoru bu geliri tesis kasasında tutar.</p>
    </div>

    <div class="deep-card">
      <h4>Yavaş ve Şablon Sitelerin Güven Kaybı</h4>
      <p>Ağır WordPress temaları mobilde geç açılarak misafirin satın alma kararından vazgeçmesine neden olur. Hafif statik mimari anında açılır.</p>
    </div>
  </div>
</div>
`,
    technical: `
<div class="deep-section-block">
  <h3 class="deep-h3">Teknoloji Yığını & Uç Dağıtım</h3>
  <p class="deep-lead">Statik site üretimi (SSG) ve küresel edge caching altyapısı.</p>

  <div class="tech-stack-table-wrap">
    <table class="inventory-table">
      <thead>
        <tr>
          <th>Katman</th>
          <th>Teknoloji & Kütüphane</th>
          <th>Mimari Görev & Rol</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Frontend</strong></td>
          <td><code>Next.js SSG / HTML5</code></td>
          <td>Statik derlenmiş, SEO uyumlu ve sıfır gecikmeli sayfa oluşturma</td>
        </tr>
        <tr>
          <td><strong>Dağıtım & CDN</strong></td>
          <td><code>Cloudflare Pages / Edge Network</code></td>
          <td>Küresel 300+ noktada &lt;40ms içerik teslimi ve otomatik SSL</td>
        </tr>
        <tr>
          <td><strong>Görsel Optimizasyonu</strong></td>
          <td><code>WebP & AVIF Pipeline</code></td>
          <td>Oda ve manzara fotoğraflarını kaliteden ödün vermeden %80 sıkıştırma</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
    visual: `
<div class="deep-section-block">
  <h3 class="deep-h3">Web Vitrini & Doğrudan Satış Deneyimi</h3>
  <p class="deep-lead">Misafirin odayı inceleyip doğrudan rezervasyon adımına geçtiği minimalist tasarım.</p>

  <div class="visual-deduction-box">
    <div class="visual-deduction-media">
      <img src="assets/bozburun-yacht-club/byc-home.png" alt="Lüks Otel Web Vitrini">
    </div>
    <div class="visual-deduction-body">
      <h4>Ekran Çıkarımı: Doğrudan Satış & Editoryal Marka Prestiji</h4>
      <p>Görselde, tesisin mimarisini ve oda özelliklerini ön plana çıkaran editoryal tipografi ve doğrudan rezervasyon butonu sergilenmektedir. Üçüncü taraf aracı sitelerin kalabalık arayüzü yerine otelin özgün kimliği vurgulanmıştır.</p>
    </div>
  </div>
</div>
`
  },
  retailPulse: {
    category: "Mağaza İçi Müşteri Zekâsı · BİLGİSAYARLI GÖRÜ",
    title: "RetailPulse AI: Perakende Davranış Analitiği",
    subtitle: "Mevcut Güvenlik Kameralarından Müşteri Trafiği, Reyon Bekleme Süresi ve Dönüşüm Ölçümü",
    overview: `
<div class="deep-section-block">
  <h3 class="deep-h3">Genel Bakış & Çalışma Prensibi</h3>
  <p class="deep-lead">Mağazadaki mevcut tavan kameralarından müşteri trafiğini ve reyon önü bekleme sürelerini ölçen, POS kasa fişleriyle eşleştirerek gerçek satışa dönüşüm oranını (% Conversion) hesaplayan yerel bilgisayarlı görü motorudur.</p>

  <div class="spec-grid">
    <div class="spec-card">
      <h4>%100 KVKK & Sıfır Disk Kaydı</h4>
      <p>Görüntüler buluta yüklenmez; yerel cihaz RAM'inde analiz edilip milisaniyeler içinde kalıcı olarak silinir.</p>
    </div>
    <div class="spec-card">
      <h4>Zemin Homografisi & Dwell Time</h4>
      <p>Kamera açısının perspektif bozulması düzeltilerek reyon önünde geçen bekleme süresi saniye hassasiyetinde ölçülür.</p>
    </div>
    <div class="spec-card">
      <h4>POS Korelasyonu</h4>
      <p>Giren kişi sayısı kasadaki fiş adediyle bölünerek vitrinin veya personelin gerçek satış başarısı ortaya çıkarılır.</p>
    </div>
  </div>
</div>
`,
    problems: `
<div class="deep-section-block">
  <h3 class="deep-h3">Sektörel Problemler & Çözümler</h3>

  <div class="deep-card-grid">
    <div class="deep-card">
      <h4>Kör Satış Kararları & Tahmine Dayalı Mağazacılık</h4>
      <p>Perakendeciler mağazaya kaç kişinin girdiğini, hangi reyonların ilgi görüp hangi ürünlerin es geçildiğini bilmez. Sistem bu körlüğü somut analitik verilere dönüştürür.</p>
    </div>

    <div class="deep-card">
      <h4>KVKK Cezaları ve Müşteri Gizlilik Kaygısı</h4>
      <p>Yüz tanıma yapan veya buluta görüntü aktaran sistemler ağır yasal cezalarla karşılaşır. RetailPulse yüz tanıma yapmaz; sadece iskelet koordinatı sayar.</p>
    </div>
  </div>
</div>
`,
    technical: `
<div class="deep-section-block">
  <h3 class="deep-h3">Teknoloji Yığını & Görü İşlem Hattı</h3>
  <p class="deep-lead">Edge AI donanımı üzerinde çalışan gerçek zamanlı çıkarım motoru.</p>

  <div class="tech-stack-table-wrap">
    <table class="inventory-table">
      <thead>
        <tr>
          <th>Katman</th>
          <th>Teknoloji & Kütüphane</th>
          <th>Mimari Görev & Rol</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Görü Motoru</strong></td>
          <td><code>YOLOv8s + ByteTrack</code></td>
          <td>25-30 FPS gerçek zamanlı kişi tespiti ve kimlik çakışmasız iz takibi</td>
        </tr>
        <tr>
          <td><strong>Zemin Projeksiyonu</strong></td>
          <td><code>Homografi Matrisi (OpenCV)</code></td>
          <td>Kamera perspektifinin kuşbakışı 2D zemin koordinatına dönüştürülmesi</td>
        </tr>
        <tr>
          <td><strong>Dönüşüm Motoru</strong></td>
          <td><code>ConversionEngine (Python)</code></td>
          <td>Düzeltilmiş ziyaretçi sayısına karşı fiş adedinden dönüşüm oranı hesabı</td>
        </tr>
        <tr>
          <td><strong>Uç Donanım</strong></td>
          <td><code>Nvidia Jetson Orin / Mini PC</code></td>
          <td>Mağaza içi dolapta çalışan tak-çalıştır çıkarım ünitesi</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 class="deep-h3" style="margin-top: 28px;">Görü İşlem Hattı Şeması</h3>
  <div class="diagram-box">
[Tavan IP Kamera (RTSP)]
             │
             ▼ (Kare Yakalama / 25 FPS)
   [YOLOv8s Kişi Tespiti]
             │
             ▼ (ByteTrack Kimlik Takibi)
   [Homografi Zemin Projeksiyonu]
             │
   ┌─────────┴─────────────────────────┐
   ▼                                   ▼
[Dwell-Time & Isı Haritası]    [POS Fiş Korelasyonu]
(RAM'de İşlenir, Kare Silinir)  (Dönüşüm % Göstergesi)
  </div>
</div>
`,
    visual: `
<div class="deep-section-block">
  <h3 class="deep-h3">Mağaza Yoğunluk & Isı Haritası Ekranı</h3>
  <p class="deep-lead">Ziyaretçi hareketinin ve reyon ilgisinin izlendiği analitik konsolu.</p>

  <div class="visual-deduction-box">
    <div class="visual-deduction-media">
      <img src="assets/retail-analytics/desktop-hero.png" alt="RetailPulse AI Mağaza Analitik Paneli">
    </div>
    <div class="visual-deduction-body">
      <h4>Ekran Çıkarımı: Yoğunluk, Bekleme ve Dönüşüm Göstergeleri</h4>
      <p>Konsolda mağaza krokisi üzerinde anlık yoğunluk, reyon önü bekleme süreleri ve kasa dönüşüm göstergesi bir arada sunulur. Kamera analiz görüntüsünde tespit kutuları ve iz çizgileriyle takip doğrulanır.</p>
    </div>
  </div>
</div>
`
  },

  funnivarium: {
    category: "Turnike & Kaçak Biniş Denetimi · EĞLENCE & ULAŞIM",
    title: "PassAudit OS: Turnike & Kaçak Biniş Denetimi",
    subtitle: "Turnike Bilet Sayımları ile Kamera Biniş Tespitini Karşılaştıran Bilet Kaçağı Önleme Sistemi",
    overview: `
<div class="deep-section-block">
  <h3 class="deep-h3">Genel Bakış & Çalışma Prensibi</h3>
  <p class="deep-lead">Eğlence merkezleri, tematik parklar ve ulaşım terminallerinde turnikeden okutulan bilet sayısı ile kameranın tespit ettiği gerçek biniş sayısını anlık olarak karşılaştıran denetim paneli. Bilet basmadan turnikeden atlayan veya usulsüz geçen binişleri anında yakalayarak her gün uğranılan ciddi bilet geliri sızıntısını durdurur.</p>

  <div class="spec-grid">
    <div class="spec-card">
      <h4>Turnike & Tripwire Audit</h4>
      <p>Fiziki turnike tetikleme sinyali ile kamera tripwire sanal çizgi geçişi milisaniyeler içinde eşleştirilir.</p>
    </div>
    <div class="spec-card">
      <h4>Kaçak Biniş Alarmı</h4>
      <p>Biletsiz geçiş, turnike üstünden atlama veya çift geçiş yapıldığında görsel kanıtla anında uyarı üretir.</p>
    </div>
    <div class="spec-card">
      <h4>Kayıp Ciro Hesabı</h4>
      <p>Kaçak biniş adedi bilet birim fiyatıyla çarpılarak gün içi gerçek gelir kaybı anlık olarak hesaplanır.</p>
    </div>
    <div class="spec-card">
      <h4>Kuyruk ve Ünite Doluluğu</h4>
      <p>Kuyrukta bekleyen kişi sayısı ve ünite doluluk oranları eşzamanlı izlenerek seans süreleri optimize edilir.</p>
    </div>
  </div>
</div>
`,
    problems: `
<div class="deep-section-block">
  <h3 class="deep-h3">Sektörel Problemler & Çözümler</h3>

  <div class="deep-card-grid">
    <div class="deep-card">
      <h4>Görünmez Bilet Sızıntısı & Personel Suistimali</h4>
      <p>Turnikelerin manuel açılması, tanıdık geçirme veya turnike üstünden atlamalar her gün ciddi ciro kaybına yol açar. Sistem kamera tespitini turnike veritabanıyla otomatik mutabakata sokarak suistimali sıfıra indirir.</p>
    </div>

    <div class="deep-card">
      <h4>Kuyruk Darboğazları & Güvenlik İhlalleri</h4>
      <p>Ünitelerdeki yığılma ve bariyer ihlalleri manuel fark edilemez. PassAudit OS gerçek zamanlı yoğunluk ve jeo-çit (geofence) takibiyle hem güvenliği hem operasyon akışını denetler.</p>
    </div>
  </div>
</div>
`,
    technical: `
<div class="deep-section-block">
  <h3 class="deep-h3">Teknoloji Yığını & Denetim Hattı</h3>
  <p class="deep-lead">Mevcut IP kameralar ve turnike PLC/kart okuyucularıyla entegre çalışan uç denetim mimarisi.</p>

  <div class="tech-stack-table-wrap">
    <table class="inventory-table">
      <thead>
        <tr>
          <th>Katman</th>
          <th>Teknoloji & Kütüphane</th>
          <th>Mimari Görev & Rol</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Görü & Takip</strong></td>
          <td><code>YOLOv8 + Tripwire Çizgi Analizi</code></td>
          <td>Turnike geçiş çizgisi ve ünite biniş koltuklarının gerçek zamanlı sayımı</td>
        </tr>
        <tr>
          <td><strong>Turnike Entegrasyonu</strong></td>
          <td><code>TCP/IP Socket & PLC Entegratörü</code></td>
          <td>Kart/barkod okuma zaman damgalarının milisaniye hassasiyetinde çekilmesi</td>
        </tr>
        <tr>
          <td><strong>Mutabakat Motoru</strong></td>
          <td><code>Audit Engine (Python)</code></td>
          <td>Turnike sinyali ile görsel biniş sayısının anlık delta mutabakatı</td>
        </tr>
        <tr>
          <td><strong>Uç Donanım</strong></td>
          <td><code>Nvidia Jetson / Endüstriyel Mini PC</code></td>
          <td>Saha kabininde çalışan 7/24 kesintisiz yerel çıkarım sunucusu</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
    visual: `
<div class="deep-section-block">
  <h3 class="deep-h3">Turnike & Biniş Denetim Paneli</h3>
  <p class="deep-lead">Bilet satışları ile kamera tespitli biniş sayılarının karşılaştırıldığı operasyon paneli.</p>

  <div class="visual-deduction-box">
    <div class="visual-deduction-media">
      <img src="assets/vip/funnivarium.png" alt="PassAudit OS Biniş Denetim Paneli">
    </div>
    <div class="visual-deduction-body">
      <h4>Ekran Çıkarımı: Bilet-Biniş Farkı ve Kuyruk Yoğunluğu</h4>
      <p>Panelde turnike okutma sayıları ile kameranın saydığı gerçek binişler yan yana izlenir; fark oluşan üniteler denetim kuyruğuna düşer. Kuyruk bekleme süreleri ve ünite dolulukları aynı ekrandan takip edilir.</p>
    </div>
  </div>
</div>
`
  },

  sanayiPulse: {
    category: "Fabrika & Depo Rampa Zekâsı · ENDÜSTRİYEL LOJİSTİK",
    title: "SanayiPulse: Fabrika & Rampa Lojistiği",
    subtitle: "TIR Giriş-Çıkış, Rampa Doluluk ve Bekleme Sürelerini İzleyen Endüstriyel Görü Sistemi",
    overview: `
<div class="deep-section-block">
  <h3 class="deep-h3">Genel Bakış & Çalışma Prensibi</h3>
  <p class="deep-lead">Ağır sanayi tesisleri ve yükleme rampalarında TIR giriş-çıkış sürelerini, rampa doluluklarını ve İSG güvenlik koridorlarını 7/24 izleyen endüstriyel görü sistemidir.</p>

  <div class="spec-grid">
    <div class="spec-card">
      <h4>Rampa Doluluk Takibi</h4>
      <p>Hangi rampanın dolu, hangisinin boş olduğu anlık haritada izlenir; sevkiyat planlaması kör uçuştan çıkar.</p>
    </div>
    <div class="spec-card">
      <h4>Bekleme Süresi Ölçümü</h4>
      <p>TIR'ların tesiste ve rampada geçirdiği süre damgalanır; gecikme cezalarının (demurrage) kök nedeni bulunur.</p>
    </div>
    <div class="spec-card">
      <h4>İSG Koridor Denetimi</h4>
      <p>Forklift ve yaya koridorlarındaki ihlaller anlık uyarı olarak güvenlik ekibine iletilir.</p>
    </div>
    <div class="spec-card">
      <h4>Olay İnceleme Kaydı</h4>
      <p>Kritik olaylar zaman damgasıyla işaretlenir; vardiya amiri geçmişe dönük hızlı inceleme yapar.</p>
    </div>
  </div>
</div>
`,
    problems: `
<div class="deep-section-block">
  <h3 class="deep-h3">Sektörel Problemler & Çözümler</h3>

  <div class="deep-card-grid">
    <div class="deep-card">
      <h4>Demurrage Cezaları ve Görünmez Darboğazlar</h4>
      <p>Rampada saatlerce bekleyen TIR'lar lojistik ceza faturası doğurur. Süre ölçümü darboğazın hangi vardiya ve rampada oluştuğunu gösterir.</p>
    </div>

    <div class="deep-card">
      <h4>Forklift ve Saha Kazaları</h4>
      <p>Fabrika içi koridor ihlalleri güvenlik kameralarında kayda girer ama kimse izlemez. Anlık uyarı hattı kazadan önce müdahale imkânı verir.</p>
    </div>
  </div>
</div>
`,
    technical: `
<div class="deep-section-block">
  <h3 class="deep-h3">Teknoloji Yığını & Saha Hattı</h3>
  <p class="deep-lead">Dış ortam kameralarına dayanıklı endüstriyel çıkarım mimarisi.</p>

  <div class="tech-stack-table-wrap">
    <table class="inventory-table">
      <thead>
        <tr>
          <th>Katman</th>
          <th>Teknoloji & Kütüphane</th>
          <th>Mimari Görev & Rol</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Araç & Plaka Bölgesi</strong></td>
          <td><code>YOLOv8 + Bölge Takibi</code></td>
          <td>Rampa alanına giren TIR ve forkliftlerin bölge bazlı izlenmesi</td>
        </tr>
        <tr>
          <td><strong>Akış</strong></td>
          <td><code>RTSP / ONVIF</code></td>
          <td>Tesisin mevcut güvenlik kameralarından doğrudan görüntü alımı</td>
        </tr>
        <tr>
          <td><strong>Donanım</strong></td>
          <td><code>Endüstriyel Mini PC</code></td>
          <td>Tozlu ve sıcak saha koşullarına uygun fanless çıkarım ünitesi</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
    visual: `
<div class="deep-section-block">
  <h3 class="deep-h3">Rampa Doluluk ve Lojistik Takip Ekranı</h3>
  <p class="deep-lead">Yükleme alanının canlı durumunun izlendiği operasyon konsolu.</p>

  <div class="visual-deduction-box">
    <div class="visual-deduction-media">
      <img src="assets/retail-analytics/camera-analysis.png" alt="SanayiPulse Rampa Analiz Ekranı">
    </div>
    <div class="visual-deduction-body">
      <h4>Ekran Çıkarımı: Araç Tespiti ve Bölge İzleme</h4>
      <p>Kamera analiz ekranında araç tespit kutuları ve rampa bölgeleri işaretlenmiştir. Panel tarafında her rampanın doluluk süresi ve bekleyen araç kuyruğu listelenir.</p>
    </div>
  </div>
</div>
`
  },
  vent: {
    category: "Flutter & Firebase · MAĞAZADA CANLI",
    title: "Vent: Duygusal Destek & Anonim İletişim Ağı",
    subtitle: "Konu Odaklı Eşleşme, 37 Dil ve Rızalı Sohbet Mimarisi",
    overview: `
<div class="deep-section-block">
  <h3 class="deep-h3">Genel Bakış & Çalışma Prensibi</h3>
  <p class="deep-lead">İnsanları profil fotoğrafları veya takipçi sayıları yerine konuşmak istedikleri spesifik duygu ve 222 konu başlığı üzerinden 1-e-1 anonim dertleşme odalarında buluşturan mobil uygulamadır. App Store ve Google Play'de canlıdır.</p>

  <div class="spec-grid">
    <div class="spec-card">
      <h4>222 Konu Başlığı</h4>
      <p>12 kategori altında duygu ve yaşam odaklı alt konular; kullanıcı önce ne konuşacağını seçer.</p>
    </div>
    <div class="spec-card">
      <h4>37 Dil & Otomatik Çeviri</h4>
      <p>Eşleşme dili ve sohbet çevirisiyle küresel kullanıcılar kendi dillerinde dertleşir.</p>
    </div>
    <div class="spec-card">
      <h4>Çift Taraflı Rıza</h4>
      <p>Sohbet odası iki tarafın konu onayından sonra açılır; istenmeyen temas baştan elenir.</p>
    </div>
    <div class="spec-card">
      <h4>Sızıntı Filtresi</h4>
      <p>Kişisel bilgi paylaşımını yakalayan otomatik filtre güvenli iletişim katmanı kurar.</p>
    </div>
  </div>
</div>
`,
    problems: `
<div class="deep-section-block">
  <h3 class="deep-h3">Sektörel Problemler & Çözümler</h3>

  <div class="deep-card-grid">
    <div class="deep-card">
      <h4>Beğeni Baskısı ve Yüzeysel Eşleşme</h4>
      <p>Klasik sosyal uygulamalar dış görünüş ve takipçi sayısına indirgenir. Vent ilk teması konuşma bağlamına dayandırarak bu baskıyı kaldırır.</p>
    </div>

    <div class="deep-card">
      <h4>Güvensiz Anonim Sohbet Deneyimi</h4>
      <p>Anonim platformlarda taciz ve istenmeyen mesaj yaygındır. Konu onayı ve rıza mekaniği güvenli alan kurar.</p>
    </div>
  </div>
</div>
`,
    technical: `
<div class="deep-section-block">
  <h3 class="deep-h3">Teknoloji Yığını & Eşleşme Hattı</h3>
  <p class="deep-lead">Küresel ölçekte gerçek zamanlı eşleşme ve sohbet altyapısı.</p>

  <div class="tech-stack-table-wrap">
    <table class="inventory-table">
      <thead>
        <tr>
          <th>Katman</th>
          <th>Teknoloji & Kütüphane</th>
          <th>Mimari Görev & Rol</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Mobil</strong></td>
          <td><code>Flutter 3.24+ / Dart</code></td>
          <td>iOS ve Android için tek kod tabanlı istemci</td>
        </tr>
        <tr>
          <td><strong>Veri & Sohbet</strong></td>
          <td><code>Firebase Firestore</code></td>
          <td>Gerçek zamanlı eşleşme kuyruğu ve mesaj akışı</td>
        </tr>
        <tr>
          <td><strong>Gelir</strong></td>
          <td><code>RevenueCat (IAP)</code></td>
          <td>Abonelik ve uygulama içi satın alma yönetimi</td>
        </tr>
        <tr>
          <td><strong>Yerelleştirme</strong></td>
          <td><code>37 Dil Paketi</code></td>
          <td>Ayrı eşleşme dili ve otomatik sohbet çevirisi</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
    visual: `
<div class="deep-section-block">
  <h3 class="deep-h3">Konu Seçimi & Eşleşme Ekranları</h3>
  <p class="deep-lead">Kullanıcının duygu ve niyetini seçip eşleşmeye girdiği akış.</p>

  <div class="visual-deduction-box">
    <div class="visual-deduction-media">
      <img src="assets/vent/vent-topic-request.jpeg" alt="Vent Konu Seçim ve Eşleşme Ekranı">
    </div>
    <div class="visual-deduction-body">
      <h4>Ekran Çıkarımı: Konu Odaklı İlk Temas</h4>
      <p>Ekranda kullanıcının alt konu ve niyet seçimi, ardından karşılıklı kabulle açılan sohbet odası akışı görülür. Dil seçimi ve çeviri rozetleri küresel eşleşmeyi destekler.</p>
    </div>
  </div>
</div>
`
  },

  forge: {
    category: "Flutter + Supabase + Next.js · GELİŞTİRİLME AŞAMASINDA",
    title: "Forge: Sporcu Topluluğu & Antrenman Ağı",
    subtitle: "Harita Keşfi, Etkinlikler ve Antrenör Pazar Yeriyle Hibrit Spor Ekosistemi",
    overview: `
<div class="deep-section-block">
  <h3 class="deep-h3">Genel Bakış & Çalışma Prensibi</h3>
  <p class="deep-lead">Sporcuların antrenman rekorlarını (PR), programlarını ve videolarını paylaştığı; harita üzerinden yakınındaki spor salonlarını ve seviyesine uygun antrenman partnerlerini bulduğu dikey sosyal ağdır.</p>

  <div class="spec-grid">
    <div class="spec-card">
      <h4>Harita ile Salon Keşfi</h4>
      <p>Yakındaki salonlar, gruplar ve topluluk sayfaları konum bazlı listelenir.</p>
    </div>
    <div class="spec-card">
      <h4>Etkinlik & Eşleşme</h4>
      <p>Antrenman etkinlikleri, partner talepleri ve seviye bazlı eşleşme akışları.</p>
    </div>
    <div class="spec-card">
      <h4>PR & Antrenman Akışı</h4>
      <p>Rekor paylaşımları, program şablonları ve ilerleme rozetleri.</p>
    </div>
    <div class="spec-card">
      <h4>Hibrit Mobil + Web</h4>
      <p>Mobil ve web yüzleri aynı veri sözleşmesiyle çalışan ortak omurga.</p>
    </div>
  </div>
</div>
`,
    problems: `
<div class="deep-section-block">
  <h3 class="deep-h3">Sektörel Problemler & Çözümler</h3>

  <div class="deep-card-grid">
    <div class="deep-card">
      <h4>Yalnız Antrenman ve Motivasyon Kaybı</h4>
      <p>Tek başına spor yapanların bırakma oranı yüksektir. Seviyeye uygun partner eşleşmesi sürekliliği artırır.</p>
    </div>

    <div class="deep-card">
      <h4>Dağınık Spor Toplulukları</h4>
      <p>Salon duyuruları, etkinlikler ve antrenör ilanları farklı platformlara saçılır. Forge hepsini tek haritada toplar.</p>
    </div>
  </div>
</div>
`,
    technical: `
<div class="deep-section-block">
  <h3 class="deep-h3">Teknoloji Yığını & Veri Omurgası</h3>
  <p class="deep-lead">Mobil ve web istemcileri tek Supabase omurgasında birleşir.</p>

  <div class="tech-stack-table-wrap">
    <table class="inventory-table">
      <thead>
        <tr>
          <th>Katman</th>
          <th>Teknoloji & Kütüphane</th>
          <th>Mimari Görev & Rol</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Mobil</strong></td>
          <td><code>Flutter / Dart</code></td>
          <td>Akış, harita ve antrenman kayıt istemcisi</td>
        </tr>
        <tr>
          <td><strong>Veri & Yetki</strong></td>
          <td><code>Supabase + RLS</code></td>
          <td>Satır seviyesi güvenlikli topluluk veri modeli</td>
        </tr>
        <tr>
          <td><strong>Web</strong></td>
          <td><code>Next.js</code></td>
          <td>Etkinlik ve salon keşif web yüzü</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
    visual: `
<div class="deep-section-block">
  <h3 class="deep-h3">Navigasyon & Topluluk Akışı</h3>
  <p class="deep-lead">Harita, etkinlik ve antrenman sekmeleriyle topluluk deneyimi.</p>

  <div class="visual-deduction-box">
    <div class="visual-deduction-media">
      <img src="assets/forge/screenshot_navigation.png" alt="Forge Navigasyon ve Akış Ekranı">
    </div>
    <div class="visual-deduction-body">
      <h4>Ekran Çıkarımı: Harita ve PR Akışı</h4>
      <p>Navigasyon ekranında harita keşfi, topluluk akışı ve antrenman kayıt sekmeleri görülür. Örnek içerikler arayüz düzenini belgeler; beğeni sayıları gerçek kullanım metriği değildir.</p>
    </div>
  </div>
</div>
`
  },

  bob: {
    category: "Edge-TTS & Gemini AI · GELİŞTİRİLME AŞAMASINDA",
    title: "BOB: Erteleme Karşıtı Alaycı Akıllı Alarm",
    subtitle: "Yapay Zekâ Destekli Acımasız Sabah Roast'ları ve Nöral Ses Sentezi",
    overview: `
<div class="deep-section-block">
  <h3 class="deep-h3">Genel Bakış & Çalışma Prensibi</h3>
  <p class="deep-lead">Sabah alarmını sürekli erteleyen kullanıcıları; standart melodiler yerine yapay zekâ destekli alaycı, sarkastik ve acımasız sesli uyarılarla yataktan kaldıran karakter tabanlı akıllı alarmdır. Yastığa sığınmayı konfor olmaktan çıkarıp kullanıcıyı güldürerek ve sinir ederek uyandırır.</p>

  <div class="spec-grid">
    <div class="spec-card">
      <h4>Dinamik Sarcastic Roast Motoru</h4>
      <p>Gemini AI prompt motoru her sabaha özel, kullanıcının uyanmama bahaneleriyle dalga geçen benzersiz replikler üretir.</p>
    </div>
    <div class="spec-card">
      <h4>Edge-TTS Nöral Seslendirme</h4>
      <p>Doğal tonlamalı nöral ses motoru, BOB'un alaycı ve bıkkın karakter tonunu arka planda susmaksızın canlı tutar.</p>
    </div>
    <div class="spec-card">
      <h4>Ertelemesiz Seri (Streak) Takibi</h4>
      <p>Zamanında yataktan kalkılan günleri sayarak kullanıcıya psikolojik süreklilik ve disiplin kazandırır.</p>
    </div>
  </div>
</div>
`,
    problems: `
<div class="deep-section-block">
  <h3 class="deep-h3">Sektörel Problemler & Çözümler</h3>

  <div class="deep-card-grid">
    <div class="deep-card">
      <h4>Snooze Alışkanlığı ve Melodiye Duyarsızlaşma</h4>
      <p>Standart alarm sesleri birkaç hafta içinde beyin tarafından arka plan gürültüsü sayılır. Sürekli değişen esprili ve sert yapay zekâ diyalogları duyarsızlaşmayı imkânsız kılar.</p>
    </div>
  </div>
</div>
`,
    technical: `
<div class="deep-section-block">
  <h3 class="deep-h3">Teknoloji Yığını</h3>
  <p class="deep-lead">Cihaz üstü ses akışı ve Gemini destekli alaycı diyalog hattı.</p>

  <div class="tech-stack-table-wrap">
    <table class="inventory-table">
      <thead>
        <tr>
          <th>Katman</th>
          <th>Teknoloji & Kütüphane</th>
          <th>Mimari Görev & Rol</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Mobil İstemci</strong></td>
          <td><code>Flutter</code></td>
          <td>Arka plan alarm servisi ve karakter etkileşim ekranı</td>
        </tr>
        <tr>
          <td><strong>Ses Sentezi</strong></td>
          <td><code>Edge-TTS</code></td>
          <td>Nöral sesle dinamik alaycı replik üretimi</td>
        </tr>
        <tr>
          <td><strong>Roast Motoru</strong></td>
          <td><code>Gemini AI</code></td>
          <td>Uyanma saati ve erteleme geçmişine göre anlık mizah ve iğneleme üretimi</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
    visual: `
<div class="deep-section-block">
  <h3 class="deep-h3">Karakter & Karşılama Ekranı</h3>
  <p class="deep-lead">Alaycı asistan personasıyla alarm deneyimi.</p>

  <div class="visual-deduction-box">
    <div class="visual-deduction-media">
      <img src="assets/bob/IMG_0155.jpeg" alt="BOB Karşılama Ekranı">
    </div>
    <div class="visual-deduction-body">
      <h4>Ekran Çıkarımı: Karakter Kimliği ve Sesli Alarm Akışı</h4>
      <p>Karşılama ekranında tanıtılan BOB personası ("He is your alarm clock. He does not care that you are tired."), alarm çaldığında arka planda susmaksızın alaycı replikler fısıldayan bir disiplin ortağına dönüşür.</p>
    </div>
  </div>
</div>
`
  },
  undrgrnd: {
    category: "Kültür & Müzik Topluluğu · GELİŞTİRİLME AŞAMASINDA",
    title: "UNDRGRND: Bağımsız Hip-Hop & Cypher Odaları",
    subtitle: "Canlı Beat Odaları, Sıralı Verse Kaydı ve Sanatçı Keşfi",
    overview: `
<div class="deep-section-block">
  <h3 class="deep-h3">Genel Bakış & Çalışma Prensibi</h3>
  <p class="deep-lead">Beatmaker'lar ile rap sanatçılarının canlı beat odalarında sırayla ses kaydedip parçalar ürettiği dijital sokak müzik platformudur. Bağımsız müzisyenler stüdyo kiralama masrafı olmadan cep telefonu üzerinden kayıt alır.</p>

  <div class="spec-grid">
    <div class="spec-card">
      <h4>Canlı Cypher Odaları</h4>
      <p>Beat üzerinde sıralı verse kaydı; herkes sırasını bekler, oda kaydı birleştirir.</p>
    </div>
    <div class="spec-card">
      <h4>Cep Stüdyosu</h4>
      <p>Telefon mikrofonuyla serbest stil kayıt ve anlık paylaşım akışı.</p>
    </div>
    <div class="spec-card">
      <h4>Etkinlik Haritası</h4>
      <p>Yeraltı etkinlikleri ve sahne fırsatları konum bazlı keşfedilir.</p>
    </div>
  </div>
</div>
`,
    problems: `
<div class="deep-section-block">
  <h3 class="deep-h3">Sektörel Problemler & Çözümler</h3>

  <div class="deep-card-grid">
    <div class="deep-card">
      <h4>Stüdyo Maliyeti ve Erişim Engeli</h4>
      <p>Bağımsız sanatçılar için stüdyo saati pahalıdır. Telefon tabanlı kayıt üretim eşiğini sıfıra indirir.</p>
    </div>

    <div class="deep-card">
      <h4>Dağınık Yeraltı Sahnesi</h4>
      <p>Beatmaker ve MC'ler birbirini bulamaz. Ortak oda ve keşif ağı iş birliğini hızlandırır.</p>
    </div>
  </div>
</div>
`,
    technical: `
<div class="deep-section-block">
  <h3 class="deep-h3">Teknoloji Yığını</h3>
  <p class="deep-lead">Gerçek zamanlı oda ve ses kayıt altyapısı.</p>

  <div class="tech-stack-table-wrap">
    <table class="inventory-table">
      <thead>
        <tr>
          <th>Katman</th>
          <th>Teknoloji & Kütüphane</th>
          <th>Mimari Görev & Rol</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Mobil</strong></td>
          <td><code>Flutter</code></td>
          <td>Oda, kayıt ve akış istemcisi</td>
        </tr>
        <tr>
          <td><strong>Veri</strong></td>
          <td><code>Firebase</code></td>
          <td>Oda durumu ve ses dosyası senkronizasyonu</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
    visual: `
<div class="deep-section-block">
  <h3 class="deep-h3">Cypher Odaları & Verse Panosu</h3>
  <p class="deep-lead">Canlı odalarda sıralı kayıt deneyimi.</p>

  <div class="visual-deduction-box">
    <div class="visual-deduction-media">
      <img src="assets/undrgrnd/A3AD40C8-ED0F-489F-9BC2-6A45E3DE98CC.jpg" alt="UNDRGRND Cypher Odası Ekranı">
    </div>
    <div class="visual-deduction-body">
      <h4>Ekran Çıkarımı: Oda ve Kayıt Akışı</h4>
      <p>Odada beat bilgisi, sıra listesi ve verse panosu bir arada sunulur; katılımcılar sırayla kayıt alır.</p>
    </div>
  </div>
</div>
`
  },

  studio: {
    category: "Remotion & Whisper AI · MEDYA OTOMASYONU",
    title: "Kod Tabanlı Otomatik Video & Reklam Stüdyosu",
    subtitle: "React Bileşenleri ve Python Betikleriyle Saniyeler İçinde Kampanya Videosu",
    overview: `
<div class="deep-section-block">
  <h3 class="deep-h3">Genel Bakış & Çalışma Prensibi</h3>
  <p class="deep-lead">Video kurgu programı açmadan React bileşenleri ve Python betikleriyle dinamik fiyatlı kampanya videolarını ve hikayeleri saniyeler içinde render eden otomasyon motorudur.</p>

  <div class="spec-grid">
    <div class="spec-card">
      <h4>Şablon Bazlı Render</h4>
      <p>Fiyat, tarih ve görsel şablona işlenir; post ve story varyantları toplu üretilir.</p>
    </div>
    <div class="spec-card">
      <h4>Otomatik Altyazı</h4>
      <p>Whisper AI ile milisaniye hassasiyetinde senkronize altyazı katmanı.</p>
    </div>
    <div class="spec-card">
      <h4>Yapay Zekâ Seslendirme</h4>
      <p>Edge-TTS ile kampanya metinlerinin nöral sesle seslendirilmesi.</p>
    </div>
  </div>
</div>
`,
    problems: `
<div class="deep-section-block">
  <h3 class="deep-h3">Sektörel Problemler & Çözümler</h3>

  <div class="deep-card-grid">
    <div class="deep-card">
      <h4>Ajans Maliyeti ve Montaj Gecikmesi</h4>
      <p>Her kampanya için tasarımcı beklemek hem pahalı hem yavaştır. Kod tabanlı üretim varyantları saniyeler içinde çıkarır.</p>
    </div>
  </div>
</div>
`,
    technical: `
<div class="deep-section-block">
  <h3 class="deep-h3">Teknoloji Yığını</h3>
  <p class="deep-lead">Programatik video ve ses sentez hattı.</p>

  <div class="tech-stack-table-wrap">
    <table class="inventory-table">
      <thead>
        <tr>
          <th>Katman</th>
          <th>Teknoloji & Kütüphane</th>
          <th>Mimari Görev & Rol</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Video</strong></td>
          <td><code>Remotion (React)</code></td>
          <td>Bileşen tabanlı sahne kompozisyonu ve render</td>
        </tr>
        <tr>
          <td><strong>Orkestrasyon</strong></td>
          <td><code>Python Betikleri</code></td>
          <td>Toplu varyant üretimi ve zamanlama</td>
        </tr>
        <tr>
          <td><strong>Ses & Altyazı</strong></td>
          <td><code>Whisper + Edge-TTS</code></td>
          <td>Senkron altyazı ve nöral seslendirme katmanı</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
    visual: `
<div class="deep-section-block">
  <h3 class="deep-h3">Render Çıktıları: Post & Story</h3>
  <p class="deep-lead">Otomatik üretilen kampanya görsellerinden örnekler.</p>

  <div class="visual-deduction-box">
    <div class="visual-deduction-media">
      <img src="assets/studyo/rayana_editorial_post.jpg" alt="Otomatik Stüdyo Kampanya Çıktısı">
    </div>
    <div class="visual-deduction-body">
      <h4>Ekran Çıkarımı: Şablon Disiplini ve Marka Tutarlılığı</h4>
      <p>Tüm varyantlarda tipografi, logo konumu ve renk paleti şablon tarafından kilitlenir; kampanya bilgisi otomatik işlenir.</p>
    </div>
  </div>
</div>
`
  },

  abyssal: {
    category: "40 Bölümlük Dizi Evreni · IP & SENARYO MİMARİSİ",
    title: "Abyssal Breach: Yetişkin Bilimkurgu Evreni",
    subtitle: "5 Sezon, 40 Bölüm: Varoluşsal Kriz ve Çoklu Evren Yıkım Fiziği",
    overview: `
<div class="deep-section-block">
  <h3 class="deep-h3">Genel Bakış & Evren Tasarımı</h3>
  <p class="deep-lead">Yetişkinlere yönelik (24+), her biri 8 bölümden oluşan 5 sezon (toplam 40 bölüm) olarak tasarlanan animasyon dizisi evrenidir. Varoluşsal kriz, tanrı-yaratıcı çatışması ve çoklu evren yıkım fiziği üzerine dramatürjik yol haritası içerir.</p>

  <div class="spec-grid">
    <div class="spec-card">
      <h4>5 Sezonluk Yayılma</h4>
      <p>Her sezon 8 bölüm; evren yıkımı sezondan sezona tırmanan kurguyla işlenir.</p>
    </div>
    <div class="spec-card">
      <h4>Felsefi Çatışma Matrisi</h4>
      <p>Yaratıcı-tanrı gerilimi ve varoluşsal kriz karakter yaylarıyla örülür.</p>
    </div>
    <div class="spec-card">
      <h4>Evren Fiziği Kanonu</h4>
      <p>Çoklu evren geçişleri ve yıkım mekaniği tutarlı kural setine bağlanır.</p>
    </div>
    <div class="spec-card">
      <h4>Bölüm Yol Haritası</h4>
      <p>40 bölümün dramatürjik iskeleti ve sezon finalleri önceden kilitlenir.</p>
    </div>
  </div>
</div>
`,
    problems: `
<div class="deep-section-block">
  <h3 class="deep-h3">Anlatı Problemleri & Çözümler</h3>

  <div class="deep-card-grid">
    <div class="deep-card">
      <h4>Dağınık Evren Kanonu</h4>
      <p>Uzun soluklu dizilerde tutarsızlık izleyiciyi kaçırır. Önden yazılan kanon ve kural seti bu riski kapatır.</p>
    </div>

    <div class="deep-card">
      <h4>Yüzeysel Yetişkin Animasyonu</h4>
      <p>Tür genelde parodiye indirgenir. Varoluşsal tema ve felsefi çatışma yetişkin katmanı kurar.</p>
    </div>
  </div>
</div>
`,
    technical: `
<div class="deep-section-block">
  <h3 class="deep-h3">Sezon & Bölüm Mimarisi</h3>
  <p class="deep-lead">40 bölümlük iskeletin sezonlara dağılımı.</p>

  <div class="tech-stack-table-wrap">
    <table class="inventory-table">
      <thead>
        <tr>
          <th>Sezon</th>
          <th>Bölüm Aralığı</th>
          <th>Dramatürjik İşlev</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Sezon 1</strong></td>
          <td><code>Bölüm 1-8</code></td>
          <td>Evren tanıtımı ve ilk yarık (breach) olayı</td>
        </tr>
        <tr>
          <td><strong>Sezon 2</strong></td>
          <td><code>Bölüm 9-16</code></td>
          <td>Yaratıcı figürünün gölgesi ve ittifakların kırılması</td>
        </tr>
        <tr>
          <td><strong>Sezon 3</strong></td>
          <td><code>Bölüm 17-24</code></td>
          <td>Çoklu evren geçiş fiziğinin açılması</td>
        </tr>
        <tr>
          <td><strong>Sezon 4</strong></td>
          <td><code>Bölüm 25-32</code></td>
          <td>Yıkım sarmalı ve varoluşsal krizin zirvesi</td>
        </tr>
        <tr>
          <td><strong>Sezon 5</strong></td>
          <td><code>Bölüm 33-40</code></td>
          <td>Tanrı-yaratıcı hesaplaşması ve kapanış</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
    visual: `
<div class="deep-section-block">
  <h3 class="deep-h3">Evren Kapağı & Görsel Kimlik</h3>
  <p class="deep-lead">Dizinin anahtar görseli ve atmosfer referansı.</p>

  <div class="visual-deduction-box">
    <div class="visual-deduction-media">
      <img src="assets/game-project/game-cover.jpg" alt="Abyssal Breach Evren Kapağı">
    </div>
    <div class="visual-deduction-body">
      <h4>Ekran Çıkarımı: Karanlık Bilimkurgu Tonu</h4>
      <p>Kapak görseli evrenin karanlık, yetişkin bilimkurgu tonunu ve yarık (breach) motifini taşır.</p>
    </div>
  </div>
</div>
`
  }
};

const techDataEn = {
  aeonCore: {
    category: "Boutique Hotel & Restaurant Operating System · Live Architecture",
    title: "AEON Hospitality Core ERP & POS",
    subtitle: "Integrated Operating System for Luxury Boutique Hotels, Gourmet Restaurants and Marinas",
    overview: `
<div class="deep-section-block">
  <h3 class="deep-h3">Overview & Working Principle</h3>
  <p class="deep-lead">AEON Core ERP unifies a boutique property's entire revenue and operational flow — from front-desk reservations to beach and sunbed QR orders, from the kitchen display (KDS) to housekeeping — in a single local database.</p>

  <div class="spec-grid">
    <div class="spec-card">
      <h4>Single-Folio Revenue Consolidation</h4>
      <p>Everything a guest spends at the beach, restaurant or marina is posted to the room folio in one click. At check-out, all department charges print in one complete statement.</p>
    </div>
    <div class="spec-card">
      <h4>Kitchen Display System (KDS)</h4>
      <p>Orders from tables or sunbeds land on the chef's screen within seconds. Prep and service times are tracked live with color codes.</p>
    </div>
    <div class="spec-card">
      <h4>PIN-Based Fast Terminal</h4>
      <p>Waiters, receptionists and chefs transact in seconds with a 4-digit PIN within their permissions — no lengthy logins.</p>
    </div>
    <div class="spec-card">
      <h4>Resilient Local & Edge Architecture</h4>
      <p>When coastal internet drops, the local SQLite engine keeps running; once back online it syncs two-way with Cloudflare D1 asynchronously.</p>
    </div>
  </div>

  <h3 class="deep-h3" style="margin-top: 24px;">Operational Walkthrough</h3>
  <p>A guest scans the QR on the beach sunbed and orders a cocktail. The waiter confirms it on the handheld; prep starts on the kitchen screen and the charge posts automatically to the room folio. At check-out the receptionist types the room number; beach, bar and stay charges settle in a single bill.</p>
</div>
`,
    problems: `
<div class="deep-section-block">
  <h3 class="deep-h3">Industry Problems & Solutions</h3>

  <div class="deep-card-grid">
    <div class="deep-card">
      <h4>Lost Slips and Uncollected Service Leakage</h4>
      <p>At coastal and beach venues paper slips blow away or never reach the register in busy hours. In AEON ERP every order posts digitally to the kitchen and the room folio at once, eliminating uncollected service losses entirely.</p>
    </div>

    <div class="deep-card">
      <h4>Legacy ERPs' Heavy License and Hardware Load</h4>
      <p>Traditional hotel ERPs demand steep license fees, dedicated servers and weeks of training for boutique properties. AEON's light web UI teaches staff in 10 minutes and goes live with zero extra hardware cost.</p>
    </div>

    <div class="deep-card">
      <h4>Broken Inter-Department Communication</h4>
      <p>A waiter running paper slips to the kitchen stretches service times and breeds order chaos. The KDS screen queues incoming orders by arrival, color-codes prep and pings the waiter when ready.</p>
    </div>
  </div>
</div>
`,
    technical: `
<div class="deep-section-block">
  <h3 class="deep-h3">Technology Stack & Infrastructure</h3>
  <p class="deep-lead">Hybrid local-first edge architecture that needs no heavy server investment and survives internet outages.</p>

  <div class="tech-stack-table-wrap">
    <table class="inventory-table">
      <thead>
        <tr>
          <th>Layer</th>
          <th>Technology & Library</th>
          <th>Architectural Role</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Runtime & Gateway</strong></td>
          <td><code>Node.js 20 LTS</code></td>
          <td>Async I/O event loop, SSE publisher and POS terminal API service</td>
        </tr>
        <tr>
          <td><strong>Local Database</strong></td>
          <td><code>SQLite / AlaSQL</code></td>
          <td>Zero-latency ACID transactions and offline storage on the on-site server</td>
        </tr>
        <tr>
          <td><strong>Edge Cloud Sync</strong></td>
          <td><code>Cloudflare D1 (Serverless SQL)</code></td>
          <td>Globally distributed data replication for the management console and remote reporting</td>
        </tr>
        <tr>
          <td><strong>Real-Time Channel</strong></td>
          <td><code>Server-Sent Events (SSE)</code></td>
          <td>Lightweight one-way live order stream to kitchen KDS and service screens</td>
        </tr>
        <tr>
          <td><strong>Notification Engine</strong></td>
          <td><code>WebPush API & Service Worker</code></td>
          <td>Instant audible and vibrating order-ready alerts on waiter handhelds</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 class="deep-h3" style="margin-top: 28px;">System Architecture & Data Flow</h3>
  <div class="diagram-box">
[Guest QR / Waiter Terminal]
             │
             ▼ (HTTP POST / Authenticated Session)
   [Node.js 20 Local Gateway]
             │
   ┌─────────┴─────────────────────────────┐
   ▼                                       ▼
[Local SQLite Engine]            [SSE Event Publisher]
(Atomic Folio Update)            (&lt;30ms Delayed KDS Alert)
   │                                       │
   ▼ (Async Background Sync)               ▼
[Cloudflare D1 Global Edge]      [Kitchen Chef Display (KDS)]
  </div>

  <div class="spec-grid">
    <div class="spec-card">
      <h4>Offline-First Data Guarantee</h4>
      <p>When coastal fiber or 4G drops, the local server keeps taking orders and cutting slips without interruption. Conflict-free two-way sync completes once connectivity returns.</p>
    </div>
    <div class="spec-card">
      <h4>Millisecond Response, Light Protocol</h4>
      <p>Using SSE instead of WebSocket handshake overhead keeps sub-50ms responses battery-friendly even on low-power tablets and handhelds.</p>
    </div>
    <div class="spec-card">
      <h4>4-Digit PIN & HTTP-Only Security</h4>
      <p>Staff sessions live in encrypted HTTP-only cookies. The 4-digit PIN removes terminal queues while blocking unauthorized discounts or voids.</p>
    </div>
    <div class="spec-card">
      <h4>Atomic Slip Integrity</h4>
      <p>Every order line locks to the guest folio at atomic transaction level. Half-written or unrecorded slips are ruled out.</p>
    </div>
  </div>
</div>
`,
    visual: `
<div class="deep-section-block">
  <h3 class="deep-h3">Management Console & Field Screen Analysis</h3>
  <p class="deep-lead">The main console where the GM and front-office manager watch the day's operational pulse on one screen.</p>

  <div class="visual-deduction-box">
    <div class="visual-deduction-media">
      <img src="assets/erp-aeon/Ekran Resmi 2026-07-12 16.30.03.png" alt="Aeon Core ERP Management Console">
    </div>
    <div class="visual-deduction-body">
      <h4>Screen Reading: Live Revenue, Folios and Department Analytics</h4>
      <p>This screenshot documents a boutique property's live daily operation. The left column tracks 12 rooms' occupancy and housekeeping status in color codes. The right panel lists live slips from the restaurant, beach bar and room service. At any moment the owner sees collected cash, POS pulls and open folios consolidated to the penny.</p>
    </div>
  </div>
</div>
`
  },

  hotelRunner: {
    category: "Channel Manager Integration · Two-Way API",
    title: "HotelRunner Two-Way Channel Integration",
    subtitle: "Zero-Lag Inventory Bridge Between Booking.com, Airbnb, Expedia and the Local ERP",
    overview: `
<div class="deep-section-block">
  <h3 class="deep-h3">Overview & Working Principle</h3>
  <p class="deep-lead">Builds a live two-way data bridge between the hotel's local room management and Booking.com, Airbnb and Expedia via HotelRunner. It removes guest-stranding double bookings (overbooking) and agency penalty points.</p>

  <div class="spec-grid">
    <div class="spec-card">
      <h4>Two-Way Inventory Sync</h4>
      <p>A room sold directly at reception closes on Booking.com and Airbnb within 1.2 seconds.</p>
    </div>
    <div class="spec-card">
      <h4>Automatic Booking & Folio Opening</h4>
      <p>Reservations from external channels post to the local system instantly; guest card and room folio open automatically.</p>
    </div>
    <div class="spec-card">
      <h4>Dynamic Rate & MinLOS Sync</h4>
      <p>Weekend rate hikes and minimum-stay (MinLOS) rules broadcast to all channels from one hub at once.</p>
    </div>
    <div class="spec-card">
      <h4>End of Manual Entry Errors</h4>
      <p>Staff no longer spend hours updating rates and rooms across OTA panels — and forgetting is fully eliminated.</p>
    </div>
  </div>

  <h3 class="deep-h3" style="margin-top: 24px;">Operational Walkthrough</h3>
  <p>At 02:00 a guest books a 3-night luxury stone villa on Airbnb. The webhook signal reaches the local system; a notice pops on the reception screen, the room calendar closes and the guest entry card is prepared. The next day the receptionist never touches the external portals one by one.</p>
</div>
`,
    problems: `
<div class="deep-section-block">
  <h3 class="deep-h3">Industry Problems & Solutions</h3>

  <div class="deep-card-grid">
    <div class="deep-card">
      <h4>Overbooking Disasters</h4>
      <p>The same room selling walk-in and on Booking.com simultaneously is a boutique hotel's worst crisis. The two-way bridge pulls the room from global sale in 1.2 seconds, zeroing overbooking risk.</p>
    </div>

    <div class="deep-card">
      <h4>Cross-Channel Rate Mismatch</h4>
      <p>Different prices on different portals damage brand prestige and trigger agency contract penalties. The single-hub rate matrix keeps parity flawless.</p>
    </div>

    <div class="deep-card">
      <h4>Hours of Manual Inventory Updates</h4>
      <p>Updating calendars on 4 portals daily in high season pulls staff away from hosting guests. Automation removes that workload.</p>
    </div>
  </div>
</div>
`,
    technical: `
<div class="deep-section-block">
  <h3 class="deep-h3">Technology Stack & Integration Protocols</h3>
  <p class="deep-lead">HotelRunner REST API v2 with signature-verified webhook infrastructure.</p>

  <div class="tech-stack-table-wrap">
    <table class="inventory-table">
      <thead>
        <tr>
          <th>Layer</th>
          <th>Technology & Library</th>
          <th>Architectural Role</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Protocol & API</strong></td>
          <td><code>HotelRunner REST API v2</code></td>
          <td>Availability, rate-matrix and reservation send/receive endpoints</td>
        </tr>
        <tr>
          <td><strong>Security Verification</strong></td>
          <td><code>HMAC-SHA256 Signing</code></td>
          <td>Anti-spoof verification of webhook payloads from external channels</td>
        </tr>
        <tr>
          <td><strong>Event Queue</strong></td>
          <td><code>Idempotent Event Queue</code></td>
          <td>Unique-hash mechanism preventing duplicate processing of the same booking notice</td>
        </tr>
        <tr>
          <td><strong>Error Handling</strong></td>
          <td><code>Exponential Backoff & Retry</code></td>
          <td>Graduated retries of failed API calls during network outages</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 class="deep-h3" style="margin-top: 28px;">Two-Way Event Flow</h3>
  <div class="diagram-box">
[Aeon ERP Reception Sale] ──> [HMAC Signed Webhook] ──> [HotelRunner API Gateway]
                                                                  │
              ┌───────────────────────────────────────────────────┼────────────────────────┐
              ▼                                                   ▼                        ▼
      [Booking.com API]                                    [Airbnb OTA Sync]        [Expedia Partner]
    (&lt;1.2s Inventory Close)                              (Calendar Update)        (Rate Parity)
  </div>

  <div class="spec-grid">
    <div class="spec-card">
      <h4>Idempotent Webhook Architecture</h4>
      <p>Every booking payload from agencies is checked against a unique transaction UUID. Duplicate requests filter out so no double folio ever opens.</p>
    </div>
    <div class="spec-card">
      <h4>Rate-Limit & Quota Guard</h4>
      <p>A token-bucket regulated live request queue keeps the integration clear of portals' API speed limits.</p>
    </div>
  </div>
</div>
`,
    visual: `
<div class="deep-section-block">
  <h3 class="deep-h3">Dolphin PMS · HotelRunner Channel Management Dashboard</h3>
  <p class="deep-lead">Operational channel panel managing reservation ingestion, inventory sync, price matching and reconciliation.</p>

  <div class="visual-deduction-box">
    <div class="visual-deduction-media">
      <img src="assets/erp-aeon/hotelrunner-channel.png" alt="Dolphin PMS HotelRunner Channel Management Panel">
    </div>
    <div class="visual-deduction-body">
      <h4>Screen Reading: Live OTA Synchronization & Monitoring Center</h4>
      <p>The screen shows the HotelRunner Channel Management Panel within Dolphin PMS. Modules for Fetch Reservations, Push Availability, Match Rates and Full Reconciliation monitor connected OTA channels, pending reservations, room/rate mappings and connection health in real time.</p>
    </div>
  </div>
</div>
`
  },

  crm: {
    category: "Customer Relations & Sales Funnel · B2B Pipeline",
    title: "Sales Funnel & Guest CRM",
    subtitle: "Sales Platform Managing WhatsApp, Phone and Web Requests in a Staged Revenue Funnel",
    overview: `
<div class="deep-section-block">
  <h3 class="deep-h3">Overview & Working Principle</h3>
  <p class="deep-lead">A customer-relationship management system collecting all accommodation, wedding and private-event requests from WhatsApp, phone and web forms in a staged sales pipeline.</p>

  <div class="spec-grid">
    <div class="spec-card">
      <h4>Staged Sales Pipeline</h4>
      <p>Full tracking across stages: New Request -> Quote Sent -> Price Confirmed -> Deposit Taken -> Confirmed Booking.</p>
    </div>
    <div class="spec-card">
      <h4>Zero Forgotten Requests</h4>
      <p>Timeout alerts fire for high-value guest requests staff would otherwise forget in busy hours.</p>
    </div>
    <div class="spec-card">
      <h4>Guest Profile Memory</h4>
      <p>Past stays, dietary preferences and spending habits surface instantly on the next booking.</p>
    </div>
    <div class="spec-card">
      <h4>Dynamic Quote Generation</h4>
      <p>Formal PDF quote links with rates, room splits and terms generate in seconds for group and corporate events.</p>
    </div>
  </div>
</div>
`,
    problems: `
<div class="deep-section-block">
  <h3 class="deep-h3">Industry Problems & Solutions</h3>

  <div class="deep-card-grid">
    <div class="deep-card">
      <h4>High-Value Requests Lost in WhatsApp</h4>
      <p>Stay requests landing on individual staff phones can't be tracked, and unanswered prospects slip to rival properties. The CRM merges every channel into one pool.</p>
    </div>

    <div class="deep-card">
      <h4>Rate Inconsistency and Staff Discretion</h4>
      <p>Different staff quoting different rates for the same dates destroys guest trust. The system quotes standard offers off the approved rate matrix.</p>
    </div>
  </div>
</div>
`,
    technical: `
<div class="deep-section-block">
  <h3 class="deep-h3">Technology Stack & Architecture</h3>
  <p class="deep-lead">Modern relational data model with a multi-channel notification bridge.</p>

  <div class="tech-stack-table-wrap">
    <table class="inventory-table">
      <thead>
        <tr>
          <th>Layer</th>
          <th>Technology & Library</th>
          <th>Architectural Role</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Database</strong></td>
          <td><code>PostgreSQL / Supabase</code></td>
          <td>Relational guest profiles, spend history and staged pipeline tables</td>
        </tr>
        <tr>
          <td><strong>Messaging Bridge</strong></td>
          <td><code>WhatsApp Business API Webhook</code></td>
          <td>Auto-posting messages to guest cards and template replies</td>
        </tr>
        <tr>
          <td><strong>Document Engine</strong></td>
          <td><code>PDFKit / Headless Renderer</code></td>
          <td>Generating dynamic corporate quotes and contract documents</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
    visual: `
<div class="deep-section-block">
  <h3 class="deep-h3">Sales Funnel & Guest Card Review</h3>
  <p class="deep-lead">The Kanban interface where sales moves work from quote to deposit collection.</p>

  <div class="visual-deduction-box">
    <div class="visual-deduction-media">
      <img src="assets/crm/luce-dashboard.png" alt="CRM Sales Funnel and Request Management">
    </div>
    <div class="visual-deduction-body">
      <h4>Screen Reading: Staged Sales Pipeline and Conversion Rates</h4>
      <p>This screen shows the property's monthly sales performance. Each card is a prospect with a request value. As drag-and-drop moves requests across stages, win rates compute automatically.</p>
    </div>
  </div>
</div>
`
  },

  hotelWeb: {
    category: "Prestige Web Architecture · Direct Booking",
    title: "Luxury Boutique Hotel Web Showcase",
    subtitle: "High-Speed Editorial Showcase and Direct Sales Engine That Zeroes Agency Commissions",
    overview: `
<div class="deep-section-block">
  <h3 class="deep-h3">Overview & Working Principle</h3>
  <p class="deep-lead">A high-speed editorial showcase and direct booking engine for select coastal hotels and marinas. It removes the 15–25% commission cuts paid to agencies.</p>

  <div class="spec-grid">
    <div class="spec-card">
      <h4>0% Agency Commission</h4>
      <p>Guests book directly on the hotel's own site; no commission stays with middlemen.</p>
    </div>
    <div class="spec-card">
      <h4>98+ Core Web Vitals Score</h4>
      <p>Content serves in &lt;40ms from Cloudflare's global CDN edge — guests never wait.</p>
    </div>
    <div class="spec-card">
      <h4>Luxury Editorial Typography</h4>
      <p>A distinguished visual language and high-resolution room tours for the upper-income guest.</p>
    </div>
  </div>
</div>
`,
    problems: `
<div class="deep-section-block">
  <h3 class="deep-h3">Industry Problems & Solutions</h3>

  <div class="deep-card-grid">
    <div class="deep-card">
      <h4>High Margins Lost to Agencies</h4>
      <p>Boutique hotels hand a quarter of revenue to Booking and agencies as commission. The direct booking engine keeps that revenue in the property's register.</p>
    </div>

    <div class="deep-card">
      <h4>Slow Template Sites Erode Trust</h4>
      <p>Heavy WordPress themes load late on mobile and guests abandon the purchase decision. The light static architecture opens instantly.</p>
    </div>
  </div>
</div>
`,
    technical: `
<div class="deep-section-block">
  <h3 class="deep-h3">Technology Stack & Edge Delivery</h3>
  <p class="deep-lead">Static site generation (SSG) with global edge caching.</p>

  <div class="tech-stack-table-wrap">
    <table class="inventory-table">
      <thead>
        <tr>
          <th>Layer</th>
          <th>Technology & Library</th>
          <th>Architectural Role</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Frontend</strong></td>
          <td><code>Next.js SSG / HTML5</code></td>
          <td>Statically compiled, SEO-friendly, zero-lag page generation</td>
        </tr>
        <tr>
          <td><strong>Delivery & CDN</strong></td>
          <td><code>Cloudflare Pages / Edge Network</code></td>
          <td>Sub-40ms content delivery across 300+ global points with automatic SSL</td>
        </tr>
        <tr>
          <td><strong>Image Optimization</strong></td>
          <td><code>WebP & AVIF Pipeline</code></td>
          <td>80% compression of room and landscape photos with no visible quality loss</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
    visual: `
<div class="deep-section-block">
  <h3 class="deep-h3">Web Showcase & Direct Sales Experience</h3>
  <p class="deep-lead">Minimalist design where guests inspect rooms and step into direct booking.</p>

  <div class="visual-deduction-box">
    <div class="visual-deduction-media">
      <img src="assets/bozburun-yacht-club/byc-home.png" alt="Luxury Hotel Web Showcase">
    </div>
    <div class="visual-deduction-body">
      <h4>Screen Reading: Direct Sales & Editorial Brand Prestige</h4>
      <p>The visual features editorial typography foregrounding the property's architecture and room qualities, plus a direct booking button. The hotel's own identity leads instead of third-party portals' crowded UI.</p>
    </div>
  </div>
</div>
`
  },
  retailPulse: {
    category: "In-Store Customer Intelligence · COMPUTER VISION",
    title: "RetailPulse AI: Retail Behavior Analytics",
    subtitle: "Visitor Traffic, Aisle Dwell Time and Conversion Measurement from Existing Security Cameras",
    overview: `
<div class="deep-section-block">
  <h3 class="deep-h3">Overview & Working Principle</h3>
  <p class="deep-lead">A local computer-vision engine measuring customer traffic and aisle dwell times from in-store ceiling cameras, matched against POS receipts to compute true sales conversion (%).</p>

  <div class="spec-grid">
    <div class="spec-card">
      <h4>1.5-Meter Staff Contact Rule</h4>
      <p>Staff engagement within 1.5 meters of a shopper timestamps and links into the sales correlation.</p>
    </div>
    <div class="spec-card">
      <h4>Aisle Dwell-Time Maps</h4>
      <p>Which aisle holds attention how long renders as a heatmap; dead zones and star products turn visible.</p>
    </div>
    <div class="spec-card">
      <h4>POS-Matched Conversion</h4>
      <p>Ratioing entering visitors against register receipts yields the store's true sales-conversion performance.</p>
    </div>
    <div class="spec-card">
      <h4>100% Local Processing</h4>
      <p>Raw frames analyze in RAM without disk writes; only anonymous telemetry reaches HQ.</p>
    </div>
  </div>
</div>
`,
    problems: `
<div class="deep-section-block">
  <h3 class="deep-h3">Industry Problems & Solutions</h3>

  <div class="deep-card-grid">
    <div class="deep-card">
      <h4>Blind Retailing and Unmeasured Staff Performance</h4>
      <p>Store managers run peak hours and staff impact on sales by feel. The system meets contact time and conversion data on one chart.</p>
    </div>

    <div class="deep-card">
      <h4>Cloud Cameras' Bandwidth and Privacy Cost</h4>
      <p>Systems hauling video to the cloud burn Gbps bandwidth and raise personal-data risk. Edge processing removes both problems.</p>
    </div>
  </div>
</div>
`,
    technical: `
<div class="deep-section-block">
  <h3 class="deep-h3">Technology Stack & Analytics Line</h3>
  <p class="deep-lead">Top-down tracking architecture compatible with ceiling and fisheye cameras.</p>

  <div class="tech-stack-table-wrap">
    <table class="inventory-table">
      <thead>
        <tr>
          <th>Layer</th>
          <th>Technology & Library</th>
          <th>Architectural Role</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Detection & Tracking</strong></td>
          <td><code>YOLOv8s + ByteTrack</code></td>
          <td>Top-down person detection with uninterrupted in-store track following</td>
        </tr>
        <tr>
          <td><strong>Projection</strong></td>
          <td><code>2D Floor Homography</code></td>
          <td>Correcting fisheye distortion down to meter units</td>
        </tr>
        <tr>
          <td><strong>Correlation</strong></td>
          <td><code>POS Matching Service</code></td>
          <td>Overlaying receipt timestamps with visitor waves</td>
        </tr>
        <tr>
          <td><strong>Hardware</strong></td>
          <td><code>Jetson / Industrial Mini PC</code></td>
          <td>Plug-and-play unit attaching to existing ONVIF/RTSP cameras</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
    visual: `
<div class="deep-section-block">
  <h3 class="deep-h3">Store Density & Heatmap Screen</h3>
  <p class="deep-lead">Analytics console watching visitor movement and aisle interest.</p>

  <div class="visual-deduction-box">
    <div class="visual-deduction-media">
      <img src="assets/retail-analytics/desktop-hero.png" alt="RetailPulse AI Store Analytics Panel">
    </div>
    <div class="visual-deduction-body">
      <h4>Screen Reading: Density, Dwell and Conversion Indicators</h4>
      <p>The console serves live density on the store plan, aisle dwell times and the register conversion indicator together. Detection boxes and track lines on the camera view verify tracking.</p>
    </div>
  </div>
</div>
`
  },

  funnivarium: {
    category: "Turnstile & Queue Intelligence · ENTERTAINMENT & TRANSIT",
    title: "PassAudit OS: Turnstile & Boarding Audit",
    subtitle: "Boarding Fraud Prevention Reconciling Turnstile Scans against Camera Detections",
    overview: `
<div class="deep-section-block">
  <h3 class="deep-h3">Overview & Working Principle</h3>
  <p class="deep-lead">An edge computer vision audit engine deployed in entertainment centers, theme parks and transit hubs, cross-referencing turnstile scan counts with camera-detected boardings in real time to prevent unauthorized entries and ticket leakage.</p>

  <div class="spec-grid">
    <div class="spec-card">
      <h4>Turnstile & Tripwire Audit</h4>
      <p>Physical turnstile trigger signals correlate with camera tripwire line-crossings in milliseconds.</p>
    </div>
    <div class="spec-card">
      <h4>Fraud Entry Alert</h4>
      <p>Instant visual proof alerts fire on ticketless passes, turnstile vaulting, or tailgating.</p>
    </div>
    <div class="spec-card">
      <h4>Lost Revenue Metric</h4>
      <p>Unregistered boardings multiplied by ticket face value continuously compute daily revenue leakage.</p>
    </div>
    <div class="spec-card">
      <h4>Queue & Unit Occupancy</h4>
      <p>Simultaneous queue headcount and ride occupancy tracking allow real-time dispatch optimization.</p>
    </div>
  </div>
</div>
`,
    problems: `
<div class="deep-section-block">
  <h3 class="deep-h3">Industry Problems & Solutions</h3>

  <div class="deep-card-grid">
    <div class="deep-card">
      <h4>Invisible Ticket Leakage & Staff Tampering</h4>
      <p>Manual turnstile overrides, unauthorized entries, and jumping barriers cost thousands daily. PassAudit OS reconciles camera feeds against ticketing databases to eliminate leakage.</p>
    </div>

    <div class="deep-card">
      <h4>Queue Bottlenecks & Perimeter Violations</h4>
      <p>Overcrowded waiting zones and barrier breaches go unnoticed. Real-time geofencing and queue tracking protect both customer safety and operational flow.</p>
    </div>
  </div>
</div>
`,
    technical: `
<div class="deep-section-block">
  <h3 class="deep-h3">Technology Stack & Audit Pipeline</h3>
  <p class="deep-lead">Edge audit architecture integrating with existing IP cameras and turnstile PLC/badge readers.</p>

  <div class="tech-stack-table-wrap">
    <table class="inventory-table">
      <thead>
        <tr>
          <th>Layer</th>
          <th>Technology & Library</th>
          <th>Architectural Role</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Vision & Tracking</strong></td>
          <td><code>YOLOv8 + Tripwire Analysis</code></td>
          <td>Real-time counting of turnstile line-crossings and attraction seat occupancy</td>
        </tr>
        <tr>
          <td><strong>Turnstile Link</strong></td>
          <td><code>TCP/IP Socket & PLC Connector</code></td>
          <td>Sub-millisecond retrieval of badge and barcode scan event timestamps</td>
        </tr>
        <tr>
          <td><strong>Reconciliation Engine</strong></td>
          <td><code>Audit Engine (Python)</code></td>
          <td>Real-time delta reconciliation between turnstile pulses and visual passes</td>
        </tr>
        <tr>
          <td><strong>Edge Hardware</strong></td>
          <td><code>Nvidia Jetson / Industrial Mini PC</code></td>
          <td>24/7 on-premise edge appliance mounted in local control cabinets</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
    visual: `
<div class="deep-section-block">
  <h3 class="deep-h3">Turnstile & Boarding Audit Panel</h3>
  <p class="deep-lead">Operations dashboard comparing ticket sales against camera-detected boardings.</p>

  <div class="visual-deduction-box">
    <div class="visual-deduction-media">
      <img src="assets/vip/funnivarium.png" alt="PassAudit OS Boarding Audit Panel">
    </div>
    <div class="visual-deduction-body">
      <h4>Screen Reading: Ticket-Boarding Delta and Queue Density</h4>
      <p>The panel tracks turnstile scan counts alongside real camera-detected passenger counts; discrepancies flag immediately into the audit queue. Unit occupancy and queue wait times are monitored in real time.</p>
    </div>
  </div>
</div>
`
  },

  sanayiPulse: {
    category: "Factory & Depot Ramp Intelligence · INDUSTRIAL LOGISTICS",
    title: "SanayiPulse: Factory & Ramp Logistics",
    subtitle: "Industrial Vision Tracking Truck Gates, Ramp Occupancy and Dwell Times",
    overview: `
<div class="deep-section-block">
  <h3 class="deep-h3">Overview & Working Principle</h3>
  <p class="deep-lead">An industrial vision system watching truck gate times, ramp occupancy and HSE safety corridors 24/7 across heavy-industry plants and loading ramps.</p>

  <div class="spec-grid">
    <div class="spec-card">
      <h4>Ramp Occupancy Tracking</h4>
      <p>Which ramp is full and which is free shows on a live map; dispatch planning leaves blind flight.</p>
    </div>
    <div class="spec-card">
      <h4>Dwell-Time Measurement</h4>
      <p>Time trucks spend on site and at ramps timestamps, revealing the root cause of demurrage penalties.</p>
    </div>
    <div class="spec-card">
      <h4>HSE Corridor Audits</h4>
      <p>Forklift and pedestrian corridor violations alert the safety team instantly.</p>
    </div>
    <div class="spec-card">
      <h4>Incident Review Log</h4>
      <p>Critical events timestamp so shift leads review history fast.</p>
    </div>
  </div>
</div>
`,
    problems: `
<div class="deep-section-block">
  <h3 class="deep-h3">Industry Problems & Solutions</h3>

  <div class="deep-card-grid">
    <div class="deep-card">
      <h4>Demurrage Fines and Invisible Bottlenecks</h4>
      <p>Trucks waiting hours at ramps generate logistics penalty invoices. Dwell measurement shows which shift and ramp breeds the bottleneck.</p>
    </div>

    <div class="deep-card">
      <h4>Forklift and Yard Accidents</h4>
      <p>In-plant corridor violations record to security cameras nobody watches. A live alert line enables intervention before the accident.</p>
    </div>
  </div>
</div>
`,
    technical: `
<div class="deep-section-block">
  <h3 class="deep-h3">Technology Stack & Field Line</h3>
  <p class="deep-lead">Inference architecture hardened for outdoor cameras.</p>

  <div class="tech-stack-table-wrap">
    <table class="inventory-table">
      <thead>
        <tr>
          <th>Layer</th>
          <th>Technology & Library</th>
          <th>Architectural Role</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Vehicle & Zone Tracking</strong></td>
          <td><code>YOLOv8 + Zone Tracking</code></td>
          <td>Zone-based tracking of trucks and forklifts entering ramp areas</td>
        </tr>
        <tr>
          <td><strong>Stream</strong></td>
          <td><code>RTSP / ONVIF</code></td>
          <td>Direct frame intake from the plant's existing security cameras</td>
        </tr>
        <tr>
          <td><strong>Hardware</strong></td>
          <td><code>Industrial Mini PC</code></td>
          <td>Fanless inference unit suited to dusty, hot field conditions</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
    visual: `
<div class="deep-section-block">
  <h3 class="deep-h3">Ramp Occupancy and Logistics Tracking Screen</h3>
  <p class="deep-lead">Operations console watching the loading yard's live state.</p>

  <div class="visual-deduction-box">
    <div class="visual-deduction-media">
      <img src="assets/retail-analytics/camera-analysis.png" alt="SanayiPulse Ramp Analysis Screen">
    </div>
    <div class="visual-deduction-body">
      <h4>Screen Reading: Vehicle Detection and Zone Monitoring</h4>
      <p>The camera analysis view marks vehicle detection boxes and ramp zones. The panel side lists each ramp's occupancy duration and the waiting truck queue.</p>
    </div>
  </div>
</div>
`
  },

  vent: {
    category: "Flutter & Firebase · LIVE ON STORES",
    title: "Vent: Emotional Support & Anonymous Communication Network",
    subtitle: "Topic-First Matching, 37 Languages and Consent-Based Chat Architecture",
    overview: `
<div class="deep-section-block">
  <h3 class="deep-h3">Overview & Working Principle</h3>
  <p class="deep-lead">A mobile app meeting people in 1-on-1 anonymous conversation rooms around 222 specific emotion and life topics instead of profile photos or follower counts. Live on the App Store and Google Play.</p>

  <div class="spec-grid">
    <div class="spec-card">
      <h4>222 Topic Headings</h4>
      <p>Emotion- and life-focused subtopics under 12 categories; users first pick what to talk about.</p>
    </div>
    <div class="spec-card">
      <h4>37 Languages & Auto-Translate</h4>
      <p>Matching language and chat translation let global users confide in their own tongue.</p>
    </div>
    <div class="spec-card">
      <h4>Two-Sided Consent</h4>
      <p>Chat rooms open only after both sides approve the topic; unwanted contact filters at the door.</p>
    </div>
    <div class="spec-card">
      <h4>Leak Filter</h4>
      <p>An automatic filter catching personal-info sharing builds the safe-communication layer.</p>
    </div>
  </div>
</div>
`,
    problems: `
<div class="deep-section-block">
  <h3 class="deep-h3">Industry Problems & Solutions</h3>

  <div class="deep-card-grid">
    <div class="deep-card">
      <h4>Like Pressure and Shallow Matching</h4>
      <p>Classic social apps reduce to looks and follower counts. Vent grounds first contact in conversation context, lifting that pressure.</p>
    </div>

    <div class="deep-card">
      <h4>Unsafe Anonymous Chat Experience</h4>
      <p>Harassment and unwanted messages run rampant on anonymous platforms. Topic approval and consent mechanics build a safe space.</p>
    </div>
  </div>
</div>
`,
    technical: `
<div class="deep-section-block">
  <h3 class="deep-h3">Technology Stack & Matching Line</h3>
  <p class="deep-lead">Real-time matching and chat infrastructure at global scale.</p>

  <div class="tech-stack-table-wrap">
    <table class="inventory-table">
      <thead>
        <tr>
          <th>Layer</th>
          <th>Technology & Library</th>
          <th>Architectural Role</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Mobile</strong></td>
          <td><code>Flutter 3.24+ / Dart</code></td>
          <td>Single-codebase client for iOS and Android</td>
        </tr>
        <tr>
          <td><strong>Data & Chat</strong></td>
          <td><code>Firebase Firestore</code></td>
          <td>Real-time matching queue and message stream</td>
        </tr>
        <tr>
          <td><strong>Revenue</strong></td>
          <td><code>RevenueCat (IAP)</code></td>
          <td>Subscription and in-app purchase management</td>
        </tr>
        <tr>
          <td><strong>Localization</strong></td>
          <td><code>37-Language Pack</code></td>
          <td>Separate matching language with automatic chat translation</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
    visual: `
<div class="deep-section-block">
  <h3 class="deep-h3">Topic Selection & Matching Screens</h3>
  <p class="deep-lead">The flow where users pick emotion and intent, then match.</p>

  <div class="visual-deduction-box">
    <div class="visual-deduction-media">
      <img src="assets/vent/vent-topic-request.jpeg" alt="Vent Topic Selection and Matching Screen">
    </div>
    <div class="visual-deduction-body">
      <h4>Screen Reading: Topic-First Contact</h4>
      <p>The screen shows subtopic and intent selection, then the chat room flow opening on mutual approval. Language picks and translation badges support global matching.</p>
    </div>
  </div>
</div>
`
  },
  forge: {
    category: "Flutter + Supabase + Next.js · IN DEVELOPMENT",
    title: "Forge: Athlete Community & Training Network",
    subtitle: "Hybrid Sports Ecosystem with Map Discovery, Events and a Coach Marketplace",
    overview: `
<div class="deep-section-block">
  <h3 class="deep-h3">Overview & Working Principle</h3>
  <p class="deep-lead">A vertical social network where athletes share training records (PRs), programs and videos, and discover nearby gyms and level-matched training partners on the map.</p>

  <div class="spec-grid">
    <div class="spec-card">
      <h4>Map-Based Gym Discovery</h4>
      <p>Nearby gyms, groups and community pages list by location.</p>
    </div>
    <div class="spec-card">
      <h4>Events & Matching</h4>
      <p>Training events, partner requests and level-based matching flows.</p>
    </div>
    <div class="spec-card">
      <h4>PR & Training Feed</h4>
      <p>Record shares, program templates and progress badges.</p>
    </div>
    <div class="spec-card">
      <h4>Hybrid Mobile + Web</h4>
      <p>Mobile and web faces on one shared data contract.</p>
    </div>
  </div>
</div>
`,
    problems: `
<div class="deep-section-block">
  <h3 class="deep-h3">Industry Problems & Solutions</h3>

  <div class="deep-card-grid">
    <div class="deep-card">
      <h4>Solo Training and Motivation Loss</h4>
      <p>People training alone quit at high rates. Level-matched partner pairing sustains consistency.</p>
    </div>

    <div class="deep-card">
      <h4>Scattered Sports Communities</h4>
      <p>Gym announcements, events and coach ads scatter across platforms. Forge gathers them on one map.</p>
    </div>
  </div>
</div>
`,
    technical: `
<div class="deep-section-block">
  <h3 class="deep-h3">Technology Stack & Data Backbone</h3>
  <p class="deep-lead">Mobile and web clients unite on a single Supabase backbone.</p>

  <div class="tech-stack-table-wrap">
    <table class="inventory-table">
      <thead>
        <tr>
          <th>Layer</th>
          <th>Technology & Library</th>
          <th>Architectural Role</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Mobile</strong></td>
          <td><code>Flutter / Dart</code></td>
          <td>Feed, map and training-log client</td>
        </tr>
        <tr>
          <td><strong>Data & Auth</strong></td>
          <td><code>Supabase + RLS</code></td>
          <td>Row-level-secured community data model</td>
        </tr>
        <tr>
          <td><strong>Web</strong></td>
          <td><code>Next.js</code></td>
          <td>Event and gym discovery web face</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
    visual: `
<div class="deep-section-block">
  <h3 class="deep-h3">Navigation & Community Feed</h3>
  <p class="deep-lead">Community experience across map, event and training tabs.</p>

  <div class="visual-deduction-box">
    <div class="visual-deduction-media">
      <img src="assets/forge/screenshot_navigation.png" alt="Forge Navigation and Feed Screen">
    </div>
    <div class="visual-deduction-body">
      <h4>Screen Reading: Map and PR Feed</h4>
      <p>The navigation screen shows map discovery, community feed and training-log tabs. Sample content documents the interface layout; like counts are not real usage metrics.</p>
    </div>
  </div>
</div>
`
  },

  bob: {
    category: "Edge-TTS & Gemini AI · IN DEVELOPMENT",
    title: "BOB: Anti-Snooze Sarcastic Smart Alarm",
    subtitle: "AI-Powered Savage Morning Roasts and Neural Voice Synthesis",
    overview: `
<div class="deep-section-block">
  <h3 class="deep-h3">Overview & Working Principle</h3>
  <p class="deep-lead">A character-driven smart alarm that pulls chronic snoozers out of bed not with soothing ringtones, but with relentlessly sarcastic, witty, and contextual morning roasts. Wakes you up by turning comfortable mornings into comedic peer pressure.</p>

  <div class="spec-grid">
    <div class="spec-card">
      <h4>Dynamic Roast Engine</h4>
      <p>Gemini AI prompt pipeline generates unique daily roasts mocking common wake-up excuses.</p>
    </div>
    <div class="spec-card">
      <h4>Edge-TTS Neural Speech</h4>
      <p>Natural intonation neural speech keeps Bob's cynical persona speaking persistently in the background.</p>
    </div>
    <div class="spec-card">
      <h4>Snooze-Free Streak Counter</h4>
      <p>Gamifies discipline by counting consecutive days out of bed without snoozing.</p>
    </div>
  </div>
</div>
`,
    problems: `
<div class="deep-section-block">
  <h3 class="deep-h3">Industry Problems & Solutions</h3>

  <div class="deep-card-grid">
    <div class="deep-card">
      <h4>Alarm Habituation & Snooze Fatigue</h4>
      <p>Standard chime alarms become subconscious background noise within weeks. Unpredictable, humorous AI dialogues make sensory habituation impossible.</p>
    </div>
  </div>
</div>
`,
    technical: `
<div class="deep-section-block">
  <h3 class="deep-h3">Technology Stack</h3>
  <p class="deep-lead">On-device alarm services with Gemini-driven dynamic dialogue generation.</p>

  <div class="tech-stack-table-wrap">
    <table class="inventory-table">
      <thead>
        <tr>
          <th>Layer</th>
          <th>Technology & Library</th>
          <th>Architectural Role</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Mobile Client</strong></td>
          <td><code>Flutter</code></td>
          <td>Background alarm service and character interaction screen</td>
        </tr>
        <tr>
          <td><strong>Voice Synthesis</strong></td>
          <td><code>Edge-TTS</code></td>
          <td>Neural-voice rendering of dynamic sarcastic lines</td>
        </tr>
        <tr>
          <td><strong>Roast Engine</strong></td>
          <td><code>Gemini AI</code></td>
          <td>Dynamic humor generation tailored to wake-up time and sleep history</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
    visual: `
<div class="deep-section-block">
  <h3 class="deep-h3">Character & Welcome Screen</h3>
  <p class="deep-lead">Alarm experience with a sarcastic assistant persona.</p>

  <div class="visual-deduction-box">
    <div class="visual-deduction-media">
      <img src="assets/bob/IMG_0155.jpeg" alt="BOB Welcome Screen">
    </div>
    <div class="visual-deduction-body">
      <h4>Screen Reading: Persona Identity & Audio Wakeup Flow</h4>
      <p>Introduced as "He does not care that you are tired", BOB functions as an unrelenting wake-up companion delivering sarcastic morning roasts in the background.</p>
    </div>
  </div>
</div>
`
  },

  undrgrnd: {
    category: "Culture & Music Community · IN DEVELOPMENT",
    title: "UNDRGRND: Independent Hip-Hop & Cypher Rooms",
    subtitle: "Live Beat Rooms, Sequential Verse Takes and Artist Discovery",
    overview: `
<div class="deep-section-block">
  <h3 class="deep-h3">Overview & Working Principle</h3>
  <p class="deep-lead">A digital street-music platform where beatmakers and rappers take turns recording vocals and producing tracks in live beat rooms. Independent musicians record without studio rental cost, from their phones.</p>

  <div class="spec-grid">
    <div class="spec-card">
      <h4>Live Cypher Rooms</h4>
      <p>Sequential verse takes over a beat; everyone waits their turn while the room merges the take.</p>
    </div>
    <div class="spec-card">
      <h4>Pocket Studio</h4>
      <p>Freestyle recording and instant sharing from the phone mic.</p>
    </div>
    <div class="spec-card">
      <h4>Event Map</h4>
      <p>Underground events and stage opportunities discover by location.</p>
    </div>
  </div>
</div>
`,
    problems: `
<div class="deep-section-block">
  <h3 class="deep-h3">Industry Problems & Solutions</h3>

  <div class="deep-card-grid">
    <div class="deep-card">
      <h4>Studio Cost and Access Barriers</h4>
      <p>Studio hours price out independent artists. Phone-based recording drops the production threshold to zero.</p>
    </div>

    <div class="deep-card">
      <h4>Fragmented Underground Scene</h4>
      <p>Beatmakers and MCs can't find each other. Shared rooms and a discovery network speed collaboration.</p>
    </div>
  </div>
</div>
`,
    technical: `
<div class="deep-section-block">
  <h3 class="deep-h3">Technology Stack</h3>
  <p class="deep-lead">Real-time room and audio-recording infrastructure.</p>

  <div class="tech-stack-table-wrap">
    <table class="inventory-table">
      <thead>
        <tr>
          <th>Layer</th>
          <th>Technology & Library</th>
          <th>Architectural Role</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Mobile</strong></td>
          <td><code>Flutter</code></td>
          <td>Room, recording and feed client</td>
        </tr>
        <tr>
          <td><strong>Data</strong></td>
          <td><code>Firebase</code></td>
          <td>Room-state and audio-file sync</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
    visual: `
<div class="deep-section-block">
  <h3 class="deep-h3">Cypher Rooms & Verse Board</h3>
  <p class="deep-lead">Sequential recording experience in live rooms.</p>

  <div class="visual-deduction-box">
    <div class="visual-deduction-media">
      <img src="assets/undrgrnd/A3AD40C8-ED0F-489F-9BC2-6A45E3DE98CC.jpg" alt="UNDRGRND Cypher Room Screen">
    </div>
    <div class="visual-deduction-body">
      <h4>Screen Reading: Room and Recording Flow</h4>
      <p>Beat info, turn order and the verse board serve together in-room; participants record in sequence.</p>
    </div>
  </div>
</div>
`
  },

  studio: {
    category: "Remotion & Whisper AI · MEDIA AUTOMATION",
    title: "Code-Based Automated Video & Ad Studio",
    subtitle: "Campaign Videos in Seconds from React Components and Python Scripts",
    overview: `
<div class="deep-section-block">
  <h3 class="deep-h3">Overview & Working Principle</h3>
  <p class="deep-lead">An automation engine rendering dynamically-priced campaign videos and stories in seconds from React components and Python scripts — without opening an editing suite.</p>

  <div class="spec-grid">
    <div class="spec-card">
      <h4>Template-Based Render</h4>
      <p>Prices, dates and visuals compose into templates; post and story variants batch-generate.</p>
    </div>
    <div class="spec-card">
      <h4>Automatic Subtitles</h4>
      <p>Millisecond-accurate synced subtitle layer via Whisper AI.</p>
    </div>
    <div class="spec-card">
      <h4>AI Voiceover</h4>
      <p>Neural-voice narration of campaign copy via Edge-TTS.</p>
    </div>
  </div>
</div>
`,
    problems: `
<div class="deep-section-block">
  <h3 class="deep-h3">Industry Problems & Solutions</h3>

  <div class="deep-card-grid">
    <div class="deep-card">
      <h4>Agency Cost and Montage Delays</h4>
      <p>Waiting on a designer per campaign is expensive and slow. Code-based production ships variants in seconds.</p>
    </div>
  </div>
</div>
`,
    technical: `
<div class="deep-section-block">
  <h3 class="deep-h3">Technology Stack</h3>
  <p class="deep-lead">Programmatic video and voice-synthesis line.</p>

  <div class="tech-stack-table-wrap">
    <table class="inventory-table">
      <thead>
        <tr>
          <th>Layer</th>
          <th>Technology & Library</th>
          <th>Architectural Role</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Video</strong></td>
          <td><code>Remotion (React)</code></td>
          <td>Component-based scene composition and rendering</td>
        </tr>
        <tr>
          <td><strong>Orchestration</strong></td>
          <td><code>Python Scripts</code></td>
          <td>Batch variant generation and scheduling</td>
        </tr>
        <tr>
          <td><strong>Voice & Subtitles</strong></td>
          <td><code>Whisper + Edge-TTS</code></td>
          <td>Synced subtitles with neural narration layer</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
    visual: `
<div class="deep-section-block">
  <h3 class="deep-h3">Render Outputs: Posts & Stories</h3>
  <p class="deep-lead">Sample auto-generated campaign creatives.</p>

  <div class="visual-deduction-box">
    <div class="visual-deduction-media">
      <img src="assets/studyo/rayana_editorial_post.jpg" alt="Auto Studio Campaign Output">
    </div>
    <div class="visual-deduction-body">
      <h4>Screen Reading: Template Discipline and Brand Consistency</h4>
      <p>Typography, logo placement and palette lock per template across variants; campaign data auto-fills.</p>
    </div>
  </div>
</div>
`
  },

  abyssal: {
    category: "40-Episode Series Universe · IP & SCREENWRITING",
    title: "Abyssal Breach: Adult Sci-Fi Universe",
    subtitle: "5 Seasons, 40 Episodes: Existential Crisis and Multiverse Collapse Physics",
    overview: `
<div class="deep-section-block">
  <h3 class="deep-h3">Overview & Universe Design</h3>
  <p class="deep-lead">An animated series universe for adults (24+), designed as 5 seasons of 8 episodes (40 total). Its dramaturgy roadmap covers existential crisis, god-creator conflict and multiverse collapse physics.</p>

  <div class="spec-grid">
    <div class="spec-card">
      <h4>5-Season Arc</h4>
      <p>Eight episodes per season; universal collapse escalates season by season.</p>
    </div>
    <div class="spec-card">
      <h4>Philosophical Conflict Matrix</h4>
      <p>Creator-god tension and existential crisis weave through character arcs.</p>
    </div>
    <div class="spec-card">
      <h4>Universe Physics Canon</h4>
      <p>Multiverse transitions and collapse mechanics bind to a consistent rule set.</p>
    </div>
    <div class="spec-card">
      <h4>Episode Roadmap</h4>
      <p>All 40 episodes' dramaturgical skeleton and season finales lock upfront.</p>
    </div>
  </div>
</div>
`,
    problems: `
<div class="deep-section-block">
  <h3 class="deep-h3">Narrative Problems & Solutions</h3>

  <div class="deep-card-grid">
    <div class="deep-card">
      <h4>Scattered Universe Canon</h4>
      <p>Inconsistency chases long-form audiences away. An upfront canon and rule set close that risk.</p>
    </div>

    <div class="deep-card">
      <h4>Shallow Adult Animation</h4>
      <p>The genre often reduces to parody. Existential themes and philosophical conflict build the adult layer.</p>
    </div>
  </div>
</div>
`,
    technical: `
<div class="deep-section-block">
  <h3 class="deep-h3">Season & Episode Architecture</h3>
  <p class="deep-lead">How the 40-episode skeleton spreads across seasons.</p>

  <div class="tech-stack-table-wrap">
    <table class="inventory-table">
      <thead>
        <tr>
          <th>Season</th>
          <th>Episode Range</th>
          <th>Dramaturgical Function</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Season 1</strong></td>
          <td><code>Episodes 1-8</code></td>
          <td>Universe introduction and the first breach event</td>
        </tr>
        <tr>
          <td><strong>Season 2</strong></td>
          <td><code>Episodes 9-16</code></td>
          <td>The creator figure's shadow and breaking alliances</td>
        </tr>
        <tr>
          <td><strong>Season 3</strong></td>
          <td><code>Episodes 17-24</code></td>
          <td>Multiverse transition physics opens up</td>
        </tr>
        <tr>
          <td><strong>Season 4</strong></td>
          <td><code>Episodes 25-32</code></td>
          <td>Collapse spiral and peak existential crisis</td>
        </tr>
        <tr>
          <td><strong>Season 5</strong></td>
          <td><code>Episodes 33-40</code></td>
          <td>God-creator reckoning and finale</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
    visual: `
<div class="deep-section-block">
  <h3 class="deep-h3">Universe Cover & Visual Identity</h3>
  <p class="deep-lead">The series' key art and atmosphere reference.</p>

  <div class="visual-deduction-box">
    <div class="visual-deduction-media">
      <img src="assets/game-project/game-cover.jpg" alt="Abyssal Breach Universe Cover">
    </div>
    <div class="visual-deduction-body">
      <h4>Screen Reading: Dark Sci-Fi Tone</h4>
      <p>The cover art carries the universe's dark adult sci-fi tone and the breach motif.</p>
    </div>
  </div>
</div>
`
  }
};

// ==========================================================================
// Deep-Dive Modal Engine
// ==========================================================================

let currentTechKey = null;
let currentTechTab = 'overview';

function techStore() {
  return currentLang === 'en' && typeof techDataEn !== 'undefined' ? techDataEn : techData;
}

function fillTechHeader() {
  const data = techStore()[currentTechKey];
  if (!data) return;
  const cat = document.getElementById('modalCategory');
  const title = document.getElementById('modalTitle');
  const subtitle = document.getElementById('modalSubtitle');
  if (cat) cat.textContent = data.category || '';
  if (title) title.textContent = data.title || '';
  if (subtitle) subtitle.textContent = data.subtitle || '';
}

function openTechModal(key) {
  const data = techStore()[key];
  if (!data) return;
  currentTechKey = key;
  currentTechTab = 'overview';
  slideIdx = 0;

  const backdrop = document.getElementById('techModalBackdrop');
  if (!backdrop) return;
  fillTechHeader();

  renderTechTab();
  backdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeTechModal(event) {
  const backdrop = document.getElementById('techModalBackdrop');
  if (!backdrop) return;
  backdrop.classList.remove('active');
  if (!document.getElementById('lightboxBackdrop')?.classList.contains('active')) {
    document.body.style.overflow = '';
  }
  currentTechKey = null;
}

function switchTechTab(tab) {
  if (!currentTechKey) return;
  currentTechTab = tab;
  renderTechTab();
}

function renderTechTab() {
  const data = techStore()[currentTechKey];
  const body = document.getElementById('modalBody');
  if (!data || !body) return;
  body.innerHTML = data[currentTechTab] || data.overview || '';
  body.scrollTop = 0;
  injectGallerySlider(body);

  document.querySelectorAll('#modalTabs .t-tab-btn').forEach(btn => {
    if (btn.getAttribute('data-tab') === currentTechTab) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// ==========================================================================
// İnce Dokunuşlar: modal galeri slider + scroll-reveal
// ==========================================================================

const galleries = {
  aeonCore: [
    { src: 'assets/erp-aeon/Ekran Resmi 2026-07-12 16.30.03.png', cap: 'Yönetim konsolu — ciro ve oda takibi' },
    { src: 'assets/erp-aeon/Ekran Resmi 2026-07-12 16.30.32.png', cap: 'Operasyon ekranı' },
    { src: 'assets/erp-aeon/dolphin-dashboard.png', cap: 'Terminal paneli' }
  ],
  hotelWeb: [
    { src: 'assets/bozburun-yacht-club/byc-home.png', cap: 'Ana vitrin' },
    { src: 'assets/bozburun-yacht-club/byc-restaurant.png', cap: 'Restoran sayfası' },
    { src: 'assets/bozburun-yacht-club/byc-hotel-suites.png', cap: 'Süit tanıtımı' }
  ],
  retailPulse: [
    { src: 'assets/retail-analytics/desktop-hero.png', cap: 'Yoğunluk ve ısı haritası' },
    { src: 'assets/retail-analytics/desktop.png', cap: 'Analitik konsolu' }
  ],
  sanayiPulse: [
    { src: 'assets/retail-analytics/camera-analysis.png', cap: 'Rampa analiz görünümü' },
    { src: 'assets/retail-analytics/desktop.png', cap: 'Operasyon konsolu' }
  ],
  funnivarium: [
    { src: 'assets/vip/funnivarium.png', cap: 'Turnike & biniş denetim paneli' }
  ],
  vent: [
    { src: 'assets/vent/vent-topic-request.jpeg', cap: 'Konu seçim ve eşleşme' },
    { src: 'assets/vent/IMG_0162.PNG', cap: 'Sohbet ekranı' },
    { src: 'assets/vent/IMG_0163.PNG', cap: 'Profil ve ayarlar' }
  ],
  forge: [
    { src: 'assets/forge/screenshot_navigation.png', cap: 'Navigasyon ve akış' },
    { src: 'assets/forge/IMG_0151.PNG', cap: 'Antrenman ekranı' },
    { src: 'assets/forge/IMG_0152.PNG', cap: 'Topluluk ekranı' }
  ],
  bob: [
    { src: 'assets/bob/IMG_0155.jpeg', cap: 'Karşılama ekranı' },
    { src: 'assets/bob/IMG_0156.jpeg', cap: 'Alarm kurulumu' },
    { src: 'assets/bob/bob-sarcastic.png', cap: 'Karakter' }
  ],
  undrgrnd: [
    { src: 'assets/undrgrnd/A3AD40C8-ED0F-489F-9BC2-6A45E3DE98CC.jpg', cap: 'Cypher odası' },
    { src: 'assets/undrgrnd/3ED4C74A-68E2-481F-9ABF-9884EADFBDAB.jpg', cap: 'Verse panosu' },
    { src: 'assets/undrgrnd/3D5550F1-91BA-4992-8F3B-A84DA28E5376.jpg', cap: 'Keşif akışı' }
  ],
  studio: [
    { src: 'assets/studyo/rayana_editorial_post.jpg', cap: 'Editoryal post' },
    { src: 'assets/studyo/rayana_kampanya_post.jpg', cap: 'Kampanya postu' },
    { src: 'assets/studyo/rayana_editorial_story.jpg', cap: 'Hikâye varyantı' }
  ]
};

const lbCaptions = {
  'assets/erp-aeon/Ekran Resmi 2026-07-12 16.30.03.png': { tr: 'Aeon ERP Yönetim Konsolu & Günlük Ciro/Oda Takibi', en: 'Aeon ERP management console & daily revenue/room tracking' },
  'assets/erp-aeon/Ekran Resmi 2026-07-12 16.13.56.png': { tr: 'Yetkili Terminal & OTA Kanal Senkronizasyonu', en: 'Authorized terminal & OTA channel sync' },
  'assets/crm/luce-dashboard.png': { tr: 'Butik İşletme CRM & Satış Yönetim Paneli', en: 'Boutique property CRM & sales panel' },
  'assets/bozburun-yacht-club/byc-home.png': { tr: 'Lüks Butik Otel & Marina Web Portalları', en: 'Luxury boutique hotel & marina web portals' },
  'assets/retail-analytics/desktop-hero.png': { tr: 'RetailPulse AI: Mağaza Yoğunluk & Isı Haritası', en: 'RetailPulse AI: store density & heatmap' },
  'assets/retail-analytics/camera-analysis.png': { tr: 'SanayiPulse: Rampa Doluluk ve Lojistik Takibi', en: 'SanayiPulse: ramp occupancy & logistics tracking' },
  'assets/vip/funnivarium.png': { tr: 'PassAudit OS: Turnike vs. Kamera Biniş Kaçak Tespiti', en: 'PassAudit OS: Turnstile vs. Camera Boarding Audit' },
  'assets/vent/vent-topic-request.jpeg': { tr: 'Vent App: Konu Odaklı Dertleşme ve Eşleşme Ekranı', en: 'Vent app: topic-based matching screen' },
  'assets/forge/screenshot_navigation.png': { tr: 'Forge: Sporcu Topluluğu ve PR Akışı', en: 'Forge: athlete community & PR feed' },
  'assets/bob/IMG_0155.jpeg': { tr: 'BOB: Alaycı Karakter ve Karşılama Ekranı', en: 'BOB: sarcastic character & welcome screen' },
  'assets/undrgrnd/A3AD40C8-ED0F-489F-9BC2-6A45E3DE98CC.jpg': { tr: 'UNDRGRND: Canlı Cypher Odaları & Verse Panosu', en: 'UNDRGRND: live cypher rooms & verse board' },
  'assets/studyo/rayana_editorial_post.jpg': { tr: 'Remotion + Python Kod Tabanlı Medya Stüdyosu', en: 'Remotion + Python code-based media studio' },
  'assets/game-project/game-cover.jpg': { tr: 'Abyssal Breach: 5 Sezonluk Yetişkin Bilimkurgu Evreni', en: 'Abyssal Breach: 5-season adult sci-fi universe' }
};

const galEn = {
  'assets/erp-aeon/Ekran Resmi 2026-07-12 16.30.03.png': 'Management console — revenue & room tracking',
  'assets/erp-aeon/Ekran Resmi 2026-07-12 16.30.32.png': 'Operations screen',
  'assets/erp-aeon/dolphin-dashboard.png': 'Terminal panel',
  'assets/bozburun-yacht-club/byc-home.png': 'Main showcase',
  'assets/bozburun-yacht-club/byc-restaurant.png': 'Restaurant page',
  'assets/bozburun-yacht-club/byc-hotel-suites.png': 'Suite presentation',
  'assets/retail-analytics/desktop-hero.png': 'Density & heatmap',
  'assets/retail-analytics/desktop.png': 'Analytics console',
  'assets/retail-analytics/camera-analysis.png': 'Camera detection view',
  'assets/vip/funnivarium.png': 'Turnstile & boarding audit panel',
  'assets/vent/vent-topic-request.jpeg': 'Topic selection & matching',
  'assets/vent/IMG_0162.PNG': 'Chat screen',
  'assets/vent/IMG_0163.PNG': 'Profile & settings',
  'assets/forge/screenshot_navigation.png': 'Navigation & feed',
  'assets/forge/IMG_0151.PNG': 'Training screen',
  'assets/forge/IMG_0152.PNG': 'Community screen',
  'assets/bob/IMG_0155.jpeg': 'Welcome screen',
  'assets/bob/IMG_0156.jpeg': 'Alarm setup',
  'assets/bob/bob-sarcastic.png': 'Character',
  'assets/undrgrnd/A3AD40C8-ED0F-489F-9BC2-6A45E3DE98CC.jpg': 'Cypher room',
  'assets/undrgrnd/3ED4C74A-68E2-481F-9ABF-9884EADFBDAB.jpg': 'Verse board',
  'assets/undrgrnd/3D5550F1-91BA-4992-8F3B-A84DA28E5376.jpg': 'Discovery feed',
  'assets/studyo/rayana_editorial_post.jpg': 'Editorial post',
  'assets/studyo/rayana_kampanya_post.jpg': 'Campaign post',
  'assets/studyo/rayana_editorial_story.jpg': 'Story variant'
};

function galCap(item) {
  if (currentLang === 'en' && galEn[item.src]) return galEn[item.src];
  return item.cap;
}

let slideIdx = 0;
let touchX = null;

function injectGallerySlider(body) {
  const g = galleries[currentTechKey];
  if (!g || g.length < 2) return;
  const media = body.querySelector('.visual-deduction-media');
  if (!media) return;
  if (slideIdx >= g.length) slideIdx = 0;

  media.classList.add('m-slider');
  const prevLbl = currentLang === 'en' ? 'Previous image' : 'Önceki görsel';
  const nextLbl = currentLang === 'en' ? 'Next image' : 'Sonraki görsel';
  const capNow = galCap(g[slideIdx]);
  media.innerHTML =
    '<button class="m-slide-btn prev" onclick="slideStep(-1)" aria-label="' + prevLbl + '">‹</button>' +
    '<img id="mSlideImg" src="' + g[slideIdx].src + '" alt="' + capNow + '">' +
    '<button class="m-slide-btn next" onclick="slideStep(1)" aria-label="' + nextLbl + '">›</button>' +
    '<span class="m-cap">' + capNow + '</span>' +
    '<span class="m-count">' + (slideIdx + 1) + ' / ' + g.length + '</span>';

  const oldDots = body.querySelector('.m-dots');
  if (oldDots) oldDots.remove();
  let dotsHtml = '<div class="m-dots">';
  for (let i = 0; i < g.length; i++) {
    dotsHtml += '<button onclick="slideGo(' + i + ')" class="' + (i === slideIdx ? 'on' : '') + '" aria-label="Görsel ' + (i + 1) + '"></button>';
  }
  dotsHtml += '</div>';
  media.insertAdjacentHTML('afterend', dotsHtml);

  const img = media.querySelector('img');
  img.ontouchstart = (e) => { touchX = e.touches[0].clientX; };
  img.ontouchend = (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (dx > 40) slideStep(-1);
    else if (dx < -40) slideStep(1);
    touchX = null;
  };
}

function slideStep(d) {
  const g = galleries[currentTechKey];
  if (!g || g.length < 2) return;
  slideIdx = (slideIdx + d + g.length) % g.length;
  injectGallerySlider(document.getElementById('modalBody'));
}

function slideGo(i) {
  const g = galleries[currentTechKey];
  if (!g || g.length < 2) return;
  slideIdx = i;
  injectGallerySlider(document.getElementById('modalBody'));
}

window.addEventListener('keydown', (e) => {
  const backdrop = document.getElementById('techModalBackdrop');
  if (!backdrop || !backdrop.classList.contains('active')) return;
  const g = galleries[currentTechKey];
  if (!g || g.length < 2) return;
  if (e.key === 'ArrowRight') slideStep(1);
  if (e.key === 'ArrowLeft') slideStep(-1);
});

// Scroll-reveal: sınıf JS ile eklenir, JS yoksa içerik aynen görünür
(function initReveal() {
  if (!('IntersectionObserver' in window)) return;
  const targets = document.querySelectorAll(
    '.section-header, .showcase-card, .cv-item, .skill-category-card, ' +
    '.extra-card, .extra-article-box, .offer-card, .contact-box-card, ' +
    '.intro-main, .intro-card-side'
  );
  if (!targets.length) return;
  document.body.classList.add('has-reveal');

  document.querySelectorAll(
    '.showcase-grid, .timeline-cv, .skills-matrix-grid, .extras-grid, .offerings-grid, .article-list'
  ).forEach(grid => {
    Array.prototype.forEach.call(grid.children, (child, i) => {
      child.style.transitionDelay = Math.min(i, 5) * 70 + 'ms';
    });
  });

  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  targets.forEach(el => {
    el.classList.add('rv');
    io.observe(el);
  });
})();

// ==========================================================================
// In-Page Article Modal Reader
// ==========================================================================
const articlesData = {
  math: {
    url: "assets/science-articles/math.html",
    tr: "Matematiğin Sessiz Krizi: Çalışan Ama Gerçekliği Eksik Sayan Bir Dil",
    en: "The Silent Crisis of Mathematics: A Language That Works But Falls Short"
  },
  copenhagen: {
    url: "assets/science-articles/copenhagen.html",
    tr: "Kopenhag Tavanı: 1927 Kuantum Fiziğini Nasıl Durdurdu?",
    en: "The Copenhagen Ceiling: Why 1927 Still Holds Quantum Physics in Check"
  },
  loop: {
    url: "assets/science-articles/loop.html",
    tr: "Döngüsel Evren: Bir Koordinat Değil Dinamik Operatör Olarak Zaman",
    en: "The Loop Universe: Time as a Dynamic Operator Rather Than a Coordinate"
  },
  ctec: {
    url: "assets/science-articles/ctec.html",
    tr: "Korelasyon Etiketli Dolaşıklık İletişimi (CTEC): Işık-Hızı-Ötesi Çerçeve",
    en: "Correlation-Tagged Entanglement Communication (CTEC): FTL Framework"
  }
};

function openArticleModal(keyOrUrl, fallbackTitle) {
  const modal = document.getElementById("articleModalBackdrop");
  const frame = document.getElementById("articleFrame");
  const titleEl = document.getElementById("articleModalTitle");
  if (!modal || !frame) return;

  const item = articlesData[keyOrUrl];
  const baseUrl = item ? item.url : keyOrUrl;
  const lang = (typeof currentLang !== 'undefined' && currentLang === 'en') ? 'en' : 'tr';
  const url = baseUrl + '#' + lang;
  const title = item ? (lang === 'tr' ? item.tr : item.en) : fallbackTitle;

  if (titleEl) titleEl.textContent = title || (lang === 'tr' ? "Bilimsel Makale" : "Scientific Paper");
  frame.src = url;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeArticleModal(e) {
  const modal = document.getElementById("articleModalBackdrop");
  const frame = document.getElementById("articleFrame");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
    if (frame) frame.src = "";
  }
}
