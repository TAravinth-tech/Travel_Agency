import { ShieldCheck, Clock, Users, MapPin, Award } from "lucide-react";
import aboutImg from "@/assets/about2.png";
import carSedan from "@/assets/car-sedan.jpg";
import carSuv from "@/assets/crysta.png";
import Ertiga from "@/assets/kia.png";
import Innova from "@/assets/car3.png";
import Innova1 from "@/assets/innova.png";
import { BUSINESS } from "@/lib/site";
import { Reveal, SectionHeading } from "./Reveal";

const BADGES = [
  { icon: ShieldCheck, label: "Verified Drivers" },
  { icon: Clock, label: "24/7 Availability" },
  { icon: Users, label: "Family Friendly" },
  { icon: MapPin, label: "Tamil Nadu & Kerala" },
];

const OUR_VEHICLES = [
  { img: carSedan, name: "Sedan (Etios / Dzire)" },
  { img: carSuv, name: "Innova Crysta" },
  { img: Innova, name: "Tempo Traveller" },
  { img: Ertiga, name: "Ertiga / Kia Carens" },
  { img: Innova1, name: "Innova" },
];

export function About() {
  return (
    <section id="about" className="motif py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.28em] text-gold-dark uppercase">
            About Us
          </p>
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
            Madurai&apos;s most trusted travel partner for every journey
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            The main aim of our company is to make sure that each journey is easy, pleasant, and enjoyable for our customers with reasonable prices, personalized services and round the clock support. Every traveler should enjoy the comfort of our travel services no matter where he travels.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Madurai Jashwitha Travels is the most trusted Travel Agency in Madurai, committed to offering you safe, economic, and customer-friendly travel services. Holiday Packages, Outstation Tours, Family Tours, Corporate Tours, Pilgrimage Tours and many more are our specialties.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Besides tour planning, we are here to provide you with professional Cab Booking and reliable Taxi Services in Madurai for airport transportation, railway station pickup services, local sightseeing tours, business tours, wedding tours and many more.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {BADGES.map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-3 rounded-xl border border-gold/30 bg-card px-4 py-3 shadow-soft"
              >
                <b.icon className="h-5 w-5 shrink-0 text-gold-dark" />
                <span className="text-sm font-medium text-primary">{b.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-3xl border border-gold/40" />
            <img
              src={aboutImg}
              alt="Our Innova cab parked outside a Madurai temple"
              loading="lazy"
              width={1024}
              height={800}
              className="h-full w-full rounded-2xl object-cover shadow-lift"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="bg-card py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold-dark">
              <Award className="h-3.5 w-3.5" /> Trusted Since Day One
            </span>
            <h2 className="mt-5 text-3xl leading-tight sm:text-4xl">
              9+ Years of Driving Madurai's Journeys, Safely Home
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Nearly a decade on the road has taught us every temple shortcut, hill-station curve
              and highway rest stop worth knowing — so every trip we plan is one we'd take with our
              own family.
            </p>
          </div>
        </Reveal>

        <div className="mt-14">
          <SectionHeading
            eyebrow="Our Fleet"
            title="These Are Our Vehicles"
            subtitle="Clean, well-maintained cars and vans ready for your next journey."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {OUR_VEHICLES.map((v, i) => (
              <Reveal key={v.name} delay={i * 60}>
                <div className="group overflow-hidden rounded-2xl border border-border bg-background shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
                  <img
                    src={v.img}
                    alt={v.name}
                    loading="lazy"
                    width={900}
                    height={600}
                    className="h-36 w-full bg-secondary object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <p className="px-3 py-3 text-center text-sm font-medium text-primary">{v.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
