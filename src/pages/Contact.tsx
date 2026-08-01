import { PageLayout, PageBanner } from "@/components/site/PageLayout";
import { Contact, Faq } from "@/components/site/Content";

const title = "Contact Us | Madurai Jashwitha Travels";
const description =
  "Call or WhatsApp Madurai Jashwitha Travels at Sivasakthi Street, Suriya Nagar, Madurai. Open 24/7 for cab bookings and tour enquiries.";


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
      <ContactPage />
    </>
  );
}

function ContactPage() {
  return (
    <PageLayout>
      <PageBanner
        eyebrow="Say Vanakkam"
        title="Contact"
        subtitle="Reach our Madurai office any time of day — we answer calls and WhatsApp 24/7."
      />
      <Contact />
      <Faq />
    </PageLayout>
  );
}
