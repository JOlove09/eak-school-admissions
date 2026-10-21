
import {
  BookOpen,
  Lightbulb,
  Microscope,
  GraduationCap
} from "lucide-react";
import "../styles/Academics.css";

const programs = [
  {
    icon: BookOpen,
    level: "Primary School",
    grades: "Grades 1–5 | Ages 6–10",
    description: "Building strong foundations through joyful and engaging learning experiences.",
    features: ["Literacy & Numeracy", "Creative Learning", "Life Skills"]
  },
  {
    icon: Lightbulb,
    level: "Middle School",
    grades: "Grades 6–8 | Ages 11–13",
    description: "Encouraging independence, exploration, and analytical thinking.",
    features: ["STEM Learning", "Language Skills", "Collaborative Projects"]
  },
  {
    icon: Microscope,
    level: "Secondary School",
    grades: "Grades 9–10 | Ages 14–15",
    description: "Preparing students for academic success and responsible decision-making.",
    features: ["Subject Mastery", "Practical Learning", "Career Awareness"]
  },
  {
    icon: GraduationCap,
    level: "Senior Secondary",
    grades: "Grades 11–12 | Ages 16–17",
    description: "Supporting higher education preparation and career aspirations.",
    features: ["Specialized Streams", "Career Guidance", "Leadership Skills"]
  }
];

function Academics() {
  return (
    <section className="academics-section" id="academics">
      <div className="section-heading">
        <span className="section-label">LEARNING PATHWAYS</span>
        <h2>Our Academic Programs</h2>
        <p>
          A thoughtfully designed learning journey that grows
          with your child at every stage.
        </p>
      </div>

      <div className="academics-grid">
        {programs.map((program) => {
          const Icon = program.icon;

          return (
            <article className="academic-card" key={program.level}>
              <div className="academic-icon">
                <Icon size={30} />
              </div>

              <h3>{program.level}</h3>
              <span className="grade-label">{program.grades}</span>

              <p>{program.description}</p>

              <ul>
                {program.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Academics;
