import { ModeToggle } from "@/components/mode-switch";
import { PortfolioCard } from "@/components/portfolio-card";
import { SocialCard } from "@/components/social-card";
import { Card, CardFooter } from "@/components/ui/card";

import { socialCardsData } from "@/data/text";

export default function Home() {
  return (
    <div className="m-24">
      <div className="grid grid-rows-[repeat(3,_minmax(180px,_1fr))] grid-cols-4 gap-12 w-[864px]">
        <SocialCard {...socialCardsData.github} />
        <SocialCard {...socialCardsData.gitlab} />
        <SocialCard {...socialCardsData.telegram} />
        <Card className="row-span-2">
          <CardFooter>4</CardFooter>
        </Card>
        <PortfolioCard />
        <SocialCard {...socialCardsData.leetcode} />
        <Card className="col-span-2">
          <CardFooter>7</CardFooter>
        </Card>
      </div>
      {/* <ModeToggle /> */}
    </div>
  );
}
