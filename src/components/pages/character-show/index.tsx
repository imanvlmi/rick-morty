import { useCharacterItem } from "@api/character-item/services";
import { Container, Grid } from "@mui/material";
import myStore from "@store/store";
import { useParams } from "react-router-dom";
import CharacterShowCard from "../../molecules/character-show-card";
import LoadingBox from "../../molecules/character-show-card/loading";
import { UseQueryResult } from "react-query";
import { IUseCharacterItem } from "./types";
import { Actions, State } from "@store/interface";

const CharacterShow: React.FC = () => {
  const { id } = useParams();

  const { setCharacterInfo, characterInfo } = myStore(
    (state: State & Actions): State & Actions => state
  );

  const { isLoading } = useCharacterItem(id, (data): void =>
    setCharacterInfo(data)
  ) as UseQueryResult<IUseCharacterItem>;

  if (isLoading) return <LoadingBox />;

  const { name, image, gender, location, created } = characterInfo?.character;

  const createdDate = created;
  const convertDate = createdDate && new Date(createdDate);

  return (
    <>
      <Container>
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          height={"100vh"}
        >
          <Grid item md={8} xs={12}>
            <CharacterShowCard
              imageUrl={image}
              characterName={name}
              gender={gender}
              location={location}
              created={convertDate && convertDate.toDateString()}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CharacterShow;
