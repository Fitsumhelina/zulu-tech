
"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div
        className="relative w-full h-[500px] ] 
             bg-cover bg-center z-0 flex items-center justify-center bg-blue-500"
      >
        <div
          className="absolute inset-0"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 80%)" }}
        ></div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold text-white mb-4"
          >
            Privacy Notice
          </motion.h1>
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg text-gray-200"
          >
            Empowering Innovation through unparalleled software development expertise
          </motion.p> */}
        </div>
      </div>

      <div className="flex-grow bg-white dark:bg-[#05132e] dark:text-white">
        <div className="max-w-7xl mx-auto  px-4 py-8">
          <p className="mb-4">
            Zulu Tech operates the Zulu Tech website, which is stated as our SERVICE from now on.
          </p>

          <p className="mb-4">
            This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service, the Zulu Tech website. If you choose to use our Service, then you agree to the collection and use of information in relation with this Notice. The Personal Information that we collect are used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Notice.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">Information Collection and Use</h2>
          <p className="mb-4">
            For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and postal address. The information that we collect will be used to contact or identify you.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">Log Data</h2>
          <p className="mb-4">
            {"We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer's Internet Protocol (IP) address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics."}
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">Cookies</h2>
          <p className="mb-4">
            privacyPage.sections.cookies.text
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">Service Providers</h2>
          <p className="mb-4">
            We may employ third-party companies and individuals due to the following reasons:
          </p>
          <ul className="list-disc pl-8 mb-4">
            <li>To facilitate our Service</li>
            <li>To provide the Service on our behalf</li>
            <li>To perform Service-related services</li>
            <li>To assist us in analyzing how our Service is used</li>
          </ul>
          <p className="mb-4">
            We want to inform our Service users that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">Security</h2>
          <p className="mb-4">
            We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">Links to Other Sites</h2>
          <p className="mb-4">
            Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Notice of these websites. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">Changes to This Privacy Notice</h2>
          <p className="mb-4">
            We may update our Privacy Notice from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Notice on this page. These changes are effective immediately, after they are posted on this page.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">Contact Us</h2>
          <p className="mb-4">
            If you have any questions or suggestions about our Privacy Notice, do not hesitate to   <Link href="/contact" className="text-blue-500 dark:text-blue-400 hover:underline">
              contact us
            </Link>.
          </p>


        </div>
      </div>
    </div>
  )
}

