import { Flex, Text, Button } from "@chakra-ui/react";
import { useNavigate, Outlet } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  return (
    <>
      <Flex
        justify="space-between"
        alignItems="center"
        backgroundColor="blue.200"
        px={2}
      >
        <Text fontSize="4xl" color="white">
          DeisHacks
        </Text>
        {!loading ? (
          user ? (
            <Button onClick={() => signOut(auth)}>Logout</Button>
          ) : (
            <Button onClick={() => navigate("/login")}>Login</Button>
          )
        ) : null}
      </Flex>
      <Outlet />
    </>
  );
};

export default Header;
