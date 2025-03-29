import { Box } from "@mui/material"
import { useState } from "react";
import * as styles from './uploadVideo.styles';

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

    return (
        <Box sx={styles.container}>
            {previewUrl && <video controls src={previewUrl} width="300" />}
            <input type="file" accept="video/*" onChange={handleFileChange} />
        </Box>
    )
}

export default UploadVideo