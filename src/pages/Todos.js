import {
  Flex,
  IconButton,
  useBoolean,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Checkbox,
  Text,
} from "@chakra-ui/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "../config/firebase";
import {
  collection,
  setDoc,
  doc,
  deleteDoc,
  where,
  query,
} from "firebase/firestore";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import TodoForm from "../components/shared/TodoForm";

const Todos = () => {
  const [user] = useAuthState(auth);
  const [value, loading, error] = useCollection(
    query(collection(firestore, "todos"), where("userId", "==", user.uid))
  );

  return (
    <Flex direction="column">
      <TodoForm />
      {value && (
        <Table height="min-content">
          <Thead>
            <Tr backgroundColor="blue.700">
              <Th color="white">Text</Th>
              <Th color="white">Completed?</Th>
              <Th color="white">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {value.docs.map((todo, index) => {
              return (
                <Tr key={todo.id}>
                  <Td>
                    <Text as={todo.data().completed ? "s" : null}>
                      {todo.data().text}
                    </Text>
                  </Td>
                  <Td>
                    <Checkbox
                      onChange={async (event) => {
                        await setDoc(
                          doc(firestore, "todos", todo.id),
                          {
                            completed: event.target.checked,
                          },
                          {
                            merge: true,
                          }
                        );
                      }}
                      isChecked={todo.data().checked}
                    />
                  </Td>
                  <Td>
                    <IconButton
                      icon={<DeleteIcon />}
                      color="red"
                      onClick={async () => {
                        await deleteDoc(doc(firestore, "todos", todo.id));
                      }}
                    />
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      )}
    </Flex>
  );
};

export default Todos;
