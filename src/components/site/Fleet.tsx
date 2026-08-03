import { useState } from "react";
import { Users } from "lucide-react";
import carSedan from "@/assets/car-sedan.jpg";
import carSuv from "@/assets/crysta.png";
import carTempo from "@/assets/car-tempo.jpg";
import carMinivan from "@/assets/car-minivan.jpg";
import  Ertiga from "@/assets/kia.png";
import  Innova from "@/assets/car3.png";
import  Innova1 from "@/assets/innova.png";
import { BUSINESS, TRIP_TYPES, VEHICLE_TYPES, waLink } from "@/lib/site";
import { Reveal, SectionHeading } from "./Reveal";
import { MapPin, PhoneCall, ShieldCheck, Clock, Star } from "lucide-react";
import { Link } from "@/lib/router-shim";

type FleetVariant = {
  label: string;
  rent: string;
};

type FleetItem = {
  img: string;
  name: string;
  seats: string;
  fuel: string;
  above: string;
  rent?: string;
  variants?: FleetVariant[];
};

const FLEET: FleetItem[] = [
  {
    img: carSedan,
    name: "Sedan (Etios / Dzire)",
    seats: "4 + 1 Seater",
    rent: "₹1,500 / day",
    fuel: "₹11 / km",
    above: "₹13 / km",
  },
  {
    img: carSuv,
    name: "Innova Crysta",
    seats: "7 + 1 / 6 + 1 Seater",
    rent: "₹2,500 / day",
    fuel: "₹15 / km",
    above: "₹21 / km",
  },
  {
    img: Innova,
    name: "Tempo Traveller",
    seats: "12 Seater",
    rent: "₹2,600 / day",
    fuel: "₹18 / km",
    above: "₹25 / km",
    
  },
  {
    img: Ertiga,
    name: "Ertiga / Kia Carens",
    seats: "7 + 1 Seater",
    rent: "₹1,900 / day",
    fuel: "₹12 / km",
    above: "₹16 / km",
  },
  {
    img: Innova1,
    name: "Innova",
    seats: "7 + 1 Seater",
    rent: "₹2,000 / day",
    fuel: "₹11 / km",
    above: "₹17 / km",
  },
  {
    img: Innova,
    name: "Tempo Traveller",
    seats: "18 Seater",
    rent: "₹3,600 / day",
    fuel: "₹18 / km",
    above: "₹25 / km",
    
  },
];

export function Fleet() {
  const [view, setView] = useState<"cards" | "table">("cards");

  return (
    <section id="fleet" className="motif py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="No Hidden Charges"
          title="Our Fleet & Transparent Pricing"
          subtitle="Extra: Toll, Parking & Hill Station Charges as applicable."
        />

        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-full border border-gold/40 bg-card p-1">
            {(["cards", "table"] as const).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setView(v)}
                className={`rounded-full px-5 py-2 text-sm font-medium capitalize transition-colors ${
                  view === v ? "bg-gold-gradient text-primary" : "text-muted-foreground"
                }`}
              >
                {v} view
              </button>
            ))}
          </div>
        </div>

        {view === "cards" ? (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FLEET.map((f, i) => (
              <Reveal key={f.name} delay={i * 60}>
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
                  <img
                    src={f.img}
                    alt={f.name}
                    loading="lazy"
                    width={900}
                    height={600}
                    className="h-40 w-full bg-secondary object-cover"
                  />
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg leading-snug">{f.name}</h3>
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-gold-dark">
                      <Users className="h-3.5 w-3.5" /> {f.seats}
                    </p>
                    <dl className="mt-4 flex-1 space-y-2 text-sm">
                      {[
                        ["Rent / day (below 300 km)", f.rent],
                        ["Fuel charge / km", f.fuel],
                        ["Rate above 300 km", f.above],
                      ].map(([k, v]) => (
                        <div key={k} className="flex justify-between gap-2 border-b border-border/70 pb-1.5">
                          <dt className="text-muted-foreground">{k}</dt>
                          <dd className="font-semibold text-primary">{v}</dd>
                        </div>
                      ))}
                    </dl>
                    <Link
                      to="/contact"
                      state={{ vehicle: f.name }}
                      className="mt-5 rounded-full bg-gold-gradient px-4 py-2.5 text-center text-sm font-semibold text-primary transition-transform hover:scale-[1.02]"
                    >
                      Book This Vehicle
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-10 overflow-x-auto rounded-2xl border border-border bg-card shadow-soft">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-green-gradient text-primary-foreground">
                <tr>
                  {["Vehicle", "Seats", "Rent / day", "Fuel / km", "Above 300 km", ""].map(
                    (h) => (
                      <th key={h} className="px-4 py-3 font-semibold">
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {FLEET.map((f) => (
                  <tr key={f.name} className="border-t border-border">
                    <td className="px-4 py-3 font-medium text-primary">{f.name}</td>
                    <td className="px-4 py-3 text-muted-foreground">{f.seats}</td>
                    <td className="px-4 py-3">
                      {f.variants ? (
                        <div className="space-y-1">
                          {f.variants.map((v) => (
                            <div key={v.label} className="whitespace-nowrap">
                              <span className="text-xs text-muted-foreground">{v.label}: </span>
                              <span className="font-medium">{v.rent}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        f.rent
                      )}
                    </td>
                    <td className="px-4 py-3">{f.fuel}</td>
                    <td className="px-4 py-3">{f.above}</td>
                    <td className="px-4 py-3">
                      <Link
                        to="/contact"
                        state={{ vehicle: f.name }}
                        className="rounded-full border border-gold px-4 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-gold-gradient"
                      >
                        Book
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}