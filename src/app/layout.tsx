import type { Metadata } from "next";
import { siteCopy } from "@/features/landing/content/statica";
import { AppProviders } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: `${siteCopy.en.metadata.title} / ${siteCopy.ka.metadata.title}`,
  description: `${siteCopy.en.metadata.description} / ${siteCopy.ka.metadata.description}`
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ka">
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
