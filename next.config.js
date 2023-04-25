const API_KEY = "67acc0056afde49c51c17021ef4100f6";

module.exports = {
  reactStrictMode: true,
  async redirect() {
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      }
    ]
  }
};
