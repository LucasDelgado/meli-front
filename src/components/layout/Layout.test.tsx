import { screen, render, waitFor } from "@testing-library/react";
import { Helmet } from "react-helmet";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";

const MockComponent = () => (
  <BrowserRouter>
    <Helmet>
      <title>Mercado Libre Argentina</title>
    </Helmet>
    <Layout></Layout>
  </BrowserRouter>
);

describe("<Layout />", () => {
  beforeEach(() => {
    render(<MockComponent />);
  });

  it("renderiza", () => {
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });

  it("titulo del <head>", async () => {
    await waitFor(() => {
      expect(document.title).toEqual("Mercado Libre Argentina");
    });
  });
});
