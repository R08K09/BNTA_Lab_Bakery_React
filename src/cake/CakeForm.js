import { useState } from "react";

const CakeForm = ({listOfCakes, setListOfCakes}) => {

    const[cakeName, setCakeName] = useState("");
    const[ingredients, setIngredients] = useState([]);
    const[price, setPrice] = useState("");
    const[rating, setRating] = useState("");
    const[errorMessage, setError] = useState("");


    const handleValidation = () => {
        let errorMessage = "";

        if(listOfCakes.find((cake) => cake.cakeName === cakeName)){
            errorMessage = "This cake already exists!";
        }

        if(cakeName === "" || price === "" || rating === ""){
            errorMessage = "Please fill in all fields";
        }

        if(price < 0 || rating < 0){
            errorMessage = "Please give a price/rating greater than 0;"
        }

        setError(errorMessage)
        return errorMessage !== "";
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(!handleValidation()){

            const updatedCakes =  [...listOfCakes];

            const newCakeItem = {
                cakeName : cakeName,
                ingredients : ingredients.split(", "),
                price : price,
                rating : rating
            }

            updatedCakes.push(newCakeItem);

            setListOfCakes(updatedCakes);
        }
    }


return (
    <>
        <h2>Add a new cake</h2>
        <form onSubmit={handleFormSubmit}>

        <p>Cake name</p>
            <input
            type="text"
            name="cakeName"
            placeholder="Cake Name"
            value={cakeName}
            onChange={(e) => setCakeName(e.target.value)}
            />

        <p>Price</p>
            <input
            type="number"
            name="price"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            />

        <p>Rating</p>
            <input
            type="number"
            name="rating"
            placeholder="Rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            />

        <p>Ingredients:</p>
            <input
            type="text"
            name="ingredients"
            placeholder="Add ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            />

        <input type="submit" value="Submit"/>
       
        </form>
        <p>{errorMessage}</p>
    </>
)
};

export default CakeForm;