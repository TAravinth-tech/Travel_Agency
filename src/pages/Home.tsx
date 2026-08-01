import { PageLayout } from "@/components/site/PageLayout";
import { Hero } from "@/components/site/Hero";
import { About, Services, Gallery } from "@/components/site/Sections";
import { WhyUs, Testimonials } from "@/components/site/Content";
import { ServiceAreas } from "@/components/site/Content";


const title = "Madurai Jashwitha Travels | Cabs & South India Tour Packages";
const description =
  "Trusted Madurai travels for local cabs, outstation trips, airport transfers and temple tour packages across South India. Transparent tariffs, 24/7 booking.";


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
      <Index />
    </>
  );
}   

function Index() {
  return (
    <PageLayout>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <WhyUs />
      <ServiceAreas />
      <Testimonials />
    </PageLayout>
  );
}
