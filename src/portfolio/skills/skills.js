import React from 'react';
import { Navbar } from '../menu/navbar';

export function Skills() {
    return (
        <>
            <Navbar />
            <div id='skills' className='mt-4'>
                <h1 className='text-center'>SKILLS</h1>
                <div className='row mt-3 px-5'>
                    <div className='col-lg-6 col-md-6 g-5 skill mt-3'>
                        <img src='https://thetapacademy.com/wp-content/uploads/2022/10/full-stack-web-developer.jpg' className='aboutImg' alt='No Img' />
                    </div>
                    <div className='col-lg-6 col-md-6 g-5 skill my-3'>
                        <img src='https://4kwallpapers.com/images/walls/thumbs_2t/6935.jpg' className='aboutImg ' alt='No Img'/>
                    </div>
                </div>
            </div>
        </>
    );
}