export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#1f2a6d]/95 via-[#263d8b]/95 to-[#1c2f63]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-3 text-sm text-white/80 sm:flex-row sm:items-center sm:justify-between sm:text-sm sm:py-2.5 sm:px-6 lg:px-8">
        <p className="text-center text-white/90 font-medium sm:flex-1">
          <span className="text-gradient">AI revenue automation</span> for enterprise teams.
          <a href="#contact" className="ml-2 text-primary hover:text-purple-300 font-semibold">
            Book a consultation
          </a>
        </p>

        <a
          href="mailto:enterprise@colorweave.ai"
          className="hidden text-center text-white/70 hover:text-white font-semibold sm:block"
        >
          enterprise@colorweave.ai
        </a>
      </div>
    </div>
  );
}
