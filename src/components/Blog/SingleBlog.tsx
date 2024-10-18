import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { image } = blog;
  return (
    <>
      <div className="group relative overflow-hidden rounded-lg bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
        <video autoPlay muted loop>
          <source src="https://forum.ve3.plus/assets/files/2024-04-28/ve3-plus-tr.mp4" type="video/mp4" />
        </video>
        <div className="">
          <h3>
            <Link
              href=""
              className=""
            >
              
            </Link>
          </h3>
          <p className="">
       
          </p>
          <div className="flex items-center">
            <div className="">
              <div className="">
                <div className="">
              
                </div>
              </div>
              <div className="w-full">
                <h4 className="">
             
                </h4>
            
              </div>
            </div>
            <div className="">
              <h4 className="">
   
              </h4>
         
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
