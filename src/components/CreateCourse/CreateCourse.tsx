import React from "react";

const CreateCourse = () => {
  return (
    <div className="shadow  mx-7 mt-4 px-16 pt-2 rounded-lg">
      <h2 className="text-center text-3xl font-bold">Create Course</h2>

      <form action="" className="form mt-4">
        <div className="flex w-full mb-5 space-x-16">
          <div className="w-5/6">
            {/* <div className="mb-5">
              <label className="text-base font-semibold" htmlFor="">
                Select Category
              </label>
              <br />
              <select className="border rounded mt-1 p-2 w-full" name="" id="">
                <option value="">One</option>
                <option value="">Two</option>
                <option value="">Three</option>
              </select>
            </div> */}

            <div className="mb-5">
              <label className="text-lg font-semibold" htmlFor="">
                Course Name:
              </label>
              <br />
              <input
                className="border rounded mt-1 p-2 w-full"
                type="text"
                placeholder="Write Benefit"
              />
            </div>
          </div>

          <div className="w-5/6">
            <div className="mb-5">
              <label className="text-lg font-semibold" htmlFor="">
                Course Video:
              </label>
              <br />
              <input
                className="border rounded mt-1 p-2 w-full"
                type="file"
                placeholder="Write Title"
              />
            </div>

            {/* <div className="">
              <label className="text-base font-semibold" htmlFor="">
                How to apply
              </label>
              <br />
              <input
                className="border rounded mt-1 p-2 w-full"
                type="text"
                placeholder="Apply"
              />
            </div> */}
          </div>
        </div>

        <div className="text-center">
          <label className="text-lg font-semibold" htmlFor="">
            Description:
          </label>
          <br />
          <textarea
            className="border rounded p-2 mt-1 w-full"
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Write Details"
          ></textarea>
        </div>

        <input
          type="submit"
          className="text-center cursor-pointer mx-auto my-4 bg-blue-500 text-white font-semibold py-3 px-10 rounded-lg"
          value="Let's Cook It"
        />
      </form>
    </div>
  );
};

export default CreateCourse;
