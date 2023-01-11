import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../tailwind.css";
import { Link } from "react-router-dom";

const SalesList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/entri");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/delete/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const [searchQuery, setSearchQuery] = useState("");
  const updateSearchQuery = (query) => {
    setSearchQuery(query);
  };

  const [selectedOption, setSelectedOption] = useState("all");

  const updateSelectedOption = (option) => {
    setSelectedOption(option);
  };

  const filteredUsers = users.filter((user) => {
    if (selectedOption === "all") {
      return true;
    } else if (user.hasOwnProperty(selectedOption)) {
      return user[selectedOption]
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    } else {
      return false;
    }
  });

  return (
    <div className="overflow-x:auto">
      <span className="flex justify-center font-bold uppercase">
          Sales List
        </span>
      <nav className="flex space-x-10 items-center justify-center mt-2 mb-2 max-sm:mb-0 max-sm:flex-wrap-reverse">
        <p  className="bg-green-500 rounded-xl p-2 uppercase text-white font-bold mt-2">
          <Link to={`add`}>
            {" "}
            Add New
          </Link>
        </p>
        <div className="space-x-2">
        <input
        class="placeholder:italic placeholder:text-slate-400 bg-white border border-slate-300 rounded-md py-2 pr-3 shadow-sm focus:outline-none sm:text-sm" placeholder="Search for anything..." 
          type="search"
          value={searchQuery}
          onChange={(e) => updateSearchQuery(e.target.value)}/>
        <select onChange={(e) => updateSelectedOption(e.target.value)} className="bg-gray-800 rounded-xl p-1 text-white">
          <option value="all">All</option>
          <option value="name">Name</option>
          <option value="noHp">NoHp</option>
          <option value="pin">Pin</option>
          <option value="telepon">Telepon</option>
          <option value="company">Company</option>
          <option value="kategori">Kategori</option>
          <option value="produk">Produk</option>
        </select></div>
      </nav>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="px-6 py-3 text-xs font-bold text-center text-white uppercase">NO</th>
                    <th className="px-6 py-3 text-xs font-bold text-center text-white uppercase">
                      Name
                    </th>
                    <th className="px-6 py-3 text-xs font-bold text-center text-white uppercase">
                      NoHp
                    </th>
                    <th className="px-6 py-3 text-xs font-bold text-center text-white uppercase">
                      Pin
                    </th>
                    <th className="px-6 py-3 text-xs font-bold text-center text-white uppercase">
                      Telepon
                    </th>
                    <th className="px-6 py-3 text-xs font-bold text-center text-white uppercase">
                      Company
                    </th>
                    <th className="px-6 py-3 text-xs font-bold text-center text-white uppercase">
                      Produk
                    </th>
                    <th className="px-6 py-3 text-xs font-bold text-center text-white uppercase">
                      kategori
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user, index) => (
                    <tr className="border-b" key={user.id}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap text-center">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap text-center">
                        {user.name}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap text-center">
                        {user.noHp}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap text-center">
                        {user.pin}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap text-center">
                        {user.telepon}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap text-center">
                        {user.company}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap text-center">
                        {user.kategori}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap text-center">
                        {user.produk}
                      </td>

                      <Link
                        to={`update/${user.id}`}
                        className="px-6 py-3 text-xs font-bold text-right text-blue-500 uppercase "
                      >
                        {" "}
                        Edit{" "}
                      </Link>

                      <button
                        onClick={() => deleteUser(user.id)}
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

export default SalesList;
