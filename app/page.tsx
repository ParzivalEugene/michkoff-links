import { getSocialInfo } from "@/actions/getSocialInfo";
import { AboutCard } from "@/components/about-card";
import { PortfolioCard } from "@/components/portfolio-card";
import { SocialCard } from "@/components/social-card";
import { SpotifyCard } from "@/components/spotify-card";

export default async function Home() {
  const socialCardsData = await getSocialInfo();

  return (
    <div className="mx-auto w-fit py-12 lg:py-16 flex flex-col items-center">
      <h1 className="text-3xl font-bold leading-none mb-12 text-center lg:text-4xl lg:mb-16 xl:text-6xl">
        Michkov Eugene | Links
      </h1>
      <div className="gap-4 lg:gap-12 w-[340px] lg:w-[636px] xl:w-[864px] grid_template">
        <SocialCard
          {...socialCardsData.github}
          className="hover:bg-zinc-900/60 hover:shadow-zinc-500/40 github"
        />
        <SocialCard
          {...socialCardsData.gitlab}
          className="hover:bg-[#140C0C] hover:shadow-[#E24329]/40 gitlab"
        />
        <SocialCard
          {...socialCardsData.telegram}
          className="hover:bg-[#0B1116] hover:shadow-[#28A7E8]/40 telegram"
        />
        <AboutCard />
        <PortfolioCard />
        <SocialCard
          {...socialCardsData.leetcode}
          className="hover:bg-[#15110D] hover:shadow-[#EBA340]/40 leetcode"
        />
        <SpotifyCard />
      </div>
    </div>
  );
}
