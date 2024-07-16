import { useState } from "react";
import TinyMCE from "./TinyMCE";

export default function ContentEditor() {
  const [editorState, setEditorState] = useState<string>("");

  const handleChangeEditor = (content: string, length: number) => {
    setEditorState(content);
    // setCount(length);
  };

  return <TinyMCE value={editorState} onEditorChange={handleChangeEditor} />;
}
