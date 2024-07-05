import styles from "./App.css";
// import BasicClass from "./components/BasicClass";
// import BasicFunction from "./components/BasicFunction";
// import BasicProp from "./components/BasicProp";
// import BasicState from "./components/BasicState";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Header from "./components/header";
import About from "./components/HIT/About";
import Footer from "./components/HIT/Footer";
import Slider from "./components/HIT/Slider";
import { Routing } from "./components/HIT/Routing";
// import Mounting from "./components/HIT/Lifecycles/Mounting";
import UnMounting from "./components/HIT/Lifecycles/UnMounting";
import BasicRead from "./components/HIT/CRUD/BasicRead";
import AddBatches from "./components/HIT/CRUD/AddBatches";
import CustRead from "./components/HIT/CRUD/CustRead";
import StateEx from "./components/Hooks/StateEx";
import SendEnquiry from "./components/Hooks/sendEnquiry";
import Batches from "./components/HIT/Batches";
import ContactFn from "./components/HIT/ContactFn";
import ViewBatches from "./components/HIT/ViewBatches";
import Students from "./components/HIT/Student";
import HrLogin from "./components/HIT/Admin/HrLogin";
import LatestNews from "./components/HIT/LatestNews";
import AddNews from "./components/HIT/CRUD/AddNews";
import "react-toastify/dist/ReactToastify.css";
import AddCourse from "./components/HIT/Admin/AddCourse";

function App() {
  return (
    <div className="App">
      {/* <BasicFunction />
      <BasicClass name="jinna" />
      <BasicProp name="website creation" />
      <BasicState /> */}
      <Header />
      <Routing />
      {/* <Slider /> */}
      {/* <Batches /> */}
      {/* <Mounting /> */}
      {/* <UnMounting /> */}
      {/* <BasicRead /> */}
      {/* <CustRead /> */}
      {/* <AddBatches /> */}
      {/* <ContactFn /> */}
      {/* <LatestNews /> */}
      {/* <StateEx /> */}
      {/* <SendEnquiry /> */}
      {/* <Footer /> */}
      {/* <ViewBatches /> */}
      {/* <Students /> */}
      {/* <ViewBatches /> */}
      {/* <AddCourse /> */}
    </div>
  );
}

export default App;
