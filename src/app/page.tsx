export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f7ff] font-sans selection:bg-purple-200 selection:text-purple-900">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-200/30 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-pink-200/30 blur-[120px]" />
      </div>

      <main className="relative z-10 max-w-4xl mx-auto px-4 py-12 md:py-24 space-y-12">
        {/* Profile Header Section */}
        <section className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-white p-1 shadow-xl">
              <div className="w-full h-full rounded-full bg-purple-50 flex items-center justify-center overflow-hidden">
                <span className="text-5xl font-bold bg-gradient-to-br from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  KH
                </span>
              </div>
            </div>
          </div>
          <h1 className="mt-8 text-4xl md:text-5xl font-extrabold tracking-tight text-purple-950">
            Nguyễn Kim Chi Ha
          </h1>
          <p className="mt-4 text-xl text-purple-600 font-medium">
            Creative Developer & UI Designer
          </p>
          <div className="mt-6 flex gap-3">
            <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold">Available for Work</span>
            <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-sm font-semibold">📍 Vietnam</span>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left Column: About & Social */}
          <div className="md:col-span-1 space-y-8 animate-in fade-in slide-in-from-left-4 duration-1000">
            <div className="bg-white/60 backdrop-blur-xl border border-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-all">
              <h2 className="text-xl font-bold text-purple-900 mb-4 flex items-center gap-2">
                <span>✨</span> About Me
              </h2>
              <p className="text-purple-800/80 leading-relaxed">
                Xin chào! Mình là Chi Ha. Một người yêu thích sự tối giản, màu tím pastel và những trải nghiệm mượt mà trên website. Mình tập trung vào phát triển Frontend với React và TypeScript.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-xl border border-white p-6 rounded-3xl shadow-sm">
              <h2 className="text-xl font-bold text-purple-900 mb-4">🔗 Connect</h2>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="p-3 rounded-2xl bg-purple-600 text-white hover:bg-purple-700 transition-colors shadow-lg shadow-purple-200">
                  GitHub
                </a>
                <a href="#" className="p-3 rounded-2xl bg-white text-purple-600 border border-purple-100 hover:bg-purple-50 transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="p-3 rounded-2xl bg-[#ea4c89] text-white hover:opacity-90 transition-opacity">
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Skills & Education */}
          <div className="md:col-span-2 space-y-8 animate-in fade-in slide-in-from-right-4 duration-1000">
            {/* Skills */}
            <div className="bg-white/60 backdrop-blur-xl border border-white p-8 rounded-3xl shadow-sm">
              <h2 className="text-xl font-bold text-purple-900 mb-6 flex items-center gap-2">
                <span>🛠️</span> Technical Skills
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { name: "React.js", color: "bg-blue-50 text-blue-700" },
                  { name: "Next.js", color: "bg-zinc-100 text-zinc-800" },
                  { name: "TypeScript", color: "bg-blue-100 text-blue-800" },
                  { name: "Tailwind CSS", color: "bg-cyan-50 text-cyan-700" },
                  { name: "UI/UX Design", color: "bg-purple-100 text-purple-800" },
                  { name: "Git", color: "bg-orange-50 text-orange-700" },
                ].map((skill) => (
                  <div key={skill.name} className={`px-4 py-3 rounded-2xl ${skill.color} font-medium text-center hover:scale-105 transition-transform cursor-default`}>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white/60 backdrop-blur-xl border border-white p-8 rounded-3xl shadow-sm">
              <h2 className="text-xl font-bold text-purple-900 mb-6 flex items-center gap-2">
                <span>🎓</span> Education
              </h2>
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-purple-200">
                  <div className="absolute w-3 h-3 bg-purple-400 rounded-full -left-[7px] top-1"></div>
                  <h3 className="font-bold text-purple-900">Software Engineering</h3>
                  <p className="text-sm text-purple-600 font-medium">Ho Chi Minh City University of Technology</p>
                  <p className="text-xs text-purple-400 mt-1">2021 - Present</p>
                </div>
                <div className="relative pl-6 border-l-2 border-purple-200">
                  <div className="absolute w-3 h-3 bg-purple-300 rounded-full -left-[7px] top-1"></div>
                  <h3 className="font-bold text-purple-900">UI/UX Advanced Certificate</h3>
                  <p className="text-sm text-purple-600 font-medium">Google Career Certificates</p>
                  <p className="text-xs text-purple-400 mt-1">2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="pt-12 text-center text-purple-400 text-sm">
          <p>© 2026 Nguyễn Kim Chi Ha • Built with passion and pastel purple.</p>
        </footer>
      </main>
    </div>
  );
}

