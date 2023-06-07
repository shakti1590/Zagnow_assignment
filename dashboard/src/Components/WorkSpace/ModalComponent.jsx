import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Box,
  Image,
  Button,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";

function ModalComponent({
  isOpen,
  onClose,
  onOpen,
  existing_title,
  id,
  handleChange,
}) {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setTitle(existing_title);
  }, []);

  const handleEdit = (id) => {
    setLoad(true);
    fetch(`https://zagnow-server.onrender.com/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers as needed
      },
      body: JSON.stringify({ title }),
    }).then((res) => {
      onClose();
      setLoad(false);
      //   console.log(res);
    });

    handleChange(title);
  };
  return (
    <>
      <Box
        border={"1px solid re"}
        onClick={onOpen}
        display={"flex"}
        justifyContent={"center"}
      >
        <Image src="edit_icon.png" />
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <Text>Name</Text>
              <Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </form>
          </ModalBody>

          <ModalFooter>
            <Button
              isLoading={load}
              colorScheme="blue"
              mr={3}
              onClick={() => handleEdit(id)}
            >
              Edit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalComponent;
