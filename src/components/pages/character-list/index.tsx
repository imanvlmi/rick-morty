import { useCharactersList } from "@api/characters-list/services";
import { Container, Grid } from "@mui/material";
import myStore from "@store/store";
import { UseQueryResult } from "react-query";
import { IUseCharactersList } from "./types";
import LoadingBox from "../../molecules/character-list-card/loading";
import { Actions, State, character } from "@store/interface";
import Link from "@mui/material/Link";
import CharacterListCard from "../../molecules/character-list-card/index";

const CharacterListOrganism: React.FC = () => {
  const { setList, charactersList } = myStore(
    (state): State & Actions => state
  );

  const { isLoading } = useCharactersList((data): void =>
    setList(data.characters.results)
  ) as UseQueryResult<IUseCharactersList>;

  if (isLoading) return <LoadingBox />;

  return (
    <Container maxWidth="md">
      <Grid container data-testid="characterInfo" spacing={3} my={5}>
        {charactersList.map((item: character, inx: number) => (
          <Grid
            key={inx}
            item
            md={3}
            sx={{
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Link href={`/${item.id}`} underline="none">
              <CharacterListCard
                imageUrl={item.image}
                characterName={item.name}
                characterSpecies={item.species}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CharacterListOrganism;
