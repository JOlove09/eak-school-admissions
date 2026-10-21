
import { CheckCircle2, ClipboardList } from "lucide-react";
import "../styles/RequiredDocuments.css";

const documents = [
  "Child's Birth Certificate",
  "Previous School Academic Records",
  "Passport-Size Photographs",
  "Residential Address Proof",
  "Parent / Guardian Identity Proof"
];

function RequiredDocuments() {
  return (
    <section className="documents-section" id="documents">
      <div className="documents-container">
        <div className="documents-info">
          <span className="section-label">BE PREPARED</span>

          <h2>Required Documents</h2>

          <p>
            Ensure a smooth admission process by keeping
            the following documents ready before applying.
          </p>

          <div className="documents-info-icon">
            <ClipboardList size={45} strokeWidth={1.5} />
          </div>
        </div>

        <div className="documents-card">
          <h3>Admission Document Checklist</h3>

          <ul>
            {documents.map((document) => (
              <li key={document}>
                <CheckCircle2 size={21} />
                <span>{document}</span>
              </li>
            ))}
          </ul>

          <p className="document-note">
            Additional documents may be requested during
            the admission process.
          </p>
        </div>
      </div>
    </section>
  );
}

export default RequiredDocuments;
