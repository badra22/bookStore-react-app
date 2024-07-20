import Navbar from "./components/shared/Navbar";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Create from "./components/pages/Create";
import { Route , Routes } from "react-router-dom";
import NotMatch from "./components/Error404/NotMatch";
import Details from "./components/pages/Details";
import Edit from "./components/pages/Edit";
import Footer from "./components/shared/Footer";

function App() {
    return ( 
        <>
        <Navbar />
        <Routes>
          {/* localhost:5173 */}
          <Route path="/" element={<Home />} />
          {/* localhost:5173/about */}
          <Route path="/create" element={<Create />} />
          {/* localhost:5173/contact */}
          <Route path="/details/:id" element={<Details />} />
          {/* localhost:5173/edit */}
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/contact" element={<Contact />} />
          {/* Not Match */}
          <Route path="*" element={<NotMatch />} />
        </Routes>
        <Footer />
        </>
     );
}

export default App;