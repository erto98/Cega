import Navbar from "./navbar/navbar";
import Takim from "./Pages/Takim";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MDBDropdownLink } from "mdb-react-ui-kit";
import Login from "./components/user/Login";
import { Container } from "react-bootstrap";
import Modal from "./components/Modal";
import AuthContext from "./context/AuthContext";
import Loading from "./components/Loading"
import MainNotification from "./components/MainNotification"
import Upload from "./components/upload/Upload";
import Nav from "./components/Nav"

function App() {
  return (
    <>
    <Container>
      <AuthContext>
      <Loading />
      <MainNotification />
      <Modal />
      <MDBDropdownLink/>
      <Navbar />
      <Nav />
      <BrowserRouter>
      <Routes>
      <Route path="/:takim" element={<Takim />} />
      </Routes> 
      </BrowserRouter>
      </AuthContext>
      </Container>
      </>
  );
}

export default App;
