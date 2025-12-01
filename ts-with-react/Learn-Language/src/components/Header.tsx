import { AppBar, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const style = {
  color: "white",
  margin: "0.5rem",
  textDecoration: "none"
}

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" mr="auto" textTransform={"uppercase"}>Learn-Langauges</Typography>
        <Link to={"/"} style={style}>Home</Link>
      </Toolbar>
    </AppBar>
  )
}

export default Header