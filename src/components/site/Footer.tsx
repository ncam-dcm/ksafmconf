import Link from 'next/link';
import { nav, externalLinks } from '@/data/nav';
import { footerData } from '@/data/footer';

function yearText() {
  return String(footerData.year ?? new Date().getFullYear());
}

export default function Footer() {
  // nav를 이용해 컬럼 구성
  const about = nav.find((n) => !('href' in n) && n.label.includes('학술대회'));
  const program = nav.find((n) => !('href' in n) && n.label.includes('프로그램'));
  const submission = nav.find((n) => !('href' in n) && n.label.includes('초록'));
  const registration = nav.find((n) => !('href' in n) && n.label.includes('참가'));
  const venue = nav.find((n) => 'href' in n && n.label.includes('오시는 길'));

  return (
    <footer className='mt-10 border-t bg-gray-50'>
      <div className='mx-auto max-w-6xl px-4 py-10'>
        <div className='grid gap-8 md:grid-cols-4'>
          {/* 학회 정보 */}
          <div className='md:col-span-2'>
            <h3 className='text-[15px] font-semibold text-gray-900'>
              {footerData.legalName ?? footerData.societyKo}
            </h3>
            <p className='text-[12px] text-gray-600'>{footerData.societyEn}</p>
            <div className='mt-3 space-y-1 text-[13px] text-gray-700'>
              <p>
                대표자: {footerData.representative} | 주소: {footerData.address}
              </p>
              <p>
                사업자번호 : {footerData.businessNo} | 전화 : {footerData.phone} | 이메일 :{' '}
                {footerData.email}
              </p>
            </div>
          </div>

          {/* 빠른 메뉴 1 */}
          <div>
            <h4 className='mb-2 text-[13px] font-semibold text-gray-900'>학술대회 안내</h4>
            <ul className='space-y-1 text-[13px] text-gray-700'>
              {about &&
                'items' in about &&
                about.items.map((i) => (
                  <li key={i.href}>
                    <Link href={i.href} className='hover:underline'>
                      {i.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* 빠른 메뉴 2 */}
          <div>
            <h4 className='mb-2 text-[13px] font-semibold text-gray-900'>프로그램</h4>
            <ul className='space-y-1 text-[13px] text-gray-700'>
              {program &&
                'items' in program &&
                program.items.map((i) => (
                  <li key={i.href}>
                    <Link href={i.href} className='hover:underline'>
                      {i.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className='mt-8 grid gap-8 md:grid-cols-4'>
          {/* 빠른 메뉴 3 */}
          <div>
            <h4 className='mb-2 text-[13px] font-semibold text-gray-900'>초록제출/발표안내</h4>
            <ul className='space-y-1 text-[13px] text-gray-700'>
              {submission &&
                'items' in submission &&
                submission.items.map((i) => (
                  <li key={i.href}>
                    <Link href={i.href} className='hover:underline'>
                      {i.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* 빠른 메뉴 4 */}
          <div>
            <h4 className='mb-2 text-[13px] font-semibold text-gray-900'>참가 등록</h4>
            <ul className='space-y-1 text-[13px] text-gray-700'>
              {registration &&
                'items' in registration &&
                registration.items.map((i) => (
                  <li key={i.href}>
                    <Link href={i.href} className='hover:underline'>
                      {i.label}
                    </Link>
                  </li>
                ))}
              <li>
                <a
                  href={externalLinks.registration}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:underline'>
                  온라인 등록 바로가기
                </a>
              </li>
            </ul>
          </div>

          {/* 빠른 메뉴 5 */}
          <div>
            <h4 className='mb-2 text-[13px] font-semibold text-gray-900'>오시는 길</h4>
            <ul className='space-y-1 text-[13px] text-gray-700'>
              {venue && 'href' in venue && (
                <li>
                  <Link href={venue.href} className='hover:underline'>
                    {venue.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t bg-white'>
        <div className='mx-auto flex max-w-6xl items-center justify-center px-4 py-6 text-[12px] text-gray-600'>
          <p className='text-center uppercase tracking-tight'>
            COPYRIGHT KOREAN SOCIETY OF AGRICULTURAL AND FOREST METEOROLOGY ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
