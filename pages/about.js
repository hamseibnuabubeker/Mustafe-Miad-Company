import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>About Us</h1>
        <p>We are a leading supplier of construction materials, dedicated to providing high-quality products and services to our customers.</p>
        
        <h2>Our Mission</h2>
        <p>Our mission is to deliver exceptional value to our clients by supplying top-notch construction materials and offering unparalleled customer service.</p>
        
        <h2>Our Team</h2>
        <p>Meet our dedicated team of professionals who work tirelessly to ensure the success of our projects.</p>
        {/* You can add team member profiles here */}
      </main>
      <Footer />
      <style jsx>{`
        main {
          flex: 1;
          padding: 50px;
          text-align: center;
          font-family: 'Arial', sans-serif;
          color: #fff;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Add shadow effect */
          background-image: url('/images/background.jpg'); 
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          background-attachment: fixed;

          position: fixed;
          width: 100%;
          right: 0;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default About;
