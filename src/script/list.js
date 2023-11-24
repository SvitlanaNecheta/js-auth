//Завантаження даних- Відобразити статус Завантаження
// Відображення даних які ми завантажили (конвертацію даних)
//Якщо є помилка - виводимо статус помилки

export class List {
  STATE = {
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error',
  }

  status = null
  data = null
  element = null

  updateStatus = (status, data) => {
    this.status = status

    if (data) this.data = data
    this.updateView()
  }

  updateView = () => {}

  loadData = async () => {}
  convertData = () => {}
}
