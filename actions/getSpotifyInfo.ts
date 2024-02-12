"use server";

interface GetSpotifyInfo {
  title: string;
  songs: number;
  cover: string;
}

const getToken = async (): Promise<string | undefined> => {
  const data = new URLSearchParams();
  data.append("grant_type", "client_credentials");
  data.append("client_id", process.env.SPOTIFY_CLIENT_ID || "");
  data.append("client_secret", process.env.SPOTIFY_CLIENT_SECRET || "");

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  if (res.status === 200) return (await res.json()).access_token;
};

export const getSpotifyInfo = async (): Promise<GetSpotifyInfo | undefined> => {
  const token = await getToken();
  const defaultValue = {
    title: "To ride Porsche 992",
    songs: 53,
    cover:
      "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebb07b9c8e2c40dcb8fe14174c6",
  };
  if (!token) return defaultValue;
  const res = await fetch(
    "https://api.spotify.com/v1/playlists/52ujyIugSAiTRwaQFnwKhL",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (res.status !== 200) {
    return defaultValue;
  }
  const response = await res.json();
  return {
    title: response.name,
    songs: response.tracks.items.length,
    cover: response.images[0].url,
  };
};
