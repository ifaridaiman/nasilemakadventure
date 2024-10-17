"use client";
import { useEffect, useState } from "react";

interface Stall {
  id: number;
  name: string;
  location: string;
  latitude: number;
  longitude: number;
}

export default function Home() {
  

  const [data, setData] = useState<Stall[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const stallsPerPage = 10; // Show 10 stalls per page

  useEffect(() => {
    fetch("/api/stall")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const indexOfLastStall = currentPage * stallsPerPage;
  const indexOfFirstStall = indexOfLastStall - stallsPerPage;
  const currentStalls = data.slice(indexOfFirstStall, indexOfLastStall);

  const totalPages = Math.ceil(data.length / stallsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <table className="min-w-full divide-y divide-gray-200 bg-white rounded text-gray-700">
          <thead className="divide-y divide-gray-200">
            <tr className="p-2">
              <td className="p-4">Name</td>
              <td className="p-4">Location</td>
              <td className="p-4 text-center">View Profile</td>
            </tr>
          </thead>
          <tbody>
            {currentStalls.map((stall) => (
              <tr key={stall.id}>
                <td className="p-4">{stall.name}</td>
                <td className="p-4"><a href={`https://www.google.com/maps/search/?api=1&query=${stall.latitude},${stall.longitude}`} target="_blank" className="text-blue-500" title="View on Map">{stall.location}</a></td>
                <td className="p-4 text-center">
                  <a href={`/stall/${stall.id}`} className=" text-amber-800 rounded p-2 bg-[#E3D5BD]">
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center py-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            } text-white bg-gray-800 px-4 py-2 rounded`}
          >
            Previous
          </button>

          <span>
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            } text-white bg-gray-800 px-4 py-2 rounded`}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
