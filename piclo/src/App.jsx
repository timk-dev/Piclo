import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import React from "react";
import ReactDOM from "react-dom";

import { Route, Routes } from "react-router-dom";

import reactLazyWithRetry from '@fatso83/retry-dynamic-import/react-lazy';

const LazyLogin = reactLazyWithRetry(() => import("src/components/login"));
const LazyHome = reactLazyWithRetry(() => import("src/components/home"));
const LazyFeed = reactLazyWithRetry(() => import("components/feed"));
const LazyFeedFollowing = reactLazyWithRetry(() => import("components/feedFollowing"));
const LazyInbox = reactLazyWithRetry(() => import("components/inbox"));
const LazyNotif = reactLazyWithRetry(() => import("components/notifications"));
const LazyPost = reactLazyWithRetry(() => import("components/post"));
const LazySearch = reactLazyWithRetry(() => import("components/search"));
const LazyUser = reactLazyWithRetry(() => import("components/user"));
const LazyUserBot = reactLazyWithRetry(() => import("components/userBot"));
const LazyUserOther = reactLazyWithRetry(() => import("components/userOther"));
const LazyUserPost = reactLazyWithRetry(() => import("components/userPost"));
const LazyRegister = reactLazyWithRetry(() => import("components/acRegister"));
const LazyUserImgPost = reactLazyWithRetry(() => import("components/userImgPost"));
const LazyAppCont = reactLazyWithRetry(() => import("components/appCont"));

function App() {
  return (
    <>

      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Petit+Formal+Script&family=Questrial&family=VT323&display=swap" rel="stylesheet"></link>
      
      <main>
        <Routes>
          <Route path="/" exact="true" element={<LazyHome />} />
          <Route path="/notification" exact="true" element={<LazyNotif />} />
          <Route path="/search" exact="true" element={<LazySearch />} />
          <Route path="/post" exact="true" element={<LazyPost />} />
          <Route path="/inbox" exact="true" element={<LazyInbox />} />
          <Route path="/user" exact="true" element={<LazyUser />} />
          <Route path="/botuser" exact="true" element={<LazyUserBot />} />
          <Route path="/otheruser" exact="true" element={<LazyUserOther />} />
          <Route path="/feed" exact="true" element={<LazyFeed />} />
          <Route path="/feedfollowing" exact="true" element={<LazyFeedFollowing />} />
          <Route path="/login" exact="true" element={<LazyLogin />} />
          <Route path="/userpost" exact="true" element={<LazyUserPost />} />
          <Route path="/userimgpost" exact="true" element={<LazyUserImgPost />} />
          <Route path="/appcont" exact="true" element={<LazyAppCont />} />
          <Route path="/register" exact="true" element={<LazyRegister />} />
        </Routes>
      </main>
    </>
  );
}

export default App
