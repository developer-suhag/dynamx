import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const SingleService = ({ service }) => {
  const { serviceName, description, img } = service;
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Paper
        sx={{
          bgcolor: "transparent",
          textAlign: "center",
          boxShadow: 1,
          border: "1px solid #326273",
          p: 4,
        }}
      >
        <Box>
          <img src={img} alt="" />
        </Box>
        <Typography sx={{ my: 2 }} color="primary" variant="h5">
          {serviceName}
        </Typography>
        <Typography variant="p">{description}</Typography>
      </Paper>
    </Grid>
  );
};

export default SingleService;
