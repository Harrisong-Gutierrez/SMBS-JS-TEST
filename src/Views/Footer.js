import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="p-4 sm:p-6 bg-gray-600">
    <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
            <a href="%PUBLIC_URL%/favicon.ico" className="flex items-center">
                <img src="https://s3.us-east-2.amazonaws.com/static.smbssolutions.com/logos/smbs-logo-header.png" className="mr-3 h-8" alt="FlowBite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Solutions</span>
            </a>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
                <h2 className="text-white">Resources</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-4">
                        <a href="%PUBLIC_URL%/favicon.ico" className="hover:underline">Flowbite</a>
                    </li>
                    <li>
                        <a href="%PUBLIC_URL%/favicon.ico" className="hover:underline">Tailwind CSS</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="text-white">Follow us</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-4">
                        <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                    </li>
                    <li>
                        <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="text-white">Legal</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          
        </div>
    </div>
</footer>
    </div>
  )
}

export default Footer
