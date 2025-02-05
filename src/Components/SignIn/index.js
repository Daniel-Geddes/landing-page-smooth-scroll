import React from 'react'
import { FaDailymotion } from 'react-icons/fa'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormInput,
    FormLabel,
    Text, 
    FormButton,
} from './SignInElements';


const SignIn = () => {
    return (
        <>
           <Container>
               <FormWrap>
                   <Icon to='/'>
                    Design <FaDailymotion />
                   </Icon>
                   <FormContent>
                       <Form action='#'>
                            <FormH1>
                               Sign in to your account
                            </FormH1>
                            <FormLabel htmlFor='for'>
                                Email
                            </FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>
                                Password
                            </FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot password?</Text>
                       </Form>
                   </FormContent>
               </FormWrap>
            </Container> 
        </>
    )
}

export default SignIn
