import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Fragment } from "react";
// import Home from "./pages/Home";
// import Following from "./pages/Following";
import { publicRoutes } from "./routes";
import { Defautlayyou } from "./components/GlobalStyles/Layuot";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<Home />} />
        <Route path="/Following" element={<Following />} />= */}
          {publicRoutes.map((route, index) => {
            const Page = route.component;

            let Layuot = Defautlayyou;
            if (route.Layuot) {
              Layuot = route.Layuot;
            } else if (route.Layuot === null) {
              Layuot = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layuot>
                    <Page />
                  </Layuot>
                }
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
