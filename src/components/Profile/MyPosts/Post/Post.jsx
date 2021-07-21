import React from 'react';
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://static.tildacdn.com/tild6465-6132-4937-b964-336163313261/mem-2-1024x683.jpg' />
            {props.message}
            <div>
                <span>Like </span>
                {props.likesCounts}
            </div>
        </div>
    )
}

export default Post;