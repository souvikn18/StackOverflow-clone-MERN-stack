import React from 'react'
import LeftSideBar from '../../Components/LeftSideBar/LeftSideBar'
import Taglist from './Taglist'

const Tags = () => {

    //dummy hard coded data for tags page
    const tagsList = [{
        id: 1,
        tagName: "javascript",
        tagDesc: "For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations (excluding ActionScript). Please include all relevant tags on your question;",
    },{
        id: 2,
        tagName: "python",
        tagDesc: "Python is a multi-paradigm, dynamically typed, multipurpose programming language. It is designed to be quick to learn, understand, and use, and enforces a clean and uniform syntax."
    },{
        id: 3,
        tagName: "c#",
        tagDesc: "C# (pronounced 'see sharp') is a high level, statically typed, multi-paradigm programming language developed by Microsoft"
    },{
        id: 4,
        tagName: "java",
        tagDesc: "Java is a high-level object oriented programming language. Use this tag when you're having problems using or understanding the language itself. "
    },{
        id: 5,
        tagName: "php",
        tagDesc: "PHP is a widely used, open source, general-purpose, multi-paradigm, dynamically typed and interpreted scripting language originally designed for server-side web development"
    },{
        id: 6,
        tagName: "html",
        tagDesc: "HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser."
    },{
        id: 7,
        tagName: "android",
        tagDesc: "Android is Google's mobile operating system, used for programming or developing digital devices (Smartphones, Tablets, Automobiles, TVs, Wear, Glass, IoT)."
    },{
        id: 8,
        tagName: "css",
        tagDesc: "CSS is a representation style sheet language used for describing the look and formatting of HTML, XML documents and SVG elements including colors, layout, fonts, and animations"
    },{
        id: 9,
        tagName: "Reactjs",
        tagDesc: "React is a JavaScript library for building user interfaces. It uses a declarative, component-based paradigm and aims to be both efficient and flexible."
    },{
        id: 10,
        tagName: "node.js",
        tagDesc: "Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library. "
    }] 

    return (
        <div className='min-h-[100vh] max-w-[1250px] w-[100%] flex justify-between my-0 mx-auto '>
            <LeftSideBar/>
            <div className='mt-[80px] pl-[30px] flex flex-col gap-6'>
                <h3 className='text-3xl'>Tags</h3>
                <p>A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for others to find and answer your question.</p>
                <div className='grid grid-cols-4 gap-4'>
                    {
                        tagsList.map((tag) => (
                            <Taglist tag = {tag} key={tag.id} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Tags