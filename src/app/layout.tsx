import Header from "@/components/Header";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TaskForge',
  description: 'A KANBAN board todo app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body className={inter.className}>
        <Header />
        <main className="p-8">
          {children}
        </main>
      </body>
    </html>
  )
}
