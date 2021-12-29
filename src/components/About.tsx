import React from "react"; 
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import "@fontsource/adamina"

interface IAboutProps {
    title: string
    body: any
}

export const About: React.FC<IAboutProps> = ({title, body}) => {
    return (
        <Box>
            <Typography variant="h5" style={{fontFamily: "Helvetica Neue", whiteSpace: "pre-line"}}>
                {title}
            </Typography>
            <Typography variant="body1" style={{lineHeight: "1.75", fontFamily: "Adamina", whiteSpace: "pre-line", fontSize: "18px"}}>
                {body}
            </Typography>
        </Box>
    )
    // return (
    //     <Box>
    //         <Typography variant="h6" style={{fontFamily: "Helvetica Neue", whiteSpace: "pre-line"}}>
    //             {"About"}
    //         </Typography>
    //         <Typography variant="body1" style={{fontFamily: "Adamina", whiteSpace: "pre-line", fontSize: "18px"}}>
    //             {"\nI'm a third year computer science student at the University of British Columbia. Currently, I'm working as an undergraduate research assistant at a"}
    //             <a href="https://people.ece.ubc.ca/mjulia/ReSeSS.html"> software research lab</a>
    //             {", where my focus is primarily on microservice architecture."} 
    //             {/* {"\n\n"}
    //             {" Outside of school and work, you'll find me playing classical music with my trio as a pianist or writing about my faith as a Christian"}
    //             <a href="/"> here. </a> */}
    //         </Typography>
    //     </Box>
    // )
}