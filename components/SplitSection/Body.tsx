import Split from "react-split";
import TeachingPad from "@/components/modules/TeachingPad/Body";
import EditorPage from "@/components/modules/Editor/Body";
import DrawingEditor from "@/components/modules/DrawingEditor/Body";
import SideBar from "@/components/modules/SiderBar/Body";
import Compiler from "@/components/modules/CompilerSection/Body";
import InputOutputSection from "@/components/modules/InputOutputSplit/Body";

interface IEditorState {
  editorState: {},
  setEditorState: React.Dispatch<React.SetStateAction<{}>>

}

export default function SplitEditor({ editorState , setEditorState }:IEditorState) {
  console.log(editorState, setEditorState);
  
  return (
    <div className="w-full h-screen relative">
      <Split className="split" minSize={400}>
        <EditorPage />
        <Compiler />
        {/* <InputOutputSection /> */}
      </Split>
    </div>
  );
}
