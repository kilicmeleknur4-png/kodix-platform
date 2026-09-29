export default function Navbar() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 32px",
        backgroundColor: "#1e1e2f",
        color: "white",
      }}
    >
      <p style={{ fontWeight: "bold", fontSize: "1.3rem", margin: 0 }}>
        🎓 Kodix
      </p>

      <nav style={{ display: "flex", gap: "24px" }}>
        <a href="/kurslar" style={{ color: "white", textDecoration: "none" }}>
          Kurslar
        </a>
        <a href="/egitmenler" style={{ color: "white", textDecoration: "none" }}>
          Eğitmenler
        </a>
        <a href="/hakkimizda" style={{ color: "white", textDecoration: "none" }}>
          Hakkımızda
        </a>
      </nav>

      <div style={{ display: "flex", gap: "12px" }}>
        <a href="/giris" style={{ padding: "8px 16px", color: "white", border: "1px solid white", borderRadius: "6px", textDecoration: "none" }}>
          Giriş Yap
        </a>
        <a href="/kayit" style={{ padding: "8px 16px", backgroundColor: "#4f46e5", color: "white", borderRadius: "6px", textDecoration: "none" }}>
          Eğitmen Ol
        </a>
      </div>
    </header>
  );
}