import React, { useState } from 'react'
import Employeeformwrapper from '../components/Employeeformwrapper'
import Employeetabledata from '../components/Employeetabledata'
import { Container } from '@mantine/core'

function Employeelistpage() {
    const [employeeListdata, setEmployeeListdata] = useState([])
    
        // deleting the employee data
    const deleteEmployee = (index) => {
        const updatedEmployeeList = employeeListdata.filter((data, id) => {
            return index !== id
        })
        setEmployeeListdata(updatedEmployeeList);
    }

    return (
        <Container size={1200} py={50}>
            <Employeeformwrapper
                employeeListdata={employeeListdata}
                setEmployeeListdata={setEmployeeListdata}
            />
            <Employeetabledata
                employeeListdata={employeeListdata}
                deleteEmployee={deleteEmployee}
                setEmployeeListdata={setEmployeeListdata}
            />
        </Container>
    )
}

export default Employeelistpage