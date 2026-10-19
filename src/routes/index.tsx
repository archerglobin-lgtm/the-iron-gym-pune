import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowUpRight, ArrowRight, Menu, X, Phone, MessageCircle, Star, MoveDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/athlete-editorial.jpg";
import cardio from "@/assets/cardio.jpg";
import group from "@/assets/group.jpg";
import strength from "@/assets/strength.jpg";
import mark from "@/assets/logo-mark.png";

const PHONE = "+919689048613";
const WA = "https://wa.me/919689048613";
const MAPS = "https://www.google.com/maps/search/?api=1&query=THE+IRON+GYM+Wadgaon+Sheri+Pune";
const ADDRESS = "S. No. 50/11, Kanaskar Bldg, Mahadeonagar, Old Mundhwa Road, near Bollywood Cinema, Wadgaon Sheri, Pune, Maharashtra 411014";
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "THE IRON GYM — Training & Fitness in Pune" },
    { name: "description", content: "Find your strength at THE IRON GYM in Wadgaon Sheri, Pune. Explore strength training, cardio, Zumba, yoga and membership. Enquire about a free trial." },
    { property: "og:title", content: "THE IRON GYM — Training & Fitness in Pune" },
    { property: "og:description", content: "Your neighbourhood. Your gym. Strength, cardio and fitness coaching in Wadgaon Sheri, Pune." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }), component: Index,
});
const programs = [
  { n: "01", t: "Strength & weights", d: "Racks, barbells, dumbbells and machines for serious lifting.", img: strength },
  { n: "02", t: "Cardio & fitness", d: "Treadmills, cycles and conditioning to build your engine.", img: cardio },
  { n: "03", t: "Zumba & aerobics", d: "High-energy group sessions that make sweating fun.", img: group },
];
const more = [ ["Yoga & stretching", "Mobility, flexibility and recovery."], ["Fitness coaching", "Guided workouts with supportive trainers."], ["Weight loss", "Structured plans for a healthier you."], ["Strength programs", "Progressive plans to get stronger."] ];
function Action({ href, children, outline = false, className = "" }: { href: string; children: ReactNode; outline?: boolean; className?: string }) {
  return <Button asChild variant={outline ? "outline" : "default"} className={`action ${className}`}><a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{children}<span className="action-arrow"><ArrowUpRight size={17} /></span></a></Button>;
}
function Label({ children }: { children: ReactNode }) { return <p className="section-label">{children}</p>; }
function Index() {
  const [menu, setMenu] = useState(false);
  return <main className="pb-20 md:pb-0">
    <section id="top" className="hero-section">
      <img src={hero} alt="Monochrome editorial photograph of an athlete in motion" width={1920} height={1088} className="hero-image" />
      <div className="hero-shade" />
      <header className="site-header">
        <a href="#top" className="brand"><img src={mark} width={44} height={44} alt="THE IRON GYM logo" /><span>THE IRON<br />GYM<span className="brand-dot">.</span></span></a>
        <p className="header-location">Wadgaon Sheri<br />Pune, India</p>
        <nav className="hidden items-center gap-7 text-xs md:flex"><a href="#programs">Programs</a><a href="#plans">Membership</a><a href="#visit">Contact</a></nav>
        <div className="flex items-center gap-3"><Action href="#enquire" className="header-action">Join now</Action><Button variant="ghost" size="icon" aria-label={menu ? "Close menu" : "Open menu"} onClick={() => setMenu(!menu)} className="md:hidden">{menu ? <X /> : <Menu />}</Button></div>
      </header>
      {menu && <nav className="mobile-menu">{[["Programs", "programs"], ["Membership", "plans"], ["Contact", "visit"]].map(([text, id]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>{text}<ArrowUpRight size={20} /></a>)}</nav>}
      <div className="hero-content">
        <p className="hero-eyebrow">Your neighbourhood. Your gym.</p>
        <h1>THE IRON<br /><span>GYM</span><span className="hero-period">.</span></h1>
        <div className="hero-bottom"><p>Train with purpose.<br />Build strength that stays with you.</p><div className="hero-rating"><Star size={17} className="text-primary" /><strong>4.8/5</strong><span>Google rating*</span></div><a href="#about" className="scroll-link" aria-label="Discover the gym"><MoveDown size={22} /></a></div>
      </div>
    </section>

    <section id="about" className="section-shell intro-section">
      <div className="intro-top"><Label>[ The mindset — 01 ]</Label><p className="intro-statement">Serious training.<br />Supportive people.<br /><span className="text-muted-foreground">A stronger version of you.</span></p></div>
      <div className="intro-grid"><div className="intro-photo"><img src={strength} width={1024} height={768} loading="lazy" alt="Strength training equipment" /><span>Where strength meets discipline.</span></div><div className="intro-copy"><h2>No ego.<br />Just work.</h2><p>A neighbourhood gym with serious equipment and supportive trainers. Student, professional or total beginner — you belong here.</p><Action href="#enquire">Book a free trial</Action></div><div className="intro-facts"><div><strong>4.8<span>★</span></strong><p>Google rating*</p></div><div><strong>06–22</strong><p>Mon–Sat · 6 AM to 10 PM</p></div><p className="rating-note">*Rating and approximately 563 reviews from the supplied listing; current figures may vary.</p></div></div>
    </section>

    <section id="programs" className="section-shell programs-section"><div className="section-heading"><Label>[ Training — 02 ]</Label><h2>TRAINING<br />PROGRAMS</h2><Action href="#enquire">Find your program</Action></div><div className="program-grid">{programs.map(p => <article key={p.n} className="program-card"><div className="program-image"><img src={p.img} width={1024} height={768} loading="lazy" alt={p.t} /><span className="program-number">/{p.n}</span></div><div className="program-body"><h3>{p.t}</h3><p>{p.d}</p><Button asChild variant="ghost" size="icon" className="program-link"><a href={`${WA}?text=${encodeURIComponent(`Hi! I'd like to know more about ${p.t}.`)}`} target="_blank" rel="noreferrer" aria-label={`Enquire about ${p.t}`}><ArrowUpRight /></a></Button></div></article>)}</div><div className="more-programs">{more.map(([title, description], i) => <div key={title}><span className="text-primary text-xs">/0{i + 4}</span><h3>{title}</h3><p>{description}</p></div>)}</div></section>

    <section className="mindset-band"><div className="section-shell"><Label>[ Built through consistency ]</Label><h2>SHOW UP.<br />GET STRONGER<span>.</span></h2><div className="mindset-bottom"><p>Beginner-friendly guidance. Weight-management support.<br />Group classes and free weights. Your next chapter starts here.</p><Action href="#enquire" outline>Let's get started</Action></div></div></section>

    <section id="plans" className="section-shell"><div className="section-heading"><Label>[ Membership — 03 ]</Label><h2>YOUR GOALS.<br />YOUR PLAN.</h2></div><div className="plans-grid">{[["Monthly", "Try the full gym, no long commitment."], ["Quarterly", "Three months to build a real habit."], ["Annual", "A full year of showing up for yourself."]].map(([title, desc], i) => <article key={title} className={`plan-card ${i === 1 ? "plan-featured" : ""}`}><div className="flex justify-between text-xs"><span>/0{i + 1}</span><ArrowUpRight size={21} /></div><h3>{title}</h3><p>{desc}</p><div className="plan-price">Call for pricing</div><Action href={`${WA}?text=${encodeURIComponent(`Hi! Please share the ${title} membership fee.`)}`} outline>Ask on WhatsApp</Action></article>)}</div></section>
    <Enquiry />
    <section id="visit" className="section-shell visit-grid"><div><Label>[ Find us — 05 ]</Label><h2>SEE YOU<br />AT THE GYM.</h2><p className="address">{ADDRESS}</p><div className="hours"><div><span>Monday–Saturday</span><strong>6:00 AM – 10:00 PM</strong></div><div><span>Sunday</span><strong>Call to confirm</strong></div></div><div className="flex flex-wrap gap-3 mt-7"><Action href={MAPS}>Get directions</Action><Action href={`tel:${PHONE}`} outline>Call us</Action></div></div><iframe title="THE IRON GYM on Google Maps" src="https://www.google.com/maps?q=THE+IRON+GYM+Wadgaon+Sheri+Pune&output=embed" loading="lazy" className="gym-map" /></section>
    <footer className="site-footer"><div className="section-shell"><div className="footer-top"><a href="#top" className="brand"><img src={mark} width={44} height={44} alt="THE IRON GYM logo" /><span>THE IRON GYM.</span></a><a href={`tel:${PHONE}`}>+91 96890 48613 <ArrowUpRight size={15} /></a></div><div className="footer-bottom"><span>Wadgaon Sheri, Pune</span><span>© {new Date().getFullYear()} THE IRON GYM</span><a href="#top">Back to top ↑</a></div></div></footer>
    <div className="mobile-contact"><Button asChild variant="secondary"><a href={`tel:${PHONE}`}><Phone size={16} />Call</a></Button><Button asChild><a href={WA} target="_blank" rel="noreferrer"><MessageCircle size={16} />WhatsApp</a></Button></div>
  </main>;
}
function Enquiry() {
  const [form, setForm] = useState({ name: "", phone: "", goal: "Free trial" });
  const submit = (e: FormEvent) => { e.preventDefault(); const msg = `Hi THE IRON GYM! Name: ${form.name}. Phone: ${form.phone}. Interested in: ${form.goal}.`; window.open(`${WA}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer"); };
  return <section id="enquire" className="enquiry-band"><div className="section-shell enquiry-grid"><div><Label>[ Your first step — 04 ]</Label><h2>START<br />SOMETHING<br />STRONG.</h2><p>Book your free trial at THE IRON GYM.</p></div><form onSubmit={submit}><label htmlFor="name">Your name</label><input id="name" required maxLength={60} placeholder="Full name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /><label htmlFor="phone">Phone number</label><input id="phone" required type="tel" pattern="[0-9+ ]{10,15}" placeholder="Your phone number" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} /><label htmlFor="goal">I'm interested in</label><select id="goal" value={form.goal} onChange={e => setForm({ ...form, goal: e.target.value })}>{["Free trial", "Membership", "Strength training", "Weight loss", "Zumba / Aerobics", "Yoga"].map(o => <option key={o}>{o}</option>)}</select><Button type="submit" className="enquiry-submit">Send enquiry <ArrowUpRight size={19} /></Button><p className="text-xs text-muted-foreground mt-4">Continue on WhatsApp to send your enquiry.</p></form></div></section>;
}
