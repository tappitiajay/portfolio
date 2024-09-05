
import Coursera from '../assets/Coursera.png'
import Employee from "../assets/Emp.png"
import Todo from '../assets/todo.png'
import Weather from '../assets/Weather.png'


export const projects = [
    {
        id: 0,
        img: Coursera,
        skills: ["ReactJS", "MUI", "NodeJS", "ExpressJS", "MongoDB"],
        title: 'Course Selling Website',
        desc: 'A course selling website where the admin can add courses, and users can access the courses with authentication on both the user and admin sides.',
        github: 'https://github.com/tappitiajay/coursera-website'
    },
    {
        id: 1,
        img: Todo,
        skills: ["ReactJS", "MUI", "NodeJS", "ExpressJS", "MongoDB"],
        title: 'Todo',
        desc: 'Developed a Todo application enabling users to create, manage, and track tasks efficiently with an intuitive interface.',
        github: 'https://github.com/tappitiajay/todo'
    },
    {
        id: 2,
        img: Weather,
        skills: ["ReactJS", "Tailwind", "Taliwind", "Material UI", "ExpressJS"],
        title: 'Weather Application',
        desc: 'Created a weather application that provides real-time weather updates and forecasts with an easy-to-use interface.',
        github: 'https://github.com/tappitiajay/CloudPoint'
    },

    {
        id: 3,
        img: Employee,
        skills: ["ReactJS", "MUI", "NodeJS", "ExpressJS", "MongoDB"],
        title: 'Employee Management System',
        desc: 'An Employee Management System designed for HR and managers to manage and access detailed employee information efficiently.',
        github: 'https://github.com/tappitiajay/Employee_Management_System'
    },
]