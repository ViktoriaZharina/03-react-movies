import axios from "axios";
import { Movie } from "../types/movie";

export default function fetchMovies = async (topic: string) => {
    const response = await axios.get<Movie>("https://developer.themoviedb.org/docs/getting-started")
 }
