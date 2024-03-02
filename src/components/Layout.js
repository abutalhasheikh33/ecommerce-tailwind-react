import { Outlet } from "react-router-dom";
import {Header,Footer, Sidebar} from "./index"


export default function Layout(){
    return (
        <>
        <Header />
        <Outlet />
        <Sidebar />
        <Footer />
        </>
    )
}