import Link from 'next/link';
import { Calendar, MapPin, FileText, Users, BookOpen, ArrowRight, Newspaper } from 'lucide-react';
import { externalLinks } from '@/data/nav';
import { home } from '@/data/home';

export default function Page() {
  return (
    <main>
      {/* Hero (상단 배너) */}
      <section className='border-b bg-white'>
        <div className='mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-10 md:grid-cols-2'>
          <div>
            <p className='mb-2 text-[11px] font-semibold tracking-widest text-gray-500'>
              {home.society}
            </p>
            <h1 className='mb-3 text-[34px] font-extrabold leading-tight md:text-[42px]'>
              {home.title}
            </h1>
            <p className='mb-6 text-[15px] leading-relaxed text-gray-700 md:text-[16px]'>
              주제: {home.theme}
              <br />
              <span className='inline-flex items-center gap-2 text-gray-800'>
                <Calendar className='h-4 w-4' /> {home.dateText}
              </span>
              <span className='mx-2'>·</span>
              <span className='inline-flex items-center gap-2 text-gray-800'>
                <MapPin className='h-4 w-4' /> {home.venueText}
              </span>
            </p>
            <div className='flex flex-wrap gap-2'>
              <a
                href={externalLinks.submission}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center rounded-[10px] bg-black px-4 py-2 text-[13px] font-medium text-white hover:opacity-90'>
                <FileText className='mr-2 h-4 w-4' /> 초록 제출
              </a>
              <a
                href={externalLinks.registration}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center rounded-[10px] border px-4 py-2 text-[13px] font-medium hover:bg-gray-50'>
                <Users className='mr-2 h-4 w-4' /> 온라인 등록
              </a>
            </div>
          </div>

          {/* 우측 Important Dates 박스 */}
          <div className='rounded-[14px] border bg-white p-5 shadow-sm'>
            <h2 className='mb-3 flex items-center gap-2 text-[16px] font-semibold'>
              <Calendar className='h-5 w-5' /> Important Dates
            </h2>
            <ul className='space-y-3'>
              {home.importantDates.map((d) => (
                <li key={d.date} className='flex items-start gap-3'>
                  <div className='mt-2 h-1.5 w-1.5 rounded-full bg-gray-800' />
                  <div>
                    <p className='font-medium text-[14px]'>{d.label}</p>
                    <p className='text-[13px] text-gray-600'>{d.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 중간 영역: 공지 + 바로가기 카드 */}
      <section className='mx-auto max-w-6xl px-4 py-10'>
        <div className='grid gap-6 md:grid-cols-3'>
          {/* 공지 리스트 */}
          <div className='md:col-span-2'>
            <div className='mb-3 flex items-center gap-2'>
              <Newspaper className='h-5 w-5' />
              <h2 className='text-[18px] font-bold'>공지사항</h2>
            </div>
            <ul className='divide-y rounded-[14px] border bg-white'>
              {home.notices.map((n) => (
                <li
                  key={n.title}
                  className='group flex items-center justify-between px-4 py-3 hover:bg-gray-50'>
                  <Link href={n.href} className='text-[14px] text-gray-800 group-hover:underline'>
                    {n.title}
                  </Link>
                  <ArrowRight className='h-4 w-4 text-gray-500' />
                </li>
              ))}
            </ul>
          </div>

          {/* 바로가기 카드 */}
          <div className='grid gap-4'>
            <Link
              href='/about/overview'
              className='block rounded-[14px] border p-4 shadow-sm transition hover:shadow'>
              <h3 className='mb-1 flex items-center gap-2 text-[15px] font-semibold text-gray-900'>
                <BookOpen className='h-5 w-5' /> 학술대회 개요
              </h3>
              <p className='text-[13px] text-gray-600'>행사 목적·주제·세부 분야 안내</p>
            </Link>
            <Link
              href='/program/schedule'
              className='block rounded-[14px] border p-4 shadow-sm transition hover:shadow'>
              <h3 className='mb-1 flex items-center gap-2 text-[15px] font-semibold text-gray-900'>
                <Calendar className='h-5 w-5' /> 행사 일정표
              </h3>
              <p className='text-[13px] text-gray-600'>세션 시간표 및 장소</p>
            </Link>
            <Link
              href='/venue'
              className='block rounded-[14px] border p-4 shadow-sm transition hover:shadow'>
              <h3 className='mb-1 flex items-center gap-2 text-[15px] font-semibold text-gray-900'>
                <MapPin className='h-5 w-5' /> 오시는 길
              </h3>
              <p className='text-[13px] text-gray-600'>장소 및 교통·숙박 안내</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
