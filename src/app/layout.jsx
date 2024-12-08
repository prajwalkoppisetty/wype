import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "WYPE",
  description: "WYPE WASHING SERVICE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
