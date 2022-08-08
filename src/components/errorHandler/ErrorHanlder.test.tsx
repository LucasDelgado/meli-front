import { render, screen } from "@testing-library/react";
import { ErrorHandler } from "./ErrorHandler";

describe("<ErrorHandler />", () => {
  it("Se renderiza element de 404", () => {
    render(<ErrorHandler status={404} />);
    const errorHandler = screen.getByText("Error 404");
    expect(errorHandler).toBeInTheDocument();
  });

  it("Se renderiza element default", () => {
    render(<ErrorHandler status={undefined as any} />);
    const errorHandler = screen.getByText("Error generico");
    expect(errorHandler).toBeInTheDocument();
  });
});
