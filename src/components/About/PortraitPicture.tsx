import wallpaper from "../../assets/wallpaper.webp";
import working from "../../assets/working-emoji.png";
import rounded from "../../assets/rounded.svg";

const PortraitPicture = () => {
  return (
    <div className="max-w-[520px] flex justify-center items-center relative">
      <img
        src={wallpaper}
        alt="Profile Picture"
        width={500}
        className="rounded-xl w-full lg:w-11/12"
      />
      <div className="absolute -right-5 -bottom-10 bg-white rounded-full p-16 hidden lg:block">
        <img src={working} alt="Working Emoji" width={60} className="z-10" />
        <img
          src={rounded}
          alt="Rounded"
          className="absolute z-20 animate-spin-slow top-0 left-0 right-0 bottom-0"
          width={500}
        />
      </div>
    </div>
  );
};

export default PortraitPicture;
