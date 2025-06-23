import "../styles/globals.css";
import '../components/school/schoolDetails.css'
import type { AppProps } from "next/app";
import { Layout } from "../components";
import { NextSeo } from "next-seo";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="all" />
      </Head>
      <NextSeo
        title="View a comprehensive list of schools with advanced filters and sorting."
        titleTemplate="View a comprehensive list of schools with advanced filters and sorting"
        defaultTitle="View a comprehensive list of schools with advanced filters and sorting"
        description="Discover and compare high schools across the country. Make informed decisions about your child’s future."
        canonical="https://schools.smartchance.org"
        openGraph={{
          url: "https://schools.smartchance.org",
          title: "Educational institutions in Liberia",
          description:
            "Discover and compare high schools across the country. Make informed decisions about your child’s future.",
          images: [
            {
              url: "https://schools.smartchance.org/freddie-marriage.png",
              width: 800,
              height: 420,
              alt: "View a comprehensive list of schools with advanced filters and sorting.",
            },
          ],
        }}
      />
      <Component {...pageProps} />{" "}
    </>
  );
}

export default MyApp;
