import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("<Button />", () => {
  const mockFn = jest.fn();
  beforeEach(() => {
    render(<Button onClick={mockFn}>aca estoy</Button>);
  });

  it("Se renderiza", () => {
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("se renderiza el children", () => {
    const button = screen.getByText("aca estoy");
    expect(button).toBeInTheDocument();
  });

  it("Click funcion", () => {
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(mockFn).toHaveBeenCalled();
  });
});
