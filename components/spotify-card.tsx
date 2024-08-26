import { GetSpotifyInfo, getSpotifyInfo } from "@/actions/getSpotifyInfo";
import SpotifyLogo from "@/public/logos/spotify.png";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { CardDescription } from "./ui/card";

export const SpotifyCard = async () => {
  const { title, songs, cover, link } =
    (await getSpotifyInfo()) as GetSpotifyInfo;

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