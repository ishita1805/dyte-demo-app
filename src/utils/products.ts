const products = [
   {
      id: 1,
      img: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      title: 'Lorem ipsum dolor sit amet.',
      alternate_imgs: [
         'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
         'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80',
         'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80',
      ],
      cost: '₹ 498.00',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan ultricies elit, in laoreet tellus vestibulum sed. Nunc nec est semper, tincidunt arcu in, pellentesque ipsum. Nam maximus odio leo, ac feugiat urna gravida eget. Nulla egestas maximus lobortis. In rhoncus ipsum non cursus posuere. Vivamus ac volutpat dui, eget tempus nisl. Aliquam molestie nulla non condimentum fringilla. Quisque arcu nibh, dictum sed cursus quis, condimentum non sem. Nunc dictum quis enim vel convallis. Duis molestie volutpat blandit. Nullam nulla eros, pharetra vel commodo vitae, semper eget ex. Morbi eget varius odio. Vestibulum vestibulum massa nisl, sit amet condimentum nulla ullamcorper lobortis. Nunc tempor arcu eu volutpat venenatis. Vestibulum auctor congue neque at venenatis. Curabitur imperdiet vestibulum augue, nec vehicula ex dapibus id. Etiam euismod consequat nisi at mollis. Etiam interdum nibh neque, sed varius tortor tincidunt vel. Aenean semper a nibh nec interdum. Vivamus consequat turpis et neque tincidunt pretium. Integer eleifend porta odio, at congue augue sagittis vel.',
      rating: 4,
      short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dolor ex. Vivamus scelerisque convallis vehicula. Curabitur placerat sem quis metus egestas placerat ut consectetur ligula. Maecenas consequat leo diam, vel porta odio condimentum quis. Praesent risus felis, elementum nec mauris eget, laoreet iaculis ante. Mauris vehicula mattis lacus, vel blandit risus interdum nec. Nulla eget bibendum massa. Vestibulum lacinia sapien ante, id volutpat diam porttitor et. Aliquam non ex eget magna commodo auctor. Donec leo lorem, porta a turpis at, interdum rutrum felis.',
   },
   {
      id: 2,
      img: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
      title: 'Lorem ipsum dolor sit amet.',
      alternate_imgs: [
         'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
         'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80',
         'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80',
      ],
      cost: '₹ 498.00',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan ultricies elit, in laoreet tellus vestibulum sed. Nunc nec est semper, tincidunt arcu in, pellentesque ipsum. Nam maximus odio leo, ac feugiat urna gravida eget. Nulla egestas maximus lobortis. In rhoncus ipsum non cursus posuere. Vivamus ac volutpat dui, eget tempus nisl. Aliquam molestie nulla non condimentum fringilla. Quisque arcu nibh, dictum sed cursus quis, condimentum non sem. Nunc dictum quis enim vel convallis. Duis molestie volutpat blandit. Nullam nulla eros, pharetra vel commodo vitae, semper eget ex. Morbi eget varius odio. Vestibulum vestibulum massa nisl, sit amet condimentum nulla ullamcorper lobortis. Nunc tempor arcu eu volutpat venenatis. Vestibulum auctor congue neque at venenatis. Curabitur imperdiet vestibulum augue, nec vehicula ex dapibus id. Etiam euismod consequat nisi at mollis. Etiam interdum nibh neque, sed varius tortor tincidunt vel. Aenean semper a nibh nec interdum. Vivamus consequat turpis et neque tincidunt pretium. Integer eleifend porta odio, at congue augue sagittis vel.',
      rating: 4,
      short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dolor ex. Vivamus scelerisque convallis vehicula. Curabitur placerat sem quis metus egestas placerat ut consectetur ligula. Maecenas consequat leo diam, vel porta odio condimentum quis. Praesent risus felis, elementum nec mauris eget, laoreet iaculis ante. Mauris vehicula mattis lacus, vel blandit risus interdum nec. Nulla eget bibendum massa. Vestibulum lacinia sapien ante, id volutpat diam porttitor et. Aliquam non ex eget magna commodo auctor. Donec leo lorem, porta a turpis at, interdum rutrum felis.',
   },
   {
      id: 3,
      img: 'https://images.unsplash.com/photo-1564594326930-17381130fd2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
      title: 'Lorem ipsum dolor sit amet.',
      alternate_imgs: [
         'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
         'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80',
         'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80',
      ],
      cost: '₹ 498.00',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan ultricies elit, in laoreet tellus vestibulum sed. Nunc nec est semper, tincidunt arcu in, pellentesque ipsum. Nam maximus odio leo, ac feugiat urna gravida eget. Nulla egestas maximus lobortis. In rhoncus ipsum non cursus posuere. Vivamus ac volutpat dui, eget tempus nisl. Aliquam molestie nulla non condimentum fringilla. Quisque arcu nibh, dictum sed cursus quis, condimentum non sem. Nunc dictum quis enim vel convallis. Duis molestie volutpat blandit. Nullam nulla eros, pharetra vel commodo vitae, semper eget ex. Morbi eget varius odio. Vestibulum vestibulum massa nisl, sit amet condimentum nulla ullamcorper lobortis. Nunc tempor arcu eu volutpat venenatis. Vestibulum auctor congue neque at venenatis. Curabitur imperdiet vestibulum augue, nec vehicula ex dapibus id. Etiam euismod consequat nisi at mollis. Etiam interdum nibh neque, sed varius tortor tincidunt vel. Aenean semper a nibh nec interdum. Vivamus consequat turpis et neque tincidunt pretium. Integer eleifend porta odio, at congue augue sagittis vel.',
      rating: 4,
      short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dolor ex. Vivamus scelerisque convallis vehicula. Curabitur placerat sem quis metus egestas placerat ut consectetur ligula. Maecenas consequat leo diam, vel porta odio condimentum quis. Praesent risus felis, elementum nec mauris eget, laoreet iaculis ante. Mauris vehicula mattis lacus, vel blandit risus interdum nec. Nulla eget bibendum massa. Vestibulum lacinia sapien ante, id volutpat diam porttitor et. Aliquam non ex eget magna commodo auctor. Donec leo lorem, porta a turpis at, interdum rutrum felis.',
   },
   {
      id: 4,
      img: 'https://images.unsplash.com/photo-1532413992378-f169ac26fff0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      title: 'Lorem ipsum dolor sit amet.',
      alternate_imgs: [
         'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
         'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80',
         'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80',
      ],
      cost: '₹ 498.00',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan ultricies elit, in laoreet tellus vestibulum sed. Nunc nec est semper, tincidunt arcu in, pellentesque ipsum. Nam maximus odio leo, ac feugiat urna gravida eget. Nulla egestas maximus lobortis. In rhoncus ipsum non cursus posuere. Vivamus ac volutpat dui, eget tempus nisl. Aliquam molestie nulla non condimentum fringilla. Quisque arcu nibh, dictum sed cursus quis, condimentum non sem. Nunc dictum quis enim vel convallis. Duis molestie volutpat blandit. Nullam nulla eros, pharetra vel commodo vitae, semper eget ex. Morbi eget varius odio. Vestibulum vestibulum massa nisl, sit amet condimentum nulla ullamcorper lobortis. Nunc tempor arcu eu volutpat venenatis. Vestibulum auctor congue neque at venenatis. Curabitur imperdiet vestibulum augue, nec vehicula ex dapibus id. Etiam euismod consequat nisi at mollis. Etiam interdum nibh neque, sed varius tortor tincidunt vel. Aenean semper a nibh nec interdum. Vivamus consequat turpis et neque tincidunt pretium. Integer eleifend porta odio, at congue augue sagittis vel.',
      rating: 4,
      short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dolor ex. Vivamus scelerisque convallis vehicula. Curabitur placerat sem quis metus egestas placerat ut consectetur ligula. Maecenas consequat leo diam, vel porta odio condimentum quis. Praesent risus felis, elementum nec mauris eget, laoreet iaculis ante. Mauris vehicula mattis lacus, vel blandit risus interdum nec. Nulla eget bibendum massa. Vestibulum lacinia sapien ante, id volutpat diam porttitor et. Aliquam non ex eget magna commodo auctor. Donec leo lorem, porta a turpis at, interdum rutrum felis.',
   },
]

export default products;