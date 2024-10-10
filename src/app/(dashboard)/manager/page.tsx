import BigCalendar from "@/components/BigCalendar";
import Notice from "@/components/Notice";
import React from "react";

const ManagerPage = () => {
  return (
    <div className=" flex-1 p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT AREA */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule</h1>
          <BigCalendar />
        </div>
      </div>

      {/* RIGHT AREA */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Notice />
      </div>
    </div>
  );
};

export default ManagerPage;