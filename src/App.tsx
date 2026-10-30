import React, { useState } from 'react';
import companyLogo from './assets/company-logo.jpeg';
import './App.css';

interface TeamMember {
  name: string;
  role: string;
}

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const teamMembers: TeamMember[] = [
    { name: 'Enoch Justice Hodzi', role: 'Chief Executive Officer (CEO)' },
    { name: 'Mr King Makoni', role: 'Managing Director' },
    { name: 'Mrs Letwin Makoni', role: 'Human Resources Manager' },
    { name: 'Declorencia Nyarai Shiri', role: 'Sales and Marketing Manager' },
    { name: 'Blessing Ketty Chikwira', role: 'Operations Manager' },
    { name: 'Mr Rapukeni Asani', role: 'Logistics Driver' },
  ];

  return (
    <div className="portfolio-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-brand">
          <img className="brand-logo" src={companyLogo} alt="Upgrade Transformation logo" />
          <div>
            <h2>UPGRADE TRANSFORMATION</h2>
            <p>Pvt Ltd • Fruit & Veg</p>
          </div>
        </div>
        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#welcome" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</a>
          <a href="#products" onClick={() => setMobileMenuOpen(false)}>Products</a>
          <a href="#compliance" onClick={() => setMobileMenuOpen(false)}>Compliance</a>
          <a href="#team" onClick={() => setMobileMenuOpen(false)}>Our Team</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="nav-cta">Contact Us</a>
        </div>
        <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Hero / Welcome Section */}
      <header id="welcome" className="hero-section">
        <div className="hero-content">
          <span className="hero-tag">🌱 Premium Global Exports</span>
          <h1>Freshness That Transcends Borders</h1>
          <p>
            Welcome to Upgrade Transformation Pvt Ltd. We specialize in exporting premium, farm-fresh fruits and vegetables, rooted in Zimbabwe's fertile soil and agricultural heritage.
          </p>
          <div className="hero-buttons">
            <a href="#products" className="btn btn-primary">Explore Products</a>
            <a href="#contact" className="btn btn-secondary">Get in Touch</a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <div className="section-header">
            <h2>About The Company</h2>
            <div className="underline"></div>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p>
                <strong>UPGRADE</strong> is a distinguished Zimbabwean company specializing in premium fruit and vegetable products. Rooted in Zimbabwe's fertile soil and agricultural heritage, we have become a reliable source of global excellence.
              </p>
              <p>
                Sustainability is ingrained in our core, reflecting our responsibility to the environment. As our products travel globally, our Zimbabwean roots remain, allowing us to showcase our homeland's bounty with unwavering commitment to quality and customer satisfaction.
              </p>
            </div>
            <div className="vision-mission-cards">
              <div className="card">
                <h3>🌍 Our Vision</h3>
                <p>To be a leading global supplier of premium fresh fruits and vegetables, renowned for exceptional quality, diverse offerings, and ethical, sustainable practices.</p>
              </div>
              <div className="card">
                <h3>🚀 Our Mission</h3>
                <p>To deliver top-tier quality, innovative solutions, and unmatched service while building transparent, trusting relationships that provide real value.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products & What We Do */}
      <section id="products" className="section products-section">
        <div className="container">
          <div className="section-header">
            <h2>What We Do & Our Products</h2>
            <div className="underline"></div>
            <p>Handpicked for peak ripeness, exceptional flavor, and superior nutrition.</p>
          </div>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-icon">🥦</div>
              <h3>Fresh Vegetables</h3>
              <p>Our expertise extends to exporting a diverse range of crisp, colorful, and nutritious fresh vegetables sourced directly from premier farms.</p>
              <ul className="tag-list">
                <li>Onions</li>
                <li>Potatoes</li>
                <li>Cabbages</li>
              </ul>
            </div>
            <div className="product-card">
              <div className="product-icon">🍓</div>
              <h3>Fresh Fruits</h3>
              <p>We specialize in sourcing and exporting the finest fresh fruits globally, ensuring peak ripeness and vibrant taste in every bite.</p>
              <ul className="tag-list">
                <li>Oranges</li>
                <li>Strawberries</li>
                <li>Bananas</li>
                <li>Mangos</li>
                <li>Grapes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Regulatory Section */}
      <section id="compliance" className="section compliance-section">
        <div className="container">
          <div className="section-header">
            <h2>Certifications & Compliance</h2>
            <div className="underline"></div>
            <p>Fully licensed and certified for transparent, efficient trade.</p>
          </div>
          <div className="compliance-grid">
            <div className="compliance-card">
              <div className="badge-header">PRAZ Certified</div>
              <h3>Procurement Regulatory Authority of Zimbabwe</h3>
              <p><strong>Registration No:</strong> PR2642967339</p>
              <p><strong>Category:</strong> Small/Medium Enterprise (SME) - Vegetables and Fruits (Fresh Farm produce) [GV002]</p>
              <p className="validity">Valid: 17 Feb 2026 – 31 Dec 2026</p>
              <small>Verification Code: PRAZ-2026-400-HHJ-42967</small>
            </div>
            <div className="compliance-card">
              <div className="badge-header zimra">ZIMRA Compliant</div>
              <h3>Zimbabwe Revenue Authority</h3>
              <p><strong>Tax Clearance Certificate (ITF263)</strong></p>
              <p><strong>TIN:</strong> 2001926828</p>
              <p><strong>Tax Position:</strong> Satisfactory (No tax should be withheld)</p>
              <p className="validity">Valid: 02 Feb 2026 – 02 Aug 2026</p>
              <small>Authentication Code: 49113396</small>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section team-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Leadership & Team</h2>
            <div className="underline"></div>
            <p>Driven by experience, passion, and dedication to excellence.</p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="avatar-placeholder">{member.name.charAt(0)}</div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="section-header">
            <h2>Company Contact</h2>
            <div className="underline"></div>
            <p>Get in touch with us for partnerships, orders, and inquiries.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <span className="icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>32 Lanark Road, Avondale, Zimbabwe</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">📧</span>
                <div>
                  <h4>Email Address</h4>
                  <p><a className="contact-link" href="mailto:upgrardesales70@gmail.com">upgrardesales70@gmail.com</a></p>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">📞</span>
                <div>
                  <h4>Phone Numbers</h4>
                  <p><a className="contact-link" href="https://wa.me/263784534730" target="_blank" rel="noreferrer">+263 78 453 4730</a></p>
                  <p><a className="contact-link" href="https://wa.me/263715410583" target="_blank" rel="noreferrer">+263 71 541 0583</a></p>
                  <p><a className="contact-link" href="https://wa.me/263774289039" target="_blank" rel="noreferrer">+263 77 428 9039</a></p>
                </div>
              </div>
            </div>
            <div className="contact-form-box">
              <h3>Send Us a Message</h3>
              <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const subject = `Website inquiry from ${formData.get('name')}`;
                const body = [
                  `Name: ${formData.get('name')}`,
                  `Email: ${formData.get('email')}`,
                  '',
                  formData.get('message'),
                ].join('\n');
                window.location.href = `mailto:upgrardesales70@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
              }}>
                <div className="form-group">
                  <input type="text" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <textarea rows={4} name="message" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-full">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Upgrade Transformation Pvt Ltd (Fruit & Veg). All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
