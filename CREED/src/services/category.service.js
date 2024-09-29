import toast from "react-hot-toast";
import { cateogryEndpoints } from "./apiEndpoints.js";
import { apiConnector } from "./apiconnector.js";
export async function getAllCategories() {
  let toastId;
  let result = [];
  try {
    const response = await apiConnector(
      cateogryEndpoints.GET_CATEGORIES.req,
      cateogryEndpoints.GET_CATEGORIES.url,
    );
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    result = response.data.category;
  } catch (error) {
    toastId = toast.error("Could Not Load Categories");
  }
  toast.dismiss(toastId);
  return result;
}
