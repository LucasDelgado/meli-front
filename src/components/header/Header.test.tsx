import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Header";

describe("<Header />", () => {
  const MockComponent = () => (
    <BrowserRouter>
      {" "}
      <Header></Header>{" "}
    </BrowserRouter>
  );

  beforeEach(() => {
    render(<MockComponent />);
  });

  it("Se renderiza img de Meli", () => {
    const imgLogo = screen.getByAltText("Mercado Libre");
    expect(imgLogo).toBeInTheDocument();
  });

  it("Se renderiza nav", () => {
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });
});
