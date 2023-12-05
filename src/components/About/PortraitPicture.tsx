import wallpaper from "../../assets/wallpaper.jpg";

const PortraitPicture = () => {
  return (
    <div className="max-w-[520px] h-auto p-5 ">
      <div className="bg-primary rounded-[1.8rem] w-[320px] h-[480px] m-auto relative">
        <img
          src={wallpaper}
          alt="Profile Picture"
          width={500}
          className="rounded-3xl absolute rotate-6 hover:rotate-0 transition duration-300"
        />
      </div>
    </div>
  );
};

export default PortraitPicture;
