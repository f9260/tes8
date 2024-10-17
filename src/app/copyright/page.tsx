import Link from 'next/link'

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Copyright | VE3.Plus",
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
                  Copyright
                </h2>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                  
                  
                  </div>
                 
                </div>
                <div>
                  
					VE3.Plus respects the intellectual property rights of others and requests you to do the same. VE3.Plus does not permit infringement of intellectual property rights on its software and will promptly suspend commercial content (served via a publicly available web address / URL) from being able to be converted and downloaded by its software when kindly notified.

					If you’re a content creator/owner, copyright owner, or an agent thereof and would like to disable the possible use of VE3.Plus's software to convert your publicly available content(s), please kindly send me a request via email at copyright@ve3.plus with the following information:

					The URL(s) and description(s) of the content(s) you want us to block.
					A form of electronic or physical evidence showing that you have the rights to act for the content(s).
					Contact information that is reasonably sufficient to permit me to contact you, such as telephone number, and a valid email address.
					The relevant content(s) will be blacklisted in our system within 48 hours.

					General Notice:

					VE3.Plus respects the intellectual property rights of all content creators, whether their work is hosted on YouTube or any other service. We strongly encourage our users to respect these rights as well.

					Content Ownership and Copyright Compliance:

					All videos, music, and any other content downloaded via VE3.Plus remain the property of their respective copyright owners. Users of this service agree to bear sole responsibility for any copyright infringement issues that may arise from the improper use or distribution of copyrighted content.


					Liability:

					Users are solely responsible for ensuring the legality of downloading and using any content through the service.

					Copyright Infriction and Content Removal:

					Copyright holders who believe their content has been uploaded to YouTube and downloaded through VE3.Plus in violation of their rights are encouraged to contact us. We are committed to working with copyright holders to address any concerns, which may include blocking content on our service upon request.

					Contact Information:

					For copyright inquiries or content removal requests, please contact us at copyright@ve3.plus.

					Final Reminder:

					It is important to understand the legal implications of downloading and using copyrighted content. We urge our users to exercise caution and ensure they have all necessary rights or permissions when using any downloaded material.
									  

                 
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