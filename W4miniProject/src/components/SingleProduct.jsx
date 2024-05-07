import { useParams, Navigate } from "react-router-dom";

export default function SingleProduct({ productList }) {
  const { productId } = useParams();
console.log(productId)
  const productFound = productList.find((product) => product.id == productId);
 

  if (!productFound) {
    return <Navigate to="/" />;
  }

  return (
    <div className="profile-wrapper">
      <div className="profile card flex">
        <div>
          
        {productFound.images.map((image, index) => {
          return(
            <img
              key={index}
              src={image}
              alt={`${index}`}
               
            />)
        })}  
        </div>
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