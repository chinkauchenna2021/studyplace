"use client"

import dynamic from "next/dynamic";
import 'suneditor/dist/css/suneditor.min.css';

const SunEditor = dynamic(() => import("suneditor-react"), {
 ssr: false,
});



export default function TeachingPad() {



    return(
       <div className="h-screen hidden lg:flex">
          <SunEditor />
       </div>
    )
}