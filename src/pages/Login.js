import { useState } from "react";
import { Container, Text, Input, Button, Flex } from "@chakra-ui/react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  return (
    <Flex width="100vw" height={"100vh"} justify="center" alignItems="center">
      <Container boxShadow="2xl" p={4}>
        <Flex direction="column">
          <Text fontSize="3xl">Login</Text>
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
            onClick={() => signInWithEmailAndPassword(email, password)}
          >
            Login
          </Button>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Login;
