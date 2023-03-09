import DepartmentItem from '../components/DepartmentItem'

function Department() {
    return (
        <main class="container">
            <h2 align="center"class="white-text">Отделы</h2>
            <div class="row">
                <DepartmentItem
                    name="Зоопарк"
                    title="Название говорит само за себя"
                />

                <DepartmentItem
                    name="Зоопарк"
                    title="Название говорит само за себя"
                />

                <DepartmentItem
                    name="Зоопарк"
                    title="Название говорит само за себя"
                />
            </div>
        </main>
    );
  }
  
export default Department;