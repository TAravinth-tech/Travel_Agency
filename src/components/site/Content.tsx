






import madurai from "@/assets/pkg-madurai.jpg";
import rameswaram from "@/assets/pkg-rameswaram.jpg";
import kanyakumari from "@/assets/pkg-kanyakumari.jpg";
import kodaikanal from "@/assets/pkg-kodaikanal.jpg";
import munnar from "@/assets/pkg-munnar.jpg";
import thekkady from "@/assets/Thekkady.png";
import ooty from "@/assets/pkg-ooty.jpg";
import coimbatore from "@/assets/coimbatore.png";
import trivandrum from "@/assets/Trivandrum.png";
import cochin from "@/assets/cochin.png";
import alleppey from "@/assets/alleppey.png";
import pondicherry from "@/assets/pondicherry.png";
import Tirupati from "@/assets/pkg-tirupathi.png";
import Bangalore from "@/assets/pkg-bangalore.png";



import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { Link } from "@/lib/router-shim";
import {
  BadgeIndianRupee,
  UserCheck,
  Sparkles,
  Clock,
  Headphones,
  Route,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Plus,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Facebook,
  Instagram,
  Send,
  User,
  Calendar,
} from "lucide-react";
import logo from "@/assets/logo.jpeg";
import { BUSINESS, NAV, waLink } from "@/lib/site";
import { Reveal, SectionHeading } from "./Reveal";
const FEATURES = [
  { icon: BadgeIndianRupee, title: "Affordable Pricing" },
  { icon: UserCheck, title: "Verified & Experienced Drivers" },
  { icon: Sparkles, title: "Clean & Sanitized Vehicles" },
  { icon: Clock, title: "On-Time Guarantee" },
  { icon: Headphones, title: "24/7 Availability" },
  { icon: Route, title: "Customized Itineraries" },
];

