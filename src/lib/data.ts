export const CONTACT = {
  phoneLk: "+94 77 352 3423",
  phoneLkRaw: "+94773523423",
  phoneSa: "+966 53 437 0096",
  phoneSaRaw: "+966534370096",
  email: "ummathtravels5@gmail.com",
  address: "No 19 First Cross Street, Madurankuliya, Puttalam, Sri Lanka",
  addressShort: "No 19 First Cross Street, Madurankuliya, Puttalam",
  whatsappLk: "94773523423",
} as const;

export const IMAGES = {
  heroKaaba:
    "https://images.pexels.com/photos/12721555/pexels-photo-12721555.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=2000&h=1250",
  kaabaGround:
    "https://images.pexels.com/photos/35446836/pexels-photo-35446836.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1400&h=1000",
  haramAerial:
    "https://images.pexels.com/photos/38546882/pexels-photo-38546882.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1400&h=1000",
  haramPilgrims:
    "https://images.pexels.com/photos/35332385/pexels-photo-35332385.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1400&h=1000",
  madinahDome:
    "https://images.pexels.com/photos/33169780/pexels-photo-33169780.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1100&h=1400",
  madinahMinaret:
    "https://images.pexels.com/photos/38498725/pexels-photo-38498725.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1100&h=1400",
};

export const NAV_LINKS = [
  { label: "Why Ummath", href: "#why" },
  { label: "Journeys", href: "#journeys" },
  { label: "Stories", href: "#stories" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: 18400, suffix: "+", label: "Pilgrims Served" },
  { value: 20, suffix: " yrs", label: "In The Market" },
  { value: 98.6, suffix: "%", label: "Visa Approval Rate", decimals: 1 },
  { value: 4.9, suffix: "/5", label: "Pilgrim Rating", decimals: 1 },
];

export const ACCREDITATIONS = [
  "Sri Lankan Licensed Operator",
  "Licensed Hajj Operator",
  "Ministry of Hajj & Umrah Partner",
  "IATA Accredited",
  "Saudi Tourism Approved",
];

export const FEATURES = [
  {
    icon: "FileCheck2",
    title: "3-Day Visa Processing",
    description:
      "Your Umrah or Hajj visa handled end-to-end by our compliance desk in Puttalam — 98.6% first-time approval, with every document checked twice before Nusuk submission.",
  },
  {
    icon: "Hotel",
    title: "Comfortable Accommodation",
    description:
      "Hand-picked 4★ & 5★ hotels averaging under 400m from Masjid al-Haram and Masjid an-Nabawi. Clean, quiet rooms with lift access — no shuttles needed at Fajr.",
  },
  {
    icon: "UtensilsCrossed",
    title: "Sri Lankan Meals Available",
    description:
      "Home-style Sri Lankan rice & curry prepared daily by our catering partners in Makkah & Madinah — plus Arabic buffet options. Clearly marked on all Premium & Custom packages.",
  },
  {
    icon: "Plane",
    title: "Reliable Transport",
    description:
      "Return flights with 30kg baggage, group check-in help, and private air-conditioned buses for all transfers, Ziyarat and intercity travel between Makkah & Madinah.",
  },
  {
    icon: "BookOpenCheck",
    title: "Expert Guided Support",
    description:
      "Every departure travels with a qualified scholar (Tamil, Sinhala, English & Arabic) who walks you through ihram, tawaf, sa'i and daily halaqas — exactly per Sunnah.",
  },
  {
    icon: "ShieldCheck",
    title: "Fully Protected & Transparent",
    description:
      "All-inclusive LKR quotes in writing, no hidden fees. 20 years of trusted service in Puttalam with clear refund guarantee if visa is declined.",
  },
];

