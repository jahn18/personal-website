import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: "95vh",
    width: "63vw",
    bgcolor: 'background.paper',
    boxShadow: 24,
    overflow: "auto"
};;

interface IProjectCard {
    imageSrc: string,
    title: string,
    languages: string,
    desc: any,
    githubRef: string
    modalDesc: any
    link?: string
}

const styles: any = {
    cardStyles: {
        width: "100%",
        height: "5rem",
        margin: "1%",
        display: 'flex',
        position: "relative",
        '&:hover': {
            boxShadow: "4px 4px 2px rgba(0, 0, 0, 0.5)"
        },
        border: "gray",
        borderWidth: "2px",
        borderStyle: "solid"
    },
    boxStyles: {
        display: 'flex',
        flexDirection: 'column',
        width: "100%",
        minWidth: "10rem",
        overflowY: "auto",
        overflowX: "hidden",
    }
}

export const ProjectCard: React.FC<IProjectCard> = ({ imageSrc, title, desc, languages, githubRef, modalDesc, link = ""}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div style={{ display: "inline-flex", flexWrap: "wrap", marginBottom: "7%" }}>
                <div style={{ width: "25%" }}>
                    {githubRef &&
                        <Button size="small" href={githubRef} style={{ color: "#171515" }}>
                            <GitHubIcon />
                        </Button>
                    }
                    {
                        <Button size="small" onClick={handleOpen} style={{ color: "#2A2B2C" }}>
                            View
                        </Button>
                    }
                </div>
                <div style={{ width: "75%" }}>
                    <Typography gutterBottom variant="h5" component="div" style={{ marginBottom: "2rem", fontSize: "1.25em" }}>
                        {link ? <a href={link} style={{color: '#0044CC'}}> {title} </a> : title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" style={{ marginBottom: "1rem", fontSize: "1.05em" }}>
                        {desc}
                    </Typography>
                    <Typography gutterBottom variant="caption" component="div" style={{ fontSize: "0.75em" }}>
                        {languages}
                    </Typography>
                </div>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        {modalDesc}
                    </Box>
                </Fade>
            </Modal>
        </>
        // <Card sx={styles.cardStyles}>
        //     <Box sx={styles.boxStyles}>
        //         <CardContent sx={{ flex: '1 0 auto'}}>
        //             <Typography gutterBottom variant="h5" component="div" style={{marginBottom: "2rem", fontSize: "1.25em"}}>
        //                 {title}
        //             </Typography>
        //             <Typography variant="body1" color="text.secondary" style={{fontSize: "1.05em"}}>
        //                 {desc}
        //             </Typography>
        //             <CardActions style={{position: "absolute", bottom: 0}}>
        //                 {githubRef && 
        //                     <Button size="small" href={githubRef}>
        //                         <GitHubIcon/>
        //                     </Button>
        //                 }
        //                 {linkRef && 
        //                     <Button size="small" href={linkRef}>
        //                         View
        //                     </Button>
        //                 }
        //             </CardActions>
        //         </CardContent>
        //     </Box>
        /* <div style={{width: "100%"}}>
            <CardMedia
                component="img"
                image={imageSrc}
                alt={title}
            />
        </div> */
        //   </Card>
    )
}