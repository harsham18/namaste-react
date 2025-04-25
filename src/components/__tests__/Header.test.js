/**
 * @jest-environment jsdom
 */
import { TextEncoder } from "util";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";

global.TextEncoder = TextEncoder;

it("should load the Header component", () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
    },
  ]);
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "Login" });
  expect(loginButton).toBeInTheDocument();
});
