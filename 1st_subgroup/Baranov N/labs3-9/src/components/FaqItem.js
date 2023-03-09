function FaqItem(props) {
    return (
        <div class="row">
            <div class="col s6 offset-s3">
            <div class="card blue-grey ligthen-5">
                <div class="card-content">
                    <span class="card-title blue-text text-darken-4">{props.title}</span>
                    <p class="orange-text">{props.text}</p>
                </div>
            </div>
            </div>
        </div>
    );
}
  
export default FaqItem;