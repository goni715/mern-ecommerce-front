import store from "../redux/store/store";
import {HideLoader, ShowLoader} from "../redux/state-slice/settingsSlice";
import {BaseURL} from "../helper/config";
import {ErrorToast} from "../helper/ValidationHelper";
import axios from "axios";
import {SetBlogCategoryList} from "../redux/state-slice/blogCategorySlice";







//Blog Category List
export async function BlogCategoryListRequest() {
    try {
        //store.dispatch(ShowLoader())
        let URL = BaseURL+"/GetAllBlogCategory";

        const res = await axios.get(URL)
        //store.dispatch(HideLoader())

        if (res.status === 200 && res.data['status'] === "success") {
            if (res.data['data'].length > 0) {
                store.dispatch(SetBlogCategoryList(res.data['data']))
            } else {
                store.dispatch(SetBlogCategoryList([]))
            }
        } else {
            ErrorToast("Something Went Wrong")
        }
    }
    catch (e) {
        ErrorToast("Something Went Wrong")
        //store.dispatch(HideLoader())
    }
}












