import Grid from '@mui/material/Grid';
import { useState } from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

// render to different shelves and different shaped cards based on category as a stretch, view food card brings to front of page

function FoodCard({ setfood, food, foods }) {

        const Img = styled('img')({
                margin: 'auto',
                display: 'block',
                maxWidth: '100px',
                maxHeight: '100px',
              });

        const [updatedName, setUpdatedName] = useState(food.name)
        const [updatedQuantity, setUpdatedQuantity] = useState(food.quantity)
        const [updatedUnit, setUpdatedUnit] = useState(food.unit)
        const [updatedCategory, setUpdatedCategory] = useState(food.category)
        const [updatedDaysUntilExpiration, setUpdatedDaysUntilExpiration] = useState(food.days_until_expiration)
        const [updatedDateOfPurchase, setUpdatedDateOfPurchase] = useState(food.date_of_purchase)
        const [editing, setEditing] = useState(false)
        const [open, setOpen] = useState(false);

        const style = {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
              };


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
        const handleClose = (e) => {e.stopPropagation(); setOpen(false);}

return (
        <Grid item xs={3}>
        <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                //       backdrop="static"
                    >
                      <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                        {food.name} < br /> ({food.quantity} {food.unit})< br />
        {food.days_until_expiration} days to use
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <button onClick={handleEdit}>Edit</button>
        {editing ? (
                <form onSubmit={updateFood}>
                        <input type="text" placeholder="name"
                        value={updatedName}
                        onChange={(e) => setUpdatedName(e.target.value)}/>
                        <input type="integer" placeholder="quantity"
                        value={updatedQuantity}
                        onChange={(e) => setUpdatedQuantity(e.target.value)}/>
                        <input type="text" placeholder="unit"
                        value={updatedUnit}
                        onChange={(e) => setUpdatedUnit(e.target.value)}/>
                        <input type="category" placeholder="category"
                        value={updatedCategory}
                        onChange={(e) => setUpdatedCategory(e.target.value)}/>
                        <input type="integer" placeholder="days until expiration"
                        value={updatedDaysUntilExpiration}
                        onChange={(e) => setUpdatedDaysUntilExpiration(e.target.value)}/>
                        <input type="DateTime" placeholder="date of purchase"
                        value={updatedDateOfPurchase}
                        onChange={(e) => setUpdatedDateOfPurchase(e.target.value)}/>

                        <button type="submit" >Save</button>
                </form>
        ) : (null)}
        <button onClick={handleDeleteClick}>Delete</button>
                        </Typography>
                      </Box>
                    </Modal>
        <Img src={food.image_url} alt={food.name}></Img>
        <br />
        {food.name}
        <br />
        <Button onClick={handleOpen}>see more</Button>
        
        </Grid>
)
}
export default FoodCard;