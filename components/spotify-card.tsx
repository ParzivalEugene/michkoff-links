import { getSpotifyInfo } from "@/actions/getSpotifyInfo";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Badge, badgeVariants } from "./ui/badge";
import { CardDescription } from "./ui/card";
export const SpotifyCard = async () => {
  const { title, cover, songs } = (await getSpotifyInfo()) || {};

  return (
    <Link
      href={"https://open.spotify.com/playlist/52ujyIugSAiTRwaQFnwKhL"}
      className={cn(
        badgeVariants({ variant: "outline" }),
        "flex whitespace-normal text-start spotify rounded-3xl p-4 lg:p-6 flex-row h-auto items-start justify-between hover:bg-[#0A0F0D] hover:shadow-2xl hover:shadow-[#1DB954]/40 transition-all ease duration-300"
      )}
    >
      <div className="flex flex-col justify-between h-full">
        <Image src="/logos/spotify.png" alt="spotify" width={40} height={40} />
        <div>
          <h2 className="text-md lg:text-lg">{title}</h2>
          <CardDescription>{songs} songs</CardDescription>
        </div>
        <Badge className="bg-[#1DB954] dark:text-primary hover:bg-[#1DB954]/80 w-fit text-md">
          Play
        </Badge>
      </div>
      <Image
        src={cover || ""}
        alt="cover"
        width={132}
        height={132}
        className="rounded-xl"
      />
    </Link>
  );
};
