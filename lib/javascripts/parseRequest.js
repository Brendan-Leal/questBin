function parseRequest(req) {
  return JSON.parse(JSON.stringify({
    header: req.headers,
    method: req.method,
    path: req.path,
    ip: req.ip,
  }));
}

module.exports = parseRequest;