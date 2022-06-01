import React from 'react';
import styles from './footerStyles.css'

function Footer() {
    return(
        <div style={{backgroundColor:'#FFB400', color:'#474744'}} className="footbox">
            <div>
              <p>
              Designed and Developed by SupplyX Team
              </p>
              <p>
                Copyright © <a href={'/'}>SupplyX</a> 2022
              </p>
            </div>
            
        </div>
    )
}

export default Footer;