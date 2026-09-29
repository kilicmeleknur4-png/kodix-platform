"use client";
// ↑ Bu satır şart: React'e "bu sayfa tarayıcıda çalışacak, kullanıcı etkileşimi olacak" diyoruz.
// useState gibi araçlar sadece "use client" olan sayfalarda çalışır.

import { useState } from "react";

export default function GirisSayfasi() {
  const [email, setEmail] = useState("");
  const [sifre, setSifre] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // sayfanın yenilenmesini engeller
    console.log("Giriş denemesi:", email, sifre);
    // ileride burada gerçek bir giriş isteği (API çağrısı) yapılacak
  }

  return (
    <main style={{ maxWidth: "400px", margin: "80px auto", padding: "0 24px" }}>
      <h1 style={{ fontSize: "1.6rem", marginBottom: "24px" }}>Giriş Yap</h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <input
          type="email"
          placeholder="E-posta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px" }}
        />
        <input
          type="password"
          placeholder="Şifre"
          value={sifre}
          onChange={(e) => setSifre(e.target.value)}
          style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "6px" }}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#4f46e5",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Giriş Yap
        </button>
      </form>
    </main>
  );
}