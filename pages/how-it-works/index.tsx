import React from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  Container,
  Wrapper,
} from '../styled';

class HowItWorks extends React.Component {

  render() {

    return (
      <Container>
        <Head>
          <title>Capucco: Learn anything and anywhere</title>
        </Head>
        <Header />
        <Wrapper>
          How it works?
        </Wrapper>
        <Footer />
      </Container>
    )
  }
}

export default withRouter(HowItWorks)