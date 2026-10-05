/**
 * ============================================================================
 * ⚙️ KİŞİSELLEŞTİRME AYARLARI (CONFIG)
 * 9 Günlük Yeni ve Tatlı İlişkimize Özel Samimi Ayarlar
 * ============================================================================
 */
const CONFIG = {
  // 1. İlişki Başlangıç Tarihi
  relationshipStartDate: "2026-09-26T00:00:00",
  displayDateText: "26 Eylül 2026",

  // 2. Ana Giriş Şifresi
  password: "2609",
  passwordErrorText: "Biraz daha düşün bakalım :)",

  // 3. Senin Telefon Numaran (WhatsApp doğrudan bu numaraya mesaj atar)
  myPhoneNumber: "905366534347",

  // 4. Başlık & Sözler
  heroTitle: "İyi ki Geldin Hayatıma ✨",
  heroQuote: "“Daha yolun çok başındayız ama şimdiden her şey çok güzel…”",

  // 5. Polaroid Fotoğraf Galerisi
  defaultPhotos: [
    {
      url: "resimler/foto1.jpeg",
      caption: "O ilk günlerin tatlı heyecanı :)"
    },
    {
      url: "resimler/foto2.jpeg",
      caption: "İstemsizce sırıttığım o an..."
    },
    {
      url: "resimler/foto3.jpeg",
      caption: "Gülüşün çok güzel haberin olsun ❤️"
    },
    {
      url: "resimler/foto4.jpeg",
      caption: "Yanında kendimi çok rahat hissediyorum"
    },
    {
      url: "resimler/foto5.jpeg",
      caption: "Şu tatlılığa bakar mısın ya :)"
    },
    {
      url: "resimler/foto6.jpeg",
      caption: "Daha biriktireceğimiz çok anı var ✨"
    }
  ],

  // 6. Özel Sesli Not (Yüklediğiniz ses kaydı)
  voiceNoteUrl: "ses.mp3",
  voiceNoteFallbackUrl: "seskaydı/ses.mp3",

  // 7. Sana Dair Şimdiden Sevdiğim Şeyler
  reasons: [
    {
      icon: "smile",
      title: "O Utangaç Gülüşün",
      desc: "Bana bakıp hafifçe gülümsediğinde içimde oluşan o tatlı heyecanı çok seviyorum."
    },
    {
      icon: "message-circle",
      title: "Bitmeyen Sohbetlerimiz",
      desc: "Daha yeni başladık ama sanki seni çok uzun zamandır tanıyormuşum gibi rahat hissettirmen."
    },
    {
      icon: "sparkles",
      title: "Tatlı ve Samimi Hallerin",
      desc: "Bana heyecanla bir şeyler anlatırkenki o doğallığın dünyadaki her şeye değer."
    },
    {
      icon: "heart",
      title: "Sesini Duyduğum An",
      desc: "Günün nasıl geçerse geçsin, sesini duyunca istemsizce yüzümün gülmesi."
    }
  ],

  // 8. İkimize Dair Mini Test
  quizQuestions: [
    {
      question: "Sence ilk adımı kim daha çok bekledi? 😅",
      options: [
        { text: "Bence sen çok heyecanlıydın!", feedback: "Yalan yok, heyecandan kalbim yerinden çıkacaktı :)" },
        { text: "Ben de az beklemedim hani :)", feedback: "Belli etmemeye çalışsan da biliyordum birtanem! ❤️" },
        { text: "İkimiz de aynı anda düşündük", feedback: "Tam olarak öyle oldu, en güzeli de buydu zaten ✨" }
      ]
    },
    {
      question: "Buluştuğumuzda ilk ne yapalım? 🧋",
      options: [
        { text: "Güzel bir tatlı yiyip saatlerce konuşalım", feedback: "En sevdiğin tatlıyı sipariş etmek benden!" },
        { text: "Kulaklığı paylaşıp müzik dinleyelim", feedback: "En sevdiğimiz şarkıyı beraber mırıldanırız :)" },
        { text: "Bol bol yeni fotoğraflar çekilelim", feedback: "Galerimizi doldurma zamanı geldi bile! 📸" }
      ]
    },
    {
      question: "Bu 9 gün nasıl geçti sence? 🥰",
      options: [
        { text: "Su gibi akıp geçti", feedback: "Seninleyken zamanın nasıl aktığını hiç anlamıyorum..." },
        { text: "Çok heyecanlı ve tatlıydı", feedback: "Ve bu daha sadece başlangıç, daha çok eğleneceğiz!" },
        { text: "Her saniyesi çok güzeldi", feedback: "Benim için de öyle... İyi ki 'evet' dedin küçük hanım ❤️" }
      ]
    }
  ],

  // 9. Yenilenmiş Sevgi Kuponları (Tek tıkla bozdurulur & WhatsApp'a mesaj atar)
  coupons: [
    { id: "coupon_1", title: "🍟 1x İstediğin Yemeği Ismarlama", desc: "Canın ne çekerse nerede istersen menü benden!" },
    { id: "coupon_2", title: "🧋 1x Canın Çektiğinde Tatlı/İçecek Ismarlama", desc: "Canın tatlı çektiğinde anında kapında." },
    { id: "coupon_3", title: "🎬 1x Beraber İlk Dizimizi / Filmi Seçme Hakkı", desc: "İtirazsız, ne istersen onu izliyoruz." },
    { id: "coupon_4", title: "🎁 1x Benden Özel Bir Sürpriz İsteme Hakkı", desc: "Ne istersen iste, yerine getirme sözü." },
    { id: "coupon_5", title: "🎧 1x Kulaklığı Paylaşıp Yürüyüş Yapma", desc: "En sevdiğin şarkılarla yan yana yürüyüş." }
  ],

  // 10. Moral & Tebessüm Kutusu Mesajları
  smileNotes: [
    "Daha yolun çok başındayız ama iyi ki hayatıma girdin, yüzünü asmak yok! ❤️",
    "Gülüşün çok tatlı, canını sıkan her şeyi boşver ve gülümse :)",
    "Unutma, artık günün nasıl geçerse geçsin her akşam konuşabileceğin biri var arkanda.",
    "Bana ilk 'evet' dediğin anı hatırla, içimdeki heyecan hala aynı!",
    "Seninle konuşmak bana çok iyi geliyor, bunu sakın unutma. ✨"
  ],

  // 11. Birlikte İlk Yapacaklarımız (Bucket List)
  bucketList: [
    { id: "b1", text: "Birlikte ilk defa sinemaya gitmek 🎬", done: false },
    { id: "b2", text: "Sahilde oturup saatlerce sohbet etmek 🌅", done: false },
    { id: "b3", text: "Galerimizi dolduracak yeni fotoğraflar çekilmek 📸", done: false },
    { id: "b4", text: "Birbirimize en sevdiğimiz şarkıları dinletmek 🎧", done: false },
    { id: "b5", text: "İlk büyük konserimize yan yana gitmek 🎸", done: false }
  ],

  // 11. Zaman Çizelgesi
  memories: [
    {
      date: "26.09.2026",
      title: "O İlk Gün & Yeni Başlangıcımız ❤️",
      description: "İçimdeki o tatlı heyecanın başladığı, iyi ki dediğim o gün."
    },
    {
      date: "İlk Günlerimiz",
      title: "Uzun Sohbetler & Birbirimizi Tanıma",
      description: "Konuşurken saatlerin su gibi akıp gittiği o ilk tatlı anlar..."
    },
    {
      date: "Şimdi & Gelecek",
      title: "Daha Yaşayacağımız Çok Şey Var",
      description: "Birlikte keşfedeceğimiz yerler, çektireceğimiz yeni fotoğraflar..."
    }
  ],

  // 12. Bize Özel Samimi Mektup (17 yaş samimiyeti, 9 günün tatlı heyecanı)
  mainMessage: `Selam küçük hanım :)

Daha sadece 9 gün oldu ama hayatıma girdiğin andan beri her şey çok daha renkli ve eğlenceli. 

Birbirimizi yeni yeni tanıyoruz, daha gideceğimiz çok yer, yapacağımız çok saçmalık var. Seninle konuşurken, sesini duyduğumda ya da bana o tatlı gülüşünü attığında hissettiğim heyecanı çok seviyorum.

Her şeyin çok başındayız biliyorum ama şimdiden iyi ki varsın ve iyi ki sevgilim oldun. Seni çok seviyorum. ❤️`,

  // 13. Gizli Sürpriz Bölümü
  secretPassword: "biz",
  secretMessage: `Buraya kadar geldiysen bilmeni istediğim tek bir şey var:
Daha 9 gün oldu ama şimdiden hayatıma kattığın o tatlı enerjiyi ve gülüşünü çok seviyorum. İyi ki hayatımdasın!`,

  secretCards: [
    {
      title: "💌 Küçük Bir İtiraf",
      text: "Sana ilk açılacağım zaman kalbim o kadar hızlı çarpıyordu ki, 'evet' dediğin an dünyalar benim oldu :)"
    },
    {
      title: "🌟 En Sevdiğim Halin",
      text: "Böyle bana heyecanla bir şeyler anlatırkenki o tatlı samimiyetin... Seni saatlerce dinleyebilirim."
    },
    {
      title: "🕊️ Sana Bir Sözüm",
      text: "Her zaman yanında olacağım; neşende de, canın sıkıldığında da ilk beni ara tamam mı?"
    }
  ],

  // 14. Müzik Dosyası (şarkı klasöründeki müzik)
  musicUrl: "muzik.mp3",
  musicFallbackUrl: "şarkı/muzik.mp3",
  finalMessage: "İyi ki biz. ❤️"
};

