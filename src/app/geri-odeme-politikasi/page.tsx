import Link from 'next/link'

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | VE3.Plus",
  description: "",
  // other metadata
};

const BlogDetailsPage = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Geri Ödeme Politikası
                </h2>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                  
                  
                  </div>
                 
                </div>
                <div>
                  
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                       İade bulunmamaktadır. <Link href="https://forum.ve3.plus/d/5-demo-talebi" target="_blank"><span style={{ color: '#43dd7e' }}>Demo</span></Link>'muzu inceledikten sonra kesin kararınızı vererek satın alınız.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                       Hizmet sorunlarından ötürü yaşanabilecek mağduriyetlerde süre telafisi yapılır.
                    </li>
                    
                                       
                  </ul>
                  
                     
                 
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
