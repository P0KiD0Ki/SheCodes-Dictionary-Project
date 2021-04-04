import React from "react";

export default function Examples(props) {
    if (props.example) {
        return(
            <div>
                <em><strong>Example:</strong> "{props.example}."</em>
            </div>
        )
    } else {
        return null
    }
}