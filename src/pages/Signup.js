import { Flex, Input, Button, Text, Container, Box } from "@chakra-ui/react";
import { useState } from "react";
import { auth } from "../config/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  return (
    <Flex width="100vw" height={"100vh"} justify="center" alignItems="center">
      <Container boxShadow="2xl" p={4}>
        <Flex direction="column">
          <Text fontSize="3xl">Signup</Text>
          <Input
            mt={2}
            placeholder="deishacks@gmail.com"
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            mt={2}
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Your password"
          />
          <Button
            mt={2}
            onClick={() => createUserWithEmailAndPassword(email, password)}
          >
            Sign Up
          </Button>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Signup;
