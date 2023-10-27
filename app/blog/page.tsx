"use client"
import BlogCard from "@/components/blog/blog-card"
import Head from "next/head"

export default function BotPage() {
  return ( 
    <main className="w-full pt-16 flex flex-col top-0 justify-start items-center text-center min-h-screen">
    <Head>
      <meta name="description" content="Visit Applio's blog with the latest news!" />
    </Head> 
        <section className="w-full max-w-6xl p-5 pt-0 flex flex-col gap-5">
            <BlogCard />  
        </section>
  </main>
)
}
