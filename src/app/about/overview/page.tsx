import Link from "next/link";
import { Calendar, MapPin, Building2 } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { ICON_IMAGE } from "@/data/source_path";

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* breadcrumb */}
      <nav className="mb-6 text-sm text-gray-600" aria-label="breadcrumb">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:underline">
              홈
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li>
            <span className="text-gray-700">학술대회 안내</span>
          </li>
          <li className="text-gray-400">/</li>
          <li aria-current="page" className="font-medium text-indigo-500">
            학술대회 개요
          </li>
        </ol>
      </nav>

      {/* 주최/주관 */}
      <section className="mb-8 rounded-2xl border bg-white p-5 shadow-sm">
        <SectionTitle icon={ICON_IMAGE} as="h1" className="text-xl">
          주최/주관
        </SectionTitle>
        <p className="text-gray-800 text-lg">- 한국농림기상학회</p>
      </section>

      {/* 행사 장소 */}
      <section className="mb-8 rounded-2xl border bg-white p-5 shadow-sm">
        <SectionTitle icon={ICON_IMAGE} as="h1" className="text-xl">
          행사 장소
        </SectionTitle>
        <ul className="list-none space-y-2 text-lg text-gray-800">
          <li className="relative pl-4 before:absolute before:left-0 before:content-['-']">
            한국농수산대학교 융합교육관
          </li>
          <li className="relative pl-4 before:absolute before:left-0 before:content-['-']">
            웹사이트:{" "}
            <a
              href="https://www.af.ac.kr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline underline-offset-2"
            >
              www.af.ac.kr
            </a>
          </li>
        </ul>
      </section>

      {/* 주제 */}
      <section className="mb-8 rounded-2xl border bg-white p-5 shadow-sm">
        <SectionTitle icon={ICON_IMAGE} as="h1" className="text-xl">
          주제
        </SectionTitle>
        <p className="text-gray-800 text-lg">
          - 극한기상에 따른 농림분야 피해와 대책
        </p>
      </section>

      {/* 주요 일정 */}
      <section className="rounded-2xl border bg-white p-5 shadow-sm">
        <SectionTitle icon={ICON_IMAGE} as="h1" className="text-xl">
          주요 일정
        </SectionTitle>
        <ul className="list-none space-y-2 text-lg text-gray-800">
          <li className="relative pl-4 before:absolute before:left-0 before:content-['-']">
            초록 1차 제출: 2025년 6월 5일
          </li>
          <li className="relative pl-4 before:absolute before:left-0 before:content-['-']">
            초록 연장 제출: 2025년 6월 13일
          </li>
          <li className="relative pl-4 before:absolute before:left-0 before:content-['-']">
            온라인 등록기간: 2025년 6월 20일
          </li>
          <li className="relative pl-4 before:absolute before:left-0 before:content-['-']">
            행사 기간: 2025년 6월 24-25일 (1박 2일)
          </li>
        </ul>
      </section>
    </main>
  );
}
