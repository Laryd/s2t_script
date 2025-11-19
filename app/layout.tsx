import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "S2T Script | Professional Transcription Services",
  description:
    "Crystal-clear, human-powered transcriptions for audio, video, podcasts and more. 99% accuracy guarantee. Fast turnaround.",
  keywords: [
    "transcription service",
    "audio transcription",
    "video transcription",
    "podcast transcription",
    "captioning",
    "subtitling",
  ],
  openGraph: {
    title: "S2T Script | Professional Transcription Services",
    description:
      "Crystal-clear, human-powered transcriptions for audio, video, podcasts and more.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "S2T Script | Professional Transcription Services",
    description:
      "Crystal-clear, human-powered transcriptions for audio, video, podcasts and more.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
