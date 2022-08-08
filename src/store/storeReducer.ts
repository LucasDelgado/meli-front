const initialState = {
  loading: false,
};

type State = typeof initialState;

type Action = { type: "LOADING"; value: boolean };

const storeReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "LOADING": {
      return {
        ...state,
        loading: action.value,
      };
    }
  }
};

export { initialState, storeReducer };
