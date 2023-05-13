import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { BiUserCircle } from 'react-icons/bi';
import { RiDashboardFill } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const isAuthenticated = false;
  const user = {
    role: 'admin',
  };

  return (
    <>
      <Stack display={['block', 'block', 'none', 'none']}>
        <Button ref={btnRef} onClick={onOpen}>
          <GiHamburgerMenu color="blue" />
        </Button>
      </Stack>

      <Stack
        direction="row"
        display={['none', 'none', 'flex', 'flex']}
        justifyContent={'center'}
        alignItems={'center'}
        position={'sticky'}
        className="navbar_box"
        spacing={'3rem'}
        cursor={'pointer'}
        fontWeight={'bold'}
        top={0}
        zIndex={1}
      >
        <Link to={'/'} className="navbar_box_link">
          Home
        </Link>
        <Link to={'/courses'} className="navbar_box_link">
          Browse All Courses
        </Link>
        <Link to={'/request'} className="navbar_box_link">
          Request New Course
        </Link>
        <Link to={'/contact'} className="navbar_box_link">
          Contact us
        </Link>
        <Link to={'/about'} className="navbar_box_link">
          About
        </Link>

        {isAuthenticated ? (
          <>
            <Popover>
              <PopoverTrigger>
                <Button
                  backgroundColor={'yellow.700'}
                  color="white"
                  paddingLeft={'5'}
                  alignItems={'center'}
                  justifyItems={'center'}
                  gap={'3'}
                  _hover={{ backgroundColor: 'red', color: 'white' }}
                >
                  <BiUserCircle />
                  User Settings
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <Button variant={'outline'} colorScheme="messenger">
                  <RiDashboardFill />
                  Dashboard
                </Button>
                <Button
                  colorScheme="messenger"
                  paddingLeft={'1'}
                  alignItems={'center'}
                  justifyItems={'center'}
                  gap={'1'}
                >
                  <FiLogOut /> Logout
                </Button>
              </PopoverContent>
            </Popover>
          </>
        ) : (
          <></>
        )}

        <ColorModeSwitcher />
      </Stack>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Welcome</DrawerHeader>

          <DrawerBody>
            <VStack spacing={'3'} alignItems={'flex-start'} p={1}>
              <Link to={'/'} onClose={onClose}>
                Home
              </Link>
              <Link to={'/courses'} onClose={onClose}>
                Browse All Courses
              </Link>
              <Link to={'/request'} onClose={onClose}>
                Request New Course
              </Link>
              <Link to={'/contact'} onClose={onClose}>
                Contact us
              </Link>
              <Link to={'/about'} onClose={onClose}>
                About
              </Link>
            </VStack>

            <HStack>
              {isAuthenticated ? (
                <>
                  <VStack>
                    <HStack marginTop={'50'}>
                      <Link>
                        <Button gap={'3'} colorScheme="messenger">
                          <CgProfile /> Profile
                        </Button>
                      </Link>

                      <Button gap={'3'} colorScheme="messenger">
                        <FiLogOut />
                        Logout
                      </Button>
                      <ColorModeSwitcher />
                    </HStack>

                    {user && user.role === 'admin' && (
                      <Link onClick={onClose} to="/admin/dashboard">
                        <Button colorScheme={'messenger'} variant="ghost">
                          Dashboard
                        </Button>
                      </Link>
                    )}
                  </VStack>
                </>
              ) : (
                <>
                  <HStack marginTop={'50'}>
                    <Link to={'/login'}>
                      <Button colorScheme="messenger" gap={'3'}>
                        <FiLogIn />
                        Login
                      </Button>
                    </Link>
                    <Link to={'/register'}>
                      <Button colorScheme="messenger" gap={'3'}>
                        <FiLogIn /> Register
                      </Button>
                    </Link>
                    <ColorModeSwitcher />
                  </HStack>
                </>
              )}
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
