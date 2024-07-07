import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';


class Navigation  extends Component {

    constructor(props){

        super(props);
        this.state = {
            isNavOpen: false,
        }
    }

    navToggle =()=>{

        this.setState({

            isNavOpen : !this.state.isNavOpen

        });
    }

    render(){
        return(
            <div>
                <Navbar dark color='dark'   >
                    <div className="container">
                        <NavbarToggler onClick={this.navToggle} />
                        <NavbarBrand href="/" >Restaurant</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className='mr-auto' navbar>
                                <NavItem>
                                    <Link to="/" className='nav-link active' >Home </Link>
                                    <Link to="/menu" className='nav-link ' >Menu </Link>
                                    <Link to="/about" className='nav-link ' >About </Link>
                                    <Link to="/contact" className='nav-link ' >Contact </Link>
                                </NavItem>
                            </Nav>

                        </Collapse>
                        {/* <Nav className='mr-auto' navbar>
                            <NavItem>
                                <Link to="/" className='nav-link active' >Home </Link>
                                <Link to="/menu" className='nav-link ' >Menu </Link>
                                <Link to="/about" className='nav-link ' >About </Link>
                                <Link to="/contact" className='nav-link ' >Contact </Link>
                            </NavItem>
                        </Nav> */}
                    </div>
                </Navbar>
            </div>
        )

    }


}

export default Navigation;

