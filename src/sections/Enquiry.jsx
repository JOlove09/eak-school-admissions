
import { useState } from "react";
import {
  Send,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";
import "../styles/Enquiry.css";

// Initial form values
const emptyForm = {
  parentName: "",
  email: "",
  phone: "",
  studentName: "",
  grade: "",
  message: "",
  visitDate: "",
};

function AdmissionForm({ type = "enquiry" }) {
  const isVisit = type === "visit";

  // Get today's date in local YYYY-MM-DD format
  const today = new Date();

  const localToday = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  // React state
  const [form, setForm] = useState({ ...emptyForm });
  const [submitted, setSubmitted] = useState(false);

  // Handle changes in all fields
  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Extra validation for names
    if (
      !form.parentName.trim() ||
      !form.studentName.trim()
    ) {
      return;
    }

    // Prevent a past date from being submitted
    if (isVisit && form.visitDate < localToday) {
      return;
    }

    // Frontend-only submission
    // No information is sent or stored
    setSubmitted(true);

    // Clear form fields
    setForm({ ...emptyForm });
  };

  return (
    <section
      className="enquiry-section"
      id={isVisit ? "visit" : "enquiry"}
    >
      <div className="enquiry-layout">

        {/* Left Side - Introduction */}
        <div className="enquiry-intro">

          <span className="section-label">
            {isVisit
              ? "EXPLORE OUR CAMPUS"
              : "BEGIN YOUR JOURNEY"}
          </span>

          <h2>
            {isVisit
              ? "Schedule a Campus Visit"
              : "Admission Enquiry"}
          </h2>

          <p>
            {isVisit
              ? "Experience our learning environment firsthand. Select your preferred visit date."
              : "Have questions about admissions? Complete the form to explore the next steps."}
          </p>

          <div className="enquiry-feature">

            {isVisit ? (
              <CalendarDays size={32} />
            ) : (
              <Send size={32} />
            )}

            <div>
              <strong>
                {isVisit
                  ? "Explore EAK in Person"
                  : "Admissions Open 2027–28"}
              </strong>

              <span>
                {isVisit
                  ? "Submit a sample campus visit request."
                  : "Learn about programs and the admission process."}
              </span>
            </div>

          </div>

          <p className="enquiry-demo-note">
            This is a demonstration form for a fictional school.
            Submissions are not sent to an admissions team.
          </p>

        </div>

        {/* Right Side - Form */}
        <div className="enquiry-form-card">

          <h3>
            {isVisit
              ? "Request a Campus Visit"
              : "Enquiry Form"}
          </h3>

          {/* Confirmation Message */}
          {submitted && (
            <div
              className="form-success"
              role="status"
              aria-live="polite"
            >
              <CheckCircle2 size={22} />

              <span>
                {isVisit
                  ? "Visit request completed for this demo only. No booking has been made."
                  : "Demo enquiry completed successfully! No information has been submitted."}
              </span>
            </div>
          )}

          <form onSubmit={handleSubmit}>

            {/* Parent Name and Email */}
            <div className="form-row">

              <div className="form-field">
                <label htmlFor={`${type}-parentName`}>
                  Parent / Guardian Name *
                </label>

                <input
                  id={`${type}-parentName`}
                  type="text"
                  name="parentName"
                  value={form.parentName}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  autoComplete="name"
                  minLength={2}
                  pattern=".*\S.*"
                  title="Enter a valid name, not only spaces"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor={`${type}-email`}>
                  Email Address *
                </label>

                <input
                  id={`${type}-email`}
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  autoComplete="email"
                  required
                />
              </div>

            </div>

            {/* Phone Number and Student Name */}
            <div className="form-row">

              <div className="form-field">
                <label htmlFor={`${type}-phone`}>
                  Phone Number *
                </label>

                <input
                  id={`${type}-phone`}
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  title="Enter a valid 10-digit mobile number"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor={`${type}-studentName`}>
                  Student Name *
                </label>

                <input
                  id={`${type}-studentName`}
                  type="text"
                  name="studentName"
                  value={form.studentName}
                  onChange={handleChange}
                  placeholder="Enter student name"
                  minLength={2}
                  pattern=".*\S.*"
                  title="Enter a valid student name"
                  required
                />
              </div>

            </div>

            {/* Grade Selection */}
            <div className="form-field">

              <label htmlFor={`${type}-grade`}>
                Applying for Grade *
              </label>

              <select
                id={`${type}-grade`}
                name="grade"
                value={form.grade}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select a grade
                </option>

                {Array.from({ length: 12 }, (_, index) => (
                  <option
                    key={index + 1}
                    value={`Grade ${index + 1}`}
                  >
                    Grade {index + 1}
                  </option>
                ))}

              </select>
            </div>

            {/* Visit Date - Only for Campus Visit */}
            {isVisit && (
              <div className="form-field">

                <label htmlFor="visit-visitDate">
                  Preferred Visit Date *
                </label>

                <input
                  id="visit-visitDate"
                  type="date"
                  name="visitDate"
                  value={form.visitDate}
                  onChange={handleChange}
                  min={localToday}
                  required
                />

              </div>
            )}

            {/* Message Field */}
            <div className="form-field">

              <label htmlFor={`${type}-message`}>
                {isVisit
                  ? "Additional Notes (Optional)"
                  : "Your Questions (Optional)"}
              </label>

              <textarea
                id={`${type}-message`}
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
              />

            </div>

            {/* Submit Button */}
            <button
              className="enquiry-submit"
              type="submit"
            >
              {isVisit
                ? "Request Visit"
                : "Submit Enquiry"}

              <Send size={17} />
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}

// Display both forms
function Enquiry() {
  return (
    <>
      <AdmissionForm type="enquiry" />
      <AdmissionForm type="visit" />
    </>
  );
}

export default Enquiry;
