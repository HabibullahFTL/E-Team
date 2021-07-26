import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";

const SetMeeting = () => {
  return (
    <div className="flex">
      <div className="flex-none">
        <Sidebar />
      </div>
      <div className="absolute w-full top-0 justify-between">
        <Topbar />
      </div>

      {/* Card with input field */}
      <div className="flex-none shadow-md rounded px-60 py-10 bg-gray-50 m-auto">
        <p className="font-bold text-2xl text-center">Set a meeting</p>
        <form action="" className="form mt-4">
          <div className="grid gap-x-32 grid-cols-2">
            <div>
              <div className="mb-3">
                <label className="text-lg font-semibold" htmlFor="">
                  Team Name:
                </label>{" "}
                <br />
                <select className="rounded w-full border" name="" id="">
                  <option value="">One</option>
                  <option value="">Two</option>
                  <option value="">Three</option>
                </select>
              </div>

              <div>
                <label className="text-lg font-semibold" htmlFor="">
                  Meeting Agenda:
                </label>{" "}
                <br />
                <textarea
                  className="rounded w-full border"
                  name=""
                  id=""
                  cols={5}
                  rows={3}
                ></textarea>
              </div>
            </div>

            <div>
              <div className="mb-3">
                <label className="text-lg font-semibold" htmlFor="">
                  Meeting Title:
                </label>{" "}
                <br />
                <input className="rounded border" type="text" name="" id="" />
              </div>

              <div>
                <label className="text-lg font-semibold" htmlFor="">
                  Time:
                </label>{" "}
                <br />
                <input
                  className="rounded border w-full"
                  type="time"
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>

          <input
            type="submit"
            className="bg-blue-500 cursor-pointer py-3 px-3 rounded-full text-white font-bold my-3"
            value="Set meeting"
          />
        </form>
      </div>
    </div>
  );
};

export default SetMeeting;
