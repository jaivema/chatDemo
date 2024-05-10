import Footer from './Footer.jsx'
import Header from "./Header.jsx";
import { Outlet, Link } from "react-router-dom";

export default function Layout () {

  return (
    <>
      <nav>
        <div>
          <Header />
        </div>
        <div >
          <Link to="/home">Home</Link>
          <br/>
          <Link to="/chat">Chat</Link>
          <br />
          <br />
        </div>
      </nav>

      <div style={{ width: "80%" }}>
        <Outlet />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}