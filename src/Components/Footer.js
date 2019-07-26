import React, { PureComponent } from 'react'
import styled from 'styled-components'

const FooterDiv = styled.div`{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height:50px;
}`

export class Footer extends PureComponent {
    render() {
        return (
            <FooterDiv >
                <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
                    <div className="container text-center">
                        <small>Copyright &copy; Your Website</small>
                    </div>
                </footer>
            </FooterDiv>
        )
    }
}

export default Footer
