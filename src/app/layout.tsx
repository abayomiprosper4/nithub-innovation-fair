import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nithub@5",
  description: "Nithub Innovation Fair at 5 - University of Lagos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
