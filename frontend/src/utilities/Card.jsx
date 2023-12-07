import React from "react";

const Card = (props) => {
  return (
    <form      onClick={props.onClick}
    onSubmit={props.onSubmitHandler} id={props.id} key={props.id}   className=" hover-card col-6 col-md-4 col-lg-2  ">
    <div
    id={props.id}
    className="card my-1 mb-3 d-flex flex-column justify-content-center border-bottom-0 border"
  >
        {props.children}
      </div>
      </form>
  );
};

export default Card;
