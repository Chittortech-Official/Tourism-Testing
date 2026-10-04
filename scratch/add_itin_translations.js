const fs = require('fs');

const enPath = 'c:/Users/lavsh/OneDrive/Documents/Chittorgarh-Tourism-main/public/translations/en.json';
const hiPath = 'c:/Users/lavsh/OneDrive/Documents/Chittorgarh-Tourism-main/public/translations/hi.json';

const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const hiData = JSON.parse(fs.readFileSync(hiPath, 'utf8'));

const newEn = {
    "nav.itinerary": "Itinerary",
    "itin.heroTitle": "Suggested Itineraries",
    "itin.heroSub": "Plan your perfect trip to Chittorgarh",
    "itin.plan1.title": "1-Day Plan",
    "itin.plan1.sub": "Chittorgarh Highlights",
    "itin.plan1.desc": "A perfect day trip covering the most iconic monuments and temples.",
    "itin.plan1.day1.title": "Chittorgarh Highlights",
    
    "itin.plan2.title": "2-Day Plan",
    "itin.plan2.sub": "Complete Chittorgarh Fort",
    "itin.plan2.desc": "A relaxed pace to explore the entire fort in detail, including the evening show.",
    "itin.plan2.day1.title": "Fort Highlights",
    "itin.plan2.day2.title": "Museums & Views",
    
    "itin.plan3.title": "3-Day Plan",
    "itin.plan3.sub": "Chittorgarh + Nearby Attractions",
    "itin.plan3.desc": "The ultimate experience: the fort plus beautiful nearby destinations.",
    "itin.plan3.day1.title": "Main Fort",
    "itin.plan3.day2.title": "Fort Exploration",
    "itin.plan3.day3.title": "Beyond Chittorgarh (Choose according to your interest)",

    "itin.items.fortGates": "Chittorgarh Fort & Seven Gates",
    "itin.items.kumbha": "Rana Kumbha Palace",
    "itin.items.meera": "Meera Bai Temple",
    "itin.items.shyam": "Kumbha Shyam Temple",
    "itin.items.vijay": "Vijay Stambh",
    "itin.items.gaumukh": "Gaumukh Reservoir",
    "itin.items.kirti": "Kirti Stambh",
    "itin.items.jain": "Jain Temples",
    "itin.items.padmini": "Padmini Palace",
    "itin.items.jaimal": "Jaimal & Patta Memorial",
    "itin.items.kalika": "Kalika Mata Temple",
    "itin.items.fatehTime": "Fateh Prakash Palace Museum (if time permits)",
    "itin.items.fateh": "Fateh Prakash Palace Museum",
    "itin.items.ratan": "Ratan Singh Palace",
    "itin.items.remaining": "Remaining temples and monuments",
    "itin.items.viewpoints": "Explore fort viewpoints",
    "itin.items.lightSound": "Light & Sound Show (subject to availability)",
    "itin.items.lightSound2": "Light & Sound Show",
    "itin.items.remainingMon": "Remaining historical monuments",
    "itin.items.menal": "Menal — Waterfall & Ancient Temples",
    "itin.items.bassi": "Bassi Wildlife Sanctuary — Nature & Wildlife",
    "itin.items.sanwaliya": "Sanwaliya Seth Temple — Religious Tourism",
    "itin.items.local": "Local Chittorgarh — Markets, food, temples and shopping",

    "itin.day": "Day",
    "itin.websiteNote": "Website note",
    "itin.noteText": "These are suggested itineraries. You can customize the places according to your interests, travel pace, season and available time. Monument access and special attractions such as the Light & Sound Show may vary."
};

