import { Box, Button, Rating, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router";

const MovieDetail = () => {
  const { id } = useParams();
  const movie = JSON.parse(localStorage.getItem(id));
  const navigate = useNavigate();
  return (
    <Stack direction={"row"} sx={{ paddingY: "3rem", gap: "10px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 2,
        }}
      >
        <img
          src={movie.imageUrl}
          alt={movie.name}
          loading="lazy"
          style={{ maxHeight: "500px", borderRadius: "4px" }}
        />
      </Box>
      <Stack sx={{ flex: 1 }} gap="0.5rem">
        <Typography variant="h4">{movie.name}</Typography>
        <Rating value={movie.rate} readOnly />
        <Typography variant="p">{movie.language}</Typography>
        <Typography variant="p">{movie.type}</Typography>
        <Button
          variant="outlined"
          onClick={() => {
            navigate(`/book-tickets/${movie._id}`);
          }}
        >
          Book
        </Button>
      </Stack>
    </Stack>
  );
};

export default MovieDetail;
