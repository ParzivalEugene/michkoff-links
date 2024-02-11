import Image from "next/image";

export const socialCardsData = {
  github: {
    icon: <Image src="/logos/github.png" alt="github" width={26} height={26} />,
    description: ["262 contributions", "31 repositories"],
    title: "ParzivalEugene",
  },
  gitlab: {
    icon: (
      <Image src="/logos/gitlab.png" alt="gitlab" width={380} height={380} />
    ),
    description: ["Work account"],
    title: "ParzivalEugene",
  },
  telegram: {
    icon: (
      <Image src="/logos/telegram.png" alt="telegram" width={26} height={26} />
    ),
    description: ["preferred communication"],
    title: "parzival_eugene",
  },
  leetcode: {
    icon: (
      <Image
        src="/logos/leetcode.png"
        alt="leetcode"
        width={512}
        height={512}
      />
    ),
    description: ["148 solved", "5 languages"],
    title: "ParzivalEugene",
  },
};
