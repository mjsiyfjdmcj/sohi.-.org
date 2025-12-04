// Quiz Questions Database
const questionBank = {
    bangladesh: [
        { question: "বাংলাদেশের রাজধানী কোনটি?", options: ["চট্টগ্রাম", "ঢাকা", "সিলেট", "খুলনা"], correct: 1, marks: 3 },
        { question: "বাংলাদেশের স্বাধীনতা দিবস কবে?", options: ["২৫ মার্চ", "২৬ মার্চ", "১৬ ডিসেম্বর", "২১ ফেব্রুয়ারি"], correct: 1, marks: 3 },
        { question: "বাংলাদেশের জাতীয় ফুল কোনটি?", options: ["গোলাপ", "শাপলা", "জুঁই", "বেলি"], correct: 1, marks: 3 },
        { question: "বাংলাদেশের মুদ্রার নাম কী?", options: ["রুপি", "টাকা", "ডলার", "পাউন্ড"], correct: 1, marks: 3 },
        { question: "বাংলাদেশের সবচেয়ে বড় নদী কোনটি?", options: ["পদ্মা", "মেঘনা", "যমুনা", "কর্ণফুলী"], correct: 0, marks: 3 },
        { question: "বাংলাদেশের জাতীয় পাখি কোনটি?", options: ["কাক", "দোয়েল", "ময়ূর", "বাজ"], correct: 1, marks: 3 },
        { question: "বাংলাদেশের মোট জেলা কতটি?", options: ["৬২", "৬৩", "৬৪", "৬৫"], correct: 2, marks: 3 },
        { question: "বাংলাদেশের জাতীয় খেলা কী?", options: ["ফুটবল", "ক্রিকেট", "কাবাডি", "হকি"], correct: 2, marks: 3 },
        { question: "বাংলাদেশের প্রথম প্রধানমন্ত্রী কে ছিলেন?", options: ["শেখ মুজিবুর রহমান", "তাজউদ্দীন আহমদ", "খন্দকার মোশতাক", "এ এইচ এম কামারুজ্জামান"], correct: 1, marks: 3 },
        { question: "বাংলাদেশের বিজয় দিবস কবে?", options: ["২৬ মার্চ", "২১ ফেব্রুয়ারি", "১৬ ডিসেম্বর", "১৪ ডিসেম্বর"], correct: 2, marks: 3 }
    ],
    science: [
        { question: "পানির রাসায়নিক সংকেত কী?", options: ["H2O", "CO2", "O2", "N2"], correct: 0, marks: 3 },
        { question: "মানুষের শরীরে কতটি হাড় আছে?", options: ["২০৬", "২০৮", "২১০", "২১২"], correct: 0, marks: 3 },
        { question: "সূর্য কোন ধরনের তারা?", options: ["লাল দানব", "সাদা বামন", "হলুদ বামন", "নীল দানব"], correct: 2, marks: 3 },
        { question: "আলোর গতি কত?", options: ["৩ লক্ষ কিমি/সেকেন্ড", "২ লক্ষ কিমি/সেকেন্ড", "৪ লক্ষ কিমি/সেকেন্ড", "৫ লক্ষ কিমি/সেকেন্ড"], correct: 0, marks: 3 },
        { question: "অক্সিজেনের পারমাণবিক সংখ্যা কত?", options: ["৬", "৭", "৮", "৯"], correct: 2, marks: 3 },
        { question: "কোন গ্রহকে লাল গ্রহ বলা হয়?", options: ["শুক্র", "মঙ্গল", "বৃহস্পতি", "শনি"], correct: 1, marks: 3 },
        { question: "DNA এর পূর্ণরূপ কী?", options: ["ডিঅক্সিরাইবোনিউক্লিক অ্যাসিড", "রাইবোনিউক্লিক অ্যাসিড", "অ্যামিনো অ্যাসিড", "ফ্যাটি অ্যাসিড"], correct: 0, marks: 3 },
        { question: "কোন ভিটামিনের অভাবে রাতকানা রোগ হয়?", options: ["ভিটামিন এ", "ভিটামিন বি", "ভিটামিন সি", "ভিটামিন ডি"], correct: 0, marks: 3 },
        { question: "পৃথিবীর বায়ুমণ্ডলে কোন গ্যাস সবচেয়ে বেশি?", options: ["অক্সিজেন", "নাইট্রোজেন", "কার্বন ডাই-অক্সাইড", "আর্গন"], correct: 1, marks: 3 },
        { question: "কোন ধাতু সবচেয়ে হালকা?", options: ["অ্যালুমিনিয়াম", "লিথিয়াম", "ম্যাগনেসিয়াম", "সোডিয়াম"], correct: 1, marks: 3 }
    ],
    history: [
        { question: "দ্বিতীয় বিশ্বযুদ্ধ কত সালে শুরু হয়?", options: ["১৯৩৮", "১৯৩৯", "১৯৪০", "১৯৪১"], correct: 1, marks: 3 },
        { question: "মহাত্মা গান্ধীর জন্ম কোথায়?", options: ["দিল্লি", "মুম্বাই", "পোরবন্দর", "আহমেদাবাদ"], correct: 2, marks: 3 },
        { question: "মুঘল সাম্রাজ্যের প্রতিষ্ঠাতা কে?", options: ["আকবর", "বাবর", "হুমায়ুন", "শাহজাহান"], correct: 1, marks: 3 },
        { question: "তাজমহল কে নির্মাণ করেন?", options: ["আকবর", "জাহাঙ্গীর", "শাহজাহান", "আওরঙ্গজেব"], correct: 2, marks: 3 },
        { question: "প্রথম বিশ্বযুদ্ধ কত সালে শেষ হয়?", options: ["১৯১৭", "১৯১৮", "১৯১৯", "১৯২০"], correct: 1, marks: 3 },
        { question: "আলেকজান্ডার দ্য গ্রেট কোন দেশের রাজা ছিলেন?", options: ["গ্রিস", "মেসিডোনিয়া", "রোম", "মিশর"], correct: 1, marks: 3 },
        { question: "চীনের মহাপ্রাচীর কত সালে নির্মাণ শুরু হয়?", options: ["খ্রিস্টপূর্ব ৭ম শতাব্দী", "খ্রিস্টপূর্ব ৫ম শতাব্দী", "খ্রিস্টপূর্ব ৩য় শতাব্দী", "খ্রিস্টীয় ১ম শতাব্দী"], correct: 0, marks: 3 },
        { question: "নেপোলিয়ন বোনাপার্ট কোন দেশের সম্রাট ছিলেন?", options: ["ইতালি", "ফ্রান্স", "স্পেন", "জার্মানি"], correct: 1, marks: 3 },
        { question: "রোমান সাম্রাজ্যের পতন কত সালে?", options: ["৪৭৬ খ্রিস্টাব্দ", "৪৮০ খ্রিস্টাব্দ", "৪৯০ খ্রিস্টাব্দ", "৫০০ খ্রিস্টাব্দ"], correct: 0, marks: 3 },
        { question: "আমেরিকার স্বাধীনতা যুদ্ধ কত সালে শুরু হয়?", options: ["১৭৭৫", "১৭৭৬", "১৭৭৭", "১৭৭৮"], correct: 0, marks: 3 }
    ],
    geography: [
        { question: "বিশ্বের সবচেয়ে লম্বা নদী কোনটি?", options: ["আমাজন", "নীল", "গঙ্গা", "মিসিসিপি"], correct: 1, marks: 3 },
        { question: "বিশ্বের সবচেয়ে উঁচু পর্বত কোনটি?", options: ["কে২", "এভারেস্ট", "কাঞ্চনজঙ্ঘা", "মাকালু"], correct: 1, marks: 3 },
        { question: "বিশ্বের সবচেয়ে বড় মহাদেশ কোনটি?", options: ["আফ্রিকা", "এশিয়া", "উত্তর আমেরিকা", "দক্ষিণ আমেরিকা"], correct: 1, marks: 3 },
        { question: "বিশ্বের সবচেয়ে গভীর সমুদ্র কোনটি?", options: ["আটলান্টিক", "প্রশান্ত", "ভারত", "আর্কটিক"], correct: 1, marks: 3 },
        { question: "সাহারা মরুভূমি কোন মহাদেশে অবস্থিত?", options: ["এশিয়া", "আফ্রিকা", "অস্ট্রেলিয়া", "দক্ষিণ আমেরিকা"], correct: 1, marks: 3 },
        { question: "বিশ্বের সবচেয়ে ছোট দেশ কোনটি?", options: ["মোনাকো", "ভ্যাটিকান সিটি", "নাউরু", "সান মারিনো"], correct: 1, marks: 3 },
        { question: "আমাজন রেইনফরেস্ট কোন দেশে অবস্থিত?", options: ["ব্রাজিল", "আর্জেন্টিনা", "পেরু", "কলম্বিয়া"], correct: 0, marks: 3 },
        { question: "বিশ্বের সবচেয়ে বড় দ্বীপ কোনটি?", options: ["গ্রিনল্যান্ড", "অস্ট্রেলিয়া", "বোর্নিও", "মাদাগাস্কার"], correct: 0, marks: 3 },
        { question: "নায়াগ্রা জলপ্রপাত কোন দুই দেশের মধ্যে অবস্থিত?", options: ["যুক্তরাষ্ট্র ও মেক্সিকো", "যুক্তরাষ্ট্র ও কানাডা", "কানাডা ও গ্রিনল্যান্ড", "মেক্সিকো ও গুয়াতেমালা"], correct: 1, marks: 3 },
        { question: "বিশ্বের সবচেয়ে জনবহুল দেশ কোনটি?", options: ["ভারত", "চীন", "যুক্তরাষ্ট্র", "ইন্দোনেশিয়া"], correct: 1, marks: 3 }
    ],
    literature: [
        { question: "রবীন্দ্রনাথ ঠাকুর কত সালে নোবেল পুরস্কার পান?", options: ["১৯১২", "১৯১৩", "১৯১৪", "১৯১৫"], correct: 1, marks: 3 },
        { question: "'গীতাঞ্জলি' কাব্যগ্রন্থের রচয়িতা কে?", options: ["কাজী নজরুল ইসলাম", "রবীন্দ্রনাথ ঠাকুর", "জীবনানন্দ দাশ", "সুকান্ত ভট্টাচার্য"], correct: 1, marks: 3 },
        { question: "বাংলা সাহিত্যের প্রথম মহাকাব্য কোনটি?", options: ["মেঘনাদবধ কাব্য", "চণ্ডীমঙ্গল", "মনসামঙ্গল", "অন্নদামঙ্গল"], correct: 0, marks: 3 },
        { question: "'বিদ্রোহী' কবিতার রচয়িতা কে?", options: ["রবীন্দ্রনাথ ঠাকুর", "কাজী নজরুল ইসলাম", "জীবনানন্দ দাশ", "ফররুখ আহমদ"], correct: 1, marks: 3 },
        { question: "শেক্সপিয়ারের বিখ্যাত নাটক কোনটি?", options: ["হ্যামলেট", "ওথেলো", "ম্যাকবেথ", "সবগুলো"], correct: 3, marks: 3 },
        { question: "'পদ্মা নদীর মাঝি' উপন্যাসের লেখক কে?", options: ["বিভূতিভূষণ বন্দ্যোপাধ্যায়", "মানিক বন্দ্যোপাধ্যায়", "তারাশঙ্কর বন্দ্যোপাধ্যায়", "শরৎচন্দ্র চট্টোপাধ্যায়"], correct: 1, marks: 3 },
        { question: "বাংলা ভাষার আদি কবি কে?", options: ["চণ্ডীদাস", "বিদ্যাপতি", "জয়দেব", "লুইপা"], correct: 3, marks: 3 },
        { question: "'আমার সোনার বাংলা' গানের রচয়িতা কে?", options: ["কাজী নজরুল ইসলাম", "রবীন্দ্রনাথ ঠাকুর", "দ্বিজেন্দ্রলাল রায়", "অতুলপ্রসাদ সেন"], correct: 1, marks: 3 },
        { question: "'লালসালু' উপন্যাসের লেখক কে?", options: ["সৈয়দ ওয়ালীউল্লাহ", "শওকত ওসমান", "আবু ইসহাক", "আলাউদ্দিন আল আজাদ"], correct: 0, marks: 3 },
        { question: "বাংলা একাডেমি কত সালে প্রতিষ্ঠিত হয়?", options: ["১৯৫৪", "১৯৫৫", "১৯৫৬", "১৯৫৭"], correct: 1, marks: 3 }
    ],
    sports: [
        { question: "ফুটবল বিশ্বকাপ কত বছর পর পর অনুষ্ঠিত হয়?", options: ["২ বছর", "৩ বছর", "৪ বছর", "৫ বছর"], correct: 2, marks: 3 },
        { question: "অলিম্পিক গেমস কত বছর পর পর অনুষ্ঠিত হয়?", options: ["২ বছর", "৩ বছর", "৪ বছর", "৫ বছর"], correct: 2, marks: 3 },
        { question: "ক্রিকেটে একটি ওভারে কতটি বল থাকে?", options: ["৪", "৫", "৬", "৮"], correct: 2, marks: 3 },
        { question: "টেনিসে গ্র্যান্ড স্ল্যাম কতটি টুর্নামেন্ট নিয়ে গঠিত?", options: ["৩", "৪", "৫", "৬"], correct: 1, marks: 3 },
        { question: "বাস্কেটবলে একটি দলে কতজন খেলোয়াড় থাকে?", options: ["৪", "৫", "৬", "৭"], correct: 1, marks: 3 },
        { question: "ফুটবলে একটি ম্যাচ কত মিনিট স্থায়ী হয়?", options: ["৮০ মিনিট", "৯০ মিনিট", "১০০ মিনিট", "১২০ মিনিট"], correct: 1, marks: 3 },
        { question: "বক্সিংয়ে কতটি ওজন বিভাগ আছে?", options: ["১৫", "১৬", "১৭", "১৮"], correct: 2, marks: 3 },
        { question: "সাঁতারে ফ্রিস্টাইলের অন্য নাম কী?", options: ["ব্রেস্টস্ট্রোক", "ব্যাকস্ট্রোক", "ফ্রন্ট ক্রল", "বাটারফ্লাই"], correct: 2, marks: 3 },
        { question: "গলফে একটি হোলে সর্বনিম্ন স্ট্রোক কতটি?", options: ["১", "২", "৩", "৪"], correct: 0, marks: 3 },
        { question: "ভলিবলে নেটের উচ্চতা কত?", options: ["২.২৪ মিটার", "২.৪৩ মিটার", "২.৫০ মিটার", "২.৬০ মিটার"], correct: 1, marks: 3 }
    ],
    technology: [
        { question: "ইন্টারনেটের জনক কাকে বলা হয়?", options: ["বিল গেটস", "টিম বার্নার্স লি", "স্টিভ জবস", "মার্ক জাকারবার্গ"], correct: 1, marks: 3 },
        { question: "প্রথম কম্পিউটার ভাইরাস কোনটি?", options: ["ক্রিপার", "মরিস ওয়ার্ম", "আই লাভ ইউ", "মেলিসা"], correct: 0, marks: 3 },
        { question: "HTML এর পূর্ণরূপ কী?", options: ["হাইপার টেক্সট মার্কআপ ল্যাঙ্গুয়েজ", "হাই টেক মার্কআপ ল্যাঙ্গুয়েজ", "হাইপার টেক্সট মেথড ল্যাঙ্গুয়েজ", "হাইপার টুল মার্কআপ ল্যাঙ্গুয়েজ"], correct: 0, marks: 3 },
        { question: "প্রথম প্রোগ্রামিং ভাষা কোনটি?", options: ["ফোরট্রান", "কোবল", "বেসিক", "অ্যাসেম্বলি"], correct: 0, marks: 3 },
        { question: "কোন কোম্পানি আইফোন তৈরি করে?", options: ["স্যামসাং", "গুগল", "অ্যাপল", "মাইক্রোসফট"], correct: 2, marks: 3 },
        { question: "ব্লুটুথ প্রযুক্তি কোন দেশে আবিষ্কৃত হয়?", options: ["যুক্তরাষ্ট্র", "জাপান", "ডেনমার্ক", "সুইডেন"], correct: 2, marks: 3 },
        { question: "প্রথম সোশ্যাল নেটওয়ার্কিং সাইট কোনটি?", options: ["ফেসবুক", "মাইস্পেস", "সিক্সডিগ্রিজ", "ফ্রেন্ডস্টার"], correct: 2, marks: 3 },
        { question: "কোন বছর ইন্টারনেট সর্বসাধারণের জন্য উন্মুক্ত হয়?", options: ["১৯৯০", "১৯৯১", "১৯৯২", "১৯৯৩"], correct: 1, marks: 3 },
        { question: "প্রথম ওয়েব ব্রাউজার কোনটি?", options: ["নেটস্কেপ", "ইন্টারনেট এক্সপ্লোরার", "ওয়ার্ল্ডওয়াইডওয়েব", "মোজাইক"], correct: 2, marks: 3 },
        { question: "কোন কোম্পানি অ্যান্ড্রয়েড অপারেটিং সিস্টেম তৈরি করে?", options: ["অ্যাপল", "মাইক্রোসফট", "গুগল", "স্যামসাং"], correct: 2, marks: 3 }
    ],
    general: [
        { question: "জাতিসংঘের সদর দপ্তর কোথায় অবস্থিত?", options: ["জেনেভা", "নিউইয়র্ক", "প্যারিস", "লন্ডন"], correct: 1, marks: 3 },
        { question: "বিশ্বের সবচেয়ে বড় মহাসাগর কোনটি?", options: ["আটলান্টিক", "প্রশান্ত", "ভারত", "আর্কটিক"], correct: 1, marks: 3 },
        { question: "কোন দেশে সূর্য মধ্যরাতে উদয় হয়?", options: ["নরওয়ে", "সুইডেন", "ফিনল্যান্ড", "সবগুলো"], correct: 3, marks: 3 },
        { question: "বিশ্বের সবচেয়ে বেশি ভাষা কোন দেশে বলা হয়?", options: ["ভারত", "চীন", "পাপুয়া নিউগিনি", "ইন্দোনেশিয়া"], correct: 2, marks: 3 },
        { question: "কোন প্রাণী সবচেয়ে বেশি দিন বাঁচে?", options: ["হাতি", "কচ্ছপ", "তিমি", "হাঙর"], correct: 1, marks: 3 },
        { question: "বিশ্বের সবচেয়ে ছোট পাখি কোনটি?", options: ["হামিংবার্ড", "চড়ুই", "ফিঞ্চ", "ক্যানারি"], correct: 0, marks: 3 },
        { question: "কোন গ্রহে একদিন সবচেয়ে দীর্ঘ?", options: ["শুক্র", "মঙ্গল", "বৃহস্পতি", "শনি"], correct: 0, marks: 3 },
        { question: "বিশ্বের সবচেয়ে গভীর সমুদ্রখাত কোনটি?", options: ["মারিয়ানা ট্রেঞ্চ", "পুয়ের্তো রিকো ট্রেঞ্চ", "জাপান ট্রেঞ্চ", "পেরু-চিলি ট্রেঞ্চ"], correct: 0, marks: 3 },
        { question: "কোন ধাতু সবচেয়ে ভারী?", options: ["সোনা", "প্ল্যাটিনাম", "অসমিয়াম", "ইরিডিয়াম"], correct: 2, marks: 3 },
        { question: "বিশ্বের সবচেয়ে বড় মরুভূমি কোনটি?", options: ["সাহারা", "গোবি", "কালাহারি", "অ্যান্টার্কটিকা"], correct: 3, marks: 3 }
    ]
};

