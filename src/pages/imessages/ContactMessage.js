import React from 'react'

const ContactMessage = ({lastMessage, message}) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

    return (
    <div>
        {isFirstMessageByUser && (
            <div
            />
        )}
        { message?.attachment?.length > 0
            ? (
                <img
                src={message.attachement[0].file}
                alt="message"
                style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px'}}
                />
            ) : (
                <div
                style={{ float: 'left', backgroundColor: '##CABCDC', marginLeft: isFirstMessageByUser ? '4px' : '48px' }}>
                    {message.text}
                </div>
            )
        }
    </div>
    )
}

export default ContactMessage