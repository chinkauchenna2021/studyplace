import React from 'react';
import Split from 'react-split'
import Compiler from '@/components/modules/CompilerSection/Body';
import InputSection from '@/components/modules/InputSection/Body'
import "./component/Styles.css";

function InputOutputSection() { 
    return (
       <Split
    className="split"
    direction="horizontal"
    minSize={200}
      >    
     <Compiler />
     <InputSection />
   </Split >
 );
  
}

export default InputOutputSection