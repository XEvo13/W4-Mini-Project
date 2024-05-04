import { useState } from "react";
import {v4 as uuidv4} from "uuid";
import { useNavigate } from "react-router-dom";
import "./AddItem.css";

const defaultImg =
  "https://curie.pnnl.gov/sites/default/files/default_images/default-image_0.jpeg";

export default function AddItem({createItem}) {
    const [name, setName] = useState("");
    const [imgURL, setImgURL] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const navigate = useNavigate();

    const handleNameAdd = (e) => {setName(e.target.value);};

    const handleImgAdd = (e) => {setImgURL(e.target.value);};

    const handleDescriptionAdd = (e) => {setDescription(e.target.value);};

    const handlePriceAdd = (e) => {const value = Number(e.target.value) || ""; if (value < 0) return; setPrice(value);};

    const handleSubmit = (e) => {
        e.preventDefault();
   
        if (!name || !description || !price ) {
            alert("Please fill in all fields");
            return;
        }
   
        const id = uuidv4();
        const img = imgURL || defaultImg;
        createItem({ id, name, img, description, price });
   
        setName("");
        setImgURL("");
        setDescription("");
        setPrice(0);
   
        navigate("/items");
    };

    return (
        <div>
        <h1>Add Item</h1>
        <form>
            <div className="input-wrapper">
            <label>Name:</label>
            <input
                type="text"
                name="name"
                value={name}
                onChange={handleNameAdd}
            />
            </div>

            <div className="input-wrapper">
            <label>Image URL:</label>
            <input
                type="text"
                name="imgURL"
                value={imgURL}
                onChange={handleImgAdd}
            />
            </div>

            <div className="input-wrapper">
            <label>Description:</label>
            <input
                type="text"
                name="description"
                value={description}
                onChange={handleDescriptionAdd}
            />
            </div>

            <div className="input-wrapper">
            <label>Price:</label>
            <input
                type="number"
                name="price"
                value={price}
                onChange={handlePriceAdd}
            />
            </div>
            <button type="submit" onClick={handleSubmit}>Save</button>
        </form>
        </div>
    );
}