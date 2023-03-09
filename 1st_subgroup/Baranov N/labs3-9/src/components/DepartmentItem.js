import image from "../images/worker.png"

function DepartmentItem(props) {
    return (
        <div class="col s4">
            <div class="card">
                <div class="card-image">
                    <img src={image} alt="Сотрудник"/>
                    <span class="card-title bold"><b>{props.name}</b></span>
                </div>
                <div class="card-content">
                    <p>{props.title}</p>
                </div>
            </div>
        </div>
    );
}
  
export default DepartmentItem;