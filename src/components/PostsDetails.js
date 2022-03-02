import { useState, useEffect } from "react";
import axios from "axios";
import Image from "./Image";
import Title from "./Title";
import View from "./View";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const StyledDesc = styled(View)`
  margin-top: 30px;
  @media (max-width: 600px) {
    margin-top: 15px;
  }
`;

const PostsDetails = () => {
  const { i18n } = useTranslation();

  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/Data/Blog.json");
      setData(response.data);
    };
    fetchData();
  }, []);
  const postDetail = data.find((post) => post.id === Number(id));

  return (
    <>
      <Image src={postDetail?.image} />
      <StyledDesc>
        <Title tagName="h4">{postDetail?.lang[i18n.language].title}</Title>
        <p>{postDetail?.lang[i18n.language].description}</p>
      </StyledDesc>
    </>
  );
};

export default PostsDetails;
