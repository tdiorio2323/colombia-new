import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES, type RouteDef } from "../routes.manifest";

function filterByAccess(r: RouteDef[], a: RouteDef["access"]) {
  return r.filter(x => x.access === a && x.path !== "*");
}

export default function RouteGallery() {
  const [isAuthed, setAuthed] = useState(false);
  const [isCreator, setCreator] = useState(false);

  const buckets = [
    { label: "Public", items: filterByAccess(ROUTES, "public") },
    { label: "Guest", items: filterByAccess(ROUTES, "guest") },
    { label: "Protected", items: filterByAccess(ROUTES, "protected") },
    { label: "Creator", items: filterByAccess(ROUTES, "creator") },
  ];

  return (
    <div className="min-h-screen bg-brand-dark p-6 space-y-6">
      <div className="bg-brand-dark-2 border border-stone-700/50 rounded-xl p-6">
        <h1 className="text-3xl font-serif font-bold bg-clip-text text-transparent bg-brand-gradient mb-4">
          Route Gallery (Dev Only)
        </h1>

        <div className="flex gap-4 mb-6">
          <label className="flex items-center gap-2 text-white">
            <input
              type="checkbox"
              checked={isAuthed}
              onChange={e => setAuthed(e.target.checked)}
              className="w-4 h-4"
            />
            Authenticated
          </label>
          <label className="flex items-center gap-2 text-white">
            <input
              type="checkbox"
              checked={isCreator}
              onChange={e => setCreator(e.target.checked)}
              className="w-4 h-4"
            />
            Creator role
          </label>
        </div>

        {buckets.map(b => (
          <section key={b.label} className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">{b.label} Routes</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {b.items.map(r => {
                const href = r.dynamic ? r.path.replace(":username", "demo") : r.path;
                const disabled =
                  (b.label === "Guest" && isAuthed) ||
                  (b.label === "Protected" && !isAuthed) ||
                  (b.label === "Creator" && !(isAuthed && isCreator));

                return (
                  <li key={r.path}>
                    <Link
                      to={disabled ? "#" : href}
                      className={`block border rounded-lg p-4 transition-all ${
                        disabled
                          ? "opacity-50 pointer-events-none border-stone-700 bg-brand-dark"
                          : "border-stone-600 bg-brand-dark hover:border-brand-rose hover:shadow-glow"
                      }`}
                    >
                      <div className="font-medium text-white">{r.name}</div>
                      <div className="text-sm text-stone-400 mt-1">{href}</div>
                      {r.dynamic && (
                        <div className="text-xs text-brand-gold mt-1">Dynamic Route</div>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
