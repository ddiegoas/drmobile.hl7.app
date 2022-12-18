import React, { Component } from 'react';
 import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import InboxIcon from '@mui/icons-material/Inbox';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
class MenuAside extends Component {
    render(props) {
        return (

         <div>
                  <List
                            subheader={
                                <ListSubheader component="div" id="nested-list-subheader">
                                    Principais Opções
                                </ListSubheader>
                            }
                        >
                            <ListItemButton>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Dashboard" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <MedicalServicesIcon />
                                </ListItemIcon>
                                <ListItemText primary="Pacientes" />
                            </ListItemButton>
                        </List>
                        <Divider></Divider>
                        <List
                            subheader={
                                <ListSubheader component="div" id="nested-list-subheader">
                                    Veja Também
                                </ListSubheader>
                            }
                        >
                            <ListItemButton>
                                <ListItemIcon>
                                    <PersonIcon />
                                </ListItemIcon>
                                <ListItemText primary="Profile" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <LogoutIcon />
                                </ListItemIcon>
                                <ListItemText primary="Sair" />
                            </ListItemButton>
                        </List> 
            </div>
        )

    }
};

export default MenuAside;