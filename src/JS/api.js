import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDY1ZDYyZmFiMDMyNWRiNmZlMjBiMjIzOWRmZjg4MSIsInN1YiI6IjY1ZGNkYThmMzI1YTUxMDE2MjQ5MzA2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D9WU_LY6Ta3ZHAYk2UGUzwyS9xWLJUQqGiAVBvddybo`,
  },
  include_adult: false,
  language: 'en-US',
  page: 1,
});

const getAllMovies = async () => {
  const response = await api.get('trending/movie/week');
  return response.data;
};

const getMovieById = async id => {
  const response = await api.get(`movie/${id}`);
  return response.data;
};

const getMovieByFilter = async query => {
  const response = await api.get(`search/movie?query=${query}`);
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
