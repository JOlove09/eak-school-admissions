
import {
  MessageSquare,
  FileText,
  ClipboardCheck,
  CheckCircle,
  GraduationCap
} from "lucide-react";

import "../styles/AdmissionProcess.css";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Enquiry",
    description: "Contact our admissions team to learn about programs and availability."
  },
  {
    number: "02",
    icon: FileText,
    title: "Application",
    description: "Complete the application form and provide the required documents."
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Assessment",
    description: "Attend the age-appropriate assessment or student interaction."
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Selection",
    description: "Receive the admission decision and enrollment instructions."
  },
  {
    number: "05",
    icon: GraduationCap,
    title: "Enrollment",
    description: "Confirm admission by completing the enrollment formalities."
  }
];

function AdmissionProcess() {
  return (
    <section className="admission-section" id="admissions">
      <div className="section-heading">
        <span className="section-label">YOUR JOURNEY BEGINS HERE</span>
        <h2>Our Admission Process</h2>
        <p>
          Five simple steps to begin your child's educational
          journey with EAK International School.
        </p>
      </div>

      <div className="admission-grid">
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <article className="admission-card" key={step.number}>
              <span className="step-number">{step.number}</span>

              <div className="admission-icon">
                <Icon size={27} />
              </div>

              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default AdmissionProcess;
