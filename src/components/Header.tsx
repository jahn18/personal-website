import React from "react"; 
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';

interface IHeaderProps {
    name: string
    location: string
}

export const Header: React.FC<IHeaderProps> = ({name, location}) => {
    return (
        <div style={{display: "flex", justifyContent: "space-between", maxWidth: "100%"}}>
            <div>
                <Typography variant="h5" style={{fontFamily: "Helvetica Neue"}}>
                    {name}
                </Typography>
                <Typography variant="h5" style={{fontFamily: "Helvetica Neue", color: "#a7a7a7"}}>
                    {location}
                </Typography>
            </div>
            <Avatar 
                 alt="John Ahn"
                 src={require('/Users/johnahn/PersonalProjects/personal-website/src/static/profile/profile.jpg')}
                 sx={{ width: 100, height: 100}}
            />
        </div>
    )
}