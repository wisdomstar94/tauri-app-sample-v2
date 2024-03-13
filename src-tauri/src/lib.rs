use commands::greet;
pub mod commands;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  // let my_app: Rc<Mutex<Option<&mut App>>> = Rc::new(Mutex::new(None));
  // let my_app: Mutex<Rc<Option<&mut App>>> = Mutex::new(Rc::new(None));

  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![greet])
    .setup(|app| {
      // let k = my_app;
      // *my_app.borrow_mut() = Some(app);
      app.listen("frontend-loaded", |event| {
        let payload = event.payload();
        println!("frontend-loaded!! payload is {:#?}", payload);
      });
      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
