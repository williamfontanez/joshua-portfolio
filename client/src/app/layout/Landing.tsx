import React from 'react'
import { useNavigate } from 'react-router-dom'
import hero from '../../../public/joshs-headshot.png';

export default function Landing(){
    return( 
        <div className="landing-page">
            <div className="left-side">
                <h2>
                Dr. Joshua A. Fontanez is a seasoned strategist with over ten years of distinguished service in the United States Army and an accomplished academic background, holding a PhD in Public Policy and Administration. His leadership in logistics and program management is marked by a history of enhancing operational efficiency and fostering team excellence. As a Lean Six Sigma Black Belt and a nonprofit leadership expert, he integrates continuous improvement with strategic planning. Committed to advocacy and mentorship, Dr. Fontanez serves on the boards of respected military associations, driving change and championing community engagement.
                </h2>
            </div>
            <div className="right-side">
                <img src={hero} alt="Logo" className='hero-image' />
            </div>
        </div>
)
}