let defaultState = {
  users: [],
};

export const apiReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET": {
      // axios
      //   .get("https://gorest.co.in/public/v2/users", authToken)
      //   .then((res) => {
      //     console.log(res.data);

      //     setarray([...res.data]);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });

      return {
        users : action.data
      }
    }
    default: {
      return state;
    }
  }
};