export const JOURNEYS = [
  {
    id: "umrah",
    label: "Umrah",
    tag: "Year-Round · Sri Lankan Meals",
    title: "Umrah, made effortless",
    description:
      "Ten unhurried nights across Makkah and Madinah with Sri Lankan meals available daily. Land to a coordinator holding your name, settle into a hotel steps from the Haram, and let every rite be guided.",
    bullets: [
      "5 nights Makkah · 5 nights Madinah",
      "Visa processing & Nusuk included",
      "Sri Lankan rice & curry meal option",
      "Guided Umrah within 24h + Ziyarat",
    ],
    image: "kaabaGround",
    alt: "Pilgrims gathered around the Holy Kaaba during Umrah",
  },
  {
    id: "hajj",
    label: "Hajj",
    tag: "Quota Secured for 1447H",
    title: "Hajj, with complete peace of mind",
    description:
      "The journey of a lifetime deserves flawless logistics. Ministry-approved quota, air-conditioned Mina camps with Sri Lankan catering on request, and on-call care mean you give your worship everything.",
    bullets: [
      "Standard, Premium & Custom Hajj",
      "Mina camps near Jamarat",
      "Comfortable accommodation & transport",
      "Pre-departure manasik training in Puttalam",
    ],
    image: "haramAerial",
    alt: "Aerial view of Masjid al-Haram during the Hajj season",
  },
  {
    id: "custom",
    label: "Customized",
    tag: "Private Family & Group Tours",
    title: "Your family, your pace",
    description:
      "Combine Umrah with heritage Ziyarat, choose your hotel tier, request private vehicles and dedicated Sri Lankan meals. We build the entire itinerary around your elders, children and budget.",
    bullets: [
      "Choose Standard / Premium / VIP hotels",
      "Private AC van with Sri Lankan driver",
      "Sri Lankan meals daily on request",
      "Combine with Taif, Badr, Uhud, Quba",
    ],
    image: "madinahMinaret",
    alt: "Minarets and domes of Al-Masjid an-Nabawi in Madinah",
  },
];

export const BENEFITS = [
  {
    title: "From Puttalam to the Haramain",
    description: "Visit us at No 19 First Cross Street, Madurankuliya, Puttalam. One named consultant from first call to return flight.",
  },
  {
    title: "Sri Lankan meals where it matters",
    description: "All Premium & Custom packages include Sri Lankan meals. Standard packages include buffet with Sri Lankan option available.",
  },
  {
    title: "Family & sisters-only departures",
    description: "Travel with like-minded companions. Female group leads, adjoining rooms, and elderly mobility assistance as standard.",
  },
  {
    title: "20 years of trusted service",
    description: "Serving Sri Lankan pilgrims for 20 years from Madurankuliya, Puttalam with transparent LKR pricing and honest guidance.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Mohamed Rizwan",
    location: "Puttalam, Sri Lanka",
    trip: "Premium Umrah — Ramadan 2025",
    quote:
      "Seeing the Kaaba for the first time — I cried. Ummath's team in Makkah gave us fresh Sri Lankan rice every day. We never thought about buses or tickets once.",
    initials: "MR",
  },
  {
    name: "Fathima Shafna",
    location: "Negombo, Sri Lanka",
    trip: "Family Umrah — December 2025",
    quote:
      "Travelling with two kids and my 72-year-old mother felt impossible. They arranged wheelchairs, adjoining rooms, and even a stroller at tawaf. We just worshipped.",
    initials: "FS",
  },
  {
    name: "Haji Abdul Kareem",
    location: "Colombo, Sri Lanka",
    trip: "Hajj 1446H — Non-shifting",
    quote:
      "Hajj is the hardest thing I have done physically. Ummath's camp near Jamarat, on-time Sri Lankan meals, and the Puttalam scholar made it peaceful.",
    initials: "AK",
  },
  {
    name: "Ayesha Rahman",
    location: "Chilaw, Sri Lanka",
    trip: "Customized Umrah — Sisters",
    quote:
      "Sisters-only group with Sri Lankan meals — my whole family felt safe. The female coordinators from negotiation to Madinah were phenomenal.",
    initials: "AR",
  },
  {
    name: "Ibrahim Store",
    location: "Kandy, Sri Lanka",
    trip: "Premium Umrah — 2025",
    quote:
      "Transparent LKR pricing, no hidden dollar. Visa in 3 days, hotel was 300m from Haram. Alhamdulillah, best decision.",
    initials: "IS",
  },
  {
    name: "Fareed & Family",
    location: "Madurankuliya, Puttalam",
    trip: "Custom Umrah + Ziyarat — 2025",
    quote:
      "We asked for a fully customized trip for 9 family members with Sri Lankan meals — they built it around my father's needs. Every hotel, every meal perfect.",
    initials: "FF",
  },
];

