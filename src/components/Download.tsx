import React from 'react'

import downloadPNg from '../../public/images/download.png'
import google from '../../public/images/googleDl.png'
import appStore from '../../public/images/appStoreDl.png'
import Image from 'next/image'

const Download = () => {
  return (
    <section className='container mx-auto h-screen flex flex-col-reverse lg:flex-row items-center justify-start gap-6'>

        <div className="relative w-full h-[90vh] basis-1/2">
            <Image alt='image' src={downloadPNg} objectFit='contain' layout='fill' className='relative block'/>
        </div>

        <div className="basis-2/5">
            <p>Download app</p>
            <h1 className='text-4xl'>Download app for your smart phone now</h1>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam nam, dicta deserunt, illo corrupti officia molestias possimus tempora laborum distinctio.
            </p>

            <div className="flex items-center justify-between w-2/3 mt-8">
                <div className="basis-1/2 relative h-12">
                    <Image alt='Image' src={google} layout='fill' objectFit='contain' className='relative block'/>
                </div>

                <div className="basis-1/2 relative h-12">
                    <Image alt='Image' src={appStore} layout='fill' objectFit='contain' className='relative block'/>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Download
