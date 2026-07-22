import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { FaBars, FaXmark } from "react-icons/fa6";

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
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="grid h-9 w-9 place-items-center rounded-md border border-border text-fg md:hidden"
        >
          <FaBars size={16} />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm data-[state=open]:animate-[fade_150ms_ease-out]" />
        <Dialog.Content className="fixed right-0 top-0 z-50 flex h-full w-72 max-w-[80%] flex-col gap-2 border-l border-border bg-surface p-6 shadow-xl focus:outline-none">
          <div className="mb-4 flex items-center justify-between">
            <Dialog.Title className="text-lg uppercase tracking-wide">
              Menu
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Close menu"
                className="grid h-9 w-9 place-items-center rounded-md text-fg-muted hover:text-brand"
              >
                <FaXmark size={18} />
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Description className="sr-only">
            Site navigation
          </Dialog.Description>
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-lg uppercase tracking-wide transition-colors ${
                  isActive(item.href)
                    ? "bg-brand/10 text-brand"
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
