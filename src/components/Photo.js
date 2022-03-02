import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import View from "./View";
import Button from "./Button";
import Modal from "./Modal";
import Image from "./Image";
import { ReactComponent as CircleLeft } from "../assets/icons/circle-left.svg";
import { ReactComponent as CircleRight } from "../assets/icons/circle-right.svg";

const StyledContainer = styled(View)`
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const StyledButtonPrev = styled.button`
  position: absolute;
  left: 100px;
  border: none;
  background-color: transparent;
  background-color: #fff;
  display: flex;
  border-radius: 100%;
  @media (max-width: 600px) {
    left: 20px !important;
  }
`;
const StyledButtonNext = styled.button`
  position: absolute;
  right: 100px;
  border: none;
  display: flex;

  background-color: #fff;
  border-radius: 100%;
  @media (max-width: 600px) {
    right: 20px !important;
  }
`;
const StyledPhoto = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  object-position: center;
  margin-bottom: 50px;
  cursor: pointer;
`;

const Photo = ({ peerPageCount }) => {
  const [photos, setPhotos] = useState([]);
  const [activePhotoId, setActivePhotoId] = useState();
  const [viewedPhotosCount, setViewedPhotosCount] = useState(peerPageCount);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = (id) => {
    setActivePhotoId(id);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/Data/Photos.json");
      setPhotos(response.data);
    };

    fetchData();
  }, []);

  const loadMore = () => {
    setViewedPhotosCount(
      (currentViewedCount) => currentViewedCount + peerPageCount
    );
  };

  const previewImg = photos.find((photo) => photo.id === activePhotoId);

  const goToPrevImage = () => {
    setActivePhotoId((currentPhotoId) => currentPhotoId - 1);
  };

  const goToNextImage = () => {
    setActivePhotoId((currentPhotoId) => {
      if (currentPhotoId === photos.length) {
        return 1;
      }

      return currentPhotoId + 1;
    });
  };

  return (
    <View display="flex" direction="column">
      <Modal
        style={{ position: "relative" }}
        isOpen={isModalOpen}
        closeModal={closeModal}
      >
        <StyledButtonPrev disabled={activePhotoId <= 0} onClick={goToPrevImage}>
          <CircleLeft />
        </StyledButtonPrev>
        {previewImg ? (
          <Image src={previewImg.image} alt={previewImg.title} />
        ) : null}
        <StyledButtonNext
          style={{ position: "absolute", right: "100px" }}
          onClick={goToNextImage}
        >
          <CircleRight />
        </StyledButtonNext>
      </Modal>

      <StyledContainer display="flex" direction="row">
        {photos.slice(0, viewedPhotosCount).map(({ id, thumbnail }) => {
          return (
            <StyledPhoto
              onClick={() => openModal(id)}
              role="button"
              key={id}
              src={thumbnail}
            />
          );
        })}
      </StyledContainer>

      <View>
        {photos.length > viewedPhotosCount ? (
          <Button onClick={loadMore}>Load More</Button>
        ) : null}
      </View>
    </View>
  );
};

export default Photo;
