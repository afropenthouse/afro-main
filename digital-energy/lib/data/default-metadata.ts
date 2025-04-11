import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: {
    default: "Digital Energy Ltd",
    template: "%s | Digital Energy Ltd",
  },
  // generator: "Next.js",
  description:
    "Digital Energy Ltd",
  applicationName: "Digital Energy Ltd",
  keywords: [
    "Digital Energy Ltd",
    "Procurement services",
    "Engineering services",
  ],
  category: "Petroleum",
  authors: [
    {
      name: "Digital Tech",
      url: "https://digitaltech.com",
    },
  ],
  creator: "Digital Energy Ltd",
  publisher: "Digital Energy Ltd",
  // metadataBase: new URL(process.env.PUBLIC_APP_URL as string),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
    },
  },
  openGraph: {
    title: {
      default: "Digital Energy Ltd",
      template: "%s | Digital Energy Ltd",
    },
    description:
      "Digital Energy Ltd",
    url: "https://digitalenergy.com",
    siteName: "Digital Energy Ltd",
    images: [
      {
        url: "https://digitalenergy/image.png",
        width: 1000,
        height: 600,
        alt: "Digital Energy Ltd",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  appLinks: {
    ios: undefined,
    android: undefined,
  },
  icons: {
    // icon: [
    //     {
    //         media: "(prefers-color-scheme: dark)",
    //         url: "../../public/favicon.ico",
    //         href: "../../public/favicon.ico",
    //     },
    //     {
    //         media: "(prefers-color-scheme: light)",
    //         url: "../../public/favicon.ico",
    //         href: "../../public/favicon.ico",
    //     }
    // ],
    other: [
      // {
      //     rel: 'apple-touch-icon-precomposed',
      //     url: '/apple-touch-icon-precomposed.png',
      // },
      {
        rel: "de-logo-horizontal",
        url: "/de-logo-horizontal.svg",
      },
      {
        rel: "apple-touch-icon",
        url: "/apple-touch-icon.png",
      },
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
      {
        rel: "mstile-150x150",
        url: "/mstile-150x150.png",
      },
      {
        rel: "safari-pinned-tab",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  ...(process.env.NODE_ENV === "development" && {
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: true,
      },
    },
  }),
  // twitter: {
  //     card: 'summary_large_image',
  //     title: 'Digital Energy Ltd',
  //     description: 'Digital Energy Ltd',
  //     creator: '@DigitalTech',
  //     images: ['https://digitalenergy/og.png'], // Must be an absolute URL
  // },
};
