import React from 'react';
import '../css/SidebarOptions.css'
import AddIcon from '@material-ui/icons/Add';

function SidebarOptions() {
    return (
        <div className = "sidebarOptions">
            <div className="sidebarOption">
            <img src = "https://t3.ftcdn.net/jpg/00/70/46/02/240_F_70460257_i13S8GTDFl07OVz2yD86JDbeRX7F5WYd.jpg" alt = "xyz" />
            <p>History</p>
            </div>

            <div className="sidebarOption">
            <img src = "https://media.istockphoto.com/photos/teacher-desk-full-of-books-against-a-blackboard-background-whit-copy-picture-id1251272960?b=1&k=20&m=1251272960&s=170667a&w=0&h=Qmt1F9P1-XQB4DqLqMLHXbGxI4j_92CZkrAHukjJk3E=" alt = "xyz" />
            <p>Education</p>
            </div>

            <div className="sidebarOption">
            <img src = "https://stock.adobe.com/in/images/psychology-concept/211016874" alt = "xyz" />
            <p>Phychology</p>
            </div>

            <div className="sidebarOption">
            <img src = "https://stock.adobe.com/in/images/woman-adding-salt-in-pot-while-cooking/298874556" alt = "xyz" />
            <p>Cooking</p>
            </div>

            <div className="sidebarOption">
            <img src = "https://stock.adobe.com/in/images/music-background-with-colorful-music-instruments-and-vinyl-record-disc-vector-illustration-music-festival-poster-with-double-bell-euphonium-violoncello-trumpet-piano-euphonium-sax-and-guitar/335354449" alt = "xyz" />
            <p>Music</p>
            </div>

            <div className="sidebarOption">
            <img src = "https://stock.adobe.com/in/images/professional-health-care-researchers-working-in-life-of-medical-science-laboratory-technology-of-medicine-chemistry-lap-experiment-for-hospital/313579308" alt = "xyz" />
            <p>Science</p>
            </div>

            <div className="sidebarOption">
            <img src = "https://stock.adobe.com/in/images/body-health-and-balance/191682556" alt = "xyz" />
            <p>Health</p>
            </div>

            <div className="sidebarOption">
            <img src = "https://stock.adobe.com/in/images/online-cinema-art-movie-watching-with-popcorn/138000929" alt = "xyz" />
            <p>Movies</p>
            </div>

            <div className="sidebarOption">
            <img src = "https://www.istockphoto.com/photo/colorful-background-gm1280385511-378711703?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ftechnology&utm_term=technology%3A%3A%3A" alt = "xyz" />
            <p>Technology</p>
            </div>

            <div className="sidebarOption">
            <AddIcon />
            <p className="text">Discover Spaces</p>
            </div>
        </div>
    );
}

export default SidebarOptions;