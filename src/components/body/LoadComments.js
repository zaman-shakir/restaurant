import React from "react";
import dateFormat from "dateformat";
const LoadComments = props =>{


    return(

        props.comments.map(comment =>{

            return(

                <div key={comment.id} >
                    <h5>{comment.author}</h5>
                    <p>{comment.comment}</p>
                    <p>{dateFormat(comment.date)}</p>
                </div>

            )

        })



    );

}


export default LoadComments;
