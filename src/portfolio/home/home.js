import React from 'react';
import { Navbar } from '../menu/navbar';

function Home() {
  return (
    <>
    <Navbar/>
      <div id='home'>
        <div  class="headerText container mt-3 pt-2">
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--e5FaMPe6--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4pj6c9haor46l0ihyt1y.png" width="100%" height="250vh" alt="No Img" />
          <h1 className='m-5'>Hi, I am <span>Tamil Selvan</span> <br /> From Idappadi</h1>
        </div>
      </div>
    </>
  );
}
export default Home;