import { ActionType, createReducer } from 'typesafe-actions';
import { GameState, Player } from './game.types';
import * as actions from './game.action';
import * as types from './game.actionTypes';

export type GameAction = ActionType<typeof actions>;

const initialState: GameState = {
	isGameStarted: false,
	boardSize: 3,
	board: [],
	winner: null,
	currentPlayer: Player.X,
};

const gameReducer = createReducer<GameState, GameAction>(initialState)
	.handleType(types.SET_IS_GAME_STARTED, (state, action) => ({
		...state,
		isGameStarted: action.payload.isGameStarted,
	}))
	.handleType(types.SET_BOARD_SIZE, (state, action) => ({
		...state,
		boardSize: action.payload.boardSize,
	}))
	.handleType(types.SET_BOARD, (state, action) => ({
		...state,
		board: action.payload.board,
	}))
	.handleType(types.SET_WINNER, (state, action) => ({
		...state,
		winner: action.payload.winner,
	}))
	.handleType(types.SET_CURRENT_PLAYER, (state, action) => ({
		...state,
		currentPlayer: action.payload.currentPlayer,
	}));

export default gameReducer;
