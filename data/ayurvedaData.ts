export interface Treatment {
  id: string;
  name: {
    en: string;
    ml: string;
  };
  duration: string;
  description: {
    en: string;
    ml: string;
  };
  benefits: {
    en: string[];
    ml: string[];
  };
  image: string;
}

export interface Package {
  id: string;
  name: {
    en: string;
    ml: string;
  };
  duration: string;
  priceEstimate: string;
  description: {
    en: string;
    ml: string;
  };
  includes: {
    en: string[];
    ml: string[];
  };
  image: string;
}

export interface Doctor {
  id: string;
  name: {
    en: string;
    ml: string;
  };
  role: {
    en: string;
    ml: string;
  };
  specialty: {
    en: string;
    ml: string;
  };
  experience: string;
  bio: {
    en: string;
    ml: string;
  };
  image: string;
}

export const treatments: Treatment[] = [
  {
    id: "panchakarma",
    name: {
      en: "Panchakarma Detoxification",
      ml: "പഞ്ചകർമ്മ ശുദ്ധീകരണം"
    },
    duration: "90 - 120 Mins",
    description: {
      en: "The ultimate 5-stage purification therapy designed to deeply detoxify the body, restore doshic balance, and improve metabolic efficiency.",
      ml: "ശരീരത്തിലെ വിഷാംശങ്ങൾ നീക്കം ചെയ്യാനും ത്രിദോഷങ്ങളെ സന്തുലിതാവസ്ഥയിലാക്കാനും ഉള്ള 5 ഘട്ടങ്ങളായുള്ള ആഴത്തിലുള്ള ശുദ്ധീകരണ ചികിത്സ."
    },
    benefits: {
      en: ["Removes deeply rooted toxins", "Improves digestion and metabolism", "Strengthens immunity", "Restores youthfulness and energy"],
      ml: ["ശരീരത്തിലെ വിഷാംശങ്ങളെ പുറന്തള്ളുന്നു", "ദഹനശുകൂടിയും ഉപാപചയപ്രവർത്തനങ്ങളും മെച്ചപ്പെടുത്തുന്നു", "രോഗപ്രതിരോധശേഷി വർദ്ധിപ്പിക്കുന്നു", "ശരീരത്തിന് ഉന്മേഷവും യൗവനവും നൽകുന്നു"]
    },
    image: "/treatments/panchakarma.jpg"
  },
  {
    id: "shirodhara",
    name: {
      en: "Shirodhara (Mind & Nerve Therapy)",
      ml: "ശിരോധാര"
    },
    duration: "60 Mins",
    description: {
      en: "A relaxing treatment where a continuous, gentle stream of warm medicated herbal oil is poured rhythmically onto the third eye (forehead).",
      ml: "ഔഷധഗുണമുള്ള ചെറുചൂടുള്ള എണ്ണ നെറ്റിയിലൂടെ ധാരയായി ഒഴിക്കുന്ന ഒരു സവിശേഷ ചികിത്സാരീതി."
    },
    benefits: {
      en: ["Relieves mental stress, anxiety, and depression", "Combats chronic insomnia", "Improves memory and concentration", "Relieves headaches and migraines"],
      ml: ["മാനസിക സമ്മർദ്ദവും ആശങ്കകളും ഇല്ലാതാക്കുന്നു", "ഉറക്കമില്ലായ്മയ്ക്ക് മികച്ച പരിഹാരം", "ഓർമ്മശക്തിയും ഏകാഗ്രതയും വർദ്ധിപ്പിക്കുന്നു", "വിട്ടുമാറാത്ത തലവേദനയും മൈഗ്രേനും കുറയ്ക്കുന്നു"]
    },
    image: "/treatments/shirodhara.jpg"
  },
  {
    id: "abhyanga",
    name: {
      en: "Abhyanga Body Massage",
      ml: "അഭ്യംഗം"
    },
    duration: "75 Mins",
    description: {
      en: "A synchronized full-body therapeutic massage performed by expert therapists using custom-formulated warm Ayurvedic oils.",
      ml: "ഔഷധ എണ്ണകൾ ഉപയോഗിച്ച് വിദഗ്ദ്ധരായ തെറാപ്പിസ്റ്റുകൾ ചെയ്യുന്ന പ്രത്യേക തരം ദേഹത്ത് തിരുമ്മൽ ചികിത്സ."
    },
    benefits: {
      en: ["Enhances blood circulation", "Lubricates joints and relieves stiffness", "Rejuvenates muscles and tones tissues", "Promotes glowing skin and deep sleep"],
      ml: ["രക്തയോട്ടം വർദ്ധിപ്പിക്കുന്നു", "സന്ധിവേദനയും ദൃഢതയും കുറയ്ക്കുന്നു", "പേശികൾക്ക് ബലം നൽകുന്നു", "ചർമ്മത്തിന്റെ തിളക്കം കൂട്ടാനും നല്ല ഉറക്കത്തിനും സഹായിക്കുന്നു"]
    },
    image: "/treatments/abhyanga.jpg"
  },
  {
    id: "elakizhi",
    name: {
      en: "Elakizhi (Herbal Leaf Bag)",
      ml: "ഇലക്കിഴി"
    },
    duration: "60 Mins",
    description: {
      en: "Highly effective pain-relief therapy using warm bags filled with fresh medicinal leaves, spices, and herbal oils massaged over the body.",
      ml: "പച്ചിലമരുന്നുകളും ഔഷധ എണ്ണകളും കിഴിയാക്കി ചൂടോടെ ദേഹത്ത് തിരുമ്മി ചെയ്യുന്ന ഒരു സവിശേഷ ചികിത്സ."
    },
    benefits: {
      en: ["Relieves joint pain, arthritis, and backache", "Reduces muscle spasms and stiffness", "Reduces body inflammation", "Excellent for neuro-muscular disorders"],
      ml: ["സന്ധിവേദന, വാതം, നടുവേദന എന്നിവയ്ക്ക് മികച്ച പരിഹാരം", "പേശിവലിവും വേദനയും ഇല്ലാതാക്കുന്നു", "ശരീരത്തിലെ നീർക്കെട്ട് കുറയ്ക്കുന്നു", "നാഡീ-പേശി തകരാറുകൾക്ക് ഫലപ്രദം"]
    },
    image: "/treatments/elakizhi.jpg"
  }
];

