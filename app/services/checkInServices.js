import axios from "axios";

const checkInService = {
  // Fetch check-in status
  async getCheckInStatus(userId, courtId, token) {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/checkin/status/${userId}/${courtId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching check-in status", error);
      throw error;
    }
  },

  // Create a new check-in
  async createCheckIn(userId, courtId, token) {
    // console.log("AddCheckIn : ", {userId, courtId});
    
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/checkin/add`,
        {userId, courtId},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log("response : ", response);
      
      return response.data;
    } catch (error) {
      console.error("Error creating check-in", error);
      throw error;
    }
  },


  async getCheckinByCourt (id) {
    try {
      
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/checkin/checkins/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching court data');
    }
  },


//   async allCheckIns(token){ 
//     try {
      
//         const response = await axios.get(
//             `${process.env.NEXT_PUBLIC_API_URL}/checkins/all`,
//             {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             }
//         );
         
//         return response;
//     }
//     catch (error) {
//         console.log("all Courts",error.response)
//         return error.response || { message: "An error occurred", error };
//     }
    
// }


};

export default checkInService;
