import React from 'react'

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";

import MessageForm from './MessageForm';
import ContactMessage from './ContactMessage';
import OwnerMessage from './OwnerMessage';

function Chat(props) {
    const {chats, activeChat, username, messages} = props

    const chat = chat && chats[activeChat];

    const renderMessages = () => {
        const keys = Object.keys(messages);

        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            const isOwnerMessage = username === message.sender.username;

            return (
                <div key={'msg'} style={{width:'100%'}}>
                    <div>
                        {
                            isOwnerMessage
                            ? <OwnerMessage message={message}/>
                            : <ContactMessage message={message} lastMessage={messages[lastMessageKey]}/>
                        }
                    </div>
                    <div style={{marginRight: OwnerMessage ? '18px' : '0px', marginLeft: OwnerMessage ? '0px' : '68px'}}></div>
                </div>
            )
        })
    }

    if(!chat) return 'Loading...';

    return (
        <Row className="h-100">
        <Col className="py-2 p-0 p-lg-2" lg={8}>
            <Container className={appStyles.Content}>
                Contact username
            </Container>
            <Container className={appStyles.Content}>
                {renderMessages()}
            </Container>
            <Container className={appStyles.Content}>
                {MessageForm}
            </Container>
        </Col>
        <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
            Contact list
        </Col>
    </Row>
    )
}

export default Chat