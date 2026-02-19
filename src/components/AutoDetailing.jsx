import React from 'react'
import { Table } from '@contentful/f36-components';
import { Link } from 'react-router-dom'

function AutoDetailing() {
  // All this pages add Gallery
  const contentTypes = [
    {
      id: '1',
      name: 'Exterior Only',
      description:
        'Full deep clean of exterior, including tire cleaning/tire shine, wheel rim cleaning inside and outside, fender cleaning, condition outside black liner. Gas tank hinge',
      prices: 'Sedan $40, SUV $60, Truck $80',
    },
    {
      id: '2',
      name: 'Basic Package',
      description:
        'Full deep clean of exterior, including tire cleaning/tire shine, wheel rim cleaning inside and outside, fender cleaning, condition outside black liner. Gas tank hinge',
      prices: 'Sedan $55, SUV $75, Truck $95',
    },
    {
      id: '3',
      name: 'Premium Package',
      description:
        'A page consisting of freely configurable and rearrangeable content modules.',
      prices: 'Sedan $70, SUV $90, Truck $110',
    },
    {
      id: '4',
      name: 'Prestige Package',
      description:
        'Exterior and interior deep clean, including tire cleaning/tire shine, wheel rim cleaning inside and outside, fender cleaning, condition outside black liner. Gas tank hinge. Carpet extraction on seats and floor to restore color and smell . Vacuum and wipe down all areas inside car. Clean leather and condition. Clean floor mats and condition. Clean glass inside and outside. Clean door hinges',
      prices: 'Sedan $85, SUV $105, Truck $125',
    },
  ];
  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Auto Detailing Services</h1>
      <Table>
        <Table.Head >
          <Table.Row>
            <Table.Cell>Service</Table.Cell>
            <Table.Cell>Description</Table.Cell>
            <Table.Cell>Price</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {contentTypes.map((service) => (
            <Table.Row key={service.id}>
              <Table.Cell>{service.name}</Table.Cell>
              <Table.Cell>{service.description}</Table.Cell>
              <Table.Cell>{service.prices}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <div className='mt-8 '>
        <Link
          to="/contact-me"
        >
          <button className="block w-full text-center px-4 py-3 bg-green-600 text-white rounded font-semibold transition">
            Click here to book !
          </button>
        </Link>
      </div>
    </div>
  )
}

export default AutoDetailing