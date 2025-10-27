import Image from "next/image";
import { Cog, Code, Megaphone, PencilRuler } from "lucide-react";

export default function Home() {
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
              <h1 className="text-2xl font-bold text-[#012169]">
                Silly Servos
              </h1>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#home" className="text-[#012169] hover:opacity-70 transition-opacity font-medium">Home</a>
              <a href="#about" className="text-[#012169] hover:opacity-70 transition-opacity font-medium">About</a>
              <a href="#team" className="text-[#012169] hover:opacity-70 transition-opacity font-medium">Team</a>
              <a href="#robots" className="text-[#012169] hover:opacity-70 transition-opacity font-medium">Robots</a>
              <a href="#achievements" className="text-[#012169] hover:opacity-70 transition-opacity font-medium">Achievements</a>
              <a href="#contact" className="text-[#012169] hover:opacity-70 transition-opacity font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="bg-[#fffff0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 text-[#012169]">
              Silly Servos #24213
            </h1>
            <p className="text-xl sm:text-2xl text-[#012169] mb-8 max-w-2xl mx-auto font-semibold">
              FTC robotics team at Highland Park High School
            </p>
            <p className="text-lg text-[#012169] opacity-80 mb-12 max-w-3xl mx-auto">
              We are a passionate robotics team dedicated to innovation, creativity, and learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#about" className="px-8 py-4 bg-[#012169] text-[#fffff0] rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Learn More
              </a>
              
            </div>
            <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-10">
              <div className="flex flex-col items-center gap-3">
                <div className="relative h-24 w-24 sm:h-28 sm:w-28">
                  <Image
                    src="/images/servoLogo.png"
                    alt="Silly Servos logo"
                    fill
                    sizes="112px"
                    className="object-contain"
                  />
                </div>
                
              </div>
         
              <div className="flex flex-col items-center gap-3">
                <div className="relative h-24 w-24 sm:h-28 sm:w-28">
                  <Image
                    src="/images/HPLogo.png"
                    alt="School logo"
                    fill
                    sizes="112px"
                    className="object-contain"
                  />
                </div>
           
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-[#012169]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#fffff0]">
            About Us
          </h2>
          <div className="mx-auto max-w-4xl">
            <p className="text-lg text-[#fffff0] opacity-90 text-center">
              FTC Team Silly Servos was founded in 2023 with the intent to fuel interest for STEM at Highland Park High School. With this program, we are able to provide a place where students
foster a strong passion for science, technology, and engineering, while developing their critical
thinking and problem-solving skills. FTC creates a competitive environment that our
members thrive in as they brainstorm, design, construct, and test a unique robot.
Not only do members build strong foundations essential to engineering and programming,
they also gain crucial career skills and experience that employers and colleges value
immensely. Students exclusively qualify for $80 million in scholarship money for participants
of FIRST Robotics.
            </p>
            <div className="mt-12 flex flex-col items-center gap-4">
              <Image
                src="/images/FirstLogo.png"
                alt="FIRST Robotics logo"
                width={220}
                height={90}
              />
              <p className="text-[#fffff0] opacity-80 text-center text-sm sm:text-base">
                Proud participants in the global FIRST® Robotics community, inspiring future innovators through real-world engineering challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 bg-[#fffff0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#012169]">
            Parts of Our Team
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#fffff0] border-2 border-[#012169] p-6 rounded-xl hover:bg-[#012169] hover:text-[#fffff0] transition-all group">
              <div className="w-20 h-20 bg-[#012169] group-hover:bg-[#fffff0] rounded-full mx-auto mb-4 flex items-center justify-center transition-all">
                <PencilRuler
                  className="h-10 w-10 text-[#fffff0] group-hover:text-[#012169] transition-colors"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-[#012169] group-hover:text-[#fffff0]">Design</h3>
              <p className="text-[#012169] group-hover:text-[#fffff0] opacity-80 text-center text-sm">
                The design team creates CAD models using Onshape and engineering drawings for robot components.
              </p>
            </div>
            <div className="bg-[#fffff0] border-2 border-[#012169] p-6 rounded-xl hover:bg-[#012169] hover:text-[#fffff0] transition-all group">
              <div className="w-20 h-20 bg-[#012169] group-hover:bg-[#fffff0] rounded-full mx-auto mb-4 flex items-center justify-center transition-all">
                <Cog
                  className="h-10 w-10 text-[#fffff0] group-hover:text-[#012169] transition-colors"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-[#012169] group-hover:text-[#fffff0]">Build</h3>
              <p className="text-[#012169] group-hover:text-[#fffff0] opacity-80 text-center text-sm">
                The build team constructs the robot using components from Gobilda, REV, and more.
              </p>
            </div>
            <div className="bg-[#fffff0] border-2 border-[#012169] p-6 rounded-xl hover:bg-[#012169] hover:text-[#fffff0] transition-all group">
              <div className="w-20 h-20 bg-[#012169] group-hover:bg-[#fffff0] rounded-full mx-auto mb-4 flex items-center justify-center transition-all">
                <Code
                  className="h-10 w-10 text-[#fffff0] group-hover:text-[#012169] transition-colors"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-[#012169] group-hover:text-[#fffff0]">Program</h3>
              <p className="text-[#012169] group-hover:text-[#fffff0] opacity-80 text-center text-sm">
                We program the robot using Java and implement advanced path-following algorithms using Road Runner.
              </p>
            </div>
            
            <div className="bg-[#fffff0] border-2 border-[#012169] p-6 rounded-xl hover:bg-[#012169] hover:text-[#fffff0] transition-all group">
              <div className="w-20 h-20 bg-[#012169] group-hover:bg-[#fffff0] rounded-full mx-auto mb-4 flex items-center justify-center transition-all">
                <Megaphone
                  className="h-10 w-10 text-[#fffff0] group-hover:text-[#012169] transition-colors"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-[#012169] group-hover:text-[#fffff0]">Outreach</h3>
              <p className="text-[#012169] group-hover:text-[#fffff0] opacity-80 text-center text-sm">
                We seek sponsorships and spread STEM values in our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="robots" className="py-20 bg-[#012169]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-6 text-[#fffff0]">
            Robots in Action
          </h2>
          <p className="text-center text-[#fffff0] opacity-80 max-w-3xl mx-auto mb-12">
            From early prototypes to competition-ready builds, our robots showcase the engineering, programming, and teamwork that define Silly Servos.
          </p>
          <div className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
            <figure className="overflow-hidden rounded-2xl border-2 border-[#fffff0] bg-[#012169]">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/robot1.jpeg"
                  alt="robot1"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
              <figcaption className="p-4 text-center text-[#fffff0] opacity-80 text-sm sm:text-base">
                Our first basic robot from the 2024-2025 season. This robot was simple, yet earned us 2nd place at the first league meet!
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-2xl border-2 border-[#fffff0] bg-[#012169]">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/robot2.jpeg"
                  alt="robot2"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
              <figcaption className="p-4 text-center text-[#fffff0] opacity-80 text-sm sm:text-base">
                The second iteration of our 2024-2025 robot, featuring improved mechanisms and an autonomous program using Road Runner.
              </figcaption>
            </figure>
          </div>
          <div className="mt-12 text-center">
            <a
              href="https://www.instagram.com/hprobotics_sillyservos/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#fffff0] px-6 py-3 font-semibold text-[#fffff0] transition-colors hover:bg-[#fffff0] hover:text-[#012169]"
            >
              Follow us on Instagram for more competition photos
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 bg-[#fffff0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#012169]">
            Our Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#012169] mb-2">7+</div>
              <p className="text-[#012169] opacity-80">Competitions</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#012169] mb-2">5</div>
              <p className="text-[#012169] opacity-80">Robots Built</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#012169] mb-2">∞</div>
              <p className="text-[#012169] opacity-80">Innovation</p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <a
              href="https://ftcscout.org/teams/24213"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#012169] px-6 py-3 font-semibold text-[#012169] transition-colors hover:bg-[#012169] hover:text-[#fffff0]"
            >
              View our detailed match stats on FTCScout
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-[#012169]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#fffff0]">
            Sponsorships
          </h2>
          <p className="text-xl text-[#fffff0] opacity-80 mb-8">
            Interested in supporting future STEM innovators? We are always looking for passionate sponsors!
          </p>
          <a href="" className="inline-block px-8 py-4 bg-[#fffff0] text-[#012169] rounded-lg font-semibold border-2 border-[#fffff0] transition-opacity hover:opacity-90">
            View Sponsorship Packet
          </a>
        </div>
      </section>

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
          <p className="text-[#012169] opacity-80">
            © 2025 Silly Servos. All rights reserved.
          </p>
          <p className="text-[#012169] opacity-60 text-sm mt-2">
            Building the future, one servo at a time
          </p>
        </div>
      </footer>
    </div>
  );
}
