import { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Card, { CardImage, CardContent } from "../components/card/Card";

import Title from "./Title";
import DatetimeText from "./DatetimeText";

const Posts = ({ maxPost, dataFilter }) => {
  const { i18n } = useTranslation();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/Data/Blog.json");
      setData(response.data);
    };
    fetchData();
  }, []);

  const filteredData = dataFilter ? data.filter(dataFilter) : data;

  return (
    <>
      {filteredData
        .slice(data.length - (maxPost || data.length))
        .map(({ lang, id, image, title }) => {
          return (
            <Card link={`/blog-detail/${id}`} key={id}>
              <CardImage src={image} alt={title} />
              <CardContent>
                <DatetimeText>{lang[i18n.language].date}</DatetimeText>
                <Title tagName="h4" size="small">
                  {lang[i18n.language].title}
                </Title>
              </CardContent>
            </Card>
          );
        })}
    </>
  );
};

export default Posts;
