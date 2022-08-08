import { screen, render, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Breadcumb } from "./Breadcumb";

const MockComponent = () => (
  <Breadcumb categories={["categoria1", "categoria2"]}></Breadcumb>
);

describe("<Breadcumb />", () => {
  beforeEach(() => {
    render(<MockComponent />);
  });

  it("Renderiza todos los elementos", () => {
    const listOfLinks = screen.getAllByRole("listitem");
    expect(listOfLinks.length).toBe(2);
  });
});
