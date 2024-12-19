import Navbar from "../components/Navbar";
import Image from "next/image";
const about = () => {
  return (
    <>
    <Navbar />
    <h1 className="text-3xl font-bold text-center mt-10">
      Welcome to my about page
    </h1>
    <div className="flex justify-center items-center mt-6">
      {/* internal image  */}
      <Image
        src="/about.webp"
        width={500}
        height={500}
        alt="About page image"
        className="rounded-lg"
      />
    </div>
  </>
  
  );
};

export default about;
