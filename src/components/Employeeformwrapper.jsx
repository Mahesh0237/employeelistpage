import { Button, Card, Checkbox, Grid, Group, NumberInput, Radio, Select, Text, TextInput } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import React, { useEffect, useState } from 'react'

function Employeeformwrapper({ employeeListdata, setEmployeeListdata, empid, editEmpdataModal, closeEmpModal }) {
    const [firstName, setFirstName] = useState('')
    const [firstNameError, setFirstNameError] = useState('')
    const updateFirstName = (e) => {
        setFirstName(e.currentTarget.value)
        setFirstNameError('')
    }
    const [middleName, setMiddleName] = useState('')
    const [middleNameError, setMiddleNameError] = useState('')
    const updateMiddleName = (e) => {
        setMiddleName(e.currentTarget.value)
        setMiddleNameError('')
    }
    const [lastName, setLastName] = useState('')
    const [lastNameError, setLastNameError] = useState('')
    const updateLastName = (e) => {
        setLastName(e.currentTarget.value)
    }
    const [gender, setGender] = useState('')
    const [genderError, setGenderError] = useState('')
    const updateGender = (value) => {
        setGender(value)
        setGenderError('')
    }
    const [phoneNumber, setPhoneNumber] = useState('')
    const [phoneNumberError, setPhoneNumberError] = useState('')
    const updatePhoneNumber = (value) => {
        setPhoneNumber(value)
        setPhoneNumberError('')
    }
    const [modeOfContact, setModeOfContact] = useState('')
    const [modeOfContactError, setModeOfContactError] = useState('')
    const updateModeofContact = (value) => {
        setModeOfContact(value)
        setModeOfContactError('')
    }
    const [marritalStatus, setMarritalStatus] = useState(null)
    const [marritalStatusError, setMarritalStatusError] = useState('')
    const updateMarritalStatus = (value) => {
        setMarritalStatus(value)
        setMarritalStatusError('')
    }
    const [immidiateJoiner, setImmidiateJoiner] = useState('')
    const [immidiatorJoinerError, setImmidiateJoinerError] = useState('')
    const updateImmidiateJoiner = (value) => {
        setImmidiateJoiner(value)
        setImmidiateJoinerError('')
    }

    let employeeData = {
        firstName,
        lastName,
        middleName,
        gender,
        phoneNumber,
        modeOfContact,
        marritalStatus,
        immidiateJoiner
    }

    const submitData = () => {
        if (firstName === '') {
            setFirstNameError('enter the first Name')
            return false
        }
        if (lastName === '') {
            setLastNameError('')
            return false
        }
        if (phoneNumber === '') {
            setPhoneNumberError('enter the phone number')
            return false
        }
        if (marritalStatus === null) {
            setMarritalStatusError('select the marrital Status')
            return false
        }
        if (gender === '') {
            setGenderError('select gender')
            return false
        }
        if (modeOfContact === '') {
            setModeOfContactError('select the mode of contact')
            return false
        }
        if (immidiateJoiner === '') {
            setImmidiateJoinerError('')
        }

        setEmployeeListdata([...employeeListdata, employeeData])
        notifications.show({
            title: 'Success',
            message: 'Employee data is added',
            color: "green"
        })
        setFirstName('')
        setLastName('')
        setMiddleName('')
        setGender('')
        setPhoneNumber('')
        setModeOfContact('')
        setMarritalStatus(null)
        setImmidiateJoiner('')

    }

    const updateEmployeeData = (empid) => {
        const updatedEmployeeList = [...employeeListdata]
        updatedEmployeeList[empid] = employeeData
        setEmployeeListdata(updatedEmployeeList)
        notifications.show({
            title: 'Success',
            message: 'Employee data is updated',
            color: "green"
        })
        closeEmpModal()
    }

    const clearEmployeeForm = () => {
        setFirstName('')
        setMiddleName('')
        setLastName('')
        setGender('')
        setPhoneNumber('')
        setModeOfContact('')
        setMarritalStatus(null)
        setImmidiateJoiner('')
    }

    useEffect(() => {
        if (empid !== null) {
            let updateData = employeeListdata[empid]
            if (updateData) {
                setFirstName(updateData.firstName);
                setMiddleName(updateData.middleName);
                setGender(updateData.gender);
                setLastName(updateData.lastName);
                setPhoneNumber(updateData.phoneNumber);
                setModeOfContact(updateData.modeOfContact);
                setMarritalStatus(updateData.marritalStatus);
                setImmidiateJoiner(updateData.immidiateJoiner);
            }
        }
    }, [empid, employeeListdata])

    return (
        <>
            <Card withBorder>
                <Card.Section withBorder inheritPadding py={15}>
                    <Text ta="center" fw={700} size='lg'>Employee Form</Text>
                </Card.Section>
                <Card.Section inheritPadding withBorder py={15}>
                    <Grid>
                        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                            <TextInput
                                placeholder='enter firstname'
                                label={<Text fw={600} span size="sm">First Name</Text>}
                                withAsterisk
                                value={firstName}
                                error={firstNameError}
                                onChange={updateFirstName}
                            />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                            <TextInput
                                placeholder='enter middlename'
                                label={<Text fw={600} span size="sm">Middle Name</Text>}
                                value={middleName}
                                error={middleNameError}
                                onChange={updateMiddleName}
                            />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                            <TextInput
                                placeholder='enter lastname'
                                label={<Text fw={600} span size="sm">Last Name</Text>}
                                withAsterisk
                                value={lastName}
                                error={lastNameError}
                                onChange={updateLastName}
                            />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                            <NumberInput
                                label={<Text fw={600} span size="sm">Phone Number</Text>}
                                placeholder="enter phone number"
                                withAsterisk
                                hideControls
                                value={phoneNumber}
                                error={phoneNumberError}
                                onChange={updatePhoneNumber}
                            />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                            <Select
                                label={<Text fw={600} span size="sm">Marrital Status</Text>}
                                placeholder="select one"
                                withAsterisk
                                data={['married', 'single', 'divorced', 'widowed']}
                                value={marritalStatus}
                                error={marritalStatusError}
                                onChange={updateMarritalStatus}
                            />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                            <Radio.Group
                                label={<Text fw={600} span size="sm">Gender</Text>}
                                withAsterisk
                                value={gender}
                                error={genderError}
                                onChange={updateGender}
                            >
                                <Group mt="xs">
                                    <Radio value="Male" label="Male" />
                                    <Radio value="Female" label="Female" />
                                    <Radio value="Others" label="Others" />
                                </Group>
                            </Radio.Group>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                            <Checkbox.Group
                                label={<Text fw={600} span size="sm">Mode of Contact</Text>}
                                withAsterisk
                                value={modeOfContact}
                                error={modeOfContactError}
                                onChange={updateModeofContact}
                            >
                                <Group mt="xs">
                                    <Checkbox value="Email" label="Email" />
                                    <Checkbox value="Phone" label="Phone" />
                                </Group>
                            </Checkbox.Group>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                            <Radio.Group
                                label={<Text fw={600} span size="sm">Immediate Joiner</Text>}
                                withAsterisk
                                value={immidiateJoiner}
                                error={immidiatorJoinerError}
                                onChange={updateImmidiateJoiner}
                            >
                                <Group mt="xs">
                                    <Radio value="Yes" label="Yes" />
                                    <Radio value="No" label="No" />
                                </Group>
                            </Radio.Group>
                        </Grid.Col>
                    </Grid>
                </Card.Section>
                <Card.Section withBorder inheritPadding py={15}>
                    <Group justify='space-between'>
                        <Button size='sm' variant='default' onClick={clearEmployeeForm}>Clear</Button>
                        {
                            editEmpdataModal ?
                                <Button size='sm' color='dark' onClick={() => { updateEmployeeData(empid) }}>
                                    update
                                </Button>
                                :

                                <Button size='sm' color='dark' onClick={submitData}>
                                    submit
                                </Button>
                        }
                    </Group>
                </Card.Section>
            </Card>
        </>
    )
}

export default Employeeformwrapper