import wallpaper from "../../assets/wallpaper.webp";
import working from "../../assets/working-emoji.png";

const PortraitPicture = () => {
  return (
    <div className="max-w-[520px] flex justify-center items-center relative">
      <img
        src={wallpaper}
        alt="Profile Picture"
        width={500}
        className="rounded-xl w-full lg:w-11/12"
      />
      <div className="absolute -right-10 -bottom-12 bg-white rounded-full p-5 hidden lg:block">
        <img src={working} alt="Working Emoji" width={100} className="z-10" />
      </div>
    </div>
  );
};

export default PortraitPicture;
