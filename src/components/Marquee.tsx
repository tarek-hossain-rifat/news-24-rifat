import type { Marquees } from "@/types";
import React from "react";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";


const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }

  const fullData = await res.json();
  const data: Marquees[] = fullData.data;

  return (
    <div className="flex flex-row items-center justify-center bg-red-600 text-white px-4">
      <div className="max-w-6xl mx-auto flex flex-row items-center">
        <div className="px-6 py-3 font-bold text-lg bg-red-700">
          <p>সর্বশেষ</p>
        </div>
        <MarqueeText className="" direction="right" duration={15}>
          {data.map((item) => (
            <React.Fragment key={item.id}>
              <span>{item.title}</span>
              <span className="mx-4">•</span>
            </React.Fragment>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
