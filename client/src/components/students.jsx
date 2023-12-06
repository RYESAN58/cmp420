import axios from "axios";
import React, {useState} from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Students = () => {
  const [instructor, setinstructor] = useState({
    emplid: '',
    email: '',
    address: '',
    firstname: '',
    lastname: '',
    phone: '',
    teaching_interest: '',
    research_interest:"",
    date_of_hire: '',
    courses_taught:"",
    offfice_location:"",
  });

  const nav = useNavigate();



  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setinstructor({ ...instructor, [name]: value });
    console.log(instructor)
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    try{
      await axios.post('http://localhost:8800/add', instructor)
    }catch(err){
      console.log(err)
    }
    console.log('instructor data to be sent to the server:', instructor);
    nav('/');
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstname"
            type="text"
            placeholder="First Name"
            name="firstname"
            value={instructor.firstname}
            onChange={handleInputChange}
            required
          />
        </div>


        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastname"
            type="text"
            placeholder="Last Name"
            name="lastname"
            value={instructor.lastname}
            onChange={handleInputChange}
            required
          />
        </div>


        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            value={instructor.email}
            onChange={handleInputChange}
            required
          />
        </div>


        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="courses_taught">
            Courses Taught
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="courses_taught"
            type="text"
            placeholder="Courses Taught"
            name="courses_taught"
            value={instructor.courses_taught}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              emplid
          </label>
          <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="emplid"
              type="text"
              placeholder="Employee ID"
              name="emplid"
              value={instructor.emplid}
              onChange={handleInputChange}
              required
            />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Teaching Interest
          </label>
          <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="teaching_interest"
              type="text"
              placeholder="Teaching Interest"
              name="teaching_interest"
              value={instructor.teaching_interest}
              onChange={handleInputChange}
              required
            />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Research Interest
          </label>
          <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="research_interest"
              type="text"
              placeholder="Research Interest"
              name="research_interest"
              value={instructor.research_interest}
              onChange={handleInputChange}
              required
            />
        </div>


        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone
          </label>
          <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              placeholder="Phone #"
              name="phone"
              value={instructor.phone}
              onChange={handleInputChange}
              required
            />
        </div>


        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
              Address
          </label>
          <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="text"
              placeholder="Address"
              name="address"
              value={instructor.address}
              onChange={handleInputChange}
              required
            />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date_of_hire">
            Date Of Hire
          </label>
          <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="date_of_hire"
              type="text"
              placeholder="Date Of Hire"
              name="date_of_hire"
              value={instructor.date_of_hire}
              onChange={handleInputChange}
              required
            />
        </div>


        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="offfice_location">
            Office Location
          </label>
          <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="offfice_location"
              type="text"
              placeholder="Office Location"
              name="offfice_location"
              value={instructor.offfice_location}
              onChange={handleInputChange}
              required
            />
        </div>

        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Add instructor
          </button>
        </div>
      </form>
    </div>
  );
}



export default Students;