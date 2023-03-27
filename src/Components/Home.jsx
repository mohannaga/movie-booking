import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import { useNavigate } from "react-router";
import MoviesSlider from "./MoviesSlider";
import RecomendedMovies from "./RecomendedMovies";
import ag from "../images/ag.jpg";
import bp from "../images/bp.jpg";
import ic from "../images/ic.jpg";
const Home = () => {
  const images = [ic, ag, bp];
  const navigate = useNavigate();
  return (
    <>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Button onClick={() => navigate("/latest")}> Latest Movies</Button>
        <Button onClick={() => navigate("/upcomming")}>Upcoming Movies</Button>
        <Button onClick={() => navigate("/events")}>Near by Events</Button>
      </Stack>
      <MoviesSlider images={images} autoSlideDelay={3000} />
      <RecomendedMovies />
    </>
  );
};

export default Home;
