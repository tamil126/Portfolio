import React from 'react';
import { Navbar } from '../menu/navbar';

export function About() {
    return (
        <>
        <Navbar/>
            <div id='about' className='d-flex justify-contant-center mt-1 pt-1 align-items-center'>
                <div className='container contant'>
                    <h1>About Me</h1>
                    <p className='aboutcontant mt-2 p-1'>Creating an interesting resume is one opportunity you can use to increase your chances of securing a job interview for a position in your field. An effective "about me" section intrigues the resume reader and convinces them you are the right candidate for a particular job. Learning the steps to create this section can save you time and energy when writing your document. In this article, we will discuss what an "about me" section is, instruct how to write "about me" in a resume, and give tips to help you perfect this section of your resume.</p>
                    <img src='https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?cs=srgb&dl=pexels-pixabay-36717.jpg&fm=jpg' className='aboutImg container pb-5' alt='No Img'/>
                </div>
            </div>
        </>
    );
}