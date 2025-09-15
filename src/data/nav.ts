export type NavItem =
  | { label: string; href: string }
  | { label: string; items: { label: string; href: string }[] };

export const nav: NavItem[] = [
  { label: '홈', href: '/' },
  {
    label: '학술대회 안내',
    items: [
      { label: '학술대회 개요', href: '/about/overview' },
      { label: '초대의 말씀', href: '/about/invitation' },
    ],
  },
  {
    label: '프로그램',
    items: [
      { label: '행사 일정표', href: '/program/schedule' },
      { label: '초청 연사', href: '/program/speakers' },
    ],
  },
  {
    label: '초록제출/발표안내',
    items: [
      { label: '초록제출 안내', href: '/submission/guide' },
      { label: '발표 안내', href: '/submission/presentation' },
    ],
  },
  {
    label: '참가 등록',
    items: [
      { label: '등록비', href: '/registration/fees' },
      { label: '협찬', href: '/registration/sponsorship' },
    ],
  },
  { label: '오시는 길', href: '/venue' },
];

// 외부 시스템(ManuscriptLink 등) URL을 여기에 모아두면 교체가 쉽습니다.
export const externalLinks = {
  submission: 'https://www.manuscriptlink.com/society/ksafm/submit', // 예시 - 실제 URL로 교체
  registration: 'https://www.manuscriptlink.com/society/ksafm/register', // 예시 - 실제 URL로 교체
};
