import Navbar from "../components/Navbar";
import Image from "next/image";
const contact = () => {
  return (
    <>
    <Navbar />
      <h1 className="text-3xl font-bold text-center mt-10">
        welcome to my contact page
      </h1>
      <div className="flex justify-center items-center mt-6">
      <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPQJebYg8JbWGmowQbYyedHHsG08Q-5zDnug&s' width={500} height={500} />
      </div>
    </>
  )
}

export default contact