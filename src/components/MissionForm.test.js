import React from "react";
import { render } from "@testing-library/react";
import MissionForm from "./MissionForm";

//simple test to see if form renders run npm test in terminal then "a"
test("MissionForm renders", () => {
  render(<MissionForm />);
});
