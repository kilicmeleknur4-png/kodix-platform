// app/kurslar/page.tsx

const kurslar = [
  {
    id: 1,
    baslik: "Sıfırdan React",
    egitmen: "Ahmet Yılmaz",
    fiyat: "₺499",
  },
  {
    id: 2,
    baslik: "Next.js ile Full-Stack Geliştirme",
    egitmen: "Zeynep Kaya",
    fiyat: "₺699",
  },
  {
    id: 3,
    baslik: "TypeScript Temelleri",
    egitmen: "Mert Demir",
    fiyat: "₺349",
  },
];

export default function KurslarSayfasi() {
  return (
    <main style={{ padding: "40px 32px" }}>
      <h1 style={{ fontSize: "1.8rem", marginBottom: "24px" }}>
        Tüm Kurslar
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "20px",
        }}
      >
        {kurslar.map((kurs) => (
          <div
            key={kurs.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "20px",
            }}
          >
            <h2 style={{ fontSize: "1.1rem", marginBottom: "8px" }}>
              {kurs.baslik}
            </h2>
            <p style={{ color: "#666", marginBottom: "12px" }}>
              Eğitmen: {kurs.egitmen}
            </p>
            <p style={{ fontWeight: "bold" }}>{kurs.fiyat}</p>
          </div>
        ))}
      </div>
    </main>
  );
}