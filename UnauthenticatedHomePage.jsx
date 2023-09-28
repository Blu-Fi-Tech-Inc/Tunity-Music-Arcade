import React from "react";
import never_stop_listening from "../../assets/images/never_stop_listening.jpg";
import Login from "../../components/modals/LoginModal";
import { useDispatch } from "react-redux";

const UnauthenticatedHomePage = ({ setIsAuthenticated }) => {
  const dispatch = useDispatch();

  const openLoginModal = () => {
    dispatch({ type: "OPEN_MODAL_LOGIN" });
  };

  return (
    <div className="flex justify-center flex-1 bg-[#F2F2F2] m-0 p-0">
      <Login setIsAuthenticated={setIsAuthenticated} />
      <div className="w-[1240px] bg-white">
        <div className="border-t-2 border-t-[#f50] bg-lading_web h-[450px] text-black bg-no-repeat bg-cover relative">
          {/* login and register button */}
          <div className="absolute top-5 right-8 text-sm">
            <button
              className="border-white border-[1px] bg-transparent text-black py-1 px-3 rounded-sm mr-3 "
              onClick={openLoginModal}
            >
              Sign in
            </button>
            <button
              className="bg-[#f50] py-1 px-3 rounded-sm mr-3"
              onClick={openLoginModal}
            >
              Create account
            </button>
          </div>

          {/* middle text */}
          <div className="flex justify-center items-center h-full text-center">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-5xl">▷Tunity🎶</h1>
              <p className="w-1/2 text-xl">
                The MarketPlays for Independent Artists. Explore, stream, and share music
                from emerging artists around the world!
              </p>
              <button
                className="bg-[#f50] px-2 py-2 rounded-sm"
                onClick={openLoginModal}
              >
                Sign up for free
              </button>
            </div>
          </div>
        </div>
        <img src={never_stop_listening} alt="never_stop_listening" />
      </div>
    </div>
  );
};

export default UnauthenticatedHomePage;