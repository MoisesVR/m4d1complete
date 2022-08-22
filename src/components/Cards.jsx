import React from "react";

const Card = (props) => {
    return(
        <div className="d-flex justify-content-center">
            <div className="card mt-2 mb-2" style={{ width: "18rem" }}>
                <img src={props.url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"> {props.title} </h5>
                    <p className="card-text">
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
  );
}

export default Card;