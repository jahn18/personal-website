import React from "react";
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";

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
                        <div style={{minHeight: "0.5rem"}}></div>
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
                        <Typography variant="subtitle2">
                            {"All those the Father gives me will come to me, and whoever comes to me I will never drive away."} <br/>
                            {"—John 6:37"}
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
                            {"We're a group of UBC students who love Jesus and want to share his word with others 🙏 "}
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
                    <Grid item xs={12}>
                        <div style={{minHeight: "0.5rem"}}></div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};