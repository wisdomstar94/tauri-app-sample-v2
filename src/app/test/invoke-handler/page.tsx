"use client"

import { invoke } from "@tauri-apps/api/core";
import { MouseEvent } from "react";

export default function Page() {
  function callGreetFnInRust(event: MouseEvent<HTMLButtonElement>) {
    console.log('@callGreetFnInRust', event);
    invoke<string>('greet', { name: 'Next.js', age: 31 })
      .then(result => {
        console.log('@result', result);
      })
      .catch(console.error)
    ;
  }

  return (
    <>
      <button 
        className="inline-flex border border-blue-400 text-blue-500 hover:bg-gray-50 px-3 py-1"
        onClick={callGreetFnInRust}
        >
        rust 에 정의된 greet 함수 호출하기
      </button>
    </>
  );
}