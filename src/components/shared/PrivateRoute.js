import { Navigate } from "react-router-dom";
import { Flex, Spinner, Text } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";

const PrivateRoute = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <Flex
        height="100vh"
        width="100vw"
        justifyContent="center"
        alignItems="center"
      >
        <Spinner size="xl" />
        <Text>Loading...</Text>
      </Flex>
    );
  }

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
