import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ChangeItem } from "./components/ChangeItem";
import { Header } from "./components/Header";
import { PeopleList } from "./components/PeopleList";

function App() {
  return (
    <>
      <Header />
      <main className="container content">
        <Routes>
          <Route path="/" element={<PeopleList />} />

          <Route path="/posts/:id/edit" element={<ChangeItem />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
