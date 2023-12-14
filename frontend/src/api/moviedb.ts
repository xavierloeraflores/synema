import { env } from "~/env";

export class MovieDBAPI {
  static baseUrl = "https://api.themoviedb.org/3";
  static apiKey = env.MOVIEDB_API_KEY;
}
