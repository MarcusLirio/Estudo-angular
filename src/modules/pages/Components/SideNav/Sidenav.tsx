import React, {ReactNode} from "react"
import { Menu, MenuItem, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/joy/Link';

import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

import "./Sidenav.css"

type Props = {
    children: ReactNode | null;
    pageTitle?: string | "";
    loading?: true | false;
};

export function SideNav(props: Props) {
    var { children, pageTitle, loading } = props;
    
    const [theme, setTheme] = React.useState<boolean>(false)
    
    
    const selectTheme = () => {
        console.log("deu")
        if(theme === true) {
            localStorage.removeItem("style")
        }
        else {
            localStorage.setItem("style", "Black")
        }
    }
    
    React.useEffect(() => {
       let s = localStorage.getItem("style")
       if(s) {
        document.body.style.background = "#18273B"
        setTheme(true)
       }
        else setTheme(false)
    },[theme])

    return (
        <div className="container">
            <Menu open={true}>
                <MenuItem className='menu' style={{background: theme ? "#18273B " : "#fff", opacity: 0.3}}>
                    <Link component={RouterLink} to="/graphics" underline='none' variant="outlined" className="link"> 
                        <div className="column">
                            <LeaderboardIcon/> 
                            <h3>Graphics</h3> 
                        </div>
                    </Link>
                    <Link component={RouterLink} to="/doc" underline='none' variant="outlined" className="link">  
                    <div className="column">
                        <InfoIcon/> 
                        <h3>Informations</h3> 
                    </div>
                    </Link>
                    <Link component={RouterLink} to="/doc" underline='none' variant="outlined" className="link">
                        <div className="column">
                            <DashboardIcon/> 
                            <h3>Responsive</h3> 
                        </div>
                    </Link>
                    <Link component={RouterLink} to="/contact" underline='none' variant="outlined" className="link"> 
                        <div className="column">
                            <ConnectWithoutContactIcon/> 
                            <h3>Contacts</h3> 
                        </div>
                    </Link>
                    <Link component={RouterLink} to="/" underline='none' variant="outlined" className="link"> 
                        <div className="column">
                            <HomeIcon/> 
                            <h3>Dashboard</h3> 
                        </div>
                    </Link>
                    <Button variant="text" onClick={selectTheme} className="button link">
                       {theme ? (
                        <div className="column">
                            <NightlightIcon/>
                            Theme
                        </div>
                       ) : (
                        <div className="column">
                            <WbSunnyIcon/>
                            Theme
                       </div>
                       )}
                    </Button>
                </MenuItem>
            </Menu>
            <div style={{zIndex: 6}}>
                {children}
            </div>
        </div>
      );
}
