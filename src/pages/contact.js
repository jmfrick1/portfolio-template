import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>If you have any questions or would like to get in touch, please fill out the form below.</p>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
