export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY, 
    headers: {
        accept: 'application/json',
    }
}

export const fetchMovies = async ({query}: {query: string}) =>{
    const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}&api_key=${TMDB_CONFIG.API_KEY}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${TMDB_CONFIG.API_KEY}`

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
            accept: 'application/json',
        }
    })

    if (!response.ok){
        throw new Error(`Failed to fetch movies: ${response.statusText}`)
    }

    const data = await response.json()

    return data
}

export const fetchMovieDetails = async (
  movieId: string
): Promise<MovieDetails> => {
  try {
    const response = await fetch(
      `${TMDB_CONFIG.BASE_URL}/movie/${movieId}?api_key=${TMDB_CONFIG.API_KEY}`,
      {
        method: "GET",
        headers: TMDB_CONFIG.headers,
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch movie details: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};

