import { useState } from 'react';

interface AvatarProps {
    image : string;
    firstName : string;
    lastName : string;
    nbDonuts : number; 
}

function Avatar({ image, firstName, lastName, nbDonuts }: AvatarProps) {
    const [donut, setDonut] = useState(nbDonuts);
    return (
        <div>
            <img src={image} alt={`${firstName} ${lastName.toUpperCase()}`} />
            <p>{firstName} {lastName === 'Simpson' ? lastName.toUpperCase() : lastName}</p>
            <button onClick={() => setDonut(donut + 1)}> 🍩</button>
        </div>
    );
}

export default Avatar