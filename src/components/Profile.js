import React, { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  useEffect(() => {
    console.log("useEffect" + props.name);
    const timer = setInterval(() => {
      console.log(
        "setInterval=====, this will be called after componentwillunmount, it is cons of SPA"
      );
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("this is component will unmount, useEffect return");
    };
  });
  console.log("render" + props.name);
  return (
    <div>
      <h2>Profile Functional Component</h2>
      <h3>{props.name}</h3>
      <h4>Count:{count}</h4>
      <h4>Count:{count2}</h4>
      <button
        onClick={() => {
          setCount(count + 1);
          setCount2(count2 + 2);
        }}
      >
        Count
      </button>
    </div>
  );
};

export default Profile;
