import axios from 'axios';

const TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDY1ZDYyZmFiMDMyNWRiNmZlMjBiMjIzOWRmZjg4MSIsInN1YiI6IjY1ZGNkYThmMzI1YTUxMDE2MjQ5MzA2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D9WU_LY6Ta3ZHAYk2UGUzwyS9xWLJUQqGiAVBvddybo';

const BASE_URL = 'https://api.themoviedb.org/3/';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    include_adult: false,
    language: 'en-US',
  },
});

const getAllMovies = async ({ params }) => {
  const response = await api.get('trending/movie/week', params);
  return response.data;
};

const getMovieById = async id => {
  const response = await api.get(`movie/${id}`);
  return response.data;
};

const getMovieByFilter = async ({ params }) => {
  const response = await api.get('search/movie', params);
  return response.data;
};

const getActorsOfMovie = async id => {
  const response = await api.get(`movie/${id}/credits`);
  return response.data;
};

const getMovieReviews = async id => {
  const response = await api.get(`movie/${id}/reviews`);
  return response.data;
};

export {
  getActorsOfMovie,
  getAllMovies,
  getMovieByFilter,
  getMovieById,
  getMovieReviews,
};
