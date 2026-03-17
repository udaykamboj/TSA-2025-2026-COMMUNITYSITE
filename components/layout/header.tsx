"use client"

import { useState, useRef, useEffect, useCallback } from "react";
import { Search, Menu, X, ChevronDown, Globe, Type } from "lucide-react"

/* ─── DATA & CATEGORIES ────────────────────────────────────────────── */
const servicesItems = [
  { icon: "mapicon", label: "Street Cleaning Schedule", href: "/main/services/street-cleaning-schedule" },
  { icon: "taxi", label: "Parking or Camera Tickets", href: "/main/services/parking-or-camera-tickets" },
  { icon: "heritage", label: "Illegal Parking Complaint", href: "/main/services/illegal-parking-complaint" },
  { icon: "outdoor", label: "Report Pothole or Street Issue", href: "/main/services/report-pothole-or-street-issue" },
  { icon: "hoods", label: "Get Rid of Waste", href: "/main/services/get-rid-of-waste" },
  { icon: "access", label: "Noise Complaint", href: "/main/services/noise-complaint" },
];

const licensesItems = [
  { icon: "services", label: "Birth Certificates", href: "/main/services/birth-certificates" },
  { icon: "art", label: "Marriage Licenses", href: "/main/services/marriage-licenses" },
  { icon: "shopping", label: "Business Licenses", href: "/main/services/business-licenses" },
  { icon: "events", label: "Building Permits", href: "/main/services/building-permits" },
];

const supportItems = [
  { icon: "families", label: "Child Care Assistance", href: "/main/services/child-care-assistance" },
  { icon: "coffee", label: "SNAP Benefits", href: "/main/services/snap-benefits" },
  { icon: "hoods", label: "Apartment Complaint", href: "/main/services/apartment-complaint" },
  { icon: "globe", label: "Rent Increase Help", href: "/main/services/rent-increase-help" },
  { icon: "news", label: "Voter Registration", href: "/main/services/voter-registration" },
  { icon: "luggage", label: "Public Records Request", href: "/main/services/public-records-request" },
];

const languagesConfig = [
  { flag: "🇨🇳", code: "zh-CN", label: "Chinese – Simplified" },
  { flag: "🇩🇪", code: "de", label: "German" },
  { flag: "🇹🇼", code: "zh-TW", label: "Chinese – Traditional" },
  { flag: "🇯🇵", code: "ja", label: "Japanese" },
  { flag: "🇺🇸", code: "en", label: "English" },
  { flag: "🇰🇷", code: "ko", label: "Korean" },
  { flag: "🇫🇷", code: "fr", label: "French" },
  { flag: "🇪🇸", code: "es", label: "Spanish" },
  { flag: "🇻🇳", code: "vi", label: "Vietnamese" },
  { flag: "🇵🇭", code: "tl", label: "Tagalog" },
  { flag: "🇷🇺", code: "ru", label: "Russian" },
  { flag: "🇸🇦", code: "ar", label: "Arabic" },
  { flag: "🇵🇹", code: "pt", label: "Portuguese" },
  { flag: "🇮🇳", code: "hi", label: "Hindi" },
  { flag: "🇧🇩", code: "bn", label: "Bengali" },
  { flag: "🇵🇱", code: "pl", label: "Polish" },
  { flag: "🇵🇰", code: "ur", label: "Urdu" },
];

const utilityLinks = [
  { label: "Submit Resource", href: "/submit" },
  { label: "Resources", href: "/resources" },
  { label: "Reference", href: "/reference" },
  { label: "Login", href: "/login" },
];

