import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { dishesdata } from "../goods";

export function BasicUsage1() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [dish, setDish] = useState(dishesdata);

  const list = dishesdata.map((c) => {
    return (
      <div className="cards">
        <img className="image" src={"images/" + c.id + ".jpg"}></img>
        <div>
          <p>id: {c.id}</p>
          <p>name: {c.name}</p>
          <p>decs: {c.desc}</p>
          <p>stock: {c.stock}</p>
        </div>
      </div> //name だけ取り出す
    );
  });

  return (
    <>
      <div className="cardsall" onClick={onOpen}>
        {/* <img src="images/4.png"></img>
              <div className='display'><p>id: {dish[0].id}</p> </div> */}
        {list}
      </div>

      {/*modalの中身は普段は見えなくて,cradsが触られたら(isOpenがtrue)modalが開く*/}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <img className="image" src="./images/0.png"></img>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
          <p>値段: </p>
          <p>コメントを入力する</p>

          <p>送信フォーム</p>
          <button> 購入　</button>
          <p>---------------------------text---------------------------</p>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">コメントを投稿</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
