import React, { useContext } from "react";
import { useState } from "react";
import { UserDataContext } from "../../Contexts/UserDataContext";
import { db } from "../CreateCourseTask/CreateCourseTask";
import swal from "sweetalert";

const CreateNotification = () => {
  const { userData, setUserData } = useContext(UserDataContext);
  const [notification, setNotification] = useState({
    title: "",
    details: "",
  });

  const handleOnChange = (e: any) => {
    setNotification({ ...notification, [e.target.name]: e.target.value });
  };
  console.log(notification);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { title, details } = notification;
    if (title && details) {
      db.collection("notifications")
        .add({
          co_id: userData.co_id,
          title,
          details,
        })
        .then((data) => {
            e.target.reset()
          swal("Good job!", "Notification Successfully added", "success");
        });
    } else {
      swal("Sorry!", "All filled must be filled up", "error");
    }
  };
  return (
    <div className="shadow lg:mx-7 mt-4 px-2 lg:px-16 pt-2 rounded-lg">
      <h2 className="text-center text-2xl text-blue-400 lg:text-3xl font-medium">
        Create Notification
      </h2>

      <form onSubmit={handleSubmit} action="" className="form mt-4">
        <div className="mb-5 lg:space-x-16 w-full">
          <div className="mb-5">
            <label className="text-base lg:font-semibold" htmlFor="">
              Notification Title
            </label>
            <br />
            <input
              onChange={handleOnChange}
              className="border bg-blue-100 rounded mt-1 p-2 w-full"
              name="title"
              placeholder="Title"
            />
          </div>
        </div>

        <div className="mb-5 lg:space-x-16 w-full">
          <div className="mb-5">
            <label className="text-base lg:font-semibold" htmlFor="">
              Notification Details
            </label>
            <br />
            <textarea
              onChange={handleOnChange}
              className="border bg-blue-100 rounded p-2 mt-1 w-full"
              name="details"
              cols={30}
              rows={5}
              placeholder="Details"
            ></textarea>
          </div>
        </div>

        <div className="text-center">
          <input
            // onClick={handleSubmit}
            type="submit"
            className="cursor-pointer my-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 lg:py-3 px-5 lg:px-10 rounded-lg"
            value="Add Notification"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateNotification;
