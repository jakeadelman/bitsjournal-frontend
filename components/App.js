import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header/Header";
import styled from "styled-components";

export default ({ children }) => (
  <main>
    {children}
    {/* <style jsx global>{`
      * {
        font-family: Menlo, Monaco, "Lucida Console", "Liberation Mono",
          "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New",
          monospace, serif;
      }
      a {
        color: #22bad9;
      }
      p {
        font-size: 14px;
        line-height: 24px;
      }
      article {
        margin: 0 auto;
        max-width: 650px;
      }
      button {
        align-items: center;
        background-color: #22bad9;
        border: 0;
        color: white;
        display: flex;
        padding: 5px 7px;
      }
      button:active {
        background-color: #1b9db7;
        transition: background-color 0.3s;
      }
      button:focus {
        outline: none;
      }
    `}</style> */}
  </main>
);
