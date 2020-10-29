let initialData = [];

const projects = (state = initialData, action) => {
  switch (action.type) {
    case 'ADD':
      // console.warn(' add project');
      return [...state, action.data];
    case 'DELETE':
      return state.filter((item) => item.id !== action.id);
    case 'ADDTASK':
      return state.map((item, index) => {
        if(item.id === action.id) {
          return {
            ...item, tasks: [...item.tasks, action.x]
          }
        }
        return item;
      });
      
      
      
      //let algo = [...state.find((item) => item.id === action.id)]
      //console.log(algo);
      //const tareas = algo.tasks;
      //[...tareas, action.x];
      //return state;
      //[...algo.tasks, action.id]
      //let projectSpected = state.find((item) => item.id === action.id);
      //projectSpected.tasks.push(action.x);
      default:
        return state;
    }
  };
  
  export default projects;
    // return state.map(project => {
    //   if(project.id === action.id){
    //     return [...project.tasks, action.x]
    //   }
    //})
    // return projectSpected
    // return [...state.tasks, action.x];



// export default (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       return state.map(product => {
//         if (product.name === action.payload.name) {
//           return {...product, quantity: product.quantity - 1}};
//           console.log(state)return product;});
//           default: return state}}