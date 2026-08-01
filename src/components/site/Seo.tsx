import { Helmet } from "react-helmet-async";

type MetaEntry =
  | { title: string }
  | { name: string; content: string }
  | { property: string; content: string };

export function Seo({ meta }: { meta: MetaEntry[] }) {
  const titleEntry = meta.find((m): m is { title: string } => "title" in m);
  return (
    <Helmet>
      {titleEntry ? <title>{titleEntry.title}</title> : null}
      {meta.map((m, i) => {
        if ("title" in m) return null;
        if ("name" in m) return <meta key={i} name={m.name} content={m.content} />;
        if ("property" in m) return <meta key={i} property={m.property} content={m.content} />;
        return null;
      })}
    </Helmet>
  );
}
