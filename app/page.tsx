export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-8">
      <main className="max-w-4xl text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
          Bilgini Paylaş, Dünyaya Öğret 🎓
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          Kendi kurslarını yükle, binlerce öğrenciye ulaş ve yeteneklerini kazanca dönüştür.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-indigo-600 text-white font-medium px-6 py-3 rounded-xl hover:bg-indigo-700 transition">
            Kursları Keşfet
          </button>
          <button className="bg-white text-indigo-600 border border-indigo-600 font-medium px-6 py-3 rounded-xl hover:bg-indigo-50 transition">
            Eğitmen Ol
          </button>
        </div>
      </main>
    </div>
  );
}