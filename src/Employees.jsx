import {useState} from 'react';

const Employees = () => {

    const [employees, setEmployees] = useState([
        {id: 1, name: 'John', age: 20, position: 'Developer'},
        {id: 2, name: 'Sara', age: 22, position: 'Designer'},
        {id: 3, name: 'Bob', age: 24, position: 'The Boss'},
        {id: 4, name: 'Peter', age: 26, position: 'Intern'},
        {id: 5, name: 'Susan', age: 28, position: 'Accountant'},
        {id: 6, name: 'Anna', age: 30, position: 'CEO'},
        {id: 7, name: 'John', age: 20, position: 'Developer'},
        {id: 8, name: 'Sara', age: 22, position: 'Designer'}
    ]);

    return(
        <main>
            <section className="container">
                <h2 className="mt-4 p5 bg-primary text-white rounded">Our Employees</h2>
                <div className="row">
                    {employees.map((employee) => {
                        const {id, name, age, position} = employee;
                        return(
                            <div className="col-md-4" key={id}>
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <h5 className="card-title">{name}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">{position}</h6>

                                        <p className="card-text">{age} years old</p>
                                    </div>
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