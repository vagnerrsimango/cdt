import {
  LayoutGrid,
  Library,
  ListMusic,
  Mic2,
  Music,
  Music2,
  PlayCircle,
  Radio,
  User,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Playlist } from "@/app/data/playlists";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  playlists: Playlist[];
}

export function Sidebar({ className, playlists }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Menu
          </h2>
          <div className="space-y-1">
            <Button
              variant="secondary"
              size="sm"
              className="w-full justify-start"
            >
              <PlayCircle className="mr-2 h-4 w-4" />
              Sobre mim
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <LayoutGrid className="mr-2 h-4 w-4" />
              Explorar
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Radio className="mr-2 h-4 w-4" />
              Rádio
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
