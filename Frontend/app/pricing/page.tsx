import React from 'react'
import PricingCard from '../Components/PricingCard'
import { PricingPackages } from '../lib/pricingPackageDetails';

function page() {
  return (
    <div className=' min-h-[70vh] w-full p-1'>

       <div className='pricing-heading flex items-center justify-center flex-col mt-5 '>
          <h1 className='text-3xl font-semibold mb-2'>Choose Your Muzer Plan</h1>
          <p className='text-gray-400 text-sm'>Unlock unlimited music streaming, create collaborative playlists, and join live streams</p>
          <p className='text-gray-400 text-sm'>with friends.</p>
        </div> 

        <div className=' flex gap-4 pricing-cards mt-12 w-[60vw] mx-auto'>
          <PricingCard tier='Free' btnText='Continue Free' pricing={0} features={PricingPackages.Free}  pricingPackageName='Basic Experience' />
          <PricingCard tier='Premium' btnText='Try 7 Days Free' pricing={9.99} features={PricingPackages.Premium}  pricingPackageName='Full Experience' />
          <PricingCard tier='Family' btnText='Get Family Plan' pricing={14.99} features={PricingPackages.ShareWithFamily}  pricingPackageName='Share With Family'/>
        </div>
     
    </div>
  )
}

export default page
