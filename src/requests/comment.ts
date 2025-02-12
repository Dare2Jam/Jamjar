import { getCookie } from "@/helpers/cookie";
import { BASE_URL } from "./config";

export async function postComment(content: string, postId: number) {
  return fetch(`${BASE_URL}/comment`, {
      body: JSON.stringify({
        content,
        postId,
        username: getCookie("user"),
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getCookie("token")}`,
      },
      credentials: "include",
    }
  );
}