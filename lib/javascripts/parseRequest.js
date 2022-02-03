function parseRequest(req) {
  return JSON.parse(JSON.stringify({
    requestLine: `${req.method} ${req.url} HTTP/${req.httpVersion}`,
    timestamp: new Date(),
    header: req.headers,
    method: req.method,
    path: req.path,
    ip: req.ip,
    body: req.body,
  }));
}

module.exports = parseRequest;