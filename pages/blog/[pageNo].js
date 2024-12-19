/* dynamic routing */
import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";

const pageNo = () => {
    const router = useRouter();
    const pageNumber = router.query.pageNo;
  return (
  <>
  <Navbar />
  <h1 className="text-3xl font-bold text-center mt-10">my blog {pageNumber} content</h1>
  </>
  )
  
};

export default pageNo;
