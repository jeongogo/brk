import React from 'react';
import { useSelector } from 'react-redux';
import AppHeader from '../components/AppHeader';

const AppHeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  return <AppHeader user={user} />;
};

export default AppHeaderContainer;
