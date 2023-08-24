import { useState } from "react";
import { Button, FormControl, InputGroup, Form } from "react-bootstrap"

const SendMessageForm = ({sendMessage}) => {

    const  [message, setMessage]  = useState('');

    return <Form 
        onSubmit = {e => {
            e.preventDefault();
            sendMessage(message);
            setMessage('');
        }}>
        <InputGroup>
            <FormControl placeholder="message..."
                onChange={ e=> setMessage(e.target.value)} value={message} />
            <div className ='input-group-append'>
                <Button variant="primary" type="submit" disabled={!message}>Send</Button>
            </div>
        </InputGroup>
    </Form>
}

export default SendMessageForm;