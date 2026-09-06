import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 antialiased selection:bg-blue-500 selection:text-white">
      {/* Navigation Menu */}
      <Navbar />

      {/* Main Sections Container */}
      <main className="max-w-6xl mx-auto pt-32 px-6">
        <div className="text-center py-20">
          <h2 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
            Welcome to My Digital Space
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-xl mx-auto">
            Hum ne successfully React, Tailwind v4 aur Git ko configure kar liya hai. Ab actual modules shuru hote hain!
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
