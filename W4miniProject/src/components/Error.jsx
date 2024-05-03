import { useNavigate } from "react-router-dom";
import ErrorImg from "../assets/images/about.png"

export default function Error() {
    return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "50px",
            minHeight: "90vh",
          }}
        >
            <h2>Page Not Found</h2>
          <img
            src={ErrorImg}
            alt="Not Found Page"
            width={600}
            height="auto"
          />
          
          
        </div>
      );
}