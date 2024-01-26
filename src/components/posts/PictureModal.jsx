import React from "react";

const PictureModal = ({ post, pictureModal, setPictureModal }) => {
  return (
    <div
      onClick={() => setPictureModal(false)}
      className={`${
        pictureModal
          ? "top-0 h-full z-50"
          : "-top-[100%] h-full -z-10 delay-[250ms]"
      } bg-modal fixed left-0 w-full flex justify-center items-center`}
    >
      {/* Post's Picture */}
      <img
        onClick={(e) => e.stopPropagation()}
        src={post.picture}
        alt=""
        className={`${
          pictureModal ? "opacity-100 delay-150" : "opacity-0 delay-0"
        } w-4/5 sm:w-96 rounded-3xl duration-300 ease-in-out z-50`}
      />
    </div>
  );
};

export default PictureModal;
