import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
// import Instamart from "./components/Instamart";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));
const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Haritha Sadanala",
    email: "haritha@gmail.com",
  });
  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
      <div className="min-h-screen flex flex-col">
      {/* Header component */}
      <Header />
      
      {/* Main content */}
      <div className="flex-grow">
        <Outlet />  {/* This is where your routed component renders */}
      </div>
      
      {/* Footer component */}
      <Footer />
    </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Body
           user={{
            name: "Haritha",
        emailId: "haritha@gmail.com",
          }}
          />
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
        children: [
          {
            //parentPath/{path} => localhost:1244/about/profile
            path: "profile", // if we give "/" it will consider like local host:1244/profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:restaurant_id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
