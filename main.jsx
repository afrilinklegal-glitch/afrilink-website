import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  CalendarDays,
  Mail,
  MessageCircle,
  Globe2,
  Building2,
  FileText,
  Home,
  ShieldCheck,
  Scale,
  BriefcaseBusiness,
  Landmark,
  ArrowRight,
  BookOpen,
  CheckCircle2
} from 'lucide-react'
import './styles.css'
import logoUrl from './afrilink-logo.png'
import bannerUrl from './afrilink-banner.png'
import founderImage from './founder.jpg'
function AfrilinkWebsite() {
  const calendlyLink = 'https://calendly.com/afrilinklegal/30min'
  const email = 'afrilinklegal@gmail.com'
  const whatsappNumber = '254704414422'

  const practiceAreas = [
    {
      icon: <BriefcaseBusiness />,
      title: 'Commercial & Business Law',
      intro: 'Commercial law governs the legal relationships, rights, duties, and risks that arise in business, trade, investment, contracts, and commercial transactions. Afrilink supports businesses, entrepreneurs, investors, and commercial partners in structuring, reviewing, negotiating, and managing business relationships with legal clarity.',
      services: ['Commercial contracts', 'Mergers & acquisitions', 'Joint ventures', 'Franchise & distribution agreements', 'Agency agreements', 'Sale of business agreements', 'Investor agreements', 'Commercial due diligence', 'SME legal advisory', 'Regulatory & compliance support'],
      framework: 'Relevant Kenyan legal frameworks may include the Companies Act, Competition Act, Capital Markets Act, contract law principles, sector-specific regulations, and applicable commercial legislation depending on the transaction.'
    },
    {
      icon: <Building2 />,
      title: 'Corporate Law & Governance',
      intro: 'Corporate law focuses on companies as legal entities, including how they are formed, governed, managed, restructured, and dissolved. This practice area supports directors, shareholders, founders, and investors in maintaining legally sound and well-organised corporate structures.',
      services: ['Company registration support', 'Corporate structuring', 'Shareholder agreements', 'Board resolutions', 'Share transfers', 'Beneficial ownership support', 'Company records & filings', 'Corporate restructuring', 'Governance advisory', 'Director and shareholder support'],
      framework: 'Key Kenyan frameworks may include the Companies Act, Business Registration Service requirements, beneficial ownership regulations, tax-related compliance obligations, and sector-specific licensing requirements.'
    },
    {
      icon: <Home />,
      title: 'Conveyancing & Real Estate',
      intro: 'Conveyancing involves the legal processes around the ownership, transfer, leasing, financing, and verification of land and property. Afrilink supports clients seeking clarity, structure, and due diligence in property-related transactions, including local and remote clients.',
      services: ['Land transactions', 'Sale agreements', 'Property due diligence', 'Title verification support', 'Transfer process coordination', 'Lease agreements', 'Real estate advisory', 'Remote transaction coordination', 'Property investment support', 'Transaction risk assessment'],
      framework: 'Relevant Kenyan frameworks may include the Land Act, Land Registration Act, National Land Commission Act, Sectional Properties Act, stamp duty requirements, planning laws, and applicable county regulations.'
    },
    {
      icon: <FileText />,
      title: 'Legal Documentation & Advisory',
      intro: 'Legal documentation is often the foundation of clear rights, obligations, and enforceable relationships. This section supports clients who need well-drafted, reviewed, or professionally structured legal documents for personal, business, or commercial use.',
      services: ['Demand letters', 'Legal opinions', 'Contract drafting', 'Contract review', 'Legal notices', 'NDAs', 'Employment agreements', 'Service agreements', 'Affidavit support', 'Legal correspondence'],
      framework: 'The applicable framework depends on the document and subject matter, including contract law principles, employment law, company law, land law, civil procedure, and relevant statutory requirements.'
    },
    {
      icon: <Globe2 />,
      title: 'Diaspora Legal Services',
      intro: 'Diaspora legal services support clients outside Kenya who need reliable legal coordination, documentation, and advisory support for matters involving Kenya. This practice area recognises the challenges of distance, trust, communication, and remote transaction management.',
      services: ['Remote legal coordination', 'Power of Attorney support', 'Property transaction coordination', 'Succession coordination', 'Investment support', 'Family legal coordination', 'Document review', 'Verification support', 'Local professional coordination', 'Diaspora business support'],
      framework: 'Diaspora matters may involve multiple areas of Kenyan law, including land law, succession law, company law, contract law, family law, immigration-related documentation, and notarisation or attestation requirements.'
    },
    {
      icon: <ShieldCheck />,
      title: 'Due Diligence, Compliance & Risk Advisory',
      intro: 'Due diligence helps clients identify legal, commercial, ownership, regulatory, and transactional risks before committing resources. Afrilink assists clients in approaching transactions with informed caution and structured verification.',
      services: ['Property due diligence', 'Business verification', 'Corporate checks', 'Compliance reviews', 'Transaction verification', 'Risk assessment', 'Investment due diligence', 'Preliminary investigations', 'Document verification', 'Regulatory checks'],
      framework: 'Relevant frameworks may include company law, land law, tax and regulatory compliance obligations, anti-money laundering considerations, sector-specific licensing, and transaction-specific legal requirements.'
    },
    {
      icon: <Scale />,
      title: 'Dispute Resolution & Pre-Litigation Support',
      intro: 'Not every dispute needs to begin in court. Pre-litigation support focuses on early assessment, legal positioning, correspondence, negotiation, and settlement strategy before formal proceedings become necessary.',
      services: ['Demand letters', 'Pre-litigation advisory', 'Debt recovery support', 'Commercial dispute support', 'Settlement negotiations', 'Mediation coordination', 'Legal notices', 'Dispute risk assessment', 'Case strategy support', 'ADR coordination'],
      framework: 'Depending on the matter, relevant frameworks may include civil procedure rules, contract law, employment law, company law, alternative dispute resolution principles, and sector-specific dispute mechanisms.'
    }
  ]

  const whyChooseUs = [
    ['Kenyan Legal Insight', 'Afrilink is grounded in Kenyan legal knowledge and understands the practical realities of local legal, commercial, property, and regulatory processes.'],
    ['International Commercial Perspective', 'Led by an Advocate of the High Court of Kenya with an LLM in International Corporate and Commercial Law from the United Kingdom, Afrilink brings a cross-border and commercially aware perspective to client matters.'],
    ['Clear Communication', 'We prioritise clarity, structured updates, and responsive communication so clients understand progress, risks, and next steps.'],
    ['Practical Coordination', 'Afrilink supports clients who need organised legal and commercial coordination, especially where matters involve distance, multiple parties, or cross-border transactions.'],
    ['Modern Legal Support', 'The firm is designed for clients who expect accessible, professional, technology-enabled, and internationally oriented legal consulting.'],
    ['Commercial Awareness', 'We approach legal issues with an understanding of business realities, transaction risk, investment decisions, and practical outcomes.']
  ]

  const insights = [
    ['Commercial Law', 'Understanding Mergers & Acquisitions in Kenya', 'A practical overview of how M&A transactions are structured, the legal issues businesses should consider, and the regulatory frameworks that may apply.'],
    ['Conveyancing', 'What to Verify Before Buying Land in Kenya', 'Key due diligence steps for property buyers, investors, and diaspora clients before committing funds to a land transaction.'],
    ['Diaspora Services', 'Using a Power of Attorney for Kenyan Matters While Abroad', 'A guide to how Power of Attorney arrangements can support remote legal coordination and what clients should consider before granting authority.']
  ]

  return (
    <div className="site">
      <a className="whatsapp" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer"><MessageCircle size={20} />WhatsApp</a>

      <header className="hero">
        <img src={bannerUrl} alt="" className="heroBg" />
        <div className="heroOverlay" />
        <nav className="nav">
          <a href="#top" className="brand"><img src={logoUrl} alt="Afrilink Legal Consultants Logo" /><div><strong>AFRILINK</strong><span>Legal Consultants</span></div></a>
          <div className="navLinks"><a href="#about">About</a><a href="#practice">Practice Areas</a><a href="#why">Why Choose Us</a><a href="#insights">Insights</a><a href="#contact">Contact</a></div>
        </nav>

        <section id="top" className="heroInner">
          <div className="heroText">
            <p className="pill">Kenya-rooted • Internationally focused • Commercially aware</p>
            <h1>Modern Legal & Commercial Solutions Across Borders</h1>
            <p className="lead">Afrilink Legal Consultants provides professional legal, commercial, and advisory solutions for individuals, businesses, investors, and diaspora clients navigating matters involving Kenya and cross-border operations.</p>
            <div className="actions"><a href={calendlyLink} target="_blank" rel="noreferrer" className="btn primary"><CalendarDays size={18} /> Book Consultation</a><a href="#practice" className="btn secondary">Explore Practice Areas <ArrowRight size={18} /></a></div>
          </div>
          <div className="heroCard"><Landmark size={56} /><h2>A Boutique International Legal Consultancy</h2><p>Built at the intersection of Kenyan legal expertise, international business realities, diaspora needs, and modern commercial advisory.</p><div className="miniCards"><div>Commercial & transactional support</div><div>Conveyancing and property coordination</div><div>Diaspora and cross-border legal services</div></div></div>
        </section>
      </header>

      <section id="about" className="approach">
        <div><p className="eyebrow">About Us</p><h2>A modern legal consultancy with local insight and international perspective</h2></div>
        <div><p>Afrilink Legal Consultants is a modern legal and commercial consultancy focused on supporting individuals, businesses, investors, and diaspora clients navigating matters involving Kenya and cross-border transactions.</p><p>Led by an Advocate of the High Court of Kenya with an LLM in International Corporate and Commercial Law from the United Kingdom, Afrilink combines Kenyan legal insight with an international commercial perspective.</p><p>The firm was established in recognition of the growing need for accessible, commercially aware, and cross-border legal support in an increasingly interconnected world.</p><p>Today, many clients operate across jurisdictions — managing investments, property transactions, commercial relationships, corporate operations, and legal documentation remotely. Afrilink helps bridge the gap between local legal processes and global client realities.</p></div>
      </section>

      <section id="practice" className="section">
        <div className="sectionHead"><p className="eyebrow">Practice Areas</p><h2>Structured legal support for local and international clients</h2><p>Our work is organised into clear service categories so clients can identify the support they need quickly while still understanding the legal and commercial context behind each area.</p></div>
        <div className="practiceList">{practiceAreas.map((area, index) => (<article key={area.title} className="practiceCard"><div className="practiceIntro"><div className="icon">{area.icon}</div><p className="number">0{index + 1}</p><h3>{area.title}</h3><p>{area.intro}</p></div><div className="practiceDetails"><h4>Services under this area</h4><div className="serviceGrid">{area.services.map((service) => <div key={service} className="serviceItem">{service}</div>)}</div><div className="framework"><h5>Legal framework and regulatory context</h5><p>{area.framework}</p></div></div></article>))}</div>
      </section>

      <section id="approach" className="approach"><div><p className="eyebrow">Our Approach</p><h2>Legal insight with commercial awareness</h2></div><div><p>Afrilink Legal Consultants is designed for clients who need more than generic legal information. Our approach combines legal analysis, practical coordination, commercial understanding, and clear communication.</p><p>Whether the matter is local, diaspora-related, commercial, property-based, or cross-border, the goal is to help clients make informed decisions, manage risk, and move forward with confidence.</p></div></section>

      <section id="why" className="section">
        <div className="sectionHead"><p className="eyebrow">Why Choose Us</p><h2>Professional support built around clarity, coordination, and confidence</h2><p>Afrilink Legal Consultants is designed for clients who need practical legal support, commercially aware guidance, and reliable coordination across local and international matters.</p></div>
        <div className="serviceGrid" style={{ marginTop: '42px' }}>{whyChooseUs.map(([title, text]) => (<div key={title} className="serviceItem" style={{ padding: '24px' }}><CheckCircle2 size={26} style={{ color: '#d4af37', marginBottom: '14px' }} /><h3 style={{ color: '#ffffff', marginTop: 0 }}>{title}</h3><p style={{ color: '#bfbfbf', lineHeight: 1.7 }}>{text}</p></div>))}</div>
      </section>

      <section className="cta"><h2>Need legal or commercial support?</h2><p>Book a consultation to discuss the nature of your matter and the type of support required.</p><a href={calendlyLink} target="_blank" rel="noreferrer" className="btn dark"><CalendarDays size={18} /> Book Consultation</a></section>

      <section id="insights" className="section">
        <div className="sectionHead"><p className="eyebrow">Insights & Articles</p><h2>Legal and commercial insights for a cross-border world</h2><p>Afrilink Insights will feature practical commentary on Kenyan law, commercial transactions, property matters, diaspora legal issues, and cross-border business developments.</p></div>
        <div className="practiceList" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', display: 'grid' }}>{insights.map(([category, title, summary]) => (<article key={title} className="practiceIntro" style={{ borderRight: 0, borderRadius: '28px', border: '1px solid #252525' }}><BookOpen size={32} style={{ color: '#d4af37' }} /><p className="number">{category}</p><h3>{title}</h3><p>{summary}</p><div className="framework"><h5>Coming Soon</h5><p>This article section can later link to full articles, legal updates, client guides, and downloadable resources.</p></div></article>))}</div>
      </section>

      <section id="contact" className="contact"><div><p className="eyebrow">Contact</p><h2>Start the conversation</h2><p>Contact Afrilink Legal Consultants for professional legal and commercial support involving Kenya, local transactions, diaspora matters, or cross-border operations.</p><div className="contactBoxes"><a href={`mailto:${email}`}><Mail size={20} /> {email}</a><a href={calendlyLink} target="_blank" rel="noreferrer"><CalendarDays size={20} /> Book a consultation</a><a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer"><MessageCircle size={20} /> WhatsApp Afrilink</a></div></div><form className="form" action={`https://formsubmit.co/${email}`} method="POST"><input type="hidden" name="_subject" value="New Afrilink Website Inquiry" /><input type="hidden" name="_captcha" value="false" /><label>Full Name<input name="name" required placeholder="Your name" /></label><label>Email Address<input name="email" type="email" required placeholder="your@email.com" /></label><label>Service Area<select name="service_area" required>{practiceAreas.map((area) => <option key={area.title}>{area.title}</option>)}</select></label><label>Message<textarea name="message" rows="6" required placeholder="Tell us about your inquiry"></textarea></label><button type="submit">Submit Inquiry</button><small>Form submissions will be sent to afrilinklegal@gmail.com through FormSubmit.</small></form></section>

      <footer><strong>AFRILINK</strong><span>Legal Consultants</span><p>Modern legal and commercial solutions across borders.</p></footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<AfrilinkWebsite />)
