import Link from 'next/link';
import { Calendar, MapPin, Building2 } from 'lucide-react';
export default function Page() {
  return (
    <main className='mx-auto max-w-6xl px-4 py-10'>
      {/* breadcrumb */}
      <nav className='mb-6 text-sm text-gray-600' aria-label='breadcrumb'>
        <ol className='flex flex-wrap items-center gap-2'>
          <li>
            <Link href='/' className='hover:underline'>
              홈
            </Link>
          </li>
          <li className='text-gray-400'>/</li>
          <li>
            <span className='text-gray-700'>학술대회 안내</span>
          </li>
          <li className='text-gray-400'>/</li>
          <li aria-current='page' className='font-medium text-gray-900'>
            학술대회 개요
          </li>
        </ol>
      </nav>

      {/* 주최/주관 */}
      <section className='mb-8 rounded-2xl border bg-white p-5 shadow-sm'>
        <h1 className='mb-3 text-lg font-semibold'>주최/주관</h1>
        <p className='text-gray-800'>한국농림기상학회</p>
      </section>

      {/* 행사 장소 */}
      <section className='mb-8 rounded-2xl border bg-white p-5 shadow-sm'>
        <h1 className='mb-3 flex items-center gap-2 text-lg font-semibold'>
          <MapPin className='h-5 w-5' /> 행사 장소
        </h1>
        <ul className='list-disc space-y-2 pl-5 text-gray-800'>
          <li>한국농수산대학교 융합교육관</li>
          <li>
            웹사이트:{' '}
            <a
              href='https://www.af.ac.kr/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 underline underline-offset-2'>
              www.af.ac.kr
            </a>
          </li>
        </ul>
      </section>

      {/* 주제 */}
      <section className='mb-8 rounded-2xl border bg-white p-5 shadow-sm'>
        <h1 className='mb-3 text-lg font-semibold'>주제</h1>
        <p className='text-gray-800'>극한기상에 따른 농림분야 피해와 대책</p>
      </section>

      {/* 주요 일정 */}
      <section className='rounded-2xl border bg-white p-5 shadow-sm'>
        <h1 className='mb-3 flex items-center gap-2 text-lg font-semibold'>
          <Calendar className='h-5 w-5' /> 주요 일정
        </h1>
        <ul className='list-disc space-y-2 pl-5 text-gray-800'>
          <li>초록 1차 제출: 2025년 6월 5일</li>
          <li>초록 연장 제출: 2025년 6월 13일</li>
          <li>온라인 등록기간: 2025년 6월 20일</li>
          <li>행사 기간: 2025년 6월 24-25일 (1박 2일)</li>
        </ul>
      </section>
    </main>
  );
}
