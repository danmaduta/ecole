import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 0ede93affc8f2447a850710790762f49d4b018e7295799aea77849b6d6c9c40b"
  }
});
