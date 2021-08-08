import { Box, Flex, Table, Tbody, Td, Th, Thead, Tr, LinkBox, LinkOverlay, Spinner } from "@chakra-ui/react";
import { useUsers } from "hooks/user";
import React from "react";
import IUser from "types/user.type";

interface Props {}

const UsersPage = (props: Props) => {
    const { status, data, error }: any = useUsers();

    return (
        <div>
            {status === "loading" ? (
                <Flex minH="100vh" alignItems="center" justifyContent="center">
                    <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
                </Flex>
            ) : status === "error" ? (
                <Box p={5}>
                    <Flex alignItems="center" justifyContent="center">
                        <span>Error: {error.message}</span>
                    </Flex>
                </Box>
            ) : (
                <Box p={5}>
                    <Flex alignItems="center" justifyContent="center">
                        <Table variant="striped">
                            <Thead>
                                <Tr>
                                    <Th>id</Th>
                                    <Th>name</Th>
                                    <Th>email</Th>
                                    <Th>phone</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {data.map(({ id, name, email, phone }: IUser) => (
                                    <LinkBox as={Tr} key={id} transform="scale(1)">
                                        <Td>
                                            <LinkOverlay href={`users/${id}`}>{id}</LinkOverlay>
                                        </Td>
                                        <Td>{name}</Td>
                                        <Td>{email}</Td>
                                        <Td>{phone}</Td>
                                    </LinkBox>
                                ))}
                            </Tbody>
                        </Table>
                    </Flex>
                </Box>
            )}
        </div>
    );
};

export default UsersPage;
