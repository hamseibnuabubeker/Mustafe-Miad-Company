import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Contact Us</h1>
        <p>If you have any inquiries or would like to discuss a project, feel free to reach out to us.</p>
        
        <h2>Contact Information</h2>
        <p>Email: abibekerm@gmail.com</p>
        <p>Phone: +251 915 03 6149</p>
        
        <h2>Visit Us</h2>
        <p>Drop by our office during business hours to discuss your construction needs in person.</p>
        {/* You can add office address and map here */}
      </main>
      <Footer />
      <style jsx>{`
        main {
          padding: 20px;
          text-align: center;
          font-family: 'Arial', sans-serif;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Add shadow effect */
          color: #fff;
          background-image: url('/images/background.jpg'); 
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          background-attachment: fixed;

          position: fixed;
          width: 100%;
          height: 100%;
          z-index: -1;
        }
      `}</style>
    </div>
  );
};

export default Contact;
