import {
    Box,
    Button,
    Link,
    Paper,
    Stack,
    ThemeProvider,
    Typography,
} from "@mui/material";
import { MAX_DEVICE_WIDTH } from "@site/contants";
import { useWindow } from "@site/hooks";
import { theme } from "@site/theme";
import { StyleSheet } from "@site/types";
import Layout from "@theme/Layout";

export default function Index() {
    const width = useWindow();
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Box
                    style={{
                        ...styles.container,
                        flexDirection:
                            width <= MAX_DEVICE_WIDTH ? "column" : "row",
                    }}
                >
                    <Box style={styles.left}>
                        <Paper
                            elevation={3}
                            style={{ ...styles.leftPaper, ...styles.paper }}
                        >
                            <Typography variant="h3" color="primary">
                                Go tools for the web
                            </Typography>
                            <Typography variant="h5">
                                A collection of tools for building web
                                applications with Go.
                            </Typography>
                            <Typography variant="body1">
                                With tools like FnCmp, developers can create
                                responsive web applications directly in Go,
                                allowing for ease of development, deployment,
                                and lightening fast rendering times.
                            </Typography>
                            <Link href="/docs/FnCmp" width={"100%"}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    style={styles.button}
                                >
                                    Get started
                                </Button>
                            </Link>
                        </Paper>
                    </Box>
                    <Box style={styles.right}>
                        <Stack spacing={2} gap={0.5}>
                            <Typography variant="h3" color="secondary">
                                Enhanced Web Functionality
                            </Typography>
                            <Paper
                                elevation={3}
                                style={{
                                    ...styles.rightPaper,
                                    ...styles.paper,
                                }}
                            >
                                <Typography variant="h4">
                                    FnCmp - Functional Components for Go
                                </Typography>
                                <Typography variant="h6">
                                    FnCmp comes with a host of functionality
                                    including:
                                </Typography>
                                <Typography variant="body1">
                                    <ul>
                                        <li>Customized middleware</li>
                                        <li>Event handling</li>
                                        <li>
                                            Request based Context management
                                        </li>
                                        <li>
                                            The freedom to use concurrency in
                                            server side rendering
                                        </li>
                                    </ul>
                                </Typography>
                            </Paper>
                            <Paper
                                elevation={3}
                                style={{
                                    ...styles.rightPaper,
                                    ...styles.paper,
                                    borderBottomLeftRadius: "2rem",
                                }}
                            >
                                <Typography variant="h4">
                                    Mnemo - Stateful Caching
                                </Typography>
                                <Typography variant="h6">
                                    Designed for in-memory caching, Mnemo
                                    includes:
                                </Typography>
                                <Typography variant="body1">
                                    <ul>
                                        <li>
                                            Stateful tracking for server-side
                                            applications
                                        </li>
                                        <li>
                                            Cache update hooks for keeping track
                                            of user activity or debugging
                                            complex applications
                                        </li>
                                    </ul>
                                </Typography>
                            </Paper>
                        </Stack>
                    </Box>
                </Box>
            </Layout>
        </ThemeProvider>
    );
}

const styles: StyleSheet = {
    container: {
        display: "flex",
        height: "93vh",
        backgroundColor: "rgb(21,58,84)",
        background:
            "linear-gradient(90deg, rgba(21,58,84,1) 0%, rgba(52,123,124,1) 50%, rgba(21,58,84,1) 99%)",
    },
    left: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
    },
    paper: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "1rem",
    },
    leftPaper: {
        backgroundColor: "rgba(255,255,255,0.7)",
        color: "rgba(21,58,84,1)",
        maxWidth: "80%",
    },
    button: {
        backgroundColor: theme.palette.secondary.main,
    },
    right: {
        display: "flex",
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
        padding: "1rem",
        borderBottomLeftRadius: "2rem",
    },
    rightPaper: {
        backgroundColor: theme.palette.primary.main,
        color: theme.typography.body2.color,
        padding: "1rem",
        borderRadius: "0.5rem",
    },
    footer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "5rem",
        color: "#black",
    },
};
