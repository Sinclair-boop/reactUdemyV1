// import { Fragment } from "react";
import { Wrapper } from "./Wrapper";

const Car = ({ children, color }) => {
  // const colorInfo = color ? <p>Couleur: {color}</p> : <p>Couleur: Néant</p>;
  return (
    children && (
      <Wrapper>
        <p>Marque: {children}</p>
        <p>Couleur: {color ? color : "Néant"}</p>
      </Wrapper>
      // <div
      //   style={{
      //     backgroundColor: "pink",
      //     width: "400px",
      //     padding: "10px",
      //     margin: "5px auto",
      //   }}
      // >
      //   <p>Marque: {children}</p>
      //   {/* {colorInfo} */}
      //   <p>Couleur: {color ? color : "Néant"}</p>
      // </div>
    )
  );
};

export default Car;
