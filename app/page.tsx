"use client"
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default () => {
  useEffect(() => {
    redirect("./home")
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    </main>
  );
}