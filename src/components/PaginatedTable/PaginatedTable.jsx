import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { doc, deleteDoc, db } from "../../services";

// CONTEXT
import { useStateContext } from "../../context";

const PaginatedTable = ({ tools, itemsPerPage }) => {
  const { setSelectedTab } = useStateContext();
  const navigate = useNavigate();
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = tools.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(tools.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % tools.length;
    setItemOffset(newOffset);
  };

  const handleDelete = async (id) => {
    // alert(id);
    try {
      await deleteDoc(doc(db, "tools", id));
      toast.success("Deleted Tool!", {
        position: "top-right",
      });
      setSelectedTab("Add Tool");
      navigate("/dashboard/addtool");
    } catch (error) {
      console.log(error);
      toast.error("Could Not Delete Tool!", {
        position: "top-right",
      });
    }
  };

  return (
    <>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Title
              </th>
              <th scope="col" class="px-6 py-3">
                Category
              </th>
              <th scope="col" class="px-6 py-3">
                <div className="flex justify-center items-center gap-2">
                  <span class="sr-only"></span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((tool) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {tool?.title}
                </th>
                <td class="px-6 py-4">{tool?.category}</td>
                <td class="px-6 py-4 text-right">
                  <div
                    className="flex justify-center items-center gap-2"
                    onClick={() => handleDelete(tool?.id)}
                  >
                    <MdDeleteOutline
                      size={24}
                      className="font-medium text-blue-600
                      cursor-pointer"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="flex justify-center items-center list-none mb-[5rem] md:text-[1.2rem] gap-[5px]
        mt-[3rem]
        "
        pageLinkClassName="py-[8px] md:px-[15px] px-[5px] cursor-pointer rounded-[3px] font-[400] hover:bg-buttonRed
        hover:text-white duration-300
        "
        previousLinkClassName="py-[8px] px-[15px] cursor-pointer rounded-[3px] font-[400] hover:bg-buttonRed
        hover:text-white duration-300"
        nextLinkClassName="py-[8px] px-[15px] cursor-pointer rounded-[3px] font-[400] hover:bg-buttonRed
        hover:text-white duration-300"
        activeLinkClassName="bg-buttonRed text-white"
      />
    </>
  );
};

export default PaginatedTable;
