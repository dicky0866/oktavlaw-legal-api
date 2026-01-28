export default function handler(req, res) {
  const { q } = req.query;
  if (!q) return res.status(400).json({ error: "q required" });

  res.json({
    query: q,
    excerpt: null,
    source: "https://jdih.go.id",
    status: "NO_TEXT_RETURNED"
  });
}