import './app.css';
import { Component, Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import { Button, Carousel } from 'react-bootstrap';


// function Test({ name, link }) {
//     console.log(name);
//     console.log(link);
//     return (
//         <div className="container">
//             <h1>Helo my name is {name()}</h1>
//             <a href={link}>{link}</a>
//         </div>

//     );
// }



class Test222 extends Component {
    constructor(props) {
        super(props);
        //ANCHOR this.STATE - обязательно
        this.state = {
            width: 100,
            age: 32,
            text: '',
        }

        this.nextYear = this.nextYear.bind(this)
    }
    nextYear = () => {
        console.log('+++');
        this.setState({
            age: this.state.age + 1,
        })
    }

    prevYear = () => {
        this.setState(function (state) {
            //console.log(state);
            return { age: state.age - 1 };
        })
    }
    commitInputChanges = (e) => {
        this.setState({
            text: e.target.value,
        })
    }
    render() {
        const { text } = this.state;
        return (
            <div className="container">
                <div className="wrapper" >
                    <h1>{this.state.width}</h1>
                    <h1>{this.state.age}</h1>
                    <button onClick={this.nextYear}>++++</button>
                    <button onClick={this.prevYear}>----</button>

                    <form action="">
                        <span>Введите должность {text}</span>
                        <input type="text" onChange={this.commitInputChanges} />
                    </form>
                </div>
            </div >
        )
    }
}

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    name: "Sasha",
                    price: 100,
                    increase: false,
                    rise: true,
                    id: 1
                },
                {
                    name: "Tanya",
                    price: 222,
                    increase: false,
                    rise: false,
                    id: 2
                },
                {
                    name: "Vasya",
                    price: 13300,
                    increase: true,
                    rise: false,
                    id: 3
                },
                {
                    name: "Petya",
                    price: 255,
                    increase: false,
                    rise: false,
                    id: 4
                },

            ],
            term: '',
            filter: 'all',
        }
    }

    deleteItem = (id) => {
        //console.log(id);
        this.setState(({ data }) => {
            // const index = data.findIndex(elem => {
            //     return elem.id === id;
            // })

            return {
                data: data.filter((item) => {
                    //console.log(item);

                    return item.id !== id
                })
            }
        })
    }

    addEmployers = (newName, newSalary) => {
        // console.log(this.state.data);
        const uniqId = uuidv4();
        //  const newArr = [...data, newAddArr]; - Слияние массивов через REST оператор
        this.setState(({ data }) => {
            const newAddArr = data.slice();
            newAddArr.push({
                name: newName,
                price: newSalary,
                increase: false,
                rise: false,
                id: uniqId
            })
            return {
                data: newAddArr
            }
        })
        // console.log(this.state.data);

    }

    onToggleIncreaseOLD = (id) => {
        //console.log(`Increase this ${id}`);
        //LINK Первый способ решения
        // this.setState(({ data }) => {
        //     //NOTE получение индекса элемента с которым работаем(кликаем) прямо сейчас(THIS)
        //     const index = data.findIndex(elem => elem.id == id);

        //     const old = data[index];

        //     const newItem = { ...old, increase: !old.increase } //разворвчивает новый объект и меняем нужно свойство(приоритетнее) ;
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
        //     //console.log(newArr);
        //     return {
        //         data: newArr
        //     }
        // })
        //LINK Второй способ решения
        this.setState(({ data }) => {
            return {
                //NOTE map() создает новый массив и в не нарушает имутабельность(Неизменность обьекта)
                data: data.map(item => {
                    if (item.id === id) {
                        return { ...item, increase: !item.increase }
                    }
                    return item;
                })
            }
        })
    }
    onToggleRiseOLD = (id) => {
        console.log(`Rise this ${id}`);
        this.setState(({ data }) => {
            return {
                //NOTE map() создает новый массив и в не нарушает имутабельность(Неизменность обьекта)
                data: data.map(item => {
                    if (item.id === id) {
                        return { ...item, rise: !item.rise }
                    }
                    return item;
                })
            }
        })
    }
    onToggleProp = (id, prop) => {
        // console.log(prop);
        this.setState(({ data }) => {
            return {
                //NOTE map() создает новый массив и в не нарушает имутабельность(Неизменность обьекта)
                data: data.map(item => {
                    if (item.id === id) {
                        return { ...item, [prop]: !item[prop] }
                    }
                    return item;
                })
            }
        })
    }

    allCounter = () => {
        let countStateList = this.state.data.length;
        return countStateList;
    }
    riseCounter = () => {
        let riseCounter = this.state.data.filter(item => {
            if (item.increase !== false) {
                return item;
            }
        })
        return riseCounter.length
    }
    searchEmp = (itemsArr, term) => {
        if (term.length === 0) {
            return itemsArr;
        }

        return itemsArr.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    onUpdateSearch = (term) => {
        this.setState({
            term: term
        })
        console.log(term);
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => {
                    return item.rise
                });
            case 'more100':
                return items.filter(item => {
                    return item.price > 1000
                });

            default:
                return items;

        }
    }
    onFilterSelect = (filter) => {
        this.setState({
            filter: filter
        })
    }
    render() {
        const { data, term, filter } = this.state;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);
        return (
            <div className="app" >
                <Test222 />
                {/* <Test name={() => { return "TESTTT" }} link="Google.com" />
                <Test name={() => { return "TESTTT" }} link="Not-Google.com" /> */}
                <AppInfo
                    dataArr={data}
                    allCounter={this.allCounter}
                    riseCounter={this.riseCounter}
                />

                <div className="search-panel" >
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}

                    />
                    <AppFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>

                <EmployersList
                    dataArr={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                /* onToggleRise={this.onToggleRise} */
                />

                <div className="add_form">
                    <EmployersAddForm
                        onAdd={this.addEmployers} />
                </div>

            </div >
        )
    }

}

export default App;