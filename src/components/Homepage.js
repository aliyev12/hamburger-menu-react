import React, {Component} from 'react';
import '../styles/Homepage.css';
import Menu from './Menu';
import Hamburger from './Hamburger';

export default class Homepage extends Component {
    render() {
        return (
            <>
                <Menu />
                <header className="showcase">
                    <div className="container showcase-inner">
                        <h1>Welcome</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aut, mollitia. Culpa dolores obcaecati
                            incidunt possimus. Impedit quaerat nulla laboriosam
                            ex!
                        </p>
                        <a href="JavaScript:Void(0);" className="btn">
                            Read More
                        </a>
                    </div>
                </header>
            </>
        );
    }
}
