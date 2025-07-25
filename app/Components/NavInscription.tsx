import React from 'react'
import {FileText, ArrowLeft} from "lucide-react"
import Link from "next/link"

const NavBar = () => {
  return (
    <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
      <Link href="/" className="flex items-center space-x-2 cursor-pointer">
          <FileText className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            CVPlatform
          </span>
        </Link>
        <div className="flex space-x-4">
          <Link href="/" className='cursor-pointer flex flex-row gap-2 text-black font-bold ring-gray-300 rounded-md p-2 hover:bg-gray-100'>
          <ArrowLeft />
            Retour
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default NavBar
