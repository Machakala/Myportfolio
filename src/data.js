import css from './images/css.png';
import react from './images/react.png';
import express from './images/express.png';
import portfolio from './images/portfolio.png';
import mong from './images/mong.png';
import node from './images/node.png';


const data = {
    Projects: [
        {
            _id: '1',
            name: 'Tindog',
            webpage: "https://machakala.github.io/tindog/",
            image: css,
            description: 'A simple Tindog website for a dog vet company. A front-end only project. Using react, bootstrap framework, css, html5.',
        },
        {
            _id: '2',
            name: 'Hamzyshop mall',
            webpage: 'https://hamzyshop.herokuapp.com/',
            image: css,
            description: 'An online shopping mall for buyers and sellers. This is a full stack, single page application. Programs used are React.js, css, html5, Mongodb, Express, Axios, Node.js.',
        },
        {
            _id: '3',
            name: 'Secrets',
            webpage: 'https://machakala.github.io/secrets/',
            image: css,
            description: 'A simple blog site were secrets can be kept. You can sign up and tell us some secrets annoynmously. Programs used are ejs, css, html5, Mongodb, Express, Node.js.',
        },
    ],
    Skills: [
        {
            _id: '1',
            name: 'CSS',
            image: css,
            description: 'CSS',
        },
        {
            _id: '2',
            name: 'React.Js',
            image: react,
            description: 'REACT',
        },
        {
            _id: '3',
            name: 'Express.Js',
            image: express,
            description: 'EXPRESS',
        },
        {
            _id: '4',
            name: 'HTML',
            image: portfolio,
            description: 'HTML',
        },
        {
            _id: '5',
            name: 'Mongodb',
            image: mong,
            description: 'Mongodb',
        },
        {
            _id: '6',
            name: 'Node.Js',
            image: node,
            description: 'Node',
        },

    ],
};
export default data;