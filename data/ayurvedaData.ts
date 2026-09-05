export interface Treatment {
  id: string;
  name: { en: string; ml: string };
  duration: string;
  description: { en: string; ml: string };
  benefits: { en: string[]; ml: string[] };
  image: string;
}

export interface Package {
  id: string;
  name: { en: string; ml: string };
  duration: string;
  priceEstimate: string;
  description: { en: string; ml: string };
  includes: { en: string[]; ml: string[] };
  image: string;
}

export interface Doctor {
  id: string;
  name: { en: string; ml: string };
  role: { en: string; ml: string };
  specialty: { en: string; ml: string };
  experience: string;
  education?: string;
  bio: { en: string; ml: string };
  experienceList?: string[];
  image: string;
}

export const treatments: Treatment[] = [
  {
    id: "panchakarma",
    name: { en: "Panchakarma Detoxification", ml: "പഞ്ചകർമ്മ ശുദ്ധീകരണം" },
    duration: "90 - 120 Mins",
    description: {
      en: "Our signature 5-stage purification therapy — the cornerstone of Haya Ayurvedics. Deeply detoxifies the body, restores doshic balance, and revitalises metabolic efficiency under Dr. Nimmy RS's expert supervision.",
      ml: "ശരീരത്തിലെ വിഷാംശങ്ങൾ നീക്കം ചെയ്യാനും ത്രിദോഷങ്ങളെ സന്തുലിതാവസ്ഥയിലാക്കാനും ഉള്ള 5 ഘട്ടങ്ങളായുള്ള ആഴത്തിലുള്ള ശുദ്ധീകരണ ചികിത്സ."
    },
    benefits: {
      en: ["Removes deeply rooted toxins", "Improves digestion and metabolism", "Strengthens immunity", "Restores youthfulness and energy"],
      ml: ["ശരീരത്തിലെ വിഷാംശങ്ങളെ പുറന്തള്ളുന്നു", "ദഹനശക്തിയും ഉപാപചയപ്രവർത്തനങ്ങളും മെച്ചപ്പെടുത്തുന്നു", "രോഗപ്രതിരോധശേഷി വർദ്ധിപ്പിക്കുന്നു", "ശരീരത്തിന് ഉന്മേഷവും യൗവനവും നൽകുന്നു"]
    },
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "postnatal-care",
    name: { en: "Postnatal Care", ml: "പ്രസവാനന്തര പരിചരണം" },
    duration: "45 - 60 Mins",
    description: {
      en: "Specialised Ayurvedic postnatal care program designed to restore the mother's strength, balance hormones, and promote recovery through traditional herbal therapies, warm oil massages, and nourishing treatments.",
      ml: "പ്രസവാനന്തരം അമ്മയ്ക്ക് ശക്തി വീണ്ടെടുക്കാനും ഹോർമോൺ സന്തുലിതത്വം പ്രദാനം ചെയ്യാനുമുള്ള പ്രത്യേക ആയുർവേദ ചികിത്സ."
    },
    benefits: {
      en: ["Restores postpartum strength and vitality", "Balances hormones naturally", "Supports breast milk production", "Relieves body aches and fatigue"],
      ml: ["പ്രസവാനന്തര ദൗർബല്യം മറികടക്കുന്നു", "ഹോർമോൺ സ്വാഭാവികമായി ക്രമീകരിക്കുന്നു", "മുലപ്പാൽ ഉൽപ്പാദനം പ്രോത്സാഹിപ്പിക്കുന്നു", "ശരീരവേദനയും ക്ഷീണവും ദൂരീകരിക്കുന്നു"]
    },
    image: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "varicose-vein",
    name: { en: "Varicose Vein Treatment", ml: "വ്യതിചലിത സിര ചികിത്സ" },
    duration: "60 Mins",
    description: {
      en: "Ayurvedic management of varicose veins using Jalouka (leech therapy), herbal lepas, and specialised Raktamokshana procedures that improve venous circulation and reduce painful swelling without surgery.",
      ml: "ജലൗക, ഔഷധ ലേപനം, രക്തമോക്ഷണ ചികിത്സ എന്നിവ ഉപയോഗിച്ച് ശസ്ത്രക്രിയ ഇല്ലാതെ ഞരമ്പ് ഉരുക്ക് ചികിത്സ."
    },
    benefits: {
      en: ["Reduces varicose vein pain and swelling", "Improves blood circulation in limbs", "Non-surgical and natural approach", "Prevents further progression"],
      ml: ["ഞരമ്പ് ഉരുക്കിൽ ഉണ്ടാകുന്ന വേദനയും നീർക്കെട്ടും കുറയ്ക്കുന്നു", "കൈകാലുകളിലെ രക്തചംക്രമണം മെച്ചപ്പെടുത്തുന്നു", "ശസ്ത്രക്രിയ ഇല്ലാതെ പ്രകൃതി ചികിത്സ", "രോഗം കൂടുതൽ വഷളാകാതെ തടയുന്നു"]
    },
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "psoriasis",
    name: { en: "Psoriasis Treatment", ml: "സോറിയാസിസ് ചികിത്സ" },
    duration: "60 - 90 Mins",
    description: {
      en: "A comprehensive Ayurvedic approach to psoriasis combining internal herbal medicines, Panchakarma detox, medicated baths (Avagaha Sweda), and tailor-made dietary guidance to achieve lasting skin health.",
      ml: "ആന്തരിക ഔഷധങ്ങൾ, പഞ്ചകർമ്മ ശുദ്ധീകരണം, ഔഷധ കുളി, ആഹാരക്രമ നിർദ്ദേശങ്ങൾ ഉൾപ്പെടെ ത്വക്ക് ആരോഗ്യം ദീർഘകാലം നിലനിർത്തുന്ന ചികിത്സ."
    },
    benefits: {
      en: ["Reduces scaling and skin inflammation", "Detoxifies blood and tissues", "Prevents recurrence with herbal protocol", "Safe long-term skin management"],
      ml: ["ചർമ്മ ചൊറിച്ചിലും നീർക്കെട്ടും കുറയ്ക്കുന്നു", "രക്തം ശുദ്ധീകരിക്കുന്നു", "രോഗം ആവർത്തിക്കാതിരിക്കാൻ ഔഷധ ക്രമം", "ദീർഘകാലം സുരക്ഷിതമായ ത്വക്ക് ചികിത്സ"]
    },
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "dandruff",
    name: { en: "Dandruff Treatment", ml: "ഡാൻഡ്രഫ് ചികിത്സ" },
    duration: "45 Mins",
    description: {
      en: "Targeted scalp therapy combining medicated herbal oils, Shiro Abhyanga, and internal detox to eliminate dandruff at its root, nourish the scalp, and promote healthy, lustrous hair growth.",
      ml: "ഔഷധ തൈലം, ശിരോ അഭ്യംഗം, ആന്തരിക ശുദ്ധീകരണം ഉപയോഗിച്ച് തലമുടിയിൽ നിന്ന് ഡാൻഡ്രഫ് ശാശ്വതമായി നീക്കം ചെയ്യുന്ന ചികിത്സ."
    },
    benefits: {
      en: ["Eliminates dandruff and itchy scalp", "Nourishes hair roots and follicles", "Reduces hair fall naturally", "Promotes thick, healthy hair growth"],
      ml: ["ഡാൻഡ്രഫും ചൊറിച്ചിലും ഇല്ലാതാക്കുന്നു", "തലമുടിയുടെ വേർ പോഷിപ്പിക്കുന്നു", "മുടി കൊഴിച്ചിൽ സ്വാഭാവികമായി കുറയ്ക്കുന്നു", "കട്ടിയുള്ള ആരോഗ്യകരമായ മുടി വളർച്ചക്ക് സഹായിക്കുന്നു"]
    },
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "stroke-management",
    name: { en: "Post-Stroke Care Management", ml: "പക്ഷാഘാതാനന്തര ചികിത്സ" },
    duration: "90 Mins",
    description: {
      en: "Comprehensive Ayurvedic rehabilitation for stroke survivors, integrating Abhyanga, Nasyam, Panchakarma therapies and customised yoga sessions to restore mobility, speech, and neurological function.",
      ml: "അഭ്യംഗം, നസ്യം, പഞ്ചകർമ്മ ചികിത്സ, യോഗ എന്നിവ ഉൾപ്പെടുന്ന പക്ഷാഘാതാനന്തര പ്രാഗ്‌ഭാവ പുനരധിവാസ ചികിത്സ."
    },
    benefits: {
      en: ["Restores motor function and mobility", "Improves speech and cognitive ability", "Strengthens weakened muscles", "Reduces spasticity and nerve damage"],
      ml: ["ചലനശേഷി വീണ്ടെടുക്കുന്നു", "സംസാരശേഷിയും ജ്ഞാനശക്തിയും മെച്ചപ്പെടുത്തുന്നു", "ദുർബലമായ പേശികൾ ശക്തിപ്പെടുത്തുന്നു", "നാഡീ ക്ഷതം കുറയ്ക്കുന്നു"]
    },
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80"
  }
];

