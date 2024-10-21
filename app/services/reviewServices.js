import axios from "axios";

const reviewService = {
  async addReview(body, token) {
    // console.log("addReview : ", body);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/reviews/add`,
        // {userId, courtId, ratings},
        body,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      //   console.log("response>>>>>>>>>>>>>>>  : ", response);

      return response.data;
    } catch (error) {
      console.error("Error creating reviews", error);
      throw error;
    }
  },

  async getReviewsByCourt(id, currentPage, limit) {
    try {
      const response = await axios.get(
        // `${process.env.NEXT_PUBLIC_API_URL}/reviews/court/${id}`
        `${process.env.NEXT_PUBLIC_API_URL}/reviews/court/${id}?page=${currentPage}&limit=${limit}`
      );
      return response.data;
    } catch (error) {
      throw new Error("Error fetching court data");
    }
  },
};

export default reviewService;
