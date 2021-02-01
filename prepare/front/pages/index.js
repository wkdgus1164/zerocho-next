import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AppLayout from '../components/AppLayout';

import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import {LOAD_POST_REQUEST} from '../reducers/post';

const Home = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.user.logInComplete);
  const mainPosts = useSelector(state => state.post.mainPosts);
  const hasMorePost = useSelector(state => state.post.hasMorePost);
  const loadPostLoading = useSelector(state => state.post.loadPostLoading);

  useEffect(() => {
    dispatch({
      type: LOAD_POST_REQUEST,
    });
  }, []);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY + document.documentElement.clientHeight
        > document.documentElement.scrollHeight - 300) {
        if (hasMorePost && !loadPostLoading) {
          dispatch({
            type: LOAD_POST_REQUEST,
          });
        }
      }
    }

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePost, loadPostLoading]);

  return (
    <AppLayout>
      {isLoggedIn && <PostForm/>}
      {mainPosts.map(post => <PostCard key={post.id} post={post}/>)}
    </AppLayout>
  );
};

export default Home;