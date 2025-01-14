import {
  GetGithubInfo,
  getGithubInfo,
  GetLeetcodeInfo,
  getLeetcodeInfo,
} from "@/actions/getSocialInfo";
import { AboutCard } from "@/components/about-card";
import { PortfolioCard } from "@/components/portfolio-card";
import { ResumeCard } from "@/components/resume-card";
import { SocialCard } from "@/components/social-card";
import { SpotifyCard } from "@/components/spotify-card";
import GithubIcon from "@/public/logos/github.png";
import LeetcodeIcon from "@/public/logos/leetcode.png";
import TelegramIcon from "@/public/logos/telegram.png";

export default async function Home() {
  const githubDescription = (await getGithubInfo()) as GetGithubInfo;
  const leetcodeDescription = (await getLeetcodeInfo()) as GetLeetcodeInfo;

  return (
    <div className="mx-auto w-fit py-12 lg:py-16 flex flex-col items-center">
      <h1 className="text-3xl font-bold leading-none mb-12 text-center lg:text-4xl lg:mb-16 xl:text-6xl">
        Michkov Eugene | Links
      </h1>
      <div className="gap-4 lg:gap-12 w-[340px] lg:w-[636px] xl:w-[864px] grid_template">
        <SocialCard
          link="https://github.com/ParzivalEugene"
          icon={GithubIcon}
          description={[
            `${githubDescription.contirbutions} contributions`,
            `${githubDescription.repositories} repositories`,
          ]}
          title="ParzivalEugene"
          className="hover:bg-zinc-900/60 hover:shadow-zinc-500/40 github"
        />
        <ResumeCard />
        <SocialCard
          link="https://t.me/parzival_eugene"
          icon={TelegramIcon}
          description={["Preferred communication"]}
          title="parzival_eugene"
          className="hover:bg-[#0B1116] hover:shadow-[#28A7E8]/40 telegram"
        />
        <AboutCard />
        <PortfolioCard />
        <SocialCard
          link="https://leetcode.com/ParzivalEugene/"
          icon={LeetcodeIcon}
          description={[
            `${leetcodeDescription.rank} rank`,
            `${leetcodeDescription.solved} solved`,
          ]}
          title="ParzivalEugene"
          className="hover:bg-[#15110D] hover:shadow-[#EBA340]/40 leetcode"
        />
        <SpotifyCard />
      </div>
    </div>
  );
}
