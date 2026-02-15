'use client'

import { useState } from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import { Github, Mail, Phone, MapPin, ExternalLink, ChevronDown, Code, Cpu, Blocks, Brain } from 'lucide-react';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
});

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [imageError, setImageError] = useState(false);

  const scrollToSection = (id: string): void => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 ${montserrat.className}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              MARC ANTHONY M SAN JUAN
            </h1>
            <div className="flex gap-6">
              {['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm hover:text-cyan-400 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-slate-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm mb-4">
                Computer Engineer | Embedded Systems Developer
              </div>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Building the Future with
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Blockchain, AI & IoT
                </span>
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Innovative Computer Engineering student specializing in blockchain technology, embedded systems, and AI-driven solutions. 
                Experienced in developing full-stack applications, IoT systems, and AI agents with proven success in hackathons and real-world implementations.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/sunkissedmomento" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg transition-all">
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a href="mailto:work.mmasanjuan@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-all">
                  <Mail className="w-5 h-5" />
                  <span>Contact Me</span>
                </a>
              </div>
              <div className="flex flex-wrap gap-6 mt-8 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Technological Institute of the Philippines</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+639669105402</span>
                </div>
              </div>
            </div>
            
            {/* Profile Image with Fallback */}
            <div className="w-64 h-64 rounded-2xl overflow-hidden border-4 border-cyan-500/30 relative">
              {imageError ? (
                // Fallback if image doesn't exist
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600">
                  <div className="text-6xl font-bold text-white">MS</div>
                </div>
              ) : (
                // Try to load image from public folder
                <Image 
                  src="/profile.png" 
                  alt="Marc Anthony San Juan" 
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                  onError={() => setImageError(true)}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">Technical Arsenal</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: 'Programming & Web',
                skills: ['C++, JavaScript/TypeScript, Python, Solidity', 'Next.js, React, Node.js', 'MySQL, PostgreSQL, Firebase']
              },
              {
                icon: <Blocks className="w-8 h-8" />,
                title: 'Blockchain & Web3',
                skills: ['Solana, Ethereum', 'Smart Contracts, dApps', 'NFT & Wallet Integration']
              },
              {
                icon: <Cpu className="w-8 h-8" />,
                title: 'Embedded & IoT',
                skills: ['ESP32, Raspberry Pi, Arduino', 'MQTT, WiFi/UDP, GPIO', 'Real-time Systems']
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: 'AI & ML',
                skills: ['Multi-agent Systems', 'OpenAI, Claude API', 'TensorFlow, PyTorch, NLP']
              }
            ].map((category, idx) => (
              <div key={idx} className="p-6 bg-slate-900 border border-slate-700 rounded-xl hover:border-cyan-500/50 transition-all">
                <div className="text-cyan-400 mb-4">{category.icon}</div>
                <h4 className="text-lg font-semibold mb-3">{category.title}</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">Featured Projects</h3>
          <div className="space-y-6">
            {[
              {
                title: 'SpotMeFi',
                role: 'Creator & Full-Stack Developer',
                date: 'November 2025',
                description: 'AI-Powered Spotify Playlist Generator',
                highlights: [
                  'Built with Next.js 14, TypeScript, integrating Claude API for intelligent music curation',
                  'Achieved 9× cost reduction using Claude 3.5 Haiku (~$0.0005 per playlist)',
                  'OAuth authentication with Spotify, Supabase PostgreSQL, deployed on Vercel'
                ],
                tech: ['Next.js', 'TypeScript', 'Claude API', 'Spotify API', 'Supabase'],
                color: 'from-green-500 to-emerald-600'
              },
              {
                title: 'Project Selyo',
                role: 'Co-Founder & Embedded Systems Engineer',
                date: 'August 2024 – December 2024',
                description: 'Blockchain Event Management Platform',
                highlights: [
                  'Designed ESP32-based NFC reader "Panatak" with OLED display for tap-to-collect interactions',
                  'Deployed at Blockchain Campus Conference 2024: 2,500+ users, 3,500+ social interactions',
                  'Integrated ESP32, NFC, blockchain infrastructure, and analytics dashboard'
                ],
                tech: ['ESP32', 'NFC', 'Blockchain', 'Embedded C++', 'IoT'],
                color: 'from-blue-500 to-cyan-600'
              },
              {
                title: 'CharityChain',
                role: 'Founder & Lead Developer',
                date: 'March 2023',
                description: 'Blockchain-Based Charitable Platform',
                highlights: [
                  '5th place at UNBLOCK HACKATHON 2023',
                  'Transparent and accountable charitable contributions using distributed ledger',
                  'Smart contracts for decentralized philanthropy'
                ],
                tech: ['Blockchain', 'Smart Contracts', 'Web3'],
                color: 'from-purple-500 to-pink-600'
              },
              {
                title: 'Me-Aw',
                role: 'Founder & Blockchain Developer',
                date: 'June 2023',
                description: 'Solana-Based Community Engagement Platform',
                highlights: [
                  '2nd place in Solana Superteam Whack-a-thon 2024 (Bonkathon)',
                  'Incentivize community engagement through Solana blockchain',
                  'Rapid development cycle with timely execution'
                ],
                tech: ['Solana', 'Web3', 'dApp'],
                color: 'from-violet-500 to-purple-600'
              },
              {
                title: 'Smart Goggles for Beach Volleyball',
                role: 'Developer',
                date: '2024',
                description: 'Real-Time Voice Communication System using ESP32 I2S Audio',
                highlights: [
                  'Bidirectional voice communication using ESP32-C3 with I2S and WiFi UDP',
                  'Low-latency audio streaming with voice activity detection',
                  'Custom embedded C++ firmware for real-time processing'
                ],
                tech: ['ESP32-C3', 'I2S Audio', 'WiFi UDP', 'Embedded C++'],
                color: 'from-orange-500 to-red-600'
              }
            ].map((project, idx) => (
              <div key={idx} className="p-6 bg-slate-900 border border-slate-700 rounded-xl hover:border-cyan-500/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className={`inline-block px-3 py-1 bg-gradient-to-r ${project.color} rounded-full text-white text-xs font-semibold mb-2`}>
                      {project.role}
                    </div>
                    <h4 className="text-2xl font-bold mb-1">{project.title}</h4>
                    <p className="text-cyan-400 text-sm mb-2">{project.description}</p>
                    <p className="text-slate-500 text-sm">{project.date}</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                      <span className="text-cyan-400 mt-1">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs text-slate-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">Experience & Leadership</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Fabrication Developer',
                org: 'Freelance Prototype Services',
                period: 'May 2022 – Present',
                points: [
                  'Design and fabricate customized hardware-software prototypes',
                  'Integrate AI tools and automation into fabrication workflow',
                  'Notable: Raspberry Pi TTS Reader, Power-Generating Tile, Guide Bot with CV'
                ]
              },
              {
                title: 'President',
                org: 'Junior Blockchain Education PH - TIP Manila',
                period: 'September 2023 – September 2024',
                points: [
                  'Led blockchain awareness and education initiatives',
                  'Organized workshops, hackathons, and mentorship programs',
                  'Collaborated with industry leaders for learning opportunities'
                ]
              },
              {
                title: 'Student Ambassador',
                org: 'The Blocklabs Inc.',
                period: 'September 2023 – December 2024',
                points: [
                  'Represented blockchain education in academic communities',
                  'Facilitated networking between students and professionals',
                  'Promoted initiatives through events and campaigns'
                ]
              },
              {
                title: 'Auditor',
                org: 'Anime and Recreation Association',
                period: 'September 2024 – May 2025',
                points: [
                  'Managed financial records and fund allocation',
                  'Assisted in organizing community engagement events'
                ]
              }
            ].map((exp, idx) => (
              <div key={idx} className="p-6 bg-slate-900 border border-slate-700 rounded-xl">
                <h4 className="text-xl font-bold mb-1">{exp.title}</h4>
                <p className="text-cyan-400 mb-2">{exp.org}</p>
                <p className="text-slate-500 text-sm mb-4">{exp.period}</p>
                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">Education & Training</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-900 border border-slate-700 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-1">Bachelor of Science in Computer Engineering</h4>
                  <p className="text-cyan-400 mb-2">Technological Institute of the Philippines (TIP) Manila</p>
                  <p className="text-slate-500 text-sm mb-3">Expected Graduation: 2026</p>
                  <p className="text-slate-400 text-sm">
                    810 Quintos St., Sampaloc, Manila
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-900 border border-slate-700 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-1">The BLOKC Solana Developer Bootcamp</h4>
                  <p className="text-purple-400 mb-2">BGC, Taguig</p>
                  <p className="text-slate-500 text-sm mb-3">September 10, 2023</p>
                  <p className="text-slate-400 text-sm">
                    Intensive training on Solana blockchain development and Web3 technologies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Let&apos;s Build Something Amazing</h3>
          <p className="text-lg text-slate-300 mb-8">
            Graduating 2026 from TIP Manila. Open to opportunities in embedded systems, blockchain development, and AI integration.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:work.mmasanjuan@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-all">
              <Mail className="w-5 h-5" />
              <span>work.mmasanjuan@gmail.com</span>
            </a>
            <a href="https://github.com/sunkissedmomento" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg transition-all">
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a href="tel:+639669105402" className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg transition-all">
              <Phone className="w-5 h-5" />
              <span>+639669105402</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-500 text-sm">
          <p>© 2026 Marc Anthony M San Juan. Built with Next.js & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}