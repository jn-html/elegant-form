import React from 'react';
import loginImg from '../../Loglock.png';

export class Register extends React.Component {
   
    render() {
        return ( <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Register</div>
            <div className="content">
                <div className="images">
                    <img src={loginImg} alt="log-reg" />
                </div>
                <div className="form">
                   <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username" />   
                    </div>
                   <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="email" />   
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Password</label>
                        <input type="password" name="password" placeholder="password" />
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">
                    Register
                </button>
            </div>
        </div>
        );
    }
    
}