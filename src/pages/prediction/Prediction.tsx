import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

type PredictionState = {
    prediction: string;
}

const Prediction = () => {
    const location = useLocation();
    const { prediction } = (location.state as PredictionState) || { prediction: "No prediction available" };
    return (
        <Box sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            gap: "2rem",
        }}>
            <Typography variant="h4">The prediction for this video is : </Typography>
            <Typography variant="h5">{prediction}</Typography>
        </Box>
    );
}

export default Prediction