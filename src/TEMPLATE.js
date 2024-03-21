
// MUI: Icons
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import SnapchatIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Twitter';

// Axios
import axios from 'axios';
import  parse  from 'html-react-parser';

//changing the fetched data to html

async function fetchData() {
  try {
    const response = await axios.get('http://localhost:3000/Profiles');
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}


const data = {
    profile: {
        name:"Truong Van Giap",
        address: "Pham ngu lao, BMT, VietNam",
        avatar: "https://mui.com/static/images/avatar/1.jpg",
        contacts: [
            { icon: PhoneIcon, label: "Phone", value: "(978) 123-4567" },
            { icon: EmailIcon, label: "Email", value: "beovan204@gmail.com" },
            { icon: HomeIcon, label: "Address", value: "Pham ngu lao, BMT, VietNam" }
        ],
        skills: [
            { category: "Programming Languages:", skills: "PHP, Laravel, Node.js" },
            { category: "Scripting Languages:", skills: "Bash Shell, HTML" },
            { category: "Operating Systems:", skills: "Linux, Windows 10" },
            { category: "Documentation:", skills: "MS Word, Excel, PowerPoint" },
        ],
        socialMedia: [
            { icon: FacebookIcon },
            { icon: InstagramIcon },
            { icon: LinkedInIcon },
            { icon: TwitterIcon },
            { icon: SnapchatIcon },
            { icon: PinterestIcon },
        ],
        education: [
            {
                degree: "M.S. in Computer Science",
                date: "Anticipated May 2025",
                school: "University of Massachusetts Lowell - Lowell, MA",
                gpa: "Overall GPA: 3.33, GPA in Major: 3.50",
                student: "Placeholder Value"
            },
            {
                degree: "B.S. in Computer Science",
                date: "Anticipated May 20xx",
                school: "University of Massachusetts Lowell - Lowell, MA",
                gpa: "Overall GPA: 3.33, GPA in Major: 3.50",
                student: "Placeholder Value"
            }
        ],
        experience: [
            {
                title: "Front End Developer / w3schools.com",
                date: "Jan 2015 - Current",
                description: "Lorem ipsum dolor sit amet...",
            },
            {
                title: "Computer Lab Monitor / University of Massachusetts Lowell",
                date: "Jan 20xx - Present",
                description: "Monitor lab activity for up to 50 users at a time. Perform basic hardware/software troubleshooting.",
            },
            {
                title: "Technical Support Specialist / Commonwealth of Massachusetts, Information Technology Division",
                date: "Summer 20xx",
                description: "Supported and hosted state-wide agency systems and messaging services on platforms including HP Unix, Linux, MVS, and Windows Active Exchange. Assisted with server builds and maintenance. Reviewed, installed, set up, and assisted with active synching of BlackBerry mobile devices to Windows Email Exchange server.",
            },
            {
                title: "Asperger’s Association of New England",
                date: "Jun. 20xx - Aug. 20xx",
                description: "Volunteered one day a week with data entry and basic financial accounting projects",
            },
            {
                title: "Lifeguard",
                date: "Summers 20xx – 20xx",
                description: "YMCA, Lowell, MA",
            },
        ],
    },

    posts: {
        name: "Truong Van Giap",
        avatar: "https://mui.com/static/images/avatar/1.jpg",
        background_image: "https://source.unsplash.com/random?wallpapers",
        post_data: [
            {
                id: 1,
                timestamp: "2 hours ago",
                description: "Enjoying a sunny day at the beach!",
                image: "https://source.unsplash.com/random?wallpapers"
            },
            {
                id: 2,
                timestamp: "5 hours ago",
                description: "Just finished reading this amazing book.",
                type: "note",
            },
            {
                id: 3,
                timestamp: "2 hours ago",
                description: "Enjoying a sunny day at the beach!",
                image: "https://source.unsplash.com/random?wallpapers"
            },
            {
                id: 4,
                timestamp: "5 hours ago",
                description: "Just finished reading this amazing book.",
                type: "note",
            },
            {
                id: 5,
                author: "John Doe",
                avatar: "/path-to-avatar1.jpg",
                timestamp: "2 hours ago",
                description: "Enjoying a sunny day at the beach!",
                image: "https://source.unsplash.com/random?wallpapers"
            },
        ],
    }
};

fetchData().then(fetchedData => {
    //Updating fist item of the fetched data to the data object.
    const firstItem = fetchedData[0];
    data.profile.name = firstItem.name;
    data.profile.address = firstItem.address;
    //Replacing the existing values with the first item from the fetched data.
    const phoneContact = data.profile.contacts.find(contact => contact.label === 'Phone');
    const addressContact = data.profile.contacts.find(contact => contact.label === 'Address');
    const skills = data.profile.skills.find(skill => skill.category === 'Programming Languages:');
    const education = data.profile.education.find(education => education.degree === 'M.S. in Computer Science');
    const experience = data.profile.experience.find(experience => experience.title === 'Front End Developer / w3schools.com');

    if (phoneContact) {
        phoneContact.value = firstItem.phoneNumber;
    }
    if (addressContact) {
        addressContact.value = firstItem.address;
    }
  if (skills) {
    skills.skills = parse(String(firstItem.skills));
}
if (education) {
    education.school = parse(String(firstItem.education));
}
if (experience) {
    experience.description = parse(String(firstItem.experience));
}
    
    console.log(data); // This will log the updated data object.
});
// Exporting the data object so that the App.js file can import it.
export default data;