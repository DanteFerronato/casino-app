import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import style from "./style/hub.module.css"

export default function Hub() {
    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <nav aria-label="main mailbox folders"><List>
                <ListItem disablePadding>
                    <ListItemButton href="/login">
                        <ListItemText primary="Login" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton href="/roulette">
                        <ListItemText primary="Roulette" />
                    </ListItemButton>
                </ListItem>
            </List></nav>
        </Box>
    )
}