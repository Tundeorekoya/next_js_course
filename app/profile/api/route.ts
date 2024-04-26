import { type NextRouter } from "next/router";
import { headers } from "next/headers";

export async function GET(Request: NextRouter) {
  const headerList = headers();
  console.log(headerList.get("Authorization"));
  return new Response("profile API data");
}
  