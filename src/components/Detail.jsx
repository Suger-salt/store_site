import { useState } from "react";
import { useParams } from "react-router-dom";
import {dishesdata} from "../goods";
import {Link} from "react-router-dom";

export function Detail(props) {
    
    // URL parameter の受け取り
    const params = useParams();  
    const id = params.id;

    const [item, setItem] = useState(dishesdata[id]);
    //ここでやっと変数名itemのstateを定義している　mockdataを変更するだけではいけない
    //初期値にはmockdateの0がひっている

    const [comtext, setCom] = useState('');

    function handleChange(event){
        setCom(event.target.value);
    }

    function handleSubmit(event) {
        let copy = Object.assign({}, item);       
        copy.comment.push(comtext);
        setItem(copy);
        event.preventDefault();
    }

    const comments = item.comment.map((c)=>{
        return(<p>{c}</p>)
    })

    return (
        <div>
            <h1>詳細ページです</h1>
            <p>犬のid: {item.id}</p>
            <p>犬の名前: {item.name}</p>
            <p>犬の説明: {item.sum}</p>
            <p>犬の詳細な説明: {item.desc}</p>
            <p>犬の画像</p>
            <img src={item.img} />
            <p>{comments}</p>

            <form onSubmit={handleSubmit}>
                <label>コメント
                    <input type="text" value={comtext} onChange={handleChange} />
                </label>
                <input type="submit" value="投稿" />
            </form>
            <Link to="/">もどる</Link>
        </div>
    );
    
}