export function WhyUs() {
  return (
    <section className="bg-green-gradient py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow="Why Choose Us" title="Trusted On Every Route" light />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 60}>
              <div className="flex h-full items-center gap-4 rounded-2xl border border-gold/25 bg-[oklch(1_0_0/0.06)] p-5 backdrop-blur-sm transition-colors hover:border-gold/60">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold-gradient">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-base leading-snug" style={{ color: "var(--ivory)" }}>
                  {f.title}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Service Areas (new standalone section) ---------------- */

const AREAS = [
  {
    name: "Madurai",
    tagline: "Temple city day trips & local sightseeing",
    image: madurai,
  },
  {
    name: "Rameswaram",
    tagline: "Ramanathaswamy Temple & Pamban Bridge",
    image: rameswaram,
  },
  {
    name: "Kanyakumari",
    tagline: "Sunrise at the meeting of three seas",
    image: kanyakumari,
  },
  {
    name: "Kodaikanal",
    tagline: "Misty hills & lakeside drives",
    image: kodaikanal,
  },
  {
    name: "Munnar",
    tagline: "Tea gardens & rolling green hills",
    image: munnar,
  },
  {
    name: "Thekkady",
    tagline: "Periyar wildlife & spice plantations",
    image: thekkady,
  },
  {
    name: "Ooty",
    tagline: "Queen of hill stations, cool & scenic",
    image: ooty,
  },
  {
    name: "Coimbatore",
    tagline: "Gateway to the Nilgiris",
    image: coimbatore,
  },
  {
    name: "Trivandrum",
    tagline: "Kerala's capital, beaches & heritage",
    image: trivandrum,
  },
  {
    name: "Cochin",
    tagline: "Backwaters, colonial charm & coastline",
    image: cochin,
  },
  {
    name: "Alleppey",
    tagline: "Houseboats & tranquil backwaters",
    image: alleppey,
  },
   {
    name: "pondicherry",
    tagline: "French colonial architecture, yellow cafes",
    image: pondicherry,
  },
  {
    name: "Tirupati",
    tagline: "lush hills, Tirumala Venkateswara Temple",
    image: Tirupati,
  },
  {
    name: "Bangalore",
    tagline: "Garden City, modern skyline, tech parks",
    image: Bangalore,
  },
];



export function ServiceAreas() {
  return (
    <section id="service-areas" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Where We Drive"
          title="Our Service Areas"
          subtitle="From temple towns to hill stations, we cover every popular route across Tamil Nadu and Kerala."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((a, i) => (
            <Reveal key={a.name} delay={i * 60}>
              <div className="group overflow-hidden rounded-2xl border border-gold/30 bg-card shadow-soft transition-colors hover:border-gold/60">
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={a.image}
                    alt={`${a.name} tour route`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-display text-2xl text-primary">{a.name}</h3>

                  <p className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                    {a.tagline}
                  </p>

                  <a
                    href={waLink(`Hi, I'm interested in a trip to ${a.name}`)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 flex w-full items-center justify-center rounded-full border border-gold px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-gold-gradient sm:w-fit"
                  >
                    Plan This Route
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}





















const REVIEWS = [
  {
    name: "Ramesh Kumar",
    text: "Booked an Innova for our Rameswaram trip. Driver was punctual, polite and knew every temple timing. Vehicle was spotless.",
  },
  {
    name: "Priya Sundaram",
    text: "We did the Kodaikanal package with my parents. Smooth hill driving and very transparent pricing — no surprise charges.",
  },
  {
    name: "Ajith Balan",
    text: "Airport pickup at 2 AM and the cab was already waiting. This is the only travels I use in Madurai now.",
  },
  {
    name: "Lakshmi Narayanan",
    text: "Tempo Traveller for 16 of us to Munnar and Thekkady. Comfortable seats, great music system, wonderful driver anna.",
  },
  {
    name: "Mohammed Faizal",
    text: "Used them for my sister's wedding guest transport. Five cars, all on time, all decorated beautifully.",
  },
  {
    name: "Deepa Ravi",
    text: "The Navagraha temple tour was planned perfectly. They handled the route so we finished all nine before evening.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const go = (d: number) => setI((v) => (v + d + REVIEWS.length) % REVIEWS.length);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % REVIEWS.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading eyebrow="Guest Stories" title="What Our Travellers Say" />
        <div className="relative mt-12 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${i * 100}%)` }}
          >
            {REVIEWS.map((r) => (
              <div key={r.name} className="w-full shrink-0 px-1 sm:px-8">
                <figure className="relative rounded-2xl border border-gold/30 bg-card p-8 text-center shadow-soft">
                  <Quote className="mx-auto h-8 w-8 text-gold/60" />
                  <blockquote className="mt-4 text-base leading-relaxed text-foreground/85 sm:text-lg">
                    “{r.text}”
                  </blockquote>
                  <div className="mt-5 flex justify-center gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <figcaption className="mt-3 font-display text-lg text-primary">{r.name}</figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Previous review"
            onClick={() => go(-1)}
            className="grid h-10 w-10 place-items-center rounded-full border border-gold/50 text-primary transition-colors hover:bg-gold-gradient"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-1.5">
            {REVIEWS.map((r, idx) => (
              <button
                key={r.name}
                type="button"
                aria-label={`Go to review ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === i ? "w-6 bg-gold" : "w-2 bg-border"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next review"
            onClick={() => go(1)}
            className="grid h-10 w-10 place-items-center rounded-full border border-gold/50 text-primary transition-colors hover:bg-gold-gradient"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: "What services do you offer?",
    a: "Local city cabs, outstation trips, airport pickup and drop, temple tourism circuits, group tour packages and wedding car rentals across South India.",
  },
  {
    q: "What vehicles are available?",
    a: "Sedans (Etios / Dzire), SUVs (Innova and Innova Crysta), 12 and 18 seater Tempo Travellers and mini vans — all air-conditioned and regularly serviced.",
  },
  {
    q: "How is the fare calculated?",
    a: "A day rent covers up to 300 km, plus a per-kilometre fuel charge. Beyond 300 km a lower per-km rate applies. Toll, parking and hill station charges are extra at actuals.",
  },
  {
    q: "How far in advance should I book?",
    a: "Two to three days ahead is ideal, especially during festival season and weekends. Same-day bookings are usually possible — just call us.",
  },
  {
    q: "What is the cancellation policy?",
    a: "Cancellations made 24 hours before pickup are completely free. Later cancellations may attract a small driver allowance charge.",
  },
  {
    q: "How can I book a service?",
    a: "Use the booking form on this page to send details straight to our WhatsApp, message us directly, or call any of our three numbers.",
  },
  {
    q: "Which locations do you cover?",
    a: "Madurai, Rameswaram, Kanyakumari, Kodaikanal, Munnar, Thekkady, Ooty, Coimbatore, Trivandrum, Cochin, Alleppey and anywhere else across Tamil Nadu and Kerala.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-card py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading eyebrow="Good To Know" title="Frequently Asked Questions" />
        <div className="mt-10 space-y-3">
          {FAQS.map((f, idx) => {
            const isOpen = open === idx;
            return (
              <div
                key={f.q}
                className="overflow-hidden rounded-xl border border-border bg-background transition-colors hover:border-gold/50"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-display text-base text-primary sm:text-lg">{f.q}</span>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-gold-dark transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const SERVICE_OPTIONS = [
  "Local City Cab",
  "Outstation Trip",
  "Airport Pickup & Drop",
  "Temple Tourism",
  "Group Tour Package",
  "Tour Packages",
  "Other",
];

type ContactFormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  travelDate: string;
  message: string;
};

const INITIAL_FORM: ContactFormState = {
  name: "",
  phone: "",
  email: "",
  service: SERVICE_OPTIONS[0],
  travelDate: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState<ContactFormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update =
    (field: keyof ContactFormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
      if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
    };

  const validate = () => {
    const next: Partial<Record<keyof ContactFormState, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your name";
    if (!form.phone.trim()) {
      next.phone = "Please enter your phone number";
    } else if (!/^\d{10}$/.test(form.phone.replace(/\D/g, "").slice(-10))) {
      next.phone = "Enter a valid 10-digit phone number";
    }
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email address";
    }
    if (!form.message.trim()) next.message = "Tell us a little about your trip";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const buildMessage = () => {
    const lines = [
      `New enquiry from the website:`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      `Service: ${form.service}`,
      form.travelDate ? `Travel Date: ${form.travelDate}` : null,
      `Message: ${form.message}`,
    ].filter(Boolean);
    return lines.join("\n");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    window.open(waLink(buildMessage()), "_blank", "noreferrer");
    setSubmitted(true);
    setForm(INITIAL_FORM);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20";

  return (
    <section id="contact" className="motif py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Say Vanakkam"
          title="Contact & Location"
          subtitle="Tell us about your trip and we'll get back to you shortly."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {/* Business info */}
          <Reveal className="lg:col-span-2">
            <div className="h-full rounded-2xl border border-gold/40 bg-card p-7 shadow-soft">
              <h3 className="text-2xl">{BUSINESS.name}</h3>
              <p className="mt-1 text-sm text-gold-dark">{BUSINESS.tagline}</p>
              <div className="mt-6 space-y-4 text-sm">
                <p className="flex gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-gold-dark" />
                  <span className="text-muted-foreground">{BUSINESS.address}</span>
                </p>
                <div className="flex gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-gold-dark" />
                  <span className="flex flex-col gap-1">
                    {BUSINESS.phones.map((p) => (
                      <a key={p} href={`tel:+91${p}`} className="font-medium text-primary hover:text-gold-dark">
                        +91 {p}
                      </a>
                    ))}
                  </span>
                </div>
                <p className="flex gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-gold-dark" />
                  <a href={`mailto:${BUSINESS.email}`} className="text-muted-foreground hover:text-primary">
                    {BUSINESS.email}
                  </a>
                </p>
                <p className="flex gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-gold-dark" />
                  <span className="text-muted-foreground">{BUSINESS.hours}</span>
                </p>
              </div>
              <a
                href={waLink("Hi, I'm interested in your travel services")}
                target="_blank"
                rel="noreferrer"
                className="mt-7 flex w-fit items-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-primary transition-transform hover:scale-[1.03]"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>

              <div className="mt-7 overflow-hidden rounded-xl border border-gold/30">
                <iframe
                  title="Madurai Jashwitha Travels location map"
                  src="https://www.google.com/maps?q=Suriya%20Nagar%2C%20Madurai%20625007&output=embed"
                  loading="lazy"
                  className="h-48 w-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal delay={120} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="h-full rounded-2xl border border-gold/40 bg-card p-7 shadow-soft"
            >
              <h3 className="text-2xl text-primary">Send Us An Enquiry</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Fill in your trip details and we'll reply on WhatsApp or call you back.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gold-dark" />
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Your name"
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="phone" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gold-dark" />
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder="Number"
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    Email (optional)
                  </label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gold-dark" />
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="you@example.com"
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="travelDate" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    Travel Date (optional)
                  </label>
                  <div className="relative">
                    <Calendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gold-dark" />
                    <input
                      id="travelDate"
                      type="date"
                      value={form.travelDate}
                      onChange={update("travelDate")}
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="service" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={update("service")}
                    className={inputClass}
                  >
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Tell us your route, number of travellers, and preferred dates..."
                    className={`${inputClass} resize-none`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gold-gradient px-6 py-3.5 text-sm font-semibold text-primary transition-transform hover:scale-[1.02] sm:w-fit"
              >
                <Send className="h-4 w-4" /> Send Enquiry
              </button>

              {submitted && (
                <p className="mt-3 text-sm font-medium text-green-600">
                  Thanks! We've opened WhatsApp with your details — hit send to reach us.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const FOOTER_SERVICES = [
  "Local Packages",
  "Outstation Tours",
  "Airport Pickup & Drop",
  "Temple Tourism",
  "Group Tour Packages",
  "Tour Packages",
];

export function Footer() {
  return (
    <footer className="bg-green-gradient pt-16 pb-8">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src={logo}
            alt={`${BUSINESS.name} logo`}
            loading="lazy"
            width={140}
            height={112}
            className="h-25 w-auto rounded-lg bg-ivory/95 object-contain p-1"
          />
          <h3 className="mt-4 text-lg" style={{ color: "var(--ivory)" }}>
            {BUSINESS.name}
          </h3>
          <p className="mt-2 text-sm text-ivory/70">{BUSINESS.tagline}</p>
          <div className="mt-5 flex gap-3">
            {[
              { icon: Facebook, href: "#", label: "Facebook" },
              { icon: Instagram, href: "#", label: "Instagram" },
              { icon: MessageCircle, href: waLink("Hi, I'm interested in your travel services"), label: "WhatsApp" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full border border-gold/50 text-gold-light transition-colors hover:bg-gold hover:text-primary"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-base text-gold-light">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-ivory/75 transition-colors hover:text-gold-light">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-base text-gold-light">Our Services</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {FOOTER_SERVICES.map((s) => (
              <li key={s}>
                <Link to="/services" className="text-ivory/75 transition-colors hover:text-gold-light">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        <div>
          <h4 className="text-base text-gold-light">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-ivory/75">
            <li>{BUSINESS.address}</li>
            {BUSINESS.phones.map((p) => (
              <li key={p}>
                <a href={`tel:+91${p}`} className="transition-colors hover:text-gold-light">
                  +91 {p}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${BUSINESS.email}`} className="transition-colors hover:text-gold-light">
                {BUSINESS.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl px-4">
        <div className="h-px w-full bg-[linear-gradient(90deg,transparent,var(--gold),transparent)]" />
        <p className="pt-6 text-center text-xs text-ivory/60">
          © 2026 {BUSINESS.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}











































