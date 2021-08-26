import axios from "configs/axios";

const media = {
  upload: (image) => axios.post(`/media`, { image }),
};

export default media;
