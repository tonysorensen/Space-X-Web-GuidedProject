import React from "react";
import { getByTestId, render } from "@testing-library/react";
import MissionsList from "./MissionsList";

export const missionsFixture = [
  {
    mission_id: "bogusid",
    mission_name: "my bogus mission",
  },
];

test("MissionsList renders", () => {
  //will fail without passed props "missions"
  render(<MissionsList missions={[]} />);
});

test("MissionsList shows data when rerendered with new missions prop", () => {
  const { queryAllByTestId, rerender } = render(<MissionsList missions={[]} />);

  expect(queryAllByTestId("mission")).toStrictEqual([]);
  expect(queryAllByTestId("mission")).toHaveLength(0);

  //use mock data or "fixture" below to pass props to mission so you can run the test
  rerender(<MissionsList missions={missionsFixture} />);

  expect(queryAllByTestId("mission")).toHaveLength(1);
});

test("MissionsList renders an error when error is inidicated", () => {
  const errorText = "my error";
  const { getByTestId } = render(<MissionsList error={errorText} />);

  expect(getByTestId("missions-error").innerHTML).toBe(errorText);
});
