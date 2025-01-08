"use client";

import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

import {
  FileUser,
  HomeIcon,
  PencilIcon,
  Telescope,
  Sun,
  Search,
  Command as CommandIcon,
} from "lucide-react";

import { geistSans } from "@/app/fonts";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";

import { DialogTitle } from "@/components/ui/dialog";
import { Dock, DockIcon } from "@/components/ui/dock";

import BlurFade from "@/components/ui/blur-fade";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import { navMenuData } from "@/lib/data";
import { blurDelay } from "@/lib/utils/general";

export default function DockNav() {
  const { setTheme } = useTheme();
  const [openCommand, setOpenCommand] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      console.log("open");
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpenCommand((openCommand) => !openCommand);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50">
        <TooltipProvider delayDuration={300}>
          <BlurFade delay={blurDelay}>
            <Dock
              direction="bottom"
              iconSize={30}
              iconMagnification={50}
              iconDistance={90}
              className="bg-[white] dark:bg-[#131313] dark:border-[#212121] shadow h-12"
            >
              <Button
                variant="secondary"
                className="flex items-center h-full text-xs bg-black/10 dark:bg-white/10 text-muted-foreground px-2 py-3"
                onClick={() => setOpenCommand(true)}
              >
                <Search className="md:hidden" />
                <span className="hidden md:block">Search...</span>
                <kbd className="pointer-events-none text-[10px] font-light gap-1 rounded opacity-100 border bg-muted px-1.5 hidden md:flex items-center">
                  <CommandIcon strokeWidth={1.5} className="size-4" />
                  <span>K</span>
                </kbd>
              </Button>
              <Separator orientation="vertical" className="h-full" />
              {navMenuData.navbar.map((item) => (
                <DockIcon
                  key={item.label}
                  className="hover:bg-black/10 hover:dark:bg-white/10"
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a href={item.href}>
                        <item.icon className="size-full stroke-[hsl(var(--primary))]" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.label}</p>
                    </TooltipContent>
                  </Tooltip>
                </DockIcon>
              ))}
              <Separator orientation="vertical" className="h-full py-2" />
              <DockIcon className="hover:bg-black/10 hover:dark:bg-white/10">
                <Tooltip>
                  <TooltipTrigger
                    asChild
                    onClick={() =>
                      setTheme((prevTheme) =>
                        prevTheme === "dark" ? "light" : "dark"
                      )
                    }
                  >
                    <Sun className="size-full stroke-[hsl(var(--primary))]" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Toggle theme</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            </Dock>
          </BlurFade>
        </TooltipProvider>
      </div>
      <div>
        <CommandDialog open={openCommand} onOpenChange={setOpenCommand}>
          <DialogTitle className="sr-only">Command Dialog</DialogTitle>
          <CommandInput
            className={`${geistSans.className}`}
            placeholder="Type a command or search..."
          />
          <CommandList className={`${geistSans.className}`}>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <a href="https://read.cv/mikhailok" target="_blank">
                <CommandItem className="!py-2.5 hover:cursor-pointer">
                  <FileUser
                    strokeWidth={1.5}
                    className="stroke-[hsl(var(--primary))]"
                  />
                  CV
                </CommandItem>
              </a>
              <CommandItem className="!py-2.5 hover:cursor-pointer">
                <HomeIcon
                  strokeWidth={1.5}
                  className="stroke-[hsl(var(--primary))]"
                />
                Home
              </CommandItem>
            </CommandGroup>
            <CommandGroup heading="Other pages">
              <CommandItem className="!py-2.5">
                <PencilIcon
                  strokeWidth={1.5}
                  className="stroke-[hsl(var(--primary))]"
                />
                Blog(in development)
              </CommandItem>
              <CommandItem className="!py-2.5">
                <Telescope
                  strokeWidth={1.5}
                  className="stroke-[hsl(var(--primary))]"
                />
                Hobby(in development)
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </div>
    </>
  );
}
