import React from 'react'

const OwnerMessage = ({message}) => {
    if(message?.attachment?.length > 0){
        return (
            <img
            src={message.attachement[0].file}
            alt="message"
            style={{ float: 'right'}}
            />
        )
    }
    return (
    <div 
    style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>
        {message.text}
    </div>
    )
}

export default OwnerMessage