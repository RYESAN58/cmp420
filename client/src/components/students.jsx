import React, {useState} from "react";


const Students = () => {
  const [student, setStudent] = useState({
    emplid: '',
    address: '',
    major: '',
    dob: '',
    email: '',
    phone: '',
    name: '',
    firstname: '',
    lastname: '',
    mintial: '',
    employment_recordid: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStudent({ ...student, [name]: value });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Student data to be sent to the server:', student);
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={student.firstName}
            onChange={handleInputChange}
            required
          />
        </div>


        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={student.lastName}
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
            value={student.email}
            onChange={handleInputChange}
            required
          />
        </div>


        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="major">
            Major
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="major"
            type="text"
            placeholder="Major"
            name="major"
            value={student.major}
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
              value={student.emplid}
              onChange={handleInputChange}
              required
            />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Add Student
          </button>
        </div>
      </form>
    </div>
  );
}



export default Students;