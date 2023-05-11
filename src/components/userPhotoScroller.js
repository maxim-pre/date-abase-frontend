import UserPhoto from "../components/common/userPhoto";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";

const UserPhotoScroller = ({ currentPhoto, setCurrentPhoto, photos }) => {
  return (
    <div className="items-center relative">
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
      <div className="absolute left-[50%] flex translate-x-[-50%] bottom-4 text-gray-500 opacity-50 my-4">
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
  );
};

export default UserPhotoScroller;
