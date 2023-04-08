import React, { useState } from "react";
import Weather from "./Weather";
export default function Search() {
  let [city, setCity] = useState("");
  let [answer, setAnswer] = useState(false);
  function handleForm(event) {
    event.preventDefault();
  }
  function showName(event) {
    setCity(event.target.value);
  }
  function showCity(event) {
    setAnswer(true);
  }
  return (
    <div>
      <form onSubmit={handleForm}>
        <input type="search" placeholder="Type a city" onChange={showName} />
        <input type="submit" value="Search" onClick={showCity} />
      </form>
      <Weather city={city} answer={answer} />
    </div>
  );
}
