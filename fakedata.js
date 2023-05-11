export let datalist = {
  default: [],
  TransferOnline: [
    {
      id: 0,
      matrixName: 'matrix-1',
      MinIDR: '0',
      MaxIDR: '50000',
      NoA: '1',
      Approver: [
        {
          ApproverId: 1,
          ApproverName: 'GroupMG1,GroupMG2',
        },
      ],
    },
    {
      id: 1,
      matrixName: 'matrix-2',
      MinIDR: '50000',
      MaxIDR: '100000',
      NoA: '2',
      Approver: [
        {
          ApproverId: 1,
          ApproverName: 'GroupMG1,GroupMG2',
        },
        {
          ApproverId: 2,
          ApproverName: 'GroupFI1,GroupFI2,GroupCross',
        },
      ],
    },
  ],
};

export const updateList = ({type, updateElement}) => {
  datalist[type].map(e => {
    e.id === updateElement.id
      ? {
          ...e,
          matrixName: updateElement.matrixName,
          MinIDR: updateElement.MinIDR,
          MaxIDR: updateElement.MaxIDR,
          NoA: updateElement.NoA,
        }
      : e;
  });

  console.log('success');
};

export const addNewelement = (type, element) => {
  console.log(element);
  datalist[type].push(element);

  console.log(datalist);
};
