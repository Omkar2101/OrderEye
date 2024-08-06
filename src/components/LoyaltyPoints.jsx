import React, { useEffect, useState } from "react";

import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

function LoyaltyPoints() {
  const [formData, setFormData] = useState({
    earnings: 0,
    orderAmount: "",
    minAmount:"",
    pointsValidity: "",
    redemptionPoints: 0,
    redemptionPercentage: "",
    earningPoints: 0,
  });

  useEffect(() => {
    const fetchdata=async()=>{
    const data={
    earnings: 100,
    orderAmount: "$20",
    minAmount:"$20",
    pointsValidity: 30,
    redemptionPoints: 500,
    redemptionPercentage: 75,
    earningPoints: 5000,

    }
    setFormData(data);
    }
    fetchdata()
  }, [])
  // useEffect(() => {
  //   console.log("Updated formData: ", formData);
  // }, [formData]);
  

  const [isChecked, setIsChecked] = useState(false);
  function handleToggle() {
    setIsChecked(!isChecked);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(value);
    
    setFormData({ ...formData, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="container bg-gray-100 mx-auto p-10">
      <div className="bg-white shadow-md rounded-lg p-12">
        <h1 className="font-bold text-2xl mb-8">Loyalty Points</h1>
        <div className="absolute  top-2 right-[10vw]">
          <FormControlLabel
            control={
              <Switch
                checked={isChecked}
                onChange={handleToggle}
                color="primary"
              />
            }
            
          />
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Loyalty points earning criteria */}
          <div className="grid  grid-cols-2 items-start gap-4">
            <label className="self-center">
              Loyalty points earning criteria
              <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-2">
              <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-1/2">
                <input
                  type="number"
                  name="earnings"
                  value={formData.earnings}
                  onChange={handleChange}
                  className="border-none outline-none py-2 px-3 w-full"
                />
                <span className="bg-gray-200 text-gray-700 py-2 px-3">Points</span>
              </div>
              <span>=</span>
              <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-1/2">
                <input
                  type="text"
                  name="orderAmount"
                  value={formData.orderAmount}
                  onChange={handleChange}
                  className="border-none outline-none py-2 px-3 w-full"
                />
                <span className=" text-gray-700 py-2 px-3">Amount</span>
              </div>
            </div>
          </div>

          {/* Minimum order amount for earning */}
          <div className="grid grid-cols-2 items-start gap-4">
            <label className="self-center">
              Minimum order amount for earning
              <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-1/2">
              <input
                type="text"
                name="minAmount"
                value={formData.minAmount}
                onChange={handleChange}
                className="border-none outline-none py-2 px-3 w-full"
              />
              <span className=" text-gray-700 py-2 px-3">Amount</span>
            </div>
          </div>

          {/* Loyalty points validity */}
          <div className="grid grid-cols-2 items-start gap-4">
            <label className="self-center">
              Loyalty points validity
              <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-1/2">
              <input
                type="number"
                name="pointsValidity"
                value={formData.pointsValidity}
                onChange={handleChange}
                className="border-none outline-none py-2 px-3 w-full"
              />
              <span className=" text-gray-700 py-2 px-3">Days</span>
            </div>
          </div>

          {/* Minimum loyalty points for redemption */}
          <div className="grid grid-cols-2 items-start gap-4">
            <label className="self-center">
              Minimum loyalty points for redemption
              <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-1/2">
              <input
                type="number"
                name="redemptionPoints"
                value={formData.redemptionPoints}
                onChange={handleChange}
                className="border-none outline-none py-2 px-3 w-full"
              />
              <span className=" text-gray-700 py-2 px-3">Points</span>
            </div>
          </div>

          {/* Maximum redemption amount percentage */}
          <div className="grid grid-cols-2 items-start gap-4">
            <label className="self-center">
              Maximum redemption amount percentage
              <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-1/2">
              <input
                type="number"
                name="redemptionPercentage"
                value={formData.redemptionPercentage}
                onChange={handleChange}
                className="border-none outline-none py-2 px-3 w-full"
              />
              <span className=" text-gray-700 py-2 px-3">%</span>
            </div>
          </div>

          {/* Maximum earning points */}
          <div className="grid grid-cols-2 items-start gap-4">
            <label className="self-center">
              Maximum earning points
              <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-1/2">
              <input
                type="number"
                name="earningPoints"
                value={formData.earningPoints}
                onChange={handleChange}
                className="border-none outline-none py-2 px-3 w-full"
              />
              <span className=" text-gray-700 py-2 px-3">Points</span>
            </div>
          </div>

          {/* Save button */}
          <div className="flex justify-end">
            <button
              type="submit"
              onClick={handleChange}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoyaltyPoints;
