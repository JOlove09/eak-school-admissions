
import { CalendarDays } from "lucide-react";
import "../styles/ImportantDates.css";

const dates = [
  { day: "01", month: "NOV", year: "2026", title: "Applications Open" },
  { day: "31", month: "JAN", year: "2027", title: "Application Deadline" },
  { day: "15", month: "FEB", year: "2027", title: "Admission Assessment" },
  { day: "01", month: "MAR", year: "2027", title: "Results Announcement" },
  { day: "31", month: "MAR", year: "2027", title: "Enrollment Deadline" }
];

function ImportantDates() {
  return (
    <section className="dates-section" id="important-dates">
      <div className="section-heading">
        <span className="section-label">MARK YOUR CALENDAR</span>
        <h2>Important Admission Dates</h2>
        <p>
          Plan ahead with these key milestones for the
          2027–28 academic session.
        </p>
      </div>

      <div className="dates-grid">
        {dates.map((item) => (
          <article className="date-card" key={item.title}>
            <div className="date-icon">
              <CalendarDays size={24} />
            </div>

            <div className="date-display">
              <strong>{item.day}</strong>
              <span>{item.month} {item.year}</span>
            </div>

            <h3>{item.title}</h3>
          </article>
        ))}
      </div>

      <p className="dates-note">
        * Dates are illustrative and provided for this demo website.
      </p>
    </section>
  );
}

export default ImportantDates;
