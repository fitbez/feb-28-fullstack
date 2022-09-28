import React from "react";
import Header from "./Header";
import Wrapper from "./Wrapper";
import HomeWrapper from "./HomeWrapper";

function Home() {
  return (
    <>
      <Header />
      <Wrapper>
        <h1 style={{ fontSize: "80px", margin: 0 }}>Welcome Home!</h1>;
        <HomeWrapper />
      </Wrapper>
    </>
  );
}

export default Home;
