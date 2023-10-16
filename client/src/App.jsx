import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./components/Register";
import AllJobs from "./components/AllJobs"
import Login from "./components/Login";
// import Error from "./components/Error";
 import Hero from "./components/Hero";
// import ScrollToTop from "./components/ScrollToTop";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


const appRouter=createBrowserRouter([  //array of object 
    {path:"/",
    element:<App />,
    
    
    children:[
      { path: "/", element: <Hero /> },
       { path: "/jobs", element: <AllJobs /> },
      // { path: "/addJob", element: <CreateJob /> },
       { path: "/register", element: <Register /> },
       { path: "/login", element: <Login /> },      
    ]
}
])
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

const Root = () => {
  return <RouterProvider router={appRouter} />;
}

export default Root
