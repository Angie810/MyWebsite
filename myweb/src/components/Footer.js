import React from 'react'
import {MDBCol, MDBContainer, MDBRow, MDBFooter} from 'mdbreact'


function Footer(){
    return(
            <MDBFooter color="grey" className="font-small pt-4 mt-4">
              <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                <div className="mx-auto">
  <h2>Mobile: 072-316 55 76</h2>
  <h2>E-mail: angie.granberg@gmail.com</h2>
</div>
                </MDBRow>

               
              </MDBContainer>
              <MDBRow className="footer-row">
                <MDBContainer fluid>
                  &copy; {new Date().getFullYear()} Copyright: Angie Xiaotong Huang
                </MDBContainer>
              </MDBRow>
            </MDBFooter>
          

    )
}
export default Footer;