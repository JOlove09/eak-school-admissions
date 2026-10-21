
import "../styles/Facilities.css";

const facilities = [
  {
    title: "Smart Classrooms",
    description: "Modern learning spaces with interactive digital teaching tools.",
    image: "/images/classroom.png"
  },
  {
    title: "Science & Computer Labs",
    description: "Well-equipped laboratories encouraging practical learning.",
    image: "/images/laboratory.jpeg"
  },
  {
    title: "Modern Library",
    description: "A welcoming space for reading, research, and exploration.",
    image: "/images/library.jpeg"
  },
  {
    title: "Sports Facilities",
    description: "Outdoor and indoor facilities for fitness and teamwork.",
    image: "/images/sports.png"
  },
  {
    title: "Safe Transportation",
    description: "Organized school transportation for convenient travel.",
    image: "/images/transport.png"
  },
  {
    title: "Health & Wellness",
    description: "Dedicated spaces supporting student health and well-being.",
    image: "/images/medical.png"
  }
];

function Facilities() {
  return (
    <section className="facilities-section" id="facilities">
      <div className="section-heading">
        <span className="section-label">OUR CAMPUS</span>
        <h2>Explore Our Facilities</h2>
        <p>
          Discover an inspiring environment designed to support
          learning, creativity, and personal development.
        </p>
      </div>

      <div className="facilities-grid">
        {facilities.map((facility) => (
          <article className="facility-card" key={facility.title}>
            <div className="facility-image">
              <img
                src={facility.image}
                alt={facility.title}
                loading="lazy"
              />
            </div>

            <div className="facility-content">
              <h3>{facility.title}</h3>
              <p>{facility.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Facilities;
