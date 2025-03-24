import { Route, Routes } from "react-router-dom";
import UploadVideo from "../pages/upload-video/UploadVideo";
import Layout from "../layout/Layout";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<UploadVideo />} />
            </Route>
        </Routes>
    )
}

export default Router