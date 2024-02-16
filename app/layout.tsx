import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const runtime = "edge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weather Forecast App.",
  description: "Weather forecast app used Nextjs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={[inter.className, "bg-violet-50 md:py-10"].join(" ")}>
        <div className="mx-auto flex min-h-screen max-w-3xl flex-col py-2 md:rounded-md md:border md:border-violet-300 md:px-16 md:py-4">
          <div className="flex-1">{children}</div>

          <p className="text-center text-sm">
            Powered by{" "}
            <a href="https://www.weatherapi.com/" title="Free Weather API">
              WeatherAPI.com
            </a>
          </p>
        </div>
      </body>
    </html>
  );
}
