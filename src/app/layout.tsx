import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ReactQueryProvider from "./_components/ReactQueryProvider/ReactQueryProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MovieTV",
  description:
    "좋아하는 영화를 검색하고 상세 정보를 조회할 수 있는 홈페이지입니다.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <main>{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
