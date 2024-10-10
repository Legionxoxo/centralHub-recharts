import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import React from "react";

const TeacherListPage = () => {
  return (
    <div className="bg-white p-4 rounded-md flex-1 m--4 mt-0">
      {/* Header section */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Managers</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary">
              <Image src="/filter.png" alt="filter" width={15} height={15} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary">
              <Image src="/sort.png" alt="filter" width={15} height={15} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary">
              <Image src="/plus.png" alt="filter" width={15} height={15} />
            </button>
          </div>
        </div>
      </div>

      {/* List section */}
      <div className=""></div>

      {/* Pagination section */}
      <div className="">
        <Pagination />
      </div>
    </div>
  );
};

export default TeacherListPage;
