import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import { IoMdPhotos } from "react-icons/io";
import { BsFillGearFill } from "react-icons/bs";

import UserPhoto from "../components/common/userPhoto";
import Modal from "react-modal";
import PhotosModal from "../components/photosModal";

export default function DashboardPage({ user }) {
  const [currentUser, setCurrentUser] = useState(user);
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [photoModal, setPhotoModal] = useState(false);
  const [updateUserModal, setUpdateUserModal] = useState(false);

  const avatarURL = "rqzml8fakhiu8gteaujy";

  const photos = [
    currentUser.photoOne ? currentUser.photoOne : avatarURL,
    currentUser.photoTwo ? currentUser.photoTwo : avatarURL,
    currentUser.photoThree ? currentUser.photoThree : avatarURL,
  ];
  Modal.setAppElement("#app");

  return (
    <div className=" w-full flex flex-col h-screen" id="home">
      {/* profile section */}
      {/* profile pic */}
      <div className=" items-center relative">
        <div className="w-full">
          <UserPhoto imageUrl={photos[currentPhoto]} />
        </div>
        {/* left and right arrows */}
        {currentPhoto < 2 && (
          <button
            className="absolute right-0 top-[49%]  mx-4 p-3 rounded origin-center"
            onClick={() => {
              setCurrentPhoto(currentPhoto + 1);
            }}
          >
            <AiOutlineArrowRight className="text-4xl text-gray-600" />
          </button>
        )}
        {currentPhoto > 0 && (
          <button
            className="absolute left-0 top-[49%]  mx-4 p-3 rounded origin-center"
            onClick={() => {
              setCurrentPhoto(currentPhoto - 1);
            }}
          >
            <AiOutlineArrowLeft className="text-4xl text-gray-600" />
          </button>
        )}
        {/* circles at the bottom */}
        <div className="absolute left-[50%] flex translate-x-[-50%] bottom-0 text-gray-500 opacity-50 my-4">
          <div
            className={`mx-2 text-xs ${
              currentPhoto === 0 ? "text-gray-200" : "text-gray-500"
            }`}
          >
            <BsCircleFill />
          </div>
          <div
            className={`mx-2 text-xs ${
              currentPhoto === 1 ? "text-gray-200" : "text-gray-500"
            }`}
          >
            <BsCircleFill />
          </div>
          <div
            className={`mx-2 text-xs ${
              currentPhoto === 2 ? "text-gray-200" : "text-gray-500"
            }`}
          >
            <BsCircleFill />
          </div>
        </div>
      </div>
      {/* content area */}
      <div className="mx-2">
        <div className="flex justify-between  mt-2 items-center">
          <h2 className="font-bold text-lg">{currentUser.username}</h2>
          <div>
            <button
              className="text-2xl mr-2"
              onClick={() => setUpdateUserModal(!updateUserModal)}
            >
              <BsFillGearFill />
            </button>
            <button
              className="text-2xl ml-2"
              onClick={() => setPhotoModal(!photoModal)}
            >
              <IoMdPhotos />
            </button>
          </div>
        </div>
        <hr />
        <h2 className="mt-2">
          likes {currentUser.interestedInGender === "F" ? "Chicks" : "Dudes"}
        </h2>
        <hr />
        <p className="mt-2">
          {currentUser.bio ? currentUser.bio : "Currently you have no Bio"}
        </p>
      </div>
      <Modal isOpen={photoModal} onRequestClose={() => setPhotoModal(false)}>
        <PhotosModal
          setModal={setPhotoModal}
          user={currentUser}
          setUser={setCurrentUser}
          photos={photos}
        />
      </Modal>
      <Modal
        isOpen={updateUserModal}
        onRequestClose={() => setUpdateUserModal(false)}
      >
        <div>Update user modal</div>
      </Modal>
    </div>
  );
}
// .resize(Resize.scale().width())
