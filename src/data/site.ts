import {
  Baby,
  Stethoscope,
  HeartPulse,
  Sparkles,
  FlaskConical,
  Microscope,
  Activity,
  Syringe,
  Scan,
  ShieldCheck,
  Sun,
  Hospital,
} from "lucide-react";

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/treatments", label: "Treatments" },
  { to: "/doctors", label: "Doctors" },
  { to: "/certifications", label: "Quality" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

export const stats = [
  { value: "15+", label: "Years of care" },
  { value: "25k+", label: "Happy families" },
  { value: "98%", label: "Patient satisfaction" },
  { value: "24/7", label: "Emergency support" },
];

export const services = [
  {
    icon: Baby,
    title: "Maternal & Child Care",
    desc: "End-to-end care for mother and baby, from preconception to postnatal.",
    slug: "maternal-child",
  },
  {
    icon: HeartPulse,
    title: "High Risk Pregnancy",
    desc: "Specialist monitoring and intervention for complex pregnancies.",
    slug: "high-risk",
  },
  {
    icon: Sparkles,
    title: "Cosmetic Gynecology",
    desc: "Aesthetic and reconstructive gynecology with discretion.",
    slug: "cosmetic-gyn",
  },
  {
    icon: FlaskConical,
    title: "Infertility Care & IVF",
    desc: "Personalised fertility evaluation, IUI, IVF and ICSI.",
    slug: "infertility",
  },
  {
    icon: Activity,
    title: "Uro Gynecology",
    desc: "Pelvic floor, prolapse and urinary incontinence treatment.",
    slug: "uro-gyn",
  },
  {
    icon: Scan,
    title: "Fetal Medicine",
    desc: "Advanced fetal scans, anomaly screening and counselling.",
    slug: "fetal-medicine",
  },
  {
    icon: Syringe,
    title: "Regenerative Medicine",
    desc: "PRP and cell-based therapies for gynecologic health.",
    slug: "regenerative",
  },
  {
    icon: Microscope,
    title: "Gynac Oncology",
    desc: "Screening, diagnosis and surgical care for gynec cancers.",
    slug: "oncology",
  },
  {
    icon: ShieldCheck,
    title: "Painless Labour",
    desc: "Epidural-led birthing with continuous care and dignity.",
    slug: "painless-labour",
  },
  {
    icon: Stethoscope,
    title: "Gynac Endoscopy",
    desc: "Minimally invasive laparoscopic & hysteroscopic surgery.",
    slug: "endoscopy",
  },
  {
    icon: Baby,
    title: "Paediatric & Neonatal",
    desc: "Compassionate care for newborns, infants and children.",
    slug: "paediatrics",
  },
  {
    icon: Hospital,
    title: "NICU",
    desc: "Level III neonatal intensive care with expert neonatologists.",
    slug: "nicu",
  },
  {
    icon: Sun,
    title: "Phototherapy",
    desc: "Safe neonatal jaundice management with modern phototherapy.",
    slug: "phototherapy",
  },
];

export const doctors = [
  {
    name: "Dr. Mamata Nayak",
    role: "Senior Consultant, Police Hospital",
    exp: "18 yrs",
    edu: "MBBS, MD (Obstetrics & Gynecology)",
    img: "/dr-mamata-nayak.png",
    tags: ["Infertility", "Ultrasound"],
  },
  {
    name: "Dr. Vikram Mehta",
    role: "Professor, Obstetrics & Gynaecology",
    edu: "MD (O&G), FICOG",
    img: "/dr-vikram-mehta.png",
    tags: ["Endoscopic Surgery", "Reproductive Medicine", "Advanced Ultrasound"],
  },
  {
    name: "Dr. Priya Nair",
    role: "Paediatrician & Neonatologist",
    exp: "12+ yrs",
    consults: "15,200+",
    edu: "MBBS, MD (Paediatrics), Fellowship in Neonatology",
    avail: "Mon–Sun · 9:00 AM – 8:00 PM",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=480&q=80",
    tags: ["NICU", "Newborn Care", "Vaccination"],
  },
  {
    name: "Dr. Rohan Iyer",
    role: "Gynac Endoscopic Surgeon",
    exp: "16+ yrs",
    consults: "8,600+",
    edu: "MBBS, MS, Fellowship in Minimal Access Surgery",
    avail: "Tue–Sat · 12:00 PM – 7:00 PM",
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=480&q=80",
    tags: ["Laparoscopy", "Hysteroscopy", "Oncology"],
  },
];

export const testimonials = [
  {
    name: "Aarti & Rohit",
    role: "New parents",
    rating: 5,
    quote:
      "From our first scan to bringing our daughter home, Shreemaa felt like family. The NICU team is exceptional.",
  },
  {
    name: "Meera Khanna",
    role: "IVF journey",
    rating: 5,
    quote:
      "After three years of trying, Dr. Mehta and his team gave us our miracle. The care was personal and unhurried.",
  },
  {
    name: "Sneha Patil",
    role: "Painless labour",
    rating: 5,
    quote:
      "I was terrified of childbirth. The painless labour program changed everything — I felt safe and in control.",
  },
  {
    name: "The Sharma family",
    role: "Paediatric care",
    rating: 5,
    quote:
      "Dr. Priya has been our paediatrician for both kids. Gentle, knowledgeable and always available.",
  },
];

export const certifications = [
  {
    name: "NABH Accredited",
    desc: "National Accreditation Board for Hospitals & Healthcare Providers.",
  },
  {
    name: "ISO 9001:2015",
    desc: "Certified quality management systems across all clinical operations.",
  },
  {
    name: "FOGSI Recognised",
    desc: "Federation of Obstetric & Gynaecological Societies of India.",
  },
  {
    name: "IAP Member Centre",
    desc: "Indian Academy of Paediatrics affiliated paediatric centre.",
  },
  {
    name: "Green OT Protocol",
    desc: "Modular operation theatres with HEPA filtration and laminar flow.",
  },
  { name: "Level III NICU", desc: "Highest tier neonatal intensive care unit certification." },
];

export const faqs = [
  {
    q: "Do you offer painless delivery?",
    a: "Yes. Our painless labour program uses epidural analgesia administered by trained anesthesiologists, with continuous monitoring.",
  },
  {
    q: "What is included in your antenatal package?",
    a: "Scheduled visits, scans, blood work, nutrition counselling, birthing classes, and 24/7 helpline access throughout pregnancy.",
  },
  {
    q: "Do you have an in-house NICU?",
    a: "We operate a Level III NICU with neonatologists, ventilators, phototherapy units and round-the-clock nursing.",
  },
  {
    q: "What IVF success rates do you see?",
    a: "Outcomes vary by age and indication. Our average clinical pregnancy rate is on par with international benchmarks; your specialist will share personalised numbers.",
  },
  {
    q: "Do you accept insurance and cashless?",
    a: "Yes, we are empanelled with most major insurance providers for cashless admission. Our billing desk assists with pre-authorisations.",
  },
  {
    q: "Is the clinic accessible 24/7 for emergencies?",
    a: "Our emergency and obstetric triage runs 24/7, with on-call obstetricians, paediatricians and neonatologists.",
  },
];

export const branches = [
  {
    name: "Shreemaa Mother and Child Care",
    address:
      "Flat No- E/605, Highland Residency, Sailashree Vihar, Bhubaneswar, Khorda, Odisha, 751021",
  },
];

export const contact = {
  email: "shreemaamotherandchildcare@gmail.com",
  address:
    "Flat No- E/605, Highland Residency, Sailashree Vihar, Bhubaneswar, Khorda, Odisha, 751021",
};
