import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { FaFacebookSquare, FaTwitter, FaLinkedin } from 'react-icons/fa';

import logo from '../../assets/images/Logo LearnAcademy.png';

const Footer = () => {
  return (
    <>
      <Stack
        backgroundColor={'blue.700'}
        color={'white'}
        direction={['column', 'column', 'row']}
        m={'auto'}
        w={'full'}
        padding={'5'}
        marginTop={'10'}
      >
        <SimpleGrid columns={[1, 1, 3]} spacing="40px">
          <Box w={'100%'} m={'auto'}>
            <Image
              src={logo}
              mt={'-5'}
              width={'200px'}
              h={'200px'}
              clipPath={'inset(50px 0 50px 0 round 0px)'}
            ></Image>
            <Text mb={'3'} mt={'-5'}>
              Become a coding pro with our expert instructors on the best edtech
              platform in the game! From beginners to advanced, our personalized
              and interactive lessons will take you to the next level.
            </Text>
            <Box
              display={'flex'}
              gap={'3'}
              mt={'5'}
              p={'1'}
              w={'100%'}
              m={'auto'}
            >
              <FaFacebookSquare color="white" size={'30'} />
              <FaTwitter color="white" size={'30'} />
              <FaLinkedin color="white" size={'30'} />
            </Box>
          </Box>

          <Box
            w={'100%'}
            mt={5}
            display={'flex'}
            flexDirection={'column'}
            m={'auto'}
          >
            <Heading m={'auto'}>Quick Links</Heading>
            <Button
              variant={'link'}
              m={'1'}
              p={'1'}
              color={'white'}
              _hover={{ color: 'yellow' }}
            >
              Classes
            </Button>
            <Button
              variant={'link'}
              m={'1'}
              p={'1'}
              color={'white'}
              _hover={{ color: 'yellow' }}
            >
              Join with us
            </Button>
            <Button
              variant={'link'}
              m={'1'}
              p={'1'}
              color={'white'}
              _hover={{ color: 'yellow' }}
            >
              About
            </Button>
            <Button
              variant={'link'}
              m={'1'}
              p={'1'}
              color={'white'}
              _hover={{ color: 'yellow' }}
            >
              Blog
            </Button>
            <Button
              variant={'link'}
              m={'1'}
              p={'1'}
              color={'white'}
              _hover={{ color: 'yellow' }}
            >
              Events
            </Button>
          </Box>

          <Box
            w={'100%'}
            mt={5}
            display={'flex'}
            flexDirection={'column'}
            m={'auto'}
          >
            <Heading m={'auto'}>About Us</Heading>
            <Button
              variant={'link'}
              m={'1'}
              p={'1'}
              color={'white'}
              _hover={{ color: 'yellow' }}
            >
              Our Team
            </Button>
            <Button
              variant={'link'}
              m={'1'}
              p={'1'}
              color={'white'}
              _hover={{ color: 'yellow' }}
            >
              Privacy Policy
            </Button>
            <Button
              variant={'link'}
              m={'1'}
              p={'1'}
              color={'white'}
              _hover={{ color: 'yellow' }}
            >
              Testimonial
            </Button>
            <Button
              variant={'link'}
              m={'1'}
              p={'1'}
              color={'white'}
              _hover={{ color: 'yellow' }}
            >
              Programing
            </Button>
            <Button
              variant={'link'}
              m={'1'}
              p={'1'}
              color={'white'}
              _hover={{ color: 'yellow' }}
            >
              User Stories
            </Button>
          </Box>
        </SimpleGrid>
      </Stack>
    </>
  );
};

export default Footer;
