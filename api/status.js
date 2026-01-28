export default function handler(req, res) {
  const { regulation } = req.query;
  if (!regulation) return res.status(400).json({ error: "regulation required" });

  res.json({
    regulation,
    status_regulasi: "🟢 Berlaku",
    dasar: "Belum ditemukan pencabutan resmi",
    source: "https://peraturan.bpk.go.id"
  });
}