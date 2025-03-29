import { Box, Button, Card } from "@mui/material"
import { useState } from "react";
import * as styles from './upload.styles';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useNavigate } from "react-router-dom";

const UploadVideo = () => {
    const [video, setVideo] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.type.startsWith("video/")) {
            setVideo(file);
            setPreviewUrl(URL.createObjectURL(file)); // Generate preview URL
        } else {
            alert("Please select a valid video file.");
        }
    };

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    return (
        <Box sx={styles.container}>
            <Card sx={styles.card}>
                {video && (<>
                    {previewUrl && <video controls src={previewUrl} width="300" />}
                    <Box sx={{ marginTop: '1rem' }}>
                        <p>Selected video: {video.name}</p>
                    </Box>
                </>
                )}
                <Box sx={styles.buttons}>
                    <Button
                        component="label"
                        variant="contained"
                        startIcon={<CloudUploadIcon />}
                    >
                        {video ? "Replace video" : "Upload video"}
                        <VisuallyHiddenInput
                            type="file"
                            accept="video/*"
                            onChange={handleFileChange}
                            multiple
                        />
                    </Button>
                    {video && <Button
                        component="label"
                        variant="contained"
                        onClick={() => navigate('/prediction')}
                    >
                        Send For Prediction
                    </Button>}
                </Box>
            </Card>
        </Box>
    )
}

export default UploadVideo