"use server";

interface GetGithubInfo {
  contirbutions: number;
  repositories: number;
}

interface GetLeetcodeInfo {
  solved: number;
  rank: number;
}

const getGithubInfo = async (): Promise<GetGithubInfo | undefined> => {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    body: JSON.stringify({
      query: `query {
          viewer {
            contributionsCollection {
              contributionCalendar {
                totalContributions
              }
            }
            repositories {
              totalCount
            }
          }
        }`,
    }),
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  });

  if (res.status === 200) {
    const response = await res.json();
    return {
      contirbutions:
        response.data.viewer.contributionsCollection.contributionCalendar
          .totalContributions,
      repositories: response.data.viewer.repositories.totalCount,
    };
  }
  return {
    contirbutions: 253,
    repositories: 38,
  };
};

const getLeetcodeInfo = async (): Promise<GetLeetcodeInfo | undefined> => {
  const res = await fetch(
    "https://leetcode-stats-api.herokuapp.com/ParzivalEugene",
    {
      method: "GET",
    }
  );

  if (res.status === 200) {
    const response = await res.json();
    return {
      solved: response.totalSolved,
      rank: response.ranking,
    };
  }
  return {
    solved: 150,
    rank: 551303,
  };
};

export const getSocialInfo = async () => {
  const github = await getGithubInfo();
  const leetocde = await getLeetcodeInfo();
  return {
    github: {
      link: "https://github.com/ParzivalEugene",
      icon: "/logos/github.png",
      description: [
        `${github?.contirbutions} contributions`,
        `${github?.repositories} repositories`,
      ],
      title: "ParzivalEugene",
    },
    gitlab: {
      link: "https://gitlab.com/ParzivalEugene",
      icon: "/logos/gitlab.png",
      description: ["Work account"],
      title: "ParzivalEugene",
    },
    telegram: {
      link: "https://t.me/parzival_eugene",
      icon: "/logos/telegram.png",
      description: ["Preferred communication"],
      title: "parzival_eugene",
    },
    leetcode: {
      link: "https://leetcode.com/ParzivalEugene/",
      icon: "/logos/leetcode.png",
      description: [`${leetocde?.solved} solved`, `${leetocde?.rank} rank`],
      title: "ParzivalEugene",
    },
  };
};
