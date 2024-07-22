"use client";
import { useParams } from "next/navigation";
export default function () {
  const { id } = useParams();
  return <div>Under Development {id}</div>;
}
