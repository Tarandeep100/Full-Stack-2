import React from "react";
import LikeButton from "../LikeButton/LikeButton";
import Timer from "../Timer/Timer";

class Comment extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div><Timer/> <b>{this.props.comments}</b> <LikeButton/></div>
        );
    }
}

export default Comment;