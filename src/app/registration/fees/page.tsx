import { externalLinks } from '@/data/nav';
export default function Page() {
  return (
    <main className='mx-auto max-w-6xl px-4 py-12'>
      <h1 className='mb-6 text-2xl font-bold md:text-3xl'>등록비</h1>
      <p className='mb-4 text-gray-700'>
        사전/현장, 회원/비회원, 학생/일반 등 요금을 표로 안내합니다.
      </p>
      <a
        className='inline-flex rounded-xl border px-4 py-2 text-sm font-medium hover:bg-gray-50'
        href={externalLinks.registration}
        target='_blank'
        rel='noopener noreferrer'>
        온라인 등록하기
      </a>
    </main>
  );
}
