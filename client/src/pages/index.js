import React from "react";
import Link from "next/link";

import "./index.scss";

export default () => (
  <ul className="red">
    <li>
      <Link href="/FirstPage" as="/first-page">
        <a>first link</a>
      </Link>
    </li>
    <li>
      <Link href="/SecondPage" as="/second-page">
        <a>second link</a>
      </Link>
    </li>
  </ul>
);