import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import hero from "@/assets/hero.jpg";
import cardio from "@/assets/cardio.jpg";
import group from "@/assets/group.jpg";
import strength from "@/assets/strength.jpg";

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
  ["Yoga & Stretching", "Mobility, flexibility and recovery sessions."],
  ["Fitness Coaching", "Guided workouts with supportive trainers."],
  ["Weight Loss", "Structured programs to reach a healthier weight."],
  ["Strength Programs", "Progressive plans to get measurably stronger."],
];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function Btn({ href, children, wa }: { href: string; children: React.ReactNode; wa?: boolean }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-sm px-6 py-4 text-sm font-extrabold uppercase tracking-widest transition hover:-translate-y-0.5 ${
        wa ? "bg-whatsapp text-whatsapp-foreground" : "bg-primary text-primary-foreground shadow-glow"
      }`}
    >
      {children}
    </a>
  );
}

function Index() {
  return (
    <main className="overflow-x-hidden pb-20 md:pb-0">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="font-display text-xl tracking-wide">
            THE <span className="text-primary">IRON</span> GYM
          </a>
          <nav className="hidden gap-8 text-xs font-bold uppercase tracking-widest text-muted-foreground md:flex">
            <a href="#programs" className="hover:text-foreground">Programs</a>
            <a href="#plans" className="hover:text-foreground">Membership</a>
            <a href="#visit" className="hover:text-foreground">Visit</a>
          </nav>
          <a href={`tel:${PHONE}`} className="rounded-sm border border-primary px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary">
            Call
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-[100svh] items-end">
        <img src={hero} alt="Barbell loaded on a squat rack inside THE IRON GYM" width={1088} height={1600} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-fade" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-32">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-primary">Wadgaon Sheri · Pune</p>
          <h1 className="font-display text-[19vw] leading-[0.85] uppercase md:text-[10rem]">
            Forge
            <br />
            <span className="text-outline">your</span> Iron
          </h1>
          <p className="mt-6 max-w-md text-muted-foreground">
            A neighbourhood gym with serious equipment, supportive trainers and honest prices. Built for beginners and lifters alike.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Btn href={`${WA}?text=${encodeURIComponent("Hi! I'd like to book a free trial at THE IRON GYM.")}`} wa>WhatsApp Us</Btn>
            <Btn href="#enquire">Book Free Trial</Btn>
          </div>
          <div className="mt-10 flex items-center gap-4 border-t border-border pt-6">
            <span className="font-display text-5xl">4.8</span>
            <div className="text-sm">
              <div className="tracking-widest text-primary">★★★★★</div>
              <div className="text-muted-foreground">~563 Google reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="border-y border-border bg-primary py-3 text-primary-foreground">
        <div className="flex gap-10 whitespace-nowrap font-display text-xl uppercase tracking-wider">
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i}>Strength ✦ Cardio ✦ Zumba ✦ Yoga ✦ Aerobics ✦ Coaching ✦</span>
          ))}
        </div>
      </div>

      {/* Programs */}
      <section id="programs" className="mx-auto max-w-6xl px-5 py-24">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">What we train</p>
        <h2 className="mt-3 font-display text-5xl uppercase md:text-7xl">Programs</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {programs.map((p) => (
            <article key={p.n} className="group relative overflow-hidden rounded-sm border border-border bg-card">
              <img src={p.img} alt={p.t} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
              <div className="p-6">
                <span className="font-display text-primary">{p.n}</span>
                <h3 className="mt-1 font-display text-2xl uppercase">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-4">
          {more.map(([t, d]) => (
            <div key={t} className="bg-background p-6">
              <h3 className="font-display text-lg uppercase">{t}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-2">
          <h2 className="font-display text-5xl uppercase leading-none md:text-7xl">
            No ego.
            <br />
            <span className="text-primary">Just work.</span>
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <p>Members describe THE IRON GYM as affordable, welcoming and backed by trainers who genuinely help. Whether you're a student, a working professional or just starting out — you belong here.</p>
            <ul className="grid gap-3 text-sm text-foreground">
              {["Beginner friendly guidance", "Weight-management support", "Group classes & free weights", "Open 6 AM – 10 PM, Mon–Sat"].map((x) => (
                <li key={x} className="flex items-center gap-3 border-b border-border pb-3">
                  <span className="h-2 w-2 bg-primary" /> {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="mx-auto max-w-6xl px-5 py-24">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Membership</p>
        <h2 className="mt-3 font-display text-5xl uppercase md:text-7xl">Pick your plan</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            ["Monthly", "Try the full gym, no long commitment."],
            ["Quarterly", "Three months to build a real habit.", true],
            ["Annual", "Best value for the committed."],
          ].map(([t, d, hot]) => (
            <div key={t as string} className={`rounded-sm border p-8 ${hot ? "border-primary bg-card shadow-glow" : "border-border"}`}>
              {hot && <span className="text-xs font-bold uppercase tracking-widest text-primary">Most popular</span>}
              <h3 className="mt-2 font-display text-3xl uppercase">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              <p className="mt-6 font-display text-2xl">Call for pricing</p>
              <a href={`${WA}?text=${encodeURIComponent(`Hi! Please share the ${t} membership fee.`)}`} target="_blank" rel="noreferrer" className="mt-6 block border border-border py-3 text-center text-xs font-bold uppercase tracking-widest hover:border-primary hover:text-primary">
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
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Visit us</p>
          <h2 className="mt-3 font-display text-5xl uppercase">Find the iron</h2>
          <p className="mt-6 text-muted-foreground">{ADDRESS}</p>
          <div className="mt-8 divide-y divide-border border-y border-border text-sm">
            {days.map((d) => (
              <div key={d} className="flex justify-between py-3"><span>{d}</span><span className="text-muted-foreground">6:00 AM – 10:00 PM</span></div>
            ))}
            <div className="flex justify-between py-3"><span>Sunday</span><span className="text-muted-foreground">Call to confirm</span></div>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Btn href={MAPS}>Get Directions</Btn>
            <Btn href={`tel:${PHONE}`}>+91 96890 48613</Btn>
          </div>
        </div>
        <iframe
          title="THE IRON GYM on Google Maps"
          src="https://www.google.com/maps?q=THE+IRON+GYM+Wadgaon+Sheri+Pune&output=embed"
          className="h-96 w-full rounded-sm border border-border grayscale md:h-full"
          loading="lazy"
        />
      </section>

      <footer className="border-t border-border px-5 py-10 text-center text-xs text-muted-foreground">
        <p className="font-display text-2xl text-foreground">THE <span className="text-primary">IRON</span> GYM</p>
        <p className="mt-2">Wadgaon Sheri, Pune · © {new Date().getFullYear()}</p>
      </footer>

      {/* Mobile sticky bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 md:hidden">
        <a href={`tel:${PHONE}`} className="bg-primary py-4 text-center text-sm font-extrabold uppercase tracking-widest text-primary-foreground">Call</a>
        <a href={WA} target="_blank" rel="noreferrer" className="bg-whatsapp py-4 text-center text-sm font-extrabold uppercase tracking-widest text-whatsapp-foreground">WhatsApp</a>
      </div>
      <a href={WA} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-whatsapp font-extrabold text-whatsapp-foreground shadow-glow md:flex">WA</a>
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
  const input = "w-full rounded-sm border border-input bg-background px-4 py-4 text-sm outline-none focus:border-primary";
  return (
    <section id="enquire" className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-24 md:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Start today</p>
          <h2 className="mt-3 font-display text-5xl uppercase md:text-7xl">Claim your free trial</h2>
          <p className="mt-4 text-muted-foreground">Send your details and our team will reply on WhatsApp.</p>
        </div>
        <form onSubmit={submit} className="space-y-4">
          <input required maxLength={60} placeholder="Your name" className={input} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input required type="tel" pattern="[0-9+ ]{10,15}" placeholder="Phone number" className={input} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <select className={input} value={form.goal} onChange={(e) => setForm({ ...form, goal: e.target.value })}>
            {["Free trial", "Membership", "Strength training", "Weight loss", "Zumba / Aerobics", "Yoga"].map((o) => <option key={o}>{o}</option>)}
          </select>
          <button className="w-full rounded-sm bg-primary py-4 text-sm font-extrabold uppercase tracking-widest text-primary-foreground shadow-glow">Send Enquiry</button>
        </form>
      </div>
    </section>
  );
}