const newHi = {
    "nav.itinerary": "यात्रा कार्यक्रम",
    "itin.heroTitle": "सुझाए गए यात्रा कार्यक्रम",
    "itin.heroSub": "चित्तौड़गढ़ की अपनी आदर्श यात्रा की योजना बनाएं",
    "itin.plan1.title": "1 दिन की योजना",
    "itin.plan1.sub": "चित्तौड़गढ़ के प्रमुख आकर्षण",
    "itin.plan1.desc": "सबसे प्रतिष्ठित स्मारकों और मंदिरों को कवर करने वाली एक आदर्श दिन की यात्रा।",
    "itin.plan1.day1.title": "चित्तौड़गढ़ के मुख्य आकर्षण",
    
    "itin.plan2.title": "2 दिन की योजना",
    "itin.plan2.sub": "संपूर्ण चित्तौड़गढ़ किला",
    "itin.plan2.desc": "पूरे किले को विस्तार से देखने के लिए एक आरामदेह यात्रा, जिसमें शाम का शो भी शामिल है।",
    "itin.plan2.day1.title": "किले के मुख्य आकर्षण",
    "itin.plan2.day2.title": "संग्रहालय और दृश्य",
    
    "itin.plan3.title": "3 दिन की योजना",
    "itin.plan3.sub": "चित्तौड़गढ़ + आस-पास के आकर्षण",
    "itin.plan3.desc": "सर्वश्रेष्ठ अनुभव: किला और साथ ही आस-पास के सुंदर गंतव्य।",
    "itin.plan3.day1.title": "मुख्य किला",
    "itin.plan3.day2.title": "किले का अन्वेषण",
    "itin.plan3.day3.title": "चित्तौड़गढ़ के पार (अपनी रुचि के अनुसार चुनें)",

    "itin.items.fortGates": "चित्तौड़गढ़ किला और सात द्वार",
    "itin.items.kumbha": "राणा कुंभा महल",
    "itin.items.meera": "मीरा बाई मंदिर",
    "itin.items.shyam": "कुंभ श्याम मंदिर",
    "itin.items.vijay": "विजय स्तंभ",
    "itin.items.gaumukh": "गौमुख कुंड",
    "itin.items.kirti": "कीर्ति स्तंभ",
    "itin.items.jain": "जैन मंदिर (सतबीस देवरी)",
    "itin.items.padmini": "पद्मिनी महल",
    "itin.items.jaimal": "जयमल और पत्ता स्मारक",
    "itin.items.kalika": "कालिका माता मंदिर",
    "itin.items.fatehTime": "फतेह प्रकाश महल संग्रहालय (यदि समय हो)",
    "itin.items.fateh": "फतेह प्रकाश महल संग्रहालय",
    "itin.items.ratan": "रतन सिंह महल",
    "itin.items.remaining": "शेष मंदिर और स्मारक",
    "itin.items.viewpoints": "किले के दृष्टिकोण (Viewpoints) देखें",
    "itin.items.lightSound": "लाइट एंड साउंड शो (उपलब्धता के अधीन)",
    "itin.items.lightSound2": "लाइट एंड साउंड शो",
    "itin.items.remainingMon": "शेष ऐतिहासिक स्मारक",
    "itin.items.menal": "मेनाल — जलप्रपात और प्राचीन मंदिर",
    "itin.items.bassi": "बस्सी वन्यजीव अभयारण्य — प्रकृति और वन्यजीव",
    "itin.items.sanwaliya": "सांवलिया सेठ मंदिर — धार्मिक पर्यटन",
    "itin.items.local": "स्थानीय चित्तौड़गढ़ — बाजार, भोजन, मंदिर और खरीदारी",

    "itin.day": "दिन",
    "itin.websiteNote": "वेबसाइट नोट",
    "itin.noteText": "ये सुझाए गए यात्रा कार्यक्रम हैं। आप अपनी रुचियों, यात्रा की गति, मौसम और उपलब्ध समय के अनुसार स्थानों को अनुकूलित कर सकते हैं। स्मारकों तक पहुंच और लाइट एंड साउंड शो जैसे विशेष आकर्षण भिन्न हो सकते हैं।"
};

Object.assign(enData, newEn);
Object.assign(hiData, newHi);

fs.writeFileSync(enPath, JSON.stringify(enData, null, 4));
fs.writeFileSync(hiPath, JSON.stringify(hiData, null, 4));

console.log("Translations added successfully!");
