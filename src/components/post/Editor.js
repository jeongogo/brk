import { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';

const Editor = () => {
  const quillElement = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'bubble',
      placeholder: '내용을 작성하세요..',
      modules: {
        toolbar: [
          [{ header: '1' }, { header: '2' }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['blockquote', 'code-block', 'link', 'image'],
        ],
      },
    });
  }, []);

  return <div ref={quillElement} />;
};

export default Editor;
