import React from "react";
import { Modal } from "react-bootstrap";
import YouTube from "react-youtube";

const YouTubeModal = ({ modalVisible, setModalVisible, videoData }) => {
  return (
    <Modal
      show={modalVisible}
      size="lg"
      className="youtube-modal"
      centered
      backdrop="static"
      onHide={() => setModalVisible(false)}
    >
      <Modal.Header closeButton closeVariant="white">
        <Modal.Title>Play Trailer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <YouTube
          videoId={videoData.key}
          id="player"
          className={"video-wrap"}
          iframeClassName="iframe-video"
          opts={{
            height: "390",
            width: "640",
            playerVars: {
              autoplay: 0,
              rel: 0,
              controls: 0,
            },
          }}
        />
      </Modal.Body>
    </Modal>
  );
};

export default YouTubeModal;
