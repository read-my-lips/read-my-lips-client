import Prediction from "../pages/prediction/Prediction";
import UploadVideo from "../pages/upload-video/UploadVideo";

export const routes = [
    {
        path: "/",
        exact: false,
        name: "Upload Video",
        component: UploadVideo,
    },
    {
        path: "/mor",
        exact: true,
        name: "Mor",
        component: Prediction,
    },
]