import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { userReducer } from "../app/userSlice";

function render(
  ui: JSX.Element,
  {
    preloadedState,
    store = configureStore({
      reducer: { user: userReducer },
      preloadedState,
    }),
    ...renderOptions
  }: { preloadedState?: any; store?: any } = {}
) {
  function Wrapper({ children }: { children: JSX.Element }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";
export { render };
