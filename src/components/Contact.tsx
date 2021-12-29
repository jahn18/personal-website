import React from "react"; 
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import "@fontsource/adamina";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface IContactProps {
    title: string
}

export const Contact: React.FC<IContactProps> = ({title}) => {
    return (
        <Box>
            <Typography variant="h5" style={{fontFamily: "Helvetica Neue", whiteSpace: "pre-line"}}>
                {title}
            </Typography>
            <List>
                <ListItem disablePadding style={{marginBottom: "1rem"}}>
                    <ListItemIcon>
                        <EmailIcon fontSize="large"/>
                    </ListItemIcon>
                    <Typography variant="h6" style={{fontFamily: "Helvetica Neue", whiteSpace: "pre-line", fontSize: "20px", margin: "0px 5rem"}}>
                        <a href="mailto:john.ahn.es@gmail.com" style={{color: "grey"}}>
                            john.ahn.es@gmail.com
                        </a>
                    </Typography>
                </ListItem>
                <ListItem disablePadding style={{marginBottom: "1rem"}}>
                    <ListItemIcon>
                        <GitHubIcon fontSize="large"/>
                    </ListItemIcon>
                    <Typography variant="h6" style={{fontFamily: "Helvetica Neue", whiteSpace: "pre-line", fontSize: "20px", margin: "0px 5rem"}}>
                        <a href="https://github.com/jahn18" style={{color: "grey"}}>
                            @jahn18
                        </a>
                    </Typography>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemIcon>
                        <LinkedInIcon fontSize="large"/>
                    </ListItemIcon>
                    <Typography variant="h6" style={{fontFamily: "Helvetica Neue", whiteSpace: "pre-line", fontSize: "20px", margin: "0px 5rem"}}>
                        <a href="https://www.linkedin.com/in/johnahn-/?originalSubdomain=ca" style={{color: "grey"}}>
                            @johnahn
                        </a>
                    </Typography>
                </ListItem>
            </List>
        </Box>
    )
}