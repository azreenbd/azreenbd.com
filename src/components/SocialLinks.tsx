import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import type { IconType } from "react-icons";

const ICONS: Record<string, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: FaEnvelope,
};

type Social = { label: string; href: string; icon: string };

export default function SocialLinks({
  socials,
  size = 22,
}: {
  socials: readonly Social[];
  size?: number;
}) {
  return (
    <div className="flex items-center gap-4">
      {socials.map((s) => {
        const Icon = ICONS[s.icon] ?? FaEnvelope;
        return (
          <a
            key={s.label}
            href={s.href}
            title={s.label}
            aria-label={s.label}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-fg-muted transition-colors hover:text-brand"
          >
            <Icon size={size} />
          </a>
        );
      })}
    </div>
  );
}
