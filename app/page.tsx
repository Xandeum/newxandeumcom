export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-slate-50">
      <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl shadow-cyan-950/30 backdrop-blur">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
          Xandeum
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          newxandeumcom
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
          A minimal Next.js app with Tailwind CSS, ready for GitHub and Vercel.
        </p>
      </div>
    </main>
  );
}
