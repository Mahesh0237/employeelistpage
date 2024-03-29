import { Alert, Button, Group, Modal, Table, Text, Tooltip } from '@mantine/core'
import React, { useState } from 'react'
import { IconEdit, IconTrash } from '@tabler/icons-react';
import Employeeformwrapper from './Employeeformwrapper';
import { openConfirmModal } from '@mantine/modals';
import { notifications } from '@mantine/notifications';

function Employeetabledata({ employeeListdata, setEmployeeListdata, deleteEmployee }) {
    const [empid, setEmpid] = useState(null)
    const [editEmpdataModal, setEditEmpdataModal] = useState(false)
    const openEmpModal = (value) => {
        setEmpid(value)
        setEditEmpdataModal(true)
    }
    const closeEmpModal = () => {
        setEditEmpdataModal(false)
    }

    const deletEempdata = (index) => {
        openConfirmModal({
            title: 'Please confirm your action',
            children: (
                <Text size="sm">
                    Are you sure you want to delete the data?
                </Text>
            ),
            labels: { confirm: 'Yes', cancel: 'Cancel' },
            centered: true,
            onCancel: () => console.log('Cancel'),
            onConfirm: () => {
                deleteEmployee(index)
                notifications.show({
                    title: 'Success',
                    message: 'Employee data is deleted',
                    color: "red"
                })
            },
        });
    }

    return (
        <>
            <Text size='lg' fw={700} ta="center" mt={50} mb={20} c="#3d22e6">Employees Data</Text>
            {
                employeeListdata.length !== 0 ?
                    <Table.ScrollContainer minWidth={500} >
                        <Table highlightOnHover withTableBorder withColumnBorders>
                            <Table.Thead>
                                <Table.Tr>
                                    <Table.Th>First Name</Table.Th>
                                    <Table.Th>Middle Name</Table.Th>
                                    <Table.Th>Last Name</Table.Th>
                                    <Table.Th>Gender</Table.Th>
                                    <Table.Th>Phone Number</Table.Th>
                                    <Table.Th>Mode of Contact</Table.Th>
                                    <Table.Th>Marrital Status</Table.Th>
                                    <Table.Th>Immediate Joiner</Table.Th>
                                    <Table.Th>Edit/delete</Table.Th>
                                </Table.Tr>
                            </Table.Thead>
                            <Table.Tbody>
                                {
                                    employeeListdata.length !== 0 &&
                                    employeeListdata.map((empdata, index) => (
                                        <Table.Tr key={index}>
                                            <Table.Td>{empdata.firstName ? empdata.firstName : <Text>--</Text>}</Table.Td>
                                            <Table.Td>{empdata.middleName ? empdata.middleName : <Text>--</Text>}</Table.Td>
                                            <Table.Td>{empdata.lastName ? empdata.lastName : <Text>--</Text>}</Table.Td>
                                            <Table.Td>{empdata.gender ? empdata.gender : <Text>--</Text>}</Table.Td>
                                            <Table.Td> {empdata.phoneNumber ? `+91 ${empdata.phoneNumber}` : <Text>--</Text>}</Table.Td>
                                            <Table.Td>{empdata.modeOfContact ? empdata.modeOfContact : <Text>--</Text>}</Table.Td>
                                            <Table.Td>{empdata.marritalStatus ? empdata.marritalStatus : <Text>--</Text>}</Table.Td>
                                            <Table.Td>{empdata.immidiateJoiner ? empdata.immidiateJoiner : <Text>--</Text>}</Table.Td>
                                            <Table.Td>
                                                <Group grow>
                                                    <Tooltip
                                                        label="edit"
                                                        withArrow
                                                        arrowPosition="center"
                                                    >
                                                        <Button
                                                            variant='light'
                                                            size='xs'
                                                            radius="50%"
                                                            pl={7} pr={7}
                                                            onClick={() => { openEmpModal(index) }}
                                                        >
                                                            <IconEdit size={15} />
                                                        </Button>
                                                    </Tooltip>
                                                    <Tooltip
                                                        label="delete"
                                                        withArrow
                                                        position="top-end"
                                                    >
                                                        <Button
                                                            variant='light'
                                                            size='xs'
                                                            radius="50%"
                                                            color='red'
                                                            pl={7} pr={7}
                                                            onClick={() => { deletEempdata(index) }}
                                                        >
                                                            <IconTrash size={15} />
                                                        </Button>
                                                    </Tooltip>
                                                </Group>
                                            </Table.Td>
                                        </Table.Tr>
                                    ))
                                }
                            </Table.Tbody>
                        </Table>
                    </Table.ScrollContainer>
                    :
                    <Alert>
                        <Text fw={700}>No data</Text>
                    </Alert>
            }

            {/* employee edit modal */}
            <Modal
                opened={editEmpdataModal}
                onClose={closeEmpModal}
                size={600}
            >
                <Employeeformwrapper
                    empid={empid}
                    editEmpdataModal={editEmpdataModal}
                    employeeListdata={employeeListdata}
                    setEmployeeListdata={setEmployeeListdata}
                    closeEmpModal={closeEmpModal}
                />
            </Modal>
        </>
    )
}

export default Employeetabledata