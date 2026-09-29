// app/profil/page.tsx

const kullanici = {
  isim: "Ahmet Yılmaz",
  email: "ahmet@example.com",
  rol: "Eğitmen",
  kayitTarihi: "Ocak 2026",
  kurslar: [
    { id: 1, baslik: "Sıfırdan React", ogrenciSayisi: 342 },
    { id: 2, baslik: "TypeScript Temelleri", ogrenciSayisi: 128 },
  ],
};

export default function ProfilSayfasi() {
  return (
    <main style={{ maxWidth: "700px", margin: "60px auto", padding: "0 24px" }}>
      {/* Üst kısım — kullanıcı bilgisi */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "40px" }}>
        <div
          style={{
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            backgroundColor: "#4f46e5",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.8rem",
            flexShrink: 0,
          }}
        >
          {kullanici.isim.charAt(0)}
        </div>
        <div>
          <h1 style={{ fontSize: "1.5rem", margin: 0 }}>{kullanici.isim}</h1>
          <p style={{ color: "#777", margin: "4px 0" }}>{kullanici.email}</p>
          <span
            style={{
              display: "inline-block",
              backgroundColor: "#eef2ff",
              color: "#4f46e5",
              fontSize: "0.8rem",
              padding: "3px 10px",
              borderRadius: "999px",
            }}
          >
            {kullanici.rol}
          </span>
        </div>
      </div>

      {/* Kurslarım */}
      <h2 style={{ fontSize: "1.1rem", marginBottom: "16px" }}>Kurslarım</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {kullanici.kurslar.map((kurs) => (
          <div
            key={kurs.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid #eee",
              borderRadius: "8px",
              padding: "16px 20px",
            }}
          >
            <span>{kurs.baslik}</span>
            <span style={{ color: "#777", fontSize: "0.9rem" }}>
              {kurs.ogrenciSayisi} öğrenci
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}