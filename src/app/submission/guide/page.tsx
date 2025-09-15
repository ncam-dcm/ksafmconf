import { externalLinks } from '@/data/nav';
export default function Page() {
  return (
    <main className='mx-auto max-w-6xl px-4 py-12'>
      <h1 className='mb-6 text-2xl font-bold md:text-3xl'>초록제출 안내</h1>
      <p className='mb-4 text-gray-700'>
        초록 분량/형식/마감일 등 안내를 적고, 아래 버튼으로 제출 시스템으로 이동합니다.
      </p>
      <a
        className='inline-flex rounded-xl border px-4 py-2 text-sm font-medium hover:bg-gray-50'
        href={externalLinks.submission}
        target='_blank'
        rel='noopener noreferrer'>
        제출 시스템 열기
      </a>
    </main>
  );
}
