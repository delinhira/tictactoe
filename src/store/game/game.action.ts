import { action } from 'typesafe-actions';
import * as types from './game.actionTypes';
import { Player, Winner } from './game.types';

export const setIsGameStarted = (isGameStarted: boolean) => action(types.SET_IS_GAME_STARTED, { isGameStarted });

export const setBoardSize = (boardSize: number) => action(types.SET_BOARD_SIZE, { boardSize });

export const setBoard = (board: (Player | null)[][]) => action(types.SET_BOARD, { board });

export const setWinner = (winner: Winner) => action(types.SET_WINNER, { winner });

export const setCurrentPlayer = (currentPlayer: Player) => action(types.SET_CURRENT_PLAYER, { currentPlayer });