/**
 * ============================================================================
 * UYGULAMA MANTIĞI & ETKİLEŞİMLER
 * ============================================================================
 */
document.addEventListener("DOMContentLoaded", () => {
  // Önceki test verilerini temizleyip sıfır ve temiz başlat
  localStorage.removeItem("used_love_coupons");
  localStorage.removeItem("used_love_coupons_history");
  localStorage.removeItem("bucket_list_done");
  localStorage.removeItem("partner_secret_note");
  localStorage.removeItem("romantic_user_photos");
  localStorage.removeItem("love_agreement_signed");

  if (window.lucide) window.lucide.createIcons();

  initElements();
  initPinLock();
  initLiveCounter();
  initTimeGreeting();
  initPolaroidGallery();
  initVoiceNote();
  initReasons();
  initQuiz();
  initFortune();
  initLoveMeter();
  initDailyMission();
  initAgreement();
  initHeartShower();
  initCoupons();
  initSmileButton();
  initBucketList();
  initTimeline();
  initSecretSection();
  initMusic();
  initCanvas();
  initScrollReveal();
});

function initElements() {
  const headerDateDisplay = document.getElementById("headerDateDisplay");
  if (headerDateDisplay) headerDateDisplay.textContent = CONFIG.displayDateText;

  const heroTitle = document.getElementById("heroTitle");
  if (heroTitle) heroTitle.textContent = CONFIG.heroTitle;

  const heroQuote = document.getElementById("heroQuote");
  if (heroQuote) heroQuote.textContent = CONFIG.heroQuote;

  const letterMessageText = document.getElementById("letterMessageText");
  if (letterMessageText) letterMessageText.textContent = CONFIG.mainMessage;

  const secretCustomMessage = document.getElementById("secretCustomMessage");
  if (secretCustomMessage) secretCustomMessage.textContent = CONFIG.secretMessage;

  const footerFinalMessage = document.getElementById("footerFinalMessage");
  if (footerFinalMessage) footerFinalMessage.textContent = CONFIG.finalMessage;
}

