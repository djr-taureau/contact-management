export const Steps = [
'Contact Type',
'Contact Basic Information',
'Contact Information',
'Contact Address Information',
'Contact Additional Information',
'Contact Review'
]

export type Step = string;

export const Forms =
   [
    { name: 'Contact Type', elements: ['contactType'] },
    { name: 'Contact Basic Information', elements: ['fullName', 'email'] },
    { name: 'Contact Information', elements: ['phoneType', 'phoneNumber'] },
    { name: 'Contact Address Information', elements: ['phoneType', 'phoneNumber'] },
    { name: 'Contact Address Information', elements: ['addressDescription', 'address1', 'address2','city', 'state', 'zipCode', 'country']},
    { name: 'Contact Additional Information', elements: ['birthday', 'company', 'jobTitle', 'notes']}
  ]


 export const  Elements = [
    { contactType: 'select'},
    { email: 'select'},
    { phoneType: 'radio'},
    { phoneNumber: 'text'},
    { addressDescription: 'text'},
    { address1: 'text'},
    { address2: 'text'},
    { city: 'text'},
    { state: 'text'},
    { zipcode: 'text'},
    { country: 'text'},
    { birthday: 'text'},
    { jobTitle: 'text'},
    { company: 'text'},
    { notes: 'text'}
  ]
