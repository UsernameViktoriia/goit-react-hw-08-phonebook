import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAuth, logOut } from 'redux/userSlice/operations';
import {
  HeaderWrapper,
  PagesWrapper,
  StyledNav,
  StyledNavLink,
  UserMail,
  UserName,
  UserWrapper,
} from './App.styled';
import { Button } from 'components/Button/Button';
import NotFound from 'pages/NotFound/NotFound';
import Loader from 'components/Loader/Loader';

const LazyHome = lazy(() => import('./pages/HomePage/HomePage'));
const LazySignUp = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const LazySignIn = lazy(() => import('./pages/SignInPage/SignInPage'));
const LazyContacts = lazy(() => import('./pages/ContactsPage/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.userData);

  useEffect(() => {
    if (!localStorage.getItem('token')) return;

    dispatch(getAuth());
  }, [dispatch]);

  const onLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <StyledNav>
        {!!user?.user ? (
          <HeaderWrapper>
            <PagesWrapper>
              <StyledNavLink to="/">Home</StyledNavLink>
              <StyledNavLink to="/contacts">Contacts</StyledNavLink>
            </PagesWrapper>
            <PagesWrapper>
              <UserWrapper>
                <p>
                  Welcome, <UserName>{user.user.name}</UserName>
                </p>
                <UserMail>{user.user.email}</UserMail>
              </UserWrapper>
              <Button onClick={onLogOut}>Log Out</Button>
            </PagesWrapper>
          </HeaderWrapper>
        ) : (
          <HeaderWrapper>
            <StyledNavLink to="/">Home</StyledNavLink>
            <PagesWrapper>
              <StyledNavLink to="/register">Register</StyledNavLink>
              <StyledNavLink to="/login">Log-in</StyledNavLink>
            </PagesWrapper>
          </HeaderWrapper>
        )}
      </StyledNav>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LazyHome />} />
          <Route path="/contacts" element={<LazyContacts />} />
          <Route path="/register" element={<LazySignUp />} />
          <Route path="/login" element={<LazySignIn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
