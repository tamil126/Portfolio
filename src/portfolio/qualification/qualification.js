import React from 'react';
import { Navbar } from '../menu/navbar';

export function Qualification() {
    return (
        <>
            <Navbar />
            <div class="tabContents mt-4 ps-5" id="qualification">
                <h1 className='text-danger'>QUALIFICATION</h1>
                <ul className='ps-5'>
                    <li className='mt-3 pt-5'><span>2020</span><br />B.Sc Computer Science with 73%<br />Sri Ramakrishna Mission Vidyalaya College of Arts and Science</li>
                    <li className='mt-5'><span>2017</span><br />Higher Secondary with 71% <br />Amala Matriculation Higher Secondary School</li>
                    <li className='mt-5 pb-5'><span>2015</span><br />SSLC with 90%<br />Amala Matriculation Higher Secondary School</li>
                </ul>
            </div>
        </>
    );
}