import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";

import "./about.css";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="aboutContainer"
    >
      <div className="aboutTitle">
        <h2>Verksamhet och Tjänster</h2>
      </div>
      <div className="aboutText">
        Lillje Consulting erbjuder tjänster inom ekonomi- &#38; redovisning men
        även interimslösningar för mindre och medelstora företag. Vi
        säkerställer att administrativt ekonomiarbete hanteras rätt och i rätt
        tid och med våra digitala verktyg stöttar vi dig så att du har kontroll
        på ekonomin i ditt företag och kan fokusera på att driva, effektivisera
        och utveckla ditt företag på bästa sätt
      </div>
      <div className="aboutListHeader"><h4>Våra tjänster</h4></div>
      <div className="aboutList">
        <ul>
          <li className="aboutListItem">Löpande redovisning</li>
          <li className="aboutListItem">Bokslut</li>
          <li className="aboutListItem">Deklaration</li>
          <li className="aboutListItem">Löner</li>
          <li className="aboutListItem">Rådgivning</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default About;
