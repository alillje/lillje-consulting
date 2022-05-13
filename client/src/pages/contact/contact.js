import { motion } from "framer-motion";
import './contact.css'

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="contactContainer">
        <div className="contactTitle">
          <h1>Kontakta oss</h1>
        </div>
        <div className="contactMapAndInfo">
        <div className="contactInfo">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum minima recusandae accusamus eius odit! Necessitatibus vitae nemo perspiciatis reprehenderit recusandae pariatur, perferendis eligendi nobis consequuntur eum sit illum eaque cum.
        </div>
        <div className="mapContainer">

        <iframe
        className="contactMap" 
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2011.0952278345246!2d18.368743816326514!3d59.73123648577426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465fed940f314465%3A0xb36e7cc5cb2baad2!2sIngvar%20Vikings%20v%C3%A4g%2011%2C%20762%2071%20Rimbo!5e0!3m2!1ssv!2sse!4v1649336534726!5m2!1ssv!2sse"
          width="400"
          height="300"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
                </div>

      </div>
    </motion.div>
  );
};

export default Contact;
