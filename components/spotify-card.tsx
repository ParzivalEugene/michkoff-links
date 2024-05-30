import SpotifyLogo from "@/public/logos/spotify.png";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { CardDescription } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export const SpotifyCard = async () => {
  const domain = headers().get("x-forwarded-host");
  const { title, songs, cover, link } = await fetch(
    `http://${domain}/api/info/get-spotify-info`
  ).then((res) => res.json());

  return (
    <Link
      href={link}
      className="border text-xs font-semibold text-foreground flex whitespace-normal text-start spotify rounded-3xl p-4 lg:p-6 flex-row h-auto items-start justify-between hover:bg-[#0A0F0D] hover:shadow-2xl hover:shadow-[#1DB954]/40 transition-all ease duration-300"
    >
      <div className="flex flex-col justify-between h-full">
        <Image src={SpotifyLogo} alt="spotify" className="h-[40px] w-[40px]" />
        <div>
          <h2 className="text-sm md:text-md lg:text-lg">{title}</h2>
          <CardDescription className="text-xs md:text-sm">
            {songs} songs
          </CardDescription>
        </div>
        <Badge className="bg-[#1DB954] dark:text-primary hover:bg-[#1DB954]/80 w-fit text-md">
          Play
        </Badge>
      </div>
      <Image
        src={cover}
        alt="cover"
        width={132}
        height={132}
        style={{ objectFit: "cover" }}
        className="rounded-xl aspect-square"
      />
    </Link>
  );
};

export const SpotifyCardSkeleton = () => {
  return (
    <div className="border text-xs font-semibold text-foreground flex whitespace-normal text-start spotify rounded-3xl p-4 lg:p-6 flex-row h-auto items-start justify-between">
      <div className="flex flex-col justify-between h-full">
        <Skeleton className="h-[40px] w-[40px] rounded-xl" />
        <div>
          <Skeleton className="rounded-xl h-6 w-24 mb-2 mt-3" />
          <Skeleton className="rounded-xl h-4 w-36 mb-1" />
        </div>
        <Skeleton className="h-5 w-12 mt-2 rounded-xl" />
      </div>
      <Skeleton className="h-32 w-32 rounded-xl" />
    </div>
  );
};
