import React from "react";
import imageAsset from "../../utils/image";

function ComponentThreeDetail() {
  return (
    <>
      <div className="w-full h-auto flex flex-col">
        <div className="w-full h-1/5  flex flex-col items-center font-poppins">
          <div className="font-semibold text-[45px]">Makanan Daerah</div>
          <div className="font-regular text-lg">
            Yakin tidak tertarik dengan makanan daerah Provinsi Aceh?
          </div>
        </div>
        <div className="w-full h-auto  pb-40 flex flex-row ">
          <div className="w-2/4   flex flex-row">
            <div className="w-1/4 h-[350px]  relative mt-20">
              <div
                className="w-full h-[400px] -left-20 top-0 absolute bg-gradient-to-b from-black to-black rounded-[30px] shadow"
                style={{
                  backgroundImage: `url(${imageAsset.bgSulselOp50})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              />
              <div className="w-full h-60 left-0 bottom-0 mb-12 ml-12 absolute 2xl:text-xl xl:text-xl    -rotate-90 text-stone-100 text-2xl font-semibold font-['Poppins'] leading-relaxed">
                Sulawesi Selatan
              </div>
            </div>
            <div className="w-3/4 h-[350px] -left-14 z-10 relative mt-20">
              <div
                className="w-full h-[400px] left-0 top-0 absolute bg-gradient-to-b from-black to-black rounded-[30px] shadow"
                style={{
                  backgroundImage: `url(${imageAsset.mieAceh})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              />
            </div>
          </div>
          <div className="w-2/4   flex flex-col justify-center">
            <div className="text-[30px] font-poppins mt-24 font-semibold">
              Mie Aceh
            </div>

            <div className="text-base font-poppins mr-36 mt-6 font-regular">
              <span className="font-semibold text-base font-poppins ">
                Mie Aceh{" "}
              </span>{" "}
              adalah hidangan mie pedas khas Aceh yang memukau dengan cita rasa
              yang khas. Mie ini disajikan dalam kuah berbumbu kaya
              rempah-rempah, dengan tambahan daging sapi, kambing, atau seafood
              sesuai selera. Kelebihan Mie Aceh terletak pada kepedasan kuahnya
              yang menggoda selera, dihasilkan dari campuran cabai merah dan
              bumbu rempah yang melimpah, menciptakan pengalaman kuliner yang
              lezat dan berani.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ComponentThreeDetail;
