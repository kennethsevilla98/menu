import { Grid, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AppBarComponent from "./components/AppBarComponent";
import FoodCard from "./components/FoodCard";
import FormModal from "./components/FormModal";
import { deleteMenu, getMenus } from "./state/action-creators";

function App() {
  const menu = useSelector((state) => state.menus?.data);
  const dispatch = useDispatch();
  const [editMenu, setEditMenu] = useState(false);
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onDelete = (id) => {
    console.log(id);
    dispatch(deleteMenu(id));
  };

  useEffect(() => {
    dispatch(getMenus());
  }, [dispatch]);

  return (
    <>
      <AppBarComponent
        onEdit={() => {
          setEditMenu(!editMenu);
        }}
        edit={editMenu}
      >
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Box sx={{ width: "100%", height: "100px" }}></Box>
          </Grid>
          {menu.map((item, i) => (
            <Grid item xs={6} md={3} key={i}>
              <FoodCard item={item} edit={editMenu} onDelete={onDelete} />
            </Grid>
          ))}
          {editMenu && (
            <Grid item xs={6} md={3}>
              <FoodCard add addProps={{ onClick: onOpen }} />
            </Grid>
          )}
        </Grid>
      </AppBarComponent>
      <FormModal open={open} onClose={onClose} />
    </>
  );
}

export default App;
