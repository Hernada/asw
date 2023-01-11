import React, { useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  const [name, setName] = useState("");
  const [noHp, setnoHp] = useState("");
  const [pin, setPin] = useState("");
  const [telepon, setTelepon] = useState("");
  const [company, setCompany] = useState("");
  const [kategori, setKategori] = useState("");
  const [produk, setProduk] = useState("");
  const history = useHistory();
  const { id } = useParams();


  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/update/${id}`, {
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
      console.log(error);
    }
  };


  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">NO HP</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={noHp}
                onChange={(e) => setnoHp(e.target.value)}
                placeholder="No Hp"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">PIN</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Pin"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Telepon</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={telepon}
                onChange={(e) => setTelepon(e.target.value)}
                placeholder="Telepon"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">COMPANY</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">KATEGORI</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={kategori}
                onChange={(e) => setKategori(e.target.value)}
                placeholder="Kategori"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">PRODUCT</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={produk}
                onChange={(e) => setProduk(e.target.value)}
                placeholder="Product"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
