const ProductCard = ({ image, name, description }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="info">
        <h3 className="name">{name}</h3>
        <p className="description">{description}</p>
      </div>
      <style jsx>{`
        .card {
          border-radius: 10px;
          background-color: #1f2428;
          font-family: 'Arial', sans-serif;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden; /* Ensure images don't overflow */
          transition: transform 0.3s ease-in-out; /* Add a smooth hover effect */
        }
        .card:hover {
          transform: scale(1.05); /* Enlarge the card on hover */
        }
        .card img {
          width: 100%; /* Ensure images fill their containers */
          height: auto;
          object-fit: cover; /* Maintain aspect ratio */
        }
        .info {
          padding: 20px;
        }
        .name {
          margin-top: 10px;
          color: #fff; /* Adjusted text color */
          font-size: 1.2rem; /* Increased font size for name */
        }
        .description {
          color: #f2f2f2; /* Slightly lighter text color for description */
          font-size: 1rem; /* Adjusted font size for description */
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
