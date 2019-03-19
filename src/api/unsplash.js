import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID aec8e0c492f223c66a01c0872c7098d437c4474b23a9444095d43b6bfdb2ef5b"
  }
});
