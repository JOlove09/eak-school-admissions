
import "../styles/FeeInformation.css";

const fees = [
  { grade: "Grades 1–5", annual: 45000, admission: 8000 },
  { grade: "Grades 6–8", annual: 58000, admission: 10000 },
  { grade: "Grades 9–12", annual: 72000, admission: 12000 },
];

const formatFee = (amount) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);

function FeeInformation() {
  return (
    <section className="fees-section" id="fees">
      <div className="section-heading">
        <span className="section-label">TRANSPARENT PRICING</span>
        <h2>School Fee Structure</h2>
        <p>
          Explore our indicative fee structure for the
          2027–28 academic session.
        </p>
      </div>

      <div className="fees-table-container">
        <table className="fees-table">
          <thead>
            <tr>
              <th scope="col">Grade Level</th>
              <th scope="col">Annual Fee</th>
              <th scope="col">Admission Fee</th>
            </tr>
          </thead>
          <tbody>
            {fees.map((fee) => (
              <tr key={fee.grade}>
                <th scope="row">{fee.grade}</th>
                <td>{formatFee(fee.annual)}</td>
                <td>{formatFee(fee.admission)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="fees-note">
        * Fees are fictional and for demonstration purposes only.
      </p>

      <a href="#enquiry" className="fees-enquire">
        Enquire About Admissions
      </a>
    </section>
  );
}

export default FeeInformation;
