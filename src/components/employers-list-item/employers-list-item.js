import './employers-list-item.css';





const EmployersListItem = function ({ name, price, rise, increase, onDelete, onToggleProp }) {
    // ()




    let itemClass = 'list-group-item d-flex justify-content-between';
    if (increase === true) {
        itemClass = 'list-group-item d-flex justify-content-between increase';
    }

    if (rise) {
        itemClass += ' like';
    }

    return (
        <li className={itemClass}>
            <span
                data-toggle="rise"
                onClick={onToggleProp}
                style={{
                    fontSize: '25px',
                }}
                className="list-group-item-label">{name}</span>
            <input
                type="text"
                className="list-group-item-input"
                defaultValue={price + '$'}
            />
            <div className="d-flex justify-content-center alight-items-center">
                <button
                    data-toggle="increase"
                    onClick={onToggleProp}
                    type="button"
                    className="btn-cookie btn-sm">
                    <i className="fas fa-cookie"></i>
                </button>
                <button
                    onClick={onDelete}
                    type="button"
                    className="btn-trash btn-sm">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );

}



export default EmployersListItem;