    // import React, { useEffect, useState } from 'react';
// import View from '../View';

// const Viewfetch = () => {
//   const [views, setViews] = useState(null);

//   useEffect(() => {
//     dataFetch();
//   }, []);

//   const dataFetch = async () => {
//     try {
//       const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//       const data = await response.json();
//       console.log(data);
//       setViews(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   return (
//     <div className="fi-lter flex">
//       <div className="data-btn">
//         <View addData={views} />
//       </div>
//     </div>
//   );
// }

// export default Viewfetch;
