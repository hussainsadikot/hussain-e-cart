// import React, {useEffect} from 'react';
// import {Link} from 'react-router-dom';
// import {useSelector, useDispatch} from 'react-redux';
// const Sidebar = () => {
//     const categories = useSelector(getAllCategories);
//     useEffect(() => {
//         dispatch(fetchAsyncCategories())
//       }, [dispatch])
//   return (
//     <div>
//        <div className='sidebar-cnt'>
//         <div className='cat-title fs-17 text-uppercase fw-6 ls-1h'>All Categories</div>
//         <ul className='cat-list'>
//           {
//             categories.map((category, idx) => {
//               return (
//                 <li key = {idx} onClick = {() => dispatch(setSidebarOff())}>
//                   <Link to = {`category/${category}`} className='cat-list-link text-capitalize'>{category.replace("-", " ")}</Link>
//                 </li>
//               )
//             })
//           }
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default Sidebar
