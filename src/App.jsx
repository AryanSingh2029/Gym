import { useEffect, useState } from 'react'
import './App.css'

const stats = [
  { value: '12+', label: 'Elite coaches' },
  { value: '4.9', label: 'Average member rating' },
  { value: '24/7', label: 'Access for serious training' },
]

const programs = [
  {
    title: 'Weight Training',
    text: 'Progressive strength plans, free weights, machines, and focused coaching for serious gains.',
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'CrossFit',
    text: 'High-intensity group sessions that combine strength, endurance, and athletic movement.',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Cardio',
    text: 'Structured conditioning sessions for stamina, heart health, and fat-loss focused training.',
    image:
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Personal Training',
    text: 'One-on-one guidance tailored around your body goals, routine, and recovery capacity.',
    image:
      'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80',
  },
]

const trainers = [
  {
    name: 'Arjun Mehta',
    role: 'Strength Coach',
    text: 'Specializes in muscle building, barbell technique, and progressive overload programs.',
    image:
      'https://images.unsplash.com/photo-1566753323558-f4e0952af115?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Riya Sharma',
    role: 'CrossFit Trainer',
    text: 'Leads athletic conditioning and high-energy group sessions with strong technique focus.',
    image:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Kabir Khan',
    role: 'Transformation Coach',
    text: 'Works on fat loss, accountability, and nutrition-backed training consistency.',
    image:
      'https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=1200&q=80',
  },
]

const plans = [
  {
    name: 'Monthly',
    price: '₹1,499',
    period: '/month',
    features:
      'Best for flexible members who want full gym access with no long commitment.',
    perks: ['Gym floor access', 'Cardio zone', 'Locker support'],
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Yearly',
    price: '₹14,999',
    period: '/year',
    features:
      'Best value for consistent members who want long-term progress and better savings.',
    perks: ['Full gym access', 'All classes included', '2 months savings'],
    image:
      'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'With Trainer',
    price: '₹4,999',
    period: '/month',
    features:
      'Perfect for members who want accountability, form correction, and faster results.',
    perks: ['Personal trainer', 'Custom workout plan', 'Priority slots'],
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80',
  },
]

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    alt: 'Modern gym interior with equipment',
  },
  {
    src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
    alt: 'People training in a gym',
  },
  {
    src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Well-lit gym workout area',
  },
  {
    src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80',
    alt: 'Strength training equipment in fitness center',
  },
  {
    src: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1200&q=80',
    alt: 'Athletic workout session in gym',
  },
  {
    src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Gym member using battle ropes in training area',
  },
]

const schedule = [
  [
    'Morning',
    '5:00 AM - 11:00 AM',
    'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
  ],
  [
    'Evening',
    '5:00 PM - 10:00 PM',
    'https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?auto=format&fit=crop&w=1200&q=80',
  ],
  [
    'Dance Class',
    '6:00 PM - 7:30 PM',
    'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80',
  ],
]

const contactCards = [
  {
    title: 'Address',
    value: 'Bathinda , 151001 ',
  },
  {
    title: 'Phone',
    value: '+91 98765 43210',
  },
  {
    title: 'Email',
    value: 'hello@oneononefitness.fit',
  },
]

