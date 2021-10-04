import Grid from '@mui/material/Grid';
import { useState } from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



function RecipeCard({recipe}) {

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

      const handleOpen = () => setOpen(true);
        const handleClose = (e) => {e.stopPropagation(); setOpen(false);}

    return (
        <Grid item sm onClick={handleOpen}>
            <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description">
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
                          {recipe.title}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          text
                        </Typography>
        </Box>
        </Modal>
        <p>{recipe.title}</p>
        </Grid>
    )
}
export default RecipeCard;