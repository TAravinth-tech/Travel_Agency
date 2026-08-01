import { PageLayout, PageBanner } from "@/components/site/PageLayout";

import { About, Experience } from "@/components/site/About";
import { Seo } from "@/components/site/Seo";

const title = "About Us | Madurai Jashwitha Travels";
const description =
  "Meet Madurai Jashwitha Travels — a family-run cab and tour service carrying pilgrims, families and corporate travellers across Tamil Nadu and Kerala with honest, transparent pricing.";

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
      <AboutPage />
    </>
  );
}

function AboutPage() {
  return (
    <PageLayout>
      <PageBanner
        eyebrow="Our Story"
        title="About Us"
        subtitle="Our cars, which are maintained properly and have friendly drivers who know their job very well, guarantee all your trips to be safe and punctual."
      />
      <About />
      <Experience />
    </PageLayout>
  );
}
