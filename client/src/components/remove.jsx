import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";




const Remove = () => {

  const [instructors, setinstructor] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      try{
        const res = await axios.get("http://localhost:8800/instructors")
        setinstructor(res.data)
        console.log(res)
      }catch(err){
        console.log(err)
      }
    }
    fetchAll()
  }, [])

  const handleDelete = async (id) => {
    try{
      await axios.delete('http://localhost:8800/instructors/'+id);
      window.location.reload()
    }catch(err){
      console.log(err);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full table-auto">
        <thead className="justify-between">
          <tr className="bg-gray-800">
            <th className="px-16 py-2">
              <span className="text-gray-300">ID</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-300">Name</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-300">Major</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-300">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {instructors.map((instructor) => (
            <tr key={instructor.emplid} className="bg-gray-200 border-b border-gray-200 text-gray-800">
              <td className="px-16 py-2">{instructor.emplid}</td>
              <td className="px-16 py-2">{instructor.firstname} {instructor.lastname}</td>
              <td className="px-16 py-2">{instructor.courses_taught}</td>
              <td className="px-16 py-2">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDelete(instructor.emplid)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default Remove;