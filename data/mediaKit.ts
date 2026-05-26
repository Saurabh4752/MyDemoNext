import Profile from "../Assets/Profile.jpg";
import instagram from "../Assets/instagram.png";
import youtube from "../Assets/youtube.png";
import twitter from "../Assets/twitterIcon.png";

const initialState = {
  sections: [
    {
      id: "profile-section",
      type: "profile",

      data: {
        name: "Saurabh Meshram",

        bio: [
          "Tech Content Creator",
          "UI/UX",
          "Developer Lifestyle",
        ],

        fields: [
          "Technology",
          "Productivity",
          "Developer Content",
        ],

        photo: Profile,

        about:
          "I create engaging technology and developer-focused content helping brands connect with modern digital audiences. My content focuses on productivity, web development, creator tools, and tech lifestyle storytelling.",
      },
    },

    {
      id: "socials-section",
      type: "socials",

      data: [
        {
          id: "instagram",
          platform: "Instagram",
          followers: "245K",
          engagement: "8.4%",
          icon: instagram,
        },

        {
          id: "youtube",
          platform: "YouTube",
          followers: "120K",
          engagement: "6.1%",
          icon: youtube,
        },

        {
          id: "twitter",
          platform: "Twitter",
          followers: "80K",
          engagement: "5.2%",
          icon: twitter,
        },
      ],
    },

    {
      id: "audience-section",
      type: "audience",

      data: {
        ageGroups: [
          {
            id: 1,
            age: "18-24",
            percent: "38%",
          },

          {
            id: 2,
            age: "25-34",
            percent: "44%",
          },

          {
            id: 3,
            age: "35-44",
            percent: "18%",
          },
        ],

        countries: [
          {
            id: 1,
            country: "India",
            percent: "48%",
          },

          {
            id: 2,
            country: "United States",
            percent: "22%",
          },

          {
            id: 3,
            country: "United Kingdom",
            percent: "12%",
          },
        ],
      },
    },

    {
      id: "collaboration-section",
      type: "collaborations",

      data: [
        {
          id: 1,
          brand: "Nike",
          campaign: "Summer Collection Campaign",
          reach: "1.2M Reach",
        },

        {
          id: 2,
          brand: "Samsung",
          campaign: "Galaxy Creator Partnership",
          reach: "890K Reach",
        },

        {
          id: 3,
          brand: "Spotify",
          campaign: "Music Lifestyle Campaign",
          reach: "540K Reach",
        },
      ],
    },

    {
      id: "contact-section",
      type: "contact",

      data: {
        email: "saurabh@email.com",
        website: "www.creatorportfolio.com",
        management: "Creator Talent Agency",
      },
    },

    {
      id: "services-section",
      type: "services",

      data: [],
    },

    {
      id: "portfolio-section",
      type: "portfolio",

      data: [],
    },

    {
      id: "testimonials-section",
      type: "testimonials",

      data: [],
    },

    {
      id: "pricing-section",
      type: "pricing",

      data: [],
    },
  ],
};

export default initialState;


// import Profile from '../Assets/Profile.jpg'
// import instagram from "../Assets/instagram.png";
// import youtube from "../Assets/youtube.png";
// import twitter from "../Assets/twitterIcon.png";

// const mediaKit = {
//   profile: {
//     name: "Saurabh Meshram",
//     bio: [
//       "Tech Content Creator",
//       "UI/UX",
//       "Developer Lifestyle",
//     ],

//     fields: [
//       "Technology",
//       "Productivity",
//       "Developer Content",
//     ],

//     photo: Profile,

//     about:
//       "I create engaging technology and developer-focused content helping brands connect with modern digital audiences.",
//   },

//   socials: {
//     instagram: {
//       followers: "245K",
//       engagement: "8.4%",
//       icon: instagram,
//     },

//     youtube: {
//       followers: "120K",
//       engagement: "6.1%",
//       icon: youtube,
//     },

//     twitter: {
//       followers: "80K",
//       engagement: "5.2%",
//       icon: twitter,
//     },
//   },

//   audience: {
//     ageGroups: [
//       { id: 1, label: "18-24", percent: 38 },
//       { id: 2, label: "25-34", percent: 44 },
//       { id: 3, label: "35-44", percent: 18 },
//     ],

//     countries: [
//       { id: 1, name: "India", percent: 48 },
//       { id: 2, name: "United States", percent: 22 },
//       { id: 3, name: "United Kingdom", percent: 12 },
//     ],
//   },

//   collaborations: [
//     {
//       id: 1,
//       brand: "Nike",
//       campaign: "Summer Collection Campaign",
//       reach: "1.2M Reach",
//     },
//   ],

//   contact: {
//     email: "saurabh@email.com",
//     website: "www.creatorportfolio.com",
//     management: "Creator Talent Agency",
//   },

//   services: [],
//   portfolio: [],
//   testimonials: [],
//   pricing: [],
// };
// export default mediaKit;


// const mediaKit = {
//   profile:{
//     id:0,
//     name: "Saurabh Meshram",
//     bio:['Tech Content Creator' ,'UI/UX' , 'Developer Lifestyle'],
//     feilds:['Technology','Productivity','Developer Content'],
//     photo:Profile,
//     AboutCreator:'I create engaging technology and developer-focused content helping brands connect with modern digital audiences. My content focuses onproductivity, web development, creator tools, and tech lifestyle storytelling.'
//   },
//   socials:[
//   {
//     platform: "Instagram",
//     followers: "245K",
//     engagement: "8.4%",
//     icon: instagram,
//   },
//   {
//     platform: "YouTube",
//     followers: "120K",
//     engagement: "6.1%",
//     icon: youtube,
//   },
//   {
//     platform: "Twitter",
//     followers: "80K",
//     engagement: "5.2%",
//     icon: twitter,
//   },
//  ],
//   audience:{
//     age:[
//               { age: "18-24", percent: "38%" },
//               { age: "25-34", percent: "44%" },
//               { age: "35-44", percent: "18%" },
//             ],
//          country:   [
//               { country: "India", percent: "48%" },
//               { country: "United States", percent: "22%" },
//               { country: "United Kingdom", percent: "12%" },
//         ]
//   },
//   collaborations:[
//   {
//     brand: "Nike",
//     campaign: "Summer Collection Campaign",
//     reach: "1.2M Reach",
//   },
//   {
//     brand: "Samsung",
//     campaign: "Galaxy Creator Partnership",
//     reach: "890K Reach",
//   },
//   {
//     brand: "Spotify",
//     campaign: "Music Lifestyle Campaign",
//     reach: "540K Reach",
//   },
// ],
// contact:{
//   Email:'saurabh@email.com',
//   Website:'www.creatorportfolio.com',
//   Management:'Creator Talent Agency'
// },
// services:[],
// portfolio:[],
// testimonials:[], 
// pricing:[]
// }