import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAuth, logOut } from 'redux/userSlice/operations';
import { StyledNav, StyledNavLink } from './App.styled';

// const LazyHome = lazy(() => import('./pages/HomePage/HomePage'));
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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {/* <SignUpForm />
      <SignInForm />
      <button onClick={onLogOut}>Log Out</button>
      <h1
        style={{
          fontSize: 40,
          color: '#1251cc',
        }}
      >
        Phonebook
      </h1>
      <ContactForm />
      <h2
        style={{
          fontSize: 40,
          color: '#1251cc',
        }}
      >
        Contacts
      </h2>
      <Filter />
      <ContactList /> */}
      <StyledNav>
        {!!user?.user ? (
          <>
            {/* <StyledNavLink to="/">Home</StyledNavLink> */}
            <StyledNavLink to="/contacts">Contacts</StyledNavLink>
            <button onClick={onLogOut}>Log Out</button>
            <p>Вітаємо, {user.user.name}</p>
          </>
        ) : (
          <>
            {/* <StyledNavLink to="/">Home</StyledNavLink> */}
            <StyledNavLink to="/sign-up">Register</StyledNavLink>
            <StyledNavLink to="/sign-in">Login</StyledNavLink>
          </>
        )}
      </StyledNav>
      <Suspense fallback={<p>Wait, page is downloading...😒</p>}>
        <Routes>
          {/* <Route path="/" element={<LazyHome />} /> */}
          <Route path="/contacts" element={<LazyContacts />} />
          <Route path="/sign-up" element={<LazySignUp />} />
          <Route path="/sign-in" element={<LazySignIn />} />
        </Routes>
      </Suspense>
    </div>
  );
};
