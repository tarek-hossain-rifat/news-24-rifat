import React from "react";
import type { MainNewsType } from "@/types";
import Image from "next/image";

const MainNews = ({ news }: { news: MainNewsType[] }) => {
  const [firstNews, ...remainingNews] = news;
  //   const firstNews = news[0];
  //   const remainingNews = news.slice(1);

  return (
    <div className="flex gap-3">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <Image
            height={200}
            width={400}
            className="w-full h-48 object-cover"
            src={firstNews.imageUrl}
            alt={firstNews.imageAlt}
          />
        </figure>

        <div className="card-body">
          <p className="text-red-500">প্রধান খবর</p>
          <h2 className="card-title">{firstNews.title}</h2>
          <p>{firstNews.description}</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {remainingNews.slice(0, 4).map((item) => (
          <div
            key={item.id}
            className="card bg-base-100 border border-gray-300"
          >
            <div className="grid grid-cols-3 items-center">
              <div className="col-span-1 flex items-center justify-center">
                <Image
                  className="rounded-md"
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  width={100}
                  height={100}
                />
              </div>
              <div className="col-span-2">
                <p className="text-red-500">প্রধান খবর</p>
                <span>{item.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
