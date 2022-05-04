import './Music.css';
import { Button, Card, Navbar, Nav, Container, Offcanvas, NavDropdown, Form, FormControl, Row, Col, Image, CardGroup } from "react-bootstrap"; //update to specifics
import "bootstrap/dist/css/bootstrap.min.css";
// import Sidebar from "../components/Sidebar.js";
// import XpCard from "../components/XpCard";
// "\src\components\XpCard.js"


function Music() {

  // window.onSpotifyIframeApiReady = (IFrameAPI) => {
  //   let element = document.getElementById('embed-iframe');
  //   let options = {
  //     uri: 'spotify:episode:7makk4oTQel546B0PZlDM5'
  //   };
  //   let callback = (EmbedController) => { };
  //   IFrameAPI.createController(element, options, callback);
  // };

  return (
    <div className="Music">

      <Container>
        <div class='row'>
          <h2>Music</h2>
        </div>
        <div class="row">
          {/* COL 1 */}
          <div class="col-12 col-md-4">
            <Card>
              <iframe class="iframe1" src="https://open.spotify.com/embed/playlist/2V4Q4KnBI72j4sO8LTb59S?utm_source=generator" width="100%"
                height="380" frameborder="0" allowtransparency="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </Card>
            <Card>
              <iframe class="iframe1" src="https://open.spotify.com/embed/playlist/1iuVKv8JbIQoMe59ENkUzF?utm_source=generator" width="100%"
                height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </Card>


          </div>

          {/* COL 2 */}
          <div class="col-12 col-md-4">
            {/* <iframe class="iframe1" src="https://open.spotify.com/embed/track/6pGeWf3SxSkpX8ZcvcbtYC?utm_source=generator" width="100%"
              height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
            <Card>
              <iframe class="iframe1" src="https://open.spotify.com/embed/track/33J9lmeViWXN0Le0vWRyjc?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </Card>
            <Card>
              <iframe class="iframe1" src="https://open.spotify.com/embed/track/6pGeWf3SxSkpX8ZcvcbtYC?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </Card>
            <Card>
              <iframe class="iframe1" src="https://open.spotify.com/embed/playlist/47c1bsZPYops5HOzfdcYRv?utm_source=generator" width="100%"
                height="300" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </Card>

          </div>


          {/* COL 3 */}
          <div class="col-12 col-md-4">
            <Card>
              <iframe class="iframe1" src="https://open.spotify.com/embed/artist/7wg1qvie3KqDNQbAkTdbX0?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </Card>
            <Card>
              <iframe class="iframe1" src="https://open.spotify.com/embed/artist/7jy3rLJdDQY21OgRLCZ9sD?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </Card>
            <Card>
              <iframe class="iframe1" src="https://open.spotify.com/embed/show/6Z49m4VQ4TfQ28Cnl42yiT?utm_source=generator" width="100%" height="232" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </Card>
          </div>
        </div>

      </Container>


    </div>
  );
}

export default Music;
