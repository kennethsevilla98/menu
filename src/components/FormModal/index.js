import {
  Modal,
  Card,
  TextField,
  Grid,
  CardHeader,
  CardContent,
  Checkbox,
  FormControlLabel,
  CardActions,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postMenu } from "../../state/action-creators";
import { useStyles } from "./classes";

const FormModal = (props) => {
  const dispatch = useDispatch();

  const [withSizes, setWithSizes] = useState(false);
  const [product, setProduct] = useState();
  const [category, setCategory] = useState();
  const [available, setAvailable] = useState();
  const [price, setPrice] = useState();
  const [sizes, setSizes] = useState([]);

  const onSave = () => {
    props.onClose();
    dispatch(
      postMenu({
        product,
        category,
        available,
        price,
        sizes,
      })
    );
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "product") {
      setProduct(value);
    }
    if (name === "category") {
      setCategory(value);
    }
    if (name === "available") {
      setAvailable(value);
    }

    if (name === "price") {
      setPrice(value);
    }
  };

  const handleCheck = (e) => {
    setWithSizes(e.target.checked);
  };

  const { classes } = useStyles();

  useEffect(() => {
    if (withSizes) {
      setSizes([
        {
          S: price * 1,
        },
        {
          M: price * 1.5,
        },
        {
          L: price * 1.75,
        },
      ]);
    } else {
      setSizes(null);
    }
  }, [withSizes, price]);

  return (
    <Modal open={props.open}>
      <Card className={classes.container}>
        <CardHeader title="Add menu" />
        <CardContent>
          {" "}
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {" "}
              <TextField
                variant="outlined"
                fullWidth
                label="Product Name"
                name="product"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              {" "}
              <TextField
                variant="outlined"
                fullWidth
                label="Category"
                name="category"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              {" "}
              <TextField
                variant="outlined"
                fullWidth
                label="Available"
                name="available"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} textAlign="left">
              {" "}
              <FormControlLabel
                control={
                  <Checkbox checked={withSizes} onChange={handleCheck} />
                }
                label="with different sizes?"
              />
            </Grid>

            <Grid item xs={12}>
              {" "}
              <TextField
                variant="outlined"
                fullWidth
                label="Price"
                name="price"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            onClick={props.onClose}
          >
            Cancel
          </Button>
          <Button fullWidth variant="contained" onClick={onSave}>
            Save
          </Button>
        </CardActions>
      </Card>
    </Modal>
  );
};

export default FormModal;
