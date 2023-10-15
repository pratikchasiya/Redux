import axios from "axios";

let authToken = {
  headers: {
    Authorization:
      "Bearer e84d6f2c3fa754cdd0fcf1b7b616d508ef9742c5935bd4d580c459c312673323",
  },
};

export const getUserData = () => {
  return (dispatch) => {
    axios
      .get("https://gorest.co.in/public/v2/users", authToken)
      .then((res) => {
        console.log(res);
        dispatch({ type: "GET", data: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addUserData = (obj) => {
  return (dispatch) => {
    axios
      .post("https://gorest.co.in/public/v2/users", obj, authToken)
      .then((res) => {
        console.log(res);
        dispatch(getUserData());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const editUserData = (obj) => {
  return (dispatch) => {
    axios
      .patch("https://gorest.co.in/public/v2/users", + obj.id, obj, authToken)
      .then((res) => {
        console.log(res);
        dispatch(getUserData());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteUserData = (id) => {
  return (dispatch) => {
    axios
      .delete("https://gorest.co.in/public/v2/users/" + id, authToken)
      .then((res) => {
        console.log(res);
        dispatch(getUserData());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
