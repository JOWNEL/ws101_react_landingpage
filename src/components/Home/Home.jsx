import './Home.css';
import img from '../../components/Home/img1.jpg'; 

function Home(props) {
    return (
        <section id="Home">
            <div>
                <h1>IMPORTANCE OF WEB DEVELOPMENT</h1>
                <p>{props.home}</p>

                <img className="img" src={img} style={{ width: '900px', }} alt="Web Development" />
            </div>
        </section>
    );
}

export default Home;
