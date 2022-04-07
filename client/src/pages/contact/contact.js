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
        <div className="contactInfo">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum minima recusandae accusamus eius odit! Necessitatibus vitae nemo perspiciatis reprehenderit recusandae pariatur, perferendis eligendi nobis consequuntur eum sit illum eaque cum.
          Perspiciatis odio accusamus tenetur sequi iusto debitis assumenda. Voluptatum, quis. Quae dolorem aspernatur quibusdam animi delectus vero doloremque explicabo rerum esse ut, ullam itaque minima error qui tempore voluptatum possimus?
          Dicta unde saepe earum dolorem consectetur, magni, possimus voluptas, maxime voluptatibus accusamus quidem eveniet quasi aliquid! Corrupti, porro, omnis voluptatum aliquid cupiditate esse fugit eaque velit, quisquam rem voluptates repellat!
          Delectus commodi sint voluptate fugit, itaque, enim odio quae pariatur sapiente molestiae corrupti, exercitationem neque voluptatibus non reiciendis autem officia. Accusamus sint doloribus illo, repellat quam repudiandae ipsum quos itaque!
          Illo sequi vel doloribus ipsa quisquam id. Fuga autem, et saepe accusamus, officiis delectus beatae magni dignissimos totam a suscipit corrupti? Quas eum dignissimos iusto at voluptatum provident perspiciatis nesciunt.
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
    </motion.div>
  );
};

export default Contact;
