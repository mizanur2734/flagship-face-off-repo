import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import Button from "../components/ui/Button";
import { IoMdCart } from "react-icons/io";
import { MdBookmarkAdd } from "react-icons/md";
import { addFavorite, addToCart, getCart } from "../utils";
import { CartContext } from "../provider/Context";

const PhoneDetails = () => {
  const { setCart } = useContext(CartContext);
  const data = useLoaderData();
  const { id } = useParams();
  const singlePhone = data.find((phone) => phone.id === parseInt(id));
  console.log(singlePhone);
  const {
    brand,
    name,
    model,
    image,
    price,
    description,
    storage,
    camera_info,
  } = singlePhone || {};
  const handleFavorite = () => {
    addFavorite(singlePhone);
  };
  const handleCart = () => {
    // save To Localstorage for persistency
    addToCart(singlePhone);
    // update state for instant ui change
    setCart(getCart());
  };
  return (
    <div className="w-full py-12">
      <img
        src={image}
        alt="Banner Img"
        className="w-full mx-auto md:w-auto mb-8"
      />
      {/* title and button */}
      <div className="flex justify-between">
        <h1 className="text-5xl font-thin mb-8">{name}</h1>
        <div className="flex space-x-4">
          <Button onClick={handleCart} label={<IoMdCart />} />
          <Button onClick={handleFavorite} label={<MdBookmarkAdd />} />
        </div>
      </div>
      {/* details */}
    </div>
  );
};

export default PhoneDetails;
