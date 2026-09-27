import { Department, Doctor, Testimonial, FAQItem } from '../types';

export const HOSPITAL_INFO = {
  name: 'KVR Hospital Orthopedics & Maternity',
  teluguName: 'KVR హాస్పిటల్ ఒర్తోపెడిక్స్ & మెటర్నిటీ',
  tagline: 'Trusted Orthopedic & Maternity Care in Jagtial',
  phone: '+91 95050 51777',
  phoneRaw: '+919505051777',
  whatsappRaw: '919505051777',
  address: '9-51, Gollapally Rd, Krishnanagar, Jagtial, Telangana 505327',
  location: 'Jagtial, Telangana',
  rating: 5.0,
  reviewsCount: 92,
  availability: 'Open 24 Hours',
  googleMapsUrl: 'https://maps.google.com/?q=9-51,+Gollapally+Rd,+Krishnanagar,+Jagtial,+Telangana+505327',
  features: [
    '24/7 Emergency Care',
    'Safe Motherhood Care',
    'Advanced Orthopedic Surgery',
    'LGBTQ+ Friendly & Inclusive',
    'Ultra-Hygienic Operation Theaters',
    'Cashless & Insurance Assistance'
  ]
};

export const createWhatsAppUrl = (customText?: string) => {
  const defaultText = 'Hello KVR Hospital, I would like to book an appointment.';
  const text = customText || defaultText;
  return `https://wa.me/${HOSPITAL_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
};

export const DEPARTMENTS: Department[] = [
  {
    id: 'orthopedics',
    name: 'Orthopedics & Joint Care',
    teluguName: 'ఒర్తోపెడిక్స్ & కీళ్ళ వైద్యం',
    shortDesc: 'Comprehensive bone fracture management, joint replacement, arthroscopy, and trauma rehabilitation.',
    longDesc: 'Our Orthopedics department in Jagtial combines cutting-edge diagnostic imaging, advanced surgical suites, and dedicated physiotherapy to restore painless movement and bone health.',
    image: '/src/assets/images/kvr_ortho_department_1790487469400.jpg',
    services: [
      'Bone Fracture Care & Plastering',
      'Joint Pain & Arthritis Treatment',
      'Sports Injury & Ligament Care',
      'Trauma & Polytrauma Emergency Care',
      'Follow-up Rehabilitation & Physical Therapy'
    ],
    features: ['Digitized X-Ray', 'C-Arm Surgical Guidance', 'Minimally Invasive Care'],
    color: 'emerald'
  },
  {
    id: 'maternity',
    name: 'Maternity & Safe Motherhood',
    teluguName: 'మెటర్నిటీ & ప్రసవ సంరక్షణ',
    shortDesc: 'Compassionate prenatal care, painless normal delivery, cesarean delivery, and comprehensive neonatal care.',
    longDesc: 'Led by experienced obstetricians, our Maternity department provides a warm, supportive, and safe environment for mothers and babies from conception through postpartum wellness.',
    image: '/src/assets/images/kvr_maternity_department_1790487481738.jpg',
    services: [
      'Comprehensive Pregnancy Care (Antenatal)',
      'Normal Delivery & Painless Labor Support',
      'Cesarean Delivery (C-Section) with High Safety',
      'Postnatal Mother Care & Lactation Support',
      'Newborn Pediatric & Neonatal Monitoring'
    ],
    features: ['Private Labor Suites', 'Fetal Monitoring Units', '24/7 Doctor On-Call'],
    color: 'blue'
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-sirisha',
    name: 'Dr. Sirisha',
    role: 'Senior Obstetrician & Gynecologist',
    qualification: 'MBBS, MS (Obstetrics & Gynecology)',
    experience: '12+ Years Experience',
    specialties: ['High-Risk Pregnancy', 'Normal Deliveries', 'Laparoscopic Gynecology', 'Postnatal Wellness'],
    description: 'Dr. Sirisha is celebrated in Jagtial for her gentle, empathetic patient care and her unwavering commitment to safe, comfortable deliveries for every mother.',
    image: '/src/assets/images/doctor_sirisha_1790487494118.jpg',
    availableDays: 'Mon - Sat (24/7 Emergency Maternity Available)',
    whatsappPreFill: 'Hello KVR Hospital, I would like to book a consultation with Dr. Sirisha (Obstetrics & Gynecology).'
  },
  {
    id: 'dr-ortho-specialist',
    name: 'Dr. K. Venkata Ramana',
    role: 'Chief Orthopedic & Trauma Surgeon',
    qualification: 'MBBS, MS (Ortho), Fellowship in Joint Replacement',
    experience: '15+ Years Experience',
    specialties: ['Complex Fracture Fixation', 'Knee & Hip Joint Care', 'Spine & Trauma Management', 'Arthroscopy'],
    description: 'Specializing in trauma recovery and minimally invasive joint procedures, ensuring fast recovery times and restored mobility for patients across Telangana.',
    image: '/src/assets/images/doctor_ortho_1790487505268.jpg',
    availableDays: 'Daily Consultation & 24/7 Trauma Emergency',
    whatsappPreFill: 'Hello KVR Hospital, I would like to book a consultation with Dr. K. Venkata Ramana (Orthopedics).'
  },
  {
    id: 'dr-emergency-specialist',
    name: 'Dr. P. Rajesh Kumar',
    role: 'Emergency Medical & General Physician',
    qualification: 'MBBS, MD (General Medicine)',
    experience: '10+ Years Experience',
    specialties: ['Acute Trauma Triage', 'Critical Medical Care', 'Hypertension & Diabetes', 'Emergency Stabilization'],
    description: 'Ensuring round-the-clock emergency medical response and general clinical support for all urgent patient admissions.',
    image: '/src/assets/images/kvr_hospital_exterior_1790487457098.jpg',
    availableDays: '24 Hours On-Duty Rotation',
    whatsappPreFill: 'Hello KVR Hospital, I need to consult the Duty Doctor for emergency care.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Suresh Reddy',
    role: 'Patient (Bone Fracture Treatment)',
    service: 'Orthopedics',
    quote: 'The doctors were experienced, caring, and explained everything clearly. After a severe bike accident in Jagtial, their prompt trauma care and plastering saved my leg from complications. Highly recommended!',
    rating: 5,
    date: '2 weeks ago',
    verified: true
  },
  {
    id: '2',
    name: 'Lavanya M.',
    role: 'New Mother (Normal Delivery)',
    service: 'Maternity',
    quote: 'Dr. Sirisha made my delivery experience comfortable and stress-free. The nursing staff took care of my baby and me like family throughout our 3 days stay in the hospital.',
    rating: 5,
    date: '1 month ago',
    verified: true
  },
  {
    id: '3',
    name: 'Mohd. Rashed',
    role: 'Patient (Knee Pain Rehabilitation)',
    service: 'Orthopedics',
    quote: 'Clean environment, timely service, and excellent support. The joint injection and guided physical exercises relieved chronic knee pain that I had suffered with for over two years.',
    rating: 5,
    date: '3 weeks ago',
    verified: true
  },
  {
    id: '4',
    name: 'Anitha Gangadhar',
    role: 'Mother (Cesarean Delivery & Care)',
    service: 'Maternity',
    quote: 'From midnight emergency admission to safe baby delivery, the entire KVR Hospital medical team was on their toes. Very clean rooms and reasonable treatment costs in Jagtial.',
    rating: 5,
    date: '2 months ago',
    verified: true
  }
];

export const WHY_CHOOSE_ITEMS = [
  {
    title: '24/7 Doctors Available',
    description: 'Round-the-clock emergency medical officers and on-call specialist surgeons ready at any hour.',
    icon: 'Clock'
  },
  {
    title: 'Experienced Specialists',
    description: 'Over 25 combined years of orthopedic surgery and obstetrics experience handling complex cases.',
    icon: 'Award'
  },
  {
    title: 'Caring Nursing Staff',
    description: 'Empathetic nursing team providing attentive bedside monitoring and compassionate patient comfort.',
    icon: 'HeartHandshake'
  },
  {
    title: 'Clean & Hygienic Hospital',
    description: 'Strict infection-control protocols, sterile surgical suites, and spotless recovery wards.',
    icon: 'Sparkles'
  },
  {
    title: 'Safe Delivery Care',
    description: 'Dedicated modern labor rooms equipped for painless normal deliveries and emergency C-sections.',
    icon: 'Baby'
  },
  {
    title: 'Prompt Emergency Support',
    description: 'Immediate trauma triage for bone fractures, road accidents, and maternity emergencies without delays.',
    icon: 'Ambulance'
  }
];

export const MATERNITY_JOURNEY_STEPS = [
  {
    step: '01',
    title: 'Antenatal & Trimester Care',
    period: 'Weeks 1 – 28',
    description: 'Regular checkups, ultrasound scans, iron & folic nutrition planning, and fetal heart rate monitoring.',
    focus: 'Holistic mother & baby wellness'
  },
  {
    step: '02',
    title: 'Third Trimester Preparation',
    period: 'Weeks 28 – 37',
    description: 'Birth plan guidance, labor preparation classes, pelvic assessments, and 24/7 emergency readiness.',
    focus: 'Stress-free delivery planning'
  },
  {
    step: '03',
    title: 'Safe Delivery & Birthing',
    period: 'Delivery Day',
    description: 'Expert-led normal delivery or advanced sterile cesarean care in fully equipped maternity OT.',
    focus: 'Compassionate, safe birth'
  },
  {
    step: '04',
    title: 'Postnatal & Newborn Care',
    period: 'Post-Delivery',
    description: 'Lactation counseling, newborn immunization, maternal recovery care, and pediatrician follow-up.',
    focus: 'Confident start to motherhood'
  }
];

export const ORTHOPEDIC_RECOVERY_STEPS = [
  {
    stage: 'Evaluation & Stabilization',
    timeline: 'Day 1',
    desc: 'Rapid X-ray diagnostics, pain relief, temporary splinting or precise surgical fixation.'
  },
  {
    stage: 'Early Mobilization',
    timeline: 'Days 2 – 7',
    desc: 'Supervised gentle movement, edema management, and joint alignment monitoring.'
  },
  {
    stage: 'Targeted Physiotherapy',
    timeline: 'Weeks 2 – 6',
    desc: 'Strength rebuilding, ligament conditioning, and flexibility exercises tailored to the joint.'
  },
  {
    stage: 'Full Pain-Free Mobility',
    timeline: 'Week 6+',
    desc: 'Return to active lifestyle, work duties, and athletic activities with restored confidence.'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Is KVR Hospital open 24 hours in Jagtial?',
    answer: 'Yes! KVR Hospital is open 24 hours a day, 7 days a week. We have resident medical doctors, emergency trauma staff, and maternity care specialists available around the clock at our Gollapally Road facility in Krishnanagar.',
    category: 'emergency'
  },
  {
    question: 'How can I book an appointment?',
    answer: 'Booking is instant through WhatsApp! Simply click the "Book on WhatsApp" button on this website or fill out our quick appointment form. It directly sends your details to our hospital coordination team who will confirm your slot within minutes.',
    category: 'general'
  },
  {
    question: 'Does the hospital provide comprehensive maternity services?',
    answer: 'Yes. Led by Dr. Sirisha, our maternity care covers prenatal checkups, fetal monitoring, painless normal delivery, Cesarean sections (C-sections), high-risk pregnancy management, newborn nursery monitoring, and postnatal lactation care.',
    category: 'maternity'
  },
  {
    question: 'Are orthopedic emergencies and bone fractures treated immediately?',
    answer: 'Yes. Our trauma and orthopedic team handles emergency bone fractures, road traffic accident injuries, joint dislocations, and tendon tears immediately with on-site digital X-ray and surgical theater preparedness.',
    category: 'ortho'
  },
  {
    question: 'Can I contact the hospital directly through WhatsApp for questions?',
    answer: 'Absolutely. You can chat with our team on WhatsApp at +91 95050 51777 anytime for consultation timings, doctor availability, directions, or medical questions.',
    category: 'general'
  },
  {
    question: 'Is KVR Hospital an inclusive and welcoming healthcare center?',
    answer: 'Yes, KVR Hospital is proudly LGBTQ+ friendly and provides dignified, confidential, compassionate, and equitable medical care for every patient and family.',
    category: 'general'
  }
];

export const STATS = [
  { label: 'Patient Reviews', value: '92+', sub: 'Verified 5.0 Rating' },
  { label: 'Happy Families Served', value: '10,000+', sub: 'Across Jagtial & Telangana' },
  { label: 'Emergency Readiness', value: '24/7', sub: 'Always Open' },
  { label: 'Safe Deliveries', value: '2,500+', sub: 'Normal & C-Section Care' }
];

export const GALLERY_ITEMS = [
  {
    title: 'Hospital Entrance & Emergency Bay',
    subtitle: 'Modern glass architecture on Gollapally Road',
    image: '/src/assets/images/kvr_hospital_exterior_1790487457098.jpg',
    tag: 'Facility'
  },
  {
    title: 'Advanced Orthopedic Diagnostics',
    subtitle: 'High-precision bone and joint evaluation center',
    image: '/src/assets/images/kvr_ortho_department_1790487469400.jpg',
    tag: 'Orthopedics'
  },
  {
    title: 'Private Maternity & Recovery Suite',
    subtitle: 'Comfortable, serene space for mother and newborn',
    image: '/src/assets/images/kvr_maternity_department_1790487481738.jpg',
    tag: 'Maternity'
  },
  {
    title: 'Specialist Consultation Chambers',
    subtitle: 'Personalized medical consultations with top specialists',
    image: '/src/assets/images/doctor_sirisha_1790487494118.jpg',
    tag: 'Doctors'
  }
];
