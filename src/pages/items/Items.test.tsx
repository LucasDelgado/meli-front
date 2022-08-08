import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "../../store/storeProvider";
import { items as itemsMock } from "../../__mocks__/items";
import { Items } from "./Items";

const mockItems = itemsMock;

jest.mock("./hook/useItems", () => {
  return {
    useItems: () => {
      return [0, mockItems];
    },
  };
});

describe("<ItemsPage />", () => {
  const MockComponent = () => (
    <StoreProvider>
      <BrowserRouter>
        <Items />
      </BrowserRouter>
    </StoreProvider>
  );

  beforeEach(() => {
    render(<MockComponent />);
  }),
    it("No muestra page error cuando viene datos", async () => {
      await waitFor(() => {
        const errormsg = screen.queryByText("Error");
        expect(errormsg).toBeNull();
      });
    });

  it("se renderiza todas las categories", async () => {
    await waitFor(() => {
      const listOfLinks = screen.getAllByRole("listitem");
      expect(listOfLinks).toHaveLength(2);
    });
  });

  it("se renderiza el limite todos los items {{ 4 }}", async () => {
    await waitFor(() => {
      const ItemIdDetail = screen.getAllByRole("article");
      expect(ItemIdDetail).toHaveLength(4);
    });
  });
});
