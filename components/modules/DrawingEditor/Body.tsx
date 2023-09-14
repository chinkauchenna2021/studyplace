import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  exportToCanvas,
  exportToSvg,
  exportToBlob,
  exportToClipboard,
  Excalidraw,
  useHandleLibrary,
  MIME_TYPES,
  sceneCoordsToViewportCoords,
  viewportCoordsToSceneCoords,
  restoreElements,
  LiveCollaborationTrigger,
  MainMenu,
  Footer,
  Sidebar
} from "@excalidraw/excalidraw";
import {
  AppState,
  BinaryFileData,
  ExcalidrawImperativeAPI,
  ExcalidrawInitialDataState,
  Gesture,
  LibraryItems,
  PointerDownState as ExcalidrawPointerDownState
} from "@excalidraw/excalidraw/types/types";

import { ResolvablePromise } from "@excalidraw/excalidraw/types/utils";

declare global {
  interface Window {
    ExcalidrawLib: any;
  }
}

type Comment = {
  x: number;
  y: number;
  value: string;
  id?: string;
};

type PointerDownState = {
  x: number;
  y: number;
  hitElement: Comment;
  onMove: any;
  onUp: any;
  hitElementOffsets: {
    x: number;
    y: number;
  };
};
// This is so that we use the bundled excalidraw.development.js file instead
// of the actual source code

const COMMENT_ICON_DIMENSION = 32;
const COMMENT_INPUT_HEIGHT = 50;
const COMMENT_INPUT_WIDTH = 150;



export default function DrawingEditor(){
  const [excalidrawAPI, setExcalidrawAPI] = useState(null);
  const [isCollaborating, setIsCollaborating] = useState(false);
  return (
    <div className="scroller overflow-hidden relative" style={{ height: "100%" }}>
      <p style={{ fontSize: "16px" }}>
        Selecting the checkbox to see the collaborator count
      </p>
      <label style={{ fontSize: "16px", fontWeight: "bold" }} className="fixed ">
        <input
          type="checkbox"
          checked={isCollaborating}
          onChange={() => {
    if (!excalidrawAPI) {
            return
          }


            if (!isCollaborating) {
              const collaborators = new Map();
              collaborators.set("id1", {
                username: "Doremon",
                avatarUrl: "../../../../img/doremon.png",
              });
              collaborators.set("id3", {
                username: "Pika",
                avatarUrl: "../../../../img/pika.jpeg",
              });

              // excalidrawAPI.updateScene({ collaborators });
            } else {
              // excalidrawAPI.updateScene({
              //   collaborators: new Map(),
              // });
            }
            setIsCollaborating(!isCollaborating);
          }}
        />
        Show Collaborators
      </label>
      <Excalidraw
        ref={(api) => setExcalidrawAPI(api as any)}
        renderTopRightUI={() => (
          <LiveCollaborationTrigger
            isCollaborating={isCollaborating}
            onSelect={() => {
              window.alert("You clicked on collaboration button");
              setIsCollaborating(true);
            }}
          />
        )}
      ></Excalidraw>
    </div>
  );
}

