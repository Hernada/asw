import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../tailwind.css";
import { Link } from "react-router-dom";

const ListBarang = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const response = await axios.get("http://localhost:5000/listbarang");
    setList(response.data);
  };

  const deleteList = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/deletelist/${id}`);
      getList();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="twrap">
      <div className="flex flex-col">
        <span className="flex justify-center font-bold uppercase">
          List Barang
        </span>
        <nav className="flex space-x-10 items-center justify-center mt-2">
          <label className="bg-green-500 rounded-xl p-2 uppercase text-white font-bold">
            <Link to="addlist">ADD NEW LIST</Link>
          </label>
        </nav>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 rounded-lg">
            <table className="mt-1 min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-800">
                <tr>
                  <th className="sticky top-0 px-6 py-3 text-xs font-bold text-left text-white uppercase ">
                    Kode
                  </th>
                  <th className="sticky top-0 px-6 py-3 text-xs font-bold text-left text-white uppercase ">
                    Nama Barang
                  </th>
                  <th className="sticky top-0 px-6 py-3 text-xs font-bold text-left text-white uppercase ">
                    Jumlah
                  </th>
                  <th className="sticky top-0 px-6 py-3 text-xs font-bold text-left text-white uppercase ">
                    Satuan
                  </th>
                  <th className="sticky top-0 px-6 py-3 text-xs font-bold text-left text-white uppercase ">
                    Harga Beli
                  </th>
                  <th className="sticky top-0 px-6 py-3 text-xs font-bold text-left text-white uppercase ">
                    Harga Grosir
                  </th>
                  <th className="sticky top-0 px-6 py-3 text-xs font-bold text-left text-white uppercase ">
                    Harga Pack
                  </th>
                  <th className="sticky top-0 px-6 py-3 text-xs font-bold text-left text-white uppercase ">
                    Harga Satuan
                  </th>
                  <th className="sticky top-0 px-6 py-3 text-xs font-bold text-left text-white uppercase ">
                    Keterangan
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {list.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {user.brg_kode}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {user.brg_barang}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {user.brg_jumlah}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {user.brg_satuan}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {user.brg_hargabeli}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {user.brg_hrggrosir}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {user.brg_hrgpak}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {user.brg_hrgsatu}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {user.brg_keterangan}
                    </td>
                    <button
                      onClick={() => deleteList(user.id)}
                      className="px-6 py-3 text-xs font-bold text-right text-red-500 uppercase "
                    >
                      Delete
                    </button>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListBarang;
