import { RiGithubFill, RiLinkedinBoxFill, RiMailFill } from "react-icons/ri";
import type { IconType } from "react-icons";

const ICONS: Record<string, IconType> = {
  github: RiGithubFill,
  linkedin: RiLinkedinBoxFill,
  email: RiMailFill,
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
        const Icon = ICONS[s.icon] ?? RiMailFill;
        const external = s.href.startsWith("http");
        return (
          <a
            key={s.label}
            href={s.href}
            title={s.label}
            aria-label={external ? `${s.label} (opens in new tab)` : s.label}
            target={external ? "_blank" : undefined}
            // rel="me" tells search engines these profiles belong to the site owner.
            rel={external ? "me noopener noreferrer" : "me"}
            className="transition-colors hover:text-brand"
          >
            <Icon size={size} />
          </a>
        );
      })}
    </div>
  );
}
