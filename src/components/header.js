import React, { Component } from 'react';
import "./header.css"
import HeaderMenu from "./header-menu"

const data = require('../data')

export default class Header extends Component {

  state = {
    isMenuExpanded:false
  };

  toggleMenu = () => {
    this.setState(prevState => ({ isMenuExpanded: !prevState.isMenuExpanded }));
  };

  render(props) {
    return (
      <header>
          <nav>
            <ul>
              <li className={this.state.isMenuExpanded ? 'icon-hamburger close': 'icon-hamburger'}>
                <button type="button" aria-label="open menu" onClick={this.toggleMenu}>
                  <div className="hamburger-item hamburger-item-bun"></div>
                  <div className="hamburger-item hamburger-item-paddy"></div>
                  <div className="hamburger-item hamburger-item-bun"></div>
                </button>
              </li>
              <li className="logo-stox">
                <a href="/">
                  <svg width="158" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.9.35H14.93v2.17h7.38v17.17h2.23V2.52h7.38V.35zm9.74-.3c-5.6 0-10.12 4.46-10.12 9.97 0 5.51 4.53 9.98 10.12 9.98 5.6 0 10.12-4.47 10.12-9.98 0-5.51-4.53-9.98-10.12-9.98zm0 17.76a7.85 7.85 0 01-7.91-7.79c0-4.3 3.54-7.79 7.9-7.79a7.85 7.85 0 017.92 7.79c0 4.3-3.55 7.79-7.91 7.79zM50.59.35l8.71 8.58h1.56V7.38L53.73.35h-3.14zm22.8 0h-3.14l-7.16 7.03V8.9h1.58L73.38.35zM63.08 11.1v1.53l7.16 7.05h3.13l-8.7-8.58h-1.59zm-12.5 8.58h3.14l7.15-7.05v-1.53h-1.56l-8.73 8.58zM7.64 8.1c-1.86-.2-5-.84-5-2.95 0-1.6 2.16-2.93 4.7-2.93 1.64 0 3.11.54 4 1.44l1.63-1.54A8.1 8.1 0 007.32 0C3.42 0 .37 2.27.37 5.16c0 1.64.92 4.51 7.03 5.15 4.83.51 5.45 2.25 5.45 3.73 0 2-2.54 3.7-5.55 3.7-2.38 0-4.53-1.06-5.3-2.58l-2 .97c1.13 2.3 4.06 3.85 7.32 3.85 4.3 0 7.8-2.66 7.8-5.94 0-3.43-2.52-5.43-7.48-5.95z" fill="#000"/><path d="M77.25 5.12h.82v9.63h-.82V5.12zM113.46 10.74h1.58c.02 1.13-.61 1.8-1.66 1.8a1.7 1.7 0 01-1.35-.65 3.14 3.14 0 01-.51-1.95c0-.82.18-1.43.53-1.84.33-.41.82-.64 1.35-.64.86 0 1.4.5 1.6 1.48l.74-.13a2.54 2.54 0 00-.78-1.47 2.2 2.2 0 00-1.56-.58 2.46 2.46 0 00-1.88.84 3.31 3.31 0 00-.78 2.34c0 1.15.3 2.05.8 2.54.49.5 1.14.76 1.84.76.66.02 1.3-.23 1.74-.68.45-.45.66-1.08.66-1.88v-.62h-2.34l.02.68zM88.81 13.12h-3.77V6.9h3.77v.67h-3.03V9.6h2.79v.68h-2.8v2.19h3.04v.66zM91.99 6.9l2.89 5v-5h.73v6.22h-.77l-2.9-5h-.01v5h-.74V6.9h.8zM98.22 13.12H102v-.66h-3.03v-2.2h2.78V9.6h-2.78v-2H102V6.9h-3.8v6.2z" fill="#6C6C6C"/><path fillRule="evenodd" clipRule="evenodd" d="M106.82 6.9c1.3 0 2.1.64 2.1 1.85 0 1-.6 1.62-1.52 1.78l1.4 2.59h-.85l-1.37-2.54h-1.44v2.54h-.73V6.9h2.41zm-1.66 3.02h1.62c.84 0 1.42-.35 1.4-1.17 0-.78-.48-1.17-1.42-1.17h-1.6v2.34z" fill="#6C6C6C"/><path d="M117.85 6.9l1.62 2.9 1.6-2.9h.82l-2.07 3.6v2.62h-.72v-2.63l-2.07-3.58h.82zM128.77 9.53A4.75 4.75 0 01127.5 9a.72.72 0 01-.29-.58c0-.53.43-.92 1.23-.92.9 0 1.3.41 1.44 1.17l.75-.16c-.16-1.13-1-1.73-2.19-1.73a2.18 2.18 0 00-1.45.48c-.33.28-.53.71-.53 1.14 0 .86.55 1.34 1.94 1.77.72.24 1.19.45 1.42.61.2.16.32.43.32.7 0 .61-.49 1.06-1.41 1.06-.57 0-1-.12-1.25-.4a2.52 2.52 0 01-.51-1.34l-.78.14c.18 1.52 1.02 2.28 2.52 2.28.67 0 1.23-.17 1.6-.51.37-.33.6-.8.57-1.3a1.57 1.57 0 00-.43-1.12c-.27-.23-.84-.5-1.68-.76z" fill="#6C6C6C"/><path fillRule="evenodd" clipRule="evenodd" d="M134.27 6.98c.33-.15.68-.22 1.04-.22.7 0 1.37.33 1.84.84.51.58.78 1.38.78 2.38 0 1.15-.3 2.05-.82 2.54a2.62 2.62 0 01-3.65-.02c-.49-.49-.82-1.4-.82-2.54 0-1.02.27-1.8.78-2.36.24-.26.53-.48.85-.62zm-.85 2.98c0 1.7.78 2.6 1.89 2.6 1.08 0 1.84-.86 1.84-2.56a2.9 2.9 0 00-.53-1.86 1.6 1.6 0 00-1.31-.66c-.53 0-1.03.23-1.35.64-.35.4-.54 1.02-.54 1.84z" fill="#6C6C6C"/><path d="M142.5 12.56c-1.1 0-1.88-.9-1.88-2.6 0-.82.18-1.43.53-1.84a1.7 1.7 0 011.35-.64c.88 0 1.43.53 1.6 1.6l.76-.12a2.6 2.6 0 00-.76-1.58c-.43-.41-1-.62-1.6-.6a2.46 2.46 0 00-1.88.84 3.33 3.33 0 00-.78 2.36c0 1.15.32 2.05.82 2.54.49.5 1.14.76 1.84.74 1.4 0 2.25-.88 2.38-2.34l-.78-.1c-.13 1.15-.68 1.74-1.6 1.74zM150.29 6.9h.94l-2.3 2.71 2.57 3.5h-.9l-2.16-2.94h-.02l-.7.8v2.15H147V6.9h.73v3.03h.03l2.54-3.03zM156.88 10.33a4.38 4.38 0 00-1.67-.8 4.76 4.76 0 01-1.28-.53.72.72 0 01-.28-.58c0-.53.43-.92 1.23-.92.9 0 1.29.41 1.43 1.17l.76-.16c-.14-1.13-1-1.73-2.2-1.73a2.18 2.18 0 00-1.45.48c-.35.28-.53.71-.53 1.14 0 .86.55 1.34 1.95 1.77.71.24 1.19.45 1.41.61.2.16.33.43.33.7 0 .61-.5 1.06-1.42 1.06-.57 0-1-.12-1.25-.4a2.52 2.52 0 01-.5-1.34l-.79.14c.19 1.52 1.03 2.28 2.52 2.28.68 0 1.23-.17 1.6-.51.37-.33.6-.8.58-1.3.04-.36-.13-.77-.44-1.08z" fill="#6C6C6C"/></svg>
                </a>
              </li>
              <li className="icon-cart">
                <button type="button" aria-label="open cart">
                  <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.4286 3.80952C11.4286 2.79918 11.0272 1.83021 10.3128 1.11578C9.59837 0.401359 8.6294 0 7.61905 0C6.6087 0 5.63973 0.401359 4.9253 1.11578C4.21088 1.83021 3.80952 2.79918 3.80952 3.80952H0L0.0128464 20H15.2381V3.80952H11.4286ZM7.62524 1.25238C7.95042 1.26011 8.27077 1.3329 8.56736 1.46644C8.86395 1.59998 9.13078 1.79158 9.35213 2.02992C9.57347 2.26826 9.74483 2.54853 9.8561 2.85418C9.96737 3.15982 10.0163 3.48466 10 3.80952H5.2381C5.22316 3.48397 5.27343 3.15871 5.38597 2.85287C5.49852 2.54702 5.67108 2.26675 5.89347 2.02852C6.11586 1.79029 6.3836 1.59892 6.681 1.46563C6.97839 1.33235 7.29943 1.25984 7.62524 1.25238V1.25238ZM14.2857 18.5714H1.42857V5.2381H3.80952V6.19048H5.2381V5.2381H10V6.19048H11.4286V5.2381H13.8095V19.0476L14.2857 18.5714Z" fill="black"/>
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
          { (this.state.isMenuExpanded ?
              <HeaderMenu data={data} />
          :
          null
          )}
      </header>
    );
  }
}
