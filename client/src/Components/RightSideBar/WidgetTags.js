import React from "react";

const WidgetTags = () => {
    const tags = [
        "c",
        "css",
        "express",
        "firebase",
        "html",
        "java",
        "javascript",
        "mern",
        "mongodb",
        "mysql",
        "next.js",
        "node.js",
        "php",
        "python",
        "reactjs",
    ];

    return (
        <div className="widget-tags w-[300px]">
        <h4>Watched tags</h4>
        <div className="widget-tags-div">
            {tags.map((tag) => (
            <p className="mb-2 mr-2" key={tag}>
                <a href={`https://www.google.com/search?q=${tag}`} target="_blank">{tag}</a>
            </p>
            ))}
        </div>
        </div>
    );
};

export default WidgetTags;
