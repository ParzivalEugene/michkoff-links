import { getSpotifyInfo } from "@/actions/getSpotifyInfo";

export async function GET(request: Request) {
  try {
    const data = await getSpotifyInfo();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Failed to fetch Spotify info.",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