function initPinLock() {
  const lockScreen = document.getElementById("lockScreen");
  const mainContent = document.getElementById("mainContent");
  const pinDisplay = document.getElementById("pinDisplay");
  const pinDots = pinDisplay.querySelectorAll(".pin-dot");
  const pinError = document.getElementById("pinError");
  const keypad = document.getElementById("keypad");

  let enteredPin = "";

  function updateDots() {
    pinDots.forEach((dot, index) => {
      dot.classList.toggle("filled", index < enteredPin.length);
    });
  }

  function handleKey(key) {
    if (enteredPin.length < 4) {
      enteredPin += key;
      updateDots();
      pinError.classList.remove("show");

      if (enteredPin.length === 4) {
        if (enteredPin === CONFIG.password) {
          lockScreen.classList.add("unlocking");
          
          // Şifre doğru girilince müziği otomatik başlat
          const bgAudio = document.getElementById("bgAudio");
          const musicControl = document.getElementById("musicControl");
          const musicLabel = document.getElementById("musicLabel");
          if (bgAudio) {
            bgAudio.play().then(() => {
              if (musicControl) musicControl.classList.add("playing");
              if (musicLabel) musicLabel.textContent = "Çalıyor 🎵";
            }).catch(e => console.log("Audio permission:", e));
          }

          setTimeout(() => {
            lockScreen.classList.remove("active");
            mainContent.classList.add("visible");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }, 550);
        } else {
          pinDisplay.classList.add("shake");
          pinError.classList.add("show");
          setTimeout(() => {
            pinDisplay.classList.remove("shake");
            enteredPin = "";
            updateDots();
          }, 450);
        }
      }
    }
  }

  function handleDelete() {
    if (enteredPin.length > 0) {
      enteredPin = enteredPin.slice(0, -1);
      updateDots();
      pinError.classList.remove("show");
    }
  }

  keypad.addEventListener("click", (e) => {
    const btn = e.target.closest(".key-btn");
    if (!btn) return;
    const key = btn.getAttribute("data-key");
    const action = btn.getAttribute("data-action");

    if (key !== null) handleKey(key);
    else if (action === "delete") handleDelete();
  });

  window.addEventListener("keydown", (e) => {
    if (!lockScreen.classList.contains("active")) return;
    if (e.key >= "0" && e.key <= "9") handleKey(e.key);
    else if (e.key === "Backspace") handleDelete();
  });
}

/* --------------------------------------------------------------------------
   GÜNÜN SAATİNE GÖRE DİNAMİK MESAJ (SABAH / ÖĞLEN / AKŞAM / GECE)
   -------------------------------------------------------------------------- */
function initTimeGreeting() {
  const greetingIcon = document.getElementById("greetingIcon");
  const greetingTimeTag = document.getElementById("greetingTimeTag");
  const greetingMessage = document.getElementById("greetingMessage");

  function update() {
    const hour = new Date().getHours();

    if (hour >= 6 && hour < 12) {
      // Sabah
      if (greetingTimeTag) greetingTimeTag.textContent = "🌅 Günaydın Mesajım";
      if (greetingMessage) greetingMessage.textContent = "Günaydın güzelim :) Umarım günün en az senin kadar tatlı ve neşeli geçer. Aklımdasın ❤️";
      if (greetingIcon) greetingIcon.setAttribute("data-lucide", "sun");
    } else if (hour >= 12 && hour < 18) {
      // Öğlen / İkindi
      if (greetingTimeTag) greetingTimeTag.textContent = "☀️ Gün Ortası Mesajım";
      if (greetingMessage) greetingMessage.textContent = "Günün nasıl geçiyor bakalım? Çok yorma kendini, sesini duymak için sabırsızlanıyorum :)\"";
      if (greetingIcon) greetingIcon.setAttribute("data-lucide", "sun-medium");
    } else if (hour >= 18 && hour < 23) {
      // Akşam
      if (greetingTimeTag) greetingTimeTag.textContent = "🌆 Akşam Mesajım";
      if (greetingMessage) greetingMessage.textContent = "Günün bütün yorgunluğunu geride bırak... İyi ki varsın ve iyi ki hayatımdasın ✨";
      if (greetingIcon) greetingIcon.setAttribute("data-lucide", "sunset");
    } else {
      // Gece (23:00 - 06:00)
      if (greetingTimeTag) greetingTimeTag.textContent = "🌙 Gece Mesajım";
      if (greetingMessage) greetingMessage.textContent = "İyi geceler uykucu :) Rüyanda beni gör, tatlı rüyalar küçük hanım... ❤️";
      if (greetingIcon) greetingIcon.setAttribute("data-lucide", "moon");
    }

    if (window.lucide) window.lucide.createIcons();
  }

  update();
  setInterval(update, 60000); // Her dakika saati kontrol eder
}

