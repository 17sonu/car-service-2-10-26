import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUp,
  Check,
  ChevronDown,
  ChevronRight,
  Clock3,
  Heart,
  Hospital,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Plane,
  ShieldCheck,
  Sparkles,
  Train,
  X,
  Zap,
} from "lucide-react";
import { businessInfo as b } from "./data/businessInfo";
import "./styles.css";

const iconMap = {
  hospital: Hospital,
  plane: Plane,
  train: Train,
  heart: Heart,
};

function ActionLink({ href, children, className = "" }) {
  return (
    <a className={`btn ${className}`} href={href}>
      {children}
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 650);
    window.addEventListener("scroll", onScroll, { passive: true });
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("is-visible"),
        ),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  const nav = ["home", "services", "car", "areas", "contact"];
  const tollText =
    b.tollIncluded === true
      ? "✓ Toll charges included"
      : b.tollIncluded === false
        ? "ℹ Toll charges are not included"
        : "Please confirm toll charges while booking.";
  const whatsappHref = b.whatsapp
    ? `https://wa.me/${b.whatsapp.replace(/\D/g, "")}`
    : "#contact";
  const locationHref = b.locationUrl || "#location";

  const go = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="site-header">
        <a href="#home" className="brand" aria-label="Car Service home">
          <span className="brand-mark">
            <CarMini />
          </span>
          <span>
            CAR SERVICE<small>FOR YOUR JOURNEY</small>
          </span>
        </a>
        <nav
          className={`desktop-nav ${menuOpen ? "open" : ""}`}
          aria-label="Main navigation"
        >
          {nav.map((id) => (
            <button key={id} onClick={() => go(id)}>
              {id === "car"
                ? "Our Car"
                : id === "areas"
                  ? "Service Area"
                  : id[0].toUpperCase() + id.slice(1)}
            </button>
          ))}
        </nav>
        <button
          className="menu-btn"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <ActionLink href={`tel:${b.phone}`} className="header-call">
          <Phone size={17} /> Call
        </ActionLink>
      </header>

      <main>
        <section id="home" className="hero section-pad">
          <div className="hero-brush brush-red" />
          <div className="hero-copy" data-reveal>
            <div className="eyebrow">
              <span className="eyebrow-dot" /> LOCAL • PICKUP • OUTSTATION
            </div>
            <h1>
              CAR SERVICE <span>FOR YOUR JOURNEY</span>
            </h1>
            <p className="hero-sub">
              Safe <b>•</b> Comfortable <b>•</b> Reliable
            </p>
            <div className="hero-meta">
              <span>
                <MapPin size={17} /> Singur & nearby areas
              </span>
              <span>
                <ShieldCheck size={17} /> Well maintained
              </span>
            </div>
            <div className="hero-actions">
              <ActionLink href="#contact" className="btn-primary">
                BOOK NOW <ChevronRight size={18} />
              </ActionLink>
              <ActionLink href={`tel:${b.phone}`} className="btn-outline">
                <Phone size={18} /> CALL NOW
              </ActionLink>
            </div>
          </div>
          <div className="hero-visual" data-reveal>
            <div className="hero-badge">
              <strong>{b.car.model}</strong>
              <span>{b.car.name}</span>
            </div>
            <div className="hero-image-wrap">
              <img
                src="/assets/car-hero.png"
                alt="White Hyundai Xcent car service"
                fetchPriority="high"
              />
            </div>
            <div className="floating-chip chip-one">
              <Zap size={15} /> AC Facility
            </div>
            <div className="floating-chip chip-two">
              <ShieldCheck size={15} /> Safe & Reliable
            </div>
          </div>
        </section>

        <section id="services" className="section section-blue section-pad">
          <div className="section-heading light" data-reveal>
            <span className="kicker">WHAT WE DO</span>
            <h2>Travel for the moments that matter.</h2>
            <p>
              Focused local transport for everyday journeys, important
              appointments and special occasions.
            </p>
          </div>
          <div className="service-grid">
            {b.services.map((s, i) => {
              const I = iconMap[s.icon];
              return (
                <article
                  className={`service-card card-${i}`}
                  key={s.title}
                  data-reveal
                >
                  <div className="service-icon">
                    <I size={26} />
                  </div>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.description}</p>
                  </div>
                  <span className="card-arrow">
                    <ChevronRight size={18} />
                  </span>
                </article>
              );
            })}
          </div>
        </section>

        <section id="car" className="section section-pad">
          <div className="split-head" data-reveal>
            <div>
              <span className="kicker">OUR CAR</span>
              <h2>White Hyundai Xcent.</h2>
            </div>
            <p>
              A clean, comfortable sedan presented with the practical details
              customers need before booking.
            </p>
          </div>
          <div className="car-layout">
            <div className="gallery" data-reveal>
              <button
                className="gallery-main"
                onClick={() => setLightbox(0)}
                aria-label="Open main car image"
              >
                <img src={b.car.images[0].src} alt={b.car.images[0].alt} />
                <span>Tap to view</span>
              </button>
              <div className="thumb-grid">
                {b.car.images.slice(1).map((im, i) => (
                  <button key={im.src} onClick={() => setLightbox(i + 1)}>
                    <img src={im.src} alt={im.alt} />
                  </button>
                ))}
              </div>
            </div>
            <div className="details-card" data-reveal>
              <div className="model-line">
                <span className="model-tag">TOP MODEL</span>
                <span className="status">
                  <span /> Available for booking
                </span>
              </div>
              <h3>{b.car.name}</h3>
              <p className="muted">
                A practical sedan for local travel, pickup & drop, family
                journeys and ceremonies.
              </p>
              <div className="feature-list">
                {b.car.features.map((f) => (
                  <span key={f}>
                    <Check size={15} />
                    {f}
                  </span>
                ))}
              </div>
              <button
                className="expand-btn"
                onClick={() => setDetailsOpen((v) => !v)}
                aria-expanded={detailsOpen}
              >
                Vehicle specifications{" "}
                <ChevronDown
                  className={detailsOpen ? "rotated" : ""}
                  size={19}
                />
              </button>
              <div className={`specs ${detailsOpen ? "expanded" : ""}`}>
                {b.car.specs.map(([k, v]) => (
                  <div key={k}>
                    <span>{k}</span>
                    <strong>{v}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section toll-section section-pad" data-reveal>
          <div className="toll-icon">
            <ShieldCheck size={32} />
          </div>
          <div>
            <span className="kicker">FARE CLARITY</span>
            <h2>Toll included or not?</h2>
            <p>{tollText}</p>
          </div>
          <a href="#contact" className="text-link">
            Confirm while booking <ChevronRight size={18} />
          </a>
        </section>

        <section
          id="areas"
          className="section section-blue area-section section-pad"
        >
          <div className="area-copy" data-reveal>
            <span className="kicker">OUR SERVICE AREA</span>
            <h2>
              Close to home.
              <br />
              <em>Ready when you are.</em>
            </h2>
            <p>
              We serve the following areas and can consider other nearby
              locations on request.
            </p>
            <div className="area-chips">
              {b.serviceAreas.map((x) => (
                <span key={x}>
                  <MapPin size={15} />
                  {x}
                </span>
              ))}
            </div>
            <p className="request-note">
              And other nearby locations on request.
            </p>
          </div>
          <div className="area-art" data-reveal>
            <div className="sun" />
            <div className="road">
              <div className="road-line" />
            </div>
            <div className="route-card">
              <MapPin size={24} />
              <div>
                <strong>Local + Outstation</strong>
                <span>Tell us your pickup and destination.</span>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="section section-pad">
          <div className="section-heading" data-reveal>
            <span className="kicker">PRICING</span>
            <h2>Simple booking, clear conversation.</h2>
            <p>
              Prices are kept configurable so customers always confirm the
              current fare before travel.
            </p>
          </div>
          <div className="pricing-grid">
            {b.pricing.map(([name, price], i) => (
              <article className="price-card" key={name} data-reveal>
                <span className="price-no">0{i + 1}</span>
                <h3>{name}</h3>
                <strong>{price}</strong>
                <a href="#contact">
                  Ask for fare <ChevronRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section
          id="location"
          className="location-band section-pad"
          data-reveal
        >
          <div>
            <span className="kicker">OUR LOCATION</span>
            <h2>Need directions?</h2>
          </div>
          <a
            href={locationHref}
            target={b.locationUrl ? "_blank" : undefined}
            rel={b.locationUrl ? "noreferrer" : undefined}
            className={`btn ${b.locationUrl ? "btn-primary" : "btn-disabled"}`}
            onClick={(e) => {
              if (!b.locationUrl) e.preventDefault();
            }}
          >
            <MapPin size={18} /> View Our Location
          </a>
        </section>

        <section id="contact" className="contact section section-pad">
          <div className="contact-card" data-reveal>
            <div className="contact-copy">
              <span className="kicker">BOOK YOUR JOURNEY</span>
              <h2>Ready when you are.</h2>
              <p>
                Call directly for availability, pickup details and current
                pricing.
              </p>
              <div className="phone-display">
                <Phone size={25} />
                <span>{b.phone}</span>
              </div>
            </div>
            <div className="contact-actions">
              <ActionLink href={`tel:${b.phone}`} className="btn-primary big">
                <Phone /> Call Now
              </ActionLink>
              <ActionLink
                href={whatsappHref}
                className={`btn-whatsapp big ${!b.whatsapp ? "btn-disabled" : ""}`}
                onClick={(e) => {
                  if (!b.whatsapp) e.preventDefault();
                }}
              >
                <MessageCircle /> WhatsApp
              </ActionLink>
              <ActionLink href="#location" className="btn-light big">
                <MapPin /> View Location
              </ActionLink>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <div>
            <div className="brand footer-brand">
              <span className="brand-mark">
                <CarMini />
              </span>
              <span>
                CAR SERVICE<small>FOR YOUR JOURNEY</small>
              </span>
            </div>
            <p>
              Local trusted car service for your everyday and important
              journeys.
            </p>
          </div>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#car">Our Car</a>
            <a href="#areas">Service Area</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} {b.businessName}. All service details are
          configurable.
        </div>
      </footer>

      <div className="mobile-bar">
        <a href={`tel:${b.phone}`}>
          <Phone /> <span>CALL</span>
        </a>
        <a
          href={whatsappHref}
          className={!b.whatsapp ? "disabled" : ""}
          onClick={(e) => {
            if (!b.whatsapp) e.preventDefault();
          }}
        >
          <MessageCircle /> <span>WHATSAPP</span>
        </a>
        <a href="#contact">
          <Zap /> <span>BOOK</span>
        </a>
      </div>
      {showTop && (
        <button
          className="top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
      {lightbox !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Car image viewer"
          onClick={() => setLightbox(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="Close image viewer"
          >
            <X />
          </button>
          <img
            src={b.car.images[lightbox].src}
            alt={b.car.images[lightbox].alt}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

function CarMini() {
  return (
    <svg viewBox="0 0 44 30" aria-hidden="true">
      <path d="M5 20h34l-4-9c-.8-2-2.3-3-4.6-3H15.5c-2.3 0-3.8 1-4.6 3z" />
      <circle cx="12" cy="22" r="3.2" />
      <circle cx="32" cy="22" r="3.2" />
    </svg>
  );
}

createRoot(document.getElementById("root")).render(<App />);
