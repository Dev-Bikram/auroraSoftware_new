import { Checkbox, FormControl, FormControlLabel, Grid, Link, Typography } from '@mui/material'
import { Box, Container, styled } from '@mui/system'
import React, { useEffect, useState } from 'react'
import InputFildcommn from '../InputFildcommn/InputFildcommn'
import CustomButton from '@/ui/Buttons/CustomButton'
import assest from '@/json/assest'
import Image from 'next/image'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query'
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useNavigate } from 'react-router-dom'
import { IfetchContactUs, fetchContactUs } from '@/api/functions/contact.api'
import { useAppSelector } from '@/hooks/useAppSelector'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/router'
import CircularProgress from '@mui/material/CircularProgress';
const ConatcUsWrap = styled(Box)`
.main-contactWrap{
    position: relative;
    padding: 50px 0 80px;
    @media(max-width: 1199px){
        padding: 40px 0;
    }
    .innerWrap-main{
        position: relative;
        .MuiGrid-container{
            align-items: center;
            .wrapInner-loginform{
                position: relative;
                border-radius: 10px;
                background: var(--white);
                box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.25);
                padding: 34px 44px;
                @media(max-width: 1199px){
                    padding: 30px 25px;
                }
                @media(max-width: 899px){
                    padding: 30px 20px;
                    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
                }
                h2{
                    color: var(--color343641);
                    margin-bottom: 25px;
                    @media(max-width: 899px){
                        margin-bottom: 15px;
                        font-size: 24px;
                    }
                }
                .single-inputWrap{
                    position: relative;
                    margin-bottom: 20px;
                    &.textaremsg-inputwrap{
                        .input_style_wrap{
                            img{
                                top: 22px;
                                transform: inherit;
                            }
                        }
                    }
                    .input_style_wrap{
                        position: relative;
                        img{
                            position: absolute;
                            top: 50%;
                            transform: translateY(-50%);
                            z-index: 1;
                            left: 10px;
                        }
                    }
                }
                .checkbox-common{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 35px;
                    .MuiFormControlLabel-root{
                        span{
                            font-size: 14px;
                            color: var(--color343641);
                            font-weight: 400;
                        }
                    }
                    a{
                        font-size: 14px;
                        color: var(--color343641);
                        font-weight: 400;
                        display: inline-block;
                        &:hover{
                            color: var(--colorff0000);
                        }
                    }
                }
                .submtbtn-wraplogin{
                    position: relative;
                    text-align: center;
                    button{
                        min-width: auto;
                    }
                }
                .orlogin-txtwrap{
                    position: relative;
                    text-align: center;
                    &:before{
                        border: 1px dashed var(--color808080);
                        position: absolute;
                        content: "";
                        width: 100%;
                        height: 1px;
                        left: 0;
                        top: 50%;
                        transform: translateY(-50%);
                    }
                    p{
                        display: inline-block;
                        padding: 0 15px;
                        background: var(--white);
                        z-index: 1;
                        position: relative;
                    }
                }
                .login-signinlinks{
                    text-align: center;
                    margin-top: 15px;
                    p{
                        font-size: 20px;
                        color: var(--color343641);
                        font-weight: 400;
                        a{
                            font-weight: 700;
                            color: var(--color343641);
                            margin-left: 5px;
                            &:hover{
                                color: var(--colorff0000);
                            }
                        }
                    }
                }
            }
        }
        .maincontactleftWrap{
            position: relative;
            background: rgba(81, 178, 228, 0.10);
            padding: 64px 10px 64px 54px;
            @media(max-width: 1199px){
                padding: 30px 10px 30px 30px; 
            }
            @media(max-width: 899px){
                padding: 30px 15px;
                margin-bottom: 20px;
            }
            .single-contact-lftMn{
                position: relative;
                display: flex;
                margin-bottom: 50px;
                @media(max-width: 899px){
                    margin-bottom: 30px;
                }
                &:last-child{
                    margin-bottom: 0;
                }
                i{
                    display: inline-flex;
                    width: 30px;
                    flex-basis: 30px;
                    align-items: flex-start;
                }
                .rghttxtContact-wrp{
                    padding-left: 20px;
                    width: calc(100% - 30px);
                    flex-basis: calc(100% - 30px);
                    @media(max-width: 899px){
                        padding-left: 10px;
                    }
                    span{
                        font-size: 20px;
                        font-weight: 600;
                        color: var(--color343641);
                        display: block;
                        line-height: 1;
                        margin-bottom: 6px;
                        @media(max-width: 899px){
                            font-size: 16px;
                        }
                    }
                    p{
                        color: var(--color343641);
                        @media(max-width: 899px){
                            font-size: 14px;
                        }
                        a{
                            color: var(--color343641);
                            text-decoration: none;
                            &:hover{
                                color: var(--colorF68939);
                            }
                        }
                    }
                }
            }
        }
    }
}
`
// interface IFormInput {
//     Name: string
//     Email: string
//     Message: String
//   }


