
import { Quote, Star } from "lucide-react";
import "../styles/Testimonials.css";

const testimonials = [
  {
    name: "Priya Sharma",
    relation: "Parent of Grade 4 Student",
    quote:
      "The teachers encourage curiosity and confidence. Our child genuinely looks forward to learning every day.",
    initials: "PS",
  },
  {
    name: "Rahul Mehta",
    relation: "Parent of Grade 8 Student",
    quote:
      "The balance between academics, sports, and creative activities makes the learning experience truly meaningful.",
    initials: "RM",
  },
  {
    name: "Ananya Rao",
    relation: "Parent of Grade 11 Student",
    quote:
      "The school's supportive environment and focus on individual growth have made a wonderful difference.",
    initials: "AR",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="section-heading">
        <span className="section-label">PARENT PERSPECTIVES</span>
        <h2>What Parents Say</h2>
        <p>
          Every child's journey is unique.
          Here's how families describe their experience.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <article className="testimonial-card" key={item.name}>
            <Quote className="quote-icon" size={30} />

            <div className="testimonial-stars" aria-label="Five stars">
              {Array.from({ length: 5 }, (_, index) => (
                <Star key={index} size={17} fill="currentColor" />
              ))}
            </div>

            <p className="testimonial-quote">"{item.quote}"</p>

            <div className="testimonial-author">
              <div className="testimonial-avatar">
                {item.initials}
              </div>
              <div>
                <h3>{item.name}</h3>
                <span>{item.relation}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="testimonial-disclaimer">
        Sample testimonials created for this fictional school.
      </p>
    </section>
  );
}

export default Testimonials;
