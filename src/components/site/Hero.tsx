import { useState } from "react";
import { Link } from "@/lib/router-shim";
import { Phone } from "lucide-react";
import heroImg from "@/assets/hero.png";
import { BUSINESS, TRIP_TYPES, waLink } from "@/lib/site";

export function Hero() {
  const [trip, setTrip] = useState(TRIP_TYPES[0]);
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");

  const quote = () => {
    const msg = `Hi ${BUSINESS.name}, I'd like a quote.
Trip Type: ${trip}
Pickup Date: ${date || "Not specified"}
Phone: ${phone || "Not specified"}`;
    window.open(waLink(msg), "_blank");
  };

  return (
   <section id="home" className="relative">
      <div className="relative min-h-[86vh] overflow-hidden">
        <img
          src={heroImg}
          alt="Car travelling a scenic South Indian highway towards a temple town"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,oklch(0.24_0.06_160/0.92),oklch(0.3_0.07_158/0.7)_55%,oklch(0.3_0.07_158/0.35))]" />

        <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-4 pt-24 pb-56 sm:pb-64 lg:min-h-[86vh]">
          <p className="gold-rule w-fit text-[11px] font-semibold tracking-[0.3em] text-gold-light uppercase">
            Madurai • South India
          </p>

          <div className="mt-6 max-w-3xl">
  <p
    className="font-display text-4xl leading-tight font-bold sm:text-5xl lg:text-5xl"
    style={{ color: "var(--ivory)" }}
  >
    Best Tours and Travels in Madurai
  </p>

  <h1
    className="mt-3 font-display text-2xl leading-[1.2] sm:text-3xl lg:text-4xl font-semibold"
    style={{ color: "var(--ivory)" }}
  >
    South India's <span className="gold-text">Trusted Travel Agency</span>
  </h1>
</div>

          <p className="mt-5 max-w-xl text-sm text-ivory/85 sm:text-base">
            Comfortable Cabs • Curated Tour Packages • Temple Tourism • Airport Transfers
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-semibold text-primary shadow-lift transition-transform hover:scale-[1.03]"
            >
              Book Your Trip
            </Link>

            <a
              href={`tel:+91${BUSINESS.phones[0]}`}
              className="flex items-center gap-2 rounded-full border border-gold/70 px-7 py-3.5 text-sm font-semibold text-gold-light transition-colors hover:bg-gold hover:text-primary"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Quick enquiry widget overlapping hero bottom */}
      
    </section>
  );
}
