import { PageLayout, PageBanner } from "@/components/site/PageLayout";
import { Packages, Gallery } from "@/components/site/Sections";
import { Fleet, BookCTA } from "@/components/site/Fleet";
import { Seo } from "@/components/site/Seo";

const title = "Tour Packages & Tariff | Madurai Jashwitha Travels";
const description =
  "South India tour packages from Madurai — Rameswaram, Kanyakumari, Kodaikanal, Munnar and Ooty trips — plus transparent cab tariff for sedan, SUV, tempo traveller and mini van rates.";

const PAGE_META = [
  { title },
  { name: "description", content: description },
  { property: "og:title", content: title },
  { property: "og:description", content: description },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary_large_image" },
];

export default function Page() {
  return (
    <>
      <Seo meta={PAGE_META} />
      <TourPackagesAndTariffPage />
    </>
  );
}

function TourPackagesAndTariffPage() {
  return (
    <PageLayout>
      <PageBanner
        eyebrow="Plan Your Journey"
        title="Tour Packages & Tariff"
        subtitle="Handcrafted temple circuits, hill-station getaways and family holidays — with clear per-day and per-kilometre vehicle rates."
      />

      {/* Tour Packages content first */}
      <Packages />
      <Gallery />

      {/* Tariff content below */}
      <Fleet />
      
    </PageLayout>
  );
}
