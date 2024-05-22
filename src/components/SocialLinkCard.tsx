import "./SocialLinkCard.scss";

const SocialLinkCard = () => {
    return (
        <main id="social_link_card">
            <img src="https://i.pravatar.cc/150?img=39" alt="Profile Picture" className="profile_picture"/>
            <h1 className="profile_name">Jessica Randal</h1>
            <p className="location">London, United Kingdom</p>
            <p className="bio">"Front-end developer and avid reader."</p>
            <ul className="links">
                <li>
                    <a href="" className="link_item">Github</a>
                </li>
                <li>
                    <a href="" className="link_item">Frontend Mentor</a>
                </li>
                <li>
                    <a href="" className="link_item">LinkedIn</a>
                </li>
                <li>
                    <a href="" className="link_item">Twitter</a>
                </li>
                <li>
                    <a href="" className="link_item">Instagram</a>
                </li>
            </ul>
        </main>
    );
};

export default SocialLinkCard;
