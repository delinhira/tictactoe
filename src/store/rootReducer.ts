import { combineReducers } from "redux";
import gameReducer from "./game/game.reducer";

const rootReducer = combineReducers({
  game: gameReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
