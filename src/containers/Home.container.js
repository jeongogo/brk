import React from 'react';
import { useQuery } from 'react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getPhotos } from '../lib/api/photo';
import { getPosts } from '../lib/api/post';
import Photo from '../components/photo/Photo';
import Post from '../components/post/Post';
import Loader from '../components/common/Loader';

import 'swiper/css';

const HomeContainer = () => {
  const {
    isLoading: photoLoading,
    data: photo,
    isError: photoError,
  } = useQuery(['photos'], () => getPhotos(1));

  const {
    isLoading: postLoading,
    data: post,
    isError: postError,
  } = useQuery('posts', getPosts);

  return (
    <div className="home-part">
      <div className="main-visual">
        <Swiper>
          <SwiperSlide>
            <img src="http://www.changetv.kr/upload/Ad/pc_bg(4).png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="http://www.changetv.kr/upload/Ad/pc_bg(5).png" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="section photo">
        <h1>추천 프로그램</h1>
        <p>스스로 몸과 마음의 건강을 지키고, 복잡했던 머리를 비워내다!</p>
        <ul className="list">
          {photoLoading ? (
            <Loader />
          ) : photoError ? (
            <div>Error</div>
          ) : (
            photo.data.map((photo) => (
              <li key={photo.id}>
                <Photo photo={photo} />
              </li>
            ))
          )}
        </ul>
      </div>
      <div className="section post">
        <h1>체인지TV 시청 후기</h1>
        <ul className="list">
          {postLoading ? (
            <Loader />
          ) : postError ? (
            <div>Error</div>
          ) : (
            post.data.map((post) => {
              if (post.id > 4) {
                return;
              }
              return (
                <li key={photo.id}>
                  <Post post={post} />
                </li>
              );
            })
          )}
        </ul>
      </div>
      <div className="section banner">
        <a href="https://www.brainmedia.co.kr/" target="_blank">
          <img
            src="http://www.changetv.kr/upload/Ad/20211108_브레인 메인띠배너.jpg"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default HomeContainer;
