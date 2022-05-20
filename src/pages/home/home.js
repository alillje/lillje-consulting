import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import { motion } from 'framer-motion'
import Jumbotron from "../../components/jumbotron/jumbotron";
import { Link } from 'react-router-dom';

import "./home.css";

/**
 *
 */
const Home = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0}}>
    <div className="homeContainer">
      <Jumbotron
        title="Alltid nära till hands"
        text="Är du intresserad av våra tjänster? Eller är du redan befintlig kund? Vi finns alltid här för att svara på era frågor. "
        buttonText="Kontakta oss"
        linkPath="kontakta-oss"
        className="homeJumbo"
      ></Jumbotron>


      <CardGroup className="homeCardGroup">
  <Card className="border">
    <Card.Body>
      <Card.Title>Verksamhet</Card.Title>
      <Card.Text>
        Är du intresserad av våra tjänster? Läs mer om vår verksamhet och se om våra tjänster passar ert företag. 
      </Card.Text>
    </Card.Body>
    <Link to="/tjanster">
    <Card.Footer>
    <small className="text-muted"><Link to="/tjanster">Tjänster & Verksamhet &#187;</Link></small>
    </Card.Footer>
    </Link>
  </Card>
  <Card className="border">
    <Card.Body>
      <Card.Title>Kundportal</Card.Title>
      <Card.Text>
        Är du befintlig kund hos oss? <Link to="/kontakta-oss">Kontakta oss</Link> för att skapa ett konto på vår kundportal. {' '}
      </Card.Text>
    </Card.Body>
    <a href="https://lilljeconsultingcustomer.netlify.app" target="_blank" rel="noopener noreferrer">
    <Card.Footer>
      <small className="text-muted">Kundportal &#187;</small>
    </Card.Footer>
    </a>
  </Card>

</CardGroup>
    </div>
    </motion.div>
  );
};

export default Home;
