'use client'
import React, { useRef } from 'react';
import Editor, { useMonaco } from '@monaco-editor/react';


export default function EditorPage() {
  const editorRef = useRef(null);
  
  function handleEditorDidMount(editor:any, monaco:any) {
    editorRef.current = editor;
  }

  
    return (
    <div className="w-full h-screen overflow-hidden">
  <div className="w-full h-[100%]">
    <Editor
   height="100vh"
   className="!h-[100%] !w-full"
   theme="vs-dark"
   defaultLanguage="javascript"
   defaultValue="const number = 20;"
  //  beforeMount={handleEditorWillMount}
   onMount={handleEditorDidMount}
        
          />       
        </div>
        </div>
    );       
      
}