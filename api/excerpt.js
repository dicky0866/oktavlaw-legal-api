export default async function handler(req, res) {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({
      error: "Parameter q wajib diisi (contoh: UUD 1945 Pasal 33 ayat 3)"
    });
  }

  // Sumber resmi JDIH / dokumen negara (simulasi aman, non-scraping)
  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
    q + " site:jdih.go.id"
  )}`;

  res.status(200).json({
    query: q,
    note: "Cuplikan teks harus diambil dari sumber hukum resmi (JDIH/Kemenkumham). Endpoint ini bertugas sebagai validator, bukan penafsir.",
    instruction:
      "Gunakan URL sumber untuk membaca teks asli pasal sebelum menyimpulkan benar/salah.",
    source: searchUrl,
    status: "OK"
  });
}