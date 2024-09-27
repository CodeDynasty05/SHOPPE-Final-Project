"use client";
import { buy, setDiscount, setOrders } from "@/app/Slices/BasketSlice";
import BasketProducts from "@/components/BasketProducts";
import IProduct from "@/interfaces/_common/IProduct";
import { RootState } from "@/lib/store";
import { _COUNTRIES, coupons } from "@/utils/constants";
import { getDate } from "@/utils/helpers";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";

const CartPage = () => {
  const [code, setCode] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [country, setCountry] = useState("");
  const [shipPrice, setShipPrice] = useState(0);
  const dispatch = useDispatch();
  const basket = useSelector(
    (state: RootState) => state.basket.basket
  ) as IProduct[];

  let totalPrice = useSelector((state: RootState) => state.basket.totalPrice);
  const discount = useSelector((state: RootState) => state.basket.discount);
  const handleClick = () => {
    const coupon = coupons.find((coupon) => coupon.code === code);
    if (coupon) {
      setIsInvalid(false);
      dispatch(setDiscount(coupon.discount));
    } else {
      setIsInvalid(true);
    }
  };
  const handleShipping = () => {
    if (country) {
      const shipCost =
        _COUNTRIES.find((c) => c.id === +country)?.shippingCost || 0;
      setShipPrice(shipCost);
    }
  };
  const handleBuy = () => {
    if (basket.length > 0 && city && zip && country) {
      const order = {
        id: v4(),
        basket,
        date: getDate(),
        status: "Delivered",
        totalPrice,
        discount,
        shipPrice,
        city,
        zip,
        country,
      };
      dispatch(setOrders(order));
      dispatch(buy());
    } else {
      alert(
        "Please add some items to your basket and fill in the shipping details"
      );
    }
  };
  return (
    <div>
      <h2 className="text-3xl font-medium text-center">Shopping Cart</h2>
      <div className="flex justify-between px-24">
        <div className="flex flex-col gap-4 py-4 h-full w-1/3">
          <div className="flex flex-col gap-4 py-4 h-[50vh] overflow-auto">
            {basket.length ? (
              basket.map((product) => (
                <BasketProducts key={product.id} {...product} />
              ))
            ) : (
              <p className="text-center text-xl pt-10">Your basket is empty</p>
            )}
          </div>
          <div className="w-full border-1 border-gray-300 my-6"></div>
          <div className="flex justify-between gap-4">
            <Input
              type="text"
              placeholder="Enter coupon code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              isInvalid={isInvalid}
              errorMessage="Invalid coupon code"
            />
            <Button
              type="submit"
              className="bg-black text-white"
              onClick={handleClick}
            >
              Apply
            </Button>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-medium my-12">Cart Totals</h3>
          <div className="flex justify-between gap-24">
            <div className="flex flex-col gap-4 ml-5">
              <p className="text-xl font-medium uppercase">Subtotal</p>
              <p className="text-xl font-medium uppercase">shipping</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-gray-500">${totalPrice}</p>
              <p className="text-gray-500 w-1/2">
                Shipping costs will be calculated once you have provided
                address.
              </p>
              <div className="w-1/2 flex flex-col gap-4">
                <h4>Calculate Shipping</h4>
                <Select
                  items={_COUNTRIES}
                  placeholder="SELECT A COUNTRY"
                  className="max-w-xs"
                  aria-label="Select a country"
                  variant="bordered"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  {(c) => <SelectItem key={c.id}>{c.name}</SelectItem>}
                </Select>
                <Input
                  placeholder="CITY"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <Input
                  placeholder="POST CODE / ZIP"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                />
                <Button
                  type="submit"
                  variant="bordered"
                  fullWidth
                  className="bg-white border-black p-6"
                  onClick={handleShipping}
                >
                  UPDATE TOTALS
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full border-1 border-gray-300 my-6"></div>
          <div>
            <div className="flex justify-between">
              <p className="text-xl font-medium">TOTAL</p>
              <p>${totalPrice - (totalPrice * discount) / 100 + shipPrice}</p>
            </div>
            <Button
              variant="solid"
              className="my-12 bg-black text-white p-8 text-2xl"
              fullWidth
              onClick={handleBuy}
            >
              Buy
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
