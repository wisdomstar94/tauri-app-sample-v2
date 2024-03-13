use serde::Serialize;
use tauri::Manager;

#[derive(Serialize, Clone)]
struct MyData {
  name: String,
  age: u32,
}

#[tauri::command]
pub fn greet(app: tauri::AppHandle, name: &str, age: u32) -> String {
  println!("greet fn called!");
  
  // frontend 에 이벤트 보내기
  // emits the synchronized event to all windows
  app.emit("db_connected", MyData { name: String::from("하이요"), age: 36 }).unwrap();
  // app.emit_to("updater", "download-progress", 35).unwrap();

  println!("name is {:#?}", name);
  println!("age is {:#?}", age);

  format!("Hello, {}, {}!", name, age)
}