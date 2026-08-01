import {
  Car,
  MapPinned,
  Plane,
  Landmark,
  Users,
  HeartHandshake,
  BadgeIndianRupee,
  UserCheck,
  Headphones,
  ShieldCheck,
  Briefcase,
  Luggage,
} from "lucide-react";
import aboutImg from "@/assets/about.png";
import pkgMadurai from "@/assets/pkg-madurai.jpg";
import pkgRameswaram from "@/assets/pkg-rameswaram.jpg";
import pkgKanyakumari from "@/assets/pkg-kanyakumari.jpg";
import pkgKodaikanal from "@/assets/pkg-kodaikanal.jpg";
import pkgMunnar from "@/assets/pkg-munnar.jpg";
import pkgOoty from "@/assets/pkg-ooty.jpg";
import placePalace from "@/assets/place-palace.jpg";
import placeMuseum from "@/assets/place-museum.jpg";
import placeTeppakulam from "@/assets/place-teppakulam.jpg";
import placeKoodal from "@/assets/place-koodal.jpg";
import placeKallazhagar from "@/assets/place-kallazhagar.jpg";
import { BUSINESS, waLink } from "@/lib/site";
import { Reveal, SectionHeading } from "./Reveal";

const BADGES = [
  { icon: BadgeIndianRupee, label: "Affordable Pricing" },
  { icon: UserCheck, label: "Experienced Drivers" },
  { icon: Headphones, label: "24/7 Support" },
  { icon: ShieldCheck, label: "Well-Maintained Fleet" },
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
            A Madurai family of drivers who treat every journey as a pilgrimage
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {BUSINESS.name} has been carrying families, pilgrims and corporate travellers across
            Tamil Nadu and Kerala with clean vehicles, courteous drivers and honest, transparent
            fares. From a quick airport drop to a ten-day temple circuit, we plan the route, handle
            the paperwork and keep you comfortable from the first kilometre to the last.
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

const SERVICES = [
  {
    icon: MapPinned,
    title: "Local Packages",
    desc: "Hourly and full-day city cabs for shopping, functions and sightseeing in Madurai.",
  },
  {
    icon: Car,
    title: "Outstation Tours",
    desc: "One-way and round trips to any town in Tamil Nadu, Kerala and Karnataka.",
  },
  {
    icon: Plane,
    title: "Airport Pickup & Drop",
    desc: "On-time transfers to Madurai, Trichy and Coimbatore airports, day or night.",
  },
  {
    icon: Landmark,
    title: "Temple Tourism",
    desc: "Guided Navagraha, Murugan and Divya Desam temple circuits with knowledgeable drivers.",
  },
  {
    icon: Users,
    title: "Group Tour Packages",
    desc: "Tempo Travellers and mini vans for families, colleges and pilgrim groups.",
  },
  {
    icon: HeartHandshake,
    title: "Honeymoon Packages",
    desc: "Honeymoon packages for newlyweds, candlelight dinners,luxury stays, and unforgettable moments.",
  },
];


export function Services() {
  return (
    <section id="services" className="bg-card py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="What We Do"
          title="Our Services"
          subtitle="Every kind of journey, one trusted travel partner."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <div className="group h-full rounded-2xl border border-border bg-background p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-lift">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-secondary transition-colors group-hover:bg-gold-gradient">
                  <s.icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary" />
                </div>
                <h3 className="mt-5 text-xl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const PACKAGES = [
  {
    img: pkgMadurai,
    title: "Madurai Local & Temple Tour",
    points: [
      "Meenakshi Amman Temple darshan",
      "Thirumalai Nayakkar Palace",
      "Teppakulam & Gandhi Museum",
      "Full-day AC cab",
    ],
  },
  {
    img: pkgRameswaram,
    title: "Rameswaram & Dhanushkodi Tour",
    points: [
      "Ramanathaswamy Temple",
      "Pamban Bridge viewpoint",
      "Dhanushkodi ghost town",
      "Agni Theertham beach",
    ],
  },
  {
    img: pkgKanyakumari,
    title: "Kanyakumari & Poovar Tour",
    points: [
      "Sunrise at the three seas",
      "Vivekananda Rock Memorial",
      "Thiruvalluvar Statue",
      "Poovar backwater ride",
    ],
  },
  {
    img: pkgKodaikanal,
    title: "Kodaikanal Hill Station Tour",
    points: [
      "Kodai Lake boating",
      "Coaker's Walk & Pillar Rocks",
      "Silver Cascade Falls",
      "Ideal 2-day getaway",
    ],
  },
  {
    img: pkgMunnar,
    title: "Munnar & Thekkady (Kerala) Tour",
    points: [
      "Tea estate drives",
      "Mattupetty Dam & Echo Point",
      "Periyar wildlife boating",
      "Spice plantation visit",
    ],
  },
  {
    img: pkgOoty,
    title: "Ooty & Coimbatore Tour",
    points: [
      "Nilgiri Mountain Railway",
      "Botanical Gardens & Doddabetta",
      "Coonoor tea gardens",
      "Coimbatore temple stop",
    ],
  },
];

export function Packages() {
  return (
    <section id="packages" className="motif py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Explore South India With Us"
          title="Tour Packages"
          subtitle="Handcrafted itineraries with flexible days, stays and pickup points."
        />
        <div className="mt-12 -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-3">
          {PACKAGES.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 60}
              className="w-[85%] shrink-0 snap-start md:w-auto md:shrink"
            >
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={700}
                  className="h-48 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl leading-snug">{p.title}</h3>
                  <ul className="mt-4 flex-1 space-y-2">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={waLink(
                      `Hi ${BUSINESS.name}, I would like details about the "${p.title}" package.`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-block rounded-full border border-gold px-5 py-2.5 text-center text-sm font-semibold text-primary transition-colors hover:bg-gold-gradient"
                  >
                    View Details / Enquire
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const PLACES = [
  {
    img: pkgMadurai,
    title: "Meenakshi Amman Temple",
    desc: "The soul of Madurai — towering gopurams and the thousand-pillar hall.",
  },
  {
    img: placePalace,
    title: "Thirumalai Nayakkar Palace",
    desc: "17th-century Indo-Saracenic palace with a grand pillared courtyard.",
  },
  {
    img: placeMuseum,
    title: "Gandhi Memorial Museum",
    desc: "Housed in a Rani Mangammal palace, home to rare freedom-era relics.",
  },
  {
    img: placeTeppakulam,
    title: "Vandiyur Mariamman Teppakulam",
    desc: "A vast temple tank with a central mandapam, magical at sunset.",
  },
  {
    img: placeKoodal,
    title: "Koodal Azhagar Temple",
    desc: "Ancient Divya Desam shrine famed for its three-tier sanctum.",
  },
  {
    img: placeKallazhagar,
    title: "Kallazhagar Temple",
    desc: "Forest hill shrine at Alagar Kovil, 21 km from the city centre.",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-card py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Around The Temple City"
          title="Madurai Tourist Places"
          subtitle="Everything worth seeing, covered in our local sightseeing packages."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PLACES.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <figure className="group relative h-64 overflow-hidden rounded-2xl shadow-soft">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={900}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-[linear-gradient(to_top,oklch(0.24_0.06_160/0.95),transparent)] p-5">
                  <h3 className="text-lg" style={{ color: "var(--ivory)" }}>
                    {p.title}
                  </h3>
                  <p className="mt-1 text-xs text-ivory/80">{p.desc}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
