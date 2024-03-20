
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
import avatar from '../../../public/josh-bio.jpg';


// Data object that contains all of the data for the template.
const data = {
    profile: {
        name: "Dr. Joshua Aaron Fontanez",
        address: "PhD, LLSBB",
        avatar: avatar,
        contacts: [
            { icon: PhoneIcon, label: "Phone", value: "(609) 678-6605" },
            { icon: EmailIcon, label: "Email", value: "joshuafontanez1990@gmail.com" },
            { icon: HomeIcon, label: "Address", value: "1641 Pristine Lane, Hope Mills, NC 28348" }
        ],
        skills: [
            { category: "Business Management:", skills: "Business Process Improvement, Strategic Planning, Business Planning, Policy Analysis, Organizational Leadership, Program Management, Management, Operational Planning" },
            { category: "Communication & Outreach:", skills: "Communication, Media Relations, Public Speaking, Community Outreach, Social Media Marketing, Social Networking" },
            { category: "Leadership & Development:", skills: "Leadership, Leadership Development, Team Leadership, Political Science, Politics" },
            { category: "Project and Event Managment:", skills: "Event Planning, Project Management, Fundraising" },
            { category: "Administration:", skills: "Time Management, Microsoft Office, Microsoft Excel, Microsoft Word, PowerPoint" },
            { category: "Specialized Knowledge:", skills: "Military, Military Experience, Military Operations, Emergency Management, Government" },
            { category: "Finance:", skills: "Budget Management" },
            { category: "Human Resources:", skills: "Recruiting, Training, Motivation" },
            { category: "Sales & Marketing:", skills: "Direct Sales, Customer Service" },
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
                degree: "Doctor of Philosophy (Ph.D.), Public Policy and Administration",
                date: "2015 - 2019",
                school: "Walden University",
            },
            {
                degree: "Master of Public Administration (MPA), Crisis/Emergency/Disaster Management",
                date: "2012 - 2015",
                school: "Norwich University",
            },
            {
                degree: "Bachelor of Arts (B.A.), Political Science",
                date: "2012 - 2015",
                school: "Norwich University",
            },
        ],
        certificate: [
            {
                certName: "Lean Six Sigma Black Belt",
                year: "2023",
                school: "US. Army ",
            },
            {
                certName: "Executive Certificate in Nonprofit Leadership",
                year: "2023",
                school: "Duke University",
            },
        ],
        experience: [
            {
                title: "Strategic Planner",
                date: "2022 - 2024",
                description: {
                    dutyOne: "•	Developed conceptual plans to assist the Commanding General in projecting and executing comprehensive and synchronized vision and strategy.",
                    dutyTwo: "•	Established and maintained relationships and communications with key stakeholders such as Executive Branch Agencies, interagency groups, academia faculty, Department of the Army Action officers. ",
                    dutyThree: "• Assisted in the execution of strategic engagements through pre-event preparation and post-event staff synchronization. ",
                },
            },
            {
                title: "Aide-De-Camo",
                date: "2021 - 2022",
                description: {
                    dutyOne: "• Served as the Executive Assistant to the Commanding General for an 8,000-person global military organization.",
                    dutyTwo: "• Managed and directly responsible for the Commanding Generals day-to-day activity, long range calendar, and all travel requirements.",
                    dutyThree: "• Coordinated and executed engagements with C-suite executives in support of cross company projects."
                },
            },
            {
                title: "Logistics Manager (Company Commander)",
                date: "2019 - 2021",
                description: {
                    dutyOne: "•	Commanded as Senior Logistics Manager of seven personnel and 525 global special operations and support personnel responsible for planning real-time and contingency operations.",
                    dutyTwo: "•	Served as Supply Program Manager, ensuring supply operations compliance for equipment valued at $67M and effectively managing a $15M budget, which contributed to a 20% improvement in inspection results.",
                    dutyThree: "• While on global assignments, serve as primary Logistics Planner for special operations task force.",
                    dutyFour:"•	Planned and executed logistical operations across 15 countries / four continents.",
                    dutyFive:"•	Mentored 15 direct employees on professional development and education.",
                    dutySix: "•	Developed plan for logistical and training procedures while simultaneously supporting global operations.",
                    dutySeven: "• Improved logistical operations across the enterprise by developing an effective logistical seminar, presented to multiple entities, which was essential to the success of the overall group.",
                    dutyEight: "• Established baseline to ensure staff had essential equipment aligning with operational requirements.",
                    dutyNine: "• Started mentorship program to prepare personnel for logistical operations / upcoming rotations.",
                    dutyTen: "•	Created, executed, and monitored five contracts with a collective total of $12M."
                },
            },
            {
                title: "Logistic Planner (Battalion S4)",
                date: "2017 - 2019",
                description: {
                    dutyOne: "•	Budgeted and allocated monthly funds for sustainment services and supplies.",
                    dutyTwo: "•	Responsible for the oversight and control of Battalion Property Book valued at over $750 million.",
                    dutyThree: "• Primary manager of the Battalion’s annual budget, as well as coordinated military training contracts with multiple vendors.",
                    dutyFour:"•	Advised senior management on budget, supply chain management, distribution strategy, and development of education courses to reduce waste and redundant programs.",
                },
            },
            {
                title: "Project Planner (Plans Officer)",
                date: "2017",
                description: {
                    dutyOne: "•	Logistics planner for a 650-peson combined group capable of rapid deployment worldwide.",
                    dutyTwo: "•	Responsible for resource coordination and management to ensure all subordinate units' operations and training were fully resourced.",
                    dutyThree: "• Served as the lead for all fleet modernization and equipment upgrade programs.",
                    dutyFour:"•	Assisted in the execution of enterprise decision making process to develop global operations plans.",
                    dutyFive:"•	Managed allocation of land resources, supply / equipment, and external support.",
                    dutySix: "•	Recognized as essential SME in planning logistics operations for two major training exercises providing support to 1K+ personnel and 200 vehicles.",
                    dutySeven: "• Exceeded already high expectations due to ability to forecast needed resources and deliver them on time and to the right place - a keystone to maintaining an aggressive operational tempo.",
                    dutyEight: "• Led conversion from legacy to new logistics system, setting the standard for upgrades, while saving $1.5M.",
                },   
            },
            {         
                title: "Maintenance Manager (Maintenance Officer",
                date: "2016 - 2017",
                description: {
                    dutyOne: "•	Maintenance Manager of a combined group consisting of multiple organizations and a global supply group.",
                    dutyTwo: "•	Principal assistant on all maintenance issues that affect operational readiness.",
                    dutyThree: "• Managed maintenance, repair, and quality control for 10K+ in equipment / systems valued $600M+.",
                    dutyFour:"•	Monitored equipment undergoing repairs while simultaneously managing required critical parts stock and ordering.",
                    dutyFive:"•	Fostered effective communication / relationships to leverage multiple external partnerships.",
                    dutySix: "•	Effectively forecasted against multiple developing priorities, enabling operations across multiple training exercises.",
                    dutySeven: "• Conducted technical inspections to divest equipment set which established the baseline for unit reorganization in line with enterprise redesign.",
                    dutyEight: "• Developed and implemented environmental control program, earning perfect scores during a rigorous annual inspection, and which was critical to the group's success.",
                    dutyNine: "• Maintained above 90% operational readiness rate at home and global locations.",
                    dutyTen: "•	Led team through two separate system conversions and implemented systems that resulted in receiving $10M+ in credit for unserviceable repair parts."
                }, 
            },
            {          
                title: "Director (Executive Officer)",
                date: "2015 - 2016",
                description: {
                    dutyOne: "•	Led an Armor group assisting the senior stakeholder in mission planning and execution during training and operations.",
                    dutyTwo: "•	Property manager, ensuring 100% accountability of equipment valued at $70M+.",
                    dutyThree: "• Maintenance manager, responsible for ensuring maintenance of 150+ pieces of equipment.",
                    dutyFour:"•	Planned and coordinated across multiple elements to accomplish strategic objectives, ensuring synchronization of logistical support.",
                    dutyFive:"•	Increased overall staff capabilities during two rotations and multiple engagements.",
                    dutySix: "•	Coordinated with adjacent units to accomplish any mission that was required.",
                    dutySeven: "• Mentored / improved supply program, reducing financial impact while anticipating future operations.",
                }, 
            },
            {           
                title: "Project / Personnel Manager (Infantry Officer)",
                date: "2013 - 2017",
                description: {
                    dutyOne: "•	Coordinated the movement of $150M+ of equipment to the National Training Center in CA on two occasions.",
                    dutyTwo: "•	Served as the property manager of $350M+ of equipment.",
                    dutyThree: "• Planned and resourced logistics for 90 personnel across nine training exercises lasting 310 days.",
                    dutyFour:"•	Coordinated / supervised maintenance for a tank company maintaining an overall 95% operational rate.",
                    dutyFive:"•	Implemented policies resulting in $7M in savings across nine-month period.",
                    dutySix: "•	Ensured 6K+ pieces of equipment received annual, semi-annual, and quarterly services.",
                    dutySeven: "• Supervised logistical operations for a combined team, resulting in the ordering and tracking of $15M.",
                    dutyEight: "• Supervised 90 people across six maintenance teams and five specialty shops.",
                    dutyNine: "• Mastered federal, state and local regulations on the storage and access of weapons.",
                    dutyTen: "•	Responsible for conducting retention operations resulting in a 95% retention rate."
                }, 
            }          
        ],
        nonprofit: [
            {
                orgName: "Modern Military Association of America",
                date:"2019 - Present",
                position: "Board of Directors",
            },
            {
                orgName: "Outserve-SLDN",
                date:"2013 - 2019",
                position: "Board of Directors",
            },
            {
                orgName: "State of Texas",
                date:"2013 - 2019",
                position: "Chapter Leader",
            },
        ],
    },

    posts: {
        name: "Sara Friends",
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

// Exporting the data object so that the App.js file can import it.
export default data;