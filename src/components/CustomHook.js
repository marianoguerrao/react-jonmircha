import React from "react";
import { useFetch } from "../hooks/useFetch";

function Custom() {
  //console.log("Use Fetch: ", useFetch());

  let url = "https://swapi.dev/api/people";

  let { data, pending, error } = useFetch(url);

  return (
    <>
      <h1>Hooks personalizados: </h1>
      <h3>Pending: {JSON.stringify(pending)}</h3>
      <h6>Data: {JSON.stringify(data)}</h6>
      <h3>Error: {JSON.stringify(error)}</h3>
    </>
  );
}

export default Custom;
