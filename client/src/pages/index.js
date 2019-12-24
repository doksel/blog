import React from "react";
import Link from "next/link";

import "./index.scss";

export default () => (
  <ul className="red">
    <li>
      <Link href="/a" as="/FirstPage">
        <a>first link</a>
      </Link>
    </li>
    <li>
      <Link href="/b" as="/SecondPage">
        <a>second link</a>
      </Link>
    </li>
  </ul>
);