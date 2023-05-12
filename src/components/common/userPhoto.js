import { Cloudinary } from "@cloudinary/url-gen";
import { Resize } from "@cloudinary/url-gen/actions";

const UserPhoto = ({ imageUrl }) => {
  const myCld = new Cloudinary({
    cloud: {
      cloudName: "dxhrzidss",
    },
  });

  return (
    <img
      height={1080}
      width={1080}
      src={myCld
        .image(imageUrl)
        .resize(Resize.crop().height(2500).width(2500).gravity("auto"))
        .resize(Resize.fill().width(1080).height(1080))
        .quality("auto")
        .format("auto")
        .toURL()}
    />
  );
};

export default UserPhoto;
