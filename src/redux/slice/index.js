import { combineReducers } from "redux";
import web3Reducer from "./web3.slice";
import userReducer from "./user.slice";
import gameReducer from "./game.slice";
import detailAppReducer from "./detailApp.slice";
import resultSearchReducer from "./search.slice";
import editAccountReducer from "./account.slice";
import customLayoutReducer from "./customLayout.slice";

export default combineReducers({
  web3: web3Reducer,
  user: userReducer,
  listGame: gameReducer,
  detailApp: detailAppReducer,
  resultSearch: resultSearchReducer,
  account: editAccountReducer,
  customLayout: customLayoutReducer,
});
