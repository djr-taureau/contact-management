// Smart DataTable
export var settings = {
  columns: {
    id: {
      title: 'ID',
      filter: false,
    },
    name: {
      title: 'Full Name',
      filter: false,
    },
    username: {
      title: 'User Name',
      filter: false,
    },
    email: {
      title: 'Email',
      filter: false,
    }
  },
  attr: {
    class: "table table-responsive"
  },
  edit:{
    editButtonContent: '<i class="ft-edit-2 info font-medium-1 mr-2"></i>'
  },
  delete:{
    deleteButtonContent: '<i class="ft-x danger font-medium-1 mr-2"></i>'
  }
};

export var data = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
  },
  {
    id: 11,
    name: 'Nicholas DuBuque',
    username: 'Nicholas.Stanton',
    email: 'Rey.Padberg@rosamond.biz',
  },
];

export var filtersettings = {
  columns: {
    id: {
      title: 'ID',
    },
    name: {
      title: 'Full Name',
      filter: {
        type: 'list',
        config: {
          selectText: 'Select...',
          list: [
            { value: 'Glenna Reichert', title: 'Glenna Reichert' },
            { value: 'Kurtis Weissnat', title: 'Kurtis Weissnat' },
            { value: 'Chelsey Dietrich', title: 'Chelsey Dietrich' },
          ],
        },
      },
    },
    email: {
      title: 'Email',
    },
    passed: {
      title: 'Passed',
      filter: {
        type: 'checkbox',
        config: {
          true: 'Yes',
          false: 'No',
          resetText: 'clear',
        },
      },
    },
  },
  attr: {
    class: "table table-responsive"
  },
  edit:{
    editButtonContent: '<i class="ft-edit-2 info font-medium-1 mr-2"></i>'
  },
  delete:{
    deleteButtonContent: '<i class="ft-x danger font-medium-1 mr-2"></i>'
  }
};

export var filerdata = [
  {
    id: 4,
    name: 'Patricia Lebsack',
    email: 'Julianne.OConner@kory.org',
    passed: 'Yes',
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    email: 'Lucio_Hettinger@annie.ca',
    passed: 'No',
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    email: 'Karley_Dach@jasper.info',
    passed: 'Yes',
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    email: 'Telly.Hoeger@billy.biz',
    passed: 'No',
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    email: 'Sherwood@rosamond.me',
    passed: 'Yes',
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    email: 'Chaim_McDermott@dana.io',
    passed: 'No',
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    email: 'Rey.Padberg@karina.biz',
    passed: 'No',
  },
  {
    id: 11,
    name: 'Nicholas DuBuque',
    email: 'Rey.Padberg@rosamond.biz',
    passed: 'Yes',
  },
];

export var alertsettings = {
  delete: {
    confirmDelete: true,
    deleteButtonContent: '<i class="ft-x danger font-medium-1 mr-2"></i>'
  },
  add: {
    confirmCreate: true,
  },
  edit: {
    confirmSave: true,
    editButtonContent: '<i class="ft-edit-2 info font-medium-1 mr-2"></i>'
  },
  columns: {
    id: {
      title: 'ID',
    },
    name: {
      title: 'Full Name',
    },
    username: {
      title: 'User Name',
    },
    email: {
      title: 'Email',
    },
  },
  attr: {
    class: "table table-responsive"
  },
};

export var alertdata = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    notShownField: true,
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    notShownField: true,
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    notShownField: false,
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    notShownField: false,
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    notShownField: false,
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    notShownField: false,
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    notShownField: false,
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    notShownField: true,
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    notShownField: false,
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    notShownField: false,
  },
  {
    id: 11,
    name: 'Nicholas DuBuque',
    username: 'Nicholas.Stanton',
    email: 'Rey.Padberg@rosamond.biz',
    notShownField: true,
  }
];