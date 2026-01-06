export default function Home() {
  return (
    <div className="min-h-screen bg-[#fcfaff] font-sans selection:bg-purple-200 selection:text-purple-900">
      {/* Dynamic Ambient Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-purple-100/40 blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-pink-100/40 blur-[140px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24 space-y-16">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-top-6 duration-1000">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-300 to-pink-300 rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full bg-white p-1.5 shadow-2xl">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-50 to-white flex items-center justify-center overflow-hidden border border-purple-100">
                <span className="text-5xl md:text-6xl font-black bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tighter">
                  KH
                </span>
              </div>
            </div>
            <div className="absolute bottom-2 right-2 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-lg flex items-center justify-center border border-purple-50 animate-bounce">
              <span className="text-lg">👋</span>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black text-purple-950 tracking-tight">
              Nguyễn Kim Chi Ha
            </h1>
            <p className="text-xl md:text-2xl text-purple-600/90 font-semibold tracking-wide">
              Frontend Developer & Visual Storyteller
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'TypeScript', 'Next.js', 'UI Design'].map((tag) => (
              <span key={tag} className="px-5 py-2 rounded-full bg-white/80 border border-purple-100 text-purple-700 text-sm font-bold shadow-sm backdrop-blur-sm">
                #{tag}
              </span>
            ))}
          </div>
        </section>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* About Card */}
            <div className="bg-white/70 backdrop-blur-2xl border border-white/50 p-8 rounded-[2.5rem] shadow-xl shadow-purple-100/20">
              <h2 className="text-2xl font-black text-purple-900 mb-6 flex items-center gap-3">
                <span className="p-2 bg-purple-100 rounded-2xl text-xl">✨</span> About Me
              </h2>
              <p className="text-purple-800/80 leading-relaxed font-medium">
                Sáng tạo là niềm đam mê, lập trình là công cụ. Mình tập trung xây dựng những sản phẩm số không chỉ hoạt động tốt mà còn phải thật đẹp và mang lại cảm xúc cho người dùng.
              </p>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-8 rounded-[2.5rem] shadow-xl text-white">
              <h2 className="text-2xl font-black mb-6">Stay Connected</h2>
              <div className="grid grid-cols-1 gap-3">
                <a href="#" className="flex items-center justify-between p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-all group backdrop-blur-md border border-white/10">
                  <span className="font-bold">GitHub</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a href="#" className="flex items-center justify-between p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-all group backdrop-blur-md border border-white/10">
                  <span className="font-bold">Behance</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a href="#" className="flex items-center justify-between p-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-all group backdrop-blur-md border border-white/10">
                  <span className="font-bold">Email</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8 space-y-8">
            {/* Skills Section */}
            <div className="bg-white/70 backdrop-blur-2xl border border-white/50 p-10 rounded-[2.5rem] shadow-xl">
              <h2 className="text-2xl font-black text-purple-900 mb-8 flex items-center gap-3">
                <span className="p-2 bg-pink-100 rounded-2xl text-xl">🛠️</span> Core Expertise
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { name: 'Frontend', desc: 'React, Next.js, Vue', icon: '🎨' },
                  { name: 'Backend', desc: 'Node.js, Firebase', icon: '🔐' },
                  { name: 'Design', desc: 'Figma, Adobe XD', icon: '💎' },
                ].map((s) => (
                  <div key={s.name} className="p-6 rounded-3xl bg-purple-50 border border-purple-100/50 hover:bg-purple-100 transition-colors group">
                    <div className="text-2xl mb-3">{s.icon}</div>
                    <div className="font-bold text-purple-950 mb-1">{s.name}</div>
                    <div className="text-xs text-purple-600 font-medium">{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Projects (Adding more info here) */}
            <div className="bg-white/70 backdrop-blur-2xl border border-white/50 p-10 rounded-[2.5rem] shadow-xl">
              <h2 className="text-2xl font-black text-purple-900 mb-8 flex items-center gap-3">
                <span className="p-2 bg-blue-100 rounded-2xl text-xl">🚀</span> Recent Projects
              </h2>
              <div className="space-y-6">
                {[
                  { title: 'Pastel Portfolio', category: 'Web App', color: 'bg-purple-100 text-purple-700' },
                  { title: 'E-commerce UI Kit', category: 'UI Design', color: 'bg-pink-100 text-pink-700' },
                ].map((p) => (
                  <div key={p.title} className="flex items-center justify-between p-6 rounded-3xl border border-purple-50 hover:border-purple-200 transition-all group">
                    <div>
                      <h3 className="text-lg font-black text-purple-900 group-hover:text-purple-600 transition-colors">{p.title}</h3>
                      <p className="text-sm text-purple-500 font-bold mt-1">{p.category}</p>
                    </div>
                    <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase ${p.color}`}>Case Study</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-12">
          <div className="inline-flex items-center gap-4 p-2 rounded-full bg-white shadow-xl shadow-purple-100/40 border border-purple-50">
            <span className="pl-4 font-bold text-purple-900">Chi Ha Portfolio</span>
            <span className="px-6 py-2 rounded-full bg-purple-600 text-white font-bold text-sm">2026 Edition</span>
          </div>
        </footer>
      </main>
    </div>
  );
}

