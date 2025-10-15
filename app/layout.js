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
            <Link href="/Todolist">Listuu</Link>
            <Link href="/Product">Product</Link>
            <Link href="/Contact">Contact</Link>
            <Link href="/User">User</Link>
          </nav>

          {children}
        </Provider>
      </body>
    </html>
  );
}

