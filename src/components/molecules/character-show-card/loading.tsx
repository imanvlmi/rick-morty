import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { Card, CardContent, Container } from "@mui/material";

const LoadingBox: React.FC = () => {
  return (
    <Container>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        height={"100vh"}
      >
        <Grid item md={5}>
          <Card sx={{ display: "flex" }}>
            <Skeleton variant="rectangular" width={280} height={150} />
            <CardContent sx={{ width: "100%" }}>
              <Box sx={{ pt: 0.5 }}>
                <Skeleton width="80%" />
                <Skeleton width="10%" />
                <Skeleton width="50%" />
                <Skeleton width="50%" />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoadingBox;
