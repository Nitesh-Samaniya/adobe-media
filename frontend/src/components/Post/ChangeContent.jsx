import { Text, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, ModalFooter, Button, useDisclosure, Textarea, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

function ChangeContent({post_id, allPosts}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [content, setContent] = useState("");
    const toast = useToast();

    const handleChangeContent = async(e)=>{
        e.preventDefault();
        if(content.length === 0){
            toast({
                title: 'Cannot post empty Content.',
                description: "Atlest write something",
                status: 'warning',
                duration: 3000,
                isClosable: true,
                position: "top",
            })
        }else{
            await axios({
                url: `https://adobemedia.onrender.com/posts/${post_id}`,
                method: "PUT",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json;charset=UTF-8"
                },
                data: {
                    content: content
                }
              })
                .then((res) => {
                    allPosts()
                    toast({
                      title: 'Content Change Sucessfully',
                      status: 'success',
                      duration: 3000,
                      isClosable: true,
                      position: "top",
                    })
                })
                .catch((e) => {
                    toast({
                      title: 'Something went worng try again.',
                      status: 'warning',
                      duration: 3000,
                      isClosable: true,
                      position: "top",
                    })
                });
        }
        setContent("");
    }
  
    return (
      <>
        <Text onClick={onOpen} fontFamily={'cursive'} fontWeight={'bold'} cursor={'pointer'} fontSize={'20px'} color={'blue'}>Change Content</Text>

  
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Change Content</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontWeight='bold' mb='1rem'>
                You can scroll the posts behind the modal also
              </Text>

              <Textarea 
                name='content'
                value={content}
                type={'text'}
                placeContent={'Your Content'}
                onChange={(e)=>setContent(e.target.value)}
            />
            <Button 
                display={'block'} 
                m={'auto'} mt={2} 
                colorScheme='teal'
                onClick={handleChangeContent}
            >Change</Button>

            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default ChangeContent;