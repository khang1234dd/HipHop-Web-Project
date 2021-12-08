import React, { useState } from 'react';
import { EditorState, convertToRaw, ContentFromHTML } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import {styled} from '@mui/material/styles';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {convertToHTML, convertFromHTML} from 'draft-convert'
// import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';

const styles = {
    editorWarp: {
        height: '100%',
    },
    editorEditorStyle: { 
        overflow: 'auto',
        height: '200px !important',
    },

}
const EditorWarp = styled('div') ({
    height: 'auto',
    width:'100%',
})



const PostEditor = ({data,setConvertedContent}) => {
    // const [editor,setEditor] = useState(EditorState.createEmpty())
    const valueDefault = data ? EditorState.createWithContent(convertFromHTML(data.description)) : EditorState.createEmpty();
    const [editordefault,setEditorDefault] = useState(valueDefault)

    const handleEditorChange = (state) => {
      setEditorDefault(state);
        convertContentToHTML();
      }
      const convertContentToHTML = () => {
        let currentContentAsHTML = convertToHTML(editordefault.getCurrentContent());
        setConvertedContent(currentContentAsHTML);
      }
      // function uploadImageCallBack(file) {
      //   return new Promise(
      //     (resolve, reject) => {
      //       const reader = new FileReader(); // eslint-disable-line no-undef
      //       reader.onload = e => resolve({ data: { link: e.target.result } });
      //       reader.onerror = e => reject(e);
      //       reader.readAsDataURL(file);
      //     });
      // }

    return (
        <EditorWarp>
            <Editor
              
              defaultEditorState={editordefault}
              wrapperClassName={styles.editorWarp}
              editorClassName={styles.editorEditorStyle}
              editorStyle={{ border: "1px solid #9B2335" , overflow: "auto", height: '150px', width: '450px'}}
              toolbarStyle={{ border: "1px solid #9B2335"}}
              toolbar={{
                inline: { inDropdown: true },
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                link: { inDropdown: true },
                history: { inDropdown: true },
                image: { 
                  // uploadCallback: uploadImageCallBack,
                  // previewImage: true,
                  alt: { present: true, mandatory: true } },
                
              }}
              onEditorStateChange={handleEditorChange}
            />
            {/* <textarea
              disabled
              value={draftToHtml(convertToRaw(editor.getCurrentContent()))}
            /> */}
        </EditorWarp>
    )
}

export default PostEditor
