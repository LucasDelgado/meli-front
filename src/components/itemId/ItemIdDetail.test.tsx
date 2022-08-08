import { render, screen, waitFor } from "@testing-library/react";
import { Helmet } from "react-helmet";
import { BrowserRouter } from "react-router-dom";
import { itemDetail as ItemIdDetailMock } from "../../__mocks__/itemDetail";
import { ItemIdDetail } from "./ItemIdDetail";

describe("<ItemIdDetail />", () => {
  const MockComponent = () => (
    <BrowserRouter>
      {" "}
      <ItemIdDetail item={ItemIdDetailMock}></ItemIdDetail>
    </BrowserRouter>
  );

  beforeEach(() => {
    render(<MockComponent />);
  });

  it("Se renderiza", () => {
    const ItemIdDetail = screen.getByRole("article");
    expect(ItemIdDetail).toBeInTheDocument();
  });

  it("titulo del <head> cambia al del item", async () => {
    await waitFor(() => {
      expect(document.title).toEqual("Test");
    });
  });

  it("renderiza la imagen", () => {
    const img = screen.getByAltText("Test");
    expect(img).toBeInTheDocument();
  });

  it("renderiza el string correcto segun la moneda", () => {
    const currency = screen.getByText("$", { exact: false });
    expect(currency).toBeInTheDocument();
  });
});
