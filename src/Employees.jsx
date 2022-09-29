import {useState} from 'react';
import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';

const Employees = () => {

    const [employees, setEmployees] = useState([
        {id: 1, name: 'John', age: 20, position: 'Developer', image: maleProfile},
        {id: 2, name: 'Sara', age: 22, position: 'Designer', image: femaleProfile},
        {id: 3, name: 'Bob', age: 24, position: 'The Boss', image: maleProfile},
        {id: 4, name: 'Peter', age: 26, position: 'Intern', image: maleProfile},
        {id: 5, name: 'Susan', age: 28, position: 'Accountant', image: femaleProfile},
        {id: 6, name: 'Anna', age: 30, position: 'CEO', image: femaleProfile},
        {id: 7, name: 'John', age: 20, position: 'Developer', image: maleProfile},
        {id: 8, name: 'Sara', age: 22, position: 'Designer', image: femaleProfile},
    ]);

    return(
        <main>
            <section className="container">
                <h2 className="mt-4 p5 bg-primary text-white rounded">Our Employees</h2>
                <div className="row">
                    {employees.map((employee) => {
                        const {id, name, age, position, image} = employee;
                        return(
                            <div className="col-md-4" key={id}>
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <h5 className="card-title">{name}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">{position}</h6>

                                        <p className="card-text">{age} years old</p>
                                    </div>
                                    <img src={image} className="card-img-bottom" alt="employee" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </main>
    )
}

export default Employees;