import { Box, Button, Stack, Flex, Center, Text, SimpleGrid, Link } from "@chakra-ui/react";
import type { NextPage } from "next";
import Hero from "components/sections/Hero";
import JoinCommunity from "components/sections/JoinCommunity";
import Roadmap from "../../components/sections/alphanet/Roadmap";
import UseCases from "components/sections/UseCases";
import FAQs from "components/sections/FAQs";
import RoadmapFull from "../../components/sections/home/RoadMapFull";
import Image from "next/image";
import { AlphanetFeatureIcons } from "@shm/Icons";
import { NextSeo } from "next-seo";
import { CLAIM_100_SHM_LINK, DOCS_URL } from "constants/links";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import WhatCanYoDo from "@shm/components/sections/WhatCanYouDo";
import SlidingStats from "@shm/components/common/SlidingStats";
import { IconGlobe, IconTransaction, IconWeb3 } from "@shm/Icons";
import NextLink from "next/link";
import { getSHMNewsArticles } from "utils/api";

const RoadMapFullPage: NextPage = () => {
  const { t: pageTranslation } = useTranslation(["page-alphanet"]);
  const { t: commonTranslation } = useTranslation(["common"]);
  const stats = [
    { Icon: IconTransaction, title: "total-transaction" },
    { Icon: IconGlobe, title: "total-accounts" },
    { Icon: IconGlobe, title: "total-contracts" },
    { Icon: IconGlobe, title: "active-nodes" },
    { Icon: IconTransaction, title: "total-transaction" },
    { Icon: IconGlobe, title: "total-accounts" },
    { Icon: IconGlobe, title: "total-contracts" },
    { Icon: IconGlobe, title: "active-nodes" },
  ];
  return (
    <>
      {/* Hero section */}
      <Hero
        breadcrumb={
          <>
            <p>
              <NextLink href="/" passHref>
                Home
              </NextLink>{" "}
              / Roadmap
            </p>
          </>
        }
      />
      <RoadmapFull />
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  const news = await getSHMNewsArticles();
  return {
    props: {
      news,
      ...(await serverSideTranslations(locale, ["common", "page-home"])),
    },
  };
};

export default RoadMapFullPage;
