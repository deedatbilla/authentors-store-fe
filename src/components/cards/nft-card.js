import React from "react";
import { FiEdit2, FiTrash } from "react-icons/fi";
function NftCard({ data, handleDeleteItem, handleSelectedItem }) {
  const { preview, type, size, name, description, editions, royalties, id } =
    data;
  return (
    <div className="flex border border-white my-3">
      <img src={preview} className="w-4/12" alt="" />
      <div className="ml-3 w-full">
        <p>Item #{id}</p>
        <div className="mt-2 py-3 bg-slate-600 w-full">
          <p>Description: {description} </p>
          <p>Editions: {editions}</p>
          <p>Royalties: {royalties}%</p>
          <p>File: {name} </p>
          <p>Size: {size / 1000}kb </p>
          <p>Type: {type} </p>
        </div>
        <div className="flex space-x-3 justify-end m-3">
          <button
            onClick={() => handleSelectedItem(data)}
            className="border border-white p-2 rounded-md"
          >
            <FiEdit2 color="#fff" size={15} />
          </button>
          <button
            onClick={() => handleDeleteItem(id)}
            className="border border-white p-2 rounded-md"
          >
            <FiTrash color="#fff" size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NftCard;
