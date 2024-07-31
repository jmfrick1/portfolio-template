import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './About.css';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about-container">
        <h1>About Me</h1>
        <p>This is the About page. Here, you can include details about your background, experience, and skills.</p>
        <p>Feel free to add any other relevant information that you think will help visitors understand more about you and your work.</p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
