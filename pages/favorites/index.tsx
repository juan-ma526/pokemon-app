import Layout from "@/components/layouts/Layout";
import { NoFavorites } from "@/components/ui";
import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const FavoritePage = () => {
  const router = useRouter();

  const favorites = (): number[] => {
    return JSON.parse(localStorage.getItem("favorites") || "[]");
  };
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons(favorites());
  }, []);

  const handleClickPokemon = (id: number) => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Layout title="Pokemons - Favoritos">
      {favoritesPokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <Grid.Container gap={2} direction="row" justify="flex-start">
          {favoritesPokemons.map((id) => (
            <Grid key={id} xs={6} sm={3} md={2} xl={1}>
              <Card
                onClick={() => handleClickPokemon(id)}
                isHoverable
                isPressable
                css={{ padding: 10 }}
              >
                <Card.Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                  alt="imagen pokemon"
                  width="100%"
                  height={140}
                />
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      )}
    </Layout>
  );
};

export default FavoritePage;
