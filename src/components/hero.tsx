import { useState } from "react";
import { Skeleton } from "@mui/material";
import { profile } from "../configs/data";
import { commonArgs } from "../configs/types";

function Image({
  imageLoaded,
  handleImageError,
}: {
  imageLoaded: boolean;
  handleImageError: () => void;
}) {
  const containerClass = imageLoaded ? "" : "ml-4 mt-4 scale-150";

  return (
    <div className={`shadow-lg rounded-lg p-4  sm:flex ${containerClass}`}>
      {imageLoaded ? (
        <img
          src="https://avatars.githubusercontent.com/u/64687226?v=4"
          className={`rounded-lg h-72 w-72 object-cover`}
          alt="Profile"
          onError={handleImageError}
        />
      ) : (
        <Skeleton variant="rectangular" width={12} height={12} />
      )}
    </div>
  );
}

function Hero({ theme, lang, slug }: commonArgs) {
  const [imageLoaded, setImageLoaded] = useState<boolean>(true);
  let keylang = profile.langs.find((item) => item.lang === lang);
  if (!keylang) {
    keylang = profile.langs[0];
  }
  const handleImageError = () => {
    setImageLoaded(false);
  };

  return (
    <div className="w-full h-full sm:mt-0 relative">
      <div className="container mx-auto">
        <div
          className={`flex flex-col sm:flex-row items-center 
                      justify-center p-6 w-full shadow-lg 
                      rounded-b-lg h-screen sm:mt-0 bg-gray-100
                      relative
          `}
        >
          <Image
            imageLoaded={imageLoaded}
            handleImageError={handleImageError}
          />
          <div className="flex flex-col sm:w-1/2 sm:ml-4">
            <h1 className={`text-4xl font-bold mt-6 sm:mt-0`}>
              {keylang.name}
            </h1>
            <p className={`text-lg mt-4`}>{keylang.about}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
