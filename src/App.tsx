import { useState } from 'react';
import Board from './Boards/Boards.tsx'
import logo_4Chan from './assets/4Chan.png';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bd">
      <div>
        <a href="https://local" title="Home">
          <img src={logo_4Chan} className="logo" alt="4Chan" width="300" height="120" />
        </a>
        <div id="announce" className="box-outer">
          <div className="box-inner"> 
            <div className="boxbar">
              <h4>What is 4chan?</h4>
              <a className="closebutton" data-cmd="x-wot" href="#"> x </a>
            </div>
            <div className="boxcontent">
              <div id="wot-cnt"></div>
            </div>
          </div>
          <div className="Rules_and_shit">
   
            <h5 className = "explanation">
              4chan is a simple image-based bulletin 
              board where anyone can post comments and 
              share images. There are boards dedicated 
              to a variety of topics, from Japanese 
              animation and culture to videogames, music, 
              and photography. Users do not need to register 
              an account before participating in the community. 
              Feel free to click on a board below that 
              interests you and jump right in!
            </h5>
            <h5 className = "FAQ">
              Be sure to familiarize yourself with the <a href="/rules">Rules</a>
              {' '}before posting, and read the{' '}
              <a href="/faq" title="Frequently Asked Questions">FAQ</a>
              {' '}if you wish to learn more about how to use the site.
            </h5>
          </div>
        </div>
      </div>
        <Board></Board>
    </div>
  );
}

export default App;
