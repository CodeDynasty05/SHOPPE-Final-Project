"use client";
import IOrder from "@/interfaces/IOrder";
import { RootState } from "@/lib/store";
import React, { Key } from "react";
import { useSelector } from "react-redux";

const AccountPage = () => {
  const orders = useSelector(
    (state: RootState) => state.basket.orders
  ) as IOrder[];
  return (
    <div>
      <h2 className="text-3xl font-medium text-center">Orders</h2>
      <table className="w-full text-center border-collapse">
        <thead className="border-b-1 border-black">
          <tr>
            <th className="p-8">Order Number</th>
            <th className="p-8">Date</th>
            <th className="p-8">Status</th>
            <th className="p-8">Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr className="border-b-1 border-gray-400" key={order.id as Key}>
              <td className="p-8">{order.id}</td>
              <td className="p-8">{order.date}</td>
              <td className="p-8">{order.status}</td>
              <td className="p-8">$ {order.totalPrice.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountPage;
