// app/egitmenler/page.tsx

const egitmenler = [
  {
    id: 1,
    isim: "Ahmet Yılmaz",
    uzmanlik: "React & Next.js",
    kursSayisi: 4,
  },
  {
    id: 2,
    isim: "Zeynep Kaya",
    uzmanlik: "Full-Stack Geliştirme",
    kursSayisi: 6,
  },
  {
    id: 3,
    isim: "Mert Demir",
    uzmanlik: "TypeScript & Backend",
    kursSayisi: 3,
  },
];

export default function EgitmenlerSayfasi() {
  return (
    <main style={{ padding: "40px 32px" }}>
      <h1 style={{ fontSize: "1.8rem", marginBottom: "24px" }}>
        Eğitmenlerimiz
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {egitmenler.map((egitmen) => (
          <div
            key={egitmen.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                backgroundColor: "#4f46e5",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.4rem",
                margin: "0 auto 12px",
              }}
            >
              {egitmen.isim.charAt(0)}
            </div>
            <h2 style={{ fontSize: "1.05rem", marginBottom: "6px" }}>
              {egitmen.isim}
            </h2>
            <p style={{ color: "#666", marginBottom: "6px" }}>
              {egitmen.uzmanlik}
            </p>
            <p style={{ fontSize: "0.9rem", color: "#999" }}>
              {egitmen.kursSayisi} kurs
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}