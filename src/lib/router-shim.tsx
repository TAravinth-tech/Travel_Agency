import { forwardRef, type AnchorHTMLAttributes, type ReactNode } from "react";

function resolveHref(to: string): string {
  if (!to) return "/";
  if (/^(https?:|mailto:|tel:|#)/i.test(to)) return to;
  if (to === "/") return "/";
  // Convert "/about" -> "/about/" for clean folder-based URLs in MPA build
  const trimmed = to.startsWith("/") ? to : `/${to}`;
  return trimmed.endsWith("/") ? trimmed : `${trimmed}/`;
}

function currentPath(): string {
  if (typeof window === "undefined") return "/";
  return window.location.pathname || "/";
}

function isActivePath(to: string, end?: boolean): boolean {
  const href = resolveHref(to);
  const path = currentPath();
  const normalize = (p: string) => (p.endsWith("/") ? p : `${p}/`);
  const a = normalize(href);
  const b = normalize(path);
  return end ? a === b : b === a || b.startsWith(a);
}

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  to: string;
  children?: ReactNode;
  end?: boolean;
  replace?: boolean;
  hash?: string;
  search?: Record<string, unknown>;
  params?: Record<string, unknown>;
  activeProps?: { className?: string };
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  {
    to,
    children,
    end,
    replace: _replace,
    hash,
    search: _search,
    params: _params,
    activeProps,
    className,
    ...rest
  },
  ref,
) {
  const href = `${resolveHref(to)}${hash ? `#${hash}` : ""}`;
  const active = !hash && isActivePath(to, end);
  const cls = [className, active ? activeProps?.className : undefined]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      ref={ref}
      href={href}
      aria-current={active ? "page" : undefined}
      className={cls || undefined}
      {...rest}
    >
      {children}
    </a>
  );
});

type NavLinkRenderProps = { isActive: boolean; isPending: boolean };
type NavLinkProps = Omit<LinkProps, "className" | "children"> & {
  className?: string | ((p: NavLinkRenderProps) => string);
  children?: ReactNode | ((p: NavLinkRenderProps) => ReactNode);
};


export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(function NavLink(
  { to, end, className, children, ...rest },
  ref,
) {
  const isActive = isActivePath(to, end);
  const state: NavLinkRenderProps = { isActive, isPending: false };
  const cls = typeof className === "function" ? className(state) : className;
  const kids = typeof children === "function" ? children(state) : children;
  return (
    <a ref={ref} href={resolveHref(to)} aria-current={isActive ? "page" : undefined} className={cls} {...rest}>
      {kids}
    </a>
  );
});

export function useLocation() {
  const pathname = currentPath();
  return { pathname, search: typeof window !== "undefined" ? window.location.search : "", hash: typeof window !== "undefined" ? window.location.hash : "", state: null, key: "default" };
}

export function useNavigate() {
  return (to: string) => {
    if (typeof window !== "undefined") window.location.href = resolveHref(to);
  };
}
