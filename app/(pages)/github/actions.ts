import { GithubPageData } from "@/types";

export default async function getUserDetails(username: string) {
  try {
    const res = await fetch(`/api/github?username=${username}`);

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(
        errorData?.message || `HTTP error! status: ${res.status}`
      );
    }

    const data: GithubPageData = await res.json();

    return data;
  } catch (error) {
    {
      throw new Error();
    }
  }
}
