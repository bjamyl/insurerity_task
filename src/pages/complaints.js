import React, { useState, useEffect } from "react";

export default function ComplaintsPage() {
  const [complains, setComplains] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    let response = await fetch(
      "https://test-demo-gql-backend.herokuapp.com/api/rest/data",
      {
        headers: {
          "x-hasura-admin-secret": "SECRET",
          "content-type": "application/json",
        },
      }
    );
    let data = await response.json();
    console.log(data.complaint);


    

    setComplains(data.complaint);

  };



  return (
    <section className="h-screen w-screen flex justify-center mt-5">
      <div className="max-w-[1025px]">
        <h1 className="font-semibold text-6xl">Welcome to your dashboard</h1>
        <div className="mt-10">
          <h1 className="text-3xl">Complaints</h1>
          <div className=" mt-2 border-4 rounded-2xl p-2">
            {complains.map((complain) => (
              <h1 className="text-2xl underline hover:cursor-pointer" key={complain.id}>{complain.complaint}</h1>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
