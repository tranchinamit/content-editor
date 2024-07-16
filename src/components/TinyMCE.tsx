import React from "react";

import { Editor } from "@tinymce/tinymce-react";
import { Editor as TinyMCEEditor } from "tinymce";

const plugins = [
  "advlist",
  "autolink",
  "lists",
  "link",
  "image",
  "charmap",
  "preview",
  "anchor",
  "searchreplace",
  "visualblocks",
  "code",
  "insertdatetime",
  "media",
  "table",
  "help",
];
const toolbar =
  "undo redo | blocks | " +
  "bold italic forecolor | alignleft aligncenter " +
  "alignright alignjustify | bullist numlist outdent indent | " +
  "removeformat | help";

const validElements =
    "pre[*],script[*],style[*],a[*],div[*],p[*],section[*],img[*],figure[*],figcaption[*]",
  validChildren =
    "+body[style|script],pre[script|div|p|br|span|img|style|h1|h2|h3|h4|h5],a[div|h1|h2|h3|h4|h5|p|span|img|figure|figcaption|section|br|#text]",
  fontFormats =
    "Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Open Sans=open sans;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;",
  fontSizeFormats =
    "x-small=10px small=12px medium=16px large=18px x-large=24px";

export function stripNewLines(value: string): string {
  return value.replace(/\n/g, "");
}

export interface IProps {
  value: string;
  onEditorChange: (value: string, charLength: number) => void;
  disabled?: boolean;
}

export default function TinyMCE(props: IProps) {
  const { value, onEditorChange, disabled } = props;

  const handleOnEditorChange = (newValue: string, editor: TinyMCEEditor) => {
    console.log("💊 ~ newValue:", newValue);
    console.log("💊 ~ editor:", editor);
    console.log("💊 ~ content:", editor.getContent({ format: "text" }));
    console.log("💊 ~ content:", editor.getContent({ format: "text" })?.length);

    const charLength = editor.getContent({ format: "text" })?.length ?? 0;

    onEditorChange(newValue, charLength);
  };

  return (
    <Editor
      // apiKey='slo1xjjfmdog5ic8m59rpnhf45cmb3urqlv8m9rojv3j0p6v'
      tinymceScriptSrc="/tinymce/tinymce.min.js"
      value={value}
      onEditorChange={handleOnEditorChange}
      init={{
        height: "inherit",
        menubar: true,
        statusbar: true,
        plugins,
        // menu: {
        //   preview: { title: "Preview", items: "code" },
        // },
        // plugins: "code",
        // menubar: "preview",
        toolbar,
        // inline: true,
        validElements,
        validChildren,
        fontFormats,
        fontSizeFormats,
        entity_encoding: "raw",
        browser_spellcheck: false,
      }}
      disabled={disabled}
    />
  );
}
