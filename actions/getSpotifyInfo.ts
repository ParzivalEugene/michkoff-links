"use server";

import { env } from "@/env";
import { spotifyPlaylistId } from "@/data/constants";

export interface GetSpotifyInfo {
  title: string;
  songs: number;
  cover: string;
  link: string;
}

const getToken = async (): Promise<string | undefined> => {
  const data = new URLSearchParams();
  data.append("grant_type", "client_credentials");
  data.append("client_id", env.SPOTIFY_CLIENT_ID);
  data.append("client_secret", env.SPOTIFY_CLIENT_SECRET);

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    next: {
      revalidate: 60,
    },
  });
  if (res.status === 200) return (await res.json()).access_token;
};

export const getSpotifyInfo = async (): Promise<GetSpotifyInfo> => {
  const defaultValue = {
    title: "To drive Porsche 992",
    songs: 53,
    cover:
      "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebb07b9c8e2c40dcb8fe14174c6",
    link: "https://open.spotify.com/playlist/52ujyIugSAiTRwaQFnwKhL",
  };
  const token = await getToken();
  if (!token) return defaultValue;

  const playlistRes = await fetch(
    `https://api.spotify.com/v1/playlists/${spotifyPlaylistId}?fields=name,images`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: {
        revalidate: 60,
      },
    }
  );

  const countRes = await fetch(
    `https://api.spotify.com/v1/playlists/${spotifyPlaylistId}/tracks?fields=total`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: {
        revalidate: 60,
      },
    }
  );

  if (playlistRes.status !== 200 || countRes.status !== 200)
    return defaultValue;

  const playlistResponse = await playlistRes.json();
  const countResponse = await countRes.json();

  return {
    title: playlistResponse.name,
    songs: countResponse.total,
    cover: playlistResponse.images[0].url,
    link: `https://open.spotify.com/playlist/${spotifyPlaylistId}`,
  };
};
