
const initialState = {
    list: [],
  };
  export default function listReducer(state = initialState, action) {
    switch (action.type) {
        case "MUSIC_LIST": {
            console.log("action", action.payload);
            if(action.payload.data && action.payload.status === 200) {
                let user = action.payload.data.results              
              return {
                  ...state,
                  list: user
              };
            } else {
              return {
                  ...state,
                  initialState
              };
            }
          }
        default:
          return {
              ... state
          };
      }
    }
   
  
  
  