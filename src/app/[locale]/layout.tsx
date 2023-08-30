import Navbar from "@/components/navbar/Navbar";
import "./../css/globals.css";
import { Inter } from 'next/font/google'
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { useTranslations } from "next-intl";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: any
}) {

  const locale = useLocale();
  const t = useTranslations("Home");
  const tMeta = useTranslations("Metadata");

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }


  return (
    <html lang={locale}>
      <head>
        <title>{tMeta("title")}</title>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4928726850682890"
          crossOrigin="anonymous"></script>

        <link rel="canonical" href="https://youthcenteredu.web.app/" />

        <meta name="description" content={tMeta("description")} />
        <meta name="viewport" content={tMeta("viewport")} />
        {/* Add other meta tags here */}
        <meta name="keywords" content={tMeta("keywords")} />
        <meta name="author" content={tMeta("author")} />

        <meta property="og:title" content={tMeta("title")} />
        <meta property="og:description" content={tMeta("description")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://youthcenteredu.web.app/" />
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/portfolio-e7608.appspot.com/o/project-images%2FYCE.png?alt=media&token=622b8df7-c34e-416a-99fd-809de936864b" />
      </head>
      <body className={inter.className}>
        <Navbar props={
          {
            about: t("about"),
            services: t("services"),
            contactus: t("contact us"),
            locale: locale
          }
        } />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
