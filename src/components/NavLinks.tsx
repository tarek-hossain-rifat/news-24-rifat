import Link from "next/link";
import type { CategoryResponse } from "@/types";
import { Button } from "@heroui/react";

const NavLinks = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const result: CategoryResponse = await res.json();
  const filteredData = result.data.filter((category) => category.scrapable);

  return (
    <nav className="flex items-center gap-6">
      <Link href={`/home`}>
        <Button className="bg-green-300 px-5 py-2 text-gray-900 hover:bg-green-500 hover:text-black">
          হোমে
        </Button>
      </Link>
      {filteredData.map((category) => (
        <Link
          key={category.slug}
          href={
            category.slug.startsWith("/")
              ? category.slug
              : `/category/${category.slug}`
          }
          className="text-sm font-medium hover:text-blue-600"
        >
          <Button className="bg-green-300 px-5 py-2 text-gray-900 hover:bg-green-500 hover:text-black">
            {category.title}
          </Button>
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
