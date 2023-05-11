import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import { IoMdPhotos } from "react-icons/io";
import { BsFillGearFill } from "react-icons/bs";

import UserPhoto from "../components/common/userPhoto";
import Modal from "react-modal";
import PhotosModal from "../components/photosModal";
import UserPhotoScroller from "../components/userPhotoScroller";

import { useState, useEffect } from "react";
import profile from "../static/images/avatar.png";
import Matches from "../components/matches";
import { Link } from "react-router-dom";

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

  const [matches, setMatches] = useState([]);

  useEffect(() => {
    console.log(user.matches);
    setMatches(user.matches);
  }, [user.matches]);

  return (
    <div className=" w-full flex flex-col min-h-screen">
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-[50%]">
          <UserPhotoScroller
            currentPhoto={currentPhoto}
            setCurrentPhoto={setCurrentPhoto}
            photos={photos}
          />
        </div>
        {/* content area */}
        <div className="mx-2 w-full">
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
      </div>

      {/* matches section */}
      <div className="flex flex-col my-4 mx-4">
        <h2 className="text-left text-5xl">Your Matches</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          <Matches matches={matches} currentUser={user} />
        </div>
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
