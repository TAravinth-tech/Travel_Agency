import { PageLayout, PageBanner } from "@/components/site/PageLayout";
import { Fleet } from "@/components/site/Fleet";

const title = "Fleet & Tariff | Madurai Jashwitha Travels";
const description =
  "Transparent cab tariff in Madurai — sedan, SUV, tempo traveller and mini van rates per day and per km with  details.";


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
      <TariffPage />
    </>
  );
}

function TariffPage() {
  return (
    <PageLayout>
      <PageBanner
        eyebrow="No Hidden Charges"
        title="Tariff"
        subtitle="Clear per-day and per-kilometre rates for every vehicle in our fleet."
      />
      <Fleet />
      
    </PageLayout>
  );
}
