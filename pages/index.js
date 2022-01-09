import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [list, setList] = useState([]);

  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products/json?brand=maybelline";

  async function getData() {
    await axios.get(API_URL).then((res) => {
      console.log(res);
    });
  }

  useEffect(async () => {
    await getData();
  }, []);

  return (
    <div>
      <Head>
        <title>HOME</title>
      </Head>
      <h1>create-next-app</h1>
      <br />
      <b>1. 컴파일과 번들링이 자동으로 된다. webpack, babel</b>
      <br />
      <b>2. 핫리로드 기능이 지원됨</b>
      <br />
      <b>3. 서버사이드 렌더링이 지원됩</b>
      <br />
      <b>4. 스태틱 파일을 지원함(퍼블릭 아래를 사용하면 됨)</b>
      <br />
    </div>
  );
}
