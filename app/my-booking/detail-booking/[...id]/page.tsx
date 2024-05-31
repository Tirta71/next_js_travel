// pages/detail-order/[id].tsx
"use client";
import DetailOrder from "@/components/MyBook/DetailOrder";
import React from "react";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  return (
    <>
      <DetailOrder id={id} />
    </>
  );
};

export default Page;
