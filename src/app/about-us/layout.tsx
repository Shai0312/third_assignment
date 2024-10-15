import React, {ReactNode} from "react"

export default function Layout({children}:{children:ReactNode}){
    return(
<div>
<div className="h-20 flex  justify-center items-center  bg-green-800 font-semibold text-lg  text-gray-50  ">
            
            
        <button className="  p-2 hover:bg-green-500 rounded-md mx-6  "><a href="/">Back to home</a></button>
         </div>
         {children}
</div>
    )
}