export const packages: Package[] = [
  {
    id: "pkg-rejuvenation",
    name: {
      en: "7-Day Rejuvenation & Longevity (Rasayana)",
      ml: "7-ദിവസത്തെ പുനരുജ്ജീവന ചികിത്സ"
    },
    duration: "7 Days / 6 Nights",
    priceEstimate: "₹24,999 onwards",
    description: {
      en: "Perfect for urban stress relief, boosting immunity, and slowing down the aging process through herbal therapies, organic diet, and yoga.",
      ml: "മാനസിക സമ്മർദ്ദം കുറയ്ക്കുന്നതിനും രോഗപ്രതിരോധശേഷി വർദ്ധിപ്പിക്കുന്നതിനും യൗവനം നിലനിർത്തുന്നതിനും സഹായിക്കുന്ന 7 ദിവസത്തെ സുഖചികിത്സ."
    },
    includes: {
      en: ["Daily Abhyanga & Shirodhara", "Doctor consultations", "All organic vegetarian meals", "Guided yoga & meditation"],
      ml: ["ദിവസേനയുള്ള അഭ്യംഗവും ശിരോധാരയും", "ഡോക്ടർമാരുടെ പരിശോധനകൾ", "ജൈവ സസ്യാഹാരം", "യോഗയും ധ്യാനവും"]
    },
    image: "/packages/rejuvenation.jpg"
  },
  {
    id: "pkg-spine-joint",
    name: {
      en: "14-Day Spine & Joint Care Program",
      ml: "14-ദിവസത്തെ നട്ടെല്ല്-സന്ധി സംരക്ഷണ ചികിത്സ"
    },
    duration: "14 Days / 13 Nights",
    priceEstimate: "₹49,999 onwards",
    description: {
      en: "Designed for relief from chronic backache, slip disc, cervical spondylosis, arthritis, and sports injuries using intensive Kizhi, Vasthi, and Kati Vasthi.",
      ml: "നടുവേദന, സന്ധിവേദന, വാതം, കഴുത്തുവേദന എന്നിവയിൽ നിന്നും ശാശ്വത പരിഹാരം നൽകുന്ന സമഗ്ര ചികിത്സാ പദ്ധതി."
    },
    includes: {
      en: ["Elakizhi & Kati Vasthi therapies", "Specialized spine care massage", "Custom herbal medicines", "Post-treatment lifestyle guidelines"],
      ml: ["ഇലക്കിഴി, കടിവസ്തി ചികിത്സകൾ", "പ്രത്യേക നട്ടെല്ല് സംരക്ഷണ മസ്സാജ്", "ഔഷധങ്ങൾ", "ഭക്ഷണ-വ്യായാമ നിർദ്ദേശങ്ങൾ"]
    },
    image: "/packages/spine.jpg"
  },
  {
    id: "pkg-weight-manage",
    name: {
      en: "10-Day Weight Loss & Slimming",
      ml: "10-ദിവസത്തെ ശരീരഭാരം കുറയ്ക്കൽ ചികിത്സ"
    },
    duration: "10 Days / 9 Nights",
    priceEstimate: "₹34,999 onwards",
    description: {
      en: "Combats obesity by mobilizing fat, improving lymphatic drainage, and regulating metabolic rate using dry herbal powder massages (Udwarthanam).",
      ml: "പൊണ്ണത്തടി കുറയ്ക്കുന്നതിനും ശരീരത്തിലെ അമിത കൊഴുപ്പ് ഇല്ലാതാക്കുന്നതിനും സഹായിക്കുന്ന ഉദവർത്തനം ഉൾപ്പെടെയുള്ള ചികിത്സകൾ."
    },
    includes: {
      en: ["Daily Udwarthanam (powder massage)", "Ayurvedic steam baths", "Detox drinks and slimming diet", "Daily fitness counseling"],
      ml: ["ദിവസേനയുള്ള ഉദവർത്തനം (പൊടി തിരുമ്മൽ)", "ഔഷധ ആവി കുളി", "പ്രത്യേക ആഹാരക്രമവും ഡിറ്റോക്സ് പാനീയങ്ങളും", "ഫിറ്റ്നസ് കൗൺസിലിംഗ്"]
    },
    image: "/packages/weight.jpg"
  }
];

