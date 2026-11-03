import { AppBar, Button } from '@mui/material';

export default function Navbar() {
    // this is the top bar
    return (
        <AppBar position="static" style={{ backgroundColor: 'darkblue', padding: '10px' }}>
            <div style={{ display: 'flex' }}>
                <h2 style={{ margin: '0px', marginRight: '50px' }}>BrandLogo</h2>
                <Button variant="contained" style={{ marginRight: '10px' }}>Home</Button>
                <Button variant="contained" style={{ marginRight: '10px' }}>Features</Button>
                <Button variant="contained" style={{ marginRight: '10px' }}>Pricing</Button>
                <Button variant="contained" style={{ backgroundColor: 'white', color: 'black' }}>Login</Button>
            </div>
        </AppBar>
    );
}