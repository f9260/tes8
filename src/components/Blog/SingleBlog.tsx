import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { image } = blog;
  return (
    <>
      <div className="group relative overflow-hidden rounded-lg bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
        <Link
          href=""
          className="relative block aspect-[37/22] w-full"
        >
          <span className="">
            
          </span>
          <Image src={image} alt="image" fill />
        </Link>
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
