import Grid from '@mui/material/Grid';
import { useState } from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// render to different shelves and different shaped cards based on category as a stretch, view food card brings to front of page

function FoodCard({ setfood, food, foods }) {

        const [updatedName, setUpdatedName] = useState(food.name)
        const [updatedQuantity, setUpdatedQuantity] = useState(food.quantity)
        const [updatedUnit, setUpdatedUnit] = useState(food.unit)
        const [updatedCategory, setUpdatedCategory] = useState(food.category)
        const [updatedDaysUntilExpiration, setUpdatedDaysUntilExpiration] = useState(food.days_until_expiration)
        const [updatedDateOfPurchase, setUpdatedDateOfPurchase] = useState(food.date_of_purchase)
        const [editing, setEditing] = useState(false)
        const [open, setOpen] = useState(false);


        const updateFood = (e) => {
                e.preventDefault();
                fetch(`foods/${food.id}`, {
                        method: "PUT",
                        headers: {
                                "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                                name: updatedName,
                                quantity: updatedQuantity,
                                unit: updatedUnit,
                                category: updatedCategory,
                                days_until_expiration: updatedDaysUntilExpiration,
                                date_of_purchase: updatedDateOfPurchase
                        }),
                })
                .then(response => response.json())
                .then(data => onUpdateFood(data))
                .then(setEditing(!editing))
        }

        function handleEdit(){
                setEditing(!editing)
        }

        function onUpdateFood(updatedFood){
                const updatedFoodsArray = foods.map((food) => {
                        if (food.id===updatedFood.id) {
                                return updatedFood;}
                                else {
                                        return food
                                }
                        })
                setfood(updatedFoodsArray)
                window.location.reload()
        }

        function deleteFood(id) {
                const updatedFoods = foods.filter((food) => food.id !== id);
                setfood(updatedFoods);
              }

        const handleDeleteClick = () => {
                fetch(`foods/${food.id}`, {
                        method: "DELETE",
                });
                deleteFood(food.id)        
        }

        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

return (
        <Grid item sm onClick={handleOpen}>
        <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                          Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                      </Box>
                    </Modal>
        <p>{food.name} ({food.quantity} {food.unit})</p>
        <p>{food.days_until_expiration} days to use</p>
        <button onClick={handleEdit}>Edit</button>
        {editing ? (
                <form onSubmit={updateFood}>
                        <input type="text" placeholder="name"
                        value={updatedName}
                        onChange={(e) => setUpdatedName(e.target.value)}/>
                        <button type="submit" >Save</button>
                </form>
        ) : (null)}
        <button onClick={handleDeleteClick}>Delete</button>
        </Grid>
)
}
export default FoodCard;