/* ─── SVG ICON PATHS ─────────────────────────────────────────────────── */
const P = {
  camera: <><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></>,
  events: <><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></>,
  art: <><circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" /></>,
  heritage: <><line x1="3" y1="22" x2="21" y2="22" /><line x1="6" y1="18" x2="6" y2="11" /><line x1="10" y1="18" x2="10" y2="11" /><line x1="14" y1="18" x2="14" y2="11" /><line x1="18" y1="18" x2="18" y2="11" /><polygon points="12 2 20 7 4 7" /></>,
  families: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
  outdoor: <><path d="M17 8C8 10 5.9 16.17 3.82 22h17.68" /><path d="M17 22a5 5 0 0 0-10 0" /></>,
  shopping: <><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></>,
  lgbtq: <path d="M22 17a10 10 0 0 0-20 0M6 17a6 6 0 0 1 12 0M2 17h2M20 17h2M10 17a2 2 0 0 1 4 0" />,
  sports: <><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2z" /></>,
  hoods: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>,
  cruise: <><path d="M2 21c.6.5 1.2 1 2.5 1C7 22 7 20 9.5 20c2.4 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76" /><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" /></>,
  services: <><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></>,
  restaurants: <><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" /></>,
  coffee: <><path d="M17 8h1a4 4 0 1 1 0 8h-1" /><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" /><line x1="6" y1="2" x2="6" y2="4" /><line x1="10" y1="2" x2="10" y2="4" /><line x1="14" y1="2" x2="14" y2="4" /></>,
  wine: <><path d="M8 22h8" /><path d="M7 10h10" /><path d="M12 15v7" /><path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H7c-1.5 4-2 6-2 8a5 5 0 0 0 5 5z" /></>,
  beer: <><path d="M17 11h1a3 3 0 0 1 0 6h-1" /><path d="M9 12v6" /><path d="M13 12v6" /><path d="M5 7.5V20a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.5" /><path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 3 11 3s2 .5 3 .5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5z" /></>,
  spirits: <><path d="M8 22l4-4 4 4" /><path d="M18 2l-6 9-6-9" /><line x1="2" y1="2" x2="22" y2="2" /></>,
  tours: <><circle cx="12" cy="10" r="3" /><path d="M12 2a8 8 0 0 0-8 8c0 5.4 7.4 12.3 7.7 12.6a.5.5 0 0 0 .7 0C12.6 22.3 20 15.4 20 10a8 8 0 0 0-8-8z" /></>,
  taxi: <><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" /><circle cx="6.5" cy="16.5" r="2.5" /><circle cx="16.5" cy="16.5" r="2.5" /></>,
  mapicon: <><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" /><line x1="9" y1="3" x2="9" y2="18" /><line x1="15" y1="6" x2="15" y2="21" /></>,
  access: <><circle cx="12" cy="7" r="4" /><path d="M6 21v-2a6 6 0 0 1 12 0v2" /></>,
  globe: <><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>,
  news: <><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 0-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" /><path d="M18 14h-8" /><path d="M15 18h-5" /><path d="M10 6h8v4h-8V6z" /></>,
  play: <><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></>,
  walk: <><circle cx="13" cy="4" r="2" /><path d="m14.5 10.5-1-4.5H8l1 4.5L7 22h2l1.5-6 1.5 2V22h2v-6.5l-1.5-3 .5-2z" /></>,
  luggage: <><path d="M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2Z" /><path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" /><line x1="10" y1="10" x2="14" y2="10" /></>,
  search: <><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></>,
};

