import React, { useState } from 'react'
import { Input, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import './SignUp.css'
import PrimaryButton, { SecondaryButton } from '../CustomButtons/CustomBUttons'
import { register } from '../../service';
const SignUpForm = () => {
    const [show, setShow] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [type, setType] = useState('');

    const onNameChange = (e) => {
        // console.log(e.target.value);
        setName(e.target.value)
    }
    const onEmailChange = (e) => {
        // console.log(e.target.value);         
        setEmail(e.target.value)
    }
    const onPhoneChange = (e) => {
        // console.log(e.target.value);
        setPhone(e.target.value)
    }
    const onPasswordChange = (e) => {
        // console.log(e.target.value);
        setPassword(e.target.value)
    }
    const onConfirmChange = (e) => {
        // console.log(e.target.value);
        setConfirmPassword(e.target.value)
    }
    const onTypeClick = (e) => {
        console.log(e.target.value);
        setType(e.target.value)
    }
    const onSubmitValues = async () => {// connect to back end process
        if (password === confirmPassword) {
            const UserData = {
                name: name,
                email: email,
                phone: phone,
                password: password,
                confirmPassword: confirmPassword,

            }
            let result;
            try {
                result = await register(UserData);
                /*  props.history.push({
                     pathname: '/login',
                     state: { next: props.location.pathname },
                   }); */

            } catch (error) {
                console.log(error);
            }
        } else {
            alert("Your password missmatch")
        }
    }

    return (
        <div className='div-model'>
            <Modal isOpen={show} className="Model" style={{ maxWidth: '420px', width: '100%' }}>
                <ModalHeader>
                    <div className='heading'>Sign Up</div>
                </ModalHeader>
                <ModalBody>
                    <div className="container">
                        <label >Name</label>
                        <Input
                            type="text"
                            placeholder="Enter Your Name"
                            name="name"
                            value={name}
                            onChange={onNameChange}
                        />
                        <label >Email</label>
                        <Input
                            type="text"
                            placeholder="Enter Email"
                            name="email"
                            value={email}
                            onChange={onEmailChange}
                        />
                        <label >Phone Number</label>
                        <Input
                            type="text"
                            placeholder="Enter Phone Number"
                            name="phone"
                            value={phone}
                            onChange={onPhoneChange}
                        />
                        <label >Password</label>
                        <Input
                            type="password"
                            placeholder="Enter Password"
                            name="psw"
                            value={password}
                            onChange={onPasswordChange}
                        />
                        <label >Confirm Password</label>
                        <Input
                            type="password"
                            placeholder="Confirm Password"
                            name="psw-repeat"
                            value={confirmPassword}
                            onChange={onConfirmChange}
                        />
                        <label >Login Type</label>
                        <div>
                            <Input
                                type="radio"
                                placeholder="Confirm Password"
                                name="psw-repeat"
                                value="admin"
                                checked={type === 'admin'}
                                onChange={onTypeClick}
                            />
                            <label >Admin</label>
                            <div>
                                <Input
                                    type="radio"
                                    placeholder="Confirm Password"
                                    name="psw-repeat"
                                    value="student"
                                    checked={type === 'student'}
                                    onChange={onTypeClick}
                                />
                                <label >Student</label>
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter className='button' >
                    <PrimaryButton text={"Sign Up"} onClick={() => onSubmitValues()} />
                    <SecondaryButton text={"Log In"} />
                </ModalFooter>
            </Modal>

        </div>
    )
}
export default SignUpForm
