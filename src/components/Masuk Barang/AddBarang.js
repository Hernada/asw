import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import "../../tailwind.css";

const AddBarang = () => {
  const [waktu, setDate] = useState("");
  const [kode, setKode] = useState("");
  const [namabarang, setBarang] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [List, setList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const respose = await axios.get("http://localhost:5000/listbarang");
    setList(respose.data);
  };

  const InputKode = (kodeValue, barangValue) => {
    setKode(kodeValue);
    setBarang(barangValue);
  };

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/createbarang", {
        waktu,
        kode,
        namabarang,
        jumlah,
      });
      history.push("/barangmasuk");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.msg);
      }
    }
  };

  return (
    <form onSubmit={saveUser}>
      <div className="twrap">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 rounded-lg">
              <span>Klik Tabel untuk Isi Otomatis</span>
              <table className="min-w-full divide-y divide-gray-200">
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
                      Keterangan
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
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {List.map((user) => (
                    <tr key={user.id}>
                      <td
                        className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap cursor-pointer"
                        onClick={() =>
                          InputKode(user.brg_kode, user.brg_barang)
                        }
                      >
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
                        {user.brg_keterangan}
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
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col flex w-36 space-y-3 space-x-3">
        <input
          type="date"
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 rounded-xl"
          value={waktu}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 rounded-xl"
          value={kode}
          onChange={(e) => setKode(e.target.value)}
          placeholder="Kode"
        />
        <input
          type="text"
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 rounded-xl"
          value={namabarang}
          onChange={(e) => setBarang(e.target.value)}
          placeholder="Nama Barang"
        />
        <input
          type="number"
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 rounded-xl"
          value={jumlah}
          onChange={(e) => setJumlah(e.target.value)}
          placeholder="Jumlah"
        />
      </div>
      <div className="pt-3">
        <button
          type="submit"
          className="bg-green-500 px-6 py-3 text-xs font-bold text-right text-white uppercase rounded-xl"
        >
          ADD
        </button>
        <Link to="/barangmasuk">
          <button className="ml-2 bg-gray-800 px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase rounded-xl">
            Back
          </button>
        </Link>
      </div>
    </form>
  );
};

export default AddBarang;
