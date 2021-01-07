import {Box, Heading, Flex, HStack, Button, IconButton} from "@chakra-ui/react";
import {MoonIcon} from "@chakra-ui/icons";
import {useColorMode} from "@chakra-ui/color-mode";

export default function Header() {
    const { colorMode, toggleColorMode } = useColorMode()

    return <Box p={5}>
        <Flex justifyContent='space-between'>
            <Heading size="md">John's Boilerplate</Heading>
            <HStack>
                <IconButton aria-label="Toggle dark theme" onClick={toggleColorMode} icon={<MoonIcon />} />
                <Button colorScheme="blue" variant="outline">
                    Log in
                </Button>
                <Button colorScheme="blue">
                    Sign up
                </Button>
            </HStack>

        </Flex>

    </Box>
}