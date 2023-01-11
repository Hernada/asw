import React, { useState } from "react";
import axios from "axios";
import "../../tailwind.css";
import { useHistory, Link } from "react-router-dom";

const Add = () => {
  const [name, setName] = useState("");
  const [noHp, setnoHp] = useState("");
  const [pin, setpin] = useState("");
  const [telepon, settelepon] = useState("");
  const [company, setcompany] = useState("");
  const [kategori, setkategori] = useState("");
  const [produk, setproduk] = useState("");
  const history = useHistory();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/create", {
        name,
        noHp,
        pin,
        telepon,
        company,
        kategori,
        produk,
      });
      history.push("/saleslist");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.msg);
      }
    }
  };
  return (
    <form onSubmit={saveUser}>
      <div className="flex rounded-xl min-h-screen bg-gray-800 w-full justify-center items-center">
        <div className="w-100 h-100 flex flex-col space-y-3 rounded-xl drop-shadow-xl justify-center items-center">
          <div className="flex-col flex">
            <label className="font-bold uppercase text-white">Name</label>
            <input
              type="text"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 rounded-xl"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </div>

          <div className="flex-col flex">
            <label className="font-bold uppercase text-white">NO HP</label>
            <input
              type="text"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 rounded-xl"
              value={noHp}
              onChange={(e) => setnoHp(e.target.value)}
              placeholder="No HP"
            />
          </div>

          <div className="flex-col flex">
            <label className="font-bold uppercase text-white">PIN</label>
            <input
              type="text"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 rounded-xl"
              value={pin}
              onChange={(e) => setpin(e.target.value)}
              placeholder="Pin"
            />
          </div>

          <div className="flex-col flex">
            <label className="font-bold uppercase text-white">telepon</label>
            <input
              type="text"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 rounded-xl"
              value={telepon}
              onChange={(e) => settelepon(e.target.value)}
              placeholder="Telepon"
            />
          </div>

          <div className="flex-col flex">
            <label className="font-bold uppercase text-white">company</label>
            <input
              type="text"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 rounded-xl"
              value={company}
              onChange={(e) => setcompany(e.target.value)}
              placeholder="Company"
            />
          </div>

          <div className="flex-col flex">
            <label className="font-bold uppercase text-white">kategori</label>
            <input
              type="text"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 rounded-xl"
              value={kategori}
              onChange={(e) => setkategori(e.target.value)}
              placeholder="Kategori"
            />
          </div>

          <div className="flex-col flex">
            <label className="font-bold uppercase text-white">produk</label>
            <input
              type="text"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 rounded-xl"
              value={produk}
              onChange={(e) => setproduk(e.target.value)}
              placeholder="Produk"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-green-500 px-6 py-3 mt-1 text-xs font-bold text-right uppercase text-white rounded-xl">ADD</button>
            <Link to="/saleslist">
              <button className="ml-2 bg-red-800 px-6 py-3 text-xs font-bold text-right text-white uppercase rounded-xl">Back</button>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Add;
