import FaqItem from '../components/FaqItem'

function Faq() {
    return (
        <main class="container">
            <h2 align="center" class="white-text">FAQ</h2>
            <FaqItem
                title="Кто мы такие?"
                text="Нас нет, это твоя шиза"
            />

            <FaqItem
                title="Что мы делаем?"
                text="Что-то нужно делать?"
            />

            <FaqItem
                title="Ваши плюсы от работы с нами?"
                text="Никакие"
            />
        </main>
    );
  }
  
export default Faq;