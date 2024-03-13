"use client"

import { invoke } from '@tauri-apps/api/core';
import { UnlistenFn, listen } from '@tauri-apps/api/event';
import { useEffect, useRef, MouseEvent } from "react";

export default function Page() {
  const unListenerRef = useRef<UnlistenFn>();

  function callGreetFnInRust(event: MouseEvent<HTMLButtonElement>) {
    console.log('@callGreetFnInRust', event);
    invoke<string>('greet', { name: 'Next.js', age: 31 })
      .then(result => {
        // console.log('@result', result);
      })
      .catch(console.error)
    ;
  }

  useEffect(() => {
    listen<string>('db_connected', (event) => {
      console.log(`db_connected, payload: `, event.payload);
    }).then((v) => {
      unListenerRef.current = v;
    });

    return () => {
      const unListener = unListenerRef.current;
      if (unListener !== undefined) {
        unListener();
      }
    };  
  }, []);

  return (
    <>
      <div>
        rust 로 부터 {`"db_connected"`} 이벤트 수신 대기중..
      </div>
      <button 
        className="inline-flex border border-blue-400 text-blue-500 hover:bg-gray-50 px-3 py-1"
        onClick={callGreetFnInRust}
        >
        rust 에 정의된 greet 함수 호출하기
      </button>
    </>
  );
}