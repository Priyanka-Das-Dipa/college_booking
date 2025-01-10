import img1 from "../../../images/gra_img_1.jpeg";
import img2 from "../../../images/gra_img_2.jpeg";
import img3 from "../../../images/gra_img_3.jpeg";
import img4 from "../../../images/gra_img_4.jpeg";
import img5 from "../../../images/gra_img_5.jpeg";
import img6 from "../../../images/gra_img_6.jpeg";

const Gallery = () => {
  return (
    <div className="container mx-auto min-h-screen justify-center items-center pt-14">
      <div className="text-center space-y-2 pb-16">
        <h1 className="text-lg text-[#f6520a] font-semibold">Gallery</h1>
        <p className="text-4xl font-bold pb-3">
          Celebrate Moments with <br /> Our College Graduates
        </p>
        <div className="relative mt-2 w-1/3 mx-auto">
          <div className="h-1 bg-gray-300"></div>
          <div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 h-1 bg-[#f6520a]"
            style={{ width: "120px" }}
          ></div>
        </div>
      </div>
      <div className="flex flex-wrap gap-8">
        <div className="group relative w-full lg:w-[450px] h-[300px]">
          <img
            src={img1}
            alt=""
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#f6520a] transition-all duration-300 group-hover:w-full"></div>
          <div className="absolute top-0 left-0 h-0 w-[2px] bg-[#f6520a] transition-all duration-300 group-hover:h-full"></div>
          <div className="absolute bottom-0 right-0 w-0 h-[2px] bg-[#f6520a] transition-all duration-300 group-hover:w-full"></div>
          <div className="absolute bottom-0 right-0 h-0 w-[2px] bg-[#f6520a] transition-all duration-300 group-hover:h-full"></div>
        </div>
        <div className="group relative w-full lg:w-[450px] h-[300px]">
          <img
            src={img2}
            alt=""
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#f6520a] transition-all duration-300 group-hover:w-full"></div>
          <div className="absolute top-0 left-0 h-0 w-[2px] bg-[#f6520a] transition-all duration-300 group-hover:h-full"></div>
          <div className="absolute bottom-0 right-0 w-0 h-[2px] bg-[#f6520a] transition-all duration-300 group-hover:w-full"></div>
          <div className="absolute bottom-0 right-0 h-0 w-[2px] bg-[#f6520a] transition-all duration-300 group-hover:h-full"></div>
        </div>
        <div className="group relative w-full lg:w-[450px] h-[300px]">
          <img
            src={img3}
            alt=""
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#f6520a] transition-all duration-300 group-hover:w-full"></div>
          <div className="absolute top-0 left-0 h-0 w-[2px] bg-[#f6520a] transition-all duration-300 group-hover:h-full"></div>
          <div className="absolute bottom-0 right-0 w-0 h-[2px] bg-[#f6520a] transition-all duration-300 group-hover:w-full"></div>
          <div className="absolute bottom-0 right-0 h-0 w-[2px] bg-[#f6520a] transition-all duration-300 group-hover:h-full"></div>
        </div>
        <div className="group relative w-full lg:w-[450px] h-[300px]">
          <img
            src={img4}
            alt=""
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#f6520a] transition-all duration-300 group-hover:w-full"></div>
          <div className="absolute top-0 left-0 h-0 w-[2px] bg-[#f6520a] transition-all duration-300 group-hover:h-full"></div>
          <div className="absolute bottom-0 right-0 w-0 h-[2px] bg-[#f6520a] transition-all duration-300 group-hover:w-full"></div>
          <div className="absolute bottom-0 right-0 h-0 w-[2px] bg-[#f6520a] transition-all duration-300 group-hover:h-full"></div>
        </div>
        <div className="group relative  lg:w-[450px] h-[300px]">
          <img
            src={img5}
            alt=""
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#f6520a] transition-all duration-300 group-hover:w-full"></div>
          <div className="absolute top-0 left-0 h-0 w-[2px] bg-[#f6520a] transition-all duration-300 group-hover:h-full"></div>
          <div className="absolute bottom-0 right-0 w-0 h-[2px] bg-[#f6520a] transition-all duration-300 group-hover:w-full"></div>
          <div className="absolute bottom-0 right-0 h-0 w-[2px] bg-[#f6520a] transition-all duration-300 group-hover:h-full"></div>
        </div>
        <div className="group relative w-full lg:w-[450px] h-[300px]">
          <img
            src={img6}
            alt=""
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#f6520a] transition-all duration-300 group-hover:w-full"></div>
          <div className="absolute top-0 left-0 h-0 w-[2px] bg-[#f6520a] transition-all duration-300 group-hover:h-full"></div>
          <div className="absolute bottom-0 right-0 w-0 h-[2px] bg-[#f6520a] transition-all duration-300 group-hover:w-full"></div>
          <div className="absolute bottom-0 right-0 h-0 w-[2px] bg-[#f6520a] transition-all duration-300 group-hover:h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
