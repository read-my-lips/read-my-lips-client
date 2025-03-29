import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import { routes } from "./routes";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        index={!route.exact}
                        path={route.path}
                        element={<route.component />}
                    />
                ))}
            </Route>
        </Routes>
    )
}

export default Router