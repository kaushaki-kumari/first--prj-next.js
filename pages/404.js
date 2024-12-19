import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
const errorPage = () => {
    const router = useRouter();
    const handleGo = () =>{
        router.push("/")
    }
/* after 3 sec it auto redirect home page  */
    useEffect(() =>{
        setTimeout(()=>{
            router.push("/")
        },3000)
    })
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-center text-red-600 mt-10">
        404 | This page could not be found.
      </h1>
      {/* <Link
        href="/"
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full"
      >
        Go back
      </Link> */}
      {/* <a onClick={() => router.push("/")} className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full cursor-pointer"> Go back</a> */}
      <a onClick={handleGo} className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full cursor-pointer"> Go back</a>
    </div>
  );
};

export default errorPage;
