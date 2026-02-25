import { useSmartNavigation } from "@/lib/hook";
import { usePathname } from "next/navigation";

const guideSections = [
  { id: "intro", label: "Introducción" },
  { id: "steps", label: "Pasos" },
  { id: "providers", label: "Proveedores" },
];

export function GuideSubNavbar() {
  const pathname = usePathname();
  const { goToSection } = useSmartNavigation();

  if (!pathname.startsWith("/guide")) return null;

  return (
    <div className="sticky top-14 z-40 bg-muted border-b">
      <ul className="flex gap-4 px-4 overflow-x-auto">
        {guideSections.map((sec) => (
          <li key={sec.id}>
            <button
              onClick={() => goToSection(sec.id)}
              className="py-3 text-sm whitespace-nowrap hover:text-accent"
            >
              {sec.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