function initLiveCounter() {
  const counterDays = document.getElementById("counterDays");
  const timeHours = document.getElementById("timeHours");
  const timeMinutes = document.getElementById("timeMinutes");
  const timeSeconds = document.getElementById("timeSeconds");
  const label = document.getElementById("counterDaysLabel");

  const startDate = new Date(CONFIG.relationshipStartDate).getTime();

  function update() {
    const now = new Date().getTime();
    let diff = now - startDate;

    if (diff < 0) {
      diff = Math.abs(diff);
      if (label) label.textContent = "GÜN KALDI";
    } else {
      if (label) label.textContent = "GÜNDÜR BERABERİZ";
    }

    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (counterDays) counterDays.textContent = days.toLocaleString("tr-TR");
    if (timeHours) timeHours.textContent = String(hours).padStart(2, "0");
    if (timeMinutes) timeMinutes.textContent = String(minutes).padStart(2, "0");
    if (timeSeconds) timeSeconds.textContent = String(seconds).padStart(2, "0");
  }

  update();
  setInterval(update, 1000);
}

function initPolaroidGallery() {
  const photoGallery = document.getElementById("photoGallery");
  const lightboxModal = document.getElementById("lightboxModal");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxClose = document.getElementById("lightboxClose");
  const backdrop = lightboxModal.querySelector(".lightbox-backdrop");

  const photos = CONFIG.defaultPhotos;

  photoGallery.innerHTML = photos
    .map(
      (photo, index) => `
    <div class="polaroid-card" data-index="${index}">
      <div class="polaroid-pin"></div>
      <div class="polaroid-img-wrap">
        <img src="${photo.url}" alt="Fotoğraf" loading="lazy" />
      </div>
      <p class="polaroid-caption">${photo.caption}</p>
    </div>
  `
    )
    .join("");

  photoGallery.addEventListener("click", (e) => {
    const card = e.target.closest(".polaroid-card");
    if (!card) return;
    const index = card.getAttribute("data-index");
    const photo = photos[index];
    if (photo) {
      lightboxImg.src = photo.url;
      lightboxCaption.textContent = photo.caption;
      lightboxModal.classList.add("active");
    }
  });

  function closeLightbox() {
    lightboxModal.classList.remove("active");
  }

  lightboxClose.addEventListener("click", closeLightbox);
  backdrop.addEventListener("click", closeLightbox);
}

function initVoiceNote() {
  const voicePlayBtn = document.getElementById("voicePlayBtn");
  const voicePlayIcon = document.getElementById("voicePlayIcon");
  const voiceAudio = document.getElementById("voiceAudio");
  const voiceCard = document.querySelector(".voice-card");
  const voiceStatus = document.getElementById("voiceStatus");

  if (!voicePlayBtn || !voiceAudio) return;
  voiceAudio.src = CONFIG.voiceNoteUrl;

  voiceAudio.onerror = () => {
    if (voiceAudio.src !== CONFIG.voiceNoteFallbackUrl) {
      voiceAudio.src = CONFIG.voiceNoteFallbackUrl;
    }
  };

  let isPlaying = false;

  voicePlayBtn.addEventListener("click", () => {
    if (!isPlaying) {
      voiceAudio.play().then(() => {
        isPlaying = true;
        voiceCard.classList.add("playing");
        voiceStatus.textContent = "Sesli not çalıyor... 🎧";
        if (voicePlayIcon) voicePlayIcon.setAttribute("data-lucide", "pause");
        if (window.lucide) window.lucide.createIcons();
      }).catch(err => console.log(err));
    } else {
      voiceAudio.pause();
      isPlaying = false;
      voiceCard.classList.remove("playing");
      voiceStatus.textContent = "Duraklatıldı";
      if (voicePlayIcon) voicePlayIcon.setAttribute("data-lucide", "play");
      if (window.lucide) window.lucide.createIcons();
    }
  });

  voiceAudio.addEventListener("ended", () => {
    isPlaying = false;
    voiceCard.classList.remove("playing");
    voiceStatus.textContent = "Tekrar dinlemek için tıkla";
    if (voicePlayIcon) voicePlayIcon.setAttribute("data-lucide", "play");
    if (window.lucide) window.lucide.createIcons();
  });
}

