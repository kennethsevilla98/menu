import { makeStyles } from "tss-react/mui";
export const useStyles = makeStyles()((theme) => ({
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "350px",
    textAlign: "center",
    padding: "1vh",
  },
}));
