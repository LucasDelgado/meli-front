import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { SearchBar } from "./Searchbar";

describe("<SearchBar />", () => {
  const MockComponent = () => (
    <BrowserRouter>
      {" "}
      <SearchBar></SearchBar>
    </BrowserRouter>
  );

  beforeEach(() => {
    const jsdomAlert = window.alert; // remember the jsdom alert
    window.alert = () => {};
    render(<MockComponent />);
  });

  it("Renderiza input con placeholder", () => {
    const input = screen.getByPlaceholderText("Nunca dejes de buscar");
    expect(input).toBeInTheDocument();
  });

  it("Renderiza button", () => {
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("tipeo en el input", () => {
    const input = screen.getByRole("textbox");
    userEvent.type(input, "casa");
    expect(input).toHaveValue("casa");
  });

  it("submit form", () => {
    const form = screen.getByRole("form");
    const button = screen.getByRole("button");
    const mockFn = jest.fn();
    form.onsubmit = mockFn;
    userEvent.click(button);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
