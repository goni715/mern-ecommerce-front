
import store from "../redux/store/store";
import {HideLoader, ShowLoader} from "../redux/state-slice/settingsSlice";
import {BaseURL} from "../helper/config";
import axios from "axios";
import {ErrorToast} from "../helper/ValidationHelper";
import {SetProductCategoryList} from "../redux/state-slice/productCategorySlice";






//Product Category List
export async function ProductCategoryListRequest() {

    try {
        //store.dispatch(ShowLoader())
        let URL = BaseURL+"/GetAllProductCategory";
        const res = await axios.get(URL)
        //store.dispatch(HideLoader())

        if (res.status === 200 && res.data['status'] === "success") {
            if (res.data['data'].length > 0) {
                store.dispatch(SetProductCategoryList(res.data['data']))
            } else {
                store.dispatch(SetProductCategoryList([]))
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














