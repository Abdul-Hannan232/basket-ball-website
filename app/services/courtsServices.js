import axios from "axios";
// import Cookies from 'js-cookie';
export const allCourts = async (token, page, limit) =>{ 
    try {
      
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/court/all?page=${page}&limit=${limit}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
         
        return response;
    }
    catch (error) {
        console.log("all Courts",error.response)
        return error.response || { message: "An error occurred", error };
    }
    
}

export const addCourt = async (body,token) => {
   
    try {
         const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/court/add`,
            body,
            {
                headers: {
                    Authorization: `Bearer ${token}`,                },
            }
        );

        return response;
    } catch (error) {
        return error.response;
    }
};
 

export const deleteCourt = async (body,token) => {
    try {
 
        const response = await axios.delete(
            `${process.env.NEXT_PUBLIC_API_URL}/court/${body.id}}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return response;
    }
    catch (error) {
        return error.response || { message: "An error occurred", error };
    }

} 


/////////////////////

export const searchCourt = async (query) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/court/search`,
        query
      );
    return response.data;
  } catch (error) {
    return error.response || { message: "An error occurred", error };
  }
};



// export const searchCourt = async (query) => {
//     try {
//       const response = await axios.get(
//         `${process.env.NEXT_PUBLIC_API_URL}/court/search/${query}`);
//       return response;
//     } catch (error) {
//       return error.response || { message: "An error occurred", error };
//     }
//   };
  


  // export const filterCourts = async (order, courtType) => {
  //   try {
  //     const response = await axios.get(
  //        `${process.env.NEXT_PUBLIC_API_URL}/court/filter/query`,        {
  //         params: {
  //           order,
  //           courtType,
  //         },
  //       }
  //     );
  
  //     return response.data.courts;
  //   } catch (error) {
  //     console.error("Error fetching filtered courts:", error);
  //     throw error;
  //   }
  // };
  


  ///////////////////////////

  export const getCourtById = async (id) => {
    try {
      
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/court/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching court data');
    }
  };