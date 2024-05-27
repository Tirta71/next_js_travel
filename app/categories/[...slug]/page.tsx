// app/categories/[slug]/page.tsx
"use client";
import { useParams } from "next/navigation";
import React from "react";
import Categories from "@/components/Child Categories/Categories";

const Page = () => {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  return (
    <>
      <Categories slug={slug} />
    </>
  );
};

export default Page;
