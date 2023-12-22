import React, { useState } from "react";
import imageAsset from "../../utils/image";
import { RiInformationFill } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";

function ComponentSevenDetail({namaProvinsi, imageBudayaSatu, imageBudayaDua, imageBudayaTiga, imageBudayaEmpat, namaBudayaSatu, namaBudayaDua, namaBudayaTiga, namaBudayaEmpat, deskripsiBudayaSatu, deskripsiBudayaDua, deskripsiBudayaTiga, deskripsiBudayaEmpat}) {
  const [showOverlaySatu, setShowOverlaySatu] = useState(false);
  const [showOverlayDua, setShowOverlayDua] = useState(false);
  const [showOverlayTiga, setShowOverlayTiga] = useState(false);
  const [showOverlayEmpat, setShowOverlayEmpat] = useState(false);

  const handleImageClickSatu = () => {
    setShowOverlaySatu(true);
  };

  const closeOverlaySatu = () => {
    setShowOverlaySatu(false);
  };

  const handleImageClickDua = () => {
    setShowOverlayDua(true);
  };

  const closeOverlayDua = () => {
    setShowOverlayDua(false);
  };

  const handleImageClickTiga = () => {
    setShowOverlayTiga(true);
  };

  const closeOverlayTiga = () => {
    setShowOverlayTiga(false);
  };

  const handleImageClickEmpat = () => {
    setShowOverlayEmpat(true);
  };

  const closeOverlayEmpat = () => {
    setShowOverlayEmpat(false);
  };

  return (
    <>
      <div className="w-full h-fit relative">
       
        <div className="w-full h-screen flex flex-col">
          <div className="w-full h-1/5  flex flex-col items-center font-poppins">
            <div className="font-semibold text-[45px]">Senjata Daerah</div>
            <div className="font-regular text-lg">
            {namaProvinsi} memiliki sejata daerah juga lho, berikut beberapa senjata daerahnya
            </div>
          </div>
          <div className="w-full h-4/5 flex flex-row px-32 ">
            <img
              src={imageBudayaSatu}
              alt=""
              className="custom-width-30 h-4/5 object-cover mr-5 rounded-[30px] cursor-pointer"
              onClick={handleImageClickSatu}
            />
            <div className="flex custom-width-70 h-4/5 flex-col">
            <div className="flex w-full h-3/5 flex-row mr-5 mb-5 ">
              <img
                src={imageBudayaDua}
                alt=""
                className="custom-width-30 h-full object-fill rounded-[30px] mr-5 cursor-pointer"
                onClick={handleImageClickDua}
              />
              <img
                src={imageBudayaTiga}
                alt=""
                className="custom-width-70 h-full object-cover  rounded-[30px] cursor-pointer"
                onClick={handleImageClickTiga}
              />
            </div>

            <div className="w-full h-2/5 ">
            <img
                src={imageBudayaEmpat}
                alt=""
                className="w-full h-full object-cover  rounded-[30px] cursor-pointer"
                onClick={handleImageClickEmpat}
              />

            </div>
                
            </div>
            
            
          </div>
        </div>
        {showOverlaySatu && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className=" w-1/2 h-1/2 bg-basicColor p-12 rounded-2xl shadow-2xl relative z-10">
            <span onClick={closeOverlaySatu} className="absolute top-0 right-0 m-3 cursor-pointer">
            <IoMdCloseCircle  size={40} className="hover:text-red-500" />
            </span>
            <div className="font-poppins flex flex-col justify-center items-center">
                <div className="font-semibold text-[45px]">
                {namaBudayaSatu}
                </div>
                <div className="font-regular text-lg text-justify pt-5">
                {deskripsiBudayaSatu}
                </div>
            </div>
            {/* Isi konten overlay di sini */}
          </div>
        </div>
      )}
      {showOverlayDua && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className=" w-1/2 h-1/2 bg-basicColor p-12 rounded-2xl shadow-2xl relative z-10">
            <span onClick={closeOverlayDua} className="absolute top-0 right-0 m-3 cursor-pointer">
            <IoMdCloseCircle  size={40} className="hover:text-red-500" />
            </span>
            <div className="font-poppins flex flex-col justify-center items-center">
                <div className="font-semibold text-[45px]">
                {namaBudayaDua}
                </div>
                <div className="font-regular text-lg text-justify pt-5">
                {deskripsiBudayaDua}
                </div>
            </div>
            {/* Isi konten overlay di sini */}
          </div>
        </div>
      )}
      {showOverlayTiga && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className=" w-1/2 h-1/2 bg-basicColor p-12 rounded-2xl shadow-2xl relative z-10">
            <span onClick={closeOverlayTiga} className="absolute top-0 right-0 m-3 cursor-pointer">
            <IoMdCloseCircle  size={40} className="hover:text-red-500" />
            </span>
            <div className="font-poppins flex flex-col justify-center items-center">
                <div className="font-semibold text-[45px]">
                {namaBudayaTiga}
                </div>
                <div className="font-regular text-lg text-justify pt-5">
                {deskripsiBudayaTiga}
                </div>
            </div>
            {/* Isi konten overlay di sini */}
          </div>
        </div>
      )}
      {showOverlayEmpat && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className=" w-1/2 h-1/2 bg-basicColor p-12 rounded-2xl shadow-2xl relative z-10">
            <span onClick={closeOverlayEmpat} className="absolute top-0 right-0 m-3 cursor-pointer">
            <IoMdCloseCircle  size={40} className="hover:text-red-500" />
            </span>
            <div className="font-poppins flex flex-col justify-center items-center">
                <div className="font-semibold text-[45px]">
                {namaBudayaEmpat}
                </div>
                <div className="font-regular text-lg text-justify pt-5">
                {deskripsiBudayaEmpat}
                </div>
            </div>
            {/* Isi konten overlay di sini */}
          </div>
        </div>
      )}
      </div>
      
    </>
  );
}

export default ComponentSevenDetail;