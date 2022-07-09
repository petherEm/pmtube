import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="bg-black text-white flex items-center justify-center h-8 p-8">
        <h1 className="text-xl">Developed by <Link href="https://www.piotrmaciejewski.com" target="_blank"><a className="font-bold">Piotr Maciejewski</a></Link></h1>
    </div>
  )
}

export default Footer