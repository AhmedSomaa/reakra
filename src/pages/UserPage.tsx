import { Image, Box, Center, Flex, Spinner, Table, Tbody, Td, Tr, Divider, VStack } from "@chakra-ui/react";
import { useUser } from "hooks/user";
import React from "react";
import { useLocation } from "react-router";
import getQueryParams from "utils/helpers/getQueryParams";

interface Props {}

const UserPage = (props: Props) => {
    const location = useLocation();
    const queryParams = getQueryParams(location.pathname);
    const userId = parseInt(queryParams[2]);

    const { status, data, error }: any = useUser(userId);
    return (
        <div>
            {status === "loading" ? (
                <Flex bg="grey.300" minH="100vh" alignItems="center" justifyContent="center">
                    <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
                </Flex>
            ) : status === "error" ? (
                <Flex bg="grey.300" minH="100vh" alignItems="center" justifyContent="center">
                    <Box>
                        <span>Error: {error.message}</span>
                    </Box>
                </Flex>
            ) : (
                <Flex bg="grey.300" minH="100vh" alignItems="center" justifyContent="center">
                    <Box border="1px" p={3}>
                        <VStack>
                            <Center>
                                <Image
                                    boxSize="150px"
                                    alt={data.name}
                                    objectFit="cover"
                                    src="https://via.placeholder.com/150"
                                />
                            </Center>
                            <Divider />
                            <Table variant="unstyled">
                                <Tbody>
                                    <Tr>
                                        <Td fontWeight="extrabold">ID:</Td>
                                        <Td>{data.id}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td fontWeight="extrabold">Name:</Td>
                                        <Td>{data.name}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td fontWeight="extrabold">Username:</Td>
                                        <Td>{data.username}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td fontWeight="extrabold">Email:</Td>
                                        <Td>{data.email}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td fontWeight="extrabold">Addrress:</Td>
                                        <Td>
                                            {`${data.address.zipcode}, ${data.address.street}, ${data.address.suite}, 
                                        ${data.address.city}`}
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td fontWeight="extrabold">Phone:</Td>
                                        <Td>{data.phone}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td fontWeight="extrabold">Website:</Td>
                                        <Td>{data.website}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td fontWeight="extrabold">Company:</Td>
                                        <Td>{`${data.company.name}, "${data.company.catchPhrase}"`}</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </VStack>
                    </Box>
                </Flex>
            )}
        </div>
    );
};

export default UserPage;
