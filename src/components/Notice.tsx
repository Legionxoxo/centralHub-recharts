import React from "react";

const Notice = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Notice</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>

      {/* Notices */}
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-light rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Monthly Bonus </h2>
            <span className="text-xs text-gray-600 bg-white rounded-md px-1 py-1">
              10-10-2024
            </span>
          </div>
          <p className="text-sm text-gray-800 mt-1">
            Check your Monthly Bonus! Report any issues. Terms and Conditions
            apply as per the contract
          </p>
        </div>
        <div className="bg-secondary rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Monthly Target </h2>
            <span className="text-xs text-gray-600 bg-white rounded-md px-1 py-1">
              10-10-2024
            </span>
          </div>
          <p className="text-sm text-gray-800 mt-1">
            Check your Monthly Target! Report any issues. Terms and Conditions
            apply as per the contract
          </p>
        </div>
        <div className="bg-light rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Holidays </h2>
            <span className="text-xs text-gray-600 bg-white rounded-md px-1 py-1">
              10-10-2024
            </span>
          </div>
          <p className="text-sm text-gray-800 mt-1">
            Check your Monthly Holidays! Report any issues. Terms and Conditions
            apply as per the contract
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notice;
