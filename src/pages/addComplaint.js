import React, { useState } from "react";
import axios from "axios";

export default function AddNewComplaint() {
  const [complain, setComplain] = useState("");
  // const [values, setValues] = useState({
  //   complaint : '',
  //   source: 'web',
  //   type: 'complaint'

  // });

  // const handleComplaintInput = (e) => {
  //   setValues({ ...values, complaint: e.target.value });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(complain);
    const values = {
      companyId: "ad6f4da8-06af-45be-ba79-83156a72471f",
      complaint: complain,
      source: "web",
      type: "complaint",
    };

    if (!complain) {
      alert("Complaint field cannnot be empty");
    }

    let axiosConfig = {
      headers: {
        "x-hasura-admin-secret": "SECRET",
        "Content-Type": "application/json",
      },
    };

    axios
      .post(
        "https://test-demo-gql-backend.herokuapp.com/api/rest/data",
        complain,
        axiosConfig
      )
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });

    // const response = await fetch(
    //   "https://test-demo-gql-backend.herokuapp.com/api/rest/data  ",
    //   {
    //     method: "POST",
    //     headers: {
    //       "x-hasura-admin-secret": "SECRET",
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(values),
    //   }
    // );

    // const data = await response.json();
    // if (response.ok) {
    //   alert('All good');
    // } else {
    //   alert("Error");
    // }

    setComplain("");
  };

  return (
    <div className="flex h-screen w-screen justify-center ">
      <form onSubmit={handleSubmit} className=" w-[500px] mt-[200px]">
        <h1 className="text-4xl mb-5">Let's hear you</h1>

        <textarea
          className="w-full p-4 border"
          placeholder=""
          name="complain"
          value={complain}
          onChange={(e) => setComplain(e.target.value)}
        />
        <button className="flex justify-center border font-semibold text-white bg-[#ff7f00] p-2 w-full">
          Submit Complaint
        </button>
      </form>
    </div>
  );
}
