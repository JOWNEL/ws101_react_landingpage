import './About.css';
import img from '../../components/About/img2.jpg'; 
import img1 from '../../components/About/img3.jpg'; 
import img2 from '../../components/About/img4.jpg'; 
import img3 from '../../components/About/img5.jpg.jpg'; 

import img4 from '../../components/About/img6.jpg'; 
import img5 from '../../components/About/img7.jpg'; 
import img6 from '../../components/About/img8.jpg'; 
import img7 from '../../components/About/img9.jpg'; 

import img8 from '../../components/About/img10.jpg';
import img9 from '../../components/About/img11.jpg';
import img10 from '../../components/About/img12.jpg';
import img11 from '../../components/About/img13.jpg';
 






function About(props) {
    return (
        <section id="About">
            <div>
                <h1>Global Reach and Accessibility</h1>
                <p class='about1'>{props.about1}</p>
                
                <img className="img" src={img} style={{ width: '400px', height: "250px", margin: '35px' }} alt="Global Reach" />
                <img className="img" src={img1} style={{ width: '400px', height: "250px", margin: '35px' }} alt="Global Reach" />
                <img className="img" src={img2} style={{ width: '400px', height: "250px", margin: '35px' }} alt="Global Reach" />
                <img className="img" src={img3} style={{ width: '400px', height: "250px", margin: '35px' }} alt="Global Reach" />


                <div class='about2'>
                    <h1>Economic Growth</h1>
                    <p class='about1'>{props.about2}</p>

                    <img className="img" src={img4} style={{ width: '400px', height: "250px", margin: '35px' }} alt="Economic Growth" />
                    
                    <img className="img" src={img5} style={{ width: '400px', height: "250px", margin: '35px' }} alt="Economic Growth" />
                    <img className="img" src={img6} style={{ width: '400px', height: "250px", margin: '35px' }} alt="Economic Growth" />
                    <img className="img" src={img7} style={{ width: '400px', height: "250px", margin: '35px' }} alt="Economic Growth" />
                    

                </div>

                <div class='about3'>
                    <h1>Enhanced Communication</h1>
                    <p class='about1'>{props.about3}</p>

                    <img className="img" src={img8} style={{ width: '400px', height: "250px", margin: '35px' }} alt="Enhanced Communication" />
                    
                    <img className="img" src={img9} style={{ width: '400px', height: "250px", margin: '35px' }} alt="Enhanced Communication" />
                    <img className="img" src={img10} style={{ width: '400px', height: "250px", margin: '35px' }} alt="Enhanced Communication" />
                    <img className="img" src={img11} style={{ width: '400px', height: "250px", margin: '35px' }} alt="Enhanced Communication" />
                    

                </div>

                

            </div>
        </section>
    );
}

export default About;
