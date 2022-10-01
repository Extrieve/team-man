import {useState} from 'react';
import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';

const Employees = () => {

    const [selectedTeam, setTeam] = useState('TeamB');

    const [employees, setEmployees] = useState([
        {id: 1, name: 'John', age: 20, position: 'Developer', image: maleProfile, teamName: 'TeamA'},
        {id: 2, name: 'Sara', age: 22, position: 'Designer', image: femaleProfile, teamName: 'TeamA'},
        {id: 3, name: 'Bob', age: 24, position: 'The Boss', image: maleProfile, teamName: 'TeamB'},
        {id: 4, name: 'Peter', age: 26, position: 'Intern', image: maleProfile, teamName: 'TeamB'},
        {id: 5, name: 'Susan', age: 28, position: 'Accountant', image: femaleProfile, teamName: 'TeamC'},
        {id: 6, name: 'Anna', age: 30, position: 'CEO', image: femaleProfile, teamName: 'TeamC'},
        {id: 7, name: 'John', age: 20, position: 'Developer', image: maleProfile, teamName: 'TeamD'},
        {id: 8, name: 'Sara', age: 22, position: 'Designer', image: femaleProfile, teamName: 'TeamD'},
    ]);

    function handleTeamSelectionChange(event) {
        console.log(event.target.value);
        setTeam(event.target.value);
    }

    function handleEmployeeCardClick(event) {
        console.log(event.target.id);
        const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id) ?
         (employee.teamName === selectedTeam) ? {...employee, teamName: ''} : {...employee, teamName: selectedTeam} : employee);

        setEmployees(transformedEmployees);
    }

    return(
        <main>
            <section className="container">
                <h2 className="mt-4 p5 bg-primary text-white rounded">Our Employees</h2>
                <div className="row justify-content-center mt-3 mb-3">
                    <div className="col-6">
                        <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
                            <option value="TeamA">TeamA</option>
                            <option value="TeamB">TeamB</option>
                            <option value="TeamC">TeamC</option>
                            <option value="TeamD">TeamD</option>
                        </select>
                    </div>
                </div>
                <div className="row justify-content-center mt-3 mb-3">
                    <div className="col-8">
                        <div className="card-collection">
                            {employees.map((employee) => (
                                <div className={(employee.teamName === selectedTeam ? 'card m-2 standout': 'card m-2')}
                                 key={employee.id} id={employee.id} onClick={handleEmployeeCardClick} style={{cursor: "pointer"}}>
                                    <img src={employee.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{employee.name}</h5>
                                        <p className="card-text">{employee.position}</p>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
            </section>
        </main>
    )
}

export default Employees;