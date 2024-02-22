import assest from '@/json/assest'
import styled from '@emotion/styled'
import { Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import AboutCard from '../AboutCard/AboutCard'
import CommonHeadingTittle from '../CommonHeadingTittle/CommonHeadingTittle'

const AboutProductWrap = styled(Box)`
    padding: 80px 0;
    @media(max-width: 600px){
        padding: 40px 0;
    }
    .section-heading{
       
        margin: 0 auto 40px;
       
    }
`

export default function AboutProduct() {

  const aboutData = [
    {
        iconUrl: assest.abtIco1,
        
        heading: 'Lorem Ipsum is simply dummy text',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        iconUrl: assest.abtIco2,
        
        heading: 'Lorem Ipsum is simply dummy text',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        iconUrl: assest.abtIco3,
       
        heading: 'Lorem Ipsum is simply dummy text',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
  ]  

  return (
    <AboutProductWrap id="about-sec">
        <Container fixed>
            <Box className="section-heading">
                <CommonHeadingTittle tittletxt={'About Product'} subTxt={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"} />
            </Box>
           
            <Box className="product-content">
                <Grid container columnSpacing={5} rowSpacing={5}>
                    {
                        aboutData.map((data)=> (
                            <Grid item lg={4} md={4} xs={12}>
                                <AboutCard 
                                    iconUrl={data.iconUrl}
                                    heading={data.heading}
                                    para={data.para}
                                />
                            </Grid>
                        ))
                    }
                    
                </Grid>
            </Box>
        </Container>
    </AboutProductWrap>
  )
}
