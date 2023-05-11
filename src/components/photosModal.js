import { TfiClose } from "react-icons/tfi";
import UploadWidget from "../components/common/uploadWidget";
import UserPhoto from "../components/common/userPhoto";
import {
  handleUploadPhotoOne,
  handleUploadPhotoTwo,
  handleUploadPhotoThree,
} from "../lib/uploadImageFunctions";

const PhotosModal = ({ setModal, user, setUser, photos }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex justify-between items-center font-bold mb-4">
        <h1>My photos</h1>
        <TfiClose onClick={() => setModal(false)} />
      </div>
      <hr />
      <div className="flex justify-between items-center my-4">
        <div className="w-40">
          <UserPhoto imageUrl={photos[0]} />
        </div>
        <div className="mx-auto">
          <UploadWidget
            handleUploadImage={handleUploadPhotoOne}
            user={user}
            setUser={setUser}
          />
        </div>
      </div>
      <hr />
      <div className="flex justify-between items-center my-4">
        <div className="w-40">
          <UserPhoto imageUrl={photos[1]} />
        </div>
        <div className="mx-auto">
          <UploadWidget
            handleUploadImage={handleUploadPhotoTwo}
            user={user}
            setUser={setUser}
          />
        </div>
      </div>
      <hr />
      <div className="flex justify-between items-center my-4">
        <div className="w-40">
          <UserPhoto imageUrl={photos[2]} />
        </div>
        <div className="mx-auto">
          <UploadWidget
            handleUploadImage={handleUploadPhotoThree}
            user={user}
            setUser={setUser}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotosModal;
