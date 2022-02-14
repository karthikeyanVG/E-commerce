import React, { useState } from 'react'
import { Input, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import './login.css'
import PrimaryButton, { SecondaryButton } from '../CustomButtons/CustomBUttons'
import { login } from '../../service'
const Login = () => {
    const [show, setShow] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onEmailChange = (e) => {
        // console.log(e.target.value);
        setEmail(e.target.value)
    }
    const onPasswordChange = (e) => {
        // console.log(e.target.value);
        setPassword(e.target.value)
    }
    const onSubmitValues = async () => {
        const userData = {
            email: email,
            password: password
        }
        let result;
        try {
            result = await login(userData)

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='div-model'>
            <Modal isOpen={show} className="Model" style={{ maxWidth: '420px', width: '100%' }}>
                <ModalHeader>
                    <div className='heading'>Login</div>
                </ModalHeader>
                <ModalBody>
                    <div className="container">
                        <label >Email</label>
                        <Input
                            type="text"
                            placeholder="Enter Email"
                            name="email"
                            value={email}
                            onChange={onEmailChange}

                        />
                        <label >Password</label>
                        <Input
                            type="password"
                            placeholder="Enter Password"
                            name="psw"
                            value={password}
                            onChange={onPasswordChange}

                        />

                    </div>
                </ModalBody>
                <ModalFooter className='button' >
                    <PrimaryButton text={"Log In"} onClick={() => onSubmitValues()} />
                    <SecondaryButton text={"Sign Up"} />
                </ModalFooter>
            </Modal>

        </div>
    )
}

export default Login
