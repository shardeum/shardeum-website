import { Show, Box, Container, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { CalendarIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

const roadmapList = [
  {
    title: "phase-1-title",
    sections: [
      {
        taskList: ["phase-1-task-list-1", "phase-1-task-list-2", "phase-1-task-list-3"],
        launchItems: [
          "phase-1-launch-item-1",
          "phase-1-launch-item-2",
          "phase-1-launch-item-3",
          "phase-1-launch-item-4",
        ],
      },
    ],
    quarterStartDate: new Date(2017, 1, 1),
    quarterEndDate: new Date(2021, 12, 31),
  },
  {
    title: "phase-2-title",
    sections: [
      {
        description: "phase-2-launch-item-1",
        taskList: ["phase-2-task-list-1"],
      },
      {
        description: "phase-2-launch-item-2",
      },
    ],
    quarterStartDate: new Date(2022, 1, 1),
    quarterEndDate: new Date(2022, 3, 31),
  },
  {
    title: "phase-3-title",
    sections: [
      {
        description: "....",
        taskList: [],
      },
      {
        description: "",
      },
    ],
    quarterStartDate: new Date(2022, 4, 1),
    quarterEndDate: new Date(2022, 6, 30),
  },
];

/**
 *
 * @param quarter Current quarter
 * @returns Total days that has passed in the quarter as percentage
 */

const getQuarterProgressInPercentage = (quarter: typeof roadmapList[0]) => {
  //1: Get the current date as a reference to understand which quarter we are in right now as per calendar.
  const currentTime = new Date().getTime();

  //2: Fetch the time of quarter start and end dates:
  const quarterStartTime = quarter.quarterStartDate.getTime();
  const quarterEndTime = quarter.quarterEndDate.getTime();

  //3: Compare the current date with the end date of the quarter to check if it has already passed.
  if (currentTime > quarterEndTime) {
    return 100;
  }
  //4: If not, then check if the quarter is in the future by check the start date of the quarter with current date.
  else if (currentTime < quarterStartTime) {
    return 0;
  }
  //5: If not, it means that the the quarter is currently active, so we calculate the exact time elapsed in the current quarter.
  else {
    //a: Calculate the time Duration of full quarter between the start and end dates of the quarter.
    const totalTimeInQuarter = quarterEndTime - quarterStartTime;
    //b: Calculate the time duration elapsed between the start date and the current time.
    const elapsedTime = currentTime - quarterStartTime;
    //c: Calculate and return the percentage of elapsed time with respect to total time in the current quarter.
    return (elapsedTime / totalTimeInQuarter) * 100;
  }
};

function Roadmap() {
  const { t: pageTranslation } = useTranslation(["page-home", "common"]);

  return (
    <Flex bg="brand.black" as="section" position="relative" overflow="hidden">
      <Box position="absolute" zIndex={1} display={{ base: "none", lg: "block" }}>
        <Image
          src="/roadmap-bg.png"
          width="500"
          objectFit="cover"
          alt="white paper gradient background"
          height="800"
        />
      </Box>
      <Container
        maxW="container.xl"
        mx="auto"
        pt="20"
        pb="32"
        position="relative"
        zIndex={2}
        px={{ base: 6, xl: 0 }}
      >
        <VStack spacing="20" alignItems="center" w="full">
          <VStack alignItems="center" spacing="3">
            {/* <Text fontSize="sm" color="brand.orange">
              2022
            </Text> */}
            <Heading size="2xl" color="brand.white" as="h2" alignItems="center">
              <h2>{pageTranslation("roadmap")}</h2>
            </Heading>
          </VStack>
          <VerticalTimeline lineColor="rgba(33, 33, 33, 1)">
            {roadmapList.map((item: any) => {
              return (
                <VerticalTimelineElement
                  key={item.title}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: "rgba(33, 33, 33, 1)", color: "#fff" }}
                  contentArrowStyle={{ borderRight: "0" }}
                  date={pageTranslation(item.title)}
                  iconStyle={{
                    background: "rgba(33, 33, 33, 1)",
                    color: "#fff",
                    border: "rgba(33, 33, 33, 1)",
                  }}
                  icon={<CalendarIcon />}
                >
                  <VStack alignItems="start" flexWrap="wrap">
                    <Show below="lg">
                      <Text fontSize="xl" color="brand.orange" pr="4" fontWeight="medium" pb="0">
                        {pageTranslation(item.title)}
                      </Text>
                    </Show>

                    {item.sections.map((section: any, index: number) => {
                      return (
                        <VStack key={index} alignItems="start" pt={0}>
                          {section.description ? (
                            <Text fontSize="xl" color="white" pr="4" fontWeight="medium" pb="2">
                              {pageTranslation(section.description)}
                            </Text>
                          ) : null}
                          {section.subTitle ? (
                            <Text fontSize="xl" color="white" pr="4" fontWeight="medium" pb="2">
                              {pageTranslation(section.subTitle)}
                            </Text>
                          ) : null}
                          {section.launchItems?.map((task: string) => (
                            <Text key={task} fontSize="xl" color="brand.white" pr="4" pb="2">
                              {pageTranslation(task)}
                            </Text>
                          ))}
                          {section.taskList?.map((task: string) => (
                            <Text key={task} fontSize="base" color="brand.grey-40" pr="4" pb="2">
                              - {pageTranslation(task)}
                            </Text>
                          ))}
                        </VStack>
                      );
                    })}
                  </VStack>
                </VerticalTimelineElement>
              );
            })}
            <Button
              variant="primary"
              px="10"
              h="56px"
              margin="0"
              border="0"
              fontSize="base"
              w={{ base: "full", md: "auto" }}
              borderColor="transparent"
            >
              <NextLink href="/roadmap" passHref>
                View Full Road Map
              </NextLink>
            </Button>
          </VerticalTimeline>
        </VStack>
      </Container>
    </Flex>
  );
}

export default Roadmap;
