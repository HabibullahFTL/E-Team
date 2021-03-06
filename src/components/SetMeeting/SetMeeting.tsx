import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserDataContext } from "../../Contexts/UserDataContext";
import db from "../Firebase/Firebase";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import swal from "sweetalert";

const SetMeeting = () => {
  const { userData, setUserData } = useContext(UserDataContext);
  const [departments, setDepartments] = useState([] as object[]);
  const [meetingDetails, setMeetingDetails] = useState({
    dept_id: "",
    title: "",
    agenda: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    db.collection("departments")
      .where("co_id", "==", userData.co_id)
      .get()
      .then((data) => {
        const array = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setDepartments(array);
      });
  }, []);

  const handleOnChange = (e: any) => {
    setMeetingDetails({ ...meetingDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { dept_id, title, agenda, date, time } = meetingDetails;
    if (dept_id && title && agenda && date && time) {
      db.collection("meetings")
        .add({
          co_id: userData?.co_id,
          dept_id,
          title,
          agenda,
          meetingAt: `${date} ${time}`,
        })
        .then((data) => {
          e.target.reset();
          swal(
            "Congratulations!",
            "Meeting schedule successfully added",
            "success"
          );
        });
    } else {
      swal("Sorry!", "All fields must be filled up", "error");
    }
  };
  return (
    <div className="">
      <div className="">
        <Sidebar />
      </div>
      <div className="absolute w-full top-0 justify-between">
        <Topbar />
      </div>

      <div className="py-12 rounded-lg shadow w-full md:w-9/12 lg:w-1/2 m-auto hover:shadow-lg">
        <div className="pt-3">
          <h1 className="text-center text-gray-600 font-bold md:text-2xl text-xl">
            Set a meeting
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 lg:mx-7">
            <div className="grid grid-cols-1">
              <label className="uppercase md:text-sm text-md text-light font-semibold">
                Department Name:
              </label>
              <select
                name="dept_id"
                onChange={handleOnChange}
                className="app-input"
              >
                <option value="">Select a department</option>
                {departments.map((dept: any) => (
                  <option key={dept.id} value={dept.id}>
                    {dept.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1">
              <label className="uppercase md:text-sm text-md text-light font-semibold">
                Meeting Title:
              </label>
              <input
                name="title"
                onChange={handleOnChange}
                className="app-input"
                type="text"
                placeholder="Title"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 mt-5 lg:mx-7">
            <label className="uppercase md:text-sm text-md text-light font-semibold">
              Meeting Adenga:
            </label>
            <textarea
              name="agenda"
              onChange={handleOnChange}
              className="app-input"
              placeholder="Agenda"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 lg:mx-7">
            <div className="grid grid-cols-1">
              <label className="uppercase md:text-sm text-md text-light font-semibold">
                Time:
              </label>
              <input
                name="time"
                onChange={handleOnChange}
                className="app-input"
                type="time"
                placeholder="Time"
              />
            </div>

            <div className="grid grid-cols-1">
              <label className="uppercase md:text-sm text-md text-light font-semibold">
                Date:
              </label>
              <input
                name="date"
                onChange={handleOnChange}
                className="app-input"
                type="date"
                placeholder="Date"
              />
            </div>
          </div>

          <div className="pt-8">
            <button
              type="submit"
              className="w-auto block mx-auto bg-blue-500 hover:bg-blue-700 rounded-lg shadow-xl font-medium text-white px-4 py-2"
            >
              Set the meeting
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SetMeeting;
