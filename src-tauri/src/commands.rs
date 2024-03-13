#[tauri::command]
pub fn greet(name: &str, age: u32) -> String {
  println!("greet fn called!");
  println!("name is {:#?}", name);
  println!("age is {:#?}", age);

  format!("Hello, {}, {}!", name, age)
}