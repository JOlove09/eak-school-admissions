
import {
  Award,
  Users,
  GraduationCap,
  Trophy
} from "lucide-react";
import "../styles/Highlights.css";

const highlights = [
  { icon: Award, number: "20+", label: "Years of Excellence" },
  { icon: Users, number: "100+", label: "Dedicated Faculty" },
  { icon: GraduationCap, number: "5,000+", label: "Alumni Community" },
  { icon: Trophy, number: "40+", label: "Clubs & Activities" }
];

function Highlights() {
  return (
    <section className="highlights-section" id="highlights">
      <div className="highlights-container">
        {highlights.map((item) => {
          const Icon = item.icon;

          return (
            <div className="highlight-item" key={item.label}>
              <Icon size={32} strokeWidth={1.6} />
              <h3>{item.number}</h3>
              <p>{item.label}</p>
            </div>
          );
        })}
      </div>
      <p className="highlights-note">
        Illustrative statistics for this fictional school.
      </p>
    </section>
  );
}

export default Highlights;
