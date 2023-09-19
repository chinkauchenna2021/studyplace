import React from 'react'

export const SideNavViewComponent = () => {
  return (
    <div className='w-full h-full '>
        {/* online users */}
        <div className='w-full flex items-center justify-center'>
            <div className='w-[95%] mt-4'>
                <p>Online Students</p>

                <div className='flex flex-col w-full mt-5 gap-y-4'>
                     <div className='w-full'>
                        <div className='flex gap-x-3 w-full items-center '>
                            <div className='relative'>
                               <img className='h-12 w-12 rounded-full bg-cover bg-center' src="https://images.pexels.com/photos/12101790/pexels-photo-12101790.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                                <div className='w-3 h-3 rounded-full bg-green-500 absolute -right-1 bottom-2'></div>
                            </div>
                            <div className=' flex flex-col'>
                               <h6 className=' capitalize'>jane Orchard</h6>
                               {/* <p>hey! there </p> */}
                            </div>
                        </div>
                     </div>
                     <div className='w-full '>
                        <div className='flex gap-x-3 w-full items-center  '>
                            <div className='relative'>
                               <img className='h-12 w-12 rounded-full bg-cover bg-center' src="https://images.pexels.com/photos/12101790/pexels-photo-12101790.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                                <div className='w-3 h-3 rounded-full bg-green-500 absolute -right-1 bottom-2'></div>
                            </div>
                            <div className=' flex flex-col'>
                               <h6 className=' capitalize'>jane Orchard</h6>
                               {/* <p>hey! there </p> */}
                            </div>
                        </div>
                     </div>
                </div>

            </div>
        </div>
    </div>
  )
}


