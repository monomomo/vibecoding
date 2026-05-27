import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "张三 - 前端开发工程师",
  description: "张三的个人网站，专注于前端开发，展示工作经历、技能和项目作品",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}