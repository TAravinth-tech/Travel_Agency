import { useEffect, useState } from "react";
import { Link } from "@/lib/router-shim";
import { Menu, Phone, X, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import { BUSINESS, NAV, waLink } from "@/lib/site";

const WA_HELLO = "Hi, I'm interested in your travel services";

export function UtilityBar() {
  return (
    <div className="bg-green-gradient text-primary-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs sm:text-sm">

        {/* Phone Number */}
        <a
          href={`tel:+91${BUSINESS.phones[1]}`}
          className="flex items-center gap-2 text-gold-light transition-colors hover:text-ivory"
        >
          <Phone className="h-4 w-4 shrink-0" />
          <span>{BUSINESS.phones[1]}</span>
        </a>

        {/* WhatsApp */}
        <a
          href={waLink(WA_HELLO)}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-gold-light transition-colors hover:text-ivory"
        >
          <MessageCircle className="h-4 w-4 shrink-0" />
          <span>WhatsApp Us</span>
        </a>

      </div>
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <UtilityBar />
      <div
        className={`border-b border-border/70 bg-card/95 backdrop-blur transition-all duration-300 ${
          scrolled ? "py-1.5 shadow-soft" : "py-3"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4">

          <Link
  to="/"
  className="flex flex-shrink-0 items-center gap-3"
>
            <img
  src={logo}
  alt={`${BUSINESS.name} crest logo`}
  width={72}
  height={58}
  className={`shrink-0 object-contain transition-all duration-300 ${
    scrolled
      ? "h-10 scale-110"
      : "h-14 scale-125"
  }`}
/>
            <span className="min-w-0">
              <span className="block truncate font-display text-base leading-tight font-semibold text-primary sm:text-xl">
                {BUSINESS.name}
              </span>
              <span className="hidden text-[11px] tracking-[0.2em] text-gold-dark uppercase sm:block">
                Tours &amp; Travels
              </span>
            </span>
          </Link>

         <nav className="hidden flex-1 justify-center lg:flex">
  <div className="flex items-center gap-10 xl:gap-12">
    {NAV.map((n) => (
      <Link
        key={n.to}
        to={n.to}
        activeOptions={{
          exact: n.to === "/",
        }}
        activeProps={{
          className: "text-gold-dark font-semibold",
        }}
        className="whitespace-nowrap text-[17px] font-medium text-foreground/85 transition-colors duration-200 hover:text-gold-dark"
      >
        {n.label}
      </Link>
    ))}
  </div>
</nav>

          <div className="flex items-center justify-end gap-2">
            <Link
              to="/contact"
              
              className="hidden rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-primary shadow-soft transition-transform hover:scale-[1.03] sm:inline-block"
            >
              Book Now
            </Link>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="rounded-full border border-border p-2 text-primary lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 xl:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-primary/50 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        />
        <aside
          className={`absolute top-0 right-0 flex h-full w-[82%] max-w-xs flex-col bg-card p-6 shadow-lift transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-lg text-primary">Menu</span>
            <button type="button" aria-label="Close menu" onClick={() => setOpen(false)}>
              <X className="h-5 w-5 text-primary" />
            </button>
          </div>
          <nav className="mt-6 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "bg-secondary text-primary" }}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/85 transition-colors hover:bg-secondary hover:text-primary"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/contact"
          
            onClick={() => setOpen(false)}
            className="mt-6 rounded-full bg-gold-gradient px-5 py-3 text-center text-sm font-semibold text-primary"
          >
            Book Now
          </Link>

          <div className="mt-6 space-y-2 border-t border-border pt-4">
            {BUSINESS.phones.map((p) => (
              <a
                key={p}
                href={`tel:+91${p}`}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Phone className="h-4 w-4 text-gold-dark" /> {p}
              </a>
            ))}
          </div>
        </aside>
      </div>
    </header>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href={waLink(WA_HELLO)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="pulse-ring fixed right-5 bottom-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-green-gradient shadow-lift ring-2 ring-gold/60 transition-transform hover:scale-105"
    >
      <MessageCircle className="h-7 w-7 text-gold-light" />
    </a>
  );
}