function initReasons() {
  const reasonsGrid = document.getElementById("reasonsGrid");
  if (!reasonsGrid || !CONFIG.reasons) return;

  reasonsGrid.innerHTML = CONFIG.reasons
    .map(
      (r) => `
    <div class="reason-card glass-card">
      <div class="reason-icon-wrap">
        <i data-lucide="${r.icon || 'sparkles'}"></i>
      </div>
      <div class="reason-content">
        <h4>${r.title}</h4>
        <p>${r.desc}</p>
      </div>
    </div>
  `
    )
    .join("");

  if (window.lucide) window.lucide.createIcons();
}

function initQuiz() {
  const quizStep = document.getElementById("quizStep");
  const quizQuestion = document.getElementById("quizQuestion");
  const quizOptions = document.getElementById("quizOptions");
  const quizFeedback = document.getElementById("quizFeedback");

  let currentQuestion = 0;
  const questions = CONFIG.quizQuestions;

  function renderQuestion() {
    const q = questions[currentQuestion];
    if (quizStep) quizStep.textContent = `Soru ${currentQuestion + 1} / ${questions.length}`;
    if (quizQuestion) quizQuestion.textContent = q.question;
    if (quizFeedback) quizFeedback.classList.remove("show");

    if (quizOptions) {
      quizOptions.innerHTML = q.options
        .map(
          (opt, i) => `
        <button class="quiz-option-btn" data-index="${i}">${opt.text}</button>
      `
        )
        .join("");
    }
  }

  if (quizOptions) {
    quizOptions.addEventListener("click", (e) => {
      const btn = e.target.closest(".quiz-option-btn");
      if (!btn) return;

      const idx = btn.getAttribute("data-index");
      const opt = questions[currentQuestion].options[idx];

      btn.classList.add("selected");
      if (quizFeedback) {
        quizFeedback.textContent = opt.feedback;
        quizFeedback.classList.add("show");
      }

      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          currentQuestion++;
          renderQuestion();
        } else {
          if (quizQuestion) quizQuestion.textContent = "Test Tamamlandı! 🎉";
          if (quizOptions) quizOptions.innerHTML = `<p style="font-size:0.95rem;color:#f8fafc;padding:10px 0;">Sonuç: 9 gün oldu ama şimdiden çok tatlı bir ikiliyiz! 🥰</p>`;
          if (quizFeedback) quizFeedback.style.display = "none";
        }
      }, 1600);
    });
  }

  renderQuestion();
}

function initFortune() {
  const getFortuneBtn = document.getElementById("getFortuneBtn");
  const fortuneOrb = document.getElementById("fortuneOrb");
  const fortuneText = document.getElementById("fortuneText");

  const fortunes = [
    "✨ Yıldızların mesajı: 'Yan yana olmasanız da aynı şarkıda kalpleriniz birleşiyor.'",
    "🌙 Gece yıldızları diyor ki: 'Birbirinize çok iyi geliyorsunuz, gülüşlerinizi hiç kaybetmeyin.'",
    "💖 Gökyüzü fısıldıyor: 'Bugün onun aklına geldiğin an yüzünde tatlı bir tebessüm oluştu.'",
    "🔮 Yıldız haritanız: 'Birlikte keşfedeceğiniz çok şehir ve yazacağınız harika bir hikaye var.'",
    "⭐ Bugünün şansı: 'Birbirinize attığınız o küçük mesajlar günün bütün yorgunluğunu unutturuyor.'"
  ];

  if (!fortuneText) return;

  let lastIdx = -1;

  function triggerFortune() {
    let rand;
    do {
      rand = Math.floor(Math.random() * fortunes.length);
    } while (rand === lastIdx && fortunes.length > 1);

    lastIdx = rand;
    fortuneText.textContent = fortunes[rand];
  }

  if (getFortuneBtn) getFortuneBtn.addEventListener("click", triggerFortune);
  if (fortuneOrb) fortuneOrb.addEventListener("click", triggerFortune);
}

function initLoveMeter() {
  const loveSlider = document.getElementById("loveSlider");
  const meterPercentage = document.getElementById("meterPercentage");
  const meterHeartIcon = document.getElementById("meterHeartIcon");
  const meterFeedbackText = document.getElementById("meterFeedbackText");

  if (!loveSlider) return;

  function updateMeter() {
    const val = parseInt(loveSlider.value);
    meterPercentage.textContent = `${val}%`;

    // Kalp büyüme efekti
    const scale = 1 + (val / 1000) * 0.7;
    meterHeartIcon.style.transform = `scale(${scale})`;

    if (val < 100) {
      meterFeedbackText.textContent = "Şimdiden aklımdasın :)";
    } else if (val < 400) {
      meterFeedbackText.textContent = "Çok ama çok özledim! ❤️";
    } else if (val < 800) {
      meterFeedbackText.textContent = "Dünyalar kadar özledim, yanımda olsan keşke ✨";
    } else {
      meterFeedbackText.textContent = "Evren kadar, sınır yok! Aklımdan hiç çıkmıyorsun 🥰";
    }
  }

  loveSlider.addEventListener("input", updateMeter);
  updateMeter();
}

