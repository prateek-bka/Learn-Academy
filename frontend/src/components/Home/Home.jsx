import {
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import codePic from '../../assets/images/Code Pic.jpg';
import learnAnytime from '../../assets/images/LearnAnytime Pic.jpg';
import liveClasses from '../../assets/images/LiveClasses Pic.jpg';
import homePage from '../../assets/images/Homepage.png';
import './Home.css';

const data = [
  {
    img: 'https://i.ibb.co/cJ3Jprm/Different-Courses-Pic.jpg',
    title: '10+ Different Courses',
    content: 'Java, Python, JS',
  },
  {
    img: 'https://i.ibb.co/yqf4tj0/Student-Enrolled-Pic.jpg',
    title: '300+ Students Enrolled',
    content: 'Limited Seats',
  },
  {
    img: 'https://i.ibb.co/pwY4RdT/Career-Transition-Pic.jpg',
    title: '180+ Carreer Transitions',
    content: 'Still Counting',
  },
];

const Home = () => {
  return (
    <>
      <Stack
        direction={['column', 'column', 'row']}
        m={'auto'}
        w={'full'}
        padding={'5'}
        marginTop={'10'}
        textAlign={'center'}
      >
        <Heading fontSize="4xl" color={'blue.900'} m={'auto'}>
          Welcome to LearnAcademy
        </Heading>
      </Stack>

      <Stack direction={['column', 'column', 'row']} m={'auto'} w={'full'}>
        <Text pt={'5'} textAlign={'center'} color={'black.500'}>
          <b>सिद्धिर्भवति कर्मजा</b> <br /> <b>Success is born out of action</b>{' '}
          <br />
          Looking to learn coding online? Our edtech platform offers the best
          coding teachers in the business. Our expert instructors are passionate
          about coding and will guide you through the learning process, no
          matter your skill level. With our interactive and personalized
          lessons, you'll be writing code like a pro in no time!
        </Text>
      </Stack>

      <Stack
        direction={['column', 'column', 'row']}
        m={'auto'}
        w={'full'}
        pt={'10'}
      >
        <Stack w={'100%'}>
          <Box display={'flex'} gap={'3'} p={5}>
            <Box>
              <Image
                src={liveClasses}
                width={'100px'}
                height={'100px'}
                borderRadius={'50%'}
              />
            </Box>
            <Box marginBottom={'5'}>
              <Heading color={'green.700'}>Daily live classes</Heading>
              <Text>
                Get real-time help during class! Chat with educators, ask
                questions, answer polls, and clear your doubts.
              </Text>
            </Box>
          </Box>

          <Box display={'flex'} gap={'3'} p={5}>
            <Box>
              <Image
                src={codePic}
                width={'100px'}
                height={'100px'}
                borderRadius={'50%'}
              />
            </Box>
            <Box marginBottom={'5'}>
              <Heading color={'green.700'}>Practice and revise</Heading>
              <Text>
                Expand your learning beyond the classroom with our practice
                section for revision!
              </Text>
            </Box>
          </Box>

          <Box display={'flex'} gap={'3'} p={5}>
            <Box marginBottom={'5'}>
              <Image
                src={learnAnytime}
                width={'100px'}
                height={'100px'}
                borderRadius={'50%'}
              />
            </Box>
            <Box>
              <Heading color={'green.700'}>Learn anytime, anywhere</Heading>
              <Text>
                Watch all our live and recorded classes from any device,
                anytime, anywhere! Get access now.
              </Text>
            </Box>
          </Box>
        </Stack>

        <Stack w={'100%'} alignItems={'center'} justifyItems={'center'}>
          <Image
            className="homePageImage"
            marginLeft={'10'}
            w={'90%'}
            src={homePage}
            alignItems={'center'}
            justifyItems={'center'}
            p={5}
            borderRadius={'50px'}
          />
        </Stack>
      </Stack>

      <Stack
        direction={['column', 'column', 'row']}
        m={'auto'}
        w={'full'}
        padding={'5'}
        marginTop={'10'}
        textAlign={'center'}
      >
        <Heading
          fontSize="4xl"
          color={'green.500'}
          textAlign={'center'}
          m={'auto'}
        >
          Join the Mission | Learn from the Best
        </Heading>
      </Stack>
      <Stack
        direction={['column', 'column', 'row']}
        m={'auto'}
        w={'full'}
      ></Stack>
      <SimpleGrid columns={[1, 1, 3]} spacing="40px">
        {data &&
          data.map((el, index) => {
            return (
              <Card>
                <CardBody>
                  <Image
                    className="homePageJoinImage"
                    src={el.img}
                    alt=""
                    borderRadius="lg"
                    height={'250px'}
                    width={'360px'}
                    justifyItems={'center'}
                    alignItems={'center'}
                    m={'auto'}
                  />
                  <Stack mt="6" spacing="4">
                    <Heading
                      size={'lg'}
                      textAlign={'center'}
                      m={'auto'}
                      color={'darkorchid'}
                    >
                      {el.title}
                    </Heading>
                    <Box display={'flex'} gap={'7'} m={'auto'} p={'3'}>
                      <Text
                        textAlign={'center'}
                        color="blue.600"
                        fontSize="2xl"
                        m={'auto'}
                      >
                        {el.content}
                      </Text>
                    </Box>
                  </Stack>
                </CardBody>
              </Card>
            );
          })}
      </SimpleGrid>
    </>
  );
};

export default Home;
