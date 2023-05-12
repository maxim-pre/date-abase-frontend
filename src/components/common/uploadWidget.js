//Upload button that allows user to upload image

import { useEffect, useRef } from "react";

const UploadWidget = ({ handleUploadImage, user, setUser }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dxhrzidss",
        uploadPreset: "erss230u",
      },
      (error, result) => {
        if (result.event === "success") {
          handleUploadImage(result.info["public_id"], user, setUser);
        }
      }
    );
  }, []);

  return (
    <button
      className="bg-red-500 rounded px-2 text-white font-bold"
      onClick={() => widgetRef.current.open()}
    >
      Change
    </button>
  );
};

export default UploadWidget;
