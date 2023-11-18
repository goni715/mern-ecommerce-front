import store from "../redux/store/store";
import {HideLoader, HideLoading, ShowLoader, ShowLoading} from "../redux/state-slice/settingsSlice";
import {BaseURL} from "../helper/config";
import {ErrorToast, } from "../helper/ValidationHelper";
import {getToken} from "../helper/SessionHelper";
import axios from "axios";
import {
    SetBlogCategoryID,
    SetBlogDesc,
    SetBlogImage,
    SetBlogList,
    SetBlogName,
    SetFilterBlogs
} from "../redux/state-slice/blogSlice";
const AxiosHeader={headers:{"token":getToken()}}




//BlogList
export async function BlogListRequest() {
    try {

        //store.dispatch(ShowLoader())
        let URL = BaseURL+"/GetAllBlogs";
        const res = await axios.get(URL)
        //store.dispatch(HideLoader())

        if (res.status === 200 && res.data['status'] === "success") {
            if (res.data['data'].length > 0) {
                store.dispatch(SetBlogList(res.data['data']))
            } else {
                store.dispatch(SetBlogList([]))
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




//BlogList
export async function FilterBlogsRequest() {
    try {
        store.dispatch(ShowLoader())
        store.dispatch(ShowLoading())
        let URL = BaseURL+"/GetAllBlogs";
        const res = await axios.get(URL)
        store.dispatch(HideLoader())
        store.dispatch(HideLoading())

        if (res.status === 200 && res.data['status'] === "success") {
            if (res.data['data'].length > 0) {
                store.dispatch(SetFilterBlogs(res.data['data']))
            } else {
                store.dispatch(SetFilterBlogs([]))
            }
        } else {
            ErrorToast("Something Went Wrong")
        }
    }
    catch (e) {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        store.dispatch(HideLoading())
    }
}



export async function GetBlogRequest(ObjectID) {
    try {
        store.dispatch(ShowLoader())
        let URL = BaseURL+"/GetABlog/"+ObjectID;
        const res = await axios.get(URL)
        store.dispatch(HideLoader())
        if (res.status === 200 && res.data['status'] === "success") {
            let blog = res.data['data'][0];
            store.dispatch(SetBlogName(blog['BlogName']));
            store.dispatch(SetBlogDesc(blog['description']));
            store.dispatch(SetBlogCategoryID(blog['CategoryID']));
            store.dispatch(SetBlogImage(blog['images']));
            return true;
        } else {
            debugger;
            ErrorToast("Request Fail ! Try Again")
            return false;
        }
    }
    catch (e) {
        debugger;
        store.dispatch(HideLoader())
        ErrorToast("Something Went Wrong")
        return  false
    }
}













