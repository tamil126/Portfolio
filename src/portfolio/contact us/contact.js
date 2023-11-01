import React from 'react';
import { Navbar } from '../menu/navbar';

export function Contact()
{
    return(
        <>
        <Navbar/>
        <div id="contact">
        <div class="container">
            <div class="row">
                <div class="contactLeft">
                    <h1 class="subTitle">Contact Me</h1>
                    <div class="icons">
                        <a href=""><i class="fa-brands fa-facebook-f" ></i></a>
                        <a href=""><i class="fa-brands fa-twitter" ></i></a>
                        <a href=""><i class="fa-brands fa-instagram" ></i></a>
                        <a href=""><i class="fa-brands fa-linkedin-in" ></i></a>
                        <a href=""><i class="fa-brands fa-github" ></i></a>
                    </div>
                </div>
                <div class="contactRight">
                    <form>
                        <input type="text" placeholder="Your Name" required/>
                        <input type="email" placeholder="Your Email" className='my-3' required/>
                        <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                        <button type="button" class="bt btn">Sumbit</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="copyRight py-2">
            <p>Copyright ©Tamil. Made with by Tamil Selvan M</p>
        </div>
    </div>
        </>
    );
}