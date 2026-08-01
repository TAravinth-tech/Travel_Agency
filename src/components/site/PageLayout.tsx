import type { ReactNode } from "react";
import { Link } from "@/lib/router-shim";
import { Header, WhatsAppFab } from "./Header";
import { Footer } from "./Content";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export function PageBanner({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="bg-green-gradient py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <p className="gold-rule w-fit text-[11px] font-semibold tracking-[0.3em] text-gold-light uppercase">
          {eyebrow}
        </p>
        <h1
          className="mt-5 max-w-3xl font-display text-3xl leading-tight sm:text-5xl"
          style={{ color: "var(--ivory)" }}
        >
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-ivory/80 sm:text-base">{subtitle}</p>
        <nav aria-label="Breadcrumb" className="mt-6 text-xs text-ivory/60">
          <Link to="/" className="hover:text-gold-light">
            Home
          </Link>
          <span className="px-2">/</span>
          <span className="text-gold-light">{title}</span>
        </nav>
      </div>
    </section>
  );
}
