import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const products = [
  {
    image: "/images/product1.jpg",
    name: "Cement",
    description: "High-quality cement for all your construction needs.",
  },
  {
    image: "/images/product2.jpg",
    name: "Bricks",
    description: "Durable bricks for building strong structures.",
  },
  // Add more products as needed
];

const Home = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <section className="hero">
          <h1>Welcome to Mustafe Miad Construction Material Co.</h1>
          <p>Your one-stop shop for all construction materials.</p>
        </section>

        <section className="featured-products">
          <h2>Featured Products</h2>
          <div className="product-list">
            {products.slice(0, 2).map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                name={product.name}
                description={product.description}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          font-family: 'Arial', sans-serif;
          background-image: url('/images/background.jpg'); 
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          background-attachment: fixed;
        }
        main {
          flex: 1;
          padding: 20px;
        }
        .hero {
          position: relative;
          text-align: center;
          padding: 50px 20px;
          background: #0c1013;
          color: #fff;
          border-radius: 15px;
          margin: 20px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
          z-index: 0;
        }
        .hero h1, .hero p {
          position: relative;
          z-index: 1;
          margin: 0;
        }
        .hero h1 {
          font-size: 3rem;
          font-weight: bold;
        }
        .hero p {
          margin: 10px 0 0;
          font-size: 1.5rem;
        }
        .featured-products {
          padding: 40px 20px;
          text-align: center;
          background-color: #0c1013;
          border-radius: 15px;
          margin: 20px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .featured-products h2 {
          font-size: 2rem;
          margin-bottom: 20px;
          color: #fff;
        }
        .product-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }
        @media (max-width: 768px) {
          .hero {
            padding: 30px 10px;
          }
          .hero h1 {
            font-size: 2.5rem;
          }
          .hero p {
            font-size: 1.2rem;
          }
          .featured-products {
            padding: 20px 10px;
          }
          .featured-products h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
