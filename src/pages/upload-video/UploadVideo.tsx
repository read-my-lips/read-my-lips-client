import { Box, Button } from "@mui/material"
import { useState } from "react";
import * as styles from './uploadVideo.styles';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const UploadVideo = () => {
    const [video, setVideo] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

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
            {video && (<>
                {previewUrl && <video controls src={previewUrl} width="300" />}
                <Box sx={{ marginTop: '1rem' }}>
                    <p>Selected video: {video.name}</p>
                </Box>
            </>
            )}
            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
            >
                Upload files
                <VisuallyHiddenInput
                    type="file"
                    accept="video/*"
                    onChange={handleFileChange}
                    multiple
                />
            </Button>

        </Box>
    )
}

export default UploadVideo