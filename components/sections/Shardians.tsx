import { Button, Container, HStack, SimpleGrid } from "@chakra-ui/react";
import Card from "components/common/ProfileInfoCard";

type ShardiansProps = {
  categories: Array<any>;
  filteredData: Array<any>;
  changeCategory: React.MouseEventHandler<HTMLButtonElement>;
};
const Shardians = ({ categories, filteredData, changeCategory }: ShardiansProps) => {
  return (
    <Container pl={0} pr={0} maxW="container.xl" pt={[6, 8, 12]} pb={[6, 8, 12]}>
      <HStack pb={12}>
        {categories.map((category, index) => {
          return (
            <Button
              key={"category" + index}
              value={category.name}
              onClick={changeCategory}
              variant={category.selected ? "secondary" : "outline"}
              fontSize={["sm", "md", "lg"]}
              size="lg"
            >
              {category.name}
            </Button>
          );
        })}
      </HStack>
      <SimpleGrid spacing="30px" columns={[1, 2, 3]}>
        {filteredData.map((data, index) => {
          return (
            <Card
              key={"shardian-" + index}
              name={data.name}
              description={data.description}
              category={data.category}
              image={data.image && data.image[0]?.thumbnails.full.url}
            />
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default Shardians;