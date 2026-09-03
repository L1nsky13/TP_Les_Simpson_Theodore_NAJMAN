interface AvatarProps {
    image : string;
    firstName : string;
    lastName : string;
}

function Avatar({ image, firstName, lastName }: AvatarProps) {
    return (
        <div>
            <img src={image} alt={`${firstName} ${lastName.toUpperCase()}`} />
            <p>{firstName} {lastName === 'Simpson' ? lastName.toUpperCase() : lastName}</p>
        </div>
    );
}

export default Avatar