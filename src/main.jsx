import React from 'react'
import { createRoot } from 'react-dom/client'
import { Mail, MessageCircle, CalendarDays, ShieldCheck, BriefcaseBusiness, Globe2, FileText, Building2 } from 'lucide-react'
import './styles.css'

function AfrilinkWebsite() {
  const calendlyLink = 'https://calendly.com/afrilinklegal'
  const email = 'afrilinklegal@gmail.com'
  const whatsappNumber = '254700000000' // Replace with your real WhatsApp number, country code first, no plus sign.

  const services = [
    {
      icon: <Globe2 />,
      title: 'Diaspora Legal Advisory',
      desc: 'Professional support for clients abroad managing legal matters involving Kenya.',
      items: ['Power of Attorney guidance', 'Remote legal coordination', 'Succession support', 'Legal documentation']
    },
    {
      icon: <FileText />,
      title: 'Contract Review & Documentation',
      desc: 'Support with contracts, agreements, and commercial legal documentation.',
      items: ['Contract review', 'Business agreements', 'Commercial documentation', 'Legal drafting support']
    },
    {
      icon: <ShieldCheck />,
      title: 'Property Transaction Support',
      desc: 'Guidance and coordination for remote property-related legal processes.',
      items: ['Land verification', 'Due diligence', 'Transaction coordination', 'Risk assessment']
    },
    {
      icon: <Building2 />,
      title: 'Business Registration Support',
      desc: 'Helping entrepreneurs establish and structure businesses involving Kenya.',
      items: ['Business registration', 'Startup guidance', 'Corporate structuring', 'Business advisory']
    },
    {
      icon: <BriefcaseBusiness />,
      title: 'Due Diligence Services',
      desc: 'Verification and risk assessment support for investments and transactions.',
      items: ['Property verification', 'Corporate checks', 'Compliance reviews', 'Transaction support']
    },
    {
      icon: <Globe2 />,
      title: 'Cross-Border Advisory',
      desc: 'Legal and commercial coordination for international clients and businesses.',
      items: ['Diaspora investments', 'Cross-border coordination', 'Commercial advisory', 'International support']
    }
  ]

  return (
    <div className="site">
      <a className="whatsapp" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
        <MessageCircle size={20} />
        WhatsApp
      </a>

      <header className="hero">
        <img src="/afrilink-banner.png" alt="" className="heroBg" />
        <nav className="nav">
          <div className="brand">
            <img src="/afrilink-logo.png" alt="Afrilink Logo" />
            <div>
              <strong>AFRILINK</strong>
              <span>Legal & Advisory</span>
            </div>
          </div>
          <div className="navLinks">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="heroInner">
          <div className="heroText">
            <p className="eyebrow">Cross-Border Legal & Commercial Solutions</p>
            <h1>Trusted Legal Support Across Borders</h1>
            <p className="lead">
              Supporting diaspora clients, entrepreneurs, and businesses navigating legal and commercial matters involving Kenya.
            </p>
            <div className="actions">
              <a href={calendlyLink} target="_blank" rel="noreferrer" className="btn primary">
                <CalendarDays size={18} /> Book Consultation
              </a>
              <a href={`mailto:${email}`} className="btn secondary">
                <Mail size={18} /> Email Afrilink
              </a>
            </div>
          </div>

          <div className="heroCard">
            <img src="/afrilink-logo.png" alt="Afrilink Logo" />
            <h2>Afrilink Legal & Advisory</h2>
            <p>Connecting people. Protecting interests. Creating opportunities.</p>
          </div>
        </div>
      </header>

      <section id="services" className="section">
        <p className="eyebrow">Our Services</p>
        <h2>Legal & Commercial Support Designed for a Global Client Base</h2>
        <p className="sectionIntro">
          Practical cross-border legal support for diaspora clients, entrepreneurs, and businesses operating internationally.
        </p>

        <div className="grid">
          {services.map((service, index) => (
            <div className="serviceCard" key={index}>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <ul>
                {service.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="about">
        <div>
          <p className="eyebrow">About Afrilink</p>
          <h2>Bridging Legal Support Between Diaspora Clients and Kenya</h2>
        </div>
        <div>
          <p>
            Afrilink Legal & Advisory was established to provide trusted legal and commercial support for clients operating across borders.
          </p>
          <p>
            We understand the challenges diaspora clients face when handling legal and business matters remotely. Our focus is on professionalism, clarity, responsiveness, and reliable coordination.
          </p>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to discuss your matter?</h2>
        <p>Send an inquiry or book a consultation to get started.</p>
        <a href="#contact" className="btn dark">Contact Afrilink</a>
      </section>

      <section id="contact" className="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Start Your Consultation</h2>
          <p>
            Reach out for professional legal and commercial support involving Kenya and cross-border matters.
          </p>
          <div className="contactBoxes">
            <a href={`mailto:${email}`}><Mail size={20} /> {email}</a>
            <a href={calendlyLink} target="_blank" rel="noreferrer"><CalendarDays size={20} /> Schedule a Consultation</a>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer"><MessageCircle size={20} /> WhatsApp Afrilink</a>
          </div>
        </div>

        <form className="form" action={`https://formsubmit.co/${email}`} method="POST">
          <input type="hidden" name="_subject" value="New Afrilink Website Inquiry" />
          <input type="hidden" name="_captcha" value="false" />
          <label>Full Name<input name="name" required placeholder="Your name" /></label>
          <label>Email Address<input name="email" type="email" required placeholder="your@email.com" /></label>
          <label>How can we help?<textarea name="message" rows="6" required placeholder="Describe your inquiry"></textarea></label>
          <button type="submit">Submit Inquiry</button>
          <small>Form submissions will be sent to afrilinklegal@gmail.com through FormSubmit.</small>
        </form>
      </section>

      <footer>
        <strong>AFRILINK</strong>
        <span>Legal & Advisory</span>
        <p>Cross-Border Legal & Commercial Solutions</p>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<AfrilinkWebsite />)
