import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import UpdateModal from "./update";

const InstructorDetails = () => {

  const { id } = useParams();
  const [instructor, setInstructor] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);



  useEffect(() => {
    const fetchSelected = async () => {
      console.log("ID FROM DETAILS", id)
      try{
        const res = await axios.get(`http://localhost:8800/instructors/${id}`)
        setInstructor(res.data[0])
        console.log(res)
      }catch(err){
        console.log(err)
      }
    }
    fetchSelected()
  }, [])
  

  const handleUpdate = async (updatedInstructor) => {
    try {
      await axios.put(`http://localhost:8800/instructors/${id}`, updatedInstructor);
      setInstructor(updatedInstructor);
      setIsModalOpen(false);
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">Instructor Details</h2>
      <div className="grid grid-cols-2 gap-4">
        <div><strong>Name:</strong> {instructor.firstname} {instructor.lastname}</div>
        <div><strong>Email:</strong> {instructor.email}</div>
        <div><strong>Address:</strong> {instructor.address}</div>
        <div><strong>Hire Date:</strong> {instructor.date_of_hire}</div>
        <div><strong>EMPLID:</strong> {instructor.emplid}</div>
        <div><strong>Phone #:</strong> {instructor.phone}</div>
        <div><strong>Teaching Interest:</strong> {instructor.teaching_interest}</div>
        <div><strong>Research Interest:</strong> {instructor.research_interest}</div>
        <div><strong>Courses Taught:</strong> {instructor.courses_taught}</div>
        <div><strong>Office Location:</strong> {instructor.offfice_location}</div>
      </div>
      <button onClick={() => setIsModalOpen(true)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
        Edit Details
      </button>
      <UpdateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        instructor={instructor}
        onUpdate={handleUpdate}
      />
    </div>
  );
};




export default InstructorDetails;