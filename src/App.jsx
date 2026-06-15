import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">

        {/* Sidebar */}
        <div className="col-2 bg-dark text-white min-vh-100 p-0">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="col-10 p-0">

          {/* Top Navbar */}
          <Navbar />

          {/* Page Content */}
          <div className="p-4">
            <AppRoutes />
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;