function initDailyMission() {
  const getMissionBtn = document.getElementById("getMissionBtn");
  const missionText = document.getElementById("missionText");

  const missions = [
    "📸 Bugün bana gün içinden komik/tatlı bir fotoğrafını at!",
    "🎧 Şu an dinlediğin şarkıyı bana da aç, beraber dinleyelim.",
    "🍫 Bugün canının en çok çektiği tatlıyı bana söyle, ilk buluşmada hazır bil.",
    "💭 Bugün aklına gelen en güzel anımızı bana mesaj at.",
    "🥰 Bana 10 saniyelik tatlı bir ses kaydı gönder."
  ];

  if (!getMissionBtn || !missionText) return;

  let lastIdx = -1;

  getMissionBtn.addEventListener("click", () => {
    let rand;
    do {
      rand = Math.floor(Math.random() * missions.length);
    } while (rand === lastIdx && missions.length > 1);

    lastIdx = rand;
    missionText.textContent = missions[rand];
  });
}

function initAgreement() {
  const signBtn = document.getElementById("signAgreementBtn");
  const signedStamp = document.getElementById("signedStamp");

  if (!signBtn || !signedStamp) return;

  const isSigned = localStorage.getItem("love_agreement_signed") === "true";
  if (isSigned) {
    signBtn.style.display = "none";
    signedStamp.style.display = "block";
  } else {
    signBtn.style.display = "inline-flex";
    signedStamp.style.display = "none";
  }

  signBtn.addEventListener("click", () => {
    signBtn.style.display = "none";
    signedStamp.style.display = "block";
    localStorage.setItem("love_agreement_signed", "true");

    // İmzalayınca kalpler patlat
    triggerHeartExplosion();
  });
}

