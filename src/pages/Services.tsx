import { PageLayout, PageBanner } from "@/components/site/PageLayout";
import { Services } from "@/components/site/Sections";
import { WhyUs } from "@/components/site/Content";
import { ServiceAreas } from "@/components/site/Content";

const title = "Our Services | Madurai Jashwitha Travels";
const description =
  "Local cabs, outstation trips, airport transfers, temple tourism, group tours and wedding car rental from Madurai Jashwitha Travels.";


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
      <ServicesPage />
    </>
  );
}

function ServicesPage() {
  return (
    <PageLayout>
      <PageBanner
        eyebrow="What We Do"
        title="Services"
        subtitle="Comfortable cabs, curated itineraries and round-the-clock support across Tamil Nadu and Kerala."
      />
      <Services />
      <WhyUs />
      <ServiceAreas />
    </PageLayout>
  );
}
