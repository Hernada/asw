import axios from "axios";
import React, { useState } from "react";
import "../../tailwind.css";
import { useHistory, Link } from "react-router-dom";

const AddList = () => {
  const [brg_kode, setKode] = useState("");
  const [brg_barang, setBarang] = useState("");
  const [brg_jumlah, setJumlah] = useState("");
  const [brg_satuan, setSatuan] = useState("");
  const [brg_hargabeli, setHargabeli] = useState("");
  const [brg_hrggrosir, setGrosir] = useState("");
  const [brg_hrgpak, setPack] = useState("");
  const [brg_hrgsatu, setHargasatuan] = useState("");
  const [brg_keterangan, setKeterangan] = useState("");
  const history = useHistory();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/addlist", {
        brg_kode,
        brg_barang,
        brg_satuan,
        brg_hargabeli,
        brg_jumlah,
        brg_hrggrosir,
        brg_hrgpak,
        brg_hrgsatu,
        brg_keterangan,
      });
      history.push("/listbarang");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.msg);
      }
    }
  };

  return (
    <form onSubmit={saveUser}>
      <div className="flex rounded-xl min-h-screen bg-gray-800 w-full justify-center items-center">
        <div className="w-100 h-100 flex flex-col space-y-1 rounded-xl drop-shadow-xl justify-center items-center">
          <label className="font-bold text-white">Kode</label>
          <div className="control">
            <input
              type="text"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 rounded-xl"
              value={brg_kode}
              onChange={(e) => setKode(e.target.value)}
              placeholder="Kode"
            />
          </div>

          <label className="font-bold text-white">Nama Barang</label>
          <div className="control">
            <input
              type="text"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 rounded-xl"
              value={brg_barang}
              onChange={(e) => setBarang(e.target.value)}
              placeholder="Nama Barang"
            />
          </div>

          <label className="font-bold text-white">Jumlah</label>
          <div className="control">
            <input
              type="text"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 rounded-xl"
              value={brg_jumlah}
              onChange={(e) => setJumlah(e.target.value)}
              placeholder="Jumlah"
            />
          </div>

          <label className="font-bold text-white">Satuan</label>
          <div className="control">
            <input
              type="text"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 rounded-xl"
              value={brg_satuan}
              onChange={(e) => setSatuan(e.target.value)}
              placeholder="Satuan"
            />
          </div>

          <label className="font-bold text-white">Harga Beli</label>
          <div className="control">
            <input
              type="text"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 rounded-xl"
              value={brg_hargabeli}
              onChange={(e) => setHargabeli(e.target.value)}
              placeholder="Harga Beli"
            />
          </div>

          <label className="font-bold text-white">Harga Grosir</label>
          <div className="control">
            <input
              type="text"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 rounded-xl"
              value={brg_hrggrosir}
              onChange={(e) => setGrosir(e.target.value)}
              placeholder="Harga Grosir"
            />
          </div>

          <label className="font-bold text-white">Harga Pack</label>
          <div className="control">
            <input
              type="text"
              className="mt-1 px-3 py-2 border shadow-sm border-slate-300 rounded-xl"
              value={brg_hrgpak}
              onChange={(e) => setPack(e.target.value)}
              placeholder="Harga Pack"
            />
          </div>

          <label className="font-bold text-white">Harga Satuan</label>
          <div className="control">
            <input
              type="text"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 rounded-xl"
              value={brg_hrgsatu}
              onChange={(e) => setHargasatuan(e.target.value)}
              placeholder="Harga Satua"
            />
          </div>

          <label className="font-bold text-white">Keterangan</label>
          <div className="control">
            <input
              type="text"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 rounded-xl"
              value={brg_keterangan}
              onChange={(e) => setKeterangan(e.target.value)}
              placeholder="Keterangan"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-green-500 px-6 py-3 mt-1 text-xs font-bold text-right uppercase text-white rounded-xl"
            >
              ADD
            </button>
            <Link to="/listbarang">
              <button className="ml-2 bg-red-800 px-6 py-3 text-xs font-bold text-right text-white uppercase rounded-xl">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddList;
