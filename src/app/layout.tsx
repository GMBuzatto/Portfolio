import type { Metadata } from "next";
import { Press_Start_2P, Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { profile } from "@/features/profile/data";
import { env } from "@/lib/env";
import "@/styles/globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-press-start",
});

const title = `${profile.name} · ${profile.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
  title: {
    default: title,
    template: `%s · ${profile.name}`,
  },
  description: profile.headline,
  authors: [{ name: profile.name, url: profile.linkedinUrl }],
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    url: "/",
    title,
    description: profile.headline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${roboto.variable} ${pressStart.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
