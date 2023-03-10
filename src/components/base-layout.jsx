import React, { Component } from 'react';
import Box from '@mui/material/Box';
import MenuAside from './menu-aside';
import Header from './header';
import Divider from '@mui/material/Divider';
class BaseLayout extends Component {
    render(props) {
        return (
            <Box container={true}
                height="100%" width='100%' display="inline-flex" flexDirection="column" >
                <Box item width="100%" sx={{ backgroundColor: 'white' }}>
                    <Header />
                    <Divider></Divider>
                </Box>
                <Box container={true} height="100%" width='100%' display="inline-flex" flexDirection="row" >

                    <Box item width='20%' height="100%" sx={{ backgroundColor: 'white', borderRightStyle: 'solid', borderRightWidth: '0.001em', borderRightColor: 'rgba(0, 0, 0, 0.12)' }}>
                        <MenuAside />

                    </Box>
                    <Box item width='80%' sx={{ p: 2 }}>
                        {this.props.children}
                    </Box>
                </Box>


            </Box>
        )
    }
};

export default BaseLayout;