const mapDirectionsUrl =
  'https://www.google.com/maps/dir//DLF+Avenue+Saket,+A4,+Press+Enclave+Marg,+Saket+District+Centre,+District+Centre,+Sector+6,+Pushp+Vihar,+New+Delhi,+Delhi+110017/@12.9355721,77.6421572,10z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390ce1f4d9f62005:0x3aee569514ba9326!2m2!1d77.2169405!2d28.5278341?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const finishLoading = () => {
      window.setTimeout(() => {
        setIsLoading(false)
      }, 1250)
    }

    if (document.readyState === 'complete') {
      finishLoading()
      return
    }

    window.addEventListener('load', finishLoading)
    return () => window.removeEventListener('load', finishLoading)
  }, [])

  return (
    <div className="page-shell">
      {isLoading ? (
        <div className="loader-screen" aria-live="polite" aria-label="Loading website">
          <div className="loader-card">
            <div className="loader-indicator" aria-hidden="true">
              <div className="loader-ring">
                <span className="loader-dot"></span>
              </div>
            </div>
            <p className="loader-title">Train Mode On</p>
            <div className="loader-progress" aria-hidden="true">
              <span className="loader-progress-fill"></span>
            </div>
            <div className="loader-meta">
              <span className="loader-copy">One on One Fitness</span>
              <span className="loader-percent">100%</span>
            </div>
          </div>
        </div>
      ) : null}

      <nav
        className={`topbar ${isScrolled ? 'topbar-scrolled' : ''} ${isMenuOpen ? 'topbar-menu-open' : ''}`}
      >
        <div className="brand-lockup">
          <span className="brand-mark">GF</span>
          <div className="brand-copy">
            <h1>ONE ON ONE FITNESS</h1>
          </div>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
          <a className="ghost-link" href="#gallery" onClick={() => setIsMenuOpen(false)}>
            Gym Gallery
          </a>
          <a className="ghost-link" href="#trainers" onClick={() => setIsMenuOpen(false)}>
            Trainers
          </a>
          <a className="ghost-link" href="#plans" onClick={() => setIsMenuOpen(false)}>
            Membership Plans
          </a>
          <a className="ghost-link" href="#schedule" onClick={() => setIsMenuOpen(false)}>
            Timings
          </a>
          <a className="ghost-link" href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
        </div>
      </nav>

      <header className="hero-section" id="home">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Built for discipline, not excuses</p>
            <h2>Train in a space that looks powerful and feels unstoppable.</h2>
            <p className="lead">
              A premium gym experience with sharp coaching, performance-led
              programming, and an atmosphere that pushes every rep further.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#plans">
                Join now
              </a>
              <a className="secondary-button" href="#schedule">
                View timings
              </a>
            </div>

            <div className="stat-row" aria-label="gym highlights">
              {stats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="visual-panel visual-main">
              <img
                className="visual-image"
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1400&q=80"
                alt=""
              />
              <div className="visual-copy">
                <span>Strength</span>
                <span>Focus</span>
                <span>Results</span>
              </div>
            </div>
            <div className="visual-panel visual-accent">
              <p>Performance floor</p>
              <strong>8 zones</strong>
            </div>
            <div className="visual-panel visual-badge">
              <p>Member growth</p>
              <strong>+38%</strong>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section section-dark" id="programs">
          <div className="section-heading">
            <p className="eyebrow">Programs</p>
            <h3>Every core training path your gym offers, clearly presented in one section.</h3>
          </div>

          <div className="program-grid program-grid-four">
            {programs.map((program, index) => (
              <article className="program-card" key={program.title}>
                <img
                  className="program-image"
                  src={program.image}
                  alt={program.title}
                  loading="lazy"
                />
                <p className="card-index">0{index + 1}</p>
                <h4>{program.title}</h4>
                <p>{program.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section gallery-section" id="gallery">
          <div className="section-heading">
            <p className="eyebrow">Gym gallery</p>
            <h3>A clean photo wall helps visitors feel the gym environment before they even walk in.</h3>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <article className="gallery-card" key={image.src}>
                <img src={image.src} alt={image.alt} loading="lazy" />
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section">
          <div className="story-card">
            <p className="eyebrow">Why members stay</p>
            <h3>We combine raw energy with structure, so motivation turns into momentum.</h3>
            <p>
              From first-timers to advanced lifters, every member gets an
              environment that feels elevated, clear, and performance-driven.
            </p>
          </div>

          <div className="quote-card">
            <p className="quote">
              “This is the kind of gym brand that makes people want to walk in,
              train hard, and come back the next day.”
            </p>
            <span>Single-page concept built around a premium training identity</span>
          </div>
        </section>

        <section className="section" id="trainers">
          <div className="section-heading">
            <p className="eyebrow">Trainers</p>
            <h3>Show the people behind the coaching so the brand feels trusted and personal.</h3>
          </div>

          <div className="trainer-grid">
            {trainers.map((trainer) => (
              <article className="trainer-card" key={trainer.name}>
                <img
                  className="trainer-image"
                  src={trainer.image}
                  alt={trainer.name}
                  loading="lazy"
                />
                <p className="trainer-role">{trainer.role}</p>
                <h4>{trainer.name}</h4>
                <p>{trainer.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="plans">
          <div className="section-heading">
            <p className="eyebrow">Membership plans</p>
            <h3>Simple pricing blocks help users understand the value fast and take action.</h3>
          </div>

          <div className="plan-grid">
            {plans.map((plan) => (
              <article className="plan-card" key={plan.name}>
                <img
                  className="plan-image"
                  src={plan.image}
                  alt={plan.name}
                  loading="lazy"
                />
                <p className="plan-name">{plan.name}</p>
                <div className="plan-price">
                  <strong>{plan.price}</strong>
                  <span>{plan.period}</span>
                </div>
                <p className="plan-copy">{plan.features}</p>
                <div className="plan-perks">
                  {plan.perks.map((perk) => (
                    <span className="plan-perk" key={perk}>
                      {perk}
                    </span>
                  ))}
                </div>
                <a className="secondary-button plan-button" href="#contact">
                  Choose {plan.name}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section schedule-section" id="schedule">
          <div className="section-heading">
            <p className="eyebrow">Timings</p>
            <h3>Keep the gym hours simple and clear so visitors instantly know when they can train.</h3>
          </div>

          <div className="schedule-list">
            {schedule.map(([time, label, image]) => (
              <div className="schedule-item" key={time}>
                <div className="schedule-copy">
                  <strong>{time}</strong>
                  <span>{label}</span>
                </div>
                <img className="schedule-image" src={image} alt={time} loading="lazy" />
              </div>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-intro">
            <p className="eyebrow">Contact / location</p>
            <h3>Let people discover the gym, reach out quickly, and book their next step.</h3>
            <p className="contact-copy">
              The final section combines your gym location, contact information,
              and a simple message form in one clear area.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-details">
              <div className="contact-card-grid">
                {contactCards.map((card) => (
                  <article
                    className={`contact-card contact-card-${card.title.toLowerCase()}`}
                    key={card.title}
                  >
                    <p className="contact-label">{card.title}</p>
                    <p className="contact-value">{card.value}</p>
                  </article>
                ))}
              </div>

              <a
                className="map-card"
                href={mapDirectionsUrl}
                target="_blank"
                rel="noreferrer"
              >
                <div className="map-overlay">
                  <span className="map-pill">One on One Fitness</span>
                  <span className="map-pill">Open 24/7</span>
                  <span className="map-pill map-pill-action">Get directions</span>
                </div>
                <div className="map-grid-pattern"></div>
              </a>
            </div>

            <form className="contact-form">
              <div className="form-row">
                <label className="field">
                  <span>Name</span>
                  <input type="text" placeholder="Your full name" />
                </label>

                <label className="field">
                  <span>Email</span>
                  <input type="email" placeholder="E-mail address" />
                </label>
              </div>

              <label className="field">
                <span>Phone</span>
                <input type="tel" placeholder="Phone number" />
              </label>

              <label className="field">
                <span>Message</span>
                <textarea
                  rows="7"
                  placeholder="Tell us about your goals, timing, or membership question"
                ></textarea>
              </label>

              <button className="primary-button form-submit" type="submit">
                Send us a message
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
