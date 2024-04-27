import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Carousels from "./component/Carousels";
import ProjectCarousels from "./component/ProjectCarousels";
import Services from "./component/Services";
import Profile from "./component/Profile";
import Footer from "./component/Footer";
import AllCards from "./component/AllCards";
import MyCard from "./component/MyCard";
function App() {
  return (
    <div className="container-fluid main" >
      <Navbar />
      <Carousels />
      <MyCard />
      <div
        style={{
          width: "",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "1rem",
        }}
      >
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <h1> Running Project</h1>
          <div
            style={{
              border: "2px solid #0a494f",
              borderRadius: "12px",
              width: "22vw",
            }}
          ></div>
        </div>

        {/* <p>All projeckt are runnig sdkljflksdjflkjsd f</p> */}
      </div>
      <div style={{}} className="projectCrousal">
        <AllCards />
      </div>

      <h1 style={{ textAlign: "center" }}>Our Client</h1>
      <Services />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
