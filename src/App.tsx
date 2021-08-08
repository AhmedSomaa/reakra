import * as React from "react";
import { ChakraProvider, Box, Text, VStack, Grid } from "@chakra-ui/react";
import theme from "theme";

export const App = () => (
    <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
            <Grid minH="100vh" p={3}>
                <VStack spacing={8}>
                    <Text>React + Chakra UI + React-Query + Axios + TypeScript</Text>
                </VStack>
            </Grid>
        </Box>
    </ChakraProvider>
);
