export default function AfrilinkWebsite() {
  const calendlyLink = 'https://calendly.com/afrilinklegal'

  const services = [
    {
      title: 'Diaspora Legal Advisory',
      desc: 'Professional support for clients managing legal matters involving Kenya while abroad.',
      items: ['Power of Attorney Guidance', 'Remote Legal Coordination', 'Succession Support', 'Legal Documentation']
    },
    {
      title: 'Contract Review & Documentation',
      desc: 'Reviewing and assisting with contracts, agreements, and commercial documents.',
      items: ['Contract Review', 'Business Agreements', 'Commercial Documentation', 'Legal Drafting']
    },
    {
      title: 'Property Transaction Support',
      desc: 'Guidance and coordination for remote property-related legal processes.',
      items: ['Land Verification', 'Due Diligence', 'Transaction Coordination', 'Risk Assessment']
    },
    {
      title: 'Business Registration Support',
      desc: 'Helping entrepreneurs establish and structure businesses involving Kenya.',
      items: ['Business Registration', 'Startup Guidance', 'Corporate Structuring', 'Business Advisory']
    },
    {
      title: 'Due Diligence Services',
      desc: 'Verification and risk assessment support for investments and transactions.',
      items: ['Property Verification', 'Corporate Checks', 'Compliance Reviews', 'Transaction Support']
    },
    {
      title: 'Cross-Border Advisory',
      desc: 'Legal and commercial coordination for international clients and businesses.',
      items: ['Diaspora Investments', 'Cross-Border Coordination', 'Commercial Advisory', 'International Support']
    }
  ]
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-yellow-700/30 bg-gradient-to-br from-black via-zinc-900 to-black">
        <img
          src="/mnt/data/ChatGPT Image May 16, 2026, 01_00_07 AM.png"
          alt="Afrilink Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-yellow-600/40 px-4 py-2 text-sm text-yellow-400 mb-6">
              Cross-Border Legal & Commercial Solutions
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
              AFRILINK
              <span className="block text-yellow-400 text-3xl lg:text-5xl mt-2">
                Legal & Advisory
              </span>
            </h1>

            <p className="mt-8 text-lg text-zinc-300 leading-relaxed max-w-2xl">
              Supporting diaspora clients, entrepreneurs, and businesses navigating legal and commercial matters involving Kenya.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={calendlyLink}
                target="_blank"
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-2xl transition-all shadow-lg shadow-yellow-500/20 inline-block"
              >
                Book Consultation
              </a>

              <button className="border border-zinc-700 hover:border-yellow-500 text-white px-6 py-3 rounded-2xl transition-all">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-yellow-500/10 blur-3xl rounded-full"></div>

            <div className="relative bg-zinc-900 border border-yellow-600/30 rounded-[2rem] p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-sm text-zinc-400">Trusted Legal Support</p>
                  <h3 className="text-2xl font-semibold mt-1">Across Borders</h3>
                </div>

                <img
                  src="/mnt/data/ChatGPT Image May 16, 2026, 12_59_59 AM.png"
                  alt="Afrilink Logo"
                  className="h-20 w-20 rounded-2xl object-cover border border-yellow-500/30"
                />
              </div>

              <div className="space-y-5">
                <div className="bg-black/50 border border-zinc-800 rounded-2xl p-5">
                  <h4 className="font-semibold text-yellow-400 mb-2">Diaspora Legal Support</h4>
                  <p className="text-zinc-400 text-sm">
                    Legal guidance and coordination for clients handling matters remotely.
                  </p>
                </div>

                <div className="bg-black/50 border border-zinc-800 rounded-2xl p-5">
                  <h4 className="font-semibold text-yellow-400 mb-2">Commercial Advisory</h4>
                  <p className="text-zinc-400 text-sm">
                    Business documentation, contract support, and cross-border commercial assistance.
                  </p>
                </div>

                <div className="bg-black/50 border border-zinc-800 rounded-2xl p-5">
                  <h4 className="font-semibold text-yellow-400 mb-2">Property & Due Diligence</h4>
                  <p className="text-zinc-400 text-sm">
                    Helping clients verify and manage property-related legal processes with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
              Services
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Legal & Commercial Support Designed for a Global Client Base
            </h2>

            <p className="text-zinc-400 text-lg">
              Afrilink provides practical cross-border legal support for diaspora clients, entrepreneurs, and businesses operating internationally.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-black border border-zinc-800 hover:border-yellow-500/50 rounded-[2rem] p-8 transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 font-bold mb-6">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed mb-5">{service.desc}</p>

                <ul className="space-y-2 text-sm text-zinc-500">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 border-y border-zinc-800 bg-black">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
              About Afrilink
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Bridging Legal Support Between Diaspora Clients and Kenya
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Afrilink Legal & Advisory was established to provide trusted legal and commercial support for clients operating across borders.
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed">
              We understand the challenges diaspora clients face when handling legal and business matters remotely. Our focus is on professionalism, clarity, responsiveness, and reliable coordination.
            </p>
          </div>

          <div className="bg-zinc-900 border border-yellow-600/20 rounded-[2rem] p-10">
            <div className="grid grid-cols-2 gap-6">
              {[
                'Professional Guidance',
                'Cross-Border Support',
                'Commercial Advisory',
                'Client Coordination',
                'Due Diligence',
                'Legal Documentation'
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-black border border-zinc-800 rounded-2xl p-5 text-center text-zinc-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-8">
            Trusted Legal Support Across Borders
          </h2>

          <p className="text-xl max-w-3xl mx-auto mb-10 opacity-80">
            Whether you are managing business, property, or legal matters remotely, Afrilink is positioned to provide professional support and coordination.
          </p>

          <a
            href="mailto:afrilinklegal@gmail.com"
            className="bg-black text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition-all shadow-2xl inline-block"
          >
            Contact Afrilink
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
              Contact Us
            </p>

            <h2 className="text-4xl font-bold mb-6">
              Start Your Consultation
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              Reach out for professional legal and commercial support involving Kenya and cross-border matters.
            </p>

            <div className="space-y-5">
              <div className="bg-black border border-zinc-800 rounded-2xl p-5">
                <p className="text-zinc-500 text-sm mb-1">Email</p>
                <p className="text-white text-lg">afrilinklegal@gmail.com</p>
              </div>

              <div className="bg-black border border-zinc-800 rounded-2xl p-5">
                <p className="text-zinc-500 text-sm mb-1">Consultation Booking</p>
                <a href={calendlyLink} target="_blank" className="text-yellow-400 text-lg">
                  Schedule a Consultation
                </a>
              </div>
            </div>
          </div>

          <div className="bg-black border border-yellow-500/20 rounded-[2rem] p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm text-zinc-400 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-4 text-white outline-none focus:border-yellow-500"
                />
              </div>

              <div>
                <label className="block text-sm text-zinc-400 mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-4 text-white outline-none focus:border-yellow-500"
                />
              </div>

              <div>
                <label className="block text-sm text-zinc-400 mb-2">How Can We Help?</label>
                <textarea
                  rows="5"
                  placeholder="Describe your inquiry"
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-4 text-white outline-none focus:border-yellow-500"
                ></textarea>
              </div>

              <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-4 rounded-2xl transition-all">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-800 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold text-yellow-400">AFRILINK</h3>
            <p className="text-zinc-500 mt-2">
              Legal & Advisory
            </p>
          </div>

          <div className="text-zinc-500 text-sm text-center md:text-right">
            <p>Cross-Border Legal & Commercial Solutions</p>
            <p className="mt-1">Serving diaspora clients, entrepreneurs & businesses.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
