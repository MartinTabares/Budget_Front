import React, { Component } from 'react';

class Navbar extends Component {
    render() { 
        return (
            <div className="row">
                <nav class = "navbar navbar-expand-lg navbar-dark bg-primary mb-3">
                        <a class="navbar-brand from-group col-md-8"> <font> Administracion de presupuesto </font> </a>

                        <div class = "collapse navbar-collapse from-group col-md-2" id = "navbarColor01">
                            <ul class = "navbar-nav mr-auto">
                                    <li class = "nav-item">
                                        <a class="nav-link" href="#"><font> Usuario </font> </a>
                                    </li>
                                    <li class = "nav-item">
                                        <a class="nav-link" href="#"> Home </a>
                                    </li>
                                    <li class = "nav-item">
                                        <a class="nav-link" href="#"> <font> ABM </font> </a>
                                    </li>
                            </ul>
                        </div>
                </nav>

            </div>
        );
    }
}
 
export default Navbar;