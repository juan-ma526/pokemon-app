import { Card, Grid, Row, Text } from "@nextui-org/react";
import { FC } from "react";

interface Props {
  name: string;
  id: number;
  img: string;
}

export const PokemonCard: FC<Props> = ({ name, id, img }) => {
  return (
    <Grid key={id} xs={6} sm={3} md={2} xl={1}>
      <Card isHoverable isPressable>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={img} width="100%" height={140} />
        </Card.Body>
        <Card.Footer css={{ justifyItems: "flex-start" }}>
          <Row justify="space-between">
            <Text transform="capitalize">{name}</Text>
            <Text>{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
