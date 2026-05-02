"use client";

import type { ReactNode } from "react";
import { LanguageProvider } from "@/shared/providers/LanguageProvider";

type AppProvidersProps = {
  children: ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
