"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/images/logo.png";

import { siteConfig } from "@/config/site";
import { sanitizeName } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Dialog, DialogTrigger } from "./ui/dialog";

export function copyToClipboard(value: string) {
  navigator.clipboard.writeText(value);
}

const redirectUrls = {
  shadcnUi: "https://ui.shadcn.com/",
  uploadTheme:
    "https://github.com/luisFilipePT/shadcn-ui-theme-explorer#-upload-a-theme",
  downloadTheme: (theme: string) => {
    if (theme === "default") {
      return `https://github.com/luisFilipePT/shadcn-ui-theme-explorer/tree/main/styles/global.css`;
    }
    return `https://github.com/luisFilipePT/shadcn-ui-theme-explorer/tree/main/styles/themes/${sanitizeName(
      theme
    )}.css`;
  },
};

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <div className="flex items-start  space-x-2">
        <Link href="/">
          <Image
            src={logo}
            alt="shadcn/ui Theme Explorer logo"
            width="45"
            height="45"
          />
        </Link>
        <span className="hidden font-bold md:inline-block">CONEDARTE</span>
      </div>
      <Dialog>
        <DropdownMenu>
          <DropdownMenuTrigger>Ajuda</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              <Link href={redirectUrls.shadcnUi}>Guia de Usuário</Link>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={redirectUrls.uploadTheme}>Termos e Condições</Link>
            </DropdownMenuItem>
            <DialogTrigger asChild>
              <DropdownMenuItem>Contactos</DropdownMenuItem>
            </DialogTrigger>
          </DropdownMenuContent>
        </DropdownMenu>
      </Dialog>
    </div>
  );
}
