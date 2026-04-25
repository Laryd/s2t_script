import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

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
    <html
      lang="en"
      className={`scroll-smooth ${syne.variable} ${dmSans.variable}`}
    >
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
