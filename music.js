class MusicPlayer {
    constructor() {
      this.button_music = document.getElementById('button-music');
      this.music = document.getElementById('music');
      this.checkbox_music = document.getElementById('chbx-music');
  
      // Устанавливаем обработчик события изменения состояния чекбокса
      this.checkbox_music.addEventListener('change', this.handleCheckboxChange.bind(this));
    this.music.volume = 0.1;
    }
  
    // Метод обработчика события изменения состояния чекбокса
    handleCheckboxChange() {
      // Если чекбокс выключен, устанавливаем уровень громкости в 0
      if (!this.checkbox_music.checked) {
        this.music.volume = 0.1;
        console.log("1");
      } else {
        // Если чекбокс включен, устанавливаем уровень громкости в 1 (или другое значение по вашему выбору)
        this.music.volume = 0.0;
        console.log("0");
      }
    }
  }
  
  // Создаем экземпляр класса MusicPlayer
  const musicPlayer = new MusicPlayer();
  
