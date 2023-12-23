import { NavLink, Outlet } from "react-router-dom"

function Main() {
    return (
        <div>
            <div
                style={{
                    padding: "10px",
                    borderBottom: "3px solid #000",
                }}
            >
                <nav>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/employees-statistic"}>Statistic</NavLink>
                </nav>
            </div>
            <div style={{ maxWidth: "1440px", margin: "10px auto" }}>
                <Outlet />
            </div>
        </div>
    )
}

export default Main