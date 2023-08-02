import {
  Box,
  Flex,
  Image,
  Menu,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  IconButton,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Web3Button } from '@web3modal/react';
import icon from './assets/cryptoToken.png'

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      px={4}
      py={3}
      position="sticky"
      top={0}
      zIndex="999"
    >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        maxWidth="1200px"
        mx="auto"
      >
        {/* Logo (left side) */}
        <Box fontWeight="bold" fontSize="lg">
          <a href='#'><Image src={icon} alt='Logo' w={50} h={50}></Image></a>
        </Box>

        {/* Navbar links (right side) */}
        <Flex alignItems="center">
          <Stack direction="row" spacing={4}>
            {/* Dark Mode Toggle */}
            <IconButton
              onClick={toggleColorMode}
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              size="md"
              aria-label="Toggle Dark Mode"
            />

            <Menu>
              <Web3Button />
            </Menu>
          </Stack>

          <Box display={{ base: 'block', md: 'none' }} ml={4}>
            <IconButton
              icon={<HamburgerIcon />}
              variant="ghost"
              aria-label="Mobile Menu"
              onClick={isOpen ? onClose : onOpen}
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
