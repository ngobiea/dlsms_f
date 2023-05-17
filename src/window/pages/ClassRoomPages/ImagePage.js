import React,{useEffect, useRef, useState} from "react";

const ImagePage = () => {
    const [imageStream, setImageStream] = useState(null);
    const videoRef = useRef(null);
    useEffect(() => {
         try {
           navigator.mediaDevices
             .getUserMedia({ video: true, audio: false })
             .then((stream) => {
               setImageStream(stream);
             });
         } catch (error) {
           console.log(error);
         }
    }, []);
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.srcObject = imageStream;
        }
    }, [imageStream]);
  return (
    <>
      <div className="bg-white relative lg:py-20">
        <div
          className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
      xl:px-5 lg:flex-row"
        >
          <div className="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
            <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
              <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10"></div>
            </div>
            <div className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
              <div
                className="flex flex-col items-start justify-start  bg-white shadow-2xl rounded-xl
            relative z-10"
              >
                <video
                  ref={videoRef}
                  autoPlay
                  muted={true}
                  className="h-96 w-full max-w-xl rounded-lg shadow-xl dark:shadow-gray-800"
                ></video>
                <div className="flex justify-center w-full">
                  <button
                    type="button"
                    className="focus:outline-none w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    TAKE A PHOTO
                  </button>
                  <button
                    type="button"
                    className="focus:outline-none w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    UPLOAD A PHOTO
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImagePage;
