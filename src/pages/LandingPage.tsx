import React from "react";
import { Box, Grid, Flex, Text, Link, VStack, HStack } from "@chakra-ui/react";

interface Props {
    navLinks: string[];
}

const LandingPage = ({ navLinks }: Props) => {
    return (
        <Box textAlign="center" fontSize="xl" bg="whitesmoke">
            <Grid minH="100vh" p={3}>
                <Flex alignItems="center" justifyContent="center">
                    <VStack>
                        <Text fontSize="2xl" fontWeight="black">
                            Welcome to Reakra
                        </Text>
                        <Text fontSize="medium" fontWeight="normal">
                            Reakra is a React application built with Chakra UI &amp; React-Query.
                            <hr />
                            Each link from the following links redirects to a page that dispalys data fetched from
                            jsonplaceholder website
                        </Text>
                        <HStack spacing={4}>
                            {navLinks.map((navLink, index) => (
                                <Link key={index} fontWeight="semibold" color="blue.400" href={navLink}>
                                    {navLink.toUpperCase()}
                                </Link>
                            ))}
                        </HStack>
                    </VStack>
                </Flex>
            </Grid>
        </Box>
    );
};

export default LandingPage;
