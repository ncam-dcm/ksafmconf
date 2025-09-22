// FILE: next.config.ts
import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repo = "ksafmconf"; // ← 리포지토리 이름으로 바꾸세요

const nextConfig: NextConfig = {
  output: "export",          // 정적 사이트 출력 (out/)
  trailingSlash: true,       // GH Pages에서 폴더 인덱스 경로 안정화
  images: { unoptimized: true }, // next/image 최적화 끔 (정적 환경 필수)
  basePath:  `/${repo}` ,
  assetPrefix:  `/${repo}/` 
  
};

export default nextConfig;
