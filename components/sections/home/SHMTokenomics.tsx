import { Box, Container, Flex, Grid, GridItem, HStack, Text, VStack } from "@chakra-ui/react";
import { getPercentage } from "@shm/utils";
import Image from "next/image";
import SectionHeading from "components/common/SectionHeading";

const bars = [
  {
    bgColor: "brand.grey-30",
    height: "51%",
    totalSHM: getPercentage(51),
    use: "Node Mining",
  },
  {
    bgColor: "brand.grey-30",
    height: "18%",
    totalSHM: getPercentage(18),
    use: "Sale",
  },
  {
    bgColor: "brand.grey-30",
    height: "15%",
    totalSHM: getPercentage(15),
    use: "Team",
  },
  {
    bgColor: "brand.grey-30",
    height: "11%",
    totalSHM: getPercentage(11),
    use: "Foundation",
  },
  {
    bgColor: "brand.grey-30",
    height: "5%",
    totalSHM: getPercentage(5),
    use: "Ecosystem / Airdrops",
  },
];

const SHMTokenomics = () => {
  return (
    <Box position="relative" overflow="hidden" bg="brand.black">
      <Box
        position="absolute"
        right="-20%"
        top="-25%"
        zIndex={1}
        display={{ base: "none", lg: "block" }}
      >
        <Image
          src="/tokenomic-bg.png"
          width="700px"
          objectFit="cover"
          alt="Nischal Image"
          height="800px"
        />
      </Box>
      <Container
        maxW="container.xl"
        mx="auto"
        py={{ base: "14", md: "32", lg: "40" }}
        zIndex={2}
        position="relative"
        px={{ base: 6, xl: 0 }}
      >
        <Box mb="12">
          <SectionHeading color="brand.white">$SHM Tokenomics</SectionHeading>
        </Box>
        <HStack alignItems="start" spacing="2" mb="4" display={{ base: "flex", md: "none" }}>
          <Text fontSize="base" fontWeight="medium">
            Fixed Supply of{" "}
            <Text as="span" color="brand.orange" fontWeight="base">
              508 Mn $SHM
            </Text>
          </Text>
        </HStack>
        {/* Shown on mobile devices */}
        <HStack h="600px" w="full" display={{ base: "flex", md: "none" }}>
          <Flex
            py="3"
            height="100%"
            bgColor="brand.grey-90"
            position="relative"
            w="8"
            justifyContent="center"
          >
            <Text
              as="p"
              style={{
                writingMode: "vertical-lr", // passing this value to Chakra's __css doesn't work that's why using inline style
              }}
              color="brand.grey-10"
              transform="rotate(-180deg)"
            >
              508 Mn $SHM
            </Text>
          </Flex>
          <VStack h="full" spacing="3" alignItems="start">
            {bars.map((bar) => (
              <HStack
                key={bar.use}
                flexDir="row"
                h={bar.height}
                w="full"
                spacing="3"
                alignItems="flex-end"
              >
                <Box h="full" bgColor={bar.bgColor} w="20" />
                <Text fontSize="base" fontWeight="medium">
                  {bar.height}{" "}
                  <Text as="span" color="brand.grey-50" fontSize="">
                    {bar.use}
                  </Text>
                </Text>{" "}
              </HStack>
            ))}
          </VStack>
        </HStack>
        {/* Shown on tabs and above */}
        <Grid
          h="600px"
          gridTemplateColumns={{ base: "repeat(6,1fr) " }}
          gap="6"
          alignItems="flex-end"
          display={{ base: "none", md: "grid" }}
        >
          <GridItem display="flex" justifyContent="flex-end" h="full" flexDir="column">
            <VStack alignItems="start" spacing="2" mb="4">
              <Text fontSize="xl" fontWeight="medium">
                Fixed Supply of
              </Text>
              <Text as="span" color="brand.orange" fontWeight="xl">
                508 Mn $SHM
              </Text>
            </VStack>
            <Box height="100%" bgColor="brand.grey-90" />
          </GridItem>
          {bars.map((bar) => (
            <GridItem
              display="flex"
              justifyContent="flex-end"
              key={bar.height}
              h="full"
              flexDir={{ base: "row", md: "column" }}
            >
              <VStack alignItems="start" spacing="2" mb="4">
                <Text fontSize="xl" fontWeight="medium">
                  {bar.height}
                </Text>{" "}
                <Text fontSize="lg" fontWeight="medium">
                  {bar.use}
                </Text>{" "}
                <Text as="span" color="brand.grey-50" display="inline-block" fontSize="base">
                  {bar.totalSHM} Mn $SHM
                </Text>
              </VStack>
              <Box
                height={bar.height}
                bgColor={bar.bgColor}
                _hover={{ backgroundColor: "brand.orange", transitionDuration: "200ms" }}
              />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SHMTokenomics;