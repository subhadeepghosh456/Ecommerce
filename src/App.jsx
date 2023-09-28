import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Browse from "./components/Browse";
import Home from "./components/Home";
import Login from "./components/Login";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Browse />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
      ],
    },
  ]);
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
