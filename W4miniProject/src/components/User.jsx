import { useState } from "react";
import { useNavigate } from "react-router-dom";

const defaultImg = "assets/images/user.png"

export default function CreateProfile() {
    const [name, setName] = useState("");
    const [imgURL, setImgURL] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleName = (e) => {setName(e.target.value);};

    const handleImgURL = (e) => {setImgURL(e.target.value);};

    const handleEmail = (e) => {setEmail(e.target.value);};

    const handleSubmit = (e) => {
        e.preventDefault();
   
        if (!name || !email) {
            alert("Please fill in all fields");
            return;
        }
   
        const id = uuidv4();
        const img = imgURL || defaultImg;
        CreateProfile({ id, name, img, email });
   
        setName("");
        setImgURL("");
        setEmail("");
   
        navigate("/profile");
    };

    return (
        <div>
        <h1>Profile</h1>
        <form>
            <div className="input-wrapper">
            <label>Name:</label>
            <input
                type="text"
                name="name"
                value={name}
                onChange={handleName}
            />
            </div>
            <div className="input-wrapper">
            <label>Image URL:</label>
            <input
                type="text"
                name="imgURL"
                value={imgURL}
                onChange={handleImgURL}
            />
            </div>
            <div className="input-wrapper">
            <label>Email:</label>
            <input
                type="text"
                name="email"
                value={email}
                onChange={handleEmail}
            />
            </div>
            <button type="submit" onClick={handleSubmit}>Save</button>
        </form>
        </div>
    );
}