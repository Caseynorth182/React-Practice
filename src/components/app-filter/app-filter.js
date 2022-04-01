import './app-filter.css'

const AppFilter = (props) => {
    const buttonsData = [
        { name: 'all', label: 'Все сотрудники', colored: false },
        { name: 'rise', label: 'Сотрудники на повышение', colored: false },
        { name: 'more100', label: 'З.П больше 1000$', colored: true },
    ]

    const buttonView = buttonsData.map(item => {
        const active = props.filter === item.name;
        const clazz = active ? 'btn-light' : 'btn-outline-light'
        return <button
            onClick={() => props.onFilterSelect(item.name)}
            style={item.colored ? { color: "red" } : null}
            type="button"
            key={item.name}
            data-name={item.name}
            className={`btn ${clazz}`}>
            {item.label}
        </button>
    })

    return (
        <div className="filter-container btn-group">

            {buttonView}
        </div>
    );
}

export default AppFilter;