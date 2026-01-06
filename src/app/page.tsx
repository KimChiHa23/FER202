

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50 p-4 font-sans">
      <main className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden transition-all hover:shadow-purple-200/50 duration-500">
        {/* Header / Cover Image Area */}
        <div className="h-40 bg-gradient-to-r from-purple-200 to-pink-200 relative">
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
            <div className="w-32 h-32 rounded-full border-4 border-white bg-purple-100 flex items-center justify-center shadow-lg overflow-hidden">
              {/* Placeholder for avatar - using text initials for now or a generic placeholder if preferred, 
                    but a nice colored div is good for 'pastel' theme if no image provided yet. */}
              <span className="text-4xl font-bold text-purple-400">KH</span>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="pt-20 pb-8 px-8 text-center">
          <h1 className="text-3xl font-bold text-purple-900 mb-2">
            Nguyễn Kim Chi Ha
          </h1>
          <p className="text-purple-600 font-medium mb-6">
            Creative Developer & Designer
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-purple-50 rounded-2xl group hover:bg-purple-100 transition-colors cursor-pointer">
              <p className="text-purple-800 text-sm leading-relaxed">
                "Yêu thích sự sáng tạo và màu tím pastel. Luôn tìm kiếm những điều mới mẻ trong công nghệ và thiết kế."
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <button className="px-6 py-2.5 rounded-full bg-purple-600 text-white font-semibold shadow-lg shadow-purple-200 hover:bg-purple-700 hover:shadow-purple-300 transform hover:-translate-y-0.5 transition-all">
              Contact Me
            </button>
            <button className="px-6 py-2.5 rounded-full bg-white text-purple-600 border-2 border-purple-100 font-semibold hover:border-purple-200 hover:bg-purple-50 transition-all">
              Portfolio
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
