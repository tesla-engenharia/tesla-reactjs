const Host =
  process.env.NODE_ENV !== "development"
    ? "http://empresajuniortesla.com"
    : "http://localhost";

module.exports = {
  Host,
  Port: 3000
};
