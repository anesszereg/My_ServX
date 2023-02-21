import { Children, useState } from "react";
import FormDevis from "../FormDevis";
const Sidebar = (props) => {
  return (
    <div
    className=""
      onClick={() => {
        console.log(props.visibility);
      }}
    >
      <div
        className={
          "top-0 right-0 sm:w-[35vw] xs:w-[45vw] w-2/3 bg-white  p-10 pl-20 text-white fixed h-full  " +
          props.visibility
        }
      >
        <FormDevis>{props.children} </FormDevis>
      </div>
    </div>
  );
};

export default Sidebar;
