import { AboutCard } from "@/components/about-card";
import { PortfolioCard } from "@/components/portfolio-card";
import { SocialCard } from "@/components/social-card";
import { SpotifyCard } from "@/components/spotify-card";

import { socialCardsData } from "@/data/text";

export default function Home() {
  return (
    <div className="m-24">
      <div className="grid grid-rows-[repeat(3,_minmax(180px,_1fr))] grid-cols-4 gap-12 w-[864px]">
        <SocialCard {...socialCardsData.github} />
        <SocialCard {...socialCardsData.gitlab} />
        <SocialCard {...socialCardsData.telegram} />
        <AboutCard />
        <PortfolioCard />
        <SocialCard {...socialCardsData.leetcode} />
        <SpotifyCard />
      </div>
      {/* <ModeToggle /> */}
    </div>
  );
}
