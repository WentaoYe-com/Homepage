import './globals.css'

export const metadata = {
  title: '叶文涛 | 学术主页',
  description: '叶文涛的学术主页 - 香港中文大学（深圳）博士候选人',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
