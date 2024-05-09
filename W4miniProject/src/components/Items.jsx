import { useParams, Navigate, useSearchParams } from "react-router-dom";
import "./Items.css";

export default function Item({ items }) {
  const { itemId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const item = items.find((item) => item.id === itemId);

  if (!item) {
    return <Navigate to="/items" />;
  }

  const showDescription = searchParams.get("showDescription");

  console.log("showDescription", showDescription);

  return (
    <div className="register-wrapper">
      <div className="register-card">
        <img className="img-item"
          src={item.img}
          alt={`${item.name} register picture`}
          width={300}
          height="auto"
          style={{ borderRadius: "50%" }}
        />
        <h2>{item.name}</h2>
        {showDescription === "true" && <p>{item.description}</p>}
      </div>
    </div>
  );
}