const Ico = ({ id, size = 22 }: { id: string, size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{P[id as keyof typeof P]}</svg>
);

/* ─── SUB-MENU ITEM ─────────────────────────────────────────────────── */
const SubItem = ({ icon, label, href }: { icon: string, label: string, href: string }) => {
  const [h, setH] = useState(false);
  return (
    <li
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      className="md:w-[40%] float-none md:float-left list-none"
      style={{
        color: "#fff",
        margin: ".125rem 1rem",
        position: "relative",
        border: h ? "2px solid #9bc730" : "2px solid transparent",
        background: h ? "#072d00" : "transparent",
        transition: "background .18s, border-color .18s",
        cursor: "pointer",
      }}
    >
      <span style={{
        display: "block", position: "absolute",
        left: "12px", top: "50%", transform: "translateY(-50%)",
        color: h ? "#9bc730" : "rgba(255,255,255,0.88)",
        transition: "color .18s", lineHeight: 1, pointerEvents: "none",
      }}>
        <Ico id={icon} size={26} />
      </span>
      <a href={href} style={{
        display: "block", width: "100%",
        padding: "10px 10px 10px 52px",
        color: "#fff", fontSize: "1rem",
        fontWeight: 400, textDecoration: "none",
        fontFamily: '"Poppins",Verdana,sans-serif',
        lineHeight: 1.4, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
        transition: "color .18s",
      }}>
        {label}
      </a>
    </li>
  );
};

/* ─── CTA PROMO CARD ────────────────────────────────────────────────── */
const CtaCard = ({ bg, emoji, title, books }: any) => {
  const [h, setH] = useState(false);
  return (
    <li className="hidden xl:block absolute right-0 top-[34px] w-auto max-w-[38%] h-[calc(100%-34px)] min-h-[220px] overflow-hidden list-none float-none border-none"
      style={{
        transform: h ? "scale(1.015)" : "scale(1)",
        transition: "transform .25s cubic-bezier(0.34,1.56,0.64,1)",
      }}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
    >
      <a href="#" className="block h-full p-[7px_10px]">
        <div className="relative w-full h-full min-h-[210px] rounded-[3px] overflow-hidden" style={{ background: bg }}>
          {emoji && <div className="absolute inset-0 flex items-center justify-center text-[90px] opacity-[0.22]">{emoji}</div>}
          {books && (
            <div className="absolute inset-0 flex items-center justify-center gap-[7px]">
              {[0, 1, 2].map(i => (
                <div key={i} className="w-[72px] h-[100px] rounded-[3px] flex flex-col items-center justify-end pb-[7px]" style={{
                  background: ["linear-gradient(160deg,#3a7a28,#1a3a10)", "linear-gradient(160deg,#4a8c30,#2d5a1b)", "linear-gradient(160deg,#2d6020,#163b0e)"][i],
                  transform: i === 0 ? "rotate(-5deg) translateX(-4px)" : i === 2 ? "rotate(5deg) translateX(4px)" : "none",
                  boxShadow: "2px 3px 14px rgba(0,0,0,0.65)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}>
                  <div className="text-center font-bold leading-tight" style={{ color: "rgba(255,255,255,0.88)" }}>
                    <div className="text-[6px] tracking-[0.06em]">CITY</div>
                    <div className="text-[8.5px] tracking-[0.02em]">services</div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 p-[32px_16px_18px] text-white font-bold leading-tight uppercase font-[Poppins]" style={{
            background: "linear-gradient(transparent, rgba(0,0,0,0.75))",
          }}>
            {title}
          </div>
        </div>
      </a>
    </li>
  );
};

/* ─── DROPDOWN PANELS ────────────────────────────────────────────────── */
const ServicesPanel = () => (
  <ul className="list-none m-0 p-[2rem_0_2rem_0] xl:p-[2rem_38%_2rem_0] relative overflow-hidden xl:min-h-[255px]">
    {servicesItems.map(i => <SubItem key={i.label} {...i} />)}
    <CtaCard
      bg="radial-gradient(ellipse at 70% 35%, #558510 0%, #1a3a10 40%, #0a3c00 74%)"
      title={<><div className="text-[0.8rem] tracking-[0.07em] mb-1">LOCAL RESOURCES</div><div className="text-[1.15rem]">CITY SERVICES</div></>}
    />
    <li className="clear-both block p-0 m-0 border-none" />
  </ul>
);
const LicensesPanel = () => (
  <ul className="list-none m-0 p-[2rem_0_2rem_0] xl:p-[2rem_38%_2rem_0] relative overflow-hidden xl:min-h-[195px]">
    {licensesItems.map(i => <SubItem key={i.label} {...i} />)}
    <CtaCard
      bg="radial-gradient(ellipse at 50% 40%, #0d1e3e 0%, #0a3c00 100%)"
      emoji="📋"
      title={<><div className="text-[0.8rem] tracking-[0.07em] mb-1">CITY PERMITS</div><div className="text-[1.05rem]">LICENSES & PERMITS</div></>}
    />
    <li className="clear-both block p-0 m-0 border-none" />
  </ul>
);
const SupportPanel = () => (
  <ul className="list-none m-0 p-[2rem_0_2rem_0] xl:p-[2rem_38%_2rem_0] relative overflow-hidden xl:min-h-[255px]">
    {supportItems.map(i => <SubItem key={i.label} {...i} />)}
    <CtaCard books
      bg="linear-gradient(145deg,#1a4a1a 0%,#0a2a0a 100%)"
      title={<><div className="text-[0.72rem] tracking-[0.07em] mb-1">COMMUNITY</div><div className="text-[0.95rem]">SUPPORT & RESOURCES</div></>}
    />
    <li className="clear-both block p-0 m-0 border-none" />
  </ul>
);

/* ─── LANGUAGE PANEL ─────────────────────────────────────────────────── */
const LangItem = ({ flag, label, code, changeLanguage }: any) => {
  const [h, setH] = useState(false);
  return (
    <li
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      onClick={() => changeLanguage(code, label)}
      className="md:w-[35%] float-none md:float-left list-none"
      style={{
        color: "#fff", margin: ".125rem 1rem", position: "relative",
        border: h ? "2px solid #9bc730" : "2px solid transparent",
        background: h ? "#072d00" : "transparent",
        transition: "background .18s, border-color .18s", cursor: "pointer",
      }}
    >
      <span className="block absolute left-[4px] top-[2px] text-[26px] w-[40px] leading-none">{flag}</span>
      <span className="block p-[10px_10px_10px_56px] text-[#fff] text-[1rem] font-normal font-[Poppins] whitespace-nowrap transition-colors duration-200">
        {label}
      </span>
    </li>
  );
};

export default function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [search, setSearch] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const timer = useRef<NodeJS.Timeout | null>(null);

  // Translation
  const [currentLang, setCurrentLang] = useState("English");
  const [isLargeFont, setIsLargeFont] = useState(false);
  const googleScriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    const fn = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const compressed = scrollY > 30;

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(null); setSearch(false);
      }
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  const enter = (key: string) => { if (timer.current) clearTimeout(timer.current); setOpen(key); setSearch(false); };
  const leave = () => { timer.current = setTimeout(() => setOpen(null), 140); };
  const dEnter = () => { if (timer.current) clearTimeout(timer.current); };
  const dLeave = () => { timer.current = setTimeout(() => setOpen(null), 140); };

  const menus = [
    { key: "services", label: "City Services", Panel: ServicesPanel },
    { key: "licenses", label: "Licenses & Permits", Panel: LicensesPanel },
    { key: "support", label: "Support & Resources", Panel: SupportPanel },
  ];
  const activeMenu = menus.find(m => m.key === open);

  const utilH = compressed ? 0 : 45;
  const mainH = compressed ? 56 : 80;

  // Language setup
  useEffect(() => {
    const updateCurrentLang = () => {
      if (window.location.hash === '#googtrans/en/en' || window.location.hash === '' || !window.location.hash.startsWith('#googtrans/en/')) {
        setCurrentLang("English");
        if (googleScriptRef.current && document.body.contains(googleScriptRef.current)) {
          document.body.removeChild(googleScriptRef.current);
          googleScriptRef.current = null;
        }
        const widget = document.getElementById('google_translate_element');
        if (widget) widget.innerHTML = '';
      } else {
        const langCode = window.location.hash.split('/')[2];
        const lang = languagesConfig.find(l => l.code === langCode);
        if (lang) {
          setCurrentLang(lang.label);
        }
        if (!googleScriptRef.current) {
          const script = document.createElement("script");
          script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
          script.async = true;
          document.body.appendChild(script);
          googleScriptRef.current = script;
          (window as any).googleTranslateElementInit = () => {
            new (window as any).google.translate.TranslateElement(
              {
                pageLanguage: "en",
                includedLanguages: languagesConfig.map(lang => lang.code).join(','),
                layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
              },
              "google_translate_element"
            );
          };
        }
      }
    };
    updateCurrentLang();
    window.addEventListener('hashchange', updateCurrentLang);
    return () => {
      window.removeEventListener('hashchange', updateCurrentLang);
      if (googleScriptRef.current && document.body.contains(googleScriptRef.current)) {
        document.body.removeChild(googleScriptRef.current);
        googleScriptRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    // Clear hash on navigation
    const currentPath = window.location.pathname
    const handleNavigation = () => {
      if (window.location.pathname !== currentPath) {
        window.location.hash = ''
      }
    }
    window.addEventListener('popstate', handleNavigation)
    const originalPushState = history.pushState
    history.pushState = function (...args) {
      originalPushState.apply(this, args)
      handleNavigation()
    }
    return () => {
      window.removeEventListener('popstate', handleNavigation)
      history.pushState = originalPushState
    }
  }, [])

  useEffect(() => {
    document.documentElement.style.fontSize = isLargeFont ? '120%' : '100%'
  }, [isLargeFont])

  const toggleLargeFont = () => setIsLargeFont(!isLargeFont);

  const changeLanguage = (langCode: string, langLabel: string) => {
    setCurrentLang(langLabel);
    setOpen(null); // Close the mega menu
    if (langCode === 'en') {
      window.location.hash = '';
      if (googleScriptRef.current && document.body.contains(googleScriptRef.current)) {
        document.body.removeChild(googleScriptRef.current);
        googleScriptRef.current = null;
      }
      const widget = document.getElementById('google_translate_element');
      if (widget) widget.innerHTML = '';
      window.location.reload();
    } else {
      window.location.hash = `#googtrans/en/${langCode}`;
      window.location.reload();
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,600;0,700;0,800&display=swap');
        
        @keyframes dropIn { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }

        .vs-util-link {
          color: rgba(255,255,255,0.82); font-size: 1.1rem; font-weight: 400;
          text-decoration: none; letter-spacing: 0.04em;
          font-family: "Poppins", Verdana, sans-serif;
          transition: color .2s; white-space: nowrap;
        }
        .vs-util-link:hover { color: #fff; }

        .vs-nl {
          font-size: 1.275rem;
          font-family: "Poppins", Verdana, sans-serif;
          font-weight: 200;
          color: #fff;
          text-decoration: none;
          display: inline-block;
          padding: .125rem 0;
          border-bottom: 6px solid transparent;
          transition: border-color .3s ease, font-size .2s ease, color .2s;
          background: none; border-left: none; border-right: none; border-top: none;
          cursor: pointer; white-space: nowrap;
        }
        .vs-nl.open, .vs-nl:hover { border-color: #9bc730; }
        .vs-nl.small { font-size: 1rem; }

        .vs-cta {
          color: #fff;
          background: linear-gradient(to right, #fff 50%, #447500 50%);
          background-size: 200% 100%; background-position: 100% 0;
          padding: .6rem .75rem; text-transform: uppercase;
          border: 2px solid #fff; font-size: 1rem!important; font-weight: 600;
          font-family: "Poppins", Verdana, sans-serif;
          text-decoration: none; cursor: pointer;
          transition: background-position .3s ease, color .3s ease;
          line-height: 1; display: inline-block; white-space: nowrap;
        }
        .vs-cta:hover { color: #0a3c00; background-position: 0 0; }
        .vs-cta.small { font-size: .875rem!important; padding: .45rem .6rem; }

        .vs-globe {
          background: none; border: none;
          border-right: 2px solid #8fac66;
          color: rgba(255,255,255,0.85); cursor: pointer;
          padding: .3rem .85rem; line-height: 1;
          display: flex; align-items: center;
          transition: color .2s;
        }
        .vs-globe:hover, .vs-globe.open { color: #9bc730; }

        .vs-search-btn {
          background: none; border: none; color: rgba(255,255,255,0.85);
          cursor: pointer; padding: 0 .9rem;
          display: flex; align-items: center; position: relative; top: 2px;
          transition: color .2s;
        }
        .vs-search-btn:hover { color: #9bc730; }
        
        .vs-font-btn {
          background: none; border: none;
          border-right: 2px solid #8fac66;
          color: rgba(255,255,255,0.85); cursor: pointer;
          padding: .3rem .85rem; line-height: 1;
          display: flex; align-items: center;
          transition: color .2s;
        }
        .vs-font-btn:hover { color: #9bc730; }
      `}</style>
      <div id="google_translate_element" style={{ display: 'none' }} />

      <div ref={wrapRef} className="sticky top-0 z-[1000] transition-shadow duration-300 w-full" style={{
        boxShadow: compressed || open ? "0 4px 24px rgba(0,0,0,0.4)" : "none",
        fontFamily: '"Poppins", Verdana, sans-serif',
      }}>
        {/* ── UTILITY BAR ── */}
        <div style={{
          background: "rgba(0,40,0,0.55)",
          overflow: "hidden",
          height: `${utilH}px`,
          opacity: compressed ? 0 : 1,
          transition: "height .35s cubic-bezier(0.4,0,0.2,1), opacity .25s ease",
          backdropFilter: "blur(4px)",
        }}>
          <div className="max-w-[90rem] mx-auto px-6 flex justify-end items-center h-[45px] gap-5">
            {utilityLinks.map(l => (
              <a key={l.label} href={l.href} className="vs-util-link">{l.label}</a>
            ))}
          </div>
        </div>

        {/* ── MAIN GREEN NAV BAR ── */}
        <div style={{
          background: "#447500",
          height: `${mainH}px`,
          transition: "height .35s cubic-bezier(0.4,0,0.2,1)",
          position: "relative",
        }}>
          <div className="absolute inset-0 bg-[#447500] z-0" />
          <div className="max-w-[90rem] mx-auto px-6 flex items-center h-full gap-0 relative z-10 transition-all duration-350">
            {/* LOGO */}
            <a href="/" className="flex items-center flex-shrink-0 text-white no-underline mr-2 transition-transform duration-350 transform-root" style={{
              transform: compressed ? "scale(0.88)" : "scale(1)",
              transformOrigin: "left center",
            }}>
              <div className="leading-none">
                <div style={{
                  fontSize: compressed ? "0.52rem" : "0.6rem",
                  letterSpacing: "0.28em", textTransform: "uppercase",
                  fontWeight: 400, opacity: 0.8, marginBottom: "1px",
                  transition: "font-size .35s",
                }}>THE CITY OF</div>
                <div style={{
                  fontSize: compressed ? "2rem" : "2.6rem",
                  fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 0.88,
                  fontFamily: '"Poppins",Verdana,sans-serif',
                  transition: "font-size .35s",
                }}>seattle</div>
              </div>
            </a>

            {/* MAIN NAV Desktop */}
            <nav className="hidden lg:flex items-end flex-1 pl-4">
              <ul className="list-none p-0 m-0 flex items-end flex-nowrap gap-0">
                {menus.map(({ key, label }) => (
                  <li key={key} className="inline-block pr-6">
                    <button
                      className={`vs-nl${open === key ? " open" : ""}${compressed ? " small" : ""}`}
                      onMouseEnter={() => enter(key)}
                      onMouseLeave={leave}
                    >
                      {label}
                    </button>
                  </li>
                ))}
                <li className="inline-block pr-6">
                  <a href="/login" className={`vs-cta${compressed ? " small" : ""}`}>Resident Portal</a>
                </li>
              </ul>
            </nav>

            <div className="flex lg:hidden flex-1 justify-end">
              <button
                className="vs-search-btn"
                onClick={() => { setOpen(open === "mobile" ? null : "mobile"); setSearch(false); }}
              >
                {open === "mobile" ? <X size={compressed ? 22 : 26} /> : <Menu size={compressed ? 22 : 26} />}
              </button>
            </div>

            {/* GLOBE | FONT | SEARCH */}
            <div className="hidden lg:flex items-center flex-shrink-0">
              <button
                className="vs-font-btn"
                onClick={toggleLargeFont}
                aria-label="Toggle large font"
                title="Toggle large font for better readability"
              >
                <Type size={compressed ? 18 : 20} />
              </button>
              <button
                className={`vs-globe${open === "lang" ? " open" : ""}`}
                onMouseEnter={() => enter("lang")}
                onMouseLeave={leave}
                aria-label="Languages"
              >
                <Ico id="globe" size={compressed ? 18 : 20} />
              </button>
              <button
                className="vs-search-btn"
                onClick={() => { setSearch(p => !p); setOpen(null); }}
                aria-label="Search"
              >
                <Ico id="search" size={compressed ? 19 : 22} />
              </button>
            </div>
          </div>
        </div>

        {/* ── MOBILE MENU DROPDOWN ── */}
        {open === "mobile" && (
          <div
            className="lg:hidden absolute top-full left-0 right-0 bg-[#0a3c00] z-[999]"
            style={{ animation: "dropIn .2s ease" }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {menus.map(({ key, label }) => (
                <a key={key} href="#" className="text-white text-lg py-2 border-b border-[#447500] font-light text-decoration-none"
                  onClick={(e) => { e.preventDefault(); setOpen(key); }}
                >
                  {label}
                </a>
              ))}
              <a href="/login" className="text-[#9bc730] font-bold text-lg py-2">Resident Portal</a>
              <div className="flex gap-4 pt-2">
                <button onClick={toggleLargeFont} className="text-white flex items-center gap-2">
                  <Type size={20} /> Font Size
                </button>
                <button onClick={() => setOpen("lang")} className="text-white flex items-center gap-2">
                  <Ico id="globe" size={20} /> Language
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── MAIN DROPDOWN (dark green) ── */}
        {open && open !== "lang" && open !== "mobile" && activeMenu && (
          <div
            onMouseEnter={dEnter}
            onMouseLeave={dLeave}
            className="absolute top-[100%] left-0 right-0 bg-[#0a3c00] z-[999]"
            style={{ animation: "dropIn .2s ease" }}
          >
            <div className="absolute inset-0 left-[-300%] w-[700%] bg-[#0a3c00] z-[-1]" />
            <div className="max-w-[90rem] mx-auto px-6 relative">
              {activeMenu.Panel && <activeMenu.Panel />}
            </div>
          </div>
        )}

        {/* ── LANGUAGE DROPDOWN ── */}
        {open === "lang" && (
          <div
            onMouseEnter={dEnter}
            onMouseLeave={dLeave}
            className="absolute top-[100%] left-0 right-0 bg-[#0a3c00] z-[1001] min-h-[240px]"
            style={{ animation: "dropIn .2s ease" }}
          >
            <div className="absolute inset-0 left-[-300%] w-[700%] bg-[#0a3c00] z-[-1]" />
            <div className="max-w-[90rem] mx-auto px-6 relative">
              <div className="relative min-h-[240px]">
                {/* CTA image */}
                <div className="hidden xl:block absolute top-[34px] left-[1rem] w-[260px] bottom-[34px] min-h-[160px]">
                  <a href="#" className="block h-full p-[7px_10px_7px_10px]">
                    <div className="relative w-full h-full min-h-[160px] rounded-[3px] overflow-hidden"
                      style={{ background: "linear-gradient(150deg, #0d1e3e 0%, #142040 100%)" }}>
                      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 80%, rgba(255,140,60,0.5) 0%, rgba(200,80,20,0.3) 30%, transparent 65%)" }} />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }} />
                      <svg viewBox="0 0 260 120" className="absolute bottom-0 left-0 right-0 w-full opacity-45">
                        <rect x="10" y="60" width="20" height="60" fill="#1a3a6a" />
                        <rect x="35" y="45" width="15" height="75" fill="#1a3a6a" />
                        <rect x="55" y="30" width="18" height="90" fill="#1a3a6a" />
                        <rect x="78" y="50" width="22" height="70" fill="#1a3a6a" />
                        <rect x="105" y="20" width="12" height="100" fill="#1a3a6a" />
                        <rect x="122" y="40" width="20" height="80" fill="#1a3a6a" />
                        <rect x="147" y="55" width="18" height="65" fill="#1a3a6a" />
                        <rect x="170" y="35" width="25" height="85" fill="#1a3a6a" />
                        <rect x="200" y="50" width="16" height="70" fill="#1a3a6a" />
                        <rect x="222" y="42" width="20" height="78" fill="#1a3a6a" />
                      </svg>
                      <div className="absolute bottom-[14px] left-[14px] text-white font-extrabold text-[0.9rem] uppercase leading-tight tracking-[0.04em] shadow-[0_1px_4px_rgba(0,0,0,0.5)] font-[Poppins]">
                        INTERNATIONAL<br />SUPPORT
                      </div>
                    </div>
                  </a>
                </div>
                {/* Language items on right */}
                <ul className="list-none m-0 p-[2rem_1rem_2rem_0] xl:p-[2rem_1rem_2rem_300px] overflow-hidden min-h-[240px]">
                  {languagesConfig.map(l => <LangItem key={l.label} {...l} changeLanguage={changeLanguage} />)}
                  <li className="clear-both block p-0 m-0 border-none" />
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ── SEARCH BAR ── */}
        {search && (
          <div className="absolute top-[100%] left-0 right-0 bg-[#0a3c00] p-[20px_10%] z-[998]" style={{ animation: "dropIn .2s ease" }}>
            <div className="absolute inset-0 left-[-300%] w-[700%] bg-[#0a3c00] z-[-1]" />
            <div className="max-w-[830px] mx-auto my-[1rem] border-2 border-white relative pr-[62px]">
              <input
                autoFocus
                type="text"
                placeholder="Search..."
                className="w-full p-[0.6rem_0.9rem] bg-[#0a3c00] border-none text-white font-normal text-[16px] outline-none font-[Poppins]"
              />
              <button
                className="absolute right-0 top-0 bottom-0 bg-[#0a3c00] border-none border-l-2 border-white p-[0.75rem_1.05rem] cursor-pointer text-[#9bc730] flex items-center transition-colors duration-200 hover:text-white"
              >
                <Ico id="search" size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
