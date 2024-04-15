import axios from "axios";

const instance = axios.create({
  baseURL: "http://api.themoviedb.org/3",
  params: {
    api_key: "40f1d862a0bbc1a7e7cc123339975d4d",
    language: "ko-KR",
  },
});

export default instance;
