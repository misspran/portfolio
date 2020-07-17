const info =  {
    experience: [

        {
            organization: "Business.com",
            title: 'Software Engineer',
            from: '11/2019',
            to: '05/2020',
            organizationUrl: 'https://business.com/',
            location: 'Waltham, MA',
            imgUrl: 'https://www.business.com/images/branding/logos/block_monogram_navy.jpg',
            work: [
                {
                    project: 'Business.com',
                    projectUrl: 'https://business.com/',
                    description: ['Feature development with React',
                    'Contributed to version 3 front-end of app using React,  GastbyJS and GraphQL']
                },
                {
                    project: 'Business News Daily',
                    projectUrl: 'https://businessnewsdaily.com/',
                    description: ['Feature development with React and Twig']
                }
            ]
        },
        {
            organization: "Minerva Analytics",
            title: 'Software Engineer',
            from: '10/2018',
            to: '10/2019',
            organizationUrl: 'https://www.minervaanalytics.co/',
            location: 'Cambridge, MA',
            imgUrl: 'https://media.glassdoor.com/sqll/2854296/minerva-analytics-squarelogo-1560539551138.png',
            work: [
                {
                    project: 'Foodisle',
                    projectUrl: 'https://thefoodisle.com/',
                    stackDescription: ['React', 'Javascript', 'Styled-Components', 'Python', 'Django'],
                    description: [
                        'Built out majority of front-end components and design redux store for app',
                        'Contributed to back-end development using Django',
                        'Wrote scrapers to populate content  & refactored and scraper methods to save development time',
                        'Wrote unit tests using Jest and Enzyme',
                        'Deployed scrapers and app in Docker container to kubernetes'                       
                    ]


                },
                {
                    project: 'Quizhive',
                    projectUrl: 'https://www.quizhive.com',
                    stackDescription: ['React', 'Javascript', 'Styled-Components', 'Python', 'Django'],
                    description: [
                        'Implemented a redesign for app',
                        'Contributed to building out feature development and bug fixes for both front-end and back-end'
                    ]
                }
            ]
        },
    ],
    projects: [
        {
            title: 'Volunteer developer',
            organization: 'Black Lives Matter',
            organizationUrl: 'https://blacklivesmatter.com/',
            location: 'Somervile, MA',
            from: '06/2020',
            to: 'Present',
            imgUrl: 'https://blacklivesmatter.com/wp-content/themes/blm/dist/images/logo-black-lives-matter.png',
            work: [
                {
                    project: 'Defund the Police',
                    projectUrl: 'https://dtp-client.herokuapp.com/',
                    description: ['Contributing feature development using VueJS, TailwindCSS, NodeJS, and Strapi CMS']
                }
                
            ]
        },
        {
            title: 'Volunteer developer',
            organization: 'Code for Boston',
            organizationUrl: 'https://www.codeforboston.org/',
            location: 'Cambridge, MA',
            from: '09/2019',
            to: '11/2019',
            imgUrl: 'https://pbs.twimg.com/profile_images/1114578280445829120/5pjzu8Yo.png',
            work: [
                {
                    project: 'Windfall Awareness',
                    projectUrl: '',
                    description: [
                        'Contributed to bug fixing and code refactoring ',
                        'Lead re-styling and contribute to other aspects of interface development for app'
                    ]
                }
            ]
        }
    ]
}

export default info;