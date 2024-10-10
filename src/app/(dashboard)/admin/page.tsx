import CountChart from "@/components/CountChart";
import UserCard from "@/components/UserCard";
import React from "react";
import SalesChart from "@/components/SalesChart";
import FinanceChart from "@/components/FinanceChart";
import EventCalender from "@/components/EventCalender";
import Notice from "@/components/Notice";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* Left Area */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* show users */}

        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="Salesman" />
          <UserCard type="Manager" />
          <UserCard type="Total" />
        </div>

        {/* Chart section 1 */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* Chart component */}
          <div className="w-full lg:w-1/3 h-[450px] ">
            <CountChart />
          </div>
          <div className="w-full lg:w-2/3 h-[450px]">
            <SalesChart />
          </div>
        </div>

        {/* Chart section 2 */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>

      {/* Right area */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalender />
        <Notice />
      </div>
    </div>
  );
};

export default AdminPage;
