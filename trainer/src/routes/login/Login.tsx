import React, { Component } from "react";
import { Button, Grid, Paper } from "@material-ui/core";
import styled from "styled-components";

export const PageGrid = styled(Grid)`
    width: 100vw;
    height: 100vh;
`;

export const StyledPaper = styled(Paper)`
    padding: 1rem;
`;

export class Login extends Component<{}, {}> {
    render() {
        return (
            <PageGrid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid
                    container
                    item
                    xs={12}
                    md={8}
                    xl={6}
                    spacing={3}
                    justify="center"
                    alignItems="center"
                >
                    <StyledPaper elevation={4}>
                        <div>helloooo</div>
                    </StyledPaper>
                </Grid>
            </PageGrid>
        );
    }
}