function triggerHeartExplosion() {
  const canvas = document.getElementById("ambientCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const hearts = [];
  const heartCount = 35;
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;

  for (let i = 0; i < heartCount; i++) {
    hearts.push({
      x: cx,
      y: cy,
      vx: (Math.random() - 0.5) * 12,
      vy: (Math.random() - 0.5) * 14 - 3,
      size: Math.random() * 16 + 10,
      alpha: 1,
      color: Math.random() > 0.5 ? "#e63956" : "#ec4899"
    });
  }

  function renderExplosion() {
    for (let i = hearts.length - 1; i >= 0; i--) {
      const h = hearts[i];
      h.x += h.vx;
      h.y += h.vy;
      h.vy += 0.25; // yerçekimi
      h.alpha -= 0.02;

      if (h.alpha <= 0) {
        hearts.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = h.alpha;
      ctx.fillStyle = h.color;
      ctx.font = `${h.size}px sans-serif`;
      ctx.fillText("❤️", h.x, h.y);
      ctx.restore();
    }

    if (hearts.length > 0) {
      requestAnimationFrame(renderExplosion);
    }
  }

  renderExplosion();
}

function initHeartShower() {
  const btn = document.getElementById("heartShowerBtn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    triggerHeartExplosion();
  });
}

function initCoupons() {
  const couponsGrid = document.getElementById("couponsGrid");
  const couponsHistoryList = document.getElementById("couponsHistoryList");
  if (!couponsGrid || !CONFIG.coupons) return;

  let couponHistory = JSON.parse(localStorage.getItem("used_love_coupons_history") || "[]");

  function renderHistory() {
    if (!couponsHistoryList) return;
    if (couponHistory.length === 0) {
      couponsHistoryList.innerHTML = `<p class="empty-history-text">Henüz kullanılan bir kupon yok. İlk kuponunu bozdurmaya ne dersin? :)</p>`;
    } else {
      couponsHistoryList.innerHTML = couponHistory
        .map(
          (item) => `
        <div class="history-item">
          <span class="history-item-title">${item.title}</span>
          <span class="history-item-date">${item.date} ✓</span>
        </div>
      `
        )
        .join("");
    }
  }

  function renderCoupons() {
    const usedIds = couponHistory.map((h) => h.id);

    couponsGrid.innerHTML = CONFIG.coupons
      .map((c) => {
        const isUsed = usedIds.includes(c.id);
        return `
        <div class="coupon-card ${isUsed ? 'used' : ''}" data-id="${c.id}" data-title="${c.title}">
          <div class="coupon-info">
            <h4>${c.title}</h4>
            <p>${c.desc}</p>
          </div>
          <button class="coupon-action-btn">${isUsed ? 'Kullanıldı ✓' : 'Kullan'}</button>
        </div>
      `;
      })
      .join("");
  }

  couponsGrid.addEventListener("click", (e) => {
    const btn = e.target.closest(".coupon-action-btn");
    if (!btn) return;
    const card = btn.closest(".coupon-card");
    const id = card.getAttribute("data-id");
    const title = card.getAttribute("data-title");

    const alreadyUsed = couponHistory.some((h) => h.id === id);
    if (!alreadyUsed) {
      const now = new Date();
      const dateStr = `${String(now.getDate()).padStart(2, "0")}.${String(now.getMonth() + 1).padStart(2, "0")} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

      couponHistory.unshift({ id, title, date: dateStr });
      localStorage.setItem("used_love_coupons_history", JSON.stringify(couponHistory));

      renderCoupons();
      renderHistory();
    }
  });

  renderCoupons();
  renderHistory();
}

function initSmileButton() {
  const smileBtn = document.getElementById("smileBtn");
  const smileNoteResult = document.getElementById("smileNoteResult");
  const smileNoteText = document.getElementById("smileNoteText");

  if (!smileBtn || !CONFIG.smileNotes) return;

  let lastIndex = -1;

  smileBtn.addEventListener("click", () => {
    let randIdx;
    do {
      randIdx = Math.floor(Math.random() * CONFIG.smileNotes.length);
    } while (randIdx === lastIndex && CONFIG.smileNotes.length > 1);
    
    lastIndex = randIdx;
    smileNoteText.textContent = CONFIG.smileNotes[randIdx];
    smileNoteResult.classList.add("show");
  });
}

function initBucketList() {
  const container = document.getElementById("bucketListContainer");
  const dreamInput = document.getElementById("dreamInput");
  const sendDreamBtn = document.getElementById("sendDreamBtn");
  const dreamItemsList = document.getElementById("dreamItemsList");
  if (!container || !CONFIG.bucketList) return;

  const savedDone = JSON.parse(localStorage.getItem("bucket_list_done") || "[]");
  const savedDreams = JSON.parse(localStorage.getItem("site_saved_dreams") || "[]");

  function render() {
    container.innerHTML = CONFIG.bucketList
      .map((item) => {
        const isDone = savedDone.includes(item.id);
        return `
        <div class="bucket-item ${isDone ? 'checked' : ''}" data-id="${item.id}">
          <div class="bucket-checkbox">
            ${isDone ? '<i data-lucide="check" style="width:13px;height:13px;"></i>' : ''}
          </div>
          <span class="bucket-text">${item.text}</span>
        </div>
      `;
      })
      .join("");

    if (dreamItemsList) {
      dreamItemsList.innerHTML = savedDreams
        .map((d) => `<span class="dream-item-tag">📍 ${d}</span>`)
        .join("");
    }

    if (window.lucide) window.lucide.createIcons();
  }

  container.addEventListener("click", (e) => {
    const item = e.target.closest(".bucket-item");
    if (!item) return;
    const id = item.getAttribute("data-id");

    const idx = savedDone.indexOf(id);
    if (idx > -1) savedDone.splice(idx, 1);
    else savedDone.push(id);

    localStorage.setItem("bucket_list_done", JSON.stringify(savedDone));
    render();
  });

  if (sendDreamBtn && dreamInput) {
    sendDreamBtn.addEventListener("click", () => {
      const wish = dreamInput.value.trim();
      if (!wish) return;

      savedDreams.push(wish);
      localStorage.setItem("site_saved_dreams", JSON.stringify(savedDreams));
      dreamInput.value = "";
      render();
    });

    dreamInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") sendDreamBtn.click();
    });
  }

  render();
}

function initTimeline() {
  const memoriesTimeline = document.getElementById("memoriesTimeline");
  if (!memoriesTimeline || !CONFIG.memories) return;

  memoriesTimeline.innerHTML = CONFIG.memories
    .map(
      (item) => `
    <div class="timeline-item reveal-on-scroll">
      <div class="timeline-node"></div>
      <div class="timeline-card glass-card">
        <div class="timeline-date-wrap">
          <i data-lucide="calendar" style="width: 13px; height: 13px;"></i>
          <span>${item.date}</span>
        </div>
        <h3 class="timeline-title">${item.title}</h3>
        <p class="timeline-desc">${item.description}</p>
      </div>
    </div>
  `
    )
    .join("");

  if (window.lucide) window.lucide.createIcons();
}

function initSecretSection() {
  const openSecretBtn = document.getElementById("openSecretBtn");
  const secretModal = document.getElementById("secretModal");
  const secretModalClose = document.getElementById("secretModalClose");
  const backdrop = secretModal.querySelector(".secret-modal-backdrop");

  const secretLockPhase = document.getElementById("secretLockPhase");
  const secretContentPhase = document.getElementById("secretContentPhase");
  const secretPasswordInput = document.getElementById("secretPasswordInput");
  const submitSecretPass = document.getElementById("submitSecretPass");
  const secretPassError = document.getElementById("secretPassError");
  const secretCardsList = document.getElementById("secretCardsList");

  const secretPhotoBox = document.getElementById("secretPhotoBox");
  const partnerNoteInput = document.getElementById("partnerNoteInput");
  const savePartnerNoteBtn = document.getElementById("savePartnerNoteBtn");
  const diaryNotesContainer = document.getElementById("diaryNotesContainer");

  const diaryNotes = JSON.parse(localStorage.getItem("site_diary_notes") || "[]");

  function renderDiary() {
    if (!diaryNotesContainer) return;
    if (diaryNotes.length === 0) {
      diaryNotesContainer.innerHTML = `<p style="font-size:0.75rem;color:#94a3b8;font-style:italic;text-align:center;">Henüz not yazılmadı. İlk notunu bırakabilirsin :)</p>`;
    } else {
      diaryNotesContainer.innerHTML = diaryNotes
        .map(
          (n) => `
        <div class="diary-note-item">
          <p>“${n.text}”</p>
          <span class="diary-note-time">${n.time}</span>
        </div>
      `
        )
        .join("");
    }
  }

  if (secretPhotoBox) {
    secretPhotoBox.addEventListener("click", () => {
      secretPhotoBox.classList.toggle("revealed");
    });
  }

  if (savePartnerNoteBtn && partnerNoteInput) {
    savePartnerNoteBtn.addEventListener("click", () => {
      const text = partnerNoteInput.value.trim();
      if (!text) return;

      const now = new Date();
      const timeStr = `${String(now.getDate()).padStart(2, "0")}.${String(now.getMonth() + 1).padStart(2, "0")} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

      diaryNotes.unshift({ text, time: timeStr });
      localStorage.setItem("site_diary_notes", JSON.stringify(diaryNotes));
      partnerNoteInput.value = "";
      renderDiary();
    });

    partnerNoteInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") savePartnerNoteBtn.click();
    });
  }

  // 3 İtiraf Kartları
  if (secretCardsList && CONFIG.secretCards) {
    secretCardsList.innerHTML = CONFIG.secretCards
      .map(
        (card) => `
      <div class="secret-card-item">
        <div class="secret-card-title">
          <span>${card.title}</span>
          <i data-lucide="chevron-down" style="width: 14px; height: 14px;"></i>
        </div>
        <p class="secret-card-text">${card.text}</p>
      </div>
    `
      )
      .join("");

    secretCardsList.addEventListener("click", (e) => {
      const item = e.target.closest(".secret-card-item");
      if (item) item.classList.toggle("revealed");
    });
  }

  function openModal() {
    secretModal.classList.add("active");
    secretPasswordInput.value = "";
    secretPassError.classList.remove("show");
    renderDiary();
  }

  function closeModal() {
    secretModal.classList.remove("active");
  }

  openSecretBtn.addEventListener("click", openModal);
  secretModalClose.addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);

  function verify() {
    const val = secretPasswordInput.value.trim().toLowerCase();
    if (val === CONFIG.secretPassword.toLowerCase() || val === "2609" || val === "biz") {
      secretLockPhase.classList.remove("active");
      secretContentPhase.classList.add("active");
      renderDiary();
      if (window.lucide) window.lucide.createIcons();
    } else {
      secretPassError.classList.add("show");
      secretPasswordInput.classList.add("shake");
      setTimeout(() => secretPasswordInput.classList.remove("shake"), 450);
    }
  }

  submitSecretPass.addEventListener("click", verify);
  secretPasswordInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") verify();
  });
}

