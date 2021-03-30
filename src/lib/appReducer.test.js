import appReducer from "./appReducer";
import { Action, GameLevel, DifficultyFactorByLevel } from "./constant";
import { defaultValue } from "./AppContext";

const initialState = defaultValue.state;

describe("appReducer", () => {
  it("should set user name", () => {
    const prevState = initialState;
    const action = { type: Action.SET_USER_NAME, payload: "Debajyoti" };
    const nextState = appReducer(prevState, action);
    expect(nextState).toEqual({
      ...prevState,
      playerName: action.payload,
    });
  });

  it("should set game level", () => {
    const prevState = initialState;
    const action = {
      type: Action.SET_GAME_LEVEL,
      payload: GameLevel.LEVEL_HARD,
    };
    const nextState = appReducer(prevState, action);
    expect(nextState).toEqual({
      ...prevState,
      gameLevel: GameLevel.LEVEL_HARD,
    });
  });

  it("should add score object properly", () => {
    const prevState = initialState;
    const startAt = Date.now();
    const score = {
      startAt,
      startDifficultyFactory: DifficultyFactorByLevel[GameLevel.LEVEL_EASY],
      endDifficultyFactory: DifficultyFactorByLevel[GameLevel.LEVEL_EASY] + 1,
      timeElasped: startAt + 6 * 1000,
    };
    const action = { type: Action.ADD_GAME_SCORE, payload: score };
    const nextState = appReducer(prevState, action);
    expect(nextState).toEqual({
      ...prevState,
      scoreList: [
        {
          ...score,
          gameCount: 1,
        },
      ],
    });
  });

  it.skip("should retain top score", () => {
    // TODO
    expect(true).toBe(false);
  });
});
