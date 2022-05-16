import { Box, Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useTranslation } from "next-i18next";
import Hero from "components/sections/Hero";
import JoinCommunity from "components/sections/JoinCommunity";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { COMMUNITY_URL } from "constants/links";
import CommunityIntro from "@shm/components/sections/community/CommunityIntro";
import CommunityTiles from "@shm/components/sections/community/CommunityTiles";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Community: NextPage = () => {
  const { t: pageTranslation } = useTranslation("page-community");

  return (
    <>
      <NextSeo
        title="Shardeum Community"
        description="Shardeum is the world’s first layer 1 blockchain that truly solves scalability trilemma. It is an EVM based smart contract network that scales linearly with low gas fees forever with an aim to onboard billions of daily users and numerous DApps to Web 3"
        canonical="https://shardeum.org/shardeum-liberty-alphanet/"
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "shardeum, shardeum liberty, testnet, alphanet, blockchain,layer1 blockchain,evm compatible blockchain",
          },
          {
            property: "twitter:image",
            content: "https://shardeum.org/shardeum-liberty.jpeg",
          },
        ]}
        openGraph={{
          url: "https://shardeum.org/shardeum-liberty-alphanet/",
          title: "Shardeum Liberty | Alphanet | Build your DApps and Web3 services on Shardeum",
          description:
            "Shardeum is the world’s first layer 1 blockchain that truly solves scalability trilemma. It is an EVM based smart contract network that scales linearly with low gas fees forever with an aim to onboard billions of daily users and numerous DApps to Web 3",
          images: [
            {
              url: "https://shardeum.org/shardeum-liberty.jpeg",
              width: 800,
              height: 600,
              alt: "Shardeum Liberty | Alphanet | Build your DApps and Web3 services on Shardeum",
              type: "image/jpeg",
            },
          ],
          site_name: "Shardeum Liberty | Alphanet | Build your DApps and Web3 services on Shardeum",
        }}
        twitter={{
          cardType: "summary_large_image",
          site: "https://shardeum.org",
          handle: "@shardeum",
        }}
      />

      {/* Hero section */}
      <Hero
        heading={pageTranslation("page-community-hero-h1")}
        description={pageTranslation("page-community-hero-description")}
        cta={
          <Button
            as="a"
            variant="primary"
            size="lg"
            rel="noopener noreferrer"
            target="_blank"
            href={COMMUNITY_URL}
          >
            {pageTranslation("page-community-hero-cta")}
          </Button>
        }
        media={
          <Box position="relative" h="full">
            <Image
              objectFit="contain"
              src="/community/community-hero.png"
              alt="Shardeum Community"
              layout="fill"
            />
          </Box>
        }
      />

      <CommunityIntro />

      <CommunityTiles />

      {/* Join community - common CTA */}
      <JoinCommunity />
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "page-community"])),
      // Will be passed to the page component as props
    },
  };
}

export default Community;
