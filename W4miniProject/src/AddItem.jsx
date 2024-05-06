import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddItem.css";

const defaultImg =
  "https://curie.pnnl.gov/sites/default/files/default_images/default-image_0.jpeg";

export default function AddItem({addProduct,productList}) {
    const [title, setTitle] = useState("");
    const [images, setImages] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [discountPercentage, setDiscountPercentage] = useState(0);
    const [rating, setRating] = useState(0);
    const [stock, setStock] = useState(0);
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    

    const navigate = useNavigate();

    const handleTitle = (e) => {setTitle(e.target.value);};

    const handleImages = (e) => {setImages(e.target.value);};

    const handleDescription = (e) => {setDescription(e.target.value);};

    const handlePrice = (e) => {const value = Number(e.target.value) || ""; if (value < 0) return; setPrice(value);};

    const handleSubmit = (e) => {
        e.preventDefault();
   
        if (!title || !description || !price ) {
            alert("Please fill in all fields");
            return;
        }
        
        const id = productList.length+1;
        const imgURL = defaultImg;
        const images = imgURL || defaultImg;
        addProduct({ id, title, images, description, price,discountPercentage,rating,stock, brand, category });
   
        setTitle("");
        setImages("");
        setDescription("");
        setPrice(0);
        setDiscountPercentage(0);
        setRating(0);
        setStock(0);
        setBrand("");
        setCategory("")
   
        navigate("/");
    };

    return (
        <div>
        <h1>📱 Add product 📲</h1>
        <form>
            <div className="input-wrapper">
            <label>Title:</label>
            <input
                type="text"
                name="name"
                value={title}
                onChange={handleTitle}
            />
            </div>

            <div className="input-wrapper">
            <label>Image URL:</label>
            <input
                type="text"
                name="imgURL"
                value={images}
                onChange={handleImages}
            />
            </div>

            <div className="input-wrapper">
            <label>Description:</label>
            <input
                type="text"
                name="description"
                value={description}
                onChange={handleDescription}
            />
            </div>

            <div className="input-wrapper">
            <label>Price:</label>
            <input
                type="number"
                name="price"
                value={price}
                onChange={handlePrice}
            />
            </div>
            <button type="submit" onClick={handleSubmit}>Save</button>
        </form>
        </div>
    );
}