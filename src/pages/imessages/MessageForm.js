import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import styles from "../../styles/CommentCreateEditForm.module.css";
import { axiosRes } from "../../api/axiosDefaults";

const MessageForm = (props) => {
    const [content, setComments, profileImage, profile_id] = props;
    const [value, setContent] = useState('');

    const handleChange = (event) => {
        setContent(event.target.value);
        };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const message = value.trim();
        try {
            const { data } = await axiosRes.post("/message/", {
                content,
                message,
            });
            setComments((prevComments) => ({
                ...prevComments,
                results: [data, ...prevComments.results],
            }));
            setContent("");
        } catch (err) {
            console.log(err);
        }
    };

    const handleUpload = (event) => {
        if (event.target.files.length) {
            URL.revokeObjectURL(image);
            setPostData({
                ...postData,
                image: URL.createObjectURL(event.target.files[0]),
            });
        }
    }



    return (
        <Form className="mt-2" onSubmit={handleSubmit}>
            <Form.Group>
                <InputGroup>
                    <Form.Control
                    className={styles.Form}
                    placeholder="my message..."
                    value={value}
                    onSubmit={handleSubmit}
                    onChange={handleChange}
                    as="textarea"
                    rows={2}
                    />
                </InputGroup>
                <InputGroup>
                    <Form.Control
                    className={styles.Form}
                    multiple={false}
                    style={{ display: 'none'}}
                    onChange={handleUpload}
                    />
                </InputGroup>
            </Form.Group>
            <button
            className={`${styles.Button} btn d-block ml-auto`}
            type="submit"
            >
                Post
            </button>
        </Form>
    )
}

export default MessageForm