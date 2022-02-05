import { useState } from "react";
import { Input, Button, Flex } from "@chakra-ui/react";
import { addDoc, collection } from "firebase/firestore";
import { firestore, auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const [user] = useAuthState(auth);
  return (
    <Flex direction={"column"} width="300px">
      <Input onChange={(event) => setTodo(event.target.value)} />
      <Button
        onClick={() =>
          addDoc(collection(firestore, "todos"), {
            text: todo,
            completed: false,
            userId: user.uid,
          })
        }
      >
        Create Todo
      </Button>
    </Flex>
  );
};

export default TodoForm;
