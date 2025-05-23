import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar/SideBar";

const Layout = () => {
const [isOpen, setIsOpen] = useState(false);

return (
<div className="d-flex">
<SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
<div className="flex-grow-1 p-4" style={{ marginLeft: isOpen ? "210px" : "0", marginTop: "60px" }}>
<Outlet />
</div>
</div>
);
};

export default Layout;