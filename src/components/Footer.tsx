import React from 'react'

export function Footer() {
  return (
    <footer className="px-m py-xxl bg-text text-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-xxl mb-xl">
        <div className="md:col-span-2">
          <h3 className="text-h3 font-semibold mb-m text-primarySurface">Galaxy Technologies</h3>
          <p className="text-bodyMedium text-borderDark max-w-sm leading-relaxed">
            Premium air conditioning products and professional services. Keeping you cool, calm, and
            comfortable.
          </p>
        </div>
        <div>
          <h4 className="text-h5 font-semibold mb-m text-white">Quick Links</h4>
          <ul className="flex flex-col gap-s text-bodyMedium text-borderDark w-fit">
            <li className="hover:text-primarySurface cursor-pointer transition-colors block">
              Products
            </li>
            <li className="hover:text-primarySurface cursor-pointer transition-colors block">
              Services
            </li>
            <li className="hover:text-primarySurface cursor-pointer transition-colors block">
              About Us
            </li>
            <li className="hover:text-primarySurface cursor-pointer transition-colors block">
              Contact
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-h5 font-semibold mb-m text-white">Contact Us</h4>
          <ul className="flex flex-col gap-s text-bodyMedium text-borderDark">
            <li className="block">+1 234 567 8900</li>
            <li className="block">hello@galaxytech.com</li>
            <li className="block">123 Premium Lane, Cool City</li>
          </ul>
        </div>
      </div>
      <div className="max-w-5xl mx-auto pt-lg border-t border-textAlt text-center text-bodySmall text-borderDark flex flex-col md:flex-row justify-between items-center gap-m">
        <p>&copy; {new Date().getFullYear()} Galaxy Technologies. All rights reserved.</p>
        <div className="flex gap-lg">
          <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
          <span className="cursor-pointer hover:text-white transition-colors">
            Terms of Service
          </span>
        </div>
      </div>
    </footer>
  )
}
