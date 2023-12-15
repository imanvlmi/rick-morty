import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { ICharacterListCard } from "./types";
import styles from "./styles.module.css";
const CharacterListCard = ({
  imageUrl,
  characterName,
  characterSpecies,
}: ICharacterListCard): React.JSX.Element => {
  return (
    <>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            className={styles.imageCard}
            image={imageUrl}
            alt={characterName}
          />
          <CardContent>
            <Typography gutterBottom variant="button" component="h2">
              {characterName}
            </Typography>
            <Typography gutterBottom variant="body2" component="p">
              {characterSpecies}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default CharacterListCard;
