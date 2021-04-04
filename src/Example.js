import React from "react";

export default function Examples(props) {
    if (props.example) {
        return(
            <div>
                <em><strong>Example:</strong></em> "{props.example}."
            </div>
        )
    } else {
        return null
    }
}