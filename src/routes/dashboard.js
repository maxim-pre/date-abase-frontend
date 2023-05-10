import { useState } from "react";
import UploadWidget from "../components/common/uploadWidget";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import {
  handleUploadPhotoOne,
  handleUploadPhotoTwo,
  handleUploadPhotoThree,
} from "../lib/uploadImageFunctions";
import UserPhoto from "../components/common/userPhoto";

export default function DashboardPage({ user }) {
  const [currentUser, setCurrentUser] = useState(user);
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const avatarURL = "jlowzke3nc1fxdk3ocwu";

  const photos = [
    currentUser.photoOne ? currentUser.photoOne : avatarURL,
    currentUser.photoTwo ? currentUser.photoTwo : avatarURL,
    currentUser.photoThree ? currentUser.photoThree : avatarURL,
  ];

  return (
    <div className=" w-full flex flex-col h-screen">
      {/* profile section */}
      {/* profile pic */}
      <div className="flex flex-col items-center relative">
        <div className="w-80">
          <UserPhoto imageUrl={photos[currentPhoto]} />
        </div>
        {/* left and right arrows */}
        {currentPhoto < 2 && (
          <button
            className="absolute right-0 top-[49%]  mx-4 p-3 rounded-full bg-red-200 origin-center"
            onClick={() => {
              setCurrentPhoto(currentPhoto + 1);
            }}
          >
            <AiOutlineArrowRight className="text-xl opacity-100 text-gray-600" />
          </button>
        )}
        {currentPhoto > 0 && (
          <button
            className="absolute left-0 top-[49%]  mx-4 p-3 rounded-full bg-red-200 origin-center"
            onClick={() => {
              setCurrentPhoto(currentPhoto - 1);
            }}
          >
            <AiOutlineArrowLeft className="text-xl opacity-100 text-gray-600" />
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
      <div className="flex justify-center">
        <UploadWidget
          handleUploadImage={handleUploadPhotoTwo}
          user={user}
          setUser={setCurrentUser}
        />
      </div>
    </div>
  );
}
// .resize(Resize.scale().width())
