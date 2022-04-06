import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';

import './home.css'



const Home = () => {
  return (
    <div className="homeContainer">
    <div className="homeJumbotron">
        <h1>Alltid nära till hands</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident totam, facere ipsam dolores qui maiores dicta molestias explicabo exercitationem veritatis magni, aliquam corporis cupiditate similique. Blanditiis eaque voluptatum nisi vel?
    Autem earum incidunt rerum non modi quidem, aut sit error.</p>
    <Link to="kontakta-oss"><button className="homeJumbotronBtn">Kontakta oss</button></Link>
    </div>

    <p className="homeParagraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis dolorem quas fuga qui maiores recusandae fugiat ea soluta quod adipisci sapiente provident facere illo, nisi placeat, aliquid doloremque. Aut, debitis.
    Doloribus, voluptas molestiae deserunt laudantium qui voluptatum recusandae nobis illum maiores veniam inventore? Velit dolore delectus ut? Placeat libero, esse deserunt illum blanditiis dolores natus dolore sequi, consequatur, assumenda reiciendis.
    Quis nihil ipsum blanditiis vitae ratione ea similique quia delectus magnam laborum consequuntur unde eum ut molestiae laboriosam neque nulla maiores sed perferendis quo eius, sit quod voluptas sunt? Totam!
    Quos, sed tenetur. Beatae voluptatibus quibusdam magnam sint delectus aut, ex eaque aperiam est sequi modi rem numquam doloribus vel debitis amet porro eveniet natus quos sit quidem explicabo illum.
    Suscipit fuga aliquam nihil amet veniam itaque nam pariatur fugiat labore animi optio officia, sapiente voluptatibus impedit quas, reiciendis magni dignissimos ipsam repellat perspiciatis aspernatur quia deserunt delectus! Voluptates, cum!
    Consequatur rerum minima, ad soluta rem deleniti ducimus similique id ipsam adipisci quae, sint corrupti perspiciatis suscipit recusandae esse. Quo nostrum magni sequi doloremque soluta blanditiis explicabo dolores atque consequatur.
    Sint maxime laborum quo expedita sapiente veritatis odit laboriosam autem voluptas, placeat impedit suscipit accusantium ratione tempora minima obcaecati, culpa reiciendis fuga officia! Explicabo fugiat, asperiores magnam suscipit iusto aperiam.
    Eveniet obcaecati numquam fuga voluptas optio, molestias doloremque voluptate! Soluta facilis modi officiis beatae delectus. Maxime perferendis perspiciatis quae at sunt dolor officia aliquid debitis necessitatibus, error, odio sit quos?
    Ducimus nesciunt iure quo similique ad porro? Accusantium eum at molestiae porro magni quia numquam! Neque unde quis laboriosam voluptate earum itaque velit esse, incidunt laborum ex nobis totam dolore?
    Maiores repellat assumenda sapiente fugit, dolorum ullam facere delectus aut praesentium corrupti et, fuga odio excepturi veritatis, fugiat repudiandae. Libero officiis perspiciatis ipsum exercitationem deserunt accusantium ullam nesciunt corporis veritatis?</p>

<CardGroup>
  <Card>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>  
</div>)
}

export default Home;