import { env } from "~/env";

export class MovieDBAPI {
  static baseUrl = "https://api.themoviedb.org/3";
  static apiKey = env.MOVIEDB_API_KEY;

  static getPopularMovies = async (page = 1) => {
    const response = await fetch(
      `${MovieDBAPI.baseUrl}/movie/popular?api_key=${MovieDBAPI.apiKey}&page=${page}`,
    );
    return response.json();
  };
  static search = async (query: string) => {
    const response = await fetch(
      `${MovieDBAPI.baseUrl}/search/movie?api_key=${MovieDBAPI.apiKey}&query=${query}`,
    );
    return response.json();
  };
}
