
import { ArrowRight, CalendarDays } from "lucide-react";
import "../styles/Hero.css";

function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-badge">
          Admissions Open • 2027–28
        </div>

        <h1>
          Inspiring Minds.
          <br />
          <span>Shaping Futures.</span>
        </h1>

        <p>
          Discover a world of academic excellence, creativity,
          and limitless opportunities at EAK International School.
          Every child deserves a place to thrive.
        </p>

        <div className="hero-actions">
          <button
            className="hero-primary"
            onClick={() => scrollTo("enquiry")}
          >
            Apply Now <ArrowRight size={18} />
          </button>

          <button
            className="hero-secondary"
            onClick={() => scrollTo("visit")}
          >
            <CalendarDays size={18} /> Schedule a Visit
          </button>
        </div>

        <div className="hero-note">
          Enrolling for Academic Session 2027–2028
        </div>
      </div>

      <div className="hero-image">
        <img
          src="/images/school-hero.jpeg"
          alt="Students learning together at school"
        />
      </div>
    </section>
  );
}

export default Hero;
