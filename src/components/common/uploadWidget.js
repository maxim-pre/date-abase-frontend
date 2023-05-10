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
      className="border border-red-500 py-2 px-4 rounded w-20 "
      onClick={() => widgetRef.current.open()}
    >
      upload
    </button>
  );
};

export default UploadWidget;
