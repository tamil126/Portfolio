import React from 'react';
import { Navbar } from '../menu/navbar';

export function Certification() {
    return (
        <>
            <Navbar />
            <div id='certification' className=' mt-5'>
                <h1 className='text-center mb-5'>CERTIFICATION</h1>
                <div className='row mx-5 gap-5'>
                    <div className='col-lg-6 certify col-sm-12'>
                        <img src='https://kzhu.ai/wp-content/uploads/2022/08/Coursera-M8KPUN6S72BR.jpg' className='aboutImg' alt='No Img' />
                    </div>
                    <div className='col-lg-5 certify col-sm-12'>
                        <img src='https://wallpapercave.com/wp/wp2449773.jpg' className='aboutImg' alt='No Img'/>
                    </div>
                </div>
            </div>
        </>
    );
}