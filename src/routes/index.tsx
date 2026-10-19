import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import hero from "@/assets/hero.jpg";
import cardio from "@/assets/cardio.jpg";
import group from "@/assets/group.jpg";
import strength from "@/assets/strength.jpg";
import logo from "@/assets/logo.png";
import mark from "@/assets/logo-mark.png";

const PHONE = "+919689048613";
const WA = "https://wa.me/919689048613";
const MAPS = "https://www.google.com/maps/search/?api=1&query=THE+IRON+GYM+Wadgaon+Sheri+Pune";
const ADDRESS =
  "S. No. 50/11, Kanaskar Bldg, Mahadeonagar, Old Mundhwa Road, near Bollywood Cinema, Wadgaon Sheri, Pune, Maharashtra 411014";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "THE IRON GYM — Strength & Fitness in Wadgaon Sheri, Pune" },
      {
        name: "description",
        content:
          "Strength training, cardio, Zumba, yoga and coaching at THE IRON GYM, Wadgaon Sheri, Pune. Rated 4.8 on Google. Book a free trial today.",
      },
      { property: "og:title", content: "THE IRON GYM — Wadgaon Sheri, Pune" },
      { property: "og:description", content: "Forge your strongest self. Strength, cardio, Zumba, yoga & coaching." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const programs = [
  { n: "01", t: "Strength & Weights", d: "Racks, barbells, dumbbells and machines for serious lifting.", img: strength },
  { n: "02", t: "Cardio & Fitness", d: "Treadmills, cycles and conditioning to build your engine.", img: cardio },
  { n: "03", t: "Zumba & Aerobics", d: "High-energy group sessions that make sweating fun.", img: group },
];
const more = [
  ["Yoga & Stretching", "Mobility, flexibility and recovery."],
  ["Fitness Coaching", "Guided workouts with supportive trainers."],
  ["Weight Loss", "Structured plans for a healthier you."],
  ["Strength Programs", "Progressive plans to get stronger."],
];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function Btn({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "wa" | "ghost" }) {
  const styles = {
    primary: "bg-primary text-primary-foreground shadow-glow",
    wa: "bg-whatsapp text-whatsapp-foreground",
    ghost: "border border-foreground/30 text-foreground hover:bg-foreground hover:text-background",
  }[variant];
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-bold transition hover:-translate-y-0.5 ${styles}`}
    >
      {children}
    </a>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">{children}</p>;
}

function Index() {
  return (
    <main className="overflow-x-hidden pb-20 md:pb-0">
      <header className="fixed inset-x-0 top-3 z-40 px-3">
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-border bg-background/80 py-2 pl-2 pr-2 backdrop-blur-md">
          <a href="#top" className="flex items-center gap-2">
            <img src={mark} alt="THE IRON GYM logo" width={40} height={40} className="h-10 w-10" />
            <span className="text-sm font-extrabold tracking-[0.2em]">THE IRON GYM</span>
          </a>
          <nav className="hidden gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#programs" className="hover:text-foreground">Programs</a>
            <a href="#plans" className="hover:text-foreground">Membership</a>
            <a href="#visit" className="hover:text-foreground">Visit</a>
          </nav>
          <a href={`tel:${PHONE}`} className="rounded-full bg-secondary px-5 py-2.5 text-xs font-bold text-secondary-foreground">
            Call us
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-6xl px-4 pt-24">
        <div className="relative overflow-hidden rounded-[2rem]">
          <img src={hero} alt="Barbell loaded on a squat rack inside THE IRON GYM" width={1088} height={1600} className="h-[78svh] w-full object-cover md:h-[82vh]" />
          <div className="absolute inset-0 bg-fade" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-secondary-foreground md:p-12">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] opacity-80">Wadgaon Sheri · Pune</p>
            <h1 className="font-display text-6xl leading-[0.9] md:text-9xl">
              Strength,
              <br />
              <em className="text-primary">beautifully</em> built.
            </h1>
            <p className="mt-5 max-w-md text-sm opacity-85 md:text-base">
              A neighbourhood gym with serious equipment, supportive trainers and honest prices — for beginners and lifters alike.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Btn href="#enquire">Book a free trial</Btn>
              <Btn href={`${WA}?text=${encodeURIComponent("Hi! I'd like to book a free trial at THE IRON GYM.")}`} variant="wa">WhatsApp us</Btn>
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3 text-center">
          {[["4.8★", "Google rating"], ["563+", "Reviews"], ["6–10", "Open daily"]].map(([a, b]) => (
            <div key={b} className="rounded-2xl bg-card py-5">
              <div className="font-display text-4xl">{a}</div>
              <div className="text-xs text-muted-foreground">{b}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="mx-auto max-w-6xl px-5 py-24">
        <Eyebrow>What we train</Eyebrow>
        <h2 className="mt-3 font-display text-5xl md:text-7xl">Programs for <em className="text-primary">every</em> body</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {programs.map((p) => (
            <article key={p.n} className="group overflow-hidden rounded-3xl bg-card">
              <div className="overflow-hidden">
                <img src={p.img} alt={p.t} loading="lazy" width={1024} height={768} className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-primary">{p.n}</span>
                <h3 className="mt-1 font-display text-3xl">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {more.map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-border p-5">
              <h3 className="font-display text-2xl">{t}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-2 md:items-center">
          <div>
            <img src={logo} alt="THE IRON GYM logo" loading="lazy" width={1024} height={1024} className="mb-8 h-24 w-24 rounded-full bg-background object-contain p-1" />
            <h2 className="font-display text-6xl leading-none md:text-8xl">
              No ego.
              <br />
              <em className="text-primary">Just work.</em>
            </h2>
          </div>
          <div className="space-y-6">
            <p className="opacity-80">Members describe THE IRON GYM as affordable, welcoming and backed by trainers who genuinely help. Student, professional or total beginner — you belong here.</p>
            <ul className="grid gap-3 text-sm">
              {["Beginner friendly guidance", "Weight-management support", "Group classes & free weights", "Open 6 AM – 10 PM, Mon–Sat"].map((x) => (
                <li key={x} className="flex items-center gap-3 border-b border-secondary-foreground/15 pb-3">
                  <span className="h-2 w-2 rounded-full bg-primary" /> {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="mx-auto max-w-6xl px-5 py-24">
        <Eyebrow>Membership</Eyebrow>
        <h2 className="mt-3 font-display text-5xl md:text-7xl">Pick your <em className="text-primary">plan</em></h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            ["Monthly", "Try the full gym, no long commitment."],
            ["Quarterly", "Three months to build a real habit.", true],
            ["Annual", "Best value for the committed."],
          ].map(([t, d, hot]) => (
            <div key={t as string} className={`rounded-3xl p-8 ${hot ? "bg-primary text-primary-foreground shadow-glow" : "bg-card"}`}>
              {hot && <span className="rounded-full bg-primary-foreground/20 px-3 py-1 text-xs font-bold">Most popular</span>}
              <h3 className="mt-4 font-display text-5xl">{t}</h3>
              <p className={`mt-2 text-sm ${hot ? "opacity-85" : "text-muted-foreground"}`}>{d}</p>
              <p className="mt-8 text-sm font-bold">Call for pricing</p>
              <a href={`${WA}?text=${encodeURIComponent(`Hi! Please share the ${t} membership fee.`)}`} target="_blank" rel="noreferrer" className={`mt-4 block rounded-full py-3 text-center text-sm font-bold ${hot ? "bg-background text-foreground" : "bg-secondary text-secondary-foreground"}`}>
                Ask on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </section>

      <Enquiry />

      {/* Visit */}
      <section id="visit" className="mx-auto grid max-w-6xl gap-10 px-5 py-24 md:grid-cols-2">
        <div>
          <Eyebrow>Visit us</Eyebrow>
          <h2 className="mt-3 font-display text-5xl md:text-6xl">Come say <em className="text-primary">hello</em></h2>
          <p className="mt-6 text-muted-foreground">{ADDRESS}</p>
          <div className="mt-8 divide-y divide-border border-y border-border text-sm">
            {days.map((d) => (
              <div key={d} className="flex justify-between py-3"><span>{d}</span><span className="text-muted-foreground">6:00 AM – 10:00 PM</span></div>
            ))}
            <div className="flex justify-between py-3"><span>Sunday</span><span className="text-muted-foreground">Call to confirm</span></div>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Btn href={MAPS}>Get directions</Btn>
            <Btn href={`tel:${PHONE}`} variant="ghost">+91 96890 48613</Btn>
          </div>
        </div>
        <iframe
          title="THE IRON GYM on Google Maps"
          src="https://www.google.com/maps?q=THE+IRON+GYM+Wadgaon+Sheri+Pune&output=embed"
          className="h-96 w-full rounded-3xl border border-border md:h-full"
          loading="lazy"
        />
      </section>

      <footer className="border-t border-border px-5 py-12 text-center text-xs text-muted-foreground">
        <img src={logo} alt="THE IRON GYM logo" loading="lazy" width={1024} height={1024} className="mx-auto h-28 w-28 object-contain" />
        <p className="mt-2">Wadgaon Sheri, Pune · © {new Date().getFullYear()}</p>
      </footer>

      {/* Mobile sticky bar */}
      <div className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-2 gap-2 md:hidden">
        <a href={`tel:${PHONE}`} className="rounded-full bg-secondary py-4 text-center text-sm font-bold text-secondary-foreground">Call</a>
        <a href={WA} target="_blank" rel="noreferrer" className="rounded-full bg-whatsapp py-4 text-center text-sm font-bold text-whatsapp-foreground">WhatsApp</a>
      </div>
      <a href={WA} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-whatsapp font-bold text-whatsapp-foreground shadow-glow md:flex">WA</a>
    </main>
  );
}

function Enquiry() {
  const [form, setForm] = useState({ name: "", phone: "", goal: "Free trial" });
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const msg = `Hi THE IRON GYM! Name: ${form.name}. Phone: ${form.phone}. Interested in: ${form.goal}.`;
    window.open(`${WA}?text=${encodeURIComponent(msg)}`, "_blank");
  };
  const input = "w-full rounded-2xl border border-input bg-background px-5 py-4 text-sm outline-none focus:border-primary";
  return (
    <section id="enquire" className="px-4">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] bg-card px-6 py-16 md:grid-cols-2 md:px-12">
        <div>
          <Eyebrow>Start today</Eyebrow>
          <h2 className="mt-3 font-display text-5xl md:text-7xl">Claim your <em className="text-primary">free</em> trial</h2>
          <p className="mt-4 text-muted-foreground">Send your details and our team will reply on WhatsApp.</p>
        </div>
        <form onSubmit={submit} className="space-y-4">
          <input required maxLength={60} placeholder="Your name" className={input} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input required type="tel" pattern="[0-9+ ]{10,15}" placeholder="Phone number" className={input} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <select className={input} value={form.goal} onChange={(e) => setForm({ ...form, goal: e.target.value })}>
            {["Free trial", "Membership", "Strength training", "Weight loss", "Zumba / Aerobics", "Yoga"].map((o) => <option key={o}>{o}</option>)}
          </select>
          <button className="w-full rounded-full bg-primary py-4 text-sm font-bold text-primary-foreground shadow-glow">Send enquiry</button>
        </form>
      </div>
    </section>
  );
}
