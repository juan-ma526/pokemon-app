import { Grid } from "@nextui-org/react";
import Layout from "@/components/layouts/Layout";
import axios from "axios";
import useSWR from "swr";
import { PokemonCard } from "@/components/pokemon";

interface PokemonListResponse {
  count: number;
  next?: string;
  previous?: string;
  results: SmallPokemon[];
}
interface SmallPokemon {
  name: string;
  url: string;
  id: number;
  img: string;
}

const fetcher = (url: string) =>
  axios.get<PokemonListResponse>(url).then((res) => res.data);

export default function HomePage() {
  const { data, isLoading, error } = useSWR(
    "https://pokeapi.co/api/v2/pokemon/?limit=151",
    fetcher
  );

  const pokemons: SmallPokemon[] =
    data?.results.map((pokemon: SmallPokemon, index: number) => {
      return {
        ...pokemon,
        id: index + 1,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
          index + 1
        }.svg`,
      };
    }) || [];

  return (
    <Layout title="Listado de Pokemons">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((poke) => (
          <PokemonCard
            key={poke.id}
            name={poke.name}
            id={poke.id}
            img={poke.img}
          />
        ))}
      </Grid.Container>
    </Layout>
  );
}

{
  /* <Grid key={poke.id} xs={6} sm={3} md={2} xl={1}>
  <Card isHoverable isPressable>
    <Card.Body css={{ p: 1 }}>
      <Card.Image src={poke.img} width="100%" height={140} />
    </Card.Body>
    <Card.Footer css={{ justifyItems: "flex-start" }}>
      <Row justify="space-between">
        <Text transform="capitalize">{poke.name}</Text>
        <Text>{poke.id}</Text>
      </Row>
    </Card.Footer>
  </Card>
</Grid> */
}