let currentTopic = '';
let studentDetails = {
    name: '',
    school: '',
    age: '',
    class: '',
    principal: '',
    photo: null
};
let questions = [];
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let userAnswers = [];

function selectTopic(topic) {
    currentTopic = topic;
    questions = [...questionBank[topic]].sort(() => Math.random() - 0.5).slice(0, 10);
    
    document.getElementById('topic-container').style.display = 'none';
    document.getElementById('name-container').style.display = 'block';
}

function startQuizWithDetails() {
    const name = document.getElementById('student-name-input').value.trim();
    const school = document.getElementById('school-name-input').value.trim();
    const age = document.getElementById('student-age-input').value.trim();
    const studentClass = document.getElementById('student-class-input').value.trim();
    const principal = document.getElementById('principal-name-input').value.trim();
    
    if (!name || !school || !age || !studentClass || !principal) {
        alert('অনুগ্রহ করে সব তথ্য পূরণ করুন!');
        return;
    }
    
    studentDetails = { name, school, age, class: studentClass, principal, photo: studentDetails.photo };
    
    document.getElementById('name-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    
    const topicNames = {
        bangladesh: 'বাংলাদেশ',
        science: 'বিজ্ঞান',
        history: 'ইতিহাস',
        geography: 'ভূগোল',
        literature: 'সাহিত্য',
        sports: 'খেলাধুলা',
        technology: 'প্রযুক্তি',
        general: 'সাধারণ জ্ঞান'
    };
    
    document.getElementById('quiz-topic-title').textContent = topicNames[currentTopic] + ' কুইজ';
    document.getElementById('student-name-display').textContent = '👤 ' + studentDetails.name;
    startQuiz();
}

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    userAnswers = [];
    loadQuestion();
}

function loadQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('current-question').textContent = currentQuestion + 1;
    document.getElementById('total-questions').textContent = questions.length;
    document.getElementById('question-text').textContent = question.question;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectOption(index);
        optionsContainer.appendChild(optionDiv);
    });
    
    document.getElementById('next-btn').disabled = true;
    selectedAnswer = null;
}

function selectOption(index) {
    selectedAnswer = index;
    const options = document.querySelectorAll('.option');
    options.forEach((option, i) => {
        option.classList.remove('selected');
        if (i === index) {
            option.classList.add('selected');
        }
    });
    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    if (selectedAnswer === null) return;
    
    const question = questions[currentQuestion];
    userAnswers.push(selectedAnswer);
    
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === selectedAnswer && selectedAnswer !== question.correct) {
            option.classList.add('incorrect');
        }
    });
    
    if (selectedAnswer === question.correct) {
        score += question.marks;
    }
    
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }, 1500);
}

function showResult() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    
    const resultTitle = document.getElementById('result-title');
    const scoreDisplay = document.getElementById('score-display');
    const certificate = document.getElementById('certificate');
    
    scoreDisplay.textContent = `আপনার স্কোর: ${score}/৩০`;
    
    const topicNames = {
        bangladesh: 'বাংলাদেশ',
        science: 'বিজ্ঞান',
        history: 'ইতিহাস',
        geography: 'ভূগোল',
        literature: 'সাহিত্য',
        sports: 'খেলাধুলা',
        technology: 'প্রযুক্তি',
        general: 'সাধারণ জ্ঞান'
    };
    
    const passed = score >= 20;
    
    // Save result to localStorage for admin panel
    const quizResult = {
        name: studentDetails.name,
        school: studentDetails.school,
        age: studentDetails.age,
        class: studentDetails.class,
        principal: studentDetails.principal,
        topic: currentTopic,
        score: score,
        totalMarks: 30,
        passed: passed,
        answers: userAnswers,
        timestamp: new Date().toISOString()
    };
    
    const existingResults = JSON.parse(localStorage.getItem('quizResults') || '[]');
    existingResults.push(quizResult);
    localStorage.setItem('quizResults', JSON.stringify(existingResults));
    
    // Trigger storage event for cross-tab communication
    window.dispatchEvent(new StorageEvent('storage', {
        key: 'quizResults',
        newValue: JSON.stringify(existingResults)
    }));
    
    if (passed) {
        resultTitle.textContent = '🎉 অভিনন্দন! আপনি পাস করেছেন! 🎉';
        resultTitle.className = 'pass';
        document.getElementById('id-card').style.display = 'block';
        
        // Populate ID card
        document.getElementById('id-student-name').textContent = studentDetails.name;
        document.getElementById('id-school-name').textContent = studentDetails.school;
        document.getElementById('id-age').textContent = studentDetails.age;
        document.getElementById('id-class').textContent = studentDetails.class;
        document.getElementById('id-principal').textContent = studentDetails.principal;
        document.getElementById('id-topic').textContent = topicNames[currentTopic];
        document.getElementById('id-score').textContent = score;
        document.getElementById('id-date').textContent = new Date().toLocaleDateString('bn-BD');
        
        // Display photo in ID card
        const photoElement = document.getElementById('id-card-photo');
        if (studentDetails.photo) {
            photoElement.innerHTML = `<img src="${studentDetails.photo}" alt="Student Photo">`;
        } else {
            photoElement.innerHTML = '📷';
        }
    } else {
        resultTitle.textContent = '😔 দুঃখিত! আপনি ফেল করেছেন';
        resultTitle.className = 'fail';
        document.getElementById('id-card').style.display = 'none';
    }
}

