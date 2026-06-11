import type { Metadata } from "next";

const fallbackSiteUrl = "http://localhost:3000";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL &&
  /^https?:\/\//.test(process.env.NEXT_PUBLIC_SITE_URL)
    ? process.env.NEXT_PUBLIC_SITE_URL
    : fallbackSiteUrl;

export const metadataBase = new URL(siteUrl);

export const brandName = "AMY";
export const fullName = "Arnold Mubuanga Yate";
export const siteName = `${brandName} · Portfolio & CV`;

export const defaultKeywords = [
  "Arnold Mubuanga Yate",
  "AMY",
  "CV ingénieur développement",
  "chef de projet informatique",
  "portfolio développeur web",
  "consultant IT",
  "développement Symfony",
  "développement Angular",
  "applications métier",
  "plateformes web",
  "Ville de Lille",
  "Dassault Systèmes",
];

type BuildPageMetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function buildPageMetadata({
  title,
  description,
  path = "/",
}: BuildPageMetadataInput): Metadata {
  return {
    title,
    description,
    keywords: defaultKeywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName,
      locale: "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
