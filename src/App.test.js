import React from "react";
import {
  fireEvent,
  queryAllByTestId,
  render,
  wait,
  waitFor,
} from "@testing-library/react";
import App from "./App";
import { fetchMissions as mockFetchMissions } from "./api/fetchMissions";
import { missionsFixture } from "./components/MissionsList.test";

jest.mock("./api/fetchMissions");
// console.log(mockFetchMissions);

test("App renders", () => {
  render(<App />);
});

test("App fetches missions data and renders the data", async () => {
  mockFetchMissions.mockResolvedValueOnce({ data: missionsFixture });

  const { getByText, queryAllByTestId } = render(<App />);
  const button = getByText(/get data/i);

  fireEvent.click(button);

  getByText(/we are fetching data/i);
  await wait();
  expect(queryAllByTestId("mission")).toHaveLength(1);
});
