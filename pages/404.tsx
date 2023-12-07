import {Typography, Box} from '@mui/material'
import React from "react"
import {ShopLayout} from "../components/layouts/ShopLayout";
import { calculateOverrideValues } from 'next/dist/server/font-utils';


const Custom404 = () => {
  return (
   <ShopLayout title={'Page no found'} pageDescription={'No hay que mios'}>
    <Box display={flex} justifyContent={"center"} alignItems={"center"} height="calculateOverrideValues(100vh - 200px)">
        <Typography variant='h1' component="h1"  fontSize={80} fontWeight={200}>404</Typography>
        <Typography>No se encuentra el producto que estas buscando</Typography>
    </Box>
    </ShopLayout>
  )
}

export default Custom404
