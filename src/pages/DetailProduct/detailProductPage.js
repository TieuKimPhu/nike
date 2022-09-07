import { Container, CssBaseline } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom';
import ProductDetail from '../../components/ProductDetail/ProductDetail';

const DetailProductPage = () => {
    const {id} = useParams()
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container>
                <ProductDetail id={id}/>
            </Container>
        </React.Fragment>
  )
}

export default DetailProductPage;