/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// TODO: Replace with your actual WhatsApp number (including country code, no '+')
const WHATSAPP_NUMBER = '917083588364';

const services = [
  {
    icon: '💻',
    title: 'Desktop PC Repair',
    description: 'Hardware diagnostics, component replacement, and performance tuning.',
  },
  {
    icon: '🖥️',
    title: 'Laptop Troubleshooting',
    description: 'Fixing all brands of laptops for issues like screen, battery, or keyboard problems.',
  },
  {
    icon: '📶',
    title: 'WiFi & Network Setup',
    description: 'Resolving connectivity issues, setting up new networks, and boosting your signal.',
  },
  {
    icon: '🛡️',
    title: 'Virus & Malware Removal',
    description: 'Complete removal of viruses, spyware, and malware to secure your system.',
  },
  {
    icon: '⚙️',
    title: 'Hardware Upgrades',
    description: 'Boost your PC’s speed with RAM, SSD, and graphics card upgrades.',
  },
  {
    icon: '✨',
    title: 'General Maintenance',
    description: 'System clean-up and optimization to keep your computer running smoothly.',
  },
];

const testimonials = [
  {
    quote: "My gaming PC wasn't performing well. The technician diagnosed the issue quickly and suggested a cost-effective upgrade. Now it runs like a dream! Highly recommended.",
    name: 'Sameer P.',
    location: 'Koregaon Park, Pune',
    rating: 5,
  },
  {
    quote: "The WiFi in our home office was constantly dropping. The team came over, fixed the configuration, and now the connection is rock-solid. Very professional and knowledgeable.",
    name: 'Anjali D.',
    location: 'Viman Nagar, Pune',
    rating: 5,
  },
  {
    quote: "My old laptop was incredibly slow. They cleaned it up, upgraded the RAM and installed an SSD, and now it's faster than ever. Saved me a ton of money!",
    name: 'Rohan K.',
    location: 'Hinjewadi, Pune',
    rating: 5,
  },
];

function App() {
  const [formSubmitted, setFormSubmitted] = React.useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const message = `
*New Service Request*

*Name:* ${data.name}
*Contact Number:* ${data.phone}
*Location:* ${data.location}
*Problem Type:* ${data.problem}
*Description:* ${data.description}
    `.trim();

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setFormSubmitted(true);
  };


  return (
    <>
      <header>
        <div className="container">
          <h1>Expert PC, Laptop & WiFi Repair</h1>
          <p>Your fast and reliable tech experts, right at your doorstep in Pune.</p>
        </div>
      </header>

      <main>
        <section id="services" className="section">
          <div className="container">
            <h2>Our Services</h2>
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-card" role="article">
                  <div className="icon" aria-hidden="true">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="section testimonials-section">
          <div className="container">
            <h2>What Our Customers in Pune Say</h2>
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card" role="figure">
                  <p className="quote">"{testimonial.quote}"</p>
                  <div className="rating">{'⭐'.repeat(testimonial.rating)}</div>
                  <figcaption>
                    <strong>{testimonial.name}</strong>
                    <cite>{testimonial.location}</cite>
                  </figcaption>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="booking" className="section booking-section">
          <div className="container">
            <h2>Book Your Repair Service</h2>
            {!formSubmitted ? (
              <>
                <p style={{marginBottom: '30px'}}>Fill out the form below. Clicking 'Request Service' will open WhatsApp with your details ready to send.</p>
                <div className="form-container">
                  <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input type="text" id="name" name="name" className="form-control" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Contact Number</label>
                      <input type="tel" id="phone" name="phone" className="form-control" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="location">Your Location (Pune Area)</label>
                      <input type="text" id="location" name="location" className="form-control" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="problem">Problem Type</label>
                      <select id="problem" name="problem" className="form-control" required>
                        <option value="">-- Select an issue --</option>
                        <option value="PC won't turn on">PC won't turn on</option>
                        <option value="Slow Performance">Slow Performance</option>
                        <option value="Virus or Malware">Virus or Malware</option>
                        <option value="WiFi/Network Issues">WiFi/Network Issues</option>
                        <option value="Hardware Upgrade">Hardware Upgrade</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="description">Describe Your Problem</label>
                      <textarea id="description" name="description" rows={4} className="form-control" placeholder="Please provide details about the issue..."></textarea>
                    </div>
                    <button type="submit" className="btn-submit">Request Service</button>
                  </form>
                </div>
              </>
            ) : (
              <div className="thank-you-container">
                <div className="thank-you-icon" aria-hidden="true">✔</div>
                <h3>Thank You!</h3>
                <p>Your service request is ready.</p>
                <p>Please click 'Send' in the newly opened WhatsApp tab to confirm your booking.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
           <p>Contact us: <a href="mailto:pranavkhandagale47@gmail.com">pranavkhandagale47@gmail.com</a></p>
          <p>&copy; {new Date().getFullYear()} PC & Laptop Repair Services. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);