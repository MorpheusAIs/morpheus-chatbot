import { chatModels, isDemo } from "@/lib/ai/models";

export async function GET() {
  const headers = {
    "Cache-Control": "public, max-age=86400, s-maxage=86400",
  };

  if (isDemo) {
    return Response.json({ models: chatModels }, { headers });
  }

  return Response.json({ models: chatModels }, { headers });
}