function restartQuiz() {
    studentDetails = { name: '', school: '', age: '', class: '', principal: '', photo: null };
    document.getElementById('student-name-input').value = '';
    document.getElementById('school-name-input').value = '';
    document.getElementById('student-age-input').value = '';
    document.getElementById('student-class-input').value = '';
    document.getElementById('principal-name-input').value = '';
    document.getElementById('photo-input').value = '';
    document.getElementById('photo-preview').innerHTML = '';
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('topic-container').style.display = 'block';
}

function downloadIdCard() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size for ID card
    canvas.width = 600;
    canvas.height = 380;
    
    // Orange gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#ff6b35');
    gradient.addColorStop(1, '#f7931e');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Dotted pattern overlay
    ctx.fillStyle = 'rgba(255,255,255,0.1)';
    for (let x = 0; x < canvas.width; x += 15) {
        for (let y = 0; y < canvas.height; y += 15) {
            ctx.beginPath();
            ctx.arc(x, y, 1, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
    
    // Header section
    ctx.fillStyle = 'rgba(255,255,255,0.1)';
    ctx.fillRect(0, 0, canvas.width, 60);
    
    ctx.fillStyle = 'white';
    ctx.font = 'bold 22px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('🎓 স্মার্ট কুইজ সিস্টেম 🎓', canvas.width / 2, 38);
    
    // Photo section
    if (studentDetails.photo) {
        const img = new Image();
        img.onload = function() {
            // White photo frame
            ctx.fillStyle = 'white';
            ctx.fillRect(40, 80, 126, 146);
            ctx.drawImage(img, 43, 83, 120, 140);
            
            // Continue with text after photo loads
            drawTextContent();
            downloadCanvas();
        };
        img.src = studentDetails.photo;
        return;
    } else {
        // Photo placeholder
        ctx.fillStyle = 'white';
        ctx.fillRect(40, 80, 126, 146);
        ctx.fillStyle = '#ccc';
        ctx.font = '40px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('📷', 103, 165);
    }
    
    drawTextContent();
    downloadCanvas();
    
    function drawTextContent() {
        const topicNames = {
            bangladesh: 'বাংলাদেশ', science: 'বিজ্ঞান', history: 'ইতিহাস',
            geography: 'ভূগোল', literature: 'সাহিত্য', sports: 'খেলাধুলা',
            technology: 'প্রযুক্তি', general: 'সাধারণ জ্ঞান'
        };
        
        // Student name
        ctx.fillStyle = 'white';
        ctx.font = 'bold 28px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(studentDetails.name.toUpperCase(), 190, 110);
        
        // Student details
        ctx.font = '16px Arial';
        ctx.fillText('স্কুল: ' + studentDetails.school, 190, 140);
        ctx.fillText('শ্রেণী: ' + studentDetails.class + ' | বয়স: ' + studentDetails.age, 190, 165);
        ctx.fillText('প্রধান শিক্ষক: ' + studentDetails.principal, 190, 190);
        ctx.fillText('কুইজ বিষয়: ' + topicNames[currentTopic], 190, 215);
        ctx.fillText('স্কোর: ' + score + '/৩০', 190, 240);
        
        // Footer
        ctx.fillStyle = 'rgba(0,0,0,0.2)';
        ctx.fillRect(0, 320, canvas.width, 60);
        
        ctx.fillStyle = 'white';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('তারিখ: ' + new Date().toLocaleDateString('bn-BD'), canvas.width / 2, 355);
    }
    
    function downloadCanvas() {
        const link = document.createElement('a');
        link.download = studentDetails.name + '_ID_Card.png';
        link.href = canvas.toDataURL();
        link.click();
    }
}

// Mobile Navigation Functions
function toggleNav() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}

function goHome() {
    location.reload();
}

window.onload = function() {
    // Photo upload handler
    document.getElementById('photo-input').addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                studentDetails.photo = e.target.result;
                document.getElementById('photo-preview').innerHTML = 
                    `<img src="${e.target.result}" alt="Preview" style="width: 100px; height: 120px; object-fit: cover; border-radius: 10px; border: 2px solid #ddd;">`;
            };
            reader.readAsDataURL(file);
        }
    });
    
    // Close nav menu when clicking outside
    document.addEventListener('click', function(e) {
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.querySelector('.nav-toggle');
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
};