export default async function handler(req, res) {
  const q = req.query.q;

  if (!q) {
    return res.status(400).json({
      error: "Parameter q wajib ada"
    });
  }

  // Endpoint resmi Google Custom Search (via CX)
  const CX = "15088eea7230d4379";

  const url = `https://cse.google.com/cse/publicurl?cx=${CX}&q=${encodeURIComponent(q)}`;

  try {
    res.status(200).json({
      query: q,
      note: "Hasil ini adalah URL pencarian resmi Google CSE (bukan scraping)",
      source: url,
      status: "OK"
    });
  } catch (err) {
    res.status(500).json({
      error: "Gagal membuat URL pencarian",
      detail: err.message
    });
  }
}
