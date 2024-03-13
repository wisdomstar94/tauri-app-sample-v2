#[tauri::command]
pub fn greet(name: &str, age: u32) {
  println!("greet fn called!");
  println!("name is {:#?}", name);
  println!("age is {:#?}", age);
}