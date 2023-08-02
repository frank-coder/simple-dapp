import React from 'react';
import { Flex, Stack } from '@chakra-ui/react';
import Navbar from './navbar';
import Sendcrypto from './sendBusd';
import Footer from './footer';

export default function Homepage() {
  return (
    <Flex direction="column" h="100vh">
      <Navbar />
      <Flex flexGrow={1}>
        <Stack
          direction="column"
          align="center"
          justify="center"
          flexGrow={1}
          p={4}
        >
          <Sendcrypto />
        </Stack>
      </Flex>
      <Footer />
    </Flex>
  );
}
