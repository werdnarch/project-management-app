import { GithubUserType } from "@/types";
import { NextResponse, NextRequest } from "next/server";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || "TEST_TOKEN"; // safer to use env

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const username = searchParams.get("username");

    if (!username) {
      return NextResponse.json(
        { error: "Missing username parameter" },
        { status: 400 }
      );
    }

    const headers = {
      Authorization: `token ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
    };

    // 1. Get user info
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers,
    });

    if (!userRes.ok) {
      const errorData = await userRes.json().catch(() => null);
      return NextResponse.json(
        {
          error: errorData?.message || `HTTP error! status: ${userRes.status}`,
        },
        { status: userRes.status }
      );
    }
    const user: GithubUserType = await userRes.json();

    // 2. Get all repos
    const reposRes = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100`,
      { headers }
    );
    const repos = await reposRes.json();

    // 3. For each repo, fetch commits by this user
    let totalCommits = 0;

    for (const repo of repos) {
      const commitsRes = await fetch(
        `https://api.github.com/repos/${username}/${repo.name}/commits?author=${username}&per_page=100`,
        { headers }
      );

      if (commitsRes.ok) {
        const commits = await commitsRes.json();
        totalCommits += commits.length; // counts first 100 commits per repo
      }
    }

    const pageData = {
      repositories_count: user.public_repos,
      commits: totalCommits,
    };

    return NextResponse.json(pageData);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message || "Something went wrong" },
      { status: 500 }
    );
  }
}
