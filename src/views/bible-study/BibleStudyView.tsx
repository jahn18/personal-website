import React from "react";
import Grid from '@mui/material/Grid';
import { styled } from "@mui/material/styles";
import { Avatar, Paper, Typography } from "@mui/material";
import { Header } from "../../components/Header";
import { About } from "../../components/About";
import { Contact } from "../../components/Contact";
import { ProjectCard } from "../../components/ProjectCard";

export interface BibleStudyViewProps {
}

export const BibleStudyView: React.FC<BibleStudyViewProps> = () => {
    React.useEffect(() => {
        document.title = "Bible Study";
    }, []);

    return (
        <div>
            <div 
                style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    minWidth: "275px",
                    maxWidth: "45vw",
                }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <div style={{minHeight: "1rem"}}></div>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h4" style={{fontFamily: "Helvetica Neue", color: "darkblue"}}>
                            UBC Bible Study
                        </Typography>
                        <Typography variant="subtitle1" style={{fontFamily: "Helvetica Neue", color: "#a7a7a7"}}>
                            Vancouver, Canada
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
                            <img 
                                src={require("../../static/bible-study-group.jpg")}
                                alt="UBC Bible Study Group" 
                                style={{
                                    width: "100%",
                                    borderRadius: "8px",
                                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
                                }}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            {"We're just a group of UBC students who love Jesus and want to study his word together. "}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6">
                            Join us!
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            We meet <strong>Tuesday, 7PM</strong> in <strong>Room 193</strong> @ <strong>Irving K. Barber Learning Centre (IKB)</strong>.
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};