// import { Geist, Geist_Mono } from "next/font/google";

"use client";
import "./globals.css";
import Link from "next/link";
import { Provider } from "react-redux";
import store from "./Todolist/Store"; 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <nav className="navbar">
            <Link href="/">Home</Link>
            <Link href="/About">About</Link>
            <Link href="/Todolist">To-Do List</Link>
            <Link href="/Product"> Our Products</Link>
            <Link href="/Contact">Contact Us</Link>
            <Link href="/User">User</Link>
          </nav>

          {children}
        </Provider>
      </body>
    </html>
  );
}

