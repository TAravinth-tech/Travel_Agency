import { PageLayout, PageBanner } from "@/components/site/PageLayout";
import { Packages, Gallery } from "@/components/site/Sections";

const title = "Tour Packages | Madurai Jashwitha Travels";
const description =
  "South India tour packages from Madurai — Rameswaram, Kanyakumari, Kodaikanal, Munnar and Ooty trips with transparent pricing.";


import { Seo } from "@/components/site/Seo";

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
      <PackagesPage />
    </>
  );
}

function PackagesPage() {
  return (
    <PageLayout>
      <PageBanner
        eyebrow="Plan Your Journey"
        title="Tour Packages"
        subtitle="Handcrafted temple circuits, hill-station getaways and family holidays starting from Madurai."
      />
      <Packages />
      <Gallery />
    </PageLayout>
  );
}
