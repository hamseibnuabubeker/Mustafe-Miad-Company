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
  {
    image: "/images/product3.jpg",
    name: "Aggregate",
    description: "Types of Aggregates in Construction.",
  },
  {
    image: "/images/product4.jpg",
    name: "Concrete Blocks",
    description: "Versatile concrete blocks for various construction projects.",
  },

  {
    image: "/images/product5.jpg",
    name: "Roofing Tiles",
    description: "Weather-resistant roofing tiles to protect your building.",
  },
  {
    image: "/images/6.jpg",
    name: "Concrete Blocks",
    description: "Versatile concrete blocks for various construction projects.",
  },

  {
    image: "/images/7.jpeg",
    name: "On Going Site",
    description: "An ongoing construction site is a location where building or infrastructure projects are actively in progress. It typically involves various stages such as site preparation.",
  },
  {
    image: "/images/8.jpg",
    name: "Materials Suppliers",
    description: "Construction Materials Suppliers in Jigjiga.",
  },

  {
    image: "/images/9.jpg",
    name: "Roofing Sheet",
    description: "Weather-resistant roofing tiles to protect your building.",
  },
  {
    image: "/images/10.jpg",
    name: "Kerod Marble",
    description: "Kerod Marble & Floor Tiles Manufacturing.",
  },

];

const Products = () => {
  return (
    <div>
      <Header />
      <main>
        <h1 className="heading">Our Products</h1>
        <div className="product-list">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              name={product.name}
              description={product.description}
            />
          ))}
        </div>
      </main>
      <Footer />
      <style jsx>{`
        main {
          padding: 20px;
          text-align: center;
          color: #fff; /* Changed text color for better readability */
          background-image: url('/images/background.jpg'); 
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          background-attachment: fixed;
        }
        .heading {
          margin-bottom: 30px; /* Increased spacing below the heading */
        }
        .product-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          justify-items: center;
          align-items: start;
          padding: 20px;
        }
      `}</style>
    </div>
  );
};

export default Products;
