import { Metadata } from "next";
import Link from "next/link";
import { PlusCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { AlbumArtwork } from "@/components/album-artwork";
import { PodcastEmptyPlaceholder } from "@/components/podcast-empty-placeholder";
import { Sidebar } from "@/components/sidebar";
import { listenNowAlbums, madeForYouAlbums } from "@/app/data/albums";
import { playlists } from "@/app/data/playlists";

export const metadata: Metadata = {
  title: "Music App",
  description: "Example music app using the components.",
};

export default function MusicPage() {
  return (
    <>
      <div className="grid lg:grid-cols-5">
        <Sidebar playlists={playlists} className="hidden lg:block" />
        <div className="col-span-3 lg:col-span-4 lg:border-l">
          <div className="h-full px-4 py-6 lg:px-8">
            <Tabs defaultValue="music" className="h-full space-y-6">
              <div className="space-between flex items-center">
                <TabsList>
                  <TabsTrigger value="music" className="relative">
                    Música
                  </TabsTrigger>

                  <TabsTrigger value="live" disabled>
                    Relatórios
                  </TabsTrigger>
                </TabsList>
                <div className="ml-auto mr-4">
                  <Link href="/create">
                    <Button>
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Adicionar Música
                    </Button>
                  </Link>
                </div>
              </div>
              <TabsContent
                value="music"
                className="border-none p-0 outline-none"
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h2 className="text-2xl font-semibold tracking-tight">
                      Novos lançamentos
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Sinta a energia contagiante das últimas faixas. Sempre
                      atualizado!
                    </p>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="relative">
                  <ScrollArea>
                    <div className="flex space-x-4 pb-4">
                      {listenNowAlbums.map((album) => (
                        <AlbumArtwork
                          key={album.name}
                          album={album}
                          className="w-[250px]"
                          aspectRatio="portrait"
                          width={250}
                          height={330}
                        />
                      ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                  </ScrollArea>
                </div>
                <div className="mt-6 space-y-1">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Os Melhores Álbuns Selecionados
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Uma seleção personalizada de álbuns que foram especialmente
                    escolhidos para você. Atualizados diariamente.
                  </p>
                </div>
                <Separator className="my-4" />
                <div className="relative">
                  <ScrollArea>
                    <div className="flex space-x-4 pb-4">
                      {madeForYouAlbums.map((album) => (
                        <AlbumArtwork
                          key={album.name}
                          album={album}
                          className="w-[150px]"
                          aspectRatio="square"
                          width={150}
                          height={150}
                        />
                      ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent
                value="podcasts"
                className="h-full flex-col border-none p-0 data-[state=active]:flex"
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h2 className="text-2xl font-semibold tracking-tight">
                      Novos episódios.
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Os teus podcasts favoritos, adicionados regularmente.
                    </p>
                  </div>
                </div>
                <Separator className="my-4" />
                <PodcastEmptyPlaceholder />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}
