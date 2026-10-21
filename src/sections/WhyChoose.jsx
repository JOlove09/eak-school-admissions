
import {
  GraduationCap,
  BookOpen,
  ShieldCheck,
  Trophy,
  Monitor,
  HeartHandshake
} from "lucide-react";
import "../styles/WhyChoose.css";

const features = [
  {
    icon: GraduationCap,
    title: "Experienced Faculty",
    description: "Dedicated educators who inspire curiosity and guide every student's learning journey."
  },
  {
    icon: Monitor,
    title: "Smart Classrooms",
    description: "Interactive learning spaces equipped with modern educational technology."
  },
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description: "A balanced curriculum encouraging critical thinking, creativity, and achievement."
  },
  {
    icon: Trophy,
    title: "Sports & Activities",
    description: "Opportunities in athletics, arts, music, and extracurricular activities."
  },
  {
    icon: ShieldCheck,
    title: "Safe Campus",
    description: "A secure, caring environment where students can learn with confidence."
  },
  {
    icon: HeartHandshake,
    title: "Holistic Development",
    description: "Supporting intellectual, emotional, social, and personal growth."
  }
];

function WhyChoose() {
  return (
    <section className="why-section" id="why-eak">
      <div className="section-heading">
        <span className="section-label">THE EAK ADVANTAGE</span>
        <h2>Why Choose EAK?</h2>
        <p>
          We nurture confident, compassionate, and capable
          learners prepared for tomorrow's opportunities.
        </p>
      </div>

      <div className="why-grid">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <article className="why-card" key={feature.title}>
              <div className="why-icon">
                <Icon size={28} strokeWidth={1.8} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default WhyChoose;
