import type { Metadata } from "next"
import "./globals.css"
import "./reset.css"
import ReactQueryProvider from "../_components/ReactQueryProvider/ReactQueryProvider"
import Header from "../_components/Header/Header"

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
      <body>
        <ReactQueryProvider>
          <Header />
          <main>{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
