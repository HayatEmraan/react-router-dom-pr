import React from "react";
import { Toaster, toast } from "react-hot-toast";

const Income = () => {
  const handleForm = (e) => {
    e.preventDefault();
    const middle = e.target;
    const firstName = middle.firstName.value;
    const lastName = middle.lastName.value;
    const jobName = middle.jobName.value;
    const income = middle.income.value;
    const incomeSource = middle.incomeSource.value;
    const comment = middle.comment.value;
    toast.success("Beautiful! Your form has been submitted!");
  };
  return (
    <div className="container mx-auto mt-[10vh]">
      <form
        onSubmit={handleForm}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 mx-4"
      >
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Jane"
              required
            />
            <p className="text-red text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Doe"
              required
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="jobName"
            >
              Job Name / Company
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
              id="jobName"
              type="text"
              name="jobName"
              placeholder="Job / Company Name"
              required
            />
            <p className="text-grey-dark text-xs italic">
              Make it as long and as crazy as you'd like
            </p>
          </div>
        </div>
        <div className="-mx-3 md:flex mb-2">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="income"
            >
              Income
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="income"
              type="text"
              name="income"
              placeholder="$ 1000"
              required
            />
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="incomeSource"
            >
              Income Source
            </label>
            <div className="relative">
              <select
                name="incomeSource"
                className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                id="incomeSource"
              >
                <option value={"Employment"}>Employment</option>
                <option value={"Business"}>Business</option>
                <option value={"Pension"}>Pension</option>
                <option value={"Self"}>Self</option>
                <option value={"Other"}>Other</option>
              </select>
              <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="comment"
            >
              Comment
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="comment"
              name="comment"
              type="text"
              placeholder="type your comment here"
            />
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default Income;
