import React from "react";
import { useTranslation } from "next-i18next";
import { Box, Container, Flex, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import { CommunityStat } from "types";
import {
  TWITTER_URL,
  GITHUB_URL,
  TELEGRAM_URL,
  DISCORD_URL,
  YOUTUBE_URL,
  REDDIT_URL,
  LINKEDIN_URL,
} from "constants/links";
import Image from "next/image";

type Tile = {
  key: string;
  title: string;
  icon: string;
  link: string;
  fallBackNum: string;
  userAlias: string;
};

const tilesData: Tile[] = [
  {
    key: "discord",
    title: "Discord",
    icon: "/community/icons/discord.svg",
    link: DISCORD_URL,
    fallBackNum: "4500+",
    userAlias: "members",
  },
  {
    key: "youtube",
    title: "YouTube",
    icon: "/community/icons/youtube.svg",
    link: YOUTUBE_URL,
    fallBackNum: "1.67k+",
    userAlias: "subscribers",
  },
  {
    key: "twitter",
    title: "Twitter",
    icon: "/community/icons/twitter.svg",
    link: TWITTER_URL,
    fallBackNum: "13.5k+",
    userAlias: "followers",
  },
  {
    key: "telegram",
    title: "Telegram",
    icon: "/community/icons/telegram.svg",
    link: TELEGRAM_URL,
    fallBackNum: "4.6k+",
    userAlias: "members",
  },
  {
    key: "reddit",
    title: "Reddit",
    icon: "/community/icons/reddit.svg",
    link: REDDIT_URL,
    fallBackNum: "141",
    userAlias: "members",
  },
  {
    key: "github",
    title: "GitHub",
    icon: "/community/icons/github.svg",
    link: GITHUB_URL,
    fallBackNum: "14",
    userAlias: "contributors",
  },
  {
    key: "linkedin",
    title: "LinkedIn",
    icon: "/community/icons/linkedin.svg",
    link: LINKEDIN_URL,
    fallBackNum: "891",
    userAlias: "followers",
  },
];

const CommunityTiles = ({ communityStats }: { communityStats: CommunityStat[] }) => {
  const { t: pageTranslation } = useTranslation("page-community");

  const handleTileClick = (url: string) => {
    window.open(url, "_blank"); //to open new page
  };

  const communityStatsMap = communityStats?.reduce((result: any, item) => {
    result[item.key] = item.followerCount;
    return result;
  }, {});

  return (
    <Flex bg="brand.white" as="section">
      <Container maxW="container.xl" mx="auto" p="6" px={{ base: 6, xl: 0 }} pb="32">
        <Box>
          <VStack spacing={2} width="100%" alignItems="start">
            <Text
              as="h3"
              textAlign="left"
              lineHeight="normal"
              fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}
              fontWeight="bold"
              width="100%"
              color="brand.grey-90"
            >
              {pageTranslation("page-community-join-community-h1")}
            </Text>
            <Box maxW={{ base: "md", md: "full" }}>
              <Text
                fontSize={{ base: "md", lg: "md" }}
                textAlign="left"
                lineHeight={{ base: "7", md: "8" }}
                color="brand.grey-80"
              >
                {pageTranslation("page-community-join-community-description")}
              </Text>
            </Box>

            <Wrap spacing={{ base: "4", sm: "4", lg: "6" }}>
              {tilesData?.map((tile) => (
                <WrapItem key={tile.key}>
                  <Box
                    display="flex"
                    flexDir="column"
                    cursor="pointer"
                    overflow="hidden"
                    bgColor="brand.white"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    p={{ base: "3", sm: "4", lg: "5" }}
                    pb={{ base: "4", sm: "6", lg: "8" }}
                    minW={{ base: "156px", sm: "156px", lg: "266px" }}
                    border={"1px solid"}
                    borderColor={"brand.grey-70"}
                    _hover={{
                      bgColor: "brand.grey-10",
                    }}
                    onClick={() => handleTileClick(tile.link)}
                  >
                    <Image src={tile.icon} alt={tile.key} width={32} height={32} />
                    <Text
                      color={"brand.grey-80"}
                      fontSize={{ base: "xs", sm: "md", lg: "lg" }}
                      fontWeight={"bold"}
                    >
                      {pageTranslation(`page-community-${tile.key}`) || tile.title}
                    </Text>

                    <Text
                      color={"brand.grey-80"}
                      fontSize={{ base: "xs", sm: "sm", lg: "sm" }}
                      fontWeight={"light"}
                    >
                      {communityStatsMap?.[tile.key] || tile.fallBackNum}{" "}
                      {pageTranslation(`page-community-join-${tile.userAlias}`) || tile.userAlias}
                    </Text>
                  </Box>
                </WrapItem>
              ))}
            </Wrap>
          </VStack>
        </Box>
      </Container>
    </Flex>
  );
};

export default CommunityTiles;
