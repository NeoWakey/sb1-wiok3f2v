export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#1a1a1a_0%,_#000000_100%)]">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(76, 175, 80, 0.1) 0%, rgba(0, 0, 0, 0) 50%)',
          animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
          Transforming Businesses with<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
            AI-Powered Automation
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Empowering your business to become an AI-driven industry leader through cutting-edge automation solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors font-semibold">
            Get Started
          </button>
          <button className="px-8 py-3 border border-white text-white rounded-full hover:bg-white/10 transition-colors font-semibold">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}