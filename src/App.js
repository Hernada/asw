import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import AuthForm from "./components/Login&Register/Login";
import Navbar from "./components/Dashboard/Navbar";
import SalesList from "./components/Entri Sales/SalesList";
import Add from "./components/Entri Sales/Add";
import EditUser from "./components/Entri Sales/EditUser";
import MasukBarang from "./components/Masuk Barang/Masuk";
import ListBarang from "./components/ListBarang/List";
import UpdateBarang from "./components/Masuk Barang/UpdateBarang";
import AddBarang from "./components/Masuk Barang/AddBarang";
import AddList from "./components/ListBarang/addList";
import LaporanPicker from "./components/Laporan/laporan";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <AuthForm />
        </Route>
        <Route path="/dashboard">
          <Navbar />
          <Dashboard />
        </Route>
        <Route path="/saleslist">
          <Navbar />
          <SalesList />
        </Route>
        <Route path="/barangmasuk">
          <Navbar />
          <MasukBarang />
        </Route>
        <Route path="/add">
          <Add />
        </Route>
        <Route path="/listbarang">
          <Navbar />
          <ListBarang />
        </Route>
        <Route path="/laporan">
          <Navbar/>
          <LaporanPicker/>
        </Route>
        <Route path="/addbarang">
          <AddBarang />
        </Route>
        <Route path="/addlist">
          <AddList />
        </Route>
        <Route path="/update/:id" element={EditUser}>
          <EditUser />
        </Route>
        <Route path="/updatebarang/:id" element={UpdateBarang}>
          <UpdateBarang />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
