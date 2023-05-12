import apiRoute from "./apiRoute";
import authAxios from "./authAxios";

//handles incoming photos
const handleUploadPhotoOne = async (imageId, user, setUser) => {
  try {
    const response = await authAxios.put(`${apiRoute}users/${user._id}`, {
      photoOne: imageId,
    });
    setUser({
      ...user,
      photoOne: response.data.user.photoOne,
    });
  } catch (error) {
    console.log(error);
  }
};

const handleUploadPhotoTwo = async (imageId, user, setUser) => {
  try {
    const response = await authAxios.put(`${apiRoute}users/${user._id}`, {
      photoTwo: imageId,
    });
    setUser({
      ...user,
      photoTwo: response.data.user.photoTwo,
    });
  } catch (error) {
    console.log(error);
  }
};

const handleUploadPhotoThree = async (imageId, user, setUser) => {
  try {
    const response = await authAxios.put(`${apiRoute}users/${user._id}`, {
      photoThree: imageId,
    });
    setUser({
      ...user,
      photoThree: response.data.user.photoThree,
    });
  } catch (error) {
    console.log(error);
  }
};

export { handleUploadPhotoOne, handleUploadPhotoTwo, handleUploadPhotoThree };
