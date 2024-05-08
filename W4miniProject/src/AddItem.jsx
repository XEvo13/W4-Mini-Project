import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddItem.css";

const defaultImg =
  "https://curie.pnnl.gov/sites/default/files/default_images/default-image_0.jpeg";

export default function AddItem({addProduct,productList}) {
    const [title, setTitle] = useState("");
    const [imagesURL, setImagesURL] = useState("");
    const [thumbnailURL, setThumbnailURL] = useState("")
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [discountPercentage, setDiscountPercentage] = useState(0);
    const [rating, setRating] = useState(0);
    const [stock, setStock] = useState(0);
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    

    const navigate = useNavigate();

    const handleTitle = (e) => {setTitle(e.target.value);};

    const handleImagesURL = (e) => {setImagesURL(e.target.value.split(","));};

    const handleThumbnail = (e) => {setThumbnailURL(e.target.value);};

    const handleDescription = (e) => {setDescription(e.target.value);};

    const handlePrice = (e) => {const value = Number(e.target.value) || ""; if (value < 0) return; setPrice(value);};

    const handleDiscountPercentage = (e) => {setDiscountPercentage(e.target.value);};

    const handleRating = (e) => {setRating(e.target.value);};

    const handleStock = (e) => {setStock(e.target.value);};

    const handleBrand = (e) => {setBrand(e.target.value);};

    const handleCategory = (e) => {setCategory(e.target.value);};


    const handleSubmit = (e) => {
        e.preventDefault();
   
        if (!title || !description || !price || !imagesURL) {
            alert("Please fill in all fields");
            return;
        }
        
        const id = productList.length+1;

        
        // const imagess = images || defaultImg;
        const thumbnail = thumbnailURL || defaultImg;
        const images = imagesURL;
        //|| [defaultImg]
        addProduct({ id, title,images, thumbnail, description, price, discountPercentage,rating,stock, brand, category });
      
   
        setTitle("");
        // setImages("");
        setThumbnailURL("");
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
                value={imagesURL}
                onChange={handleImagesURL}
            />
            </div>

            <div className="input-wrapper">
            <label>Thumbnail:</label>
            <input
                type="text"
                name="thumbnail"
                value={thumbnailURL}
                onChange={handleThumbnail}
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

            <div className="input-wrapper">
            <label>Discount Percentage:</label>
            <input
                type="text"
                name="discountPercentage"
                value={discountPercentage}
                onChange={handleDiscountPercentage}
            />
            </div>

            <div className="input-wrapper">
            <label>Rating:</label>
            <input
                type="number"
                name="rating"
                value={rating}
                onChange={handleRating}
            />
            </div>

            <div className="input-wrapper">
            <label>Stock:</label>
            <input
                type="number"
                name="stock"
                value={stock}
                onChange={handleStock}
            />
            </div>

            <div className="input-wrapper">
            <label>Brand:</label>
            <input
                type="text"
                name="brand"
                value={brand}
                onChange={handleBrand}
            />
            </div>    

            <div className="input-wrapper">
            <label>Category:</label>
            <input
                type="text"
                name="category"
                value={category}
                onChange={handleCategory}
            />
            </div>    
            <button type="submit" onClick={handleSubmit}>Save</button>
           
        </form>
        </div>
    );
}