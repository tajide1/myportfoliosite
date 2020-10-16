import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl'
class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
               <Grid className="landing-grid">
                   <Cell col={12}>
                        <img 
                        src="../../myAvatar.png"
                        alt="avatar"
                        className="avatar-img"
                        />
                       <div className="banner-text">
                           <h1>Full Stack Software Developer</h1>
                           <hr/>
                           <p>HTML/CSS | JavaScript | NodeJS | MongoDB | Express | Java | Python</p>
                           <div className="social-links">
                               {/* linkedin */}
                               <a href="https://www.linkedin.com/in/oluwatobi-ajide-9b6b43122/"  rel="noopener noreferrer" target="_blank">
                                   <i className="fa fa-linkedin-square" aria-hidden="true"/>
                               </a>
                                {/* github */}
                                <a href="https://github.com/tajide1"  rel="noopener noreferrer" target="_blank">
                                   <i className="fa fa-github-square" aria-hidden="true"/>
                               </a>
                               {/* Instagram */}
                               <a href="https://www.instagram.com/poseidensea/"  rel="noopener noreferrer" target="_blank">
                                   <i className="fa fa-instagram-square" aria-hidden="true"/>
                               </a>
                               {/* twitter */}
                               <a href="https://twitter.com/PoseidenSea"  rel="noopener noreferrer" target="_blank">
                                   <i className="fa fa-twitter-square" aria-hidden="true"/>
                               </a>
                            </div>
                       </div>
                   </Cell>
               </Grid>
            </div>
        )
    }
}

export default Landing;