import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { RiMenuLine, RiCloseFill } from "react-icons/ri";


type NavItem = { label: string; href: string };

export default function MobileNav({
  nav,
  pathname,
}: {
  nav: NavItem[];
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    // Non-modal so the header trigger stays clickable as the close button; a modal dialog
    // blocks pointer events and hides everything outside its content.
    <Dialog.Root open={open} onOpenChange={setOpen} modal={false}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-9 w-9 place-items-center rounded-md border border-border text-fg md:hidden"
        >
          {open ? <RiCloseFill size={18} /> : <RiMenuLine size={16} />}
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        {/* top-[74px] = header's top-3 (12px) + bar height (~54px) + 8px gap; update it if the header bar's height changes. */}
        <Dialog.Content className="fixed inset-x-3 top-[74px] z-50 flex origin-top flex-col gap-2 rounded-2xl border border-border bg-surface p-4 shadow-xl shadow-black/15 focus:outline-none motion-safe:data-[state=open]:animate-[menu-pop_150ms_ease-out]">
          <Dialog.Title className="sr-only">Menu</Dialog.Title>
          <Dialog.Description className="sr-only">
            Site navigation
          </Dialog.Description>
          <nav aria-label="Main" className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-md px-3 py-2 text-lg uppercase tracking-wide transition-colors ${
                  isActive(item.href)
                    ? "bg-brand text-fg"
                    : "text-fg hover:bg-border/50"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
