import StringCalculator from "@/components/StringCalculator";
import { render, screen } from "@testing-library/react";

describe("StringCalculator", () => {
  test("renders correctly", () => {
    render(<StringCalculator />);

    const headingElement = screen.getByRole("heading", {
      name: "String Calculator",
    });
    expect(headingElement).toBeInTheDocument();
  });
});
