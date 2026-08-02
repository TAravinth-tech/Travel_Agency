export const BUSINESS = {
  name: "Madurai Jashwitha Travels",
  tagline: "Your Trusted Travel Partner in Madurai",
  address: "Sivasakthi Nagar Extension area, Suriya Nagar, Madurai - 625007",
  email: "maduraijashwithatravels@gmail.com",
  phones: ["8807070754", "9952727409", "9790615559"],
  whatsapp: "918807070754",
  hours: "Open 24 / 7 — All days",
};
 

export function waLink(message: string) {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}

// export const NAV = [
//   { label: "Home", to: "/" },
//   { label: "Services", to: "/services" },
//   { label: "Tour Packages", to: "/tour-packages" },
//   { label: "Tariff", to: "/tariff" },
//   { label: "Contact", to: "/contact" },
// ] as const;

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Tour Packages & Tariff", to: "/tour_and_tariff" },
  { label: "Contact", to: "/contact" },
] as const;

export const TRIP_TYPES = [
  "Local",
  "Outstation",
  "Airport",
  "Tour Package",
  "Group Tour",
  "Temple Tourism",
];

export const VEHICLE_TYPES = [
  "Sedan (Etios / Dzire)",
  "SUV (Innova / Innova Crysta)",
  "Tempo Traveller (12 Seater)",
  "Tempo Traveller (18 Seater)",
  "Mini Van",
];
