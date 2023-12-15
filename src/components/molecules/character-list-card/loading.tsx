import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { Card, CardContent, Container } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
const LoadingBox: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container maxWidth="md">
      <Grid
        container
        spacing={3}
        my={5}
        sx={{ ...(isMobile && { flexFlow: "column" }) }}
      >
        {Array.from(new Array(9)).map((_, inx) => (
          <Grid key={inx} item md={4}>
            <Card>
              <Skeleton variant="rectangular" width={"100%"} height={200} />

              <CardContent>
                <Box sx={{ pt: 0.5 }}>
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LoadingBox;
