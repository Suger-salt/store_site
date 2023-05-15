import { dishesdata } from "../goods";
import {Link} from "react-router-dom";

export function GoodsList(props) {
   
    const list = dishesdata.map(
        (c) => {
            return (
                <div>
                    <Link to={'/detail/' + c.id}>
                        <p>{c.name}</p>
                        <p>{c.sum}</p>
                    </Link>
                </div>      //name だけ取り出す　　
            )
        }
    );

    return (
        <div>
            <div>{list}</div>
        </div>
    )
}

// データは関数定義の外側!! これはstate代わりかな