export const packages: Package[] = [];

export const doctors: Doctor[] = [
  {
    id: "doc-nimmy",
    name: { en: "Dr. Nimmy. R. S", ml: "ഡോ. നിമ്മി ആർ.എസ്" },
    role: { en: "Chief Physician & Managing Director", ml: "ചീഫ് ഫിസിഷ്യൻ & മാനേജിങ് ഡയറക്ടർ" },
    specialty: { en: "Panchakarma & Ayurvedic Medicine", ml: "പഞ്ചകർമ്മം & ആയുർവേദ ചികിത്സ" },
    experience: "12+ Years",
    education: "BAMS – Amrita Ayurveda Medical College, Vallikkavu, Kollam",
    bio: {
      en: "Dr. Nimmy R. S is an accomplished Ayurvedic practitioner with over twelve years of experience, having graduated from Amrita Ayurveda Medical College, Vallikkavu, Kollam District. She has served in leading Ayurvedic centres across Kerala and Coimbatore before founding Haya Ayurvedics, where she now serves as Chief Physician and Managing Director.",
      ml: "ഡോ. നിമ്മി ആർ.എസ്, കൊല്ലം ജില്ലയിലെ വള്ളിക്കാവിലുള്ള അമൃത ആയുർവേദ മെഡിക്കൽ കോളേജിൽ നിന്ന് ബിരുദം നേടിയ, പന്ത്രണ്ടു വർഷത്തിലേറെ അനുഭവമുള്ള ആയുർവേദ വൈദ്യ. ഹയ ആയുർവേദിക്‌സ് ചീഫ് ഫിസിഷ്യനും മാനേജിങ് ഡയറക്ടറുമാണ്."
    },
    experienceList: [
      "2 years at Dathri Ayurveda & Panchakarma Center, Coimbatore",
      "Promoted to Dathri Ayurveda & Panchakarma Center, Ernakulam",
      "2016–2018: Kottakkal Arya Vaidyashala Clinic, Edappally, Kollam District",
      "2018–2021: Valiyath Institute of Medical Sciences – Ayurvedic Physician",
      "2021–2023: Al Arjoon Ayurveda & Hijama Center – Administrator & Medical Officer",
      "Telemedicine consultations ensuring accessible patient care",
      "Present: Chief Physician & Managing Director, Haya Ayurvedics"
    ],
    image: "/doctors/nimmy.jpg"
  }
];
