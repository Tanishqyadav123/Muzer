import React from 'react'
import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import PricingCardButton from './PricingCardButton';
;

interface PricingPackageFeature  {
    title  : string;
    checked : boolean;
}

function PricingCard({pricingPackageName , features , pricing , tier , btnText } : 
    {pricingPackageName : string , features : PricingPackageFeature[] ,  pricing : number, tier  : string, btnText : string }
) {
  return (
    <div className='w-[20vw] min-h-[50vh] bg-[#1f2a38] p-4 rounded-lg'>
        
        <div className='flex justify-between items-center h-[10%]'>
            <p className='package-tier rounded-full flex items-center justify-center uppercase bg-[#374152]  min-w-[35%]'>{tier}</p>

            <p className='package-pricing text-gray-500 text-sm'>${pricing}/{"month"}</p>
        </div>

        <h1 className='package-heading mt-4'>{pricingPackageName}</h1>

        <div className='package-points mt-2 flex items-start justify-center flex-col'>
           {
            features.map((elem : {title : string , checked : boolean} , index : number) =>{
                 return <div key={index} className={`flex items-center gap-2 my-3 text-sm ${elem.checked ? "text-white" : "text-[#5e6066]"}`}>
                   {elem.checked ? <IoMdCheckmark /> : <RxCross2 />}
                   {elem.title}
                 </div>
            })
           }
        </div>

       <div className='mt-10 flex items-center justify-center'>
         <PricingCardButton btnText={btnText} color= {tier === 'Premium' ? 'bg-gray-400' : 'bg-[#1f2a38]'}  />
       </div>
    </div>
  )
}

export default PricingCard
