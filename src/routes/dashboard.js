import { IoMdPhotos } from "react-icons/io";
import { BsFillGearFill } from "react-icons/bs";
import { TfiClose } from "react-icons/tfi";

import PhotosModal from "../components/photosModal";
import UserPhotoScroller from "../components/userPhotoScroller";
import Matches from "../components/matches";
import UpdateUserForm from "../components/updateUserForm";
import Modal from "react-modal";
import { useState, useEffect } from "react";

export default function DashboardPage({ user, fetchData }) {
  const [currentUser, setCurrentUser] = useState(user);
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [photoModal, setPhotoModal] = useState(false);
  const [updateUserModal, setUpdateUserModal] = useState(false);
  const [matches, setMatches] = useState([]);

  const interestedInGenders = currentUser.interestedInGender
    .map((gender) => {
      switch (gender) {
        case "M":
          return "men";
          break;
        case "F":
          return "women";
          break;
        case "O":
          return "people with other gender indentities";
          break;
      }
    })
    .join(" and ");
  const avatarURL = "rqzml8fakhiu8gteaujy";

  const photos = [
    currentUser.photoOne ? currentUser.photoOne : avatarURL,
    currentUser.photoTwo ? currentUser.photoTwo : avatarURL,
    currentUser.photoThree ? currentUser.photoThree : avatarURL,
  ];
  Modal.setAppElement("#app");

  useEffect(() => {
    setMatches(user.matches || []);
  }, [user]);

  console.log(user.interestedInGender);

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
          <h2 className="mt-2">likes {interestedInGenders}</h2>
          <hr />
          <p className="mt-2">
            {currentUser.bio ? currentUser.bio : "Currently you have no Bio"}
          </p>
        </div>
      </div>

      {/* matches section */}
      <div className="flex flex-col my-4 mx-4">
        <h2 className="text-left text-5xl pt-16">Your Matches</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          <Matches matches={matches} currentUser={user} fetchData={fetchData} />
        </div>
      </div>
    {/* modal section that allows user to update their profile*/}
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
        <div className="w-full flex flex-col ">
          <div className="flex justify-between items-center font-bold mb-4 bg-red-500 py-4 varela">
            <h1 className="text-white ml-16 lg:text-5xl text-xl md:text-2xl uppercase">
              Update your profile
            </h1>
            <TfiClose
              className="text-white lg:text-4xl md:text-2xl text-2xl lg:mr-8 mr-4"
              onClick={() => setUpdateUserModal(false)}
            />
          </div>
          <UpdateUserForm user={currentUser} setModal={setUpdateUserModal} />
        </div>
      </Modal>
    </div>
  );
}
