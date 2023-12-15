import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ICharacter } from "./types";

const CharacterShowCard = ({
  imageUrl,
  characterName,
  created,
  gender,
  location,
}: ICharacter): React.JSX.Element => {
  return (
    <>
      <Card sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          sx={{ maxWidth: { xs: 120, md: 250 } }}
          image={imageUrl}
          alt={characterName}
        />
        <CardContent sx={{ flex: "1 0 auto", alignSelf: "center" }}>
          <Typography component="div" variant="h5">
            {characterName}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {gender}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {location?.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {created}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default CharacterShowCard;
