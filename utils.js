function sum(a, b) {
  return a + b;
}

function normalizeURL(urlString) {
  const urlObj = new URL(urlString);
  const hostPath = `${urlObj.hostname}${urlObj.pathname}`;
  if (hostPath.length && hostPath.slice(-1) === '/')
    return hostPath.slice(0, -1);

  return hostPath;
}

module.exports = {
  sum,
  normalizeURL,
};
