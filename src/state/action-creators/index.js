import axios from "axios";

const url = "https://menu-186bf-default-rtdb.firebaseio.com/";

export const getMenus = () => (dispatch) => {
  dispatch({ type: "menu_loading" });
  console.log("sample");
  axios
    .get(url + "menu.json")
    .then((res) => {
      const data = Object.keys(res?.data).map((key, i) => ({
        ...res?.data[key],
        id: key,
      }));

      dispatch({
        type: "menu_loaded",
        payload: data,
      });
    })
    .catch((err) => {
      alert("error");
    });
};

export const deleteMenu = (id) => (dispatch) => {
  dispatch({ type: "menu_loading" });
  axios
    .delete(url + "menu/" + id + ".json")
    .then((res) => {
      dispatch(getMenus());
    })
    .catch((err) => alert("error"));
};

export const postMenu = (data) => (dispatch) => {
  //Request body
  const body = JSON.stringify(data);

  axios
    .post(url + "menu.json", body)
    .then((res) => {
      dispatch(getMenus());
    })
    .catch((err) => alert("error"));
};

// export const updateMeeting = (id, title, status, date) => (dispatch) => {
//   dispatch({ type: "meeting_loading" });

//   //headers
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   //Request body
//   const body = JSON.stringify({ title, status, date });

//   console.log(JSON.stringify(body));
//   axios
//     .put(url + "/" + id, body, config)
//     .then((res) => {
//       dispatch(getMeetings());
//     })
//     .catch((err) => alert("error"));
// };
