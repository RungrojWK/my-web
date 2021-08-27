import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div style={{ height: 1500 }}>
                <nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
                    <a class="navbar-brand" href="#">Logo</a>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
