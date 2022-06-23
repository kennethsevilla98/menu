import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  Button,
  Box,
  Chip,
  Avatar,
  CardMedia,
} from "@mui/material";
import { AddBox, Close } from "@mui/icons-material";
import fastfood from "../../assets/images/fastfood.jpg";

const FoodCard = (props) => {
  const [price, setPrice] = useState(props.item?.price);

  return (
    <Box position={"relative"}>
      <Card
        sx={{
          maxWidth: 300,
          minHeight: 310,
          bgcolor: "#FFFCF3",
        }}
      >
        {!props.add && (
          <>
            <CardMedia
              component="img"
              height="auto"
              image={fastfood}
              alt="food"
            />
            <CardContent>
              <Typography>{props.item?.product}</Typography>
              <Divider />

              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                height="20px"
                marginTop={"5px"}
              >
                {props.item.sizes !== undefined &&
                  Object.values(props.item.sizes).map((item, i) => (
                    <Chip
                      key={i}
                      label={Object.keys(item)}
                      sx={{
                        fontSize: ".75em",
                        padding: "1px",
                        height: "20px",
                        width: "40px",
                      }}
                      onClick={() => setPrice(Object.values(item))}
                    />
                  ))}
              </Box>
            </CardContent>

            <CardActions sx={{ flexDirection: "column" }}>
              <Typography textAlign={"left"} fontWeight="bold">
                {"P " + props.item.price !== undefined &&
                  parseInt(price).toFixed(2)}
              </Typography>
              <Button fullWidth variant="contained">
                Place Order
              </Button>
            </CardActions>
            {props.edit && (
              <Avatar
                style={{
                  position: "absolute",
                  top: -10,
                  right: -10,
                  zIndex: 999,
                  height: "25px",
                  width: "25px",
                  backgroundColor: "red",
                }}
                onClick={() => props.onDelete(props.item.id)}
              >
                <Close fontSize="xs" />
              </Avatar>
            )}
          </>
        )}
        {props.add && (
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            height={310}
            backgroundColor={"gray"}
            onClick={props.addProps.onClick}
          >
            <AddBox fontSize="large" />
          </Box>
        )}
      </Card>
    </Box>
  );
};

export default FoodCard;