export default function ContactUs() {
const[formdata,setFormdata]= useState(null);
const { register, handleSubmit } = useForm<IfetchContactUs>()
const router = useRouter();

// const onSubmit = (data: IFormInput) => {
//     fetchContactUs(data)?.then((responce) => {
//         const data = responce.data
//         console.log("data:", data)
//        }).catch((error) => {
//         console.log("error", error)

//     })
// }

const { mutate, isLoading, status, data, error } = useMutation(
    "contact",
    fetchContactUs
  );
const onSubmit: SubmitHandler<IfetchContactUs> = (data) =>{ 
    mutate(
        data, {
            onSuccess: ()=>{
                alert("Data submitted successfully")
                router.push('/blog')
            }
        }
        

    )
    
    console.log(data)
}

if (isLoading) {
    return <CircularProgress disableShrink style={{  position: "fixed",
        top: "10%",
        left: "50%",
        transform: "translate(-50%, -50%)",
       }}/>
}



  return (
    <ConatcUsWrap>
        <Box className="main-contactWrap">
            <Container fixed>
                <Box className="innerWrap-main">
                    <Grid container>
                        <Grid item md={6} xs={12}>
                            <Box className="maincontactleftWrap">
                                <Box className="wrapper-contactlft">
                                    <Box className="single-contact-lftMn">
                                        <i><Image src={assest.contcticonmn1} width={30} height={30} alt='contacticon'/></i>
                                        <Box className="rghttxtContact-wrp">
                                            <Typography variant='caption'>Call Us</Typography>
                                            <Typography variant='body1'><Link href='tel:+916373264343'>+91 6373264343</Link></Typography>
                                        </Box>
                                    </Box>
                                    <Box className="single-contact-lftMn">
                                        <i><Image src={assest.contcticonmn2} width={30} height={30} alt='contacticon'/></i>
                                        <Box className="rghttxtContact-wrp">
                                            <Typography variant='caption'>Location</Typography>
                                            <Typography variant='body1'>6A, Lorem Ipsum is simply dummy text</Typography>
                                        </Box>
                                    </Box>
                                    <Box className="single-contact-lftMn">
                                        <i><Image src={assest.contcticonmn3} width={30} height={30} alt='contacticon'/></i>
                                        <Box className="rghttxtContact-wrp">
                                            <Typography variant='caption'>Business Hours</Typography>
                                            <Typography variant='body1'>Mon - Fri..........10am-8pm.</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={6} xs={12}>
                        <FormControl onSubmit={handleSubmit(onSubmit)}>
                        <Stack
                            component="form"
                            sx={{
                              width: '50ch',
                              margin: 'auto'
                            }}
                            spacing={2}
                            noValidate
                            autoComplete="off"
                          >
                            <Box className="wrapInner-loginform">
                                <Typography variant='h2'>Contact Us</Typography>
                                <Box className="single-inputWrap">
                                 
                                    <TextField placeholder='Name' type='text' {...register("name", { required: true })}/>
                                </Box>
                                <Box className="single-inputWrap">

                                    <TextField placeholder='Email' type='email'  {...register("email", { required: true })}/>
                                </Box>
                                <Box className="single-inputWrap textaremsg-inputwrap">
                                    <TextField placeholder='Type your message here' type='text'{...register("message", { required: true})}/>
                                </Box>
                                <Box className="submtbtn-wraplogin">
                                    <CustomButton type="submit">
                                        <Typography variant="caption">Submit</Typography>
                                    </CustomButton>
                                </Box>
                            </Box>
                            </Stack>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    </ConatcUsWrap>
  )
}
