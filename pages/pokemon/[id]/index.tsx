import Layout from "@/components/layouts/Layout";
import { PokemonFull } from "@/interfaces";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import axios from "axios";
import { useRouter } from "next/router";

import useSWR from "swr";

const fetcher = async (url: string) => {
  return axios.get<PokemonFull>(url).then((res) => res.data);
};

const PokemonPage = () => {
  const router = useRouter();
  const { query } = router;

  const { data, isLoading, error } = useSWR(
    query.id ? `https://pokeapi.co/api/v2/pokemon/${query.id}` : null,
    fetcher
  );

  return (
    <Layout title="Algun pokemon">
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  data?.sprites.other?.dream_world.front_default ||
                  "/no-image.png"
                }
                alt={data?.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1>{data?.name}</Text>
              <Button color="gradient" ghost>
                Guardar en Favoritos
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites</Text>
              <Container direction="row" display="flex" gap={0}>
                <Image
                  src={data?.sprites.front_default || "/no-image.png"}
                  alt={data?.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={data?.sprites.back_default || "/no-image.png"}
                  alt={data?.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={data?.sprites.front_shiny || "/no-image.png"}
                  alt={data?.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={data?.sprites.back_shiny || "/no-image.png"}
                  alt={data?.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export default PokemonPage;

/* export async function generateStaticParams() {
  const pokemons = [...Array(151)].map((value, index) => `${index + "1"}`);

  return pokemons.map((id) => {
    id;
  });
}
 */
