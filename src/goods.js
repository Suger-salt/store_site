import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
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

//本番用データです
export const dishesdata = [
  {
    id: 0,
    name: "チャイのプリン",
    desc: "スパイシーな香りをお楽しみいただけます",
    img: "0.jpg",
    price: 500,
    stock: 10,
    comment: [],
  },
  {
    id: 1,
    name: "レモネードとピーチアイス",
    desc: "甘さ控え目のレモネードです.お好みでシロップをどうぞ",
    img: "1.jpg",
    price: 600,
    stock: 20,
    comment: [],
  },
  {
    id: 2,
    name: "ラムネアイス",
    desc: "実際にラムネがトッピングされています",
    img: "2.jpg",
    price: 700,
    stock: 30,
    comment: [],
  },
  {
    id: 3,
    name: "ダブルアイス",
    desc: "能登ミルクを使ったあまーいアイスです",
    img: "3.jpg",
    price: 800,
    stock: 40,
    comment: [],
  },
  {
    id: 4,
    name: "チョコぱっふぇ",
    desc: "最下層に,コーヒーゼリーが隠れています.",
    img: "4.jpg",
    price: 900,
    stock: 50,
    comment: [],
  },
  {
    id: 5,
    name: "チョコアイス",
    desc: "チョコレートアイスにアクセントとしてアーモンドがちりばめられています.",
    img: "5.jpg",
    price: 500,
    stock: 10,
    comment: [],
  },
  {
    id: 6,
    name: "紅茶プリン",
    desc: "茶葉にはアッサムを使用していて,芳醇な香りを楽しめます",
    img: "6.jpg",
    price: 600,
    stock: 20,
    comment: [],
  },
  {
    id: 7,
    name: "カラメルソースのスフレパンケーキ",
    desc: "パリっと焦がしたソースにフワフワのパンケーキが楽しめます.",
    img: "7.jpg",
    price: 700,
    stock: 30,
    comment: [],
  },
  {
    id: 8,
    name: "レモンティー",
    desc: "ストレートティーにレモンを添えています.",
    img: "8.jpg",
    price: 300,
    stock: 20,
    comment: [],
  },
  {
    id: 9,
    name: "ウーロン茶",
    desc: "香りがよく,後味がすっきりしています.",
    img: "9.jpg",
    price: 200,
    stock: 10,
    comment: [],
  },
  {
    id: 10,
    name: "ダージリン",
    desc: "ファーストフラッシュを使用しています.程よい香りとすっきりとした喉ごしです.",
    img: "10.jpg",
    price: 600,
    stock: 15,
    comment: [],
  },
  {
    id: 11,
    name: "日替わりティー",
    desc: "ウーロン茶,レモンティー,ダージリンから店長がランダムに選んだ物を提供します.",
    img: "11.jpg",
    price: 550,
    stock: 50,
    comment: [],
  },
  {
    id: 12,
    name: "昆虫のお菓子",
    desc: "遊び心満載の幼虫のお菓子です土にはクッキーを使用しています.",
    img: "12.jpg",
    price: 900,
    stock: 25,
    comment: [],
  },
];

//追加の本番データです.
export const dishesdata2 = [
  {
    id: 0,
    name: "本格イタリアンナポリタン",
    desc: "日本でいただくナポリタンとは違って,ソースがさらさらしています.",
    img: "0.jpg",
    price: 500,
    stock: 10,
    comment: [],
  },
  {
    id: 1,
    name: "たらこパスタ",
    desc: "たらこと海苔をふんだんに使用したパスタです.",
    img: "1.jpg",
    price: 600,
    stock: 15,
    comment: [],
  },
  {
    id: 2,
    name: "和風ベーコンパスタ",
    desc: "肉厚なベーコンと香りが食欲をそそります.",
    img: "2.jpg",
    price: 500,
    stock: 30,
    comment: [],
  },
  {
    id: 3,
    name: "ナポリタン",
    desc: "日本でナンポリタンといったら,これ!",
    img: "3.jpg",
    price: 550,
    stock: 10,
    comment: [],
  },
  {
    id: 4,
    name: "クリーム海鮮パスタ",
    desc: "おっきなカニと貝柱をクリームと一緒にどうぞ",
    img: "4.jpg",
    price: 650,
    stock: 5,
    comment: [],
  },
  {
    id: 5,
    name: "エビのクリームソースオムライス",
    desc: "たくさんのエビが盛り付けられ,ライスにバターを使用しています.",
    img: "5.jpg",
    price: 550,
    stock: 20,
    comment: [],
  },
  {
    id: 6,
    name: "バジルソースオムライス",
    desc: "一風変わったバジルソースオムライス.香りを楽しみながら味わってみてください",
    img: "6.jpg",
    price: 850,
    stock: 15,
    comment: [],
  },
];

// function handleSubmit(event) {
//   let copy = Object.assign({}, item);
//   copy.comment.push(comtext);
//   setItem(copy);
//   event.preventDefault();
// }

// const comments = item.comment.map((c) => {
//   return <p>{c}</p>;
// });

//仮にdetails2の飛び先を2つ作ってみる

// export function BasicUsage() {
//     const { isOpen, onOpen, onClose } = useDisclosure()
//     return (
//       <>
//         <Button onClick={onOpen}>Open Modal</Button>

//         <Modal isOpen={isOpen} onClose={onClose}>
//           <ModalOverlay />
//           <ModalContent>
//             <ModalHeader>Modal Title</ModalHeader>
//             <ModalCloseButton />
//             <ModalBody>
//                 jjj
//             </ModalBody>

//             <ModalFooter>
//               <Button colorScheme='blue' mr={3} onClick={onClose}>
//                 Close
//               </Button>
//               <Button variant='ghost'>Secondary Action</Button>
//             </ModalFooter>
//           </ModalContent>
//         </Modal>
//       </>
//     )
//   }
