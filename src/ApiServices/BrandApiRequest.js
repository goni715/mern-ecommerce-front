
import store from "../redux/store/store";
import {HideLoader, ShowLoader} from "../redux/state-slice/settingsSlice";
import {BaseURL} from "../helper/config";
import {ErrorToast} from "../helper/ValidationHelper";
import {getToken} from "../helper/SessionHelper";
import axios from "axios";
import {SetBrandList} from "../redux/state-slice/brandSlice";
const AxiosHeader={headers:{"token":getToken()}}







//BrandList
export async function BrandListRequest() {
    try {
        //store.dispatch(ShowLoader())
        let URL = BaseURL+"/GetAllBrand";

        const res = await axios.get(URL,AxiosHeader)
        //store.dispatch(HideLoader())

        if (res.status === 200 && res.data['status'] === "success") {
            if (res.data['data'].length > 0) {
                store.dispatch(SetBrandList(res.data['data']))
            } else {
                store.dispatch(SetBrandList([]))
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







