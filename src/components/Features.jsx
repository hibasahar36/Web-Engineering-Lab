import { Card } from '@mui/material';

export default function Features() {
    return (
        <div style={{ padding: '20px' }}>
            <center><h2>Why Choose Us</h2></center>
            <div style={{ display: 'flex', justifyContent: 'center' }}>

                <Card style={{ padding: '15px', margin: '10px', width: '250px' }}>
                    <h3>Lightning Fast</h3>
                    <p>Guarented speed and performance right out of the box.</p>
                </Card>

                <Card style={{ padding: '15px', margin: '10px', width: '250px' }}>
                    <h3>Highly Secure</h3>
                    <p>Enterprise-grade security protocols to keep data safe.</p>
                </Card>

                <Card style={{ padding: '15px', margin: '10px', width: '250px' }}>
                    <h3>Fully Responsive</h3>
                    <p>Looks stunning on desktops, tablets, and mobile devices.</p>
                </Card>

            </div>
        </div>
    );
}