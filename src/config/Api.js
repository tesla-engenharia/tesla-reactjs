const baseURL =
  process.env.NODE_ENV !== "development"
    ? "http://api.empresajuniortesla.com"
    : "http://localhost:3333";

module.exports = {
  baseURL
};
