import { matchInput } from "./word";

describe("matchInput", () => {
  it("should work form empty input", () => {
    const word = "window";
    expect(matchInput("", word)).toEqual([
      {
        wordlet: word,
        type: "NA",
      },
    ]);
  });

  it("should work for empty input & word", () => {
    expect(matchInput("", "")).toEqual([]);
  });

  it("should work for fully matched input", () => {
    const word = "window";
    expect(matchInput(word, word)).toEqual([
      {
        wordlet: word,
        type: "MATCH",
      },
    ]);
  });

  it("should work for fully mis-matched input", () => {
    const word = "window";
    expect(matchInput("123456", word)).toEqual([
      {
        wordlet: "123456",
        type: "MISMATCH",
      },
    ]);
  });

  it("should work for partial mis-matched input", () => {
    const word = "window";
    expect(matchInput("123", word)).toEqual([
      {
        wordlet: "123",
        type: "MISMATCH",
      },
      {
        wordlet: "dow",
        type: "NA",
      },
    ]);
  });

  it("should work for partial match & mis-match input", () => {
    const word = "window";
    expect(matchInput("winxw", word)).toEqual([
      {
        wordlet: "win",
        type: "MATCH",
      },
      {
        wordlet: "xw",
        type: "MISMATCH",
      },
      {
        wordlet: "w",
        type: "NA",
      },
    ]);
  });

  //
});
