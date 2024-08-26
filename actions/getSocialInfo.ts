"use server";

import { env } from "@/env";

export interface GetGithubInfo {
  contirbutions: number;
  repositories: number;
}

export interface GetLeetcodeInfo {
  solved: number;
  rank: number;
}

export const getGithubInfo = async (): Promise<GetGithubInfo | undefined> => {
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
      Authorization: `Bearer ${env.GITHUB_TOKEN}`,
    },
    next: {
      revalidate: 60,
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
    contirbutions: 222,
    repositories: 38,
  };
};

export const getLeetcodeInfo = async (): Promise<GetLeetcodeInfo | undefined> => {
  const res = await fetch(
    "https://leetcode-stats-api.herokuapp.com/ParzivalEugene",
    {
      method: "GET",
      next: {
        revalidate: 60,
      },
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
