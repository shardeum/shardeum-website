/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";

import {
  Box,
  Button,
  Stack,
  Flex,
  Center,
  Text,
  SimpleGrid,
  Link,
  Heading,
} from "@chakra-ui/react";
import { Container, VStack, ListItem, OrderedList } from "@chakra-ui/react";

import type { NextPage } from "next";
import Hero from "components/sections/Hero";
import JoinCommunity from "components/sections/JoinCommunity";
import Roadmap from "../../components/sections/alphanet/Roadmap";
import UseCases from "components/sections/UseCases";
import FAQs from "components/sections/FAQs";
import SectionHeading from "../../components/common/SectionHeading";
import Image from "next/image";
import { AlphanetFeatureIcons } from "@shm/Icons";
import { NextSeo } from "next-seo";
import { CLAIM_100_SHM_LINK, DOCS_URL } from "constants/links";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import WhatCanYoDo from "@shm/components/sections/WhatCanYouDo";
import SlidingStats from "@shm/components/common/SlidingStats";
import { IconGlobe, IconTransaction, IconWeb3 } from "@shm/Icons";
import { CheckIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet";

const AlphanetLanding: NextPage = () => {
  useEffect(() => {
    // const script = document.createElement("script");
    // script.type = "application/ld+json";
    // script.text = `{
    //   "@context": "https://schema.org/",
    //   "@type": "BreadcrumbList",
    //   "itemListElement": [{
    //   "@type": "ListItem",
    //   "position": 1,
    //   "name": "Home",
    //   "item": "https://shardeum.org/"
    //   },{
    //   "@type": "ListItem",
    //   "position": 2,
    //   "name": "Shardeum Liberty (Alphanet)",
    //   "item": "https://shardeum.org/shardeum-liberty-alphanet/"
    //   }]
    //   };`;
    // document.head.appendChild(script);
  }, []);
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
      {/* <NextSeo
        title={
          "Shardeum | Betanet"
        }
        description="Join the fastest-growing L1 ecosystem as a node validator, smart contract developer, or community contributor in the mission to onboard billions of people to Web3"
        canonical="https://shardeum.org/betanet/"
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
      /> */}

      <Helmet>
        <title>{`Shardeum | Betanet`}</title>
        <meta
          name="description"
          content={`Join the fastest-growing L1 ecosystem as a node validator, smart contract developer, or community contributor in the mission to onboard billions of people to Web3`}
        />
        <meta
          name="keywords"
          content="shardeum,blockchain,layer1 blockchain,evm based blockchain"
        />

        {/* Facebook */}
        <meta property="og:url" content={`https://shardeum.org/betanet/`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Shardeum | Betanet`} />
        <meta
          property="og:description"
          content={`Join the fastest-growing L1 ecosystem as a node validator, smart contract developer, or community contributor in the mission to onboard billions of people to Web3`}
        />
        <meta
          property="og:image"
          content={`https://shardeum.org/wp-content/uploads/2022/03/Shardeum.png`}
        />

        {/* Twiter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="https://shardeum.org/" />
        <meta property="twitter:url" content={`https://shardeum.org/betanet/`} />
        <meta property="twitter:title" content={`Shardeum | Betanet`} />
        <meta
          property="twitter:description"
          content={`Join the fastest-growing L1 ecosystem as a node validator, smart contract developer, or community contributor in the mission to onboard billions of people to Web3`}
        />
        <meta
          property="twitter:image"
          content={`https://shardeum.org/wp-content/uploads/2022/03/Shardeum.png`}
        />

        {/* <meta property="og:site_name" content={`Shardeum | Ecosystem ${project.name}`} /> */}

        {/* <meta name="twitter:title" content={`Shardeum | Ecosystem ${project.name}`} /> */}
        {/* <meta name="twitter:description" content={project.description.substring(0, 160)} /> */}
        {/* <meta
          name="twitter:image"
          content={project.logo || `https://shardeum.org/wp-content/uploads/2022/03/Shardeum.png`}
        /> */}
        <meta name="twitter:site" content="@shardeum" />
        <link rel="canonical" href="https://shardeum.org/" />
      </Helmet>

      {/* Hero section */}
      <Hero
        heading={pageTranslation("page-betanet-hero-h1")}
        description={pageTranslation("page-betanet-hero-description")}
        breadcrumb={
          <>
            <p>
              <NextLink href="/" passHref>
                Home
              </NextLink>{" "}
              / Betanet
            </p>
          </>
        }
        cta={
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `<script type="application/ld+json">	
                {	
                @context: "https://schema.org",	
                @type: "FAQPage",	
                mainEntity: [{	
                @type: "Question",	
                name: "What is Shardeum?",	
                acceptedAnswer: {	
                @type: "Answer",	
                text: "Shardeum is an EVM-based sharded layer 1 blockchain that uses dynamic state sharding to increase transactions per second (TPS) with the addition of every new node."	
                }	
                },{	
                @type: "Question",	
                name: "Who will use Shardeum?",	
                acceptedAnswer: {	
                @type: "Answer",	
                text: "Shardeum aims to be capable of onboarding over a billion people to Web3. Like the Internet, Shardeum is Open, Collaborative, and Community-driven with a mission to provide decentralization for everyone."	
                }	
                },{	
                @type: "Question",	
                name: "What languages can be used to write smart contracts on the Shardeum network?",	
                acceptedAnswer: {	
                @type: "Answer",	
                text: "EVM-compatible languages can be used to compile smart contracts; this includes Solidity and Vyper."	
                }	
                },{	
                @type: "Question",	
                name: "How can I contribute to Liberty as a developer?",	
                acceptedAnswer: {	
                @type: "Answer",	
                text: "You can build and deploy smart contracts on Liberty by following the developer documentation. List your smart contract here to publicize it among the community and become a leader in the Shardeum ecosystem. Pro-tip: If you already have a smart contract deployed on Ethereum, you can migrate it to Liberty within seconds."	
                }	
                },{	
                @type: "Question",	
                name: "How can the community get involved with Liberty?",	
                acceptedAnswer: {	
                @type: "Answer",	
                text: "Everyone in the Shardeum community can add the Liberty network to their wallet, request testnet SHM from the faucet and interact with smart contracts."	
                }	
                },{	
                @type: "Question",	
                name: "I already have a smart contract deployed on Ethereum. Can I easily migrate it to Liberty?",	
                acceptedAnswer: {	
                @type: "Answer",	
                text: "Since Shardeum is EVM-based, it's as simple as deploying your existing code to the Shardeum network. If you have built for Ethereum, you have built for Shardeum."	
                }	
                }]	
                }	
                </script>	`,
              }}
            ></script>
            <Stack
              spacing="4"
              direction={{ base: "column", sm: "row" }}
              width={{ base: "full", sm: "auto" }}
              style={{ paddingBottom: "50px" }}
            >
              <Button
                as="a"
                variant="primary"
                size="lg"
                rel="noopener noreferrer"
                target="_blank"
                href={DOCS_URL}
              >
                {pageTranslation("page-betanet-hero-cta")}
              </Button>
            </Stack>
          </>
        }
        media={
          <Box position="relative" h="full">
            <Image
              objectFit="contain"
              src="/alphanet/alphanet-hero.png"
              alt="Shardeum Alphanet is Live"
              layout="fill"
            />
          </Box>
        }
      />
      {/* <Box position="relative">
        <Center
          maxW="30%"
          bg="black"
          position="absolute"
          zIndex="9"
          h="100%"
          borderColor="brand.grey-50"
          borderTopWidth="1px"
          borderBottomWidth="1px"
          px={{ base: "4", md: "6", lg: "9" }}
        >
          <Text fontSize={{ base: "xl", lg: "2xl" }}>Liberty Metrics</Text>
        </Center>

        <SlidingStats stats={stats} />
      </Box> */}
      {/* Features of alphanet */}
      {/* <UseCases
        heading={pageTranslation("page-alphanet-hero-features-h1")}
        content={Array(6)
          .fill(0)
          .map((_, index) => ({
            title: pageTranslation(`page-alphanet-hero-features-${index + 1}-title`),
            description: pageTranslation(`page-alphanet-hero-features-${index + 1}-description`),
            Icon: () => AlphanetFeatureIcons({ id: `${index + 1}` }),
          }))}
      /> */}
      {/* <WhatCanYoDo /> */}
      {/* Alphanet roadmap */}
      {/* <Roadmap /> */}

      {/* What is Betnanet */}
      <Container
        maxW="container.xl"
        mx="auto"
        py={{ base: "9", md: "20", lg: "32" }}
        px={{ base: 6, xl: 0 }}
        style={{ paddingTop: "50px" }}
      >
        <VStack spacing={{ base: "12", md: "12" }} alignItems="start" w="full" pb="16">
          <SimpleGrid columns={[1, 2]} justifyContent="space-between" w="full">
            <VStack alignItems="center" spacing="20">
              <img className="globeImage" src={"/betanet/globe.png"} alt="Nischal Image" />
            </VStack>
            <VStack alignItems="left" spacing="20" mt={10}>
              <SectionHeading color="brand.grey-90">
                <h2>What is Betanet?</h2>
                <p className="betanetquestionSubHed">
                  It all starts with an idea! Once a tech product idea proves its technical
                  feasibilty, it will be followed by an extensive period of testing and upgrades.
                  The gradual yet volatile upgrades will be carried out on a test network or testnet
                  until it is battle ready with all the desired features and performance for real
                  world use (mainnet). The upgrades are typically made via two major testnet phases
                  called 'alphanet' and 'betanet'.{" "}
                </p>
              </SectionHeading>
            </VStack>
          </SimpleGrid>
        </VStack>
      </Container>

      {/* Shardium Alphanet */}
      <Container
        maxW="container"
        mx="auto"
        py={{ base: "9", md: "20", lg: "32" }}
        px={{ base: 6, xl: 0 }}
        style={{ paddingTop: "50px", background: "#000000" }}
      >
        <Container
          maxW="container.xl"
          mx="auto"
          py={{ base: "9", md: "20", lg: "32" }}
          px={{ base: 6, xl: 0 }}
          style={{ paddingTop: "50px", background: "#000000" }}
        >
          <VStack spacing={{ base: "12", md: "12" }} alignItems="start" w="full" pb="16">
            <SimpleGrid columns={[1, 1]} justifyContent="space-between" w="full">
              <VStack alignItems="left" spacing="10" mt={10}>
                <SectionHeading color="brand.grey-90">
                  <h2 className="betaAlphanetTitle">Shardeum Alphanet (Liberty) Metrics</h2>
                </SectionHeading>
              </VStack>
            </SimpleGrid>
          </VStack>

          <VStack spacing={{ base: "12", md: "12" }} alignItems="start" w="full" pb="16">
            <SimpleGrid columns={[1, 2]} justifyContent="space-between" w="full">
              <div className="borderGrid">
                <h4 className="betanetHighlights">Top Alphanet Highlights</h4>

                <div className="chekMark">
                  <CheckIcon className="checkMarkcheckIcon" w={4} h={4} color="#EC5B29" />
                  <p className="checkMarkText">
                    First Web3 state sharded network with sharding abstraction
                  </p>
                </div>
                <div className="chekMarkNextline">
                  <CheckIcon className="checkMarkcheckIcon" w={4} h={4} color="#EC5B29" />
                  <p className="checkMarkText">
                    First smart contract platform to implement EIP2930
                  </p>
                </div>
                <div className="chekMarkNextline">
                  <CheckIcon className="checkMarkcheckIcon" w={4} h={4} color="#EC5B29" />
                  <p className="checkMarkText">Automation of EIP2930 for a smoother DX</p>
                </div>
                <div className="chekMarkNextline">
                  <CheckIcon className="checkMarkcheckIcon" w={4} h={4} color="#EC5B29" />
                  <p className="checkMarkText">50 validator nodes with shard size of 20 nodes</p>
                </div>
                <div className="chekMarkNextline">
                  <CheckIcon className="checkMarkcheckIcon" w={4} h={4} color="#EC5B29" />
                  <p className="checkMarkText">Network capacity of 100 TPS</p>
                </div>
              </div>

              <div>
                <div className="borderGridTwo">
                  <h4 className="betanetHighlightsTwo">Network Growth Metrics</h4>

                  <div className="borderGridTwoAddSpace">
                    <div className="chekMark">
                      <CheckIcon className="checkMarkcheckIcon" w={4} h={4} color="#EC5B29" />
                      <p className="checkMarkText">43,000+ smart contracts</p>
                    </div>
                    <div className="chekMark">
                      <CheckIcon className="checkMarkcheckIcon" w={4} h={4} color="#EC5B29" />
                      <p className="checkMarkText">xx dApps</p>
                    </div>
                  </div>
                  <div className="borderGridTwoAddSpace">
                    <div className="chekMark">
                      <CheckIcon className="checkMarkcheckIcon" w={4} h={4} color="#EC5B29" />
                      <p className="checkMarkText">
                        520,000+ accounts &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </p>
                    </div>
                    <div className="chekMark">
                      <CheckIcon className="checkMarkcheckIcon" w={4} h={4} color="#EC5B29" />
                      <p className="checkMarkText">1.4 million+ transactions</p>
                    </div>
                  </div>
                </div>

                <div className="borderGridThree">
                  <h4 className="betanetHighlightsThree">Community Growth Metrics</h4>

                  <div className="borderGridTwoAddSpace">
                    <div className="chekMark">
                      <CheckIcon className="checkMarkcheckIcon" w={4} h={4} color="#EC5B29" />
                      <p className="checkMarkText">300,000+ community members</p>
                    </div>
                    <div className="chekMark">
                      <CheckIcon className="checkMarkcheckIcon" w={4} h={4} color="#EC5B29" />
                      <p className="checkMarkText">
                        50+ Meetups/Workshops ~ Proof of Community Events
                      </p>
                    </div>
                  </div>
                  <div className="borderGridTwoAddSpace">
                    <div className="chekMark">
                      <CheckIcon className="checkMarkcheckIcon" w={4} h={4} color="#EC5B29" />
                      <p className="checkMarkText">30,000+ newsletter subscribers</p>
                    </div>
                  </div>
                </div>
              </div>
            </SimpleGrid>
          </VStack>
        </Container>
      </Container>

      {/* Shardium Alphanet dpps*/}
      <Container
        maxW="container"
        mx="auto"
        py={{ base: "9", md: "20", lg: "32" }}
        px={{ base: 6, xl: 0 }}
        style={{ paddingTop: "50px" }}
      >
        <Container
          maxW="container.xl"
          mx="auto"
          py={{ base: "9", md: "20", lg: "32" }}
          px={{ base: 6, xl: 0 }}
          style={{ paddingTop: "0px" }}
        >
          <VStack spacing={{ base: "12", md: "12" }} alignItems="start" w="full" pb="16">
            <SimpleGrid columns={[1, 1]} justifyContent="space-between" w="full">
              <div>
                <VStack alignItems="left" className="backgroundBorder" spacing="10" mt={0}>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <div className="backgroundBorderLine"></div>
                    <h2 className="betaAlphanetTitleColor">Some of the top dApps on Alphanet</h2>
                    <div className="backgroundBorderLine"></div>
                  </div>
                </VStack>
              </div>
            </SimpleGrid>
          </VStack>

          <VStack
            spacing={{ base: "12", md: "12" }}
            mt={10}
            mb={0}
            alignItems="start"
            w="full"
            pb="16"
          >
            <SimpleGrid columns={[1, 4]} justifyContent="space-evenly" w="full">
              <div className="dropBoxBporder">
                <VStack alignItems="center" className="imageBox" spacing="20">
                  <img className="dropboxImage" src={"/betanet/dropbox.png"} alt="Image" />
                </VStack>
                <h5 className="dropBoxTitle">Spriyo</h5>
                <p className="dropBoxTitleParra">
                  <span className="dropBoxTitleBold">1000</span> Galacticore NFT sold out in less
                  5hrs.
                </p>
              </div>

              <div className="dropBoxBporder">
                <VStack alignItems="center" className="imageBox" spacing="20">
                  <img className="dropboxImage" src={"/betanet/dropbox.png"} alt="Image" />
                </VStack>
                <h5 className="dropBoxTitle">Chainhash</h5>
                <p className="dropBoxTitleParra">
                  <span className="dropBoxTitleBold">11K</span> Signups on day 1
                </p>
              </div>

              <div className="dropBoxBporder">
                <VStack alignItems="center" className="imageBox" spacing="20">
                  <img className="dropboxImage" src={"/betanet/dropbox.png"} alt="Image" />
                </VStack>
                <h5 className="dropBoxTitle">Yogama</h5>
                <p className="dropBoxTitleParra">
                  <span className="dropBoxTitleBold">12 hours</span> Sold out NFTs in
                </p>
              </div>

              <div className="dropBoxBporder">
                <VStack alignItems="center" className="imageBox" spacing="20">
                  <img className="dropboxImage" src={"/betanet/dropbox.png"} alt="Image" />
                </VStack>
                <h5 className="dropBoxTitle">DotSHM</h5>
                <p className="dropBoxTitleParra">
                  First revenue generating project on Shardeum Treasury of{" "}
                  <span className="dropBoxTitleBold">~$100K</span>
                </p>
              </div>
            </SimpleGrid>
          </VStack>
        </Container>
      </Container>

      {/* Shardium Alphanet Release H*/}
      <div
        className="benefit-section"
        style={{ paddingTop: "1rem", paddingBottom: "1rem", backgroundColor: "#000000" }}
      >
        <Container
          maxW="container.xl"
          mx="auto"
          py={{ base: "9", md: "20", lg: "32" }}
          px={{ base: 6, xl: 0 }}
          style={{ paddingTop: "50px" }}
        >
          <VStack spacing={{ base: "12", md: "12" }} alignItems="start" w="full" pb="16">
            <SimpleGrid columns={[1, 1]} justifyContent="space-between" w="full">
              <VStack alignItems="left" spacing="10" mt={10}>
                <SectionHeading color="brand.grey-90">
                  <h2 className="betaAlphanetTitle">
                    How do I benefit from Shardeum’s betanet release?
                  </h2>
                </SectionHeading>
              </VStack>
            </SimpleGrid>
          </VStack>

          <VStack spacing={{ base: "12", md: "12" }} alignItems="start" w="full" pb="16">
            {/* <SimpleGrid columns={[1, 1]} justifyContent="space-between" w="full"> */}
            {/* <Box className="containerForThreeNode " > */}
            <Box className="containerForThreeNode" w="full">
              <SimpleGrid
                className="BackgroundShaed"
                columns={[1, 3]}
                justifyContent="space-between"
                w="full"
              >
                <Box className="borderGridNoborder">
                  <h4 className="betanetHighlightsLeft" style={{ color: "#de7171" }}>
                    As a Validator
                  </h4>

                  <Box className="list-wrap">
                    <ul>
                      <li>{"You can run validator nodes"}</li>
                      <li>{"You can stake test SHM"}</li>
                      <li>{"Get involved in network's unique consensus mechanism"}</li>
                      <li>{"Validate transactions and keep network secure"}</li>
                      <li>{"You can operate nodes easily via GUI"}</li>
                    </ul>
                  </Box>
                  <Box className="chekMarkNextlineButtonBox">
                    <Button className="btn btn-primary chekMarkNextlineButton">
                      {"How to run a node?"}
                    </Button>
                  </Box>
                </Box>

                <Box className="borderGridNoborder">
                  <h4 className="betanetHighlightsLeft" style={{ color: "#ffae93" }}>
                    As a smart contract dev
                  </h4>

                  <Box className="list-wrap">
                    <ul>
                      <li>{"Linear scalability allows you to build scalable dApps"}</li>
                      <li>
                        {
                          "A great DX via state sharding, EVM parallelization and atomic composibility"
                        }
                      </li>
                      <li>{"Access to grants"}</li>
                      <li>
                        {
                          "Access to over 300k community members with the fastest growing L1 ecosystem"
                        }
                      </li>
                      <li>{"Guidance from proven leaders and visionaries like Nischal Shetty"}</li>
                    </ul>
                  </Box>
                  <Box className="chekMarkNextlineButtonBox">
                    <Button className="btn btn-primary chekMarkNextlineButton">
                      {"Developer Docs"}
                    </Button>
                  </Box>
                </Box>

                <Box className="borderGridNoborder" style={{ color: "#ffce88" }}>
                  <h4 className="betanetHighlightsLeft">As a general user</h4>
                  <Box className="list-wrap">
                    <ul>
                      <li>{"Bug bounty will be enabled"}</li>
                      <li>
                        {
                          "Earn rewards by engaging in various Shardeum and dApp initiatives Like Shardeum Leagues, Shardeum missions, quiz etc"
                        }
                      </li>
                      <li>{"Earn POAPs by participants in Shardeum community events"}</li>
                      <li>{"Moderating social media channels"}</li>
                      <li>
                        {
                          "A rare learning experience by directly supporting a L1 blockchain project"
                        }
                      </li>
                      <li>{"Smoother UX"}</li>
                    </ul>
                  </Box>
                  <Box className="chekMarkNextlineButtonBox">
                    <Button className="btn btn-primary chekMarkNextlineButton">
                      {"Join Shardeum community"}
                    </Button>
                  </Box>
                </Box>
              </SimpleGrid>
            </Box>
            {/* </Box> */}
            {/* </SimpleGrid> */}
          </VStack>
        </Container>
      </div>
      {/* roadmap */}

      <div
        className="roadmap-section"
        style={{ paddingTop: "1rem", paddingBottom: "1rem", backgroundColor: "#000000" }}
      >
        <Container
          maxW="container.xl"
          mx="auto"
          py={{ base: "9", md: "20", lg: "32" }}
          px={{ base: 6, xl: 0 }}
          style={{ paddingTop: "50px" }}
        >
          <VStack spacing={{ base: "12", md: "12" }} alignItems="start" w="full" pb="16">
            <SimpleGrid columns={[1, 1]} justifyContent="space-between" w="full">
              <VStack alignItems="left" spacing="10" mt={10} pl={5}>
                <span style={{ color: "#EC5B29" }}>{"2022"}</span>
                <h2 className="betaAlphanetTitle " style={{ margin: "0" }}>
                  {"Betanet Roadmap"}
                </h2>
              </VStack>
            </SimpleGrid>
          </VStack>

          <VStack spacing={{ base: "12", md: "12" }} alignItems="start" w="full" pb="16">
            {/* <SimpleGrid columns={[1, 1]} justifyContent="space-between" w="full"> */}
            {/* <Box className="containerForThreeNode " > */}
            <Box className="" w="full">
              <SimpleGrid className="" columns={[1, 2]} justifyContent="space-between" w="full">
                <Box className="roadmap-li-box ">
                  <Box className="roadmap-li-heading">
                    <span className="roadmap-li-heading-text">{"Q1 2023"}</span>
                    <span className="roadmap-li-heading-green-line"></span>
                  </Box>

                  <Box className="road-list-wrap">
                    <ul>
                      <li>{"Sharded network with 150 validators initially"}</li>
                      <li>{"Shard size of 21 initially"}</li>
                      <li>{"150 TPS capacity"}</li>
                      <li>{"Nodes and validators open source to run by community"}</li>
                    </ul>
                  </Box>
                </Box>

                <Box className="roadmap-li-box dashBorder">
                  <Box className="roadmap-li-heading">
                    <span className="roadmap-li-heading-text">{"Continued..."}</span>
                    <span className="roadmap-li-heading-green-line"></span>
                  </Box>

                  <Box className="road-list-wrap">
                    <ul>
                      <li>{"Node operator GUI live"}</li>
                      <li>{"Staking, node rotation and node rewards enabled"}</li>
                      <li>{"External security audits and bug bounties"}</li>
                    </ul>
                  </Box>
                </Box>
              </SimpleGrid>
            </Box>
            {/* </Box> */}
            {/* </SimpleGrid> */}
          </VStack>
        </Container>
      </div>

      {/* <FAQs
        heading={pageTranslation("page-betanet-faq-h1")}
        content={Array(8)
          .fill(0)
          .map((_, index) => ({
            q: pageTranslation(`page-betanet-faq-${index + 1}-q`),
            a: pageTranslation(`page-betanet-faq-${index + 1}-a`),
          }))}
      /> */}

      {/* FAQ */}
      <Flex bg="brand.grey-10" as="section">
        <Container maxW="container.xl" mx="auto" pt="32" pb="32">
          <Heading size="2xl" color="brand.grey-90" mb={20}>
            <h2>FAQs</h2>
          </Heading>
          <VStack spacing="40" alignItems="start" w="full">
            <Accordion
              allowMultiple
              defaultIndex={0}
              allowToggle
              w="full"
              py={10}
              color="brand.grey-90"
            >
              {/* Q1 */}
              <div>
                <AccordionItem bg="brand.white" mb={4}>
                  <AccordionButton
                    px={5}
                    py={5}
                    _hover={{ bg: "brand.white" }}
                    _expanded={{ border: "none" }}
                  >
                    <Box flex="1" textAlign="left">
                      <Heading size={"lg"}>
                        <h3>What is Shardeum?</h3>
                      </Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel className="brand-orange-href" px={5} py={8}>
                    <>
                      Shardeum is an EVM-based, linearly scalable smart contract platform that
                      provides low gas fees forever while maintaining true decentralization and
                      solid security through dynamic state sharding.
                    </>
                    {/* <ReactMarkdown linkTarget="_blank">
                    </ReactMarkdown> */}
                  </AccordionPanel>
                </AccordionItem>
              </div>

              {/* Q2 */}
              <div>
                <AccordionItem bg="brand.white" mb={4}>
                  <AccordionButton
                    px={5}
                    py={5}
                    _hover={{ bg: "brand.white" }}
                    _expanded={{ border: "none" }}
                  >
                    <Box flex="1" textAlign="left">
                      <Heading size={"lg"}>
                        <h3>
                          What are the unique features in Shardeum apart from typical features that
                          comes with a L1 blockchain network?
                        </h3>
                      </Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel className="brand-orange-href" px={5} py={8}>
                    <>
                      {/* MORE SUb MEnu */}

                      <VStack spacing="40" alignItems="start" w="full">
                        <Accordion
                          allowMultiple
                          defaultIndex={0}
                          allowToggle
                          w="full"
                          py={10}
                          color="brand.grey-90"
                        >
                          {/* 1 */}
                          <div>
                            <AccordionItem bg="brand.white" mb={4}>
                              <AccordionButton
                                px={5}
                                py={5}
                                _hover={{ bg: "brand.white" }}
                                _expanded={{ border: "none" }}
                              >
                                <Box flex="1" textAlign="left">
                                  <Heading size={"lg"}>
                                    <h3>Linear Scalability </h3>
                                  </Heading>
                                </Box>
                                <AccordionIcon />
                              </AccordionButton>

                              <AccordionPanel className="brand-orange-href" px={5} py={8}>
                                <>
                                  Although we see more recent L1 networks claim high TPS, there are
                                  some catches here apart from high TPS claim itself. Once a network
                                  reaches its maximum TPS or throughput, say during peak traffic, it
                                  often results in network outages accompanied with spike in gas
                                  fees for users. Shardeum, through its innovative protocol, will
                                  scale linearly i.e. every node joining the network will increase
                                  its throughput proportionally. Further, on Shardeum, consensus is
                                  reached on every transaction individually as opposed to block
                                  level consensus done by most blockchains. Transaction level
                                  consensus at a high throughput rate and finality has been
                                  impossible to achieve so far. Shardeum is not only “capable” of
                                  achieving linear scalability but has also publicly demonstrated it
                                  at the launch of alphanet 1.0 and 2.0 releases. Here is a demo
                                  video
                                </>
                                {/* <ReactMarkdown linkTarget="_blank">
                                  </ReactMarkdown> */}
                              </AccordionPanel>
                            </AccordionItem>
                          </div>

                          {/* 2 */}
                          <div>
                            <AccordionItem bg="brand.white" mb={4}>
                              <AccordionButton
                                px={5}
                                py={5}
                                _hover={{ bg: "brand.white" }}
                                _expanded={{ border: "none" }}
                              >
                                <Box flex="1" textAlign="left">
                                  <Heading size={"lg"}>
                                    <h3>Dynamic State Sharding</h3>
                                  </Heading>
                                </Box>
                                <AccordionIcon />
                              </AccordionButton>

                              <AccordionPanel className="brand-orange-href" px={5} py={8}>
                                <>
                                  Sharding helps the network to evenly distribute compute workload,
                                  storage, and bandwidth across all nodes thereby saving more
                                  resources. The unique protocol introduces not just state sharding
                                  but dynamic state sharding. Here validating nodes are assigned
                                  multiple shards with different address ranges. And since consensus
                                  is done at transaction level on Shardeum, transactions that affect
                                  multiple shards can be processed simultaneously with atomic
                                  processing resulting in immediate finality. Whereas in static
                                  state sharding done by some of the latest blockchain networks,
                                  nodes in a shard are assigned the same address range which does
                                  not allow for cross shard composability due to which transactions
                                  on such networks are processed sequentially.
                                </>
                                {/* <ReactMarkdown linkTarget="_blank">
                                  </ReactMarkdown> */}
                              </AccordionPanel>
                            </AccordionItem>
                          </div>

                          {/* 3 */}
                          <div>
                            <AccordionItem bg="brand.white" mb={4}>
                              <AccordionButton
                                px={5}
                                py={5}
                                _hover={{ bg: "brand.white" }}
                                _expanded={{ border: "none" }}
                              >
                                <Box flex="1" textAlign="left">
                                  <Heading size={"lg"}>
                                    <h3>Low & Constant Gas Fees</h3>
                                  </Heading>
                                </Box>
                                <AccordionIcon />
                              </AccordionButton>

                              <AccordionPanel className="brand-orange-href" px={5} py={8}>
                                <>
                                  A lack of scalability leads to low throughput, high latency and
                                  increasing transaction fees resulting in a bad user experience.
                                  Because Shardeum can scale linearly, the network processes
                                  transactions with high fairness eliminating MEV crisis plaguing
                                  the industry. Transactions will be received and validated on FCFS
                                  basis. Shardeum can further auto-scale i.e. depending on the
                                  demand in the network, the network will automatically expand or
                                  shrink its capacity. The project engineers are well aware that
                                  maintaining high efficiency while scaling to meet demand is what
                                  will help keep the cost of the network and ultimately the average
                                  transaction fees low.
                                </>
                                {/* <ReactMarkdown linkTarget="_blank">
                                  </ReactMarkdown> */}
                              </AccordionPanel>
                            </AccordionItem>
                          </div>

                          {/* 4 */}
                          <div>
                            <AccordionItem bg="brand.white" mb={4}>
                              <AccordionButton
                                px={5}
                                py={5}
                                _hover={{ bg: "brand.white" }}
                                _expanded={{ border: "none" }}
                              >
                                <Box flex="1" textAlign="left">
                                  <Heading size={"lg"}>
                                    <h3>EVM based smart contract platform</h3>
                                  </Heading>
                                </Box>
                                <AccordionIcon />
                              </AccordionButton>

                              <AccordionPanel className="brand-orange-href" px={5} py={8}>
                                <>
                                  There is a popular saying among the Shardeum community members aka
                                  Shardians, that “If you have built for Ethereum, you have built
                                  for Shardeum”. What it means is that, any dApp/product/service
                                  built atop Ethereum can be migrated to Shardeum seamlessly in a
                                  matter of few minutes. Since you just need to deploy a smart
                                  contract written in Solidity or Vyper on Shardeum (with a bonus
                                  that you will never have to worry about rising gas fees again),
                                  the environment is also tailor-made for new dApp devs and
                                  creators.
                                </>
                                {/* <ReactMarkdown linkTarget="_blank">
                                  </ReactMarkdown> */}
                              </AccordionPanel>
                            </AccordionItem>
                          </div>

                          {/* 5 */}
                          <div>
                            <AccordionItem bg="brand.white" mb={4}>
                              <AccordionButton
                                px={5}
                                py={5}
                                _hover={{ bg: "brand.white" }}
                                _expanded={{ border: "none" }}
                              >
                                <Box flex="1" textAlign="left">
                                  <Heading size={"lg"}>
                                    <h3>Anyone can operate a node on Shardeum and earn rewards</h3>
                                  </Heading>
                                </Box>
                                <AccordionIcon />
                              </AccordionButton>

                              <AccordionPanel className="brand-orange-href" px={5} py={8}>
                                <>
                                  As mentioned in previous answers, parallel processing with atomic
                                  and cross shard composability leading up to linear scalability
                                  were never possible before. The networks had no choice but to
                                  scale up vertically instead of horizontally which brings us to the
                                  same old problem of centralization. What that effectively meant
                                  was average users could not afford to run a node on these networks
                                  due to high requirements in either hardware specs or staking. The
                                  idea behind vertical scalability is to facilitate more capacity to
                                  process transactions. On Shardeum, validator nodes would need to
                                  maintain only the current state within a shard they are involved
                                  in while all the the historical data is offloaded to archive nodes
                                  on the network. This enables the platform to keep the
                                  staking/hardware requirements low for average users, thus allowing
                                  for high decentralization
                                </>
                                {/* <ReactMarkdown linkTarget="_blank">
                                  </ReactMarkdown> */}
                              </AccordionPanel>
                            </AccordionItem>
                          </div>

                          {/* 6 */}
                          <div>
                            <AccordionItem bg="brand.white" mb={4}>
                              <AccordionButton
                                px={5}
                                py={5}
                                _hover={{ bg: "brand.white" }}
                                _expanded={{ border: "none" }}
                              >
                                <Box flex="1" textAlign="left">
                                  <Heading size={"lg"}>
                                    <h3>Solid Security with a unique consensus mechanism</h3>
                                  </Heading>
                                </Box>
                                <AccordionIcon />
                              </AccordionButton>

                              <AccordionPanel className="brand-orange-href" px={5} py={8}>
                                <>
                                  Shardeum will use a combination of two consensus algorithms namely
                                  proof of stake (PoS) and proof of quorum (PoQ). Staking native
                                  coins will be mandatory for validators to participate in the
                                  transaction validation process in return for rewards. Nodes that
                                  act maliciously will be penalized. Proof of Quorum, in a nutshell,
                                  allows the network validators of a transaction to approve it only
                                  if it receives 51% of votes which is then followed by batching
                                  such transactions together and passing it onto archive nodes.
                                  Moreover, the network will randomly rotate validator nodes in and
                                  out of the system which will make it extremely difficult for bad
                                  actors to attack the network. The nodes that are rotated out will
                                  take the place of 'standby nodes' who will wait for their turn to
                                  validate transactions again.
                                </>
                                {/* <ReactMarkdown linkTarget="_blank">
                                  </ReactMarkdown> */}
                              </AccordionPanel>
                            </AccordionItem>
                          </div>
                        </Accordion>
                      </VStack>
                    </>
                    {/* <ReactMarkdown linkTarget="_blank">
                    </ReactMarkdown> */}
                  </AccordionPanel>
                </AccordionItem>
              </div>

              {/* Q3 */}
              <div>
                <AccordionItem bg="brand.white" mb={4}>
                  <AccordionButton
                    px={5}
                    py={5}
                    _hover={{ bg: "brand.white" }}
                    _expanded={{ border: "none" }}
                  >
                    <Box flex="1" textAlign="left">
                      <Heading size={"lg"}>
                        <h3>{`What are the requirements to run a node on betanet?`}</h3>
                      </Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel className="brand-orange-href" px={5} py={8}>
                    <>
                      "Minimum specs:
                      <br />
                      <br />
                      - 60GB SSD storage (will go up in mainnet, but this will save cost in betanet)
                      - Quad core CPU less than 10 years old if self hosting / Two cores, if hosted
                      with newer xeons/ EPYC - Initially 16GB of RAM, 4+ GB of virtual memory
                      recommended. (we expect this number to go down over time)
                      <br />
                      <br />
                      Stay tuned for an official announcement on hardware specs and staking
                      requirements which will be added to our docs page soon"
                    </>
                    {/* <ReactMarkdown linkTarget="_blank">
                      </ReactMarkdown> */}
                  </AccordionPanel>
                </AccordionItem>
              </div>

              {/* Q4 */}
              <div>
                <AccordionItem bg="brand.white" mb={4}>
                  <AccordionButton
                    px={5}
                    py={5}
                    _hover={{ bg: "brand.white" }}
                    _expanded={{ border: "none" }}
                  >
                    <Box flex="1" textAlign="left">
                      <Heading size={"lg"}>
                        <h3>{`How do GUI and CLI features help me in operating a node?`}</h3>
                      </Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel className="brand-orange-href" px={5} py={8}>
                    <>
                      With GUI, you can start running a node with a few clicks of your mouse.
                      Shardeum is one of the first L1 networks to enable user-friendly GUI feature
                      for node validators
                      <br />
                      CLI is the primary interface used by the vast majority of blockchain networks.
                      It is enabled for more advanced users and developers who intend to work with
                      nodes more deeply and technically
                    </>
                    {/* <ReactMarkdown linkTarget="_blank">
                    </ReactMarkdown> */}
                  </AccordionPanel>
                </AccordionItem>
              </div>

              {/* Q5 */}
              <div>
                <AccordionItem bg="brand.white" mb={4}>
                  <AccordionButton
                    px={5}
                    py={5}
                    _hover={{ bg: "brand.white" }}
                    _expanded={{ border: "none" }}
                  >
                    <Box flex="1" textAlign="left">
                      <Heading size={"lg"}>
                        <h3>{`What is the reward I will get by running an honest node on betanet?`}</h3>
                      </Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel className="brand-orange-href" px={5} py={8}>
                    <>
                      Your node will earn Betanet SHM, but these will not have any value. However,
                      we will be keeping track of the addresses that helped out during Betanet and
                      those addresses may receive a reward after Mainnet.
                    </>
                    {/* <ReactMarkdown linkTarget="_blank">
                      </ReactMarkdown> */}
                  </AccordionPanel>
                </AccordionItem>
              </div>

              {/* Q6 */}
              <div>
                <AccordionItem bg="brand.white" mb={4}>
                  <AccordionButton
                    px={5}
                    py={5}
                    _hover={{ bg: "brand.white" }}
                    _expanded={{ border: "none" }}
                  >
                    <Box flex="1" textAlign="left">
                      <Heading size={"lg"}>
                        <h3>{`What is the process for bug bounties and where do I report the bugs on betanet`}</h3>
                      </Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel className="brand-orange-href" px={5} py={8}>
                    <>
                      A web form will be provided for reporting bug bounties. Details of the
                      bounties will be announced with the release of Betanet.
                    </>
                    {/* <ReactMarkdown linkTarget="_blank">
                    </ReactMarkdown> */}
                  </AccordionPanel>
                </AccordionItem>
              </div>

              {/* Q7 */}
              <div>
                <AccordionItem bg="brand.white" mb={4}>
                  <AccordionButton
                    px={5}
                    py={5}
                    _hover={{ bg: "brand.white" }}
                    _expanded={{ border: "none" }}
                  >
                    <Box flex="1" textAlign="left">
                      <Heading size={"lg"}>
                        <h3>{`When can we expect whitepaper to be released?`}</h3>
                      </Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel className="brand-orange-href" px={5} py={8}>
                    <>Whitepapers will be released around the same time as the launch of betanet</>
                    {/* <ReactMarkdown linkTarget="_blank">
                      </ReactMarkdown> */}
                  </AccordionPanel>
                </AccordionItem>
              </div>

              {/* Q8 */}
              <div>
                <AccordionItem bg="brand.white" mb={4}>
                  <AccordionButton
                    px={5}
                    py={5}
                    _hover={{ bg: "brand.white" }}
                    _expanded={{ border: "none" }}
                  >
                    <Box flex="1" textAlign="left">
                      <Heading size={"lg"}>
                        <h3>{`When will the protocol be made open-source?`}</h3>
                      </Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel className="brand-orange-href" px={5} py={8}>
                    <>
                      The Shardeum code will be open-sourced around the same time as the launch of
                      betanet
                    </>
                    {/* <ReactMarkdown linkTarget="_blank">
                      </ReactMarkdown> */}
                  </AccordionPanel>
                </AccordionItem>
              </div>
            </Accordion>
          </VStack>
        </Container>
      </Flex>

      {/* Join community - common CTA */}
      <JoinCommunity />
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "page-alphanet"])),
      // Will be passed to the page component as props
    },
  };
}

export default AlphanetLanding;