export const doctors: Doctor[] = [
  {
    id: "doc-namboothiri",
    name: {
      en: "Dr. Madhavan Namboothiri",
      ml: "ഡോ. മാധവൻ നമ്പൂതിരി"
    },
    role: {
      en: "Chief Ayurvedic Physician",
      ml: "ചീഫ് ഫിസിഷ്യൻ"
    },
    specialty: {
      en: "Panchakarma & Chronic Disorders",
      ml: "പঞ্চകർമ്മവും വിട്ടുമാറാത്ത രോഗങ്ങളും"
    },
    experience: "25+ Years",
    bio: {
      en: "A descendant of a traditional Ayurvedic lineage in Kerala, Dr. Namboothiri has successfully treated thousands of international patients suffering from auto-immune and lifestyle disorders.",
      ml: "കേരളത്തിലെ പ്രശസ്തമായ പാരമ്പര്യ വൈദ്യകുടുംബത്തിൽ നിന്നുള്ള ഡോ. നമ്പൂതിരി നിരവധി വിദേശ-സ്വദേശ രോഗികളെ വിജയകരമായി ചികിത്സിച്ചിട്ടുണ്ട്."
    },
    image: "/doctors/madhavan.jpg"
  },
  {
    id: "doc-arundhati",
    name: {
      en: "Dr. Arundhati Devi",
      ml: "ഡോ. അരുന്ധതി ദേവി"
    },
    role: {
      en: "Senior Consultant - Wellness & Rejuvenation",
      ml: "സീനിയർ കൺസൾട്ടന്റ്"
    },
    specialty: {
      en: "Gynaecology & Stress Management",
      ml: "സ്ത്രീരോഗങ്ങളും സ്ട്രെസ് മാനേജ്മെന്റും"
    },
    experience: "18+ Years",
    bio: {
      en: "Dr. Arundhati specializes in holistic women's wellness, customized detoxification, and stress management programs using natural therapeutic principles.",
      ml: "സ്ത്രീകളുടെ ആരോഗ്യം, പ്രത്യേക ആവിഷ്കൃത ഡിറ്റോക്സ്, സ്ട്രെസ് മാനേജ്മെന്റ് എന്നിവയിൽ വിദഗ്ദ്ധ."
    },
    image: "/doctors/arundhati.jpg"
  }
];
