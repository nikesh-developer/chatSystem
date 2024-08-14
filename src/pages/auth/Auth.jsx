import React from 'react'
import victory from '@/assets/victory.svg'
import { Tabs, TabsList } from '@radix-ui/react-tabs'
import { TabsContent, TabsTrigger } from '@/components/ui/tabs'

const Auth = () => {
  return (
   <div className='h-[100vh] w-[100vw] flex items-center justify-center'>

   <div className="h-[80vh]  w-[80vw]  bg-white border-2 border-white shadow-2xl text-opacity-90
   md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2
   ">
   <div className="flex flex-col gap-10 items-center justify-center">
     <div className="flex items-center justify-center flex-col ml-10">
      <div className='flex items-center justify-center'>
        <h1 className='text-5xl font-bold md:text-6xl'>Welcome</h1>
        <img src={victory} className='h-[100px]' alt="" />
      </div>
      <p className='font-medium text-center'>Fill in the details</p>
     </div>
     <div className="flex  items-center justify-center w-full">
    <Tabs className='w-3/4'>
      <TabsList className='flex'>
        <TabsTrigger 
        className="data-[state=active]:bg-transparent
        text-black text-opacity-90 border-b-2 rounded-none
        w-full data-[state=active]:text-black data-[state=active]:font-semibold
         data-[state=active]:border-b-purple-500 p-3 transition-all duration-300"
        value="login">Login</TabsTrigger>
        <TabsTrigger className="data-[state=active]:bg-transparent
        text-black text-opacity-90 border-b-2 rounded-none
        w-full data-[state=active]:text-black data-[state=active]:font-semibold
         data-[state=active]:border-b-purple-500 p-3 transition-all duration-300" value="signup">SignUp</TabsTrigger>
      </TabsList>
      <TabsContent className="" value="login"></TabsContent>
      <TabsContent className="" value="signup"></TabsContent>
    </Tabs>
    </div>
   </div>
  
   </div>

  
   </div>
  )
}

export default Auth