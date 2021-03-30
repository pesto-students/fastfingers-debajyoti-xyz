import React from "react";
import { render, cleanup } from "@testing-library/react";
import useHistory from "./useHistory";

const TestHistory = ({ children }) => children(useHistory());

function setup() {
  const returnVal = {};
  render(
    <TestHistory>
      {([pathName, navigate]) => {
        Object.assign(returnVal, { pathName, navigate });
        return null;
      }}
    </TestHistory>
  );
  return returnVal;
}

/**
 * FIXME: jest dom's window.history.pushState & window.location.pathname are not in sync
 * Also updating window.location.pathname from inside it-block is not getting reflected in useHistory hook!
 */
describe.skip("useHistory hook", () => {
  let pushStateSpy;
  beforeAll(() => {
    console.log("beforeAll");
    pushStateSpy = jest.spyOn(global.window.history, "pushState");
  });

  beforeEach(() => {
    window.location.pathname = "/";
  });

  afterEach(() => {
    console.log("afterEach");
    cleanup();
    jest.resetAllMocks();
  });

  it("should get correct pathName at start", () => {
    const myHistory = setup();
    expect(myHistory.pathName).toBe("/");
  });

  it("should get correct pathName at start, on reload", () => {
    global.window.location.pathname = "/score";
    const myHistory = setup();
    expect(myHistory.pathName).toBe("/score");
  });

  it("should call history.pushState with correct params", () => {});

  it("should update pathname", () => {
    
  });
});
