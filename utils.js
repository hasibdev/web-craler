function sum(a, b) {
  return a + b;
}

function normalizeURL(urlString) {
  const urlObj = new URL(urlString);
  return `${urlObj.hostname}${urlObj.pathname}`;
}

module.exports = {
  sum,
  normalizeURL,
};
