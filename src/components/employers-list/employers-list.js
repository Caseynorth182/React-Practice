import "./employers-list.css"
import EmployersListItem from "../employers-list-item/employers-list-item"

const EmployersList = ({ dataArr, onDelete, onToggleProp }) => {
    //LINK .MAP()
    const elements = dataArr.map((item, i) => {
        //ANCHOR Реструкторизация по остаточному значению
        const { id, ...itemProps } = item;
        // console.log(onToggleIncrease);
        return (
            // <EmployersListItem item_id={i + 1} name={item.name} price={item.price} />
            <EmployersListItem
                onDelete={() => onDelete(id)}
                key={id}
                onToggleProp={(e) => { onToggleProp(id, e.currentTarget.getAttribute('data-toggle')) }}

                {...itemProps}
            />
        )
    })
    //LINK ForEach
    // let elem2 = [];
    // dataArr.forEach(element => {
    //     elem2.push(<EmployersListItem name={element.name} price={element.price} />)
    // });


    return (
        <ul className="app-list list-group">
            {/* Почему рендерит массив элементов??????????? */}
            {elements}
        </ul>
    )
}

export default EmployersList;