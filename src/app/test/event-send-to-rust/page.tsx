"use client"

import { emit } from '@tauri-apps/api/event';
import { MouseEvent } from "react";

export default function Page() {
  async function sendEventToRust(event: MouseEvent<HTMLButtonElement>) {
    const sendResult = await emit('frontend-loaded', { loggedIn: true, token: 'authToken...' });
    console.log('@sendResult', sendResult);
  }

  return (
    <>
      <button 
        className="inline-flex border border-blue-400 text-blue-500 hover:bg-gray-50 px-3 py-1"
        onClick={sendEventToRust}
        >
        rust 에 {`"fontended-loaded"`} event 보내기
      </button>
    </>
  );
}