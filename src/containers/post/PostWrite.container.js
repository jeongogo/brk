import React from 'react';
import { useRef, useState, useCallback, useEffect } from 'react';
import { useMutation } from 'react-query';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { wirtePost } from '../../lib/api/post';

const PostWriteContainer = () => {
  const quillElement = useRef(null);
  const quillInstance = useRef(null);

  const [post, setPost] = useState({
    title: '',
    body: '',
  });

  const mutation = useMutation((newPost) => wirtePost(newPost));

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  });

  const onSubmit = async () => {
    mutation.mutate(post);
    console.log(post);
  };

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'snow',
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

    const quill = quillInstance.current;
    quill.on('text-change', (delta, oldDelta, source) => {
      setPost((prevState) => ({ ...prevState, body: quill.root.innerHTML }));
    });
  }, []);

  return (
    <div className="post-wrap">
      <div className="write">
        <input
          type="text"
          onChange={handleChange}
          value={post.title || ''}
          placeholder="제목"
          name="title"
        />
        <div ref={quillElement}></div>
        <div className="btn-group">
          <button type="button" className="mint" onClick={onSubmit}>
            등록하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostWriteContainer;
