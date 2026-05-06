import { Button, Table } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const UserDetail = ({p}) => {
    return (
        <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" className="min-w-[600px]">
          <Table.Header>
            <Table.Column isRowHeader>Name</Table.Column>
            <Table.Column>Email</Table.Column>
            <Table.Column>Role</Table.Column>
            <Table.Column>Actions</Table.Column>
          </Table.Header>
          <Table.Body>
            <div>
                {
                    p.map(v => <Table.Row key={v._id}>
              <Table.Cell>{v.name}</Table.Cell>
              <Table.Cell>{v.email}</Table.Cell>
              <Table.Cell>{v.role}</Table.Cell>
              <Table.Cell>
                        <Link href={`/user/${v._id}`}><Button variant='outline'>Details</Button></Link>
                        <Link href={`/user/${v._id}`}><Button variant='outline'>Edit</Button></Link>
                        <Button variant='danger'>Delete</Button>
              </Table.Cell>
            </Table.Row>)
                }
            </div>
            
            
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
)};


export default UserDetail;