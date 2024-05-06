import { useParams, Navigate } from "react-router-dom";

export default function SingleProduct({ productList }) {
  const { productId } = useParams();

  const productFound = productList.find((product) => product.id == productId);

  if (!productFound) {
    return <Navigate to="/" />;
  }

  return (
    <div className="profile-wrapper">
      <div className="profile card flex">
        <img
          src={productFound.images[0]} // Assuming images is an array
          alt={`${productFound.title} profile picture`}
          className="w-16 h-9 object-cover" // Adjust size and margins as needed
        />
        <div>
          <h2 className="text-xl font-bold">{productFound.title}</h2>
          <p className="text-gray-600">{productFound.description}</p>
          <p className="text-gray-800">${productFound.price}</p>
          <p className="text-gray-800">{productFound.rating}</p>
          <p className="text-gray-800">{productFound.stock}</p>
          <p className="text-gray-800">{productFound.brand}</p>
          <p className="text-gray-800">{productFound.category}</p>

        </div>
      </div>
    </div>
  );
}