function initMusic() {
  const musicControl = document.getElementById("musicControl");
  const bgAudio = document.getElementById("bgAudio");
  const musicLabel = document.getElementById("musicLabel");

  if (!musicControl || !bgAudio) return;

  bgAudio.src = CONFIG.musicUrl;

  bgAudio.onerror = () => {
    if (bgAudio.src !== CONFIG.musicFallbackUrl) {
      bgAudio.src = CONFIG.musicFallbackUrl;
    }
  };

  let isPlaying = false;

  musicControl.addEventListener("click", () => {
    if (!isPlaying) {
      bgAudio
        .play()
        .then(() => {
          isPlaying = true;
          musicControl.classList.add("playing");
          if (musicLabel) musicLabel.textContent = "Çalıyor 🎵";
        })
        .catch((err) => {
          console.log("Audio play error:", err);
        });
    } else {
      bgAudio.pause();
      isPlaying = false;
      musicControl.classList.remove("playing");
      if (musicLabel) musicLabel.textContent = "Müziği Başlat";
    }
  });
}

function initCanvas() {
  const canvas = document.getElementById("ambientCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const stars = [];
  const starCount = 45;

  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.8 + 0.6,
      opacity: Math.random() * 0.7 + 0.3,
      twinkleSpeed: Math.random() * 0.03 + 0.01,
      twinkleDir: 1
    });
  }

  const clickSparkles = [];

  function createSparkles(x, y) {
    for (let i = 0; i < 8; i++) {
      clickSparkles.push({
        x: x,
        y: y,
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3 - 1,
        size: Math.random() * 3 + 1.5,
        alpha: 1,
        color: Math.random() > 0.5 ? "#e63956" : "#fca5a5"
      });
    }
  }

  window.addEventListener("click", (e) => createSparkles(e.clientX, e.clientY));
  window.addEventListener("touchstart", (e) => {
    if (e.touches[0]) createSparkles(e.touches[0].clientX, e.touches[0].clientY);
  });

  function animate() {
    ctx.clearRect(0, 0, width, height);

    stars.forEach((s) => {
      s.opacity += s.twinkleSpeed * s.twinkleDir;
      if (s.opacity > 0.9) s.twinkleDir = -1;
      if (s.opacity < 0.2) s.twinkleDir = 1;

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${s.opacity})`;
      ctx.shadowBlur = 6;
      ctx.shadowColor = "#ffffff";
      ctx.fill();
    });

    for (let i = clickSparkles.length - 1; i >= 0; i--) {
      const p = clickSparkles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= 0.025;

      if (p.alpha <= 0) {
        clickSparkles.splice(i, 1);
        continue;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.shadowBlur = 8;
      ctx.shadowColor = p.color;
      ctx.fill();
      ctx.globalAlpha = 1;
    }

    requestAnimationFrame(animate);
  }
  animate();
}

function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    },
    { threshold: 0.08 }
  );

  document.querySelectorAll(".reveal-on-scroll").forEach((el) => observer.observe(el));
}
