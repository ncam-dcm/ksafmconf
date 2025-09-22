export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;

  return `${BASE_PATH}${p}`;
}