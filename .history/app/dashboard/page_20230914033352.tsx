'use client'

import React , {useRef , useState} from 'react';
process.env.NODE_NO_WARNINGS = 'stream/web';
import SplitEditor from '@/components/SplitSection/Body';
import { Button } from '@/components/ui/button';

import ModalBox from '@/components/modules/ModalBox/Body';
import SelectBtn from '@/components/modules/Select/Body';
import DashboardSideBar from '@/components/modules/DashboardSideBar/Body';

function Dashboard() {
  const [editorState, setEditorState] = useState({});



  
    const defaultPanelWidth = window.screen.width / 2.5;

    return (
      <div className="w-full max-h-screen grid grid-cols-5 overflow-hidden fixed">
        <DashboardSideBar />
        <div className="flex flex-col col-span-4 border w-full">
          <div className="h-10 grid grid-cols-2 w-full">
              <div className="w-full h-full col-span-1 items-center flex justify-between">
              <div className="w-fit">
                <ModalBox />
              </div>
              <div className="w-fit"></div>
              
              </div>
            <div className="w-full h-full col-span-1 items-center flex ">

                  <SelectBtn />
                <Button size="sm" className="bg-green-400 w-[70px] text-white hover:text-black">Run</Button>
              </div>
          </div>             
          <div className="w-full h-full">
            <SplitEditor editorState ={editorState} setEditorState={setEditorState} />
          </div>

        </div>
      </div>
    );

}

export default Dashboard;