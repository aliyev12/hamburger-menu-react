import React, {Component} from 'react';
import '../styles/Menu.css';
import Hamburger from './Hamburger';

export default class Menu extends Component {
  render () {
    return (
      <div className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <Hamburger />
        <div className="menu">
          <div>
            <div>
              <ul>
                <li><a href="JavaScript:Void(0);">Home</a></li>
                <li><a href="JavaScript:Void(0);">About</a></li>
                <li><a href="JavaScript:Void(0);">Services</a></li>
                <li><a href="JavaScript:Void(0);">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
