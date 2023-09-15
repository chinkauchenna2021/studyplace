'use client'

import Editor, { useMonaco } from '@monaco-editor/react';


export default function EditorPage() {

  function handleEditorDidMount(editor:an, monaco ) {
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