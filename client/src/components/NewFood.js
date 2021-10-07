import { useState } from 'react'

function NewFood({foods, setfood}) {

    const [foodName, setFoodName] = useState("")
    const [foodQuantity, setFoodQuantity] = useState("")
    const [foodUnit, setFoodUnit] = useState("")
    const [foodCategory, setFoodCategory] = useState("")
    const [foodDaysUntilExpiration, setFoodDaysUntilExpiration] = useState("")
    const [foodDateOfPurchase, setFoodDateOfPurchase] = useState("")

    function handleSubmit (e){
        e.preventDefault();
        fetch ("/foods", {
          method: "POST",
          headers: {
           "Content-type": "application/json",
          },
          body: JSON.stringify({
            name: foodName,
            quantity: foodQuantity,
            unit: foodUnit,
            category: foodCategory,
            days_until_expiration: foodDaysUntilExpiration,
            date_of_purchase: foodDateOfPurchase
          }),
      })
      .then(response => response.json())
      .then (data => onAddFood(data))
      .then(window.location.reload())
      setFoodName("")
      setFoodCategory("")
      setFoodUnit("")
      setFoodDateOfPurchase(new Date())
      setFoodDaysUntilExpiration(0)
      setFoodQuantity(1)
     
      }

      function onAddFood(newFood){
        const updatedFoodsArray = [...foods, newFood]
        setfood(updatedFoodsArray);
      }

    return (
        <form onSubmit={handleSubmit}>
        <input type="text"
        placeholder="name"
        value={foodName}
        onChange={(e) => setFoodName(e.target.value)}>
        </input>

        <input type="integer"
        placeholder="quantity"
        value={foodQuantity}
        onChange={(e) => setFoodQuantity(e.target.value)}>
        </input>

        <input type="text"
        placeholder="unit"
        value={foodUnit}
        onChange={(e) => setFoodUnit(e.target.value)}>
        </input>
{/* would be great if this was a drop down: */}
        <input type="text"
        placeholder="category"
        value={foodCategory}
        onChange={(e) => setFoodCategory(e.target.value)}>
        </input>

        <input type="integer"
        placeholder="days until expiration"
        value={foodDaysUntilExpiration}
        onChange={(e) => setFoodDaysUntilExpiration(e.target.value)}>
        </input>

        <br />
        Date of Purchase:
        <input type="datetime-local"
        placeholder="date purchased"
        value={foodDateOfPurchase}
        onChange={(e) => {
          setFoodDateOfPurchase(e.target.value)
        }}>
          </input>

        <br />
        <button type="submit">Submit</button>
      </form>
    )
}

export default NewFood;