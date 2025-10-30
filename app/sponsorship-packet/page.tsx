import Image from "next/image";

export default function SponsorshipPacketPage() {
  return (
    <div className="min-h-screen bg-[#fffff0]">
      <nav className="border-b-2 border-[#012169] bg-[#fffff0] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12">
                <Image
                  src="/images/servoLogo.png"
                  alt="Silly Servos logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                  priority
                />
              </div>
              <h1 className="text-2xl font-bold text-[#012169]">Silly Servos</h1>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="/" className="text-[#012169] hover:opacity-70 transition-opacity font-medium">Home</a>
              <a href="/#about" className="text-[#012169] hover:opacity-70 transition-opacity font-medium">About</a>
              <a href="/#team" className="text-[#012169] hover:opacity-70 transition-opacity font-medium">Team</a>
              <a href="/#robots" className="text-[#012169] hover:opacity-70 transition-opacity font-medium">Robots</a>
              <a href="/#achievements" className="text-[#012169] hover:opacity-70 transition-opacity font-medium">Achievements</a>
              <a href="/#contact" className="text-[#012169] hover:opacity-70 transition-opacity font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="bg-[#fffff0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="border-2 border-[#012169] rounded-xl overflow-hidden bg-[#fffff0]">
            {/* Full-page PDF viewer */}
            <object
              data="/SponsorshipPacket.pdf#toolbar=1&navpanes=0&scrollbar=1"
              type="application/pdf"
              className="w-full h-[calc(100vh-12rem)]"
            >
              <iframe
                src="/SponsorshipPacket.pdf#toolbar=1&navpanes=0&scrollbar=1"
                className="w-full h-[calc(100vh-12rem)]"
                title="Sponsorship Packet"
              />
            </object>
          </div>
          <div className="mt-6 text-center">
            <a
              href="https://forms.gle/Sw8wA47GqVHhj76z8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#012169] px-8 py-4 font-semibold text-[#fffff0] bg-[#012169] transition-opacity hover:opacity-90"
            >
              Fill Out Sponsorship Form
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </main>

      <footer className="bg-[#fffff0] text-[#012169] py-8 border-t-2 border-[#012169]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative h-10 w-10">
              <Image
                src="/images/servoLogo.png"
                alt="Silly Servos logo"
                fill
                sizes="40px"
                className="object-contain"
              />
            </div>
            <p className="text-lg font-semibold">Silly Servos</p>
          </div>
          <p className="text-[#012169] opacity-80">© 2025 Silly Servos. All rights reserved.</p>
          <p className="text-[#012169] opacity-60 text-sm mt-2">Building the future, one servo at a time</p>
        </div>
      </footer>
    </div>
  );
}