export const TIERS = [
  {
    name: "Standard Umrah",
    arabic: "Standard",
    badge: "Sri Lankan Meal Option",
    priceLkr: 695000,
    unit: "per person",
    note: "4★ comfort · Quad sharing",
    description: "All key inclusions for a blessed Umrah, with transparent all-inclusive LKR pricing.",
    features: [
      "Umrah visa processing & Nusuk registration",
      "Return flights + 30kg & reliable AC transport",
      "4★ hotel · ~800m from Haram + free shuttle",
      "Comfortable accommodation & guided Umrah",
      "Expert guided support — scholar-led rites",
      "Sri Lankan meal option available (add-on)",
    ],
    cta: "Get Standard Quote",
    popular: false,
  },
  {
    name: "Premium Umrah",
    arabic: "Most Loved",
    badge: "Sri Lankan Meals Included",
    priceLkr: 895000,
    unit: "per person",
    note: "5★ · Double sharing · Meals Included",
    description: "Our signature journey — proximity, comfort, Sri Lankan meals & guidance in perfect balance.",
    features: [
      "Everything in Standard Umrah included",
      "5★ hotel · 350m walk to Haram",
      "Daily Sri Lankan rice & curry + buffet",
      "Reliable private transfers & intercity bus",
      "Dedicated scholar + 24/7 coordinator (LK & KSA)",
      "Extended Ziyarat — Uhud, Quba, Qiblatain",
      "Flexible date change up to 21 days",
    ],
    cta: "Book Premium in LKR",
    popular: true,
  },
  {
    name: "Customized Private",
    arabic: "Custom & Hajj",
    badge: "Fully Customizable",
    priceLkr: 1450000,
    unit: "per person",
    note: "Kaaba-view / Family villa · Private",
    description: "Fully customized Umrah & Hajj — hotels, meals, transport tailored for your family or group.",
    features: [
      "Hajj 1447H (quota secured) & Umrah private",
      "Choose hotel tier — 4★ to Kaaba-view 5★",
      "Daily Sri Lankan meals guaranteed",
      "Private AC van & personal mutawwif",
      "Expert guided support & elderly care",
      "Custom Ziyarat — Badr, Taif, private tours",
      "All-inclusive bespoke LKR quote",
    ],
    cta: "Design My Custom Trip",
    popular: false,
  },
];

export const FAQS = [
  {
    question: "How far in advance should I book Umrah or Hajj from Sri Lanka?",
    answer:
      "For best hotels and fares book Umrah 3–4 months early, Hajj 6–9 months early as quota is limited. If you need to travel urgently, our Puttalam visa desk can arrange a complete package in as little as 10 days — call +94 77 352 3423 and we will tell you honestly what is possible.",
  },
  {
    question: "What documents do I need for Umrah visa from Sri Lanka?",
    answer:
      "Passport valid 6+ months, 1 photo with white background, and Meningitis ACWY vaccination card. We handle Nusuk, insurance, flight & hotel vouchers at No 19 First Cross Street, Madurankuliya. Every file is double-checked.",
  },
  {
    question: "Do you provide Sri Lankan meals in Makkah and Madinah?",
    answer:
      "Yes — daily Sri Lankan rice & curry is included in Premium and Customized packages (clearly marked). Standard packages include open-buffet and a Sri Lankan meal option can be added for a small supplement. Meals are prepared fresh by our partners in Makkah and Madinah.",
  },
  {
    question: "Is your LKR pricing fully transparent?",
    answer:
      "Yes. Every package comes with a written all-inclusive LKR quote — visa, flights, hotels, transport, meals and scholar guidance. No hidden dollar conversions. Payment in cash at our Puttalam office or bank transfer. 20 years of honest service.",
  },
  {
    question: "What happens if my visa is rejected?",
    answer:
      "With 98.6% approval it is rare, but you are fully protected. Choose free re-application, free date change, or 100% refund. It's written into every contract. Call us on +94 77 352 3423 or +966 53 437 0096.",
  },
  {
    question: "Where is your office? How do I contact you?",
    answer:
      "Visit us at No 19 First Cross Street, Madurankuliya, Puttalam, Sri Lanka. Call / WhatsApp +94 77 352 3423 or +966 53 437 0096, or email ummathtravels5@gmail.com. We also provide a simple inquiry form to request a callback — replies within 2 hours, 9am–9pm.",
  },
];

export const FOOTER_COLS = [
  {
    heading: "Journeys",
    links: ["Standard Umrah", "Premium Umrah (SR Meals)", "Customized Private", "Hajj 1447H Quota", "Family & Sisters-Only", "Ramadan Umrah"],
  },
  {
    heading: "Company",
    links: ["About Ummath", "Puttalam Office", "Our Scholars", "Pilgrim Stories (LK)", "Accreditations", "Contact"],
  },
  {
    heading: "Support",
    links: ["Visa from Sri Lanka", "Sri Lankan Meals", "LKR Transparent Pricing", "Travel Insurance", "Terms & Conditions", "Privacy Policy"],
  },
];

export const PRICING_STYLES = {
  popular: true,
};
