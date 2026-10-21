<a className="skip-link" href="#main-content">
  Skip to main content
</a>

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import WhyChoose from "./sections/WhyChoose";
import Academics from "./sections/Academics";
import Highlights from "./sections/Highlights";
import Facilities from "./sections/Facilities";
import AdmissionProcess from "./sections/AdmissionProcess";
import ImportantDates from "./sections/ImportantDates";
import RequiredDocuments from "./sections/RequiredDocuments";

// Step 5 components
import FeeInformation from "./sections/FeeInformation";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import FinalCTA from "./sections/FinalCTA";
import Enquiry from "./sections/Enquiry";

import "./styles/global.css";

function App() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <Hero />
        <WhyChoose />
        <Academics />
        <Highlights />
        <Facilities />
        <AdmissionProcess />
        <ImportantDates />
        <RequiredDocuments />

        <FeeInformation />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Enquiry />
      </main>
    </>
  );
}

export default App;
