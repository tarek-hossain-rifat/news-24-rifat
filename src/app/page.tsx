import Marquee from "@/components/Marquee";
import Image from "next/image";
import Link from "next/link";
import type { MainNewsType } from "@/types";
import MainNews from "@/components/MainNews";

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections", {
    next: { revalidate: 3600 },
  });
  const newsData = await res.json();

  const section = newsData.data[0].articles.map((item: MainNewsType) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    link: item.link,
    imageUrl: item.imageUrl,
    imageAlt: item.imageAlt,
    category: item.category,
    type: item.type,
    isLive: item.isLive,
    firstPublished: item.firstPublished,
    lastPublished: item.lastPublished,
    source: item.source,
  }));

  return (
    <div>
      <Marquee></Marquee>

      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-6 mt-4">
        {/* news section */}
        <div className="col-span-2">
          <MainNews news={section}></MainNews>
        </div>

        {/* most read section */}
        <div className="col-span-1 bg-red-400">

        </div>
      </div>
    </div>
  );
}
