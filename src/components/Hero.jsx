import { Button } from '@mui/material';

export default function Hero() {
    return (
        <div style={{ backgroundColor: '#eeeeee', padding: '60px', textAlign: 'center' }}>
            <h1>Get Your Own Web Page</h1>
            <p>Launch your product in the global market with us.</p>
            <br />
            <Button variant="contained" color="primary">Get Started</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="outlined" color="primary">Learn More</Button>
        </div>
    );
}