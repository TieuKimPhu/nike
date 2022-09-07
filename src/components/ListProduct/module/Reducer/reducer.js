import * as ActionType from "../Contants/contants";
const GenderAndTypeProduct = JSON.parse(localStorage.getItem("GenderAndTypeProduct"))
const search = JSON.parse(localStorage.getItem("search"))
let initialState = {
    typeProduct: GenderAndTypeProduct?.typeProduct,
    gender: GenderAndTypeProduct?.gender,
    filterColor: [],
    filterSize: [],
    data: [],
    dataSort: [],
    dataFilter: [],
    sortByTitle: "",
    dataSearchList: [],
    dataSearchInput: search === null ? [] : search,
    isLoading: false,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionType.CHANGE_GENDER_TYPEPRODUCT:
            state.gender = payload.gender;
            state.typeProduct = payload.typeProduct;
            localStorage.setItem("GenderAndTypeProduct", JSON.stringify({ gender: state.gender, typeProduct: state.typeProduct }));
            break;
        case ActionType.FETCH_API_LISTPRODUCT:
            state.data = payload;
            state.dataSort = payload;
            state.dataFilter = payload;
            break;
        case ActionType.SORT_DATA:
            state.dataSort = payload;
            break;
        case ActionType.FILTER_COLOR_DATA:
            state.dataFilter = payload;
            break;
        case ActionType.FILTER_COLOR:
            state.filterColor = payload.filterColor;
            break;
        case ActionType.FILTER_SIZE:
            state.filterSize = payload.filterSize;
            break;
        case ActionType.SORT_BY_TITLE:
            state.sortByTitle = payload;
            break;
        case ActionType.DATA_SEARCH:
            state.dataSearchList = payload;
            break;
        case ActionType.DATA_SEARCH_INPUT:
            state.dataSearchInput = payload;
            break;
        case ActionType.IS_LOADING_LIST_PRODUCT:
            state.isLoading = payload;
            break;
        default:
            break;
    }
    return { ...state };
};

export default reducer;