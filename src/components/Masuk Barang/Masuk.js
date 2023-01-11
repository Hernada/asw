import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../tailwind.css";
import { Link } from "react-router-dom";

const MasukBarang = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/barang");
    setUser(response.data);
  };

  const deleteBarang = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/deletebarang/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <span className="flex justify-center font-bold uppercase">
        Barang Masuk
      </span>
      <nav className="flex space-x-10 items-center justify-center mt-2">
        <p className="bg-green-500 rounded-xl p-2 uppercase text-white font-bold">
          <Link to={`addbarang`}>Add New</Link>
        </p>
      </nav>
      <div className="twrap">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="px-6 py-3 text-xs font-bold text-center text-white uppercase ">
                      NO
                    </th>
                    <th className="px-6 py-3 text-xs font-bold text-center text-white uppercase ">
                      Tanggal
                    </th>
                    <th className="px-6 py-3 text-xs font-bold text-center text-white uppercase ">
                      Kode
                    </th>
                    <th className="px-6 py-3 text-xs font-bold text-center text-white uppercase ">
                      Nama Barang
                    </th>
                    <th className="px-6 py-3 text-xs font-bold text-center text-white uppercase ">
                      Jumlah
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {users.map((user, index) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap text-center">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
                        {user.waktu}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
                        {user.kode}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
                        {user.namabarang}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
                        {user.jumlah}
                      </td>

                      <Link
                        to={`/updatebarang/${user.id}`}
                        className="px-6 py-3 text-xs font-bold text-right text-blue-500 uppercase "
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() => deleteBarang(user.id)}
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
    </div>
  );
};

export default MasukBarang;
