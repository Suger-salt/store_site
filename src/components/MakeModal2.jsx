import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

export function BasicUsage3({ routedishes2, setRouteDish2 }) {
  //propsはHTML属性を介してコンポーネントに渡される
  //子コンポーネントに表示する内容を定義
  //親コンポーネントにはstateを受け取って,それを全てのでやってくれ.

  // state は配列で　routedishが入っている　cはオブジェクト

  return (
    //c=料理のオブジェクト　routedishesは配列
    <div className="cardsall">
      {routedishes2.map((c, index) => (
        <ExtractionComponents
          s={routedishes2}
          c={c}
          key={index}
          setRouteDish2={setRouteDish2}
        />
      ))}
    </div>
  );
}

//  下のpropsにはnameやidが入っている.
export function ExtractionComponents({ s, c, setRouteDish2 }) {
  // 　routedishesはオブジェクト　つまり一個だけ選ばれている
  //   s配列
  //   iはオブジェクト
  // setRouteDishの引数は配列

  //state{おぶじゅえくと}今でいう{routedishes}をコピーしたい
  //コピーしたstateのストックを減らしたい
  //減らした後のコピーを既存の配列の指定場所に格納する.
  //ストックが減ったstatenのコピー(配列)をsetRouteDishで　大元のstateを更新したい

  //今sを引数にしてるけど,sにはペアになってくれたstate(配列)が呼び出される.
  //idやcopyを変数宣言してあげないとエラー拍
  function buy() {
    //  let id = routedishes.id;

    // if(routedishes.stock == 0){

    // } else {
    let copy = [...s];

    const index = copy.findIndex((element) => element.id === c.id);
    // copy[index].stock--;
    console.log(s);
    console.log(s[index].stock);
    console.log(copy[index].stock);

    if (0 < s[index].stock) {
      copy[index].stock--;
      console.log("購入");
      setRouteDish2(copy);
    } else {
      console.log("買えません");
    }

    //下のやつは全部新しい配列を作ってくれる
    //配列はイコールにしても参照する変数が増えるだけ
    // let copy = s.concat();  だと挙動がバグる
    //let copy = [...s];だと挙動がバグる.
    // let copy = s.slice();だと挙動がバグる.
    // s.push({});
    // s.pop();

    // }
    // setRouteDish(
    //     (s)=>{
    //             //配列はイコールにしても参照する変数が増えるだけ

    //             let copy = s.concat();
    //             copy[id].stock--;

    //         return copy;
    //     }

    // );
  }

  const newcomments = [
    { comment: [] },
    { comment: [] },
    { comment: [] },
    { comment: [] },
    { comment: [] },
    { comment: [] },
    { comment: [] },
    { comment: [] },
    { comment: [] },
    { comment: [] },
    { comment: [] },
    { comment: [] },
    { comment: [] },
  ];
  const [item, setItem] = useState(newcomments[c.id]);
  const [comtext, setCom] = useState("");

  function handleChange(event) {
    setCom(event.target.value);
  }

  function handleSubmit(event) {
    let copy = Object.assign({}, item);
    //comtext   comtextは入力ホームに動的に文字が入っているもの
    copy.comment.push(comtext);
    setItem(copy);
    event.preventDefault();
  }

  const comments = item.comment.map((c) => {
    return <div>{c}</div>;
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div onClick={onOpen} className="cards hover:scale-110">
        <img
          className="h-[15vw] w-[30vw] object-contain bg-[#000] hover:scale-110 transition hover:bg-[#fff]"
          src={"images2/" + c.id + ".jpg"}
        ></img>

        <div className="m-[1rem] toppage">
          <div className="flex ">
            <div className="mr-[2rem] whitespace-nowrap">商品名</div>
            {c.name}
          </div>

          <div className="flex ">
            <div className="mr-[3rem]">価格</div>
            {c.price}
          </div>
          <div className="flex ">
            <div className="mr-[2rem]">在庫数</div>
            {c.stock <= 0 ? "売り切れ" : c.stock}
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <img className="image" src={"/images2/" + c.id + ".jpg"} />{" "}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="bg-[#faccbc] ">
              <div className="m-[1rem] toppage text2">
                <div className="flex ">
                  <div className="mr-[2rem]">商品名</div>
                  {c.name}
                </div>
                <div className="flex ">
                  <div className="mr-[3rem] whitespace-nowrap">
                    <div>説明</div>
                  </div>
                  {c.desc}
                </div>
                <div className="flex ">
                  <div className="mr-[3rem]">価格</div>
                  {c.price}
                </div>
                <div className="flex ">
                  <div className="mr-[2rem]  ">在庫数</div>
                  {c.stock <= 0 ? "売り切れ" : c.stock}
                </div>
              </div>

              {/* jsxのコメント欄 */}
              <div className="w-full bg-[#faccbc]">
                皆様のコメント
                <div className="text2 m-[0.25rem]">{comments}</div>
              </div>

              <div className="bg-[#faccbc]">
                入力フォーム
                <form onSubmit={handleSubmit} className="">
                  <div className="">
                    <input
                      className="text2 w-full"
                      type="text"
                      value={comtext}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="bg-[#faccbc] w-full flex justify-center items-center">
                    <input
                      className="flex justify-center items-center bg-[#faccbc] hover:bg-[#fda78a]"
                      type="submit"
                      value="投稿"
                    />
                  </div>
                </form>
              </div>
            </div>

            {/* <p>stock: {c.stock <= 0 ? "売り切れ" : c.stock}</p> */}

            <button
              className="toppage text-[30px] hover:bg-[#e2b8a5]"
              onClick={() => {
                buy();
              }}
            >
              購入
            </button>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            {/* <Button variant="ghost">Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
