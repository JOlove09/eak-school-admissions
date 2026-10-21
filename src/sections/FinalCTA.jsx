
import {
  ArrowRight,
  CalendarDays,
  PhoneCall
} from "lucide-react";
import "../styles/FinalCTA.css";

function FinalCTA() {
  return (
    <section className="final-cta" id="final-cta">
      <div className="final-cta-content">
        <span className="cta-label">
          YOUR CHILD'S JOURNEY STARTS HERE
        </span>

        <h2>Give Your Child a <br />
          <span>Future-Ready Education.</span>
        </h2>

        <p>
          Join a community where every student is inspired
          to discover, grow, and achieve their potential.
          Begin your admission journey today.
        </p>

        <div className="final-cta-buttons">
          <a href="#enquiry" className="cta-primary">
            Apply Now <ArrowRight size={18} />
          </a>

          <a href="#visit" className="cta-outline">
            <CalendarDays size={18} />
            Book a Campus Visit
          </a>

          <a href="#enquiry" className="cta-outline">
            <PhoneCall size={18} />
            Talk to Admissions
          </a>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
