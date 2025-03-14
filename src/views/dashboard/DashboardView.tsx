import React from "react";
import Grid from '@mui/material/Grid';
import { styled } from "@mui/material/styles";
import { Paper, Typography } from "@mui/material";
import { Header } from "../../components/Header";
import { About } from "../../components/About";
import { Contact } from "../../components/Contact";
import { ProjectCard } from "../../components/ProjectCard";
import ReactAudioPlayer from 'react-audio-player';
//@ts-ignore
import sailbot from "../../static/projects/sailbot.png";
//@ts-ignore
import microservices from "../../static/projects/microservices.png";
//@ts-ignore
import twinkle from "../../static/projects/musicAI/twinkle.png";
//@ts-ignore
import semantics from "../../static/projects/musicAI/semantics.png";
//@ts-ignore
import twinkleAudio from "../../static/projects/musicAI/twinkleaudio.mp3";

export interface DashboardViewProps {
}

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export class DashboardView extends React.PureComponent<DashboardViewProps> {
    render() {
        document.title = "John Ahn";

        return (
            <div style={{}}>
                <div 
                    style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        minWidth: "275px",
                        maxWidth: "40vw",
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <div style={{minHeight: "3rem"}}></div>
                        </Grid>
                        <Grid item xs={12}>
                            <Header name={"John Ahn"} location={"Vancouver, Canada"}/>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{minHeight: "10rem"}}></div>
                        </Grid>
                        <Grid item xs={12}>
                            <About
                                title={"About\n"} 
                                body={
                                    <p>
                                        {"I'm a fourth year computer science student at the University of British Columbia. I worked as an undergraduate research assistant at the "}
                                        <a href="https://people.ece.ubc.ca/mjulia/ReSeSS.html" style={{color: "gray"}}>Reliable, Secure, and Sustainable Software Lab</a>
                                        {", where I focused on architectural recovery for software systems. I was recently on an 8 month co-op at Elastic Path building microservice-based backends for ecommerce platforms.\n\n"}
                                    </p>
                                }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{minHeight: "1rem"}}></div>
                        </Grid>
                        <Grid item xs={12}>
                            <Contact
                                title={"Contact\n\n"} 
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{minHeight: "2rem"}}></div>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h5" style={{fontFamily: "Helvetica Neue", whiteSpace: "pre-line", marginBottom: "2%"}}>
                                {"Projects\n\n"}
                            </Typography>
                        </Grid>
                        <Grid>
                            <Grid item xs={12}>
                                <ProjectCard 
                                    title={"A Trade-off Analysis Tool for Microservice Decompositions"}
                                    languages={"ReactJS frontend | Python + Flask backend"}
                                    desc={"My summer research project at the ReSeSS lab. This tool helps developers visualize different microservice recommendations of their monolithic application and perform a comparative analysis of the recommendations."}
                                    imageSrc={require('../../static/projects/microservices.png')}
                                    githubRef={"https://github.com/jahn18/"}
                                    modalDesc={<img src={microservices} style={{width: "100%"}}/>}
                                    link={"http://svresessp1.ece.ubc.ca/"}
                                />
                                <ProjectCard 
                                    title={"Data Dashboard for UBC Sailbot"}
                                    languages={"ReactJS frontend | Python + FastAPI backend | MongoDB database"}
                                    desc={
                                        "I am a the front-end developer for UBC Sailbot, an engineering student design team that specializes in building autonomous sailbots. I developed a full stack web application to monitor the sailboat’s sensor data and GPS coordinates in real time."
                                    }
                                    imageSrc={require('../../static/projects/microservices.png')}
                                    githubRef={"https://github.com/UBCSailbot/sailbot-web-app"}
                                    modalDesc={<img src={sailbot} style={{width: "100%"}}/>}
                                />
                                <ProjectCard 
                                    title={"Music Sheet Reading AI"}
                                    languages={"Pytorch + Python"}
                                    desc={
                                        "This is a team project I worked on in a machine learning course I took at UBC, where my team and I developed an andriod app that can scan a musical score and play it back to you. I specifically developed and trained a machine learning model, which can classify and transcribe the notes from a musical score."
                                    }
                                    imageSrc={require('../../static/projects/microservices.png')}
                                    githubRef={"https://github.com/jahn18/ML-Music-Sheet-Classifier"}
                                    modalDesc={
                                        <div>
                                            <Typography variant="h4" style={{width: "65%", margin: "auto", marginBottom: "2%", marginTop: "5%"}}>
                                                Music Sheet Reading AI 
                                            </Typography>
                                            <Typography variant="body1" style={{fontFamily: "Helvetica Neue", whiteSpace: "pre-line", fontSize: "20px", width: "65%", margin: "auto", marginTop: "1%", marginBottom: "5%"}}>
                                                {"If you ever decide to shuffle my spotify playlists, all you will get is classical music. Coming from a family of musicians, I was raised listening to symphonies, operas, concertos, quartets, arias, partitas, preludes, fugues... the list can go on forever. I know that if I wasn't a programmer, I probably would've been a pianist.\n\n"} 
                                                {"I remember my first encounter with artificial intelligence was with "}
                                                <a href="https://www.google.com/doodles/celebrating-johann-sebastian-bach" style={{color: "gray"}}>Google's AI-powered Doodle of J.S Bach</a>
                                                {". I was so amazed and inspired by the sheer craftsmanship of the project, I couldn't believe an AI could harmonize like Bach in mere seconds. It was then I knew I wanted to do something similar; I wanted to create something that joined artifical intelligence and music together. This project was my first step towards that journey: an AI that can read sheet music.\n\n"} 
                                                {"The AI I developed takes any monophonic score as an input, classifies all of the notes, and then transcribes the notes into machine-readable text.\n\n"} 
                                            </Typography>
                                            <Typography variant="body1" style={{fontFamily: "Helvetica Neue", fontSize: "12px", width: "65%", margin: "auto", marginTop: "1%"}}>
                                                <figure>
                                                    <img src={twinkle} style={{width: "100%"}}/>
                                                    <figcaption style={{textAlign: "center", color: "gray"}}>Standard input to the machine learning model: 'Twinkle Twinkle Little Star'</figcaption>
                                                </figure>
                                            </Typography>
                                            <Typography variant="body1" style={{fontFamily: "Helvetica Neue", fontSize: "12px", width: "65%", margin: "auto", marginTop: "4rem"}}>
                                                <figure>
                                                    <img src={semantics} style={{width: "100%"}}/>
                                                    <figcaption style={{textAlign: "center", color: "gray"}}>Text output from the machine learning model</figcaption>
                                                </figure>
                                            </Typography>
                                            <Typography variant="body1" style={{fontFamily: "helvetica neue", whiteSpace: "pre-line", fontSize: "20px", width: "65%", margin: "auto", marginTop: "1%", marginBottom: "5%"}}>
                                                {"\n\n The machine-learning model I developed was inspired by Calvo-Zaragoza, a scientist specializing in Optical Music Recognition research: "}
                                                {<a href="https://www.mdpi.com/2076-3417/8/4/606" style={{color: "gray"}}> End-to-End Neural Optical Music Recognition of Monophonic Scores</a>}
                                                {". \n\nThe paper proposes a model composed of a Convolutional Neural Network (CNN) for feature extraction from the input image, followed by a Bidirectional Long Short Term Memory (BLSTM) Network to identify the sequence of musical symbols. Together, this is known as a Convolutional Recurrent Neural Network (CRNN)."}
                                                {" However, the CRNN model has one caveat: the number of sequential elements in the input image must be predetermined. Thankfully, this can be nicely solved using a special loss function called the Connectionist Temporal Classification (CTC) loss function, which allows the model to take in inputs with any number of sequential elements."}
                                                {"\n\n Overall, I found this project to be extremely rewarding—listen to what the AI produced below!"}
                                            </Typography>
                                            <Typography variant="body1" style={{width: "65%",fontSize: "12px", margin: "auto", marginTop: "1%", marginBottom: "5%"}}>
                                                <figure>
                                                    <ReactAudioPlayer
                                                        src={twinkleAudio}
                                                        controls
                                                        style={{width: "100%"}}
                                                    />
                                                    <figcaption style={{textAlign: "center", color: "gray"}}> AI interpretation of 'Twinkle Twinkle Little Star' sheet music </figcaption>
                                                </figure>
                                            </Typography>
                                        </div>
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <div style={{minHeight: "20rem"}}></div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <button onClick={() => window.location.href = '/#/bible-study'}>Bible Study</button>
                </div>
                {/* <div 
                    style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        maxWidth: "50%",
                    }}
                >
                    <Grid>
                        <Grid item xs={12}>
                            <div style={{display: "inline-flex", flexWrap: "wrap"}}>
                                <ProjectCard />
                                <ProjectCard />
                                <ProjectCard />
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{minHeight: "20rem"}}></div>
                        </Grid>
                    </Grid>
                </div> */}
            </div>
        );
    }
}
