import {
  Box,
  Container,
  Flex,
  SimpleGrid,
  Text,
  VStack,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  LightMode,
} from "@chakra-ui/react";

import Link from "next/link";
import Logo from "../common/Logo";
import {
  BLOG_URL,
  COMMUNITY_URL,
  FAQ_URL,
  GENERAL_QUERIES_LINK,
  INVESTMENT_QUERY_LINK,
  PUBLIC_DRIVE_LINK,
  LITEPAPER_URL,
  NEWSLETTER_URL,
  CLAIM_100_SHM_LINK,
} from "../../constants/links";
import { useTranslation } from "next-i18next";
import useNewsLetterForm from "../../hooks/useNewsletter";
import Feature from "../common/Feature";
import { IconRightArrow } from "../common/Icons";

const JoinNewsletterComp = () => {
  const {
    form: { error, status, success, value },
    handleOnChange,
    handleSubmit,
  } = useNewsLetterForm();
  const { t: pageTranslation } = useTranslation(["common"]);

  return (
    <VStack py="6" px="0" bgColor="#101010" w="full" alignItems="start" spacing="6">
      <Feature
        type="h2"
        title={pageTranslation("join-newsletter-title-footer")}
        description={pageTranslation("join-newsletter-desc")}
      />
      <FormControl isInvalid={!!error}>
        <LightMode>
          <InputGroup>
            <Input
              placeholder={pageTranslation("your-email")}
              type="email"
              name="email"
              onChange={handleOnChange}
              value={value}
            />
            <InputRightAddon
              onClick={() => handleSubmit(["newsletterBottom"])}
              children={
                <LightMode>
                  <IconButton
                    variant="secondary"
                    p="5"
                    icon={<IconRightArrow />}
                    h="full"
                    px="4"
                    aria-label="Submit Button"
                    isLoading={status === "loading"}
                  />
                </LightMode>
              }
            />
          </InputGroup>
        </LightMode>
        {error ? (
          <FormHelperText fontWeight="medium" color="red">
            {error}
          </FormHelperText>
        ) : success ? (
          <FormHelperText fontWeight="medium" color="green">
            Subscribed! Stay tuned for SHM updates in your inbox ;)
          </FormHelperText>
        ) : null}
      </FormControl>
    </VStack>
  );
};

const LinksMap = {
  General: [
    { title: "home", href: "/" },
    { title: "the-community", href: COMMUNITY_URL },
    { title: "blog", href: BLOG_URL, target: "_BLANK" },
    { title: "newsletter", href: NEWSLETTER_URL },
    { title: "Careers", href: "/careers/", target: "_BLANK" },
    { title: "Privacy Policy", href: "/privacy-policy/", target: "" },
    { title: "Terms", href: "/terms/", target: "" },
  ],
  Resources: [
    { title: "litepaper", href: LITEPAPER_URL },
    { title: "faq", href: FAQ_URL },
    { title: "public-drive-link", href: PUBLIC_DRIVE_LINK, target: "_BLANK" },
    { title: "claim-100-shm-cta", href: CLAIM_100_SHM_LINK },
  ],
  Contact: [
    { title: "general-enquiries", href: GENERAL_QUERIES_LINK, target: "_BLANK" },
    { title: "investment-queries", href: INVESTMENT_QUERY_LINK, target: "_BLANK" },
  ],
};

function Footer() {
  const { t: pageTranslation } = useTranslation(["common", "page-home"]);

  return (
    <Flex bg="brand.grey-95" as="footer">
      <Container maxW="container.xl" mx="auto" py="12" px={{ base: "6", xl: "0" }}>
        <SimpleGrid columns={[1, 1, 2]} gap={["8", "12"]}>
          <Flex direction="column" justifyContent="space-between">
            <Link href="/" passHref>
              <Box as="a">
                <Logo />
              </Box>
            </Link>
            <JoinNewsletterComp />
            <Text color="brand.grey-50" display={{ base: "none", md: "block" }}>
              Copyright &copy; Shardeum {new Date().getFullYear()}
            </Text>
          </Flex>
          <SimpleGrid columns={[2, 2, 3]} gap={{ base: 6 }} rowGap={{ base: 10 }}>
            {Object.entries(LinksMap).map(([title, links]) => {
              return (
                <VStack alignItems="start" spacing="4" key={title}>
                  <Text color="white" fontWeight="medium">
                    {pageTranslation(title)}
                  </Text>
                  <VStack spacing="3" alignItems="start">
                    {links.map((link) => (
                      <Link href={link.href} passHref key={link.title}>
                        <Text
                          as="a"
                          target={link.target ? link.target : ""}
                          color="brand.grey-50"
                          _hover={{ color: "brand.grey-30" }}
                        >
                          {pageTranslation(link.title)}
                        </Text>
                      </Link>
                    ))}
                  </VStack>
                </VStack>
              );
            })}
          </SimpleGrid>
        </SimpleGrid>
        <Text color="brand.grey-50" display={{ md: "none" }} mt="10">
          Copyright &copy; Shardeum {new Date().getFullYear()}
        </Text>
      </Container>
    </Flex>
  );
}

export default Footer;
