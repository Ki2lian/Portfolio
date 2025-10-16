import "./globals.css";

import { Metadata, Viewport } from "next";

import { EXTERNAL_LINKS } from "@/routes";

export const metadata: Metadata = {
    alternates: {
        canonical: "/",
        languages: {
            en: "/en",
            fr: "/fr",
        },
    },
    applicationName: "Portfolio de Ki2lian",
    authors: [ { name: "Ki2lian", url: EXTERNAL_LINKS.GITHUB } ],
    creator: "Ki2lian",
    description:
        "Développeur web full-stack avec une passion pour la concrétisation des idées. Contribue activement à la réalisation de sites web en apportant un mélange de compétences et de connaissances. Curieux de nature, travailleur acharné et épistémophile dans le domaine du développement web.",
    keywords:
        "portfolio, Ki2lian, projets, developeur, web, developer",
    metadataBase: new URL(EXTERNAL_LINKS.WEBSITE_BASE),
    openGraph: {
        description:
            "Développeur web full-stack avec une passion pour la concrétisation des idées. Contribue activement à la réalisation de sites web en apportant un mélange de compétences et de connaissances. Curieux de nature, travailleur acharné et épistémophile dans le domaine du développement web.",
        images: "/assets/images/logo.png",
        locale: "fr_FR",
        siteName: "Portfolio de Ki2lian",
        title: "Portfolio de Ki2lian",
        type: "website",
    },
    robots: "index, follow",
    twitter: {
        card: "summary_large_image",
        creator: "@ki2lianm",
        description:
            "Développeur web full-stack avec une passion pour la concrétisation des idées. Contribue activement à la réalisation de sites web en apportant un mélange de compétences et de connaissances. Curieux de nature, travailleur acharné et épistémophile dans le domaine du développement web.",
        images: "/assets/images/logo.png",
        title: "Portfolio de Ki2lian",
    },
};

export const viewport: Viewport = {
    initialScale: 1,
    minimumScale: 1,
    width: "device-width",
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <head>
                <link href="/manifest.json" rel="manifest" />
                <link href="/favicon.ico" rel="icon" />
                <link href="/icon0.svg" rel="icon" type="image/svg+xml" />
                <link href="/icon1.png" rel="icon" sizes="256x256" type="image/png" />
                <link href="/apple-icon.png" rel="apple-touch-icon" />
                <link href="/web-app-manifest-192x192.png" rel="icon" sizes="192x192" type="image/png" />
                <link href="/web-app-manifest-512x512.png" rel="icon" sizes="512x512" type="image/png" />
                <meta content="#0d1521" name="theme-color" />
                <meta content="yes" name="mobile-web-app-capable" />
                <meta content="default" name="apple-mobile-web-app-status-bar-style" />
                <meta content="KP" name="apple-mobile-web-app-title" />
            </head>
            {children}
        </>
    );
};

export default RootLayout;
