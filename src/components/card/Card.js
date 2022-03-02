import styled from "styled-components";
import CardButton from "./CardButton";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export { default as CardButton } from "./CardButton";
export { default as CardContent } from "./CardContent";
export { default as CardImage } from "./CardImage";

const StyledCard = styled.div`
  position: relative;
  display: block;
  width: 100%;

  &:hover {
    ${CardButton} {
      opacity: 1;
    }
  }
`;

const Card = ({ children, link }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/Data/Blog.json");
      setData(response.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <Link to={link}>
        <StyledCard>{children}</StyledCard>
      </Link>
    </>
  );
};

export default Card;
