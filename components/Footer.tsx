import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants";

const Footer = () => (
  <footer className='flex flex-col text-black-100  mt-5 border-t border-gray-100'>
    <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
      <div className='flex flex-col justify-start items-start gap-6'>
        <Image src='/logo.svg' alt='logo' width={118} height={18} className='object-contain' />
        <p className='text-base text-gray-700'>
          Carhub 2023 <br />
          All Rights Reserved &copy;
        </p>
      </div>

      <div className="footer__links">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-gray-500"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className='bg-black flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-8'>
      <p className="text-white">@2023 CarHub. All rights reserved</p>

      <div className="footer__copyrights-link">
        <h1 className="text-white">
        Code by <a href="https://aungkaungmyint.com/" className="text-[#730000] font-bold" target="_blank" rel="noopener noreferrer">q1akm</a>
        </h1>
        <Link href="/" className="text-white">
          Privacy & Policy
        </Link>
        <Link href="/" className="text-white">
          Terms & Condition
        </Link>
      
      </div>
    </div>
  </footer>
);

export default Footer;
