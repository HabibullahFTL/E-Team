import React, { useContext, useState } from "react";
import { UserDataContext } from "../../Contexts/UserDataContext";
import db from "../Firebase/Firebase";

const AddCourse = () => {
  const [addCourseData, setAddCourseData] = useState({});
  const { userData } = useContext(UserDataContext);

  const handleOnChange = (event: any) => {
    setAddCourseData({
      ...addCourseData,
      co_id: userData.co_id,
      [event.target.name]: event.target.value,
    });
  };

  const addCourseHandle = (e: any) => {
    e.preventDefault();
    db.collection("courses")
      .add(addCourseData)
      .then((data: any) => {
        console.log("success", data);
      });
  };

  return (
    <div className="shadow-lg lg:mx-7 mt-10 px-2 lg:px-16 pt-2 rounded">
      <h2 className="text-center text-2xl pb-4 lg:text-3xl font-bold text-blue-400">
        Add Course
      </h2>

      <form action="" className="form mt-4" onSubmit={addCourseHandle}>
        <div className="lg:flex w-full mb-5 lg:space-x-16">
          <div className="lg:w-5/6">
            <label className="text-base lg:font-semibold" htmlFor="">
              Course Title
            </label>
            <br />
            <input
              className="rounded bg-gray-100 mt-1 p-3 w-full border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              id=""
              type="text"
              required
              name="course_title"
              onKeyUp={handleOnChange}
              placeholder="course_title"
            />
          </div>
          <div className="lg:w-5/6">
            <label className="text-base lg:font-semibold" htmlFor="">
              Instructor:
            </label>
            <br />
            <input
              className="rounded bg-gray-100 mt-1 p-3 w-full border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              id=""
              type="text"
              required
              name="instructor"
              onKeyUp={handleOnChange}
              placeholder="instructor"
            />
          </div>
        </div>

        <div className="lg:flex w-full mb-5 lg:space-x-16">
          <div className="lg:w-5/6">
            <label className="text-base lg:font-semibold" htmlFor="">
              Thumbnail
            </label>
            <br />
            <input
              className="rounded  bg-gray-100 mt-1 p-3 w-full border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              id=""
              name="thumbnail"
              type="text"
              required
              onChange={handleOnChange}
              placeholder="thumbnail"
            />
          </div>
        </div>

        <div className="text-center ">
          <input
            type="submit"
            value="Upload"
            className="my-4 cursor-pointer bg-blue-500 rounded-3xl text-white font-semibold py-3 px-6"
          />
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
