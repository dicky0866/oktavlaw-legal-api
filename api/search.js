export default function handler(req, res) {
  const { q } = req.query;
  if (!q) return res.status(400).json({ error: "q required" });

  res.json({
    query: q,
    source: `https://cse.google.com/cse/publicurl?cx=15088eea7230d4379&q=${encodeURIComponent(q)}`,
    status: "OK"
  });
}