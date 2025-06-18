import React from 'react'
import Link from 'next/link'
import {FileText} from "lucide-react"
const Footer = () => {
  return (
    <div className='bg-gray-900 w-full flex flex-col items-center justify-center p-4 text-white'>
       <Link href="/" className="flex mt-5 mb-5 items-center space-x-2 cursor-pointer">
          <FileText className="h-8 w-8 text-white" />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-white">
            CVPlatform
          </span>
        </Link>
        <p className='text-center text-gray-400 mt-5 mb-5'>La plateforme qui connecte les talents aux opportunités</p>
    </div>
  )
}

export default Footer
