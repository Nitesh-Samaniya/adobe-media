import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { IoMdAnalytics } from "react-icons/io";
import Count from "./Count";
// import TopLikePost from "./TopLikePost";

function Analytics() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} onClick={onOpen}>
            <IoMdAnalytics size={30}/>
        </Button>
        
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          size={'md'}
        >
          <DrawerOverlay />
          <DrawerContent height="30%  !important">
            <DrawerCloseButton />
            <DrawerHeader>Analytics</DrawerHeader>
  
            <DrawerBody>
                <Count />
                {/* <TopLikePost /> */}